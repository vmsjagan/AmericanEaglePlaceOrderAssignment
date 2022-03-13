package com.app.stepdefinition;

import java.util.concurrent.TimeUnit;
import com.app.base.TestBase;
import com.app.module.CheckoutPage;
import com.app.reusable.CommonFunction;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {

	TestBase testBase = new TestBase();
	CommonFunction commonFunction = new CommonFunction();
	CheckoutPage checkoutPage = new CheckoutPage();

	@Given("^customer is on AEO login page$")
	public void customerIsOnCRMSSOLoginPage() throws Throwable {
		testBase.getAEOURL();
	}
	
	@When("^customer clicks \"([^\"]*)\"$")
	public void customer_clicks(String element1) throws Throwable {
		commonFunction.clickElement(testBase.getWebElement(element1), element1);
	}
	
	@Then("^user waits for \"([^\"]*)\" seconds$")
	public void customerwaitsforseconds(long time) throws Throwable {
		TimeUnit.SECONDS.sleep(time);
	}
	
	@When("^customer enters \"([^\"]*)\" in \"([^\"]*)\"$")
	public void customer_enters_in(String testData, String element1) throws Throwable {
		commonFunction.enterTextToElementFromProperty(testBase.getWebElement(element1), testData, element1);
	}
	
	@When("^customer clicks Enter key$")
	public void customer_clicks_Enter_key() throws Throwable {
		commonFunction.enterKey();
	}
	
	@Then("^customer adds shipping address$")
	public void customer_adds_shipping_address() throws Throwable {
		checkoutPage.addShippingAddress();
	}
	
	@And("^customer closes browser$") 
	public void customer_closes_browser() throws Throwable {
		testBase.closeBrowser();
	}
	

}
