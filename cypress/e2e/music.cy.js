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
		cy.get('[data-test="song-table-body"]')
			.find("tr")
			.should("have.length.least", 1);
	});
});

describe("Test search feature", () => {
	it("finds a song", () => {
		cy.visit("http://localhost:3000");
		cy.get('[data-test="search-input"]').type("Sabotage");
		cy.get('[data-test="song-table-body"]')
			.find("tr")
			.contains("Sabotage")
			.should("have.length.least", 1);
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
		cy.get('[data-test="song-table-body"]').find("tr").should("have.length", 0);
	});
});

// BONUS #2
describe("Test add and search song with custom command", () => {
	const newSong = {
		title: "Yeah",
		artist: "Usher",
		album: "Confessions",
		genre: "Hip-hop",
		release_date: "2004-01-27",
	};

	it("creates a new song", () => {
		cy.createSong(newSong);
		cy.wait(1000);
		cy.get('[data-test="song-table-body"]')
			.find("tr")
			.should("have.length.least", 1);
	});

	it("finds the new song", () => {
		cy.get('[data-test="search-input"]').type(newSong.title);
		cy.get('[data-test="song-table-body"]')
			.find("tr")
			.contains(newSong.title)
			.should("have.length.least", 1);
	});
});

// BONUS #1
describe("Test edit song feature", () => {
	it("edit a song title", () => {
		cy.visit("http://localhost:3000");
		cy.get('[data-test="song-table-body"]')
			.contains("Yeah")
			.parents("tr")
			.find('[data-test="edit-song-btn"]')
			.click();
		cy.get('[data-test="title-input"]').clear().type("Yeah!");
		cy.get('[data-test="modalFormSaveBtn"]').click();
		cy.get('[data-test="song-table-body"]')
			.find("tr")
			.contains("Yeah!")
			.should("have.length.least", 1);
	});
});

// BONUS 3
describe("Test delete and search song with custom command", () => {
	const songTitle = "Yeah!";

	it("deletes a song", () => {
		cy.deleteSong(songTitle);
	});

	it("does not find the deleted song", () => {
		cy.visit("http://localhost:3000");
		cy.get('[data-test="search-input"]').type(songTitle);
		cy.get('[data-test="song-table-body"]').find("tr").should("have.length", 0);
	});
});

// BONUS 4
describe("Test add song with API custom command", () => {
	const songObj = {
		title: "Yeah!",
		artist: "Usher",
		album: "Confessions",
		genre: "Hip-hop",
		release_date: "2004-01-27",
	};

	it("creates a new song", () => {
		cy.addSongAPI(songObj).then((response) => {
			expect(response.status).to.eq(201);
		});
		cy.visit("http://localhost:3000");
		cy.get('[data-test="song-table-body"]')
			.find("tr")
			.contains(songObj.title)
			.should("have.length.least", 1);
	});
});
