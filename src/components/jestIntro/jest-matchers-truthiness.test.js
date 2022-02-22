describe("jest introduction : using matchers-truthiness", () => {
  const n = null;
  const t = true;
  const f = false;

  const z = 0;
  const y = 1;

  it("to be null", () => {
    expect(n).toBeNull();
    expect(z).not.toBeNull();
  });

  it("to be defined", () => {
    expect(n).toBeDefined();
    expect(z).toBeDefined();
  });

  it("to be not to be undefined", () => {
    expect(n).not.toBeUndefined();
    expect(z).not.toBeUndefined();
  });

  it("to be truthy", () => {
    expect(n).not.toBeTruthy();
    expect(t).toBeTruthy();
    expect(f).not.toBeTruthy();

    expect(z).not.toBeTruthy();
    expect(y).toBeTruthy();
  });

  it("to be falsy", () => {
    expect(n).toBeFalsy();
    expect(t).not.toBeFalsy();
    expect(f).toBeFalsy();

    expect(z).toBeFalsy();
    expect(y).not.toBeFalsy();
  });
});
