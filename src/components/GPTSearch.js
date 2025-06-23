import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchbar from "./GptSearchbar";
import { backgroundImage } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
        <img className="h-screen md:h-auto object-cover" src={backgroundImage} alt="background image" />
      </div>
    <div className="">
      <GptSearchbar />
      <GptMovieSuggestions />
    </div>
    </>
  );
};

export default GPTSearch;
