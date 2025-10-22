import { useRef, useState } from "react";
import * as motion from "motion/react-client";

const Header = () => {
  const audioRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    audioRef.current.currentTime = 3;
    audioRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    audioRef.current?.pause();
    audioRef.current.currentTime = 3;
  };

  return (
    <div className="flex justify-center md:justify-between items-center pb-5 sm:px-10 sm:pb-0">
      <div className="relative flex flex-col md:flex-row items-center gap-6">
        <div className="shadow-elevated size-42 rounded-full p-2 bg-white">
          <img
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`w-full h-full rounded-full shadow-custom transition-all linear ${
              isHovered ? "animate-spin [animation-duration:10s]" : ""
            }`}
            src={
              isHovered
                ? "https://vppsonca.vn/wp-content/uploads/2021/07/Dia-DVD-Maxell_1.jpg"
                : "./avatar.jpg"
            }
            alt="Avatar"
          />
          <audio
            ref={audioRef}
            src="/Song From Secret Garden.mp3"
            preload="auto"
          />
          {isHovered && (
            <div className="absolute bottom-[-40px] w-36 h-6 overflow-hidden">
              <div
                className="w-[100%] h-full bg-[url('/beatmusic.svg')] bg-repeat-x"
                style={{
                  backgroundSize: "contain",
                  backgroundPosition: "left center",
                }}
              ></div>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl text-center md:text-left font-bold text-text-title">
            Tran Duy Khanh
          </h1>
          <div className="flex sm:flex-none text-center md:flex gap-2">
            <p className="text-md w-1/2 md:text-lg p-1 max-w-[220px] md:px-2 rounded-md bg-white shadow-custom text-text-1 font-semibold">
              Frontend Developer
            </p>
            <p className="text-md w-1/2 md:text-lg p-1 max-w-[220px] md:px-2 rounded-md bg-white shadow-custom text-text-1 font-semibold">
              Fullstack Developer
            </p>
          </div>
          <p className="text-md text-center md:text-left md:text-lg max-w-[400px]">
            Seeking a <strong>Frontend Developer</strong> position focusing on
            building modern web applications with <strong>React</strong>
          </p>
        </div>
      </div>
      {/* <div className="w-max">
                <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-black font-bold">
                    Hello, I'm Khanh!
                </h1>
            </div> */}

      <div className=" bg-white/70 backdrop-blur-md rounded-xl px-4 py-2 shadow-md text-sm font-medium text-nimevoli">
        “Building smooth user experiences 🚀”
      </div>
    </div>
  );
};

export default Header;
