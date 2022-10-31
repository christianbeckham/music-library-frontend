// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("createSong", (songObject) => {
	cy.visit("http://localhost:3000");
	cy.get('[data-test="add-song-btn"]').click();
	cy.get('[data-test="title-input"]').type(songObject.title);
	cy.get('[data-test="artist-input"]').type(songObject.artist);
	cy.get('[data-test="album-input"]').type(songObject.album);
	cy.get('[data-test="genre-input"]').type(songObject.genre);
	cy.get('[data-test="date-input"]').type(songObject.release_date);
	cy.get('[data-test="modalFormSaveBtn"]').click();
});
