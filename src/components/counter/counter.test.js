import * as React from "react";
import ReactDOM from "react-dom";
import Counter from "./counter";

describe("counter test", () => {
  let div = document.createElement("div");
  document.body.append(div);
  ReactDOM.render(<Counter></Counter>, div);
  const message = div.firstChild.querySelector("div");

  it("counter current count to be 0", () => {
    expect(message.textContent).toBe("Current count: 0");
  });

  it("counter icrements when the increment button is clicked", () => {
    const increment = div.querySelectorAll("button")[1];
    increment.click();
    expect(message.textContent).toBe("Current count: 1");
  });

  it("counter decrements when the decrement button is clicked", () => {
    const decrement = div.querySelectorAll("button")[0];
    decrement.click();
    expect(message.textContent).toBe("Current count: 0");
  });
});
