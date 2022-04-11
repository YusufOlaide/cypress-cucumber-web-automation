/// <reference types="cypress" />
import ProductListPage from "../../../support/pageObjects/ProductListPage";
import ProductDetailsPage from "../../../support/pageObjects/ProductDetailsPage";
import CheckoutPage from "../../../support/pageObjects/CheckoutPage";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
const productListPage = new ProductListPage()
const productDetailsPage = new ProductDetailsPage()
const checkoutPage = new CheckoutPage()
const product = 'Classic Maintenance Bundle'


Given('I open the product page', ()=>{
    cy.visit(Cypress.env('url')+"/products")
})

When('I click on filter button',function(){
    productListPage.clickOnFilter().click()
})

And('I select options by category, concern and price',()=>{
    productListPage.selectBundlesByCategory().click({force: true})
    productListPage.enlargeByConcernOption().click()
    productListPage.selectAllByConcern().click({force: true})
    productListPage.enlargeByPriceOption().click()
    productListPage.selectPriceRangeByPrice().click({force: true})

})
And('I apply filter',()=>{
    productListPage.clickOnApplyFilter().click()
})

Then('I verify and click on Classic Maintenance Bundle product card',function(){
    productListPage.products().each(($el, index, $list)=>{
        if($el.text().includes(product)){
            productListPage.productsTile().eq(index).click()
        }
    })
    cy.wait(25000)
    cy.waitUntil(() => productDetailsPage.clickOnAddToCart().should('be.visible'));
})

When('I add product to cart',function(){
    productDetailsPage.clickOnAddToCart().click()
    cy.wait(10000)
})

And('I click on proceed to checkout',function(){
    productDetailsPage.clickOnProceedToCheckout().click()
    cy.wait(10000)
})

Then('I verify the shipping information page',function(){
    checkoutPage.verifyShippingPage()
    .should('be.visible')
    .should('contain.text', 'Shipping Address')
})
