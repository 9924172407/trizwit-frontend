import heroImage from "../assets/hero_image.png";

const HeroSection = () => {
  return (
    <div className="m-5 p-5 flex flex-wrap justify-around items-center gap-3">
      <div className="flex-auto md:flex-1 w-full">
        <img src={heroImage} className="h-auto w-200" alt="no image found" />
      </div>
      <div className="flex-auto md:flex-1 pl-4 w-full m-auto justify-between align-middle gap-2">
        <h2 className="font-serif text-3xl mb-2">
          For every student,
          <br /> every classroom.
          <br /> Real results.
        </h2>
        <h3>
          We&apos;re a nonprofit with the mission to provide a free, world-class
          education for anyone, anywhere.
        </h3>
        <button className="bg-blue-500 w-full text-white sm:w-full md:w-auto my-2">
          Start here
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
