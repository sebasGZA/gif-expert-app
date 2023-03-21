import { getGifs } from "../../helpers/getGifs";

describe("Test in getGifs", () => {
  test("should return a gifs array", async () => {
    const gifs = await getGifs("Dragon Ball");

    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
