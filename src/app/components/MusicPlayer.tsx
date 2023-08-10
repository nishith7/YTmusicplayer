// import { useEffect, useState } from "react";
// import useSound from "use-sound";
// import { useRef, useState } from "react";
// import { useEffect, useState } from "react";
import musicInfo from "../musicinfo/musicInfo";

export default function MusicPlayer({songId,playNext,playing,handlePlay}:any) {
  
 
  // const [playing, setPlaying] = useState(
  //   new Array(musicInfo.length).fill(false)
  // );
  // const [currentTime, setCurrentTime]= useState(0);
  // const [duration, setDuration] = useState(300);
  // const audioRef =  useRef<HTMLAudioElement | null>(null);

  // const handleTimeUpdate = () => {
  //   const audioElement = audioRef.current;
  //   if (audioElement) {
  //     setCurrentTime(audioElement.currentTime);
  //   }
  // };

  // const handleLoadedMetadata = () => {
  //   const audioElement = audioRef.current;
  //   console.log('---->>',audioElement)
  //   if (audioElement) {
  //     setDuration(audioElement.duration);
  //   }
  // };
  // const pauseCurrent
//   const playNext = (songId:any)=> {
//     useEffect(()=>{
 
//   const toPause: any = document.getElementById(songId);
//   toPause.pause();
//   songId=songId+1;

//   const toPlay: any  = document.getElementById(songId);
//   toPlay.play();

// },[songId])
//   }
  

  return (
    <footer className="flex items-center fixed bottom-0 left-0 h-16 w-full bg-[#212121] ">
      {/* <div> */}

      {/* <audio
        ref={audioRef}
        src={musicInfo[0].songName}
        onTimeUpdate={handleTimeUpdate}
        // onLoadedMetadata={handleLoadedMetadata}
      /> */}
      {/* <div className="h-1 w-screen bg-gray-200">
  <div className="h-1 bg-red-700" style={{width: `${(currentTime / duration) * 100}%`}}></div> 
 </div> */}
 <div className="flex items-center">
  <button className="mx-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          width="24"
          height="24"
        >
          <g fill="#FFFFFF">
            <path
              d="M19,6L9,12l10,6V6L19,6z M7,6H5v12h2V6z"
              fill="#FFFFFF"
            ></path>
          </g>
        </svg>
      </button>
      
      <button className="mx-4" onClick={()=>handlePlay(songId)}>
{
  playing[songId]?(
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
  
  ):
  (
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

)

}
</button>
      
      <button className="mx-4" onClick={()=>playNext(songId)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          width="24"
          height="24"
        >
          <g fill="#FFFFFF">
            <path
              d="M5,18l10-6L5,6V18L5,18z M19,6h-2v12h2V6z"
              fill="#FFFFFF"
            ></path>
          </g>
        </svg>
      </button>

 </div>
      

      <span className="font-['Noto Naksh'] text-xs mx-4">0:00/3:21</span>

      <div className="flex items-center mx-64">
        <img
          className="w-11 h-11"
          src={musicInfo[songId].imgsrc}
          alt="Sunset in the mountains"
        />
        <div className="flex-col mx-3">
          {/* <div className=" h-1 bg-gray-200">
            <div className="h-1 bg-red-700" style={{ width: "50%" }}></div> */}
            <div className="font-[Roboto,Noto Naskh Arabic UI,Arial,sans-serif] font-normal text-base">
            {musicInfo[songId].title}
          </div>
               <p className="text-gray-400 text-base">{musicInfo[songId].artist}</p>
            {/* <audio>
              <source src={musicInfo[songId].audiosrc}/>
            </audio> */}
          </div> 
          
         
        </div>
        <div className="flex items-center">
          <button className="mx-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              width="24"
              height="24"
            >
              <g fill="#FFFFFF">
                <path
                  d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"
                  fill="#FFFFFF"
                ></path>
              </g>
            </svg>
          </button>
          <button className="mx-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              width="24"
              height="24"
            >
              <g fill="#FFFFFF">
                <path
                  d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"
                  fill="#FFFFFF"
                ></path>
              </g>
            </svg>
          </button>
        </div>
<button className="mx-3">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"  width="24" height="24"><g fill="#909090">
  <path d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"  fill="#909090">
    </path></g></svg>

</button>
{/* <div className=""> */}
  <button>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"  width="24" height="24"><g fill="#909090"><path d="M17.5,12c0,2.14-1.5,3.92-3.5,4.38v-1.04c1.44-0.43,2.5-1.76,2.5-3.34c0-1.58-1.06-2.9-2.5-3.34V7.62 C16,8.08,17.5,9.86,17.5,12z M12,4.07v15.86L6.16,15H3V9h3.16L12,4.07z M11,6.22L6.52,10H4v4h2.52L11,17.78V6.22z M21,12 c0,4.08-3.05,7.44-7,7.93v-1.01c3.39-0.49,6-3.4,6-6.92s-2.61-6.43-6-6.92V4.07C17.95,4.56,21,7.92,21,12z" fill="#909090"></path></g></svg>
  </button>

{/* </div> */}
      {/* </div> */}
    </footer>
  );
}
