///<reference types = "Cypress"/>

export class headphonesPage {

    
    searchForHeadphones(){
        const inputField = cy.get('#search-form__input').type('Airpods')
    }
    clickOnSearch(){
        const searchButton = cy.get('.search-form__submit-button[type="submit"]')
        searchButton.click()
    }

    clickOnFilter(){
        const filterButton = cy.contains('Готовий до відправки')
        filterButton.click()
    }
    
    clickOnShow(){
        const showButton = cy.contains('Показати 8 товарiв')
        showButton.click()
    }
}
export const onHeadphonesPage = new headphonesPage()