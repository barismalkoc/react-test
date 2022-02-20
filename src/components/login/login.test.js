import * as React from "react";
import ReactDOM from "react-dom";
import Login from "./login";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("login", () => {
  it("submitting the form calls onSubmit with username and password", () => {
    let submittedData;
    const handleSubmit = (data) => (submittedData = data);
    render(<Login onSubmit={handleSubmit} />);
    const username = "mahmut";
    const password = "123456";
    const button = userEvent.type(screen.getByLabelText("Username"), username);
    userEvent.type(screen.getByLabelText("Password"), password);
    userEvent.click(screen.getByRole("button"));

    expect(submittedData).toEqual({
      username,
      password,
    });
  });
});
