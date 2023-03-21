import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe("Tests in <GifItem/>", () => {
  const title = "Dragon Ball";
  const url = "https://dragon-ball.com/goku.jpg";

  test("Should make match with snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Should show the image with the url and the alt sent", () => {
    render(<GifItem title={title} url={url} />);

    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);

    const { src, alt } = screen.getByRole("img");

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("Should show title into the component", () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
