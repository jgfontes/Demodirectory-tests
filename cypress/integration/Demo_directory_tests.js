//Test site access and login w/ the provided account
describe ('Login and Access', function(){
    it ('Access website and login page', function(){
        cy.visit('https://demodirectory.com.br')
        cy.get('.fa-users').click()
        cy.get('.nav-item-dropdown').within(() => {
            cy.get('[href="/sitemgr"]').click()
        })
        cy.url().should('include', '/sitemgr/login.php')
    })

    it ('Login', function(){
        cy.get('#username')
            .clear()
            .type('sitemgr@demodirectory.com')
        cy.get('#password')
            .clear()
            .type('abc123')
        cy.get('[type=submit]').click()
        cy.url().should('include', '/sitemgr')
    })
})

//Test advertisement's page and create advertisement
describe ('Create advertisement', function(){
    it('Access advertisement page', function(){
       cy.get('[id=tour-content]').click()
       cy.get('[id=dashboard-content]').contains('Anúncios').click()
       cy.get('[type=submit]').click()
       cy.url().should('include', '/sitemgr/content/listing/')
    })

    it('Configure new advertisement', function(){
        cy.get('a.btn').contains('Adicionar anúncio').click()
        cy.get('[type = submit]').click()
        cy.url().should('include', '/sitemgr/content/listing/listing.php')
        cy.get('[id = listingTemplate]').select('Restaurantes')
        cy.get('[id = name]')
            .clear()
            .type('Pizzaria Gur')
        cy.get('#browse-categories').click()
        cy.get('div.categories-block.is-last')
            .children()
            .contains('Padaria')
            .parents()
            .find('a.addCategory')
            .click()
        cy.get('.col-xs-12 > .btn-primary').click()
    })

    //Read notification
    it('Check created-w-success notification', function(){
        cy.get('div.notify-item')
            .should('have.attr', 'notify-type')
            .and('include', 'success') 
    })
})