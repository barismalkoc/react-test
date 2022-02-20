import * as React from "react";
import ReactDOM from "react-dom";
import EasyButton from "./easy-button";

describe("easy-button", () => {
  let div = document.createElement("div");
  document.body.append(div);
  ReactDOM.render(<EasyButton></EasyButton>, div);

  it("easy-button background should be black", () => {
    expect(div.firstChild).toHaveStyle("background: black");
  });

  it("easy-button text color should be white", () => {
    expect(div.firstChild).toHaveStyle("color: white");
  });

  it("nothing should happen when the easy-button clicked", () => {
    const button = document.querySelector("button");
    button.click();
    expect.anything();
  });
});
