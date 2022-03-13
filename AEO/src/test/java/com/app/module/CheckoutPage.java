package com.app.module;


import java.util.concurrent.TimeUnit;
import com.app.reusable.CommonFunction;


public class CheckoutPage extends CommonFunction {

	CommonFunction cf = new CommonFunction();

	public void addShippingAddress() throws Exception {
		String[] elements = { "firstName", "lastName", "street", "street1", "city", "zipcode" };
		String[] values = { "fn", "Ln", "streetAddress", "apt", "cityName", "zip" };
		for (int i = 0; i < elements.length; i++) {
			clearsAndEnterTextToElement(getWebElement(elements[i]), getTestData(values[i]), elements[i]);					
			TimeUnit.SECONDS.sleep(3);
		}
		cf.selectDropDownByValue(getWebElement("stateDropDown"), getTestData("state"), "stateDropDown");
	}
	
	

}