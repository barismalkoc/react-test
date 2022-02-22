describe("jest introduction : using matchers-truthiness", () => {
  it("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
  });

  it("there is a stop in Christoper", () => {
    expect("Christoper").toMatch(/stop/);
  });
});
