import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const movieResults = useSelector((store) => store.gpt.gptMovies);
  const movieNames = useSelector((store) => store.gpt.gptMovieNames);

  if (!movieResults) return null; //Shimmer UI

  return (
    <div className="m-4 p-4 text-white bg-black bg-opacity-60">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
