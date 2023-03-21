import { render } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

describe("Test in <AddCategory />", () => {
  test("Should make match with snapshot", () => {
    const { container } = render(<AddCategory />);

    expect(container).toMatchSnapshot();
  });
});
