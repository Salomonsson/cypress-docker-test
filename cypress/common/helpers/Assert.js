class Assert {

    ShouldHaveText(current, expectedText) {
        current.should('be.visible').and('have.text', expectedText);
    }

    ShouldContainText(current, partialText) {
        current.should('be.visible').and('contain.text', partialText);
    }

    ShouldBeVisible(current) {
        current.should('exist').and('be.visible');
    }

    ShouldNotExist(current) {
        current.should('not.visible');
    }

    ShouldNotExist(selector) {
        cy.get('body').then($body => {
            if ($body.find(selector).length) {
                cy.get(selector).should('not.be.visible');
            } else {
                expect(true).to.be.true; // No element found, passes
            }
        });
    }
}

export default new Assert();