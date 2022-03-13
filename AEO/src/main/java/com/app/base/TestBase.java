package com.app.base;

import java.time.Duration;
import java.util.function.Function;
import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotVisibleException;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import org.testng.Assert;
import com.app.configuration.PropertyFileReader;

import com.app.helper.UserDefinedExceptionHelper.ElementNotFoundException;
import com.app.helper.UserDefinedExceptionHelper.ObjectNotFoundException;

public class TestBase {

	public static WebDriver driver;
	protected PropertyFileReader propertyFileReader = new PropertyFileReader();

	public void getAEOURL() throws Exception {
		System.out.println("Chrome browser is getting invoked");
		String aeoURL = getTestData("AEOURL");
		try {
			String windowsDriverPath = "C:/Users/ABD9908/OneDrive - MyDigitalSpace/Desktop/Workspace/CodeSpace/qa-bridge-automation/AEO/src/main/resources/drivers/windows/chromedriver.exe";
			System.setProperty("webdriver.chrome.driver", windowsDriverPath);
			driver = new ChromeDriver();
			driver.get(aeoURL);
			driver.manage().window().maximize();
			System.out.println("The qeo URL from runtime is invoked");
		} catch (Exception ex) {
			System.out.println("The aeo application url from runtime failed to load" + "\n" + ex);
			Assert.assertFalse(true);
		}

	}

	public void closeBrowser() {
		driver.quit();
	}

	public static WebElement getLocator(String locator, String ObjectElement) throws ElementNotFoundException {
		String split[] = locator.split(":", 2);
		String locatorType = split[0].trim();
		String locatorValue = split[1].trim();
		WebElement element = null;
		if (locatorValue != null) {
			Wait<WebDriver> wait = new FluentWait<WebDriver>(TestBase.driver).withTimeout(Duration.ofSeconds(25))
					.pollingEvery(Duration.ofSeconds(2)).ignoring(NoSuchElementException.class)
					.ignoring(ElementNotVisibleException.class).ignoring(StaleElementReferenceException.class)
					.ignoring(WebDriverException.class);

			element = wait.until(new Function<WebDriver, WebElement>() {
				public WebElement apply(WebDriver driver) {
					By value = null;
					if (locatorType.equalsIgnoreCase("id")) {
						value = By.id(locatorValue);
					} else if (locatorType.equalsIgnoreCase("className")) {
						value = By.className(locatorValue);
					} else if (locatorType.equalsIgnoreCase("xpath")) {
						value = By.xpath(locatorValue);
					} else {
						try {
							throw new Exception("Unknown Locator Type - " + '"' + locatorType + '"');
						} catch (Exception e) {
							e.printStackTrace();
						}
					}
					// logger.info("driver.findElement(value) : " + driver.findElement(value));
					return driver.findElement(value);
				}
			});
		}
		return element;
	}

	public WebElement getWebElement(String object) throws Exception, ObjectNotFoundException {
		try {
			if (object != null) {
				System.out.println("Object fetched from property file " + '"' + object + '"');
			}
		} catch (Exception ex) {
			System.out.println('"' + object + " -  is not found in object.properties" + '"');

		}
		return getLocator(propertyFileReader.properties.getProperty(object), object);
	}

	public String getTestData(String property) throws ObjectNotFoundException {
		String dataFromPropFile = null;
		try {
			if (property != null) {
				String propData = propertyFileReader.properties.getProperty(property);
				// logger.info("The test data from property file is " + '"' + propData + '"');
				dataFromPropFile = propData.trim();

			}
		} catch (Exception ex) {
			System.out.println('"' + property + " -  is not found in testdata.properties" + '"');

		}
		return dataFromPropFile;
	}

}