import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "../components/Input/Input";
import React from 'react'
describe("Testing how input works", () => {
  test("render any input", () => {
    render(<Input label=""  />);

    const inputElement = screen.getByRole("textbox");

    userEvent.type(inputElement, "1234");
    expect(inputElement).toHaveValue("1234");

    userEvent.clear(inputElement);

    userEvent.type(inputElement, "testtest");
    expect(inputElement).toHaveValue("testtest");
  });
});
