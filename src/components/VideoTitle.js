import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[15%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold ">{title}</h1>
      <p className="py-6 w-1/2 text-lg">{overview}</p>
      <div className="my-4">
        <button className="bg-white text-black p-3 px-10 text-xl rounded-lg hover:bg-opacity-80">Play</button>
        <button className="mx-3 bg-gray-500 text-white p-3 px-6 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-30">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;