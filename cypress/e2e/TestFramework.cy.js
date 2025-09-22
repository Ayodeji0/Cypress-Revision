/// <reference types="Cypress" />

describe("End to End e-commerceTest", function () {
  before(function () {
    cy.fixture("example").then((data) => {
      this.data = data;
      this.homepage = new HomePage();
    });
  });

  it("Submit Order", function () {
    const productName = this.data.productName;
    this.homepage.goTo("https://rahulshettyacademy.com/loginpagePractise/#");
    const productPage = this.homepage.login(
      this.data.username,
      this.data.password
    );

    productPage.pageValidation();
    productPage.getCardCount().should('have.length', 4);
    productPage.selectProduct(productName);
    productPage.selectFirstProduct();
    const cartPage = productPage.goToCart();
    cartPage.sumOfProducts().then(function (sum) {
      expect(sum).to.be.lessThan(200000);
    });


    cy.contains("button", "Checkout").click();

    cy.get("#country").type("India");

    cy.get(".suggestions ul li a").click();

    cy.get(".btn-success").click();

    cy.get(".alert-success").should("contain", "Success");
  });
});
