export const getArtworks = async ({
  limit=2,
  page,
}) => {
  const response = await fetch(`https://api.artic.edu/api/v1/artworks?limit=${limit}${page ? `&page=${page}` : ''}`);
  if (response.error) return response.error;

  return response.json();
}

export const searchArtworks = async ({
  limit=2,
  page,
  query="rothko"
}) => {
  const response = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${query}&limit=${limit}${page ? `&page=${page}` : ''}`);
  
  if (response.error) return response.error;

  return await response.json();
}
