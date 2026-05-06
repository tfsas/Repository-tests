class MyInfoPage {

    selectorsList() {
        const selectors = { 
            myInfoGrid: ".oxd-topbar-header-breadcrumb-module",
            firstNameField: "[placeholder='First Name']",
            middleNameField: "[placeholder='Middle Name']",
            lastNameField: "[placeholder='Last Name']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            genericComboBox: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            nacionatyField: "[tabindex='0']",
            maritalStatus: "[tabindex='0']",
            genderField: ".oxd-radio-wrapper",
            dateOfBirthField: "[placeholder='yyyy-dd-mm']",
            submitButton: ".orangehrm-left-space"           
        }

        return selectors
    }

       
    fillPersonalDetails(firstName, middlename, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middlename)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    
    }
    fillEmployeeDetails(employeeId, otherId, drivesLicenseNumber, licenseExpiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(drivesLicenseNumber)
        cy.get(this.selectorsList().genericComboBox).eq(0).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().nacionatyField).eq(0).click()
        cy.contains('Brazilian').click()
        
    }
    saveForm()  {
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get('.oxd-toast')
        cy.get('body').should('contain', 'Successfully Updated')
    }
    fillStatus() {
        cy.get(this.selectorsList().maritalStatus).eq(1).click()
        cy.contains('Married').click()
        cy.get(this.selectorsList().genderField).eq(0).click()
        cy.contains('Male').click()
        cy.get(this.selectorsList().dateOfBirthField).eq(1).clear().type('2025-05-05')
        cy.get(this.selectorsList().dateCloseButton).click()
    }
}

export  default MyInfoPage
