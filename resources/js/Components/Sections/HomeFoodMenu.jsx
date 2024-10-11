import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmallFeaturedCard from "./Section-item/SmallFeaturedCard";
import BigFeaturedCard from "./Section-item/BigFeaturedCard";
import SectionHeading from "../SectionHeading";

const HomeFoodMenu = () => {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.to(".home-menu-burger", {
            duration: 1,
            x: "12%",
            opacity: 1,
            ease: "linear",
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".bg-patternBg",
                markers: false,
                start: "top bottom",
                end: "top 75%",
                scrub: 1,
            },
        });
        // gsap.to(".home-menu-container", {
        //     duration: 1,
        //     x: 0,
        //     ease: "back.in(1.7)",
        // });
        // gsap.to(".home-menu-text", {
        //     duration: 1,
        //     y: 0,
        //     ease: "back.in(1.7)",
        // });
        // gsap.to(".home-menu-burger-ingredients", {
        //     duration: 1,
        //     x: 0,
        //     ease: "back.in(1.7)",
        // });
        // gsap.to(".home-menu-button", {
        //     duration: 1,
        //     y: 0,
        //     ease: "back.in(1.7)",
        // });
    });
    return (
        <section className="w-full min-h-screen bg-patternBg bg-center relative py-16 mb-28">
            <img
                src="/images/home-menu/white-burger.png"
                alt=""
                className="home-menu-burger bright absolute sm:w-[350px] w-[250px] -top-[130px] -right-[100px]  translate-x-[100%] opacity-0"
            />
            <SectionHeading
                title="the best of"
                subTitle="~foodo~"
                img="/images/home-menu/lettuce.png"
                paragraph="Discover the most-loved burgers and meals handpicked just
                    for you!"
                // subTitleClasses="!text-[#73C118]"
            />
            <div>
                <div className="w-full xl:w-[1180px] mx-auto my-12 relative px-2 xl:px-0">
                    <div className="w-full flex lg:justify-between flex-col lg:flex-row gap-[30px]">
                        <img
                            src="/images/curve-arrow.png"
                            alt=""
                            className="w-[200px] sm:w-[300px] bright absolute top-[-100px] left-[20%] sm:top-[-80px] sm:left-[45%] -translate-x-1/2"
                        />
                        {/* card 1 */}
                        <BigFeaturedCard
                            img="/images/featured-card-img-1.png"
                            title="Quarter pounder With Cheese"
                            price="4.99"
                            className="xl:w-[545px] xl:h-[500px] shadow-[6px_6px_#000] lg:rounded-t-[500px] lg:rounded-b-[24px]"
                            imgClasses="lg:rounded-t-[500px] lg:rounded-b-[24px]"
                        />
                        {/* card 2, 3 */}
                        <div className="flex flex-col sm:flex-row lg:flex-col w-full xl:w-auto sm:justify-between gap-[20px] lg:gap-[10px]">
                            <SmallFeaturedCard
                                img="/images/featured-card-img-2.png"
                                title="Sausage Burrito"
                                price="4.99"
                                className="lg:rounded-[200px_28px_28px_200px] shadow-[-4px_-4px_#000]"
                                imgClasses="lg:rounded-[200px_24px_60px_200px]"
                            />
                            <SmallFeaturedCard
                                img="/images/featured-card-img-3.png"
                                title="Sausage Burrito"
                                price="4.99"
                                className="shadow-[-4px_4px_#000]"
                                imgClasses="lg:rounded-br-[60px]"
                            />
                        </div>
                    </div>
                    <div className="relative flex flex-col-reverse gap-[30px] mt-[30px] justify-between lg:flex-row">
                        <div className="w-full h-auto xl:w-[545px] xl:pt-[50px] relative font-dongpora uppercase text-[96px] sm:text-[120px] leading-[100px] sm:leading-[130px] tracking-[-2px]">
                            <img
                                src="/images/featured-highlight-img.png"
                                alt=""
                                className="absolute bright w-[80px] left-1/2 top-[20%] z-10 -translate-x-1/2 md:w-[100px] md:left-[60%] md:top-[28%]"
                            />
                            <div className="">Explore More</div>
                            <div className="gradient-text">Delicious</div>
                            <div className="flex items-center gap-5 sm:justify-between justify-normal">
                                options{" "}
                                <div className="border border-black rounded-full">
                                    <img
                                        src="images/up-right-arrow-red.png"
                                        alt=""
                                        className="bright w-[80px] sm:w-[100px]"
                                    />
                                </div>
                            </div>
                        </div>
                        <BigFeaturedCard
                            img="/images/featured-card-img-4.png"
                            title="Quarter pounder With Cheese"
                            price="4.99"
                            className="shadow-[-4px_-4px_#000] xl:w-[600px] xl:h-[490px] lg:rounded-[100px_28px_28px_28px]"
                            imgContainerClasses="xl:h-[350px]"
                            imgClasses="lg:rounded-[100px_24px_24px_24px]"
                        />
                        <img
                            src="/images/home-menu/yellow-spot.png"
                            alt=""
                            className="bright absolute -z-10 top-1/2 left-[20%] -translate-x-1/2 -translate-y-1/2"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeFoodMenu;
