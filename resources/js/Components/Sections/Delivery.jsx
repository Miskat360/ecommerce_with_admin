import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "../SectionHeading";
import { RiTruckLine } from "@remixicon/react";
import PrimaryButton from "../PrimaryButton";

const Delivery = () => {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.to(".deliveryMan1", {
            x: 0,
            duration: 1,
            ease: "linear",
            scrollTrigger: {
                trigger: ".deliveryMan1",
                markers: false,
                start: "top 80%",
                end: "top 50%",
                scrub: 1,
            },
        });
        gsap.to(".deliveryMan2", {
            x: 50,
            duration: 1,
            ease: "linear",
            scrollTrigger: {
                trigger: ".deliveryContainer",
                markers: false,
                start: "20% 100%",
                end: "80% 30%",
                scrub: 1,
            },
        });
    });
    return (
        <>
            <div className="deliveryContainer w-full py-10 sm:pt-[7vw] sm:pb-[5vw] relative min-h-screen">
                <SectionHeading
                    title="Get the"
                    subTitle="first delivery"
                    img="/images/home-delivery/heading-img.png"
                    paragraph="Experience swift service and fresh flavors delivered to your doorstep"
                    subTitleClasses="!text-[7vw] md:!text-[4vw] !text-[#DB0008]"
                />
                <img
                    src="/images/home-delivery/delivery-man-1.png"
                    alt=""
                    className="deliveryMan1 absolute sm:w-[400px] w-[250px] -top-[8%] sm:top-0 -left-[30%] sm:-left-[10%] -z-10 bright -translate-x-full"
                />
                <div className="bg-deliveryBg bg-center bg-cover w-[95%] sm:w-[90%] mx-auto my-8 lg:my-14 xl:my-16 z-10 p-4 sm:p-8 lg:px-[8vw] lg:py-[9vw] rounded-3xl">
                    <div>
                        <p className="text-primary text-xl md:text-2xl font-costarica tracking-wider">
                            Crispy Every Bite Taste
                        </p>
                        <div className="text-white text-3xl md:text-[4vw] font-popularCafe  xl:leading-[55px] leading-9 my-4">
                            30 Minutes Fast <br />
                            <span className="text-primary font-negaroa font-bold">
                                Delivery
                            </span>{" "}
                            Challenge
                        </div>
                        <PrimaryButton
                            text="order now"
                            className="my-3"
                            iconDivClasses="!p-[10px]"
                        >
                            <RiTruckLine size={20} />
                        </PrimaryButton>
                    </div>
                    <img
                        src="/images/home-delivery/delivery-man-2.png"
                        alt=""
                        className="deliveryMan2 absolute bottom-[2rem] sm:bottom-28 right-[20%] translate-x-full z-10"
                    />
                    <img
                        src="/images/home-delivery/design.png"
                        alt=""
                        className="absolute top-[40%] md:top-[47%] left-[65%] md:left-[42%] w-[70px] sm:w-auto"
                    />
                    <img
                        src="/images/home-delivery/arrow-curve.png"
                        alt=""
                        className="absolute top-[55%] md:top-[45%] left-[56%] w-[100px] sm:w-auto"
                    />
                </div>
            </div>
        </>
    );
};

export default Delivery;
