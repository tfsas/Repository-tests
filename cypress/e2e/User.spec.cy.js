import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')


const chance = new Chance();
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

    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.string())
    myInfoPage.fillEmployeeDetails(chance.bb_pin(), chance.bb_pin(), chance.bb_pin(), '2025-05-12')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })

  
})