beforeEach(() => {
  cy.visit("/");
  cy.login("bropet@mail.ru", "123");
});

describe("Test add books", () => {
  it("Add book", () => {
    cy.addBook("Шантарам", "Годный роман", "Грегори Дэвид Робертс");
    cy.contains("Шантарам").should("be.visible");
  });

  it("Add to favorite", () => {
    cy.contains("Books list").click();
    cy.addToFavorite("Шантарам");
    cy.contains("Шантарам").should("be.visible");
  });

  it("Delete books in favorite", () => {
    cy.get("h4").click();
    cy.deleteBook("Шантарам");
  });
});
