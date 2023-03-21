import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Tests in <GifGrid />", () => {
  const category = "Dragon Ball";

  const gifs = [
    {
      id: "ABC",
      title: "Dragon Ball",
      url: "https://DragonBall.com/goku",
    },
  ];

  test("Should make match with snapshot", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    const { container } = render(<GifGrid category={""} />);

    expect(container).toMatchSnapshot();
  });

  test("should show Loading ", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={""} />);
    expect(screen.getByText("Loading...")).toBeTruthy();
  });

  test("should show Dragon Ball ", () => {
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByText(category)).toBeTruthy();
  });

  test("should show items when it charges images using useFetchGifs", () => {
    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(1);
    expect(useFetchGifs).toHaveBeenCalled();

    expect(useFetchGifs).toHaveBeenCalledTimes(4);
  });
});
