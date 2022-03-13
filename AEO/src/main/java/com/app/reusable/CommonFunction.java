package com.app.reusable;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import com.app.base.TestBase;
import com.app.helper.UserDefinedExceptionHelper.ObjectNotFoundException;

public class CommonFunction extends TestBase {	

	public void clearsAndEnterTextToElement(WebElement webElement, String text, String element) {
		try {
			webElement.clear();
			webElement.sendKeys(text);
			System.out.println("The Text " + '"' + text + '"' + " is entered into the WebElement " + '"' + element + '"');
		} catch (IllegalArgumentException ex) {
			System.out.println("Text is not entered into the WebElement " + '"' + element + '"' + "\n" + ex);
			Assert.assertFalse(true);
		}
	}

	public void clickElement(WebElement webElement, String element1) throws Exception {
		try {
			webElement.click();
			System.out.println("The WebElement " + '"' + element1 + '"' + " is clicked");
		} catch (Exception StaleElementReferenceException) {
			System.out.println("StaleElementReferenceException is captured..");
			webElement = getWebElement(element1);
			webElement.click();
		}
	}
 
	public void enterTextToElementFromProperty(WebElement webElement, String testData, String element)
			throws ObjectNotFoundException {
		try {
			String dataFromProperty = null;

			String envName = System.getProperty("Environment_Name");
			if (envName != null) {
				if (testData.contains("REGULAR") | testData.contains("ferg") || testData.contains("pw")) {
					testData = envName + "_" + testData;
				}
				dataFromProperty = getTestData(testData);
			} else {
				dataFromProperty = getTestData(testData);
			}
			webElement.clear();
			webElement.sendKeys(dataFromProperty);
			System.out.println("The Text " + '"' + dataFromProperty + '"' + " is entered into the WebElement " + '"' + element
					+ '"');
		} catch (IllegalArgumentException ex) {
			System.out.println("Text is not entered into the WebElement " + '"' + element + '"' + "\n" + ex);
			Assert.assertFalse(true);
		}
	}
	
	public void selectDropDownByValue(WebElement element, String value, String element1) {
		try {
			Select select = new Select(element);
			select.selectByValue(value);
			System.out.println("The Value " + '"' + value + '"' + " is selected from Webelement " + '"' + element1 + '"');
		} catch (Exception ex) {
			System.out.println("The Value " + '"' + value + '"' + " is not selected from Webelement " + '"' + element1 + '"'
					+ "\n" + ex);
			Assert.assertFalse(true);
		}
	}
	
	public void enterKey() {
		try {
			Actions action = new Actions(TestBase.driver);
			action.sendKeys(Keys.ENTER).perform();
			action.sendKeys(Keys.ENTER).release();
			System.out.println("The Enter key is pressed..");
		} catch (Exception ex) {
			System.out.println("The Enter key is not pressed" + "\n" + ex);
			Assert.assertFalse(true);
		}
	}
}
