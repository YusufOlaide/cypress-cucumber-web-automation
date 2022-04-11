class ProductDetailsPage {

    clickOnAddToCart(){
        return cy.get(".chakra-button.css-2r3uyh")
    }

    clickOnProceedToCheckout(){
        return cy.get('.chakra-button.css-1kytl0y')
    }
}

export default ProductDetailsPage