@checkout
Feature: Place Order

  Scenario Outline: Verify if an user is able to place an order with different payment methods
    Given customer is on AEO login page
    Then user waits for "8" seconds    
    Then customer clicks "signInIcon"
    Then customer clicks "signInButton"
    Then customer enters "userName" in "Email"
    Then customer enters "password" in "passwordField"
    Then customer clicks "loginButton"
    Then user waits for "4" seconds
    Then customer clicks "closeSideTray"
    Then customer clicks "searchIcon"
    Then customer enters "itemDescription" in "searchField"
    Then customer clicks Enter key
    Then customer clicks "item"
    Then user waits for "4" seconds
    Then customer clicks "sizeDropDown"
    Then customer clicks "sizeValue"
    Then customer clicks "addtoBagButton"
    Then customer clicks "viewBag"
    Then user waits for "4" seconds
    Then customer clicks "acceptCookies"
    Then customer clicks "proceedToCheckoutButton"
    Then user waits for "4" seconds
    Then customer adds shipping address
    Then customer enters "<ccNumber>" in "cardNumber"
    Then customer enters "<cardExp>" in "expDate"
    Then customer enters "<pin>" in "cvv"    
    Then customer enters "number" in "phoneNumber"
    Then user waits for "4" seconds
    Then customer clicks "suggestedAddress"
    Then user waits for "5" seconds
    And customer clicks "placeOrderButton"
    Then user waits for "4" seconds
    And customer closes browser
    
    Examples: 
      |ccNumber   | cardExp  | pin		 |
      |visa  			| visaExp	 | visaCVV |
      |master			| mastExp	 | mastCvv |
      |amex				| amexExp  | amexCvv |
      |Discover		|	disExp   | disCvv	 |		

