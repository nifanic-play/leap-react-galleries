import artworksReducer from "./artworks";

export const initialState = {
  artworks: {
    index: [],
    pagination: {}
  }
}

export const GlobalReducer = (state, action) => (
  {
    artworks: artworksReducer(state.artworks, action)
  }
);

export default GlobalReducer;
