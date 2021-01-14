//Testing site access and login w/ the provided account
describe ('Login and Access', function(){
    it ('Access website and login page', function(){
        cy.visit('https://demodirectory.com.br/sitemgr/login.php')
        cy.url().should('include', '/sitemgr/login.php')
        cy.get('#username')
            .clear()
            .type('sitemgr@demodirectory.com')
        cy.get('#password')
            .clear()
            .type('abc123')
        cy.get('[type=submit]').click()
    })
})
