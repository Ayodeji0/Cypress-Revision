describe('Handling Child Windows', () => {
    it('Should handle child window', () => {
      
 

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

       cy.get(".blinkingText").invoke('removeAttr','target').click();
       cy.get("h1").should('contain','Documents request');


       })


    });

    describe('My test suite', function(){
    it('Handle child window', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr', 'target' ).click()

        cy.origin('https://www.qaclickacademy.com/', ()=>{
            cy.get('.ml-auto a[href="about.html"]').click()
            cy.get('.mt-50 h2').contains('Welcome to QAClick Academy')

        })
        
    })
})

