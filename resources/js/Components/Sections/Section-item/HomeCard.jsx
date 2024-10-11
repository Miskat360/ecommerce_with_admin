import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrimaryButton from "@/Components/PrimaryButton";
import { cn } from "@/utils/cn";
import { Link } from "@inertiajs/react";
import { RiShoppingCartFill } from "@remixicon/react";

const HomeCard = ({
    img,
    bgColor,
    titleColor,
    title,
    subTitle,
    imgClasses,
    textColor,
}) => {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.to(".cardImage", {
            y: "-10%",
            duration: 1,
            ease: "linear",
            scrollTrigger: {
                trigger: ".cardImage",
                markers: false,
                start: "top 80%",
                end: "top top",
                scrub: 1,
            },
        });
    });
    return (
        <>
            <Link className="cursor-default">
                <div className="relative group overflow-hidden">
                    <div
                        className={cn(
                            bgColor,
                            `p-8 lg:pb-14 lg:pt-20 bg-[#DB731E] relative -z-[3]`
                        )}
                    >
                        <img
                            src={img}
                            alt=""
                            className={cn(
                                imgClasses,
                                "cardImage bright absolute w-auto -right-[55%] top-[35%] -translate-y-1/2 -z-[1]"
                            )}
                        />
                        <img
                            src="/images/shape.png"
                            alt=""
                            className="absolute -top-[10%] w-full scale-0 group-hover:scale-100 transition-all duration-500 -z-[2]"
                        />
                        <div className="z-[1]">
                            <div className="font-norican text-white text-4xl font-bold capitalize">
                                {subTitle}
                            </div>
                            <div
                                className={cn(
                                    titleColor,
                                    "font-gilroy text-yellow-400 text-[90px] leading-none my-5 capitalize"
                                )}
                            >
                                {title}
                            </div>
                            <div className="text-white capitalize text-2xl max-w-[200px]">
                                new phenomenon burger taste
                            </div>
                            <div
                                className={cn(
                                    textColor,
                                    "text-yellow-400 text-4xl font-gilroy mb-8 mt-4"
                                )}
                            >
                                $10.90
                            </div>
                            <div className="z-10 cursor-pointer">
                                <PrimaryButton text="order now">
                                    <RiShoppingCartFill size={16} />
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default HomeCard;
