package com.app.configuration;

import java.util.Properties;
import com.app.utility.ResourceFetchUtility;

public class PropertyFileReader {

	public Properties properties = new Properties();

	public PropertyFileReader() {
		try {

			properties.load(ResourceFetchUtility
					.getResourcePathInputStream("/src/main/resources/configurationfiles/checkoutTestData.properties"));
			properties.load(ResourceFetchUtility
					.getResourcePathInputStream("/src/main/resources/configurationfiles/checkoutLocators.properties"));

		} catch (Exception ex) {
			System.out.println("Load property file failed.." + "\n" + ex);
		}

	}

}
