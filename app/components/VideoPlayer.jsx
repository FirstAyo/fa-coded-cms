import React, { useState } from "react";

function VideoPlayer() {
  const [nextVideo, setNextVideo] = useState(0);

  const projectVideos = [
    {
      id: 1,
      title: "Comfort Haven Landing Page Video",
      url: "/videos/ComfortHaven.mp4",
    },
    {
      id: 2,
      title: "ShowPrime Landing Page Video",
      url: "/videos/ShowPrime.mp4",
    },
  ];

  function showNextVideo() {
    setNextVideo(nextVideo + 1);
  }

  return (
    <div className="z-0 relative">
      <h3 className="text-[#3d5168] font-semibold mt-5 py-2 w-[98%] md:w-[95%] lg:w-[70%] mx-auto">
        {projectVideos[nextVideo].title}
      </h3>
      <div className="bg-[#3d5168] w-[98%] md:w-[95%] lg:w-[70%] md:h-96 mx-auto relative">
        <video
          controls
          preload="metadata"
          autoPlay
          playsInline
          loop
          className="mx-auto w-full md:h-96"
        >
          <source src={projectVideos[nextVideo].url} type="video/mp4" />
        </video>
        <button className="bg-[#3d5168] text-white px-5 py-2 rounded-sm my-1 absolute right-0" onClick={showNextVideo}>
          Next Project Video
        </button>
      </div>
    </div>
  );
}

export default VideoPlayer;
