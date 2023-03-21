import { render } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe("Tests in <GifItem/>", () => {
  const title = "Dragon Ball";
  const url = "https://dragon-ball.com/goku.jpg";

  test("Should make match with snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
});
