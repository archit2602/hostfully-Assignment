import { URL } from '../utils/config.js'
import { LOCATERS, MESSAGE } from '../locaterPackage/locaters.js'
import { STRINGS } from '../utils/srings.js'

describe('Testing Edit computer functionality', () => {
  beforeEach(() => {
    cy.visit(URL.baseURL);
  })

  it('edit computer name', () => {
    cy.contains(LOCATERS.aceComputerName).click();
    cy.get(LOCATERS.computerName).type(STRINGS.newName)
    cy.get(LOCATERS.createThisComputer).click();
    cy.get(MESSAGE.done).should('be.visible')
    expect(true).to.be.true
  })

  it('update correct Introduced', () => {
    cy.contains(LOCATERS.aceComputerName).click();
    cy.get(LOCATERS.introduced).type(STRINGS.correctIntroducedDate)
    cy.get(LOCATERS.createThisComputer).click();
    cy.get(MESSAGE.done).should('be.visible')
    expect(true).to.be.true
  })

  it('update correct Discontinue', () => {
    cy.contains(LOCATERS.aceComputerName).click();
    cy.get(LOCATERS.discontinued).type(STRINGS.correctDiscontinueDate)
    cy.get(LOCATERS.createThisComputer).click();
    cy.get(MESSAGE.done).should('be.visible')
    expect(true).to.be.true
  })

  it('update company', () => {
    cy.contains(LOCATERS.aceComputerName).click();
    cy.get(LOCATERS.company).select(STRINGS.computerName)
    cy.get(LOCATERS.createThisComputer).click();
    cy.get(MESSAGE.done).should('be.visible')
    expect(true).to.be.true
  })

  it('update incorrect Introduced', () => {
    cy.contains(LOCATERS.aceComputerName).click();
    cy.get(LOCATERS.introduced).type(STRINGS.incorrectIntroducedDate)
    cy.get(LOCATERS.createThisComputer).click();
    cy.get(MESSAGE.error).should('be.visible')
    expect(true).to.be.true
  })

  it('update incorrect Discontinue', () => {
    cy.contains(LOCATERS.aceComputerName).click();
    cy.get(LOCATERS.discontinued).type(STRINGS.incorrectDiscontinuedDate)
    cy.get(LOCATERS.createThisComputer).click();
    cy.get(MESSAGE.error).should('be.visible')
    expect(true).to.be.true
  })

})