import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

describe("Test in <AddCategory />", () => {
  const inputValue = "Dragon Ball";
  const onNewCategory = jest.fn();

  test("Should make match with snapshot", () => {
    const { container } = render(<AddCategory onNewCategory={onNewCategory} />);

    expect(container).toMatchSnapshot();
  });

  test("Should change the textfield value", () => {
    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: inputValue } });

    expect(input.value).toBe(inputValue);
  });

  test("Should submit the form", () => {
    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
  });

  test("onNewCategory should be called", () => {
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("onNewCategory should not be called", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
  });
});
