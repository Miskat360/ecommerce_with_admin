import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navItems, socialMediaContact } from "@/data";
import { Link } from "@inertiajs/react";
import { RiArrowRightUpLine } from "@remixicon/react";
import PrimaryButton from "./PrimaryButton";

const Footer = () => {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.set(".brand-name span", {
            y: 150,
        });
        gsap.to(".brand-name span", {
            y: 4,
            stagger: 0.05,
            scrollTrigger: {
                trigger: ".brand-name",
                markers: false,
                start: "5% 75%",
                end: "30% 80%",
                scrub: 3,
            },
        });
    });

    return (
        <>
            <div className="relative text-black">
                <div className="">
                    <img
                        src="/images/footer/large-burger.png"
                        alt=""
                        className="absolute bottom-0 -right-[40%] md:right-0 lg:right-[10%] bright z-[1] w-[50vh] xl:w-[450px]"
                    />
                </div>
                <div className="w-full h-auto sm:min-h-[85vh] md:min-h-[92vh] bg-black text-white px-5 xl:px-10 sm:pb-10 pt-8 sm:pt-20 relative overflow-hidden">
                    <div className="w-full flex max-lg:flex-col justify-between z-[2] relative lg:absolute left-0 sm:px-5 xl:px-10">
                        <div
                            className={`flex flex-col-reverse gap-[4vw] sm:gap-[2vw] lg:flex-row`}
                        >
                            <div className="sm:text-xl capitalize inline">
                                <div className="underline text-xl max-sm:mt-2">
                                    quick link
                                </div>
                                {navItems.map((item, index) => (
                                    <div key={index}>
                                        <Link
                                            href={item.link}
                                            className="group inline-block overflow-hidden"
                                        >
                                            <div className="flex items-center">
                                                {item.name}
                                                <RiArrowRightUpLine size={20} />
                                            </div>
                                            <div className="group-hover:translate-x-0 -translate-x-[110%] w-full h-[1px] bg-white transition-all duration-300" />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <div className={`max-lg:mb-8`}>
                                <h1 className="text-2xl mb-6">
                                    Join our mailing list for the latest
                                    updates.
                                </h1>
                                <form action="" className="flex">
                                    <input
                                        type="text"
                                        placeholder="Enter your email address..."
                                        className="px-2 sm:px-6 py-2  mr-1 sm:mr-4 w-[65%] sm:w-[350px]  rounded-full border border-primary text-black max-sm:text-sm focus:!border-primary focus:!ring-primary"
                                    />
                                    <PrimaryButton
                                        text="subscribe"
                                        className="!w-[140px] sm:!w-[160px] !font-medium !lowercase max-sm:text-sm"
                                        iconDivClasses="max-sm:!p-[7px]"
                                    >
                                        <RiArrowRightUpLine />
                                    </PrimaryButton>
                                </form>
                            </div>
                        </div>
                        <div className="lg:text-end lg:self-end sm:text-xl capitalize">
                            <div className="underline text-xl max-lg:mt-4">
                                social Media
                            </div>
                            {socialMediaContact.map((item, index) => (
                                <div key={index}>
                                    <Link
                                        href={item.link}
                                        className="group inline-block overflow-hidden"
                                    >
                                        <div className="flex items-center">
                                            {item.name}
                                            <RiArrowRightUpLine size={20} />
                                        </div>
                                        <div className="group-hover:translate-x-0 -translate-x-[110%] w-full h-[1px] bg-white transition-all duration-300" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h1 className="brand-name absolute left-1/2 lg:left-[45%] -translate-x-1/2 bottom-[8%] flex items-center justify-center text-[20vw] font-pinkPencil leading-none">
                            {"foodo".split("").map((item, index) => (
                                <span key={index}>{item}</span>
                            ))}
                        </h1>
                    </div>
                    <div className="w-[calc(100%-80px)] border-t py-5 sm:py-11 mt-8 relative sm:absolute bottom-0 bg-black">
                        <div className="flex max-sm:flex-col justify-between">
                            <div className="max-sm:text-sm underline">
                                <Link>Privacy Policy</Link>
                                <Link className="ml-4">Terms of Use</Link>
                            </div>
                            <img
                                src="/images/payment-method.png"
                                alt=""
                                className="pointer-events-none [@media_not_all_and_(min-width:850px)]:hidden"
                            />
                            <p className="max-xs:text-sm z-[2]">
                                © 2024 Foodo. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
