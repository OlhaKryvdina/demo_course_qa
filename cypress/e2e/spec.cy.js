import { onAudioPage } from "../support/Allo/AudioPage"
import { onHeadphonesPage } from "../support/Allo/HeadphonesPage"
import { onMainPage } from "../support/Allo/LoginPage"

describe('template spec', () => {
  it('Click on Audio button', () => {
    cy.viewport(1920,1080)
    onMainPage.openAllo()
    onMainPage.clickOnAudio()
    onAudioPage.clickOnHeadphones()
    onHeadphonesPage.searchForHeadphones('Airpods')
    onHeadphonesPage.clickOnSearch()
    onHeadphonesPage.clickOnFilter()
    onHeadphonesPage.clickOnShow()
    cy.wait(4000)
    cy.get('.b-crumbs__link[href="https://allo.ua/"]')
       .should('contain','Інтернет магазин') 
    cy.wait(5000)
    cy.get('[title="Видалити Навушники"]')
      .should('contain','Навушники')
    cy.get('[title="Видалити Готовий до відправки"]')
      .should('contain','Готовий до відправки')  
    cy.get('[class="v-logo__img"]')
      .invoke('attr','loading')
      .should('include','lazy')
  })
})
