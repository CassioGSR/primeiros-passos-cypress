import userData from '../fixtures/userData.json';
import LoginPage from 'E:/QA-Cypress-lume/Cypress/pages/loginPage.js';
import DashboardPage from 'E:/QA-Cypress-lume/Cypress/pages/dashboardPage.js';
import MenuPage from '../pages/menuPage';

const dashboardPage = new DashboardPage()
const loginPage = new LoginPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {
  const selectorsList = {
    
    
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    middleNameField: "[name='middleName']",
    genericField: ".oxd-input--active",
    myInfoGrid: ".orangehrm-edit-employee-content",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButtom: ".--close",
    submitButtom: "[type='submit']",
    genericCombobox:".oxd-select-text--arrow",
    firstComboboxData: ":nth-child(27) > span",
    secondComboboxData: ".oxd-select-dropdown > :nth-child(2)"
    

  }
  
  it.only('User info update - success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    
    //cy.get(selectorsList.firstNameField).clear({force: true}).type('Jon')
    //cy.get(selectorsList.middleNameField).clear().type('Nobody')
    //cy.get(selectorsList.lastNameField).clear().type('Doe')
    //cy.get(selectorsList.genericCombobox).eq(0).click()
    //cy.get(selectorsList.firstComboboxData).click()
    //cy.get(selectorsList.genericCombobox).eq(1).click()
    //cy.get(selectorsList.secondComboboxData).click()
    //cy.get(selectorsList.genericField).eq(3).clear().type('Rookie')
    //cy.get(selectorsList.genericField).eq(4).clear().type('Employee')
    //cy.get(selectorsList.genericField).eq(5).clear().type('Other')
    //cy.get(selectorsList.genericField).eq(6).clear().type('License')
    //cy.get(selectorsList.genericField).eq(7).clear().type('2026-07-31')
    //cy.get(selectorsList.dateCloseButtom).click()
    //cy.get(selectorsList.submitButtom).eq(0).click()
    //cy.get('body').should('contain', 'Successfully Updated')
  })
  it('login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})



//Username : Admin
//Password : admin123