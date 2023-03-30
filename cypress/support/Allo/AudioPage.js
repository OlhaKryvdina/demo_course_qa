///<reference types = "Cypress"/>

export class audioPage {

    clickOnHeadphones(){
        const headphonesButton = cy.contains('Безпровідні навушники')
        headphonesButton.click()
    }
}
export const onAudioPage = new audioPage()