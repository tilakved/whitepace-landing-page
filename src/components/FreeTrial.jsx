import appIcons from "../assets/App-icons.png";
import rightArrow from "../assets/Right Arrow.png";

function FreeTrial() {
    return (
        <div className="w-screen bg-primary py-10 text-white">
            <div className="wrapper mx-auto flex flex-col items-center md:items-start lg:items-center text-center px-6 lg:px-16">
                {/* Title Section */}
                <h2 className=" text-3xl lg:text-4xl font-bold leading-tight">
                    Try Whitepace Today
                </h2>
                <p className="mt-4 text-base lg:text-lg">
                    Get started for free. Add your whole team as your needs grow.
                </p>

                {/* Call-to-Action Button */}
                <button className="mt-6 bg-[#4F9CF9] px-6 py-3 rounded-full hover:brightness-110 flex items-center">
                    Try Whitepace Free
                    <img
                        className="h-4 w-4 ml-2"
                        src={rightArrow}
                        alt="Right Arrow"
                    />
                </button>

                {/* Additional Info */}
                <p className="text-sm lg:text-base mt-4">
                    On a big team? <span className="hover:underline cursor-pointer">Contact sales</span>
                </p>

                {/* App Icons */}
                <img
                    src={appIcons}
                    alt="App Store and Google Play Icons"
                    className="mt-6 w-48 lg:w-64"
                />
            </div>
        </div>
    );
}

export default FreeTrial;
