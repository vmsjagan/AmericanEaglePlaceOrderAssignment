$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/Checkout/placeOrder.feature");
formatter.feature({
  "line": 2,
  "name": "Place Order",
  "description": "",
  "id": "place-order",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@checkout"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify if an user is able to place an order with different payment methods",
  "description": "",
  "id": "place-order;verify-if-an-user-is-able-to-place-an-order-with-different-payment-methods",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "customer is on AEO login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user waits for \"8\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "customer clicks \"signInIcon\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "customer clicks \"signInButton\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "customer enters \"userName\" in \"Email\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "customer enters \"password\" in \"passwordField\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "customer clicks \"loginButton\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user waits for \"4\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "customer clicks \"closeSideTray\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "customer clicks \"searchIcon\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "customer enters \"itemDescription\" in \"searchField\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "customer clicks Enter key",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "customer clicks \"item\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user waits for \"4\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "customer clicks \"sizeDropDown\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "customer clicks \"sizeValue\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "customer clicks \"addtoBagButton\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "customer clicks \"viewBag\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user waits for \"4\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "customer clicks \"acceptCookies\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "customer clicks \"proceedToCheckoutButton\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user waits for \"4\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "customer adds shipping address",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "customer enters \"\u003cccNumber\u003e\" in \"cardNumber\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "customer enters \"\u003ccardExp\u003e\" in \"expDate\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "customer enters \"\u003cpin\u003e\" in \"cvv\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "customer enters \"number\" in \"phoneNumber\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user waits for \"4\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "customer clicks \"suggestedAddress\"",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user waits for \"5\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "customer clicks \"placeOrderButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user waits for \"4\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "customer closes browser",
  "keyword": "And "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "place-order;verify-if-an-user-is-able-to-place-an-order-with-different-payment-methods;",
  "rows": [
    {
      "cells": [
        "ccNumber",
        "cardExp",
        "pin"
      ],
      "line": 40,
      "id": "place-order;verify-if-an-user-is-able-to-place-an-order-with-different-payment-methods;;1"
    },
    {
      "cells": [
        "visa",
        "visaExp",
        "visaCVV"
      ],
      "line": 41,
      "id": "place-order;verify-if-an-user-is-able-to-place-an-order-with-different-payment-methods;;2"
    },
    {
      "cells": [
        "master",
        "mastExp",
        "mastCvv"
      ],
      "line": 42,
      "id": "place-order;verify-if-an-user-is-able-to-place-an-order-with-different-payment-methods;;3"
    },
    {
      "cells": [
        "amex",
        "amexExp",
        "amexCvv"
      ],
      "line": 43,
      "id": "place-order;verify-if-an-user-is-able-to-place-an-order-with-different-payment-methods;;4"
    },
    {
      "cells": [
        "Discover",
        "disExp",
        "disCvv"
      ],
      "line": 44,
      "id": "place-order;verify-if-an-user-is-able-to-place-an-order-with-different-payment-methods;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 41,
  "name": "Verify if an user is able to place an order with different payment methods",
  "description": "",
  "id": "place-order;verify-if-an-user-is-able-to-place-an-order-with-different-payment-methods;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@checkout"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "customer is on AEO login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user waits for \"8\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "customer clicks \"signInIcon\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "customer clicks \"signInButton\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "customer enters \"userName\" in \"Email\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "customer enters \"password\" in \"passwordField\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "customer clicks \"loginButton\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user waits for \"4\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "customer clicks \"closeSideTray\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "customer clicks \"searchIcon\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "customer enters \"itemDescription\" in \"searchField\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "customer clicks Enter key",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "customer clicks \"item\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user waits for \"4\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "customer clicks \"sizeDropDown\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "customer clicks \"sizeValue\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "customer clicks \"addtoBagButton\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "customer clicks \"viewBag\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user waits for \"4\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "customer clicks \"acceptCookies\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "customer clicks \"proceedToCheckoutButton\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user waits for \"4\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "customer adds shipping address",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "customer enters \"visa\" in \"cardNumber\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "customer enters \"visaExp\" in \"expDate\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "customer enters \"visaCVV\" in \"cvv\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "customer enters \"number\" in \"phoneNumber\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user waits for \"4\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "customer clicks \"suggestedAddress\"",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user waits for \"5\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "customer clicks \"placeOrderButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user waits for \"4\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "customer closes browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.customerIsOnCRMSSOLoginPage()"
});
formatter.result({
  "duration": 19579779500,
  "error_message": "java.lang.AssertionError: expected [false] but found [true]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertFalse(Assert.java:63)\r\n\tat org.testng.Assert.assertFalse(Assert.java:73)\r\n\tat com.app.base.TestBase.getAEOURL(TestBase.java:51)\r\n\tat com.app.stepdefinition.StepDefinition.customerIsOnCRMSSOLoginPage(StepDefinition.java:25)\r\n\tat ✽.Given customer is on AEO login page(feature/Checkout/placeOrder.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 16
    }
  ],
  "location": "StepDefinition.customerwaitsforseconds(long)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "signInIcon",
      "offset": 17
    }
  ],
  "location": "StepDefinition.customer_clicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "signInButton",
      "offset": 17
    }
  ],
  "location": "StepDefinition.customer_clicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "userName",
      "offset": 17
    },
    {
      "val": "Email",
      "offset": 31
    }
  ],
  "location": "StepDefinition.customer_enters_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 17
    },
    {
      "val": "passwordField",
      "offset": 31
    }
  ],
  "location": "StepDefinition.customer_enters_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 17
    }
  ],
  "location": "StepDefinition.customer_clicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDefinition.customerwaitsforseconds(long)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "closeSideTray",
      "offset": 17
    }
  ],
  "location": "StepDefinition.customer_clicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "searchIcon",
      "offset": 17
    }
  ],
  "location": "StepDefinition.customer_clicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "itemDescription",
      "offset": 17
    },
    {
      "val": "searchField",
      "offset": 38
    }
  ],
  "location": "StepDefinition.customer_enters_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.customer_clicks_Enter_key()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "item",
      "offset": 17
    }
  ],
  "location": "StepDefinition.customer_clicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDefinition.customerwaitsforseconds(long)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sizeDropDown",
      "offset": 17
    }
  ],
  "location": "StepDefinition.customer_clicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sizeValue",
      "offset": 17
    }
  ],
  "location": "StepDefinition.customer_clicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "addtoBagButton",
      "offset": 17
    }
  ],
  "location": "StepDefinition.customer_clicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "viewBag",
      "offset": 17
    }
  ],
  "location": "StepDefinition.customer_clicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDefinition.customerwaitsforseconds(long)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "acceptCookies",
      "offset": 17
    }
  ],
  "location": "StepDefinition.customer_clicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "proceedToCheckoutButton",
      "offset": 17
    }
  ],
  "location": "StepDefinition.customer_clicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDefinition.customerwaitsforseconds(long)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.customer_adds_shipping_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "visa",
      "offset": 17
    },
    {
      "val": "cardNumber",
      "offset": 27
    }
  ],
  "location": "StepDefinition.customer_enters_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "visaExp",
      "offset": 17
    },
    {
      "val": "expDate",
      "offset": 30
    }
  ],
  "location": "StepDefinition.customer_enters_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "visaCVV",
      "offset": 17
    },
    {
      "val": "cvv",
      "offset": 30
    }
  ],
  "location": "StepDefinition.customer_enters_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "number",
      "offset": 17
    },
    {
      "val": "phoneNumber",
      "offset": 29
    }
  ],
  "location": "StepDefinition.customer_enters_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDefinition.customerwaitsforseconds(long)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "suggestedAddress",
      "offset": 17
    }
  ],
  "location": "StepDefinition.customer_clicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDefinition.customerwaitsforseconds(long)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "placeOrderButton",
      "offset": 17
    }
  ],
  "location": "StepDefinition.customer_clicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDefinition.customerwaitsforseconds(long)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.customer_closes_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 42,
  "name": "Verify if an user is able to place an order with different payment methods",
  "description": "",
  "id": "place-order;verify-if-an-user-is-able-to-place-an-order-with-different-payment-methods;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@checkout"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "customer is on AEO login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user waits for \"8\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "customer clicks \"signInIcon\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "customer clicks \"signInButton\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "customer enters \"userName\" in \"Email\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "customer enters \"password\" in \"passwordField\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "customer clicks \"loginButton\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user waits for \"4\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "customer clicks \"closeSideTray\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "customer clicks \"searchIcon\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "customer enters \"itemDescription\" in \"searchField\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "customer clicks Enter key",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "customer clicks \"item\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user waits for \"4\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "customer clicks \"sizeDropDown\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "customer clicks \"sizeValue\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "customer clicks \"addtoBagButton\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "customer clicks \"viewBag\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user waits for \"4\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "customer clicks \"acceptCookies\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "customer clicks \"proceedToCheckoutButton\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user waits for \"4\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "customer adds shipping address",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "customer enters \"master\" in \"cardNumber\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "customer enters \"mastExp\" in \"expDate\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "customer enters \"mastCvv\" in \"cvv\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "customer enters \"number\" in \"phoneNumber\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user waits for \"4\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "customer clicks \"suggestedAddress\"",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user waits for \"5\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "customer clicks \"placeOrderButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user waits for \"4\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "customer closes browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.customerIsOnCRMSSOLoginPage()"
});
formatter.result({
  "duration": 2449198100,
  "error_message": "java.lang.AssertionError: expected [false] but found [true]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertFalse(Assert.java:63)\r\n\tat org.testng.Assert.assertFalse(Assert.java:73)\r\n\tat com.app.base.TestBase.getAEOURL(TestBase.java:51)\r\n\tat com.app.stepdefinition.StepDefinition.customerIsOnCRMSSOLoginPage(StepDefinition.java:25)\r\n\tat ✽.Given customer is on AEO login page(feature/Checkout/placeOrder.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 16
    }
  ],
  "location": "StepDefinition.customerwaitsforseconds(long)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "signInIcon",
      "offset": 17
    }
  ],
  "location": "StepDefinition.customer_clicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "signInButton",
      "offset": 17
    }
  ],
  "location": "StepDefinition.customer_clicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "userName",
      "offset": 17
    },
    {
      "val": "Email",
      "offset": 31
    }
  ],
  "location": "StepDefinition.customer_enters_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 17
    },
    {
      "val": "passwordField",
      "offset": 31
    }
  ],
  "location": "StepDefinition.customer_enters_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 17
    }
  ],
  "location": "StepDefinition.customer_clicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDefinition.customerwaitsforseconds(long)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "closeSideTray",
      "offset": 17
    }
  ],
  "location": "StepDefinition.customer_clicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "searchIcon",
      "offset": 17
    }
  ],
  "location": "StepDefinition.customer_clicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "itemDescription",
      "offset": 17
    },
    {
      "val": "searchField",
      "offset": 38
    }
  ],
  "location": "StepDefinition.customer_enters_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.customer_clicks_Enter_key()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "item",
      "offset": 17
    }
  ],
  "location": "StepDefinition.customer_clicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDefinition.customerwaitsforseconds(long)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sizeDropDown",
      "offset": 17
    }
  ],
  "location": "StepDefinition.customer_clicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sizeValue",
      "offset": 17
    }
  ],
  "location": "StepDefinition.customer_clicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "addtoBagButton",
      "offset": 17
    }
  ],
  "location": "StepDefinition.customer_clicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "viewBag",
      "offset": 17
    }
  ],
  "location": "StepDefinition.customer_clicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDefinition.customerwaitsforseconds(long)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "acceptCookies",
      "offset": 17
    }
  ],
  "location": "StepDefinition.customer_clicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "proceedToCheckoutButton",
      "offset": 17
    }
  ],
  "location": "StepDefinition.customer_clicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDefinition.customerwaitsforseconds(long)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.customer_adds_shipping_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "master",
      "offset": 17
    },
    {
      "val": "cardNumber",
      "offset": 29
    }
  ],
  "location": "StepDefinition.customer_enters_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "mastExp",
      "offset": 17
    },
    {
      "val": "expDate",
      "offset": 30
    }
  ],
  "location": "StepDefinition.customer_enters_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "mastCvv",
      "offset": 17
    },
    {
      "val": "cvv",
      "offset": 30
    }
  ],
  "location": "StepDefinition.customer_enters_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "number",
      "offset": 17
    },
    {
      "val": "phoneNumber",
      "offset": 29
    }
  ],
  "location": "StepDefinition.customer_enters_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDefinition.customerwaitsforseconds(long)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "suggestedAddress",
      "offset": 17
    }
  ],
  "location": "StepDefinition.customer_clicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDefinition.customerwaitsforseconds(long)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "placeOrderButton",
      "offset": 17
    }
  ],
  "location": "StepDefinition.customer_clicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDefinition.customerwaitsforseconds(long)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.customer_closes_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 43,
  "name": "Verify if an user is able to place an order with different payment methods",
  "description": "",
  "id": "place-order;verify-if-an-user-is-able-to-place-an-order-with-different-payment-methods;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@checkout"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "customer is on AEO login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user waits for \"8\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "customer clicks \"signInIcon\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "customer clicks \"signInButton\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "customer enters \"userName\" in \"Email\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "customer enters \"password\" in \"passwordField\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "customer clicks \"loginButton\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user waits for \"4\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "customer clicks \"closeSideTray\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "customer clicks \"searchIcon\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "customer enters \"itemDescription\" in \"searchField\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "customer clicks Enter key",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "customer clicks \"item\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user waits for \"4\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "customer clicks \"sizeDropDown\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "customer clicks \"sizeValue\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "customer clicks \"addtoBagButton\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "customer clicks \"viewBag\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user waits for \"4\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "customer clicks \"acceptCookies\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "customer clicks \"proceedToCheckoutButton\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user waits for \"4\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "customer adds shipping address",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "customer enters \"amex\" in \"cardNumber\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "customer enters \"amexExp\" in \"expDate\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "customer enters \"amexCvv\" in \"cvv\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "customer enters \"number\" in \"phoneNumber\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user waits for \"4\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "customer clicks \"suggestedAddress\"",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user waits for \"5\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "customer clicks \"placeOrderButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user waits for \"4\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "customer closes browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.customerIsOnCRMSSOLoginPage()"
});
