import { useDispatch } from "react-redux";  
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = ()=>{
    

    
    //Fetching the data and update store(TMDB now playing movies data) code is modularised as a custom hook for modularity
    const dispatch = useDispatch();

    const getPopularMovies = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
    //console.log(json.results); 
    }

    useEffect(()=>{
    getPopularMovies();
    },[]);
}

export default usePopularMovies;