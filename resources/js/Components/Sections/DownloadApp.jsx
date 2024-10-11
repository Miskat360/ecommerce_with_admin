import SectionHeading from "../SectionHeading";
import { logo } from "@/data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "@inertiajs/react";

const DownloadApp = () => {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.to(".grayBurger1", {
            x: 0,
            duration: 1,
            ease: "linear",
            scrollTrigger: {
                trigger: ".grayBurger1",
                markers: false,
                start: "top bottom",
                end: "top 50%",
                scrub: 1,
            },
        });
        gsap.to(".chili-burger", {
            y: "-80%",
            duration: 1,
            ease: "linear",
            scrollTrigger: {
                trigger: ".chili-burger",
                markers: false,
                start: "top bottom",
                end: "top top",
                scrub: 1,
            },
        });
    });
    return (
        <>
            <div className="w-full relative bg-downloadBg bg-cover">
                <SectionHeading
                    title="Get the"
                    subTitle="foodo app"
                    img="/images/download-app/app-screen.png"
                    paragraph="Enjoy exclusive deals and the best of McDonald's right at your fingertips"
                    imgClasses="!w-[60px] xs:!w-[80px] sm:mx-4 !-mb-0 sm:!mb-3"
                    // subTitleClasses="!text-[#E63945]"
                />
                <img
                    src="/images/download-app/gray-burger1.png"
                    alt=""
                    className="grayBurger1 absolute -top-[10%] sm:-top-[10%] -left-[20%] sm:-left-[8%] sm:w-[300px] w-[150px] bright -translate-x-full"
                />
                <div className="px-4 py-8 sm:p-8 lg:p-[7vw] rounded-3xl text-black flex gap-8 lg:gap-0 items-center flex-col-reverse lg:flex-row">
                    <div>
                        <div className="text-4xl sm:text-[4rem] font-popularCafe sm:my-5 lg:my-7">
                            Get 20% Discount
                        </div>
                        <div className="text-lg leading-none sm:text-[2rem]">
                            Get flat 20% off on your first order though The
                            Foodo App!
                        </div>
                        <div className="flex items-center justify-center sm:justify-normal gap-4 mt-8">
                            <Link>
                                <img
                                    src="/images/download-app/google-play.png"
                                    alt=""
                                    className="max-w-[8rem] sm:max-w-[10rem]"
                                />
                            </Link>
                            <Link>
                                <img
                                    src="/images/download-app/apple-store.png"
                                    alt=""
                                    className="max-w-[8rem] sm:max-w-[10rem]"
                                />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img
                            src="/images/download-app/app-screen.png"
                            alt=""
                            className="w-[20rem] lg:w-auto"
                        />
                    </div>
                </div>
                <img
                    src="/images/download-app/gray-burger3.png"
                    alt=""
                    className="chili-burger bright absolute top-[65%] left-1/2 -translate-x-1/2 scale-150"
                />
                <img
                    src="/images/download-app/chili.png"
                    alt=""
                    className="chili-burger bright absolute top-[35%] right-[3%] -translate-x-1/2 opacity-60"
                />
            </div>
        </>
    );
};

export default DownloadApp;
