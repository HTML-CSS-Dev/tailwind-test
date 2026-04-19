import ArrowIcon from "./arrow-icon";

export default function sameBtn({text}) {
    return (  
        <button className="bg-[#444CFC] relative py-5 px-8 flex items-center gap-4 cursor-pointer hover:bg-[#212cfa] duration-100 ease-in active:scale-[1.01] text-white">
            <svg className="absolute top-0 left-0" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 11.4074V0H28V11.4074H0Z" fill="#666DFF"/>
                <path d="M0 27.9999V19.7036H7.72414V27.9999H0Z" fill="#666DFF"/>
                <path d="M0 19.7037V0H18.3448V19.7037H0Z" fill="#FFA155"/>
                <path d="M7.72461 11.4074V0H18.3453V11.4074H7.72461Z" fill="#FFD3AF"/>
            </svg>

            {text}
            {/* Request Quote */}
            <ArrowIcon position="mt-1" />
        </button>
    )
}