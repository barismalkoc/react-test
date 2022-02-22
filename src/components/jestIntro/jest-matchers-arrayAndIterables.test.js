describe("jest introduction : using matchers-arrayAndIterables", () => {
  const shoppingList = [
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "milk",
  ];

  it("the shopping list contain trash bags", () => {
    expect(shoppingList).toContain("trash bags");
    expect(new Set(shoppingList)).toContain("trash bags");
  });
});
