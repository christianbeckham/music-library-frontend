describe("Test add song feature", () => {
	it("adds a new song", () => {
		cy.visit("http://localhost:3000");
		cy.get('[data-test="add-song-btn"]').click();
		cy.get('[data-test="title-input"]').type("Sabotage");
		cy.get('[data-test="artist-input"]').type("Beastie Boys");
		cy.get('[data-test="album-input"]').type("III Communication");
		cy.get('[data-test="genre-input"]').type("Rap rock");
		cy.get('[data-test="date-input"]').type("1994-01-28");
		cy.get('[data-test="modalFormSaveBtn"]').click();
		cy.wait(1000);
		cy.get('[data-test="song-table-body"]').find("tr").should("have.length", 1);
	});
});

describe("Test search feature", () => {
	it("finds a song", () => {
		cy.visit("http://localhost:3000");
		cy.get('[data-test="search-input"]').type("Sabotage");
		cy.get('[data-test="song-table-body"]')
			.find("tr")
			.should("have.length.least", 1);
		cy.get('[data-test="song-table-body"]').find("tr").contains("Sabotage");
	});
});

describe("Test delete song feature", () => {
	it("deletes a song", () => {
		cy.visit("http://localhost:3000");
		cy.get('[data-test="song-table-body"]')
			.contains("Sabotage")
			.parents("tr")
			.find('[data-test="deleteSongBtn"]')
			.click();
		cy.get('[data-test="deleteSongModalBtn"]').click();
	});
});
