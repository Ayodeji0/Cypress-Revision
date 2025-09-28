// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('submitFormDetails',()=>{
     cy.get("country").type("india")
        cy.get("suggestions ul li a").click()
        cy.get(".btn.success").click()
})

// Cypress.Commands.add("LoginAPI", () => {
//   cy.request("GET", "https://qa-ehrpm.automedsys.net/", {
//     "userEmail": "deji+2@automedsys.com",
//     "userPassword": "P@rfect2",
//     "userID": "bdw20211001"
//   }).then(function (response) {
//     expect(response.status).to.eq(200)
//     Cypress.env("token", response.body.token)
//   })
// })

Cypress.Commands.add("LoginAPI", () => {
  cy.request({
    method: "POST", // ✅ use POST
    url: "https://qa-ehrpm.automedsys.net/api/auth/login", // ✅ replace with real login path
    body: {
      userEmail: "deji+2@automedsys.com",
      userPassword: "P@rfect2",
      userID: "bdw20211001"
    },
    headers: {
      "Content-Type": "application/json"
    }
  }).then((response) => {
    expect(response.status).to.eq(200);
    Cypress.env("token", response.body.token); // ✅ will work only if API returns token
  });
});


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })