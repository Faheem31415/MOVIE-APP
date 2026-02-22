import './home.css'
import Moviecard from "./moviecard";
import {useState,useEffect} from "react";
import { searchMovies,popularMovies } from './api';
function Home(){
    const [searchQuery,setsearchQuery]=useState("");
    const [movies,setMovies]=useState([]);
    const [error,seterror]=useState(null);
    const [loading,setloading]=useState(true);
    useEffect(()=>{
        const loadpopularmovies=async ()=>{
           try{
            const popular_movies=await popularMovies();
            setMovies(popular_movies);
           } catch(err) {
            console.log(err);
            seterror("Failed to load movies...");
           }
           finally{
            setloading(false);
           }
        }
        loadpopularmovies();
    },[])


    const handlesearch= async (e)=>{
        e.preventDefault();
        if(!searchQuery.trim()) return;
        if(loading) return;
        setloading(true);
        try{
            const searchResults=await searchMovies(searchQuery);
            setMovies(searchResults);
            seterror(null);
        }
        catch(err){
            console.log(err);
            seterror("Failed to search movies...");
        }
        finally{
            setloading(false);
        }
    }
    return (
        <div className="home">
            <form onSubmit={handlesearch} className="search-form">
                <input type="text"
                  placeholder="search movies..."
                  className="search-input"
                  value={searchQuery}
                  onChange={(e)=>setsearchQuery(e.target.value)}
                  />
                <button type="submit" className="search-btn">Search</button>
            </form>
            {error && <div className='error-message'>{error}</div>}

            {loading ? (<div className='loading'>Loading</div>) :
            (<div className="movies-grid">
                {movies.map((movie)=>
                (<Moviecard Movie={movie} key={movie.id}/>
                ))}
            </div>) }
            
        </div>
    );
}
export default Home