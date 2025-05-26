import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  //fetch trailer of the movie using API and update store with trailer video data
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json);

    const filterdata = json.results.filter((video) => video.type == "Trailer");
    const trailer = filterdata.length ? filterdata[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
    //console.log(trailer);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
