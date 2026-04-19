import Blueblocks from "../../common/blue-block";
import { VerticalRulers } from "../../common/horizontal-rules";
import Comma from "../../common/comma";
import Pagination from "../../common/pagination";
import { Logo6 } from "../../common/list-items";

export default function TestiomonialSection() {
    const images = ['/worker1.png' , '/worker2.png' , '/worker3.png'];

    return (
        <section className="bg-[#F9F9FF] pt-25.5 pb-29.75">
            <div className="main-container relative">
            <div className="flex items-center justify-between">
                <div>
                    <Blueblocks />
                    <h3 className="heading my-4">
                        Our customers love <br /> what we do
                    </h3>
                    <p className="text-[#232536] font-medium text-[18px] leading-7">Transform your idea into reality with finsweet</p>
                    <p className="font-normal leading-6 text-[#232536] mt-4 mb-6">It is a long established fact that a reader will be distracted by <br /> the readable content of a page when looking at its layout. </p>

                    <div className="mt-6 mb-3.5 flex gap-3">
                        { images.map(
                            item => <img className="cursor-pointer hover:scale-[1.05]" src= {item} />
                        )}
                    </div>

                    <p className="text-[#000000] font-medium text-[12px] leading-4"><span className="leading-6 text-[16px] mr-1">30+</span>Customer Reviews</p>
                </div>

                <div className="flex">
                        <VerticalRulers />
                <div className="bg-[#FFFFFF] relative pt-12 pb-10.5 pl-10 pr-17.25">
                    <Comma />

                    <h3 className="font-semibold text-2xl leading-9 mb-6">
                        Finsweet has been a wonderful partner <br /> to work with. I have been a customer <br /> now for the past few months now and I <br /> have had nothing but positive <br /> experiences!
                    </h3>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <img className="h-9.5 w-9.5" src="/worker3.png" alt="" />
                            <div className="text-[#232536]">
                                <b className="font-semibold leading-7">Johnny Andro</b>
                                <p className="font-medium leading-5 opacity-60">Director, Company</p>
                            </div>
                        </div>
                        <Logo6 />
                    </div>
                </div> 
                </div>

              </div>
                <Pagination />
            </div>
        </section>
    )
}