import { Timeicon , Qualityicon , Supporticon } from "../../common/expertise-icons";
import Blueblocks from "../../common/blue-block";

const blockIcons = [ 
{
    icon: <Qualityicon />,
    title: 'Best Quality',
    paragraph1: "Through True Rich Attended does no end",
    paragraph2: "it his mother since real had half every him."
},

{
    icon: <Supporticon /> ,
    title: 'Support Assist',
    paragraph1:"Through True Rich Attended does no end",
    paragraph2:"it his mother since real had half every him."
}
];

export default function ExpertiseSection() {
    return (
        <section className="py-24 bg-[#ECF8F9]">
            <div className="main-container flex justify-between">
                {/* left */}
                <div>
                    <h3 className="pre-heading">Our expertise</h3>
                    <h4 className="heading mt-4 mb-6">We want to get local<br />identification in every<br />corner of the world in this<br />era of global citizenship</h4>
                    <p className="font-normal leading-6 text-[#5D5F6D]">Through True Rich Attended does no end it his mother since real had half <br /> every him case in packages enquire we up ecstatic unsatiable saw his giving <br /> Remain expense you position concluded. </p>
                </div>

                {/* right */}
                <div className="flex flex-col gap-3">
                <div>
                    <Blueblocks />
                    <div className="py-8 pl-8 pr-29.25 bg-[#FFFFFF] flex gap-4">
                            <Timeicon />
                        <div>
                            <h1 className="leading-4 font-semibold text-[#000000] mb-2">On Time Delivery</h1>
                            <p className="text-[14px] leading-5 text-[#5D5F6D] font-medium">Through True Rich Attended does no end<br />it his mother since real had half every him.</p>
                        </div>
                    </div>
                </div>
                    
                    {
                        blockIcons.map(
                            items => 
                        <div className="py-8 pl-8 pr-29.25 bg-[#FFFFFF] flex gap-4"> {items.icon}<div>
                            <h1 className="leading-4 font-semibold text-[#000000] mb-2">{items.title}</h1>
                            <p className="text-[14px] leading-5 text-[#5D5F6D] font-medium">{items.paragraph1}<br />{items.paragraph2}</p>
                        </div>
                    </div> )}
                </div>
            </div>
        </section>
    )
}