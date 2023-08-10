"use client";
import React, { useState } from "react";
import musicInfo from "../musicinfo/musicInfo";
import MusicPlayer from "./MusicPlayer";
// import { Document, document } from "postcss"

// import { useRef } from "react";
// const handlePause = (songId:any) => {
//   const temp: any = document.getElementById(songId)
//   setInfo(musicInfo[songId])
//   temp.pause();
//   setFlag(true);
// }
export default function SongCards() {
  // console.log(musicInfo);
  // const songId = 0;
  const [flag, setFlag] = useState(false);
  const [info, setInfo] = useState(null);
  const [playing, setPlaying] = useState(
    new Array(musicInfo.length).fill(false)
  );

  const handlePlay = (songId: any) => {
    const temp: any = document.getElementById(songId);
    setInfo(songId);
// console.log(songId);
    const newPlayingStates = [...playing];
    newPlayingStates[songId] = !newPlayingStates[songId];

    if (newPlayingStates[songId]) {
      temp.play();
      setPlaying(newPlayingStates);
    } else {
      temp.pause(); // Pause the audio
      setPlaying(newPlayingStates);
    }

    setFlag(true);
  };
  const playNext = (songId: any) => {
    const newPlayingStates = [...playing];
    newPlayingStates[songId] = !newPlayingStates[songId];
    const temp: any = document.getElementById(songId);
    temp.pause();
    // setPlaying(newPlayingStates)
    const next:any = document.getElementById(songId+1);
setInfo(songId+1);

    if (newPlayingStates[songId]) {
      next.play();
      setPlaying(newPlayingStates);

    } else{
      setPlaying(newPlayingStates);

    }
// playing[songId]=true

  }

  return (
    <>
      <div className="flex space-x-8">
        <div className="max-w-sm rounded  shadow-2xl">
          <div className="relative">
            <img
              className="w-40"
              src={musicInfo[0].imgsrc}
              alt="Sunset in the mountains"
            />
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" width="48" height="48"><g className="absolute inset-0 m-auto" fill="#FFFFFF"><path d="M6,4l12,8L6,20V4z" className="style-scope yt-icon" fill="#FFFFFF"></path></g></svg> */}
            <button
              className="absolute inset-0 mx-14"
              onClick={() => handlePlay(musicInfo[0].id)}
            >
              {playing[0] ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  width="48"
                  height="48"
                >
                  <g fill="#FFFFFF">
                    <path d="M9,19H7V5H9ZM17,5H15V19h2Z" fill="#FFFFFF"></path>
                  </g>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  width="48"
                  height="48"
                >
                  <g fill="#FFFFFF">
                    <path d="M6,4l12,8L6,20V4z" fill="#FFFFFF"></path>
                  </g>
                </svg>
              )}
            </button>
          </div>
          <div className="mt-2">
            <div className="font-[Roboto,Noto Naskh Arabic UI,Arial,sans-serif]  text-l mb-1">
              {musicInfo[0].titleOne} <br />
              {musicInfo[0].titleTwo}
            </div>
            <p className="text-gray-400 text-base">{musicInfo[0].artist}</p>
            <audio id="0">
              <source src={musicInfo[0].audiosrc} />
            </audio>
          </div>
        </div>
        <div className="max-w-sm rounded-sm  shadow-2xl">
          <div className="relative">
            <img
              className="w-40 "
              src={musicInfo[1].imgsrc}
              alt="Sunset in the mountains"
            />
            <button
              className="absolute inset-0 mx-14"
              onClick={() => handlePlay(musicInfo[1].id)}
            >
              {playing[1] ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  width="48"
                  height="48"
                >
                  <g fill="#FFFFFF">
                    <path d="M9,19H7V5H9ZM17,5H15V19h2Z" fill="#FFFFFF"></path>
                  </g>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  width="48"
                  height="48"
                >
                  <g fill="#FFFFFF">
                    <path d="M6,4l12,8L6,20V4z" fill="#FFFFFF"></path>
                  </g>
                </svg>
              )}
            </button>
          </div>
          <div className="mt-2">
            <div className="font-[Roboto,Noto Naskh Arabic UI,Arial,sans-serif]  text-l mb-1">
              {musicInfo[1].title}
            </div>
            <p className="text-gray-400 text-base">{musicInfo[1].artist}</p>
            <audio id="1">
              <source src={musicInfo[1].audiosrc} />
            </audio>
          </div>
        </div>
        <div className="max-w-sm rounded  shadow-lg">
          <div className="relative">
            <img
              className="w-40"
              src={musicInfo[2].imgsrc}
              alt="Sunset in the mountains"
            />
            <button
              className="absolute inset-0 mx-14"
              onClick={() => handlePlay("2")}
            >
              {playing[2] ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  width="48"
                  height="48"
                >
                  <g fill="#FFFFFF">
                    <path d="M9,19H7V5H9ZM17,5H15V19h2Z" fill="#FFFFFF"></path>
                  </g>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  width="48"
                  height="48"
                >
                  <g fill="#FFFFFF">
                    <path d="M6,4l12,8L6,20V4z" fill="#FFFFFF"></path>
                  </g>
                </svg>
              )}
            </button>
          </div>
          <div className="mt-2">
            <div className="font-[Roboto,Noto Naskh Arabic UI,Arial,sans-serif]  text-l mb-1">
              {" "}
              {musicInfo[2].titleOne}
              <br />
              {musicInfo[2].titleTwo}
            </div>
            <p className="text-gray-400 text-base">{musicInfo[2].artist}</p>
            <audio id="2">
              <source src={musicInfo[2].audiosrc} />
            </audio>
          </div>
        </div>
        <div className="max-w-sm rounded  shadow-lg">
          <div className="relative">
            <img
              className="w-40"
              src={musicInfo[3].imgsrc}
              alt="Sunset in the mountains"
            />
            <button
              className="absolute inset-0 mx-14"
              onClick={() => handlePlay("3")}
            >
              {playing[3] ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  width="48"
                  height="48"
                >
                  <g fill="#FFFFFF">
                    <path d="M9,19H7V5H9ZM17,5H15V19h2Z" fill="#FFFFFF"></path>
                  </g>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  width="48"
                  height="48"
                >
                  <g fill="#FFFFFF">
                    <path d="M6,4l12,8L6,20V4z" fill="#FFFFFF"></path>
                  </g>
                </svg>
              )}
            </button>
          </div>
          <div className="mt-2">
            <div className="font-[Roboto,Noto Naskh Arabic UI,Arial,sans-serif]  text-l mb-1">
              {musicInfo[3].title}
            </div>
            <p className="text-gray-400 text-base flex flex-row items-center ">
              <audio id="3">
                <source src={musicInfo[3].audiosrc} />
              </audio>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
                className="style-scope yt-icon"
                width="18"
                height="18"
              >
                <g
                  className="style-scope yt-icon"
                  fillOpacity="0.7"
                  fill="#FFFFFF"
                >
                  <path
                    d="M3,3v18h18V3H3z M16,9h-6v2h6v2h-6v2h6v2H8V7h8V9z"
                    className="style-scope yt-icon"
                    fill="#FFFFFF"
                    fillOpacity="0.7"
                  ></path>
                </g>
              </svg>
              {musicInfo[3].artist}
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded  shadow-lg">
          <div className="relative">
            <img
              className="w-40"
              src={musicInfo[4].imgsrc}
              alt="Sunset in the mountains"
            />
            <button
              className="absolute inset-0 mx-14"
              onClick={() => handlePlay("4")}
            >
              {playing[4] ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  width="48"
                  height="48"
                >
                  <g fill="#FFFFFF">
                    <path d="M9,19H7V5H9ZM17,5H15V19h2Z" fill="#FFFFFF"></path>
                  </g>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  width="48"
                  height="48"
                >
                  <g fill="#FFFFFF">
                    <path d="M6,4l12,8L6,20V4z" fill="#FFFFFF"></path>
                  </g>
                </svg>
              )}
            </button>
          </div>
          <div className="mt-2">
            <div className="font-[Roboto,Noto Naskh Arabic UI,Arial,sans-serif]  text-l mb-1">
              {musicInfo[4].titleOne} <br />
              {musicInfo[4].titleTwo}
            </div>
            <p className="text-gray-400 text-base flex flex-row items-center ">
              <audio id="4">
                <source src={musicInfo[4].audiosrc} />
              </audio>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
                className="style-scope yt-icon"
                width="18"
                height="18"
              >
                <g
                  className="style-scope yt-icon"
                  fillOpacity="0.7"
                  fill="#FFFFFF"
                >
                  <path
                    d="M3,3v18h18V3H3z M16,9h-6v2h6v2h-6v2h6v2H8V7h8V9z"
                    className="style-scope yt-icon"
                    fill="#FFFFFF"
                    fillOpacity="0.7"
                  ></path>
                </g>
              </svg>{" "}
              {musicInfo[4].artist}
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded  shadow-lg">
          <div className="relative">
            <img
              className="w-40"
              src={musicInfo[5].imgsrc}
              alt="Sunset in the mountains"
            />
            <button
              className="absolute inset-0 mx-14"
              onClick={() => handlePlay("5")}
            >
              {playing[5] ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  width="48"
                  height="48"
                >
                  <g fill="#FFFFFF">
                    <path d="M9,19H7V5H9ZM17,5H15V19h2Z" fill="#FFFFFF"></path>
                  </g>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  width="48"
                  height="48"
                >
                  <g fill="#FFFFFF">
                    <path d="M6,4l12,8L6,20V4z" fill="#FFFFFF"></path>
                  </g>
                </svg>
              )}
            </button>
          </div>
          <div className="mt-2">
            <div className="font-[Roboto,Noto Naskh Arabic UI,Arial,sans-serif]  text-l mb-1">
              {" "}
              {musicInfo[5].titleOne}
              <br />
              {musicInfo[5].titleTwo}
            </div>
            <p className="text-gray-400 text-base flex flex-row items-center ">
              <audio id="5">
                <source src={musicInfo[5].audiosrc} />
              </audio>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
                width="18"
                height="18"
              >
                <g fillOpacity="0.7" fill="#FFFFFF">
                  <path
                    d="M3,3v18h18V3H3z M16,9h-6v2h6v2h-6v2h6v2H8V7h8V9z"
                    fill="#FFFFFF"
                    fillOpacity="0.7"
                  ></path>
                </g>
              </svg>
              {musicInfo[5].artist}
            </p>
          </div>
        </div>
      </div>
      {
        flag && (
          // <div className="flex flex-col justify-between min-h-screen">
          <MusicPlayer songId={info} playNext={playNext} playing={playing} handlePlay={handlePlay}/>
        )

        // </div>
      }
    </>
  );
}

{
  /* <span class="style-scope yt-formatted-string"> • </span> */
}

// {playing&&
//   <button>
// <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="36" height="36">
//   <g height="24" viewBox="0 0 24 24" width="24" fill="#FFFFFF">
//     <path d="M9,19H7V5H9ZM17,5H15V19h2Z"  fill="#FFFFFF"></path></g></svg>
// </button>}
