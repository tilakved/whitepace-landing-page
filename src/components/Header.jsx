import logo from "../assets/Logo.png";
import downArrow from "../assets/Down Arrow.png";
import rightArrow from "../assets/Right Arrow.png";

function Header() {
  return (
    <div className="w-screen bg-primary">
      <div className="wrapper flex items-center justify-between p-4 lg:px-8 ">
        {/* Logo Section */}
        <div>
          <img src={logo} alt="Logo" className="w-24 md:w-32" />
        </div>

        {/* Navigation Menu */}
        <div className="flex items-center text-md font-medium	">
          <ul className="lg:flex space-x-8 text-white hidden ">
            <li className="flex items-center cursor-pointer gap-[10px]">
              Products <img src={downArrow} alt="Down Arrow" className="ml-[10px] " />
            </li>
            <li className="flex items-center cursor-pointer gap-[10px]">
              Solutions <img src={downArrow} alt="Down Arrow" className="ml-[10px] " />
            </li>
            <li className="flex items-center cursor-pointer gap-[10px]">
              Resources <img src={downArrow} alt="Down Arrow" className="ml-[10px] " />
            </li>
            <li className="flex items-center cursor-pointer gap-[10px]">
              Pricing <img src={downArrow} alt="Down Arrow" className="ml-[10px] " />
            </li>
          </ul>

          <div className="hidden md:flex lg:flex space-x-6 ml-[60px]">
            <button className="bg-[#FFE492] px-4 py-2 rounded text-primary hover:brightness-110">
              Login
            </button>
            <button className="bg-[#4F9CF9] px-4 py-2 rounded text-white hover:brightness-110 flex items-center">
              Try Whitepace free <img className="h-[10px] w-[10px] ml-[10px]" src={rightArrow} alt="Right Arrow" />
            </button>
          </div>
          <div className="lg:hidden flex items-center ml-10">
            <button className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Icon */}

      </div>
    </div>

  );
}

export default Header;
