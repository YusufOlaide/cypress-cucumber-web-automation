class ProductListPage {

    clickOnFilter(){
        return cy.get('.css-1iqcpb1')
    }

    selectBundlesByCategory(){
        return cy.get(':nth-child(5) > .css-y845pm')
    }

    enlargeByConcernOption(){
        return cy.xpath('//p[normalize-space()="By Concern"]')
    }

    selectAllByConcern(){
        return cy.get('#all')
    }

    enlargeByPriceOption(){
        return cy.xpath('//p[normalize-space()="By Price"]')
    }

    selectPriceRangeByPrice(){
        return cy.xpath('//div[@class="rah-static rah-static--height-auto css-1ibc859"]//div[3]')
    }

    clickOnApplyFilter(){
        return cy.xpath('//button[normalize-space()="Apply Filter"]')
    }

    products(){
        return cy.get('h2.chakra-heading.css-18bii0v')
    }

    productsTile(){
        return cy.get('div.chakra-stack.css-1evh6ky')
    }
}

export default ProductListPage