describe("jest introduction : using matchers-exceptions", () => {
  function compileAndroidCode() {
    throw new Error("you are using the wrong JDK");
  }

  it("compiling android goes as excepted", () => {
    expect(() => compileAndroidCode()).toThrow(Error);
    expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
    expect(() => compileAndroidCode()).toThrow(/JDK/);
  });
});
