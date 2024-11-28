import rightArrow from "../assets/Right Arrow.png";
import logo from "../assets/Logo.png";
import world from "../assets/world.png";
import socialIcons from "../assets/Social Icon.png";
import downArrow from "../assets/Down Arrow.png";



function Footer() {
    return (
        <footer className="bg-primary text-white py-8">
            <div className="wrapper mx-auto px-4 lg:px-16">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-center md:justify-around md:items-start lg:items-center text-center md:text-left gap-8 lg:text-left w-full">
                    {/* Left Section */}
                    <div className="lg:w-1/3 flex flex-col items-center md:items-start">
                        <img src={logo} alt="Whitepace Logo" className="mb-4" />
                        <p className="text-lg max-w-[245px]">
                            Whitepace was created for the new ways we live and work. We make a better workspace around the world.
                        </p>
                    </div>

                    {/* Middle Section - Links */}
                    <div className="flex flex-col lg:flex-row justify-center md:justify-around md:items-start lg:items-center text-center md:text-left gap-8 lg:text-left w-full">
                        <div>
                            <h4 className="text-white font-semibold mb-3">Product</h4>
                            <ul className="space-y-2 text-base">
                                <li><a href="#" className="text-white hover:text-[#FFE492]">Overview</a></li>
                                <li><a href="#" className="text-white hover:text-[#FFE492]">Pricing</a></li>
                                <li><a href="#" className="text-white hover:text-[#FFE492]">Customer stories</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-3">Resources</h4>
                            <ul className="space-y-2 text-base">
                                <li><a href="#" className="text-white hover:text-[#FFE492]">Blog</a></li>
                                <li><a href="#" className="text-white hover:text-[#FFE492]">Guides & tutorials</a></li>
                                <li><a href="#" className="text-white hover:text-[#FFE492]">Help center</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-3">Company</h4>
                            <ul className="space-y-2  text-base">
                                <li><a href="#" className="text-white hover:text-[#FFE492]">About us</a></li>
                                <li><a href="#" className="text-white hover:text-[#FFE492]">Careers</a></li>
                                <li><a href="#" className="text-white hover:text-[#FFE492]">Media kit</a></li>
                            </ul>
                        </div>

                    </div>
                    <div className="lg:w-1/3 lg:ml-10 flex flex-col items-center md:items-start lg:items-start text-center md:text-left lg:text-left">
                        <h4 className="text-white font-semibold mb-3">Try It Today</h4>
                        <p className="text-base mb-4 max-w-[245px] w-full">
                            Get started for free. Add your whole team as your needs grow.
                        </p>
                        <button className="mt-6 bg-[#4F9CF9] px-6 py-3 rounded-full hover:brightness-110 flex items-center m-auto md:m-0">
                            Start Today
                            <img
                                className="h-4 w-4 ml-2"
                                src={rightArrow}
                                alt="Right Arrow"
                            />
                        </button>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-20 border-t border-gray-700 pt-6 flex flex-col lg:flex-row justify-between items-center w-full">
                    <div className="text-base flex">
                        <ul className="flex space-x-6">
                            <li><a href="#" className="text-white hover:text-[#FFE492] flex items-center gap-3">
                                <img src={world} />
                                English
                                <img src={downArrow} />
                            </a></li>
                            <li><a href="#" className="text-white hover:text-[#FFE492]">Terms & Privacy</a></li>
                            <li><a href="#" className="text-white hover:text-[#FFE492]">Security</a></li>
                            <li><a href="#" className="text-white hover:text-[#FFE492]">Status</a></li>
                            <li><a href="#" className="text-white">©2024 Whitepace LLC.</a></li>
                        </ul>
                    </div>
                    <div className="flex space-x-4 mt-4 lg:mt-0">
                        <img
                            src={socialIcons}
                            alt="App Store and Google Play Icons" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
