describe('Treinamento de testes', () => {
  it('OrangeHrm', () => {
    cy.visit('google.com.br')
    cy.get('[name="q"]').type('Adilson Massocatto{enter}')
    cy.get('[data-hveid="CBUQAA"] > .C6AK7c > .mXwfNd > .R1QWuf')
  }) 
})