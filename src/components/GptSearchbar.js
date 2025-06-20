import { useRef } from "react";
import { GoogleGenAI } from "@google/genai";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
//import client from "../utils/openAI";
import { API_OPTIONS, GEMINI_API_KEY } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchbar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    //console.log(searchText.current.value);

    const prompt =
      "Act as a Movie Recommendation system and suggest some movies for the query :  " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, koi mil gaya";

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    //console.log(response.text);

    //if(!response.text) <Error />; //To be written

    const gptMovies = response.text.split(",");
    //console.log(gptMovies);

    const promiseArray = gptMovies.map((movie)=>searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    //console.log(tmdbResults);
    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));

  };

  return (
    <div className="pt-[8%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-10"
          placeholder={lang[langKey].gptSearchPlaceholder}
        ></input>
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-2"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
