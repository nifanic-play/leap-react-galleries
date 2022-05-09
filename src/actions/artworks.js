import { getArtworks, searchArtworks } from "./api";
import { actionTypes } from "./actionTypes";

export const fetchArtworks = async (limit, page) => {
  const response = await getArtworks({limit, page});

  return {
    type: actionTypes.GET_ARTWORKS_SUCCESS,
    data: response.data,
    pagination: response.pagination
  };
};

export const fetchArtworksSearch = async (limit, page, query) => {
  const response = await searchArtworks({limit, page, query});

  return {
    type: actionTypes.SEARCH_ARTWORKS_SUCCESS,
    data: response.data,
    pagination: response.pagination
  };
};
