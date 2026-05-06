class MenuPage {

    selectorsList() {
        const selectors = { 
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            adminButton: '[href="/web/index.php/admin/viewAdminModule"]',
            pimButton: '[href="/web/index.php/pim/viewPimModule"]',
            leaveButton:'[href="/web/index.php/leave/viewLeaveModule"]',
            timButton: '[href="/web/index.php/time/viewTimeModule"]',
            recruitmentButton: '[href="/web/index.php/recruitment/viewRecruitmentModule"]',
            performanceButton: '[href="/web/index.php/performance/viewPerformanceModule"]',
            diretoryButton: '[href="/web/index.php/directory/viewDirectory"]',
            maintenanceButton: '[href="/web/index.php/maintenance/viewMaintenanceModule"]',
            claimButton: '[href="/web/index.php/claim/viewClaimModule"]',
            buzzButton: '[href="/web/index.php/buzz/viewBuzz"]'
        }

        return selectors
    }
    
    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }    
    acessAdminButton() {
        cy.get(this.selectorsList().adminButton).click()
    }   
    accessPimButton() {
        cy.get(this.selectorsList().pimButton).click()
    }
    accessLeaveButton() {
        cy.get(this.selectorsList().leaveButton).click()
    }
    accessTimButton() {
        cy.get(this.selectorsList().timButton).click()
    }
    accessRecruitmentButton() {
        cy.get(this.selectorsList().recruitmentButton).click()
    }
    accesPerformanceButton() {
        cy.get(this.selectorsList().performanceButton).click()
    }
    accessDiretoryButton() {
        cy.get(this.selectorsList().diretoryButton).click()
    }
    accessMaintenanceButton() {        
        cy.get(this.selectorsList().maintenanceButton).click()            
    }
    accessClaimButton() {
        cy.get(this.selectorsList().claimButton).click()
    }
    accessbuzzButon() {
        cy.get(this.selectorsList().buzzButton).click()
    }

}

export  default MenuPage

