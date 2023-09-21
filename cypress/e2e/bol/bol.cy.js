/// <reference types="cypress" />

context('Bol.com - assignment', () => {
    beforeEach(() => {
    Cypress.Cookies.debug(true)
  
    cy.visit('https://bol.com')
  
      // clear cookies again after visiting to remove
      // any 3rd party cookies picked up such as cloudflare

    cy.get('#js-first-screen-accept-all-button').contains('Alles accepteren').click()
    cy.wait(2000)
    cy.get('[data-test="continue-button"]').contains('Doorgaan').click()
    cy.wait(2000)
    })
    
    it("Get laptop and sort",()=>{
        cy.get('.main-menu-btn').click()
        cy.get('[data-nav-id="3"] > .wsp-category-nav-ab__link').click()
        cy.get(':nth-child(3) > wsp-toggle > [data-test="wsp-nav-group"] > .wsp-sub-nav-group__list > :nth-child(3) > .wsp-sub-nav-group__link').contains("Laptops").click()
        cy.get('[data-testid="circle-hero-buttons"] > .c-PJLV-dnaZtA-appearance-PRIMARY').contains("Alle laptops").click()
        cy.get('#sort').select("Prijs laag - hoog").should("have.value","price0")
        cy.get('[data-test="filter-menu-button"]').click()
        cy.get('#multiple-range_12194_selected-min').clear().type("100{ENTER}")
        cy.get('#js_items_content > li:nth-child(3) > div.product-item__image.hit-area.js_deferred_image_trigger > div.h-o-hidden > wsp-analytics-tracking-event > a > wsp-skeleton-image > div > img').click()
        cy.get('[data-test="priceWithoutDiscount"] > [data-test="price"]').invoke('text').as('price')
        cy.get('@price').then((price) => {
          cy.log('Laptop price is ' + price) //prints price
        })
        cy.get(':nth-child(5) > .js_sticky_placeholder > [data-test="add-to-basket"]').click()
        cy.get('.add-on-page-header__link > [data-test="btn-continue-shopping"],[data-test="btn-continue-shopping"]').click()    
       
    })

    it("Get laptop from index four",()=>{
        cy.get('.main-menu-btn').click()
        cy.get('[data-nav-id="3"] > .wsp-category-nav-ab__link').click()
        cy.get(':nth-child(3) > wsp-toggle > [data-test="wsp-nav-group"] > .wsp-sub-nav-group__list > :nth-child(3) > .wsp-sub-nav-group__link').contains("Laptops").click()
        cy.get('[data-testid="circle-hero-buttons"] > .c-PJLV-dnaZtA-appearance-PRIMARY').contains("Alle laptops").click()
        cy.get('#sort').select("Prijs laag - hoog").should("have.value","price0")
        cy.get('[data-test="filter-menu-button"]').click()
        cy.get('#multiple-range_12194_selected-min').clear().type("100{ENTER}")
        cy.get('#js_items_content > li:nth-child(4) > div.product-item__image.hit-area.js_deferred_image_trigger > div.h-o-hidden > wsp-analytics-tracking-event > a > wsp-skeleton-image > div > img').click()
        cy.get('[data-test="priceWithoutDiscount"] > [data-test="price"]').invoke('text').as('price')
        cy.get('@price').then((price) => {
          cy.log('Laptop price is ' + price) //prints price
        })
    })

    it("Koffie en thee", ()=>{
        cy.get('.main-menu-btn').click()
        cy.get('[data-nav-id="10"] > .wsp-category-nav-ab__link').click()
        cy.wait(2000)
        cy.get(':nth-child(8) > wsp-toggle > [data-test="wsp-nav-group"] > .wsp-sub-nav-group__list > :nth-child(2) > .wsp-sub-nav-group__link').contains("Alles in koffie").click()
        cy.get('[href="/nl/nl/l/koffie/20598/"]').click()
        cy.get("#js_items_content > li:nth-child(2) > div.product-item__content > div.product-prices > span").invoke('text').as('price')
        cy.get('@price').then((price) => {
         cy.log('Koffie price is ' + price) //prints price
        
         })
    })

    

    
})