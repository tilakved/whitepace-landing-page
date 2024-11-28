import blackCheckmark from "../assets/blackCheckmark.svg";
import yellowCheckmark from "../assets/yellowCheckmark.svg";
import element from "../assets/Element.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Pricing() {
    const cardDetails = [   
        { plan: "Free", price: 0, tag: 'Capture ideas and find them quickly' },
        { plan: "Personal", price: 11.99, tag: 'Keep home and family on track' },
        { plan: "Organization", price: 49.99, tag: 'Capture ideas and find them quickly' }]
    return (
        <div className="w-screen bg-white py-10 lg:py-20">
            {/* Wrapper Section */}
            <div className="wrapper flex flex-col gap-10 items-center justify-between w-full px-6 lg:px-16">
                {/* Left Section - Header */}
                <div className="text-center lg:text-left lg:w-1/2">
                    <div className="relative inline-block">
                        <h2 className=" text-3xl lg:text-5xl font-bold relative z-10 ">
                            Choose Your Plan
                        </h2>
                        <img src={element} alt="Element" className="absolute w-[55%] bottom-[-8px] right-0 z-0" />
                    </div>
                    <p className="mt-4 text-sm lg:text-base">
                        Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Whitepace has the right plan for you.
                    </p>
                </div>

                {/* Right Section - Pricing Cards */}
                <div className="flex-col lg:flex-row items-center justify-center gap-8 flex sm:hidden">
                    {/* Pricing Card */}
                    <Carousel showArrows={false} showStatus={false} swipeable={true} emulateTouch={true} >
                        {cardDetails.map((card, index) => (
                            <div key={index} className={index === 1 ? 'p-6 rounded-lg bg-primary w-full lg:w-1/3 text-white mb-20' : 'mb-20 border-2 border-[#FFE492] p-6 rounded-lg bg-white w-full lg:w-1/3'}>
                                <h4 className=" text-lg font-semibold">{card.plan}</h4>
                                <h2 className=" text-4xl font-bold mt-2">${card.price}</h2>
                                <p className=" text-sm mt-2">{card.tag}</p>
                                <ul className='mt-4 space-y-3'>
                                    <li className="flex items-center gap-3">
                                        <img className="!w-auto" src={index === 1 ? yellowCheckmark : blackCheckmark} alt="Checkmark" />
                                        <p className="text-sm">Sync unlimited devices</p>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <img className="!w-auto" src={index === 1 ? yellowCheckmark : blackCheckmark} alt="Checkmark" />
                                        <p className="text-sm">10 GB monthly uploads</p>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <img className="!w-auto" src={index === 1 ? yellowCheckmark : blackCheckmark} alt="Checkmark" />
                                        <p className="text-sm">200 MB max. note size</p>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <img className="!w-auto" src={index === 1 ? yellowCheckmark : blackCheckmark} alt="Checkmark" />
                                        <p className="text-sm">Customize Home dashboard and access extra widgets</p>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <img className="!w-auto" src={index === 1 ? yellowCheckmark : blackCheckmark} alt="Checkmark" />
                                        <p className="text-sm">Connect primary Google Calendar account</p>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <img className="!w-auto" src={index === 1 ? yellowCheckmark : blackCheckmark} alt="Checkmark" />
                                        <p className="text-sm">Add due dates, reminders, and notifications to your tasks</p>
                                    </li>
                                </ul>
                                {index !== 1 && <button className="mt-6 border-[#FFE492] border-2 text-primary py-2 px-4 rounded transition">
                                    Get Started
                                </button>}
                                {index === 1 && <button className="mt-6 bg-[#4F9CF9] px-4 py-2 rounded text-white hover:brightness-110 flex items-center">
                                    Get Started</button>}
                            </div>
                        ))
                        }
                    </Carousel>
                </div>
                {/* Right Section - Pricing Cards */}
                <div className="hidden sm:flex flex-row items-center justify-center gap-8">
                    {/* Pricing Card */}
                    {cardDetails.map((card, index) => (
                        <div key={index} className={index === 1 ? 'p-6 rounded-lg bg-primary w-full lg:w-1/3 text-white py-[63px]' : 'border-2 border-[#FFE492] p-6 rounded-lg bg-white w-full lg:w-1/3 hidden sm:block'}>
                            <h4 className=" text-lg font-semibold">{card.plan}</h4>
                            <h2 className=" text-4xl font-bold mt-2">${card.price}</h2>
                            <p className=" text-sm mt-2">{card.tag}</p>
                            <ul className={index === 1 ? ' mt-4 space-y-6' : 'text-[#212529] mt-4 space-y-3'}>
                                <li className="flex items-center gap-3">
                                    <img src={index === 1 ? yellowCheckmark : blackCheckmark} alt="Checkmark" />
                                    <p className="text-sm">Sync unlimited devices</p>
                                </li>
                                <li className="flex items-center gap-3">
                                    <img src={index === 1 ? yellowCheckmark : blackCheckmark} alt="Checkmark" />
                                    <p className="text-sm">10 GB monthly uploads</p>
                                </li>
                                <li className="flex items-center gap-3">
                                    <img src={index === 1 ? yellowCheckmark : blackCheckmark} alt="Checkmark" />
                                    <p className="text-sm">200 MB max. note size</p>
                                </li>
                                <li className="flex items-center gap-3">
                                    <img src={index === 1 ? yellowCheckmark : blackCheckmark} alt="Checkmark" />
                                    <p className="text-sm">Customize Home dashboard and access extra widgets</p>
                                </li>
                                <li className="flex items-center gap-3">
                                    <img src={index === 1 ? yellowCheckmark : blackCheckmark} alt="Checkmark" />
                                    <p className="text-sm">Connect primary Google Calendar account</p>
                                </li>
                                <li className="flex items-center gap-3">
                                    <img src={index === 1 ? yellowCheckmark : blackCheckmark} alt="Checkmark" />
                                    <p className="text-sm">Add due dates, reminders, and notifications to your tasks</p>
                                </li>
                            </ul>
                            {index !== 1 && <button className="mt-6 border-[#FFE492] border-2 text-primary py-2 px-4 rounded transition">
                                Get Started
                            </button>}
                            {index === 1 && <button className="mt-6 bg-[#4F9CF9] px-4 py-2 rounded text-white hover:brightness-110 flex items-center">
                                Get Started</button>}
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Pricing;
