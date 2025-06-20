import { useDispatch, useSelector } from "react-redux";  
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = ()=>{
    

    
    //Fetching the data and update store(TMDB now playing movies data) code is modularised as a custom hook for modularity
    const dispatch = useDispatch();

    const upcomingMovies = useSelector(store=>store.movies.upcomingMovies);

    const getUpcomingMovies = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
    //console.log(json.results); 
    }

    useEffect(()=>{
    if(!upcomingMovies) getUpcomingMovies();
    },[]);
}

export default useUpcomingMovies;