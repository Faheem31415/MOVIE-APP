import './favorites.css';
import { usemoviecontext } from './movieContext';
import Moviecard from './moviecard';

function Favorite() {
    const { favorites } = usemoviecontext();

    return (
        <div className='favorites'>  
            {favorites.length > 0 ? (  
                <>
                    <h2>Your Favorites</h2>  
                    <div className="movies-grid">
                        {favorites.map((movie) => (
                            <Moviecard Movie={movie} key={movie.id} />
                        ))}
                    </div>
                </>
            ) : (
                <div className="favorites-empty">
                    <h2>No Favorite Movies Yet</h2>
                    <p>Start adding movies to your favorites and they will appear here.</p>
                </div>
            )}
        </div>
    );
}

export default Favorite;
