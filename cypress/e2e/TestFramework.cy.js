/// <reference types="Cypress" />

// Test suite for E2E e-commerce workflow
describe('End to End e-commerceTest', function () {

  // Hook: runs once before all tests in this suite
  before(function () {
    // Load test data from fixtures/example.json
    cy.fixture('example').then((data) => {
      this.data = data   // Assign to Mocha's context
    })
  })

  // Single test case: Login, add product, checkout, and validate order success
  it('Submit Order', function () {

    // Product to add to cart (from fixture)
    const productName = this.data.productName

    // Step 1: Visit the login page
   
    const homepage = new HomePage()
    homepage.goTo("https://rahulshettyacademy.com/loginpagePractise/#")
    homepage.login(this.data.username, this.data.password)
    // Step 5: Verify successful login by checking "Shop Name" is visible
    cy.contains("Shop Name").should('be.visible')

    // Step 6: Verify that exactly 4 product cards are displayed
    cy.get('app-card').should('have.length', 4)

    // Step 7: From all product cards, filter the one that contains the product name
    cy.get('app-card')
      .filter(`:contains("${productName}")`)
      .then($element => {
        // Step 8: Inside the matched product card, find and click the "Add" button
        cy.wrap($element).contains('button', 'Add').click()
      })

    // Step 9: Click the "Checkout" link to go to cart page
    cy.contains('a', 'Checkout').click()

    // Step 10: Initialize a sum variable to verify total later
    let sum = 0

    // Step 11: Loop through each product price in the cart
    cy.get('tr td:nth-child(4) strong').each($e1 => {
      const amount = Number($e1.text().split(" ")[1].trim()) // Extract numeric value
      sum = sum + amount
    }).then(() => {
      // Step 12: Validate that total cart amount is reasonable (< 200000 for this test)
      expect(sum).to.be.lessThan(200000)
    })

    // Step 13: Proceed to final checkout
    cy.contains('button', 'Checkout').click()

    // Step 14: Enter shipping country
    cy.get("#country").type("India")

    // Step 15: Select the first suggested country option
    cy.get(".suggestions ul li a").click()

    // Step 16: Click the confirm order button
    cy.get(".btn-success").click()

    // Step 17: Verify success message is displayed after order placement
    cy.get(".alert-success").should('contain', 'Success')
  })
})
