import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

describe("Test in <AddCategory />", () => {
  const inputValue = "Dragon Ball";
  test("Should make match with snapshot", () => {
    const { container } = render(<AddCategory onNewCategory={() => {}} />);

    expect(container).toMatchSnapshot();
  });

  test("Should change the textfield value", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: inputValue } });

    expect(input.value).toBe(inputValue);
  });

  test("Should submit the form", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
  });
});
