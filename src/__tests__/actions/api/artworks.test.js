import artworks from "../../fixtures/artworks.json";
import response from "../../fixtures/fetch.json";
import { getArtworks, searchArtworks } from "../../../actions";

describe("getArtworks", () => {
  describe("success", () => {
    beforeEach(() => {
      jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(artworks.get)
      })
    });

    it("returns a list of artworks", async () => {
      const artworks = await getArtworks({limit: 10});
      expect(artworks.data.length).toBe(10);
    });

    it("allows an optional limit param", async () => {
      const artworks = await getArtworks({limit: 6});
      expect(fetch).toHaveBeenCalledWith(`https://api.artic.edu/api/v1/artworks?limit=6`)
    })

    it("allows an optional page param", async () => {
      const artworks = await getArtworks({page: 3});
      expect(fetch).toHaveBeenCalledWith(`https://api.artic.edu/api/v1/artworks?limit=2&page=3`)
    })

    afterEach(() => {
      jest.restoreAllMocks();
    });
  });

  describe("failure", () => {
    beforeEach(() => {
      jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(response["500"])
      })
    });

    it("returns error if one is encountered", async () => {
      const artworks = await getArtworks({limit: "foo"});
      expect(artworks.data).toBe(undefined)
      expect(artworks.error).toBe(response["500"].error)
    })

    afterEach(() => {
      jest.restoreAllMocks();
    });
  });
});

describe("searchArtworks", () => {
  describe("success", () => {
    beforeEach(() => {
      jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(artworks.search)
      })
    });

    it("returns a list of artworks", async () => {
      const artworks = await searchArtworks({limit: 10});
      expect(artworks.data.length).toBe(10)
    })

    it("allows an optional limit param", async () => {
      const artworks = await searchArtworks({limit: 6});
      expect(fetch).toHaveBeenLastCalledWith(`https://api.artic.edu/api/v1/artworks/search?q=rothko&limit=6`)
    })

    it("allows an optional page param", async () => {
      const artworks = await searchArtworks({page: 3});
      expect(fetch).toHaveBeenLastCalledWith(`https://api.artic.edu/api/v1/artworks/search?q=rothko&limit=2&page=3`)
    })

    it("allows a custom query param", async () => {
      const artworks = await searchArtworks({query: "twombly"});
      expect(fetch).toHaveBeenLastCalledWith(`https://api.artic.edu/api/v1/artworks/search?q=twombly&limit=2`)
    })

    afterEach(() => {
      jest.restoreAllMocks();
    });
  });

  describe("failure", () => {
    beforeEach(() => {
      jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(response["500"])
      })
    });

    it("returns error if one is encountered", async () => {
      const artworks = await searchArtworks({limit: "foo"});
      expect(artworks.data).toBe(undefined)
      expect(artworks.error).toBe(response["500"].error)
    })

    afterEach(() => {
      jest.restoreAllMocks();
    });
  });
});
