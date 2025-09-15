/// <reference types="Cypress" />
// Test suite for E2E e-commerce workflow
describe('End to End e-commerceTest', () => {

  // Single test case: Submit an order
  it('Submit Order', () => {

    // Product to add to cart
    const productName = "Nokia Edge"

    // Step 1: Visit the login page
    cy.visit("https://rahulshettyacademy.com/loginpagePractise/#") 

    // Step 2: Enter username
    cy.get("#username").type("ayodeji")

    // Step 3: Enter password
    cy.get("#password").type("learning")

    // Step 4: Click the Sign In button
    cy.contains("Sign In").click()

    // Step 5: Verify successful login by checking "Shop Name" is visible
    cy.contains("Shop Name").should('be.visible')

    // Step 6: Verify that exactly 4 product cards are displayed
    cy.get('app-card').should('have.length', 4)

    // Step 7: From all product cards, filter the one that contains the product name
    cy.get('app-card')
      .filter(`:contains("${productName}")`)
      .then($element => {
        
        // Step 8: Inside the matched product card, find and click the "Add" button
        // (fixed syntax: use contains() instead of should())
        cy.wrap($element).contains('button', 'Add').click()
      })
  })
})
