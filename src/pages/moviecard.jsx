import './moviecard.css'
import { usemoviecontext } from "./movieContext";

function Moviecard({ Movie }) {
     const { isFav, remFav, addFav } = usemoviecontext();
     const favorite = isFav(Movie.id);

    function handleFavClick(e) {
        e.preventDefault();
        if (favorite) {
            remFav(Movie.id); 
        } else {
            addFav(Movie);
        }
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`} alt={Movie.title} />
                <div className="movie-overlay">
                    <button className={`fav-btn ${'favorite' ? "active" : ""}`} onClick={handleFavClick}>
                        {favorite ? "❤️" : "🤍"} 
                    </button>
                </div>+
            </div>
            <div className="movie-info">
                <h3>{Movie.title}</h3>
                <p>{Movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    );
}

export default Moviecard;
