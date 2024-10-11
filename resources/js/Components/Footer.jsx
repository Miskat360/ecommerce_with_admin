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
                <div>
                    <img
                        src="/images/footer/large-burger.png"
                        alt=""
                        className="absolute bottom-0 right-[7%] bright z-[1] w-[450px]"
                    />
                </div>
                <div className="w-full h-[92vh] bg-black text-white px-10 pb-10 pt-20 relative overflow-hidden">
                    <div className="w-full flex justify-between z-[2] absolute left-0 px-10">
                        <div className="text-xl capitalize inline">
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
                        <div>
                            <h1 className="text-2xl mb-6">
                                Join our mailing list for the latest updates.
                            </h1>
                            <form action="">
                                <input
                                    type="text"
                                    placeholder="Enter your email address..."
                                    className="px-6 py-4 text- mr-4 w-[350px] h-[55px] rounded-full border border-primary text-black focus:!border-primary focus:!ring-primary"
                                />
                                <PrimaryButton
                                    text="subscribe"
                                    className="!w-[160px] !font- medium !lowercase text-sm"
                                >
                                    <RiArrowRightUpLine />
                                </PrimaryButton>
                            </form>
                        </div>
                        <div className="text-end text-xl capitalize">
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
                    <div className="w-[calc(100%-80px)] flex justify-between border-t py-11 absolute bottom-0 bg-black">
                        <div className="text-sm underline">
                            <Link>Privacy Policy</Link>
                            <Link className="ml-4">Terms of Use</Link>
                        </div>
                        <img
                            src="/images/payment-method.png"
                            alt=""
                            className="pointer-events-none"
                        />
                        <p className="text-sm z-[2]">
                            © 2024 Foodo. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
