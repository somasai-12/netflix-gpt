import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchbar from "./GptSearchbar";
import { backgroundImage } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={backgroundImage} alt="background image" />
      </div>
      <GptSearchbar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
