import { createContext, useState, useEffect, useContext } from "react";

const MovieContext = createContext();
export const usemoviecontext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const storedFavs = localStorage.getItem("favorites");
        return storedFavs ? JSON.parse(storedFavs) : [];
    });

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addFav = (movie) => {
        if (!favorites.some((fav) => fav.id === movie.id)) {
            setFavorites((prev) => [...prev, movie]);
        }
    };

    const remFav = (movieId) => {
        setFavorites((prev) => {
            const updatedFavorites = prev.filter((movie) => movie.id !== movieId);
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Update storage immediately
            return updatedFavorites;
        });
    };

    const isFav = (movieId) => {
        return favorites.some((movie) => movie.id === movieId);
    };

    return (
        <MovieContext.Provider value={{ favorites, addFav, remFav, isFav }}>
            {children}
        </MovieContext.Provider>
    );
};
