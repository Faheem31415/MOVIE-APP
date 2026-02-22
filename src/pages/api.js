


export const popularMovies = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/movies`
  );
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/search?query=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.results;
};