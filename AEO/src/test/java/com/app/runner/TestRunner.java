package com.app.runner;

import cucumber.api.CucumberOptions;

import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(features = "classpath:feature",
		tags = { "@checkout" },
		glue = { "com/app/stepdefinition", "com/app/base" }, 
		plugin = { "pretty","html:target/cucumber-reports/cucumber-pretty", 
				"json:target/cucumber-reports/CucumberTestReport.json"},
		monochrome = true)
				

public class TestRunner extends AbstractTestNGCucumberTests {

}