// about Section
export default function Main() {
    return (
    <main className="pt-30 pb-24">
        <div className="main-container">
            <h1 className="pre-heading">ABOUT US</h1>
            {/* about top */}
            <div className="mt-4 flex justify-between">
                <h2 className="text-[#232536] lead-[58px] font-semibold text-5xl head">
                    The company leads entire<br />webdesign process from<br />concept to delivery.
                </h2>
                <div>
                    <h2 className="heading">
                        The Era Of Technology.
                    </h2>
                    <p className="text-[#5D5F6D] font-normal text-[16px] leading-6">Through True Rich Attended does no end it his mother since real had<br />half every him case in packages enquire we up ecstatic unsatiable<br />saw his giving Remain expense you position concluded. </p>
                </div>
            </div>
            {/* about img list */}
            <div className="flex justify-between mt-12">
                    <img src="/company1.png" alt="company1" />
                    <img src="/company2.png" alt="company2" />
                    <img src="/company3.png" alt="company3" />
            </div>
            {/* about bottom */}
            <div className="flex justify-between items-center mt-12">
            
                <div className="flex gap-16">
                <div>
                    <h3 className="font-semibold text-4xl leading-13.5 text-[#232536]">1560+</h3>
                        <svg className="mt-2 mb-1" width="72" height="6" viewBox="0 0 72 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="6.59929e-09" y="0.00012207" width="71.9999" height="6.00003" fill="#444CFC"/>
                            <rect x="10.4023" width="61.5953" height="6.00003" fill="#FFA155"/>
                            <rect x="10.0498" width="44.6449" height="5.99069" fill="#FFD3AF"/>
                        </svg>

                    <p className="font-normal leading-6 text-[#000000]">Project Delivered</p>
                </div>

                <div>
                    <h3 className="font-semibold text-4xl leading-13.5 text-[#232536]">100+</h3>
                        <svg className="mt-2 mb-1" width="72" height="6" viewBox="0 0 72 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="6.59929e-09" y="0.00012207" width="71.9999" height="6.00003" fill="#444CFC"/>
                            <rect x="10.4023" width="61.5953" height="6.00003" fill="#FFA155"/>
                            <rect x="10.0498" width="44.6449" height="5.99069" fill="#FFD3AF"/>
                        </svg>

                    <p className="font-normal leading-6 text-[#000000]">Professional</p>
                </div>


                <div>
                    <h3 className="font-semibold text-4xl leading-13.5 text-[#232536]">950+</h3>
                        <svg className="mt-2 mb-1" width="72" height="6" viewBox="0 0 72 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="6.59929e-09" y="0.00012207" width="71.9999" height="6.00003" fill="#444CFC"/>
                            <rect x="10.4023" width="61.5953" height="6.00003" fill="#FFA155"/>
                            <rect x="10.0498" width="44.6449" height="5.99069" fill="#FFD3AF"/>
                        </svg>

                    <p className="font-normal leading-6 text-[#000000]">Happy Client</p>
                </div>

                <div>
                    <h3 className="font-semibold text-4xl leading-13.5 text-[#232536]">10yrs</h3>
                        <svg className="mt-2 mb-1" width="72" height="6" viewBox="0 0 72 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="6.59929e-09" y="0.00012207" width="71.9999" height="6.00003" fill="#444CFC"/>
                            <rect x="10.4023" width="61.5953" height="6.00003" fill="#FFA155"/>
                            <rect x="10.0498" width="44.6449" height="5.99069" fill="#FFD3AF"/>
                        </svg>

                    <p className="font-normal leading-6 text-[#000000]">Experience</p>
                </div>
                </div>


                <div>
                    <h4 className="flex items-center gap-3.5 font-medium leading-6 text-[#444CFC] cursor-pointer">Read about us
                        <svg className="mt-1" width="25" height="8" viewBox="0 0 25 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.3536 4.03556C24.5488 3.8403 24.5488 3.52372 24.3536 3.32846L21.1716 0.146475C20.9763 -0.0487874 20.6597 -0.0487875 20.4645 0.146475C20.2692 0.341737 20.2692 0.658319 20.4645 0.853582L23.2929 3.68201L20.4645 6.51044C20.2692 6.7057 20.2692 7.02228 20.4645 7.21754C20.6597 7.4128 20.9763 7.4128 21.1716 7.21754L24.3536 4.03556ZM-4.37114e-08 4.18201L24 4.18201L24 3.18201L4.37114e-08 3.18201L-4.37114e-08 4.18201Z" fill="black"/>
                        </svg>
                    </h4>
                </div>
            
            </div>
        </div>
    </main>
    )
}