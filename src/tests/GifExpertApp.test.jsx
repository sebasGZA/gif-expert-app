import { render } from "@testing-library/react";
import { GifExpertApp } from "../GifExpertApp";

describe("Tests in <GifExpertApp />", () => {
  test("should make match with snapshot", () => {
    const { container } = render(<GifExpertApp />);

    expect(container).toMatchSnapshot();
  });

});
