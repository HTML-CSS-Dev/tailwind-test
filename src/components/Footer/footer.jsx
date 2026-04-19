import MainLogo from "../../common/main-logo";
import { Instagramicon , FacebookIcon , LinkedIn, TwitterIcon } from "../../common/footer-icons";

export default function Footer() {
    const MediaIcons = [ <Instagramicon /> , <FacebookIcon /> , <LinkedIn /> , <TwitterIcon /> ];
    return (
        <footer className="bg-[#FFE6D2] py-7">
            <div className="main-container">
            <nav className="flex justify-between items-center">
                <div className="flex gap-5 items-center">
                    <a href="#" className="cursor-pointer">
                        <MainLogo color="black" />
                    </a>
                    <span className="font-medium leading-6">
                        ©2021 Finsweet
                    </span>
                </div>

                <div className="flex gap-6.5">
                    {MediaIcons.map(
                        icon => icon
                    )}
                </div>
            </nav>
            </div>
        </footer>
    )
}