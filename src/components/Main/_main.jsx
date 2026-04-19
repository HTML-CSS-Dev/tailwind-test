// about Section
import HorizontalRules from "../../common/horizontal-rules";

const img_items = ['/company1.png' , '/company2.png' , '/company3.png' ];
const statusItems = [
    {
        number:'1560+',
        title:'Project Delivered'
    },

    {
        number:'100+',
        title:'Professional'
    },

    {
        number:'950+',
        title:'Happy Client'
    },

    {
        number:'10yrs',
        title:'Experience'
    },
];

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
                    {img_items.map( items => <img src={items} alt={items} />)}
            </div>

            {/* about bottom */}
            <div className="flex justify-between items-center mt-12">
            
                <div className="flex gap-16">
                    {statusItems.map(
                        items => <div>
                                    <h3 className="font-semibold text-4xl leading-13.5 text-[#232536]">{items.number}</h3>
                                        <HorizontalRules />
                                    <p className="font-normal leading-6 text-[#000000]">{items.title}</p>
                                 </div> 
                        )}
                </div>

                <div>
                    <h4 className="flex items-center gap-3.5 font-medium leading-6 text-[#444CFC] cursor-pointer">Read about us
                        <HorizontalRules />
                    </h4>
                </div>
            
            </div>
        </div>
    </main>
    )
}