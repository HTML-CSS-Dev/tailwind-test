import SameBtn from "../../common/same-button";
import { Qualityicon , Teachnicalsupport , Developmenticon } from "../../common/expertise-icons";

const blockList = [
    {
        icon:<Teachnicalsupport />,
        heading:"Technical support",
        paragraph1:"We aim to attain the greatest",
        paragraph2:"satisfaction for our clients and be one of",
        paragraph3:"the prominent names when it comes to",
        paragraph4:"world-class service"
    },

    {
        icon:<Qualityicon />,
        heading:"Testing Management",
        paragraph1:"We aim to attain the greatest",
        paragraph2:"satisfaction for our clients and be one of",
        paragraph3:"the prominent names when it comes to",
        paragraph4:"world-class service"
    },

    {
        icon:<Developmenticon />,
        heading:"Development",
        paragraph1:"We aim to attain the greatest",
        paragraph2:"satisfaction for our clients and be one of",
        paragraph3:"the prominent names when it comes to",
        paragraph4:"world-class service"
    }
]


export default function ServiceSection() {
    return (
        <section className="bg-[#FFE6D2] py-24">
            <div className="main-container">
            
            <div>
                <h3 className="pre-heading">Our Services</h3>
                <h4 className="heading pt-3 pb-10">We build software solutions <br /> that solve client's business <br /> challenges</h4>
                    <SameBtn text = "Start a Project" />
                </div>

                <div className="flex mt-20 justify-between"> 
                    {blockList.map(
                        list => 
                    <div className="pt-12 pl-12 pb-11 pr-7.75 bg-[#FFFFFF]">
                            {list.icon}
                        <h3 className="mt-4 mb-2 text-[#000000] font-semibold leading-7">{list.heading}</h3>
                        <p className="text-[#5D5F6D] font-normal leading-6">
                            {list.paragraph1}<br />
                            {list.paragraph2}<br />
                            {list.paragraph3}<br />
                            {list.paragraph4}
                        </p>
                        
                    <h4 className="flex items-center gap-3.5 font-medium leading-6 text-[#444CFC] cursor-pointer mt-6">Read more
                        <svg className="mt-1" width="25" height="8" viewBox="0 0 25 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.3536 4.03556C24.5488 3.8403 24.5488 3.52372 24.3536 3.32846L21.1716 0.146475C20.9763 -0.0487874 20.6597 -0.0487875 20.4645 0.146475C20.2692 0.341737 20.2692 0.658319 20.4645 0.853582L23.2929 3.68201L20.4645 6.51044C20.2692 6.7057 20.2692 7.02228 20.4645 7.21754C20.6597 7.4128 20.9763 7.4128 21.1716 7.21754L24.3536 4.03556ZM-4.37114e-08 4.18201L24 4.18201L24 3.18201L4.37114e-08 3.18201L-4.37114e-08 4.18201Z" fill="black"/>
                        </svg>
                    </h4>
                    </div>
                    )}
                </div>
            </div>
        </section>
    )
}