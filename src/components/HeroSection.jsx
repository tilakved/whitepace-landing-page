import hero from "../assets/hero.png";
import rightArrow from "../assets/Right Arrow.png";

function HeroSection() {
  return (
    <div className="w-screen bg-wave-image bg-primary">
      <div className="wrapper flex flex-col lg:flex-row items-center justify-center w-full p-4 lg:px-8">
        {/* Left Section - Content */}
        <div className="text-center lg:text-left lg:max-w-md">
          <h2 className="text-white text-3xl lg:text-5xl font-bold leading-snug">
            Get More Done with whitepace
          </h2>
          <h6 className="text-white text-sm lg:text-lg mt-4">
            Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
          </h6>
          <button className="bg-[#4F9CF9] px-4 py-2 rounded text-white hover:brightness-110 flex items-center mt-10 mx-auto md:mx-auto lg:mx-0">
            Try Whitepace free <img className="h-[10px] w-[10px] ml-[10px]" src={rightArrow} alt="Right Arrow" />
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center">
          <img src={hero} alt="Hero" className="w-3/4 lg:w-full max-h-[400px]" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
