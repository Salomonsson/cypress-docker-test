export class Navigation {

    static GoToUrl(path, errorMessage = "Navigation GoToUrl failed")
    {
      try {
        cy.visit(path);
      } catch (error) {
        console.error("Message: " + errorMessage);
        console.error(error);
      }
    }

    // Get
    static GetTextFromElement(selector) {
      return cy.get(selector);
    }

    // Click
    static ClickElementById(selector, errorMessage = 'Element not found: ClickElementById') {
      cy.get('body', { timeout: 5000 }).then($body => {
        
        const elementExists = $body.find(selector).length > 0;
        if (elementExists) {
          cy.get(selector).click();
        } else {
          Cypress.log({
            name: '@ClickElementById @Navigation',
            displayName: '❌ Element Not Found',
            message: errorMessage,
            consoleProps: () => ({ selector })
          });
    
          throw new Error(errorMessage);
        }
      });
    }
    
    static ClickLinkByText(text, errorMessage = "Navigation ClickLinkByText was not found"){
      try {
        cy.contains(text).click();
      } catch (error) {
        console.error("Message: " + errorMessage);
        console.error(error);
      }
    }

    static WaitForElementToExist(element, errorMessage = "Navigation WaitForElementToExist Element was not found")
    {
      try {
        cy.get(element, { timeout: 10000 }).should('be.visible');
      } catch (error) {
        console.error("Message: " + errorMessage);
        console.error(error);
      }
    }

    // Other
    static AddText(element, text)
    {
      cy.get(element).type(text);
    }

    classMethod() {
      console.log( `The value was parent function`);
      Navigation.GoToUrl('/test-ok');
      
      setTimeout(() => {
        console.log("Delayed for 1 second.");
      }, 2500);      
    }
}  