import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[15%] px-8 md:px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl py-3 md:py-0 font-bold ">{title}</h1>
      <p className="hidden md:inline-block py-6 w-1/2 text-lg">{overview}</p>
      <div className="my-0 md:my-4">
        <button className="bg-white text-black py-1 px-6 md:py-3 md:px-10 text-l md:text-xl rounded-lg hover:bg-opacity-80">Play</button>
        <button className="hidden md:inline-block mx-3 bg-gray-500 text-white p-3 px-6 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-30">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;