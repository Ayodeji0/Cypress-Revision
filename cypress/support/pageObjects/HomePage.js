

class HomePage {
  goTo(Baseurl) {
    cy.visit(Baseurl);
  }

  login(username, password) {
    cy.get("#username").type(username);
    cy.get("#password").type(password);
    cy.contains("Sign In").click();
    return new ProductPage();
  }
}
export default HomePage;