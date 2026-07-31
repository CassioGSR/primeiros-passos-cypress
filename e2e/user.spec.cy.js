import userData from '../fixtures/userData.json';
describe('Orange HRM Tests', () => {
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb >.oxd-text",
    wrongCredentialAlert: "[role='alert']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    middleNameField: "[name='middleName']",
    genericField: ".oxd-input--active",
    myInfoGrid: ".orangehrm-edit-employee-content",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButtom: ".--close",
    submitButtom: "[type='submit']"

  }
  
  it.only('User info update - success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Jon')
    cy.get(selectorsList.middleNameField).clear().type('Nobody')
    cy.get(selectorsList.lastNameField).clear().type('Doe')
    cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(4).clear().type('Other')
    cy.get(selectorsList.genericField).eq(5).clear().type('License')
    cy.get(selectorsList.genericField).eq(6).clear().type('2026-07-31')
    cy.get(selectorsList.dateCloseButtom).click()
    cy.get(selectorsList.submitButtom).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
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