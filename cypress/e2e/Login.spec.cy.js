import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboard = new dashboardPage()

describe('Treinamento de testes', () => {

    const selectorsList = {
     
      
      myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
      firstNameField: "[name='firstName']",
      lastNameField: "[name='lastName']",
      genericField: ".oxd-input--active",
      dateField: "[placeholder='yyyy-dd-mm']",
      dateCloseButton: ".--close",
      nacionatyField: "[tabindex='0']",
      maritalStatus: "[tabindex='0']",
      genderField: ".oxd-radio-input",
      dateOfBirthField: "[placeholder='yyyy-dd-mm']",
      submitButton: ".orangehrm-left-space"
    }
    
    it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    dashboard.accessDashboardPage(selectorsList.)

    /* 
    cy.location('pathname').should('equal',  '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Tiago')
    cy.get(selectorsList.lastNameField).clear().type('Ferreira')
    cy.get(selectorsList.genericField).eq(3).clear().type('ID28')
    cy.get(selectorsList.genericField).eq(4).clear().type('GDP2J03')
    cy.get(selectorsList.genericField).eq(5).clear().type('EEE5E65')
    cy.get(selectorsList.genericField).eq(6).clear().type('1234562')
    cy.get(selectorsList.dateField).eq(0).clear().type('2025-12-05')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.nacionatyField).eq(0).click()
    cy.contains('Brazilian').click()
    cy.get(selectorsList.maritalStatus).eq(1).click()
    cy.contains('Married').click()
    cy.get(selectorsList.genderField).eq(1).click()
    cy.contains('Male').click()
    cy.get(selectorsList.dateOfBirthField).eq(1).clear().type('2025-12-05')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('.oxd-toast')
    cy.get('body').should('contain', 'Successfully Updated') */
    
   
    
    

    

  })
  it('Login - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
   
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')  
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })

})