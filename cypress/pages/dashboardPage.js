class dashboardPage {

    selectorsList() {
        const   selectors = {
            sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
            dashboardGrid: ".orangehrm-dashboard-grid",
        }

        return  selectors

    }

    accessDashboardPage()   {
        cy.location('pathname').should('equal',  '/web/index.php/dashboard/index')       



    }

    
}

export  default dashboardPage

