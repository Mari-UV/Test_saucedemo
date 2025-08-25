# SauceDemo WebdriverIO Test

## Requirements
- Node.js v18+
- NPM
- WebdriverIO v9

## To run all tests
 **saucedemo.login.e2e.js**
 npx wdio run ./wdio.conf.js --spec ./test/specs/saucedemo.login.e2e.js

 **saucedemo.inventory.e2e.js**
 npx wdio run ./wdio.conf.js --spec ./test/specs/saucedemo.inventory.e2e.js

 **saucedemo.inventory-sort.e2e.js**
 npx wdio run ./wdio.conf.js --spec ./test/specs/saucedemo.inventory-sort.e2e.js

 **saucedemo.cart.e2e.js**
 npx wdio run ./wdio.conf.js --spec ./test/specs/saucedemo.cart.e2e.js

 **saucedemo.checkout.e2e.js**
 npx wdio run ./wdio.conf.js --spec ./test/specs/saucedemo.checkout.e2e.js

 **saucedemo.checkout-step-two.e2e.js**
 npx wdio run ./wdio.conf.js --spec ./test/specs/saucedemo.checkout-step-two.e2e.js

 **saucedemo.checkout.complete.e2e.js**
 npx wdio run ./wdio.conf.js --spec ./test/specs/saucedemo.checkout.complete.e2e.js

 **saucedemo.socialLinks.e2e.js** 
 npx wdio run ./wdio.conf.js --spec ./test/specs/saucedemo.socialLinks.e2e.js


## Project Structure
/test
  /specs
   **saucedemo.login.e2e.js**               # SauceDemo Login Page – Input and Login Verification
   **saucedemo.inventory.e2e.js**           # Add items to cart, check "Burger" button and Logout
   **saucedemo.inventory-sort.e2e.js**      # Verify sorting by name and price
   **saucedemo.cart.e2e.js**                # Cart tests: add/remove items, cart badge, checkout flow
   **saucedemo.checkout.e2e.js**            # Fill form and click on the "Continue" button
   **saucedemo.checkout-step-two.e2e.js**   # Check Total price and "Finish" button
   **saucedemo.checkout.complete.e2e.js**   # Verify "Back Home" button returns to products page
   **saucedemo.socialLinks.e2e.js**         # Social Media Links: verify "Twitter", "Facebook", "LinkedIn" icon on the footer 

/package.json
README.md
wdio.conf.js