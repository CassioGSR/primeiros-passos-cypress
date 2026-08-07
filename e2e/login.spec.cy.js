import userData from '../fixtures/userData.json';
import LoginPage from 'E:/QA-Cypress-lume/Cypress/pages/loginPage.js';
import DashboardPage from 'E:/QA-Cypress-lume/Cypress/pages/dashboardPage.js';
import MenuPage from '../pages/menuPage';
import MyInfoPage from '../pages/myInfoPage';

const Chance = require('chance')
const dashboardPage = new DashboardPage()
const loginPage = new LoginPage()
const chance = new Chance()


describe('Login Orange HRM Tests', () => {
  it('login - success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
  })
  it.only('login - fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password) 
    loginPage.checkAccessInvalid()
  })
})



//Username : Admin
//Password : admin123