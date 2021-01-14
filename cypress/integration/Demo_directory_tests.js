//Testing site access and login w/ the provided account
describe ('Login and Access', function(){
    it ('Access website and login page', function(){
        cy.visit('https://demodirectory.com.br')
        cy.get('.fa-users').click()
        cy.get('.nav-item-dropdown').within(() => {
            cy.get('[href="/sitemgr"]').click()
        })
    })

    it ('Login', function(){
        cy.get('#username')
            .clear()
            .type('sitemgr@demodirectory.com')
        cy.get('#password')
            .clear()
            .type('abc123')
        cy.get('[type=submit]').click()
    })
})

//Testing advertisement's page and create itself
describe ('Create advertisement', function(){
    it('Access advertisement page', function(){
       cy.get('[id=tour-content]').click()
       cy.get('[id=dashboard-content]').contains('Anúncios').click()
       cy.get('[type=submit]').click()
    })

    it('Configure new advertisement', function(){
        cy.get('a.btn').contains('Adicionar anúncio').click()
        cy.get('[type = submit]').click()
        cy.get('[id = listingTemplate]').select('Restaurantes')
        cy.get('[id=name]')
            .clear()
            .type('Pizzaria Gur')
    })
})