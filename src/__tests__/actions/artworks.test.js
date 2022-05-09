import artworks from "../fixtures/artworks.json";
import { actionTypes, fetchArtworks, fetchArtworksSearch } from "../../actions";

describe("Artworks actions", () => {
  describe("fetchArtworks", () => {
    beforeEach(() => {
      jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(artworks.get)
      })
    });

    it("retrieves a list of artworks and dispatches to reducer", async () => {
      const artworks = await fetchArtworks();
      expect(artworks.type).toBe(actionTypes.GET_ARTWORKS_SUCCESS);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });
  });

  describe("searchArtworks", () => {
    beforeEach(() => {
      jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(artworks.search)
      })
    });

    it("retrieves a list of artworks and dispatches to reducer", async () => {
      const artworks = await fetchArtworksSearch({limit: 10});
      expect(artworks.type).toBe(actionTypes.SEARCH_ARTWORKS_SUCCESS);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });
  });
});
