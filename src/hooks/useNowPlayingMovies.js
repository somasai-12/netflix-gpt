import { useDispatch, useSelector } from "react-redux";  
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = ()=>{
    

    
    //Fetching the data and update store(TMDB now playing movies data) code is modularised as a custom hook for modularity
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies);

    const getNowPlayingMovies = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
    //console.log(json.results); 
    };

    useEffect(()=>{
    if(!nowPlayingMovies) getNowPlayingMovies();
    },[]);
}

export default useNowPlayingMovies;