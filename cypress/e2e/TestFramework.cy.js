/// <reference types="Cypress" />

describe('End to End e-commerceTest', () => {
  it('Submit Order', () => {
const productName = "Nokia Edge"
  cy.visit("https://rahulshettyacademy.com/loginpagePractise/#") 
  cy.get("#username").type("rahulshettyacademy")
  cy.get("#password").type("learning")
  cy.contains("Sign In").click()
  cy.contains("Shop Name").should('be.visible')
  cy.get('app-card').should('have.length', 4)
  cy.get('app-card').filter(`:contains("${productName}")`).then($element=>{
    cy.wrap($element).should('button', 'Add').click()
  })
  });
})