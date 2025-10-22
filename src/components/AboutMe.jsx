import LaptopImage from "../assets/laptop-icon.svg";
import RockerImage from "../assets/rocket-icon.svg";
import { Button } from "./ui/button";

const AboutMe = () => {
  return (
    <div className="mx-auto w-full sm:w-[70%] flex justify-center items-center mt-10 md:mt-12">
      <div className="flex flex-col gap-2 p-6 sm:gap-4 sm:p-10 relative bg-white rounded-lg shadow-elevated max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-text-title">
          About Me
        </h2>
        <p className="text-lg text-text-1">
          Hello! I'm Tran Duy Khanh, a passionate Frontend Developer based in
          Vietnam. I specialize in creating beautiful and functional web
          applications using modern technologies like React, Tailwind CSS, and
          more. With a keen eye for design and a commitment to clean code, I
          strive to deliver exceptional user experiences. When I'm not coding,
          you can find me exploring new tech trends or enjoying a good book.
        </p>
        <img
          className="size-40 animate-float hidden sm:block absolute -top-10 -left-35"
          src={LaptopImage}
          alt="Laptop"
        />
        <img
          className="size-40 animate-float hidden sm:block absolute -bottom-20 -right-30"
          src={RockerImage}
          alt="Rocket"
        />
        <div className="flex justify-center gap-2">
          <a
            href="https://static.topcv.vn/topcv-cv-uploads/4657afd6d32600be369067cf7f6c34d7.pdf"
            download
            className="w-1/2 sm:w-1/3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="default"
              className="bg-blue-500 hover:bg-blue-600 w-full text-white"
            >
              View CV
            </Button>
          </a>
          <Button
            variant="outline"
            className="bg-white w-1/2 sm:w-1/3 text-black"
          >
            View Projects
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
