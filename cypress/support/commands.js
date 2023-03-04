Cypress.Commands.add('fillMandatoryFieldsAndSubmit', user => {
    cy.get('#firstName').type('Diego')
    cy.get('#lastName').type('Machado')
    cy.get('#email').type('machado.dc@gmail.com')
    cy.get('#open-text-area').type('Testando Cypress')
    cy.contains('button', 'Enviar').click()
    
})