
import { URL } from '../utils/config.js'
import { LOCATERS, MESSAGE } from '../locaterPackage/locaters.js'
import { STRINGS } from '../utils/srings.js'

describe('Testing Add a new computer', () => {
  beforeEach(() => {
    cy.visit(URL.baseURL);
  })

  it('Adding computer using valid name', () => {
    cy.get(LOCATERS.addANewComputer).click()
    cy.get(LOCATERS.computerName).type(STRINGS.name)
    cy.get(LOCATERS.createThisComputer).click()
    cy.get(MESSAGE.done)
    .should('be.visible')
    expect(true).to.be.true
  })

  it('Adding Computer with the vaid details', () => {
    cy.get(LOCATERS.addANewComputer).click()
    cy.get(LOCATERS.computerName).type(STRINGS.name)
    cy.get(LOCATERS.introduced).type(STRINGS.correctIntroducedDate)
    cy.get(LOCATERS.discontinued).type(STRINGS.correctDiscontinueDate)
    cy.get(LOCATERS.company).select('IBM')
    cy.get(LOCATERS.createThisComputer).click()
    cy.get(MESSAGE.done)
    .should('be.visible')
    expect(true).to.be.true
  })

  it('Adding computer with wrong date type for introduced', () => {
    cy.get(LOCATERS.addANewComputer).click()
    cy.get(LOCATERS.computerName).type(STRINGS.name)
    cy.get(LOCATERS.introduced).type(STRINGS.incorrectIntroducedDate)
    cy.get(LOCATERS.createThisComputer).click()
    cy.get(MESSAGE.error)
    .should('be.visible')
    expect(true).to.be.true
  })

  it('Adding computer with wrong date type for discontinue', () => {
    cy.get(LOCATERS.addANewComputer).click()
    cy.get(LOCATERS.computerName).type(STRINGS.name)
    cy.get(LOCATERS.introduced).type(STRINGS.incorrectDiscontinuedDate)
    cy.get(LOCATERS.createThisComputer).click()
    cy.get(MESSAGE.error)
    .should('be.visible')
    expect(true).to.be.true
  })

  it('Canceling added details', () => {
    cy.get(LOCATERS.addANewComputer).click()
    cy.get(LOCATERS.computerName).type(STRINGS.name)
    cy.get(LOCATERS.introduced).type(STRINGS.correctIntroducedDate)
    cy.get(LOCATERS.discontinued).type(STRINGS.correctDiscontinueDate)
    cy.get(LOCATERS.company).select('IBM')
    cy.contains(LOCATERS.cancel).click()
    cy.get(MESSAGE.done)
    .should('not.exist')
    expect(true).to.be.true
  })
})