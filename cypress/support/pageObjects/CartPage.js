class CartPage {

    SumOfProducts(){
      let sum = 0
    cy.get('tr td:nth-child(4) strong').each($e1 => {
      const amount = Number($e1.text().split(" ")[1].trim()) 
      sum = sum + amount
    }).then(() => {
      return sum
    })
    }

} export default CartPage;