///<reference types = "Cypress"/>

export class mainPage {
    openAllo(){
        cy.visit('https://allo.ua/')
    }

    clickOnAudio(){
        const audioButton = cy.contains('Аудіо')
        audioButton.click()
    }
}
export const onMainPage = new mainPage()