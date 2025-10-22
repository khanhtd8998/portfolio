import Atropos from "atropos/react";
const Section = () => {
  return (
    <>
      <section className="min-h-[80vh] max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-evenly gap-10 overflow-hidden">
        <Atropos
          className="atropos-avatar w-[250px] h-[250px] md:w-[300px] md:h-[300px]"
          activeOffset={40}
          shadowScale={1.05}
          highlight={false}
        >
          <div className="p-[4px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 inline-block">
            <img
              src="./avatar.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full shadow-xl"
            />
          </div>
        </Atropos>
      </section>
    </>
  );
};

export default Section;
