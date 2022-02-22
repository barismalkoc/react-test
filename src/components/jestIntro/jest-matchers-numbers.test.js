describe("jest introduction : using matchers-numbers", () => {
  it("two plus two", () => {
    const value = 2 + 2;

    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(7);
    expect(value).toBeLessThanOrEqual(4);

    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  it("adding floating point numbers", () => {
    const value = 0.2 + 0.3;

    expect(value).toBe(0.5);
    expect(value).toBeCloseTo(0.5);
  });
});
