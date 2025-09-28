/// <reference types="Cypress" />
describe('JWT session', () => {
  it('is logged in via local storage', () => {
    cy.LoginAPI().then(() => {
      cy.visit('/', {
        onBeforeLoad: (window) => {
          window.localStorage.setItem('token', Cypress.env('token'))
        },
      })
    })
  })

   cy.get(".card-body b").eq(1).then(function(ele)
      {
      productName =  ele.text();
      })
    cy.get(".card-body button:last-of-type").eq(1).click();
    cy.get("[routerlink*='cart']").click();
    cy.contains("Checkout").click();
    cy.get("[placeholder*='Country']").type("ind")
    cy.get('.ta-results button').each(($e1, index, $list) => {

      if($e1.text()===" India")
      {
          cy.wrap($e1).click()
      }
  })
    cy.get(".action__submit").click();
    cy.wait(2000)
    cy.get(".order-summary button").click();
})

 