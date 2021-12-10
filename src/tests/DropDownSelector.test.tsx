import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DropDown from "../components/DropDown/DropDown";

const yearsList = ["1910", "2005", "2008"];

interface IHTMLExtendedElement extends HTMLElement {
  selected: boolean;
}

describe("Testing how selection works", () => {
  test("Simulate a selection", () => {
    render(
      <DropDown
        labelName={""}
        labelAndSelectorFor={""}
        selectorName={""}
        optionsList={yearsList}
        onHandleSelectorChange={() => {}}
      />
    );
    userEvent.selectOptions(screen.getByRole("combobox"), yearsList[0]);
    expect(
      (screen.getByRole("option", { name: "1910" }) as IHTMLExtendedElement)
        .selected
    ).toBe(true);
    expect(
      (screen.getByRole("option", { name: "2005" }) as IHTMLExtendedElement)
        .selected
    ).toBe(false);
  });

  test("Simulate a selection change", () => {
    render(
      <DropDown
        labelName={""}
        labelAndSelectorFor={""}
        selectorName={""}
        optionsList={yearsList}
        onHandleSelectorChange={() => {}}
      />
    );
    userEvent.selectOptions(screen.getByRole("combobox"), yearsList[0]);
    expect(
      (screen.getByRole("option", { name: "1910" }) as IHTMLExtendedElement)
        .selected
    ).toBe(true);

    userEvent.selectOptions(screen.getByRole("combobox"), yearsList[1]);

    expect(
      (screen.getByRole("option", { name: "1910" }) as IHTMLExtendedElement)
        .selected
    ).toBe(false);

    expect(
      (screen.getByRole("option", { name: "2005" }) as IHTMLExtendedElement)
        .selected
    ).toBe(true);
  });
});
