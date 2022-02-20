import * as React from "react";
import ReactDOM from "react-dom";
import Button from "./button";

describe("button test", () => {
  let div = document.createElement("div");
  document.body.append(div);

  it("renders without crashing", () => {
    ReactDOM.render(<Button></Button>, div);
  });
});
