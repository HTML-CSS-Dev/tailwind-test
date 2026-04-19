import MainLogo from "../../common/main-logo";
import ArrowIcon from "../../common/arrow-icon";
import SameBtn from "../../common/same-button";
import { Logo1 , Logo2 , Logo3 , Logo4 , Logo5 } from "../../common/list-items";

const listItems = ["Service" , "Company" , "Career" , "Blog" , "Contact us"];
const logoItems = [ <Logo1 /> , <Logo2 /> , <Logo3 /> , <Logo4 /> , <Logo5 />];

export default function Header() {
    return (
        <header className="bg-[#232536] text-white">
        <div className="border-b-2 border-solid border-[#FFFFFF0D]">
        <div className="main-container">
            <nav className="flex justify-between items-center">
                <a href="#" className="cursor-pointer">
                    <MainLogo color = "white"/>
                </a>
                <ul className="flex gap-8 items-center">
                    <li className="text-[1rem] cursor-pointer font-medium border-solid border-t-3 border-[#FFA155]  py-5"><a href="">Home</a></li>
                    {listItems.map(
                        items => <li className="text-[1rem] cursor-pointer font-medium opacity-60 ease-in duration-150 hover:opacity-100 mt-1"><a href="#">{items}</a></li>
                    )}
                    <li className="text-[1rem] cursor-pointer font-medium text-[#FFD3AF] flex gap-2 items-center animated duration-75 ease-in mt-1"><a href="#"> Clone project</a>
                        <ArrowIcon position="mt-1.5" />
                    </li>
                </ul>
            </nav>
        </div>
        </div>

            <div className="main-container mt-24">
                
                {/* request quote */}
            <div className="flex items-center justify-between">
                <div>
                    <div className="h-6 w-6 bg-[#FFFFFF0F]"></div>
                    <h1 className="font-semibold text-[56px] leading-16">
                        Transform Your Idea<br /> 
                        Into Reality with<br />
                        Finsweet
                    </h1>
                    <p className="font-normal opacity-60 leading-6 mt-6 mb-8">
                        The entire Finsweet team knows what's good with Webflow and<br />
                        you can too with 1 week and a good attitude.
                    </p>
                    
                <SameBtn text = "Request Quote"/>

                </div>
                <div>
                    <img src="/office-img.png" className="h-auto"  alt="office img" />
                </div>
            </div>

                {/* company list */}
                <ul className="flex items-center justify-between">
                    <li>
                        <p className="font-medium text-[14px] opacity-60">Our Clients</p>
                        <p className="font-semibold text-[18px]">We've Worked with</p>
                    </li>
                    { logoItems.map(items => <li className="cursor-pointer hover:scale-[1.1] duration-150 ease-in-out"> {items}</li>) }
                </ul>
            </div>
        </header>
    )
}