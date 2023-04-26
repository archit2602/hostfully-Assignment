
import { URL } from '../utils/config.js'
import { LOCATERS, MESSAGE } from '../locaterPackage/locaters.js'
import { STRINGS } from '../utils/srings.js'

describe('Testing filter computer name functionaity', () => {
  beforeEach(() => {
    cy.visit(URL.baseURL);
  })

  it('searching exited computer name', () => {
    cy.get(LOCATERS.searchBox).type(STRINGS.computerName);
    cy.get(LOCATERS.filterBtn).click();
    cy.get(MESSAGE.computerlist).should('be.visible')
    expect(true).to.be.true
  })

  it('searching non existed computer name', () => {
    cy.get(LOCATERS.searchBox).type(STRINGS.incorrectComputerName);
    cy.get(LOCATERS.filterBtn).click();
    cy.get(MESSAGE.noResult).should('be.visible')
    expect(true).to.be.true
  })

  it('searching computer name using half word', () => {
    cy.get(LOCATERS.searchBox).type(STRINGS.halfCompterName);
    cy.get(LOCATERS.filterBtn).click();
    cy.get(MESSAGE.computerlist).should('be.visible')
    expect(true).to.be.true
  })

  it('searching computer name using special char', () => {
    cy.get(LOCATERS.searchBox).type(STRINGS.specialCharAsComputerName);
    cy.get(LOCATERS.filterBtn).click();
    cy.get(MESSAGE.noResult).should('be.visible')
    expect(true).to.be.true
  })
})