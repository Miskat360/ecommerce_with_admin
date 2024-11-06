import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "../SectionHeading";
import { Link } from "@inertiajs/react";
import PrimaryButton from "../PrimaryButton";
import { RiArrowRightUpLine } from "@remixicon/react";
import CountdownTimer from "../CountdownTimer";

const ExclusiveDeals = () => {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.to(".deals-sec-tomato", {
            x: 0,
            duration: 1,
            opacity: 1,
            ease: "linear",
            scrollTrigger: {
                trigger: ".deals-sec-tomato",
                start: "top 80%",
                markers: false,
                end: "top 50%",
                scrub: 1,
            },
        });
        gsap.to(".burger-text", {
            rotate: "45deg",
            duration: 5,
            ease: "linear",
            yoyo: true,
            repeat: -1,
        });
    });
    const DAYS_IN_MS = 30 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTime = NOW_IN_MS + DAYS_IN_MS;
    return (
        <>
            <section className="relative w-full py-8">
                <SectionHeading
                    title="exclusive"
                    subTitle="foodo  deals"
                    img="/images/exclusive-deals/deals-sec-heading-img.png"
                    paragraph="Don't miss out on our exclusive offers and special deals!"
                    subTitleClasses="text-[#DB0008]"
                    imgClasses="!w-[60px] sm:!w-[80px] !-mb-4 xs:!-mb-0"
                />
                <img
                    src="/images/exclusive-deals/deals-sec-tomato.png"
                    alt=""
                    className="deals-sec-tomato bright absolute sm:w-[350px] w-[250px] -top-[130px] -left-[100px] -translate-x-[100%] opacity-0"
                />
                <div className="py-8 px-[10px] lg:px-14 lg:py-12">
                    <div className="flex items-center flex-col md:flex-row gap-4">
                        <div className="md:basis-1/2 text-[30px] leading-[32px] sm:text-[35px] sm:leading lg:text-[40px] xl:text-[50px] font-bold lg:leading-[42px]">
                            Free Large Fries w/ $1 minimum Purchase
                        </div>
                        <div className="md:basis-1/2 font-semibold max-w-[500px] md:ml-auto self-start text-sm sm:text-base">
                            Free large Fries to keep you company. Download the
                            app and get 'em with your first purchase of $1+.*
                            Every $1 you spend earns 100 points, redeemable for
                            free food.
                        </div>
                    </div>
                </div>
                <div className="bg-offerBg bg-cover bg-center w-full text-white py-20 lg:py-24 flex items-center relative">
                    <div className="relative">
                        <img
                            src="/images/exclusive-deals/burger.png"
                            alt=""
                            className="bright w-[40rem] lg:w-auto lg:scale-110 -ml-[20%]"
                        />
                        <img
                            src="/images/exclusive-deals/burger-text.png"
                            alt=""
                            className="bright max-lg:w-[10rem] burger-text absolute -top-[15%] right-[8%] rotate-[60deg]"
                        />
                    </div>
                    <div className="absolute max-md:left-[5%] right-[5%] md:right-[10%] z-10 text-center backdrop-blur-sm bg-[rgba(255,255,255,0.08)] py-7 md:p-4 rounded-md">
                        <div className="lg:text-primary font-negaroa capitalize text-2xl md:text-5xl font-bold">
                            hot fresh
                        </div>
                        <div className="text-4xl sm:text-[4.6rem] font-popularCafe my-4 sm:my-6 lg:my-10 uppercase">
                            Free Large Fries
                        </div>
                        <div>
                            <CountdownTimer targetDate={dateTime} />
                        </div>
                        <div className="mt-8">
                            <PrimaryButton text="Discover now">
                                <RiArrowRightUpLine size={20} />
                            </PrimaryButton>
                        </div>
                    </div>
                    <div>
                        <img
                            src="/images/exclusive-deals/tomato.png"
                            alt=""
                            className="absolute top-0 -right-[2%]"
                        />
                        <img
                            src="/images/exclusive-deals/leaf.png"
                            alt=""
                            className="bright absolute bottom-[5%] left-1/2"
                        />
                        <img
                            src="/images/exclusive-deals/leaves.png"
                            alt=""
                            className="bright absolute -right-[2%] bottom-0 w-[200px]"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ExclusiveDeals;
