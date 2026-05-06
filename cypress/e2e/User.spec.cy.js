import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboard = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage

describe('Treinamento de testes', () => {
  
    
  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)

    dashboard.checkDashboardPage()

    menuPage.accessMyInfo() 

    myInfoPage.fillPersonalDetails('Tiago', 'Ferreira', 'Biiijuu')
    myInfoPage.fillEmployeeDetails('123456', '654321', 'AB123456', '2025-05-05')
    
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })

})