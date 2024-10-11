import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TextSlider = () => {
    const textSliderContainer = useRef(null);
    const textSlider = useRef(null);
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.to(textSlider.current, {
            duration: 1,
            x: "-100%",
            ease: "linear",
            stagger: 0.5,
            scrollTrigger: {
                trigger: textSliderContainer.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
        });
    });
    useEffect(() => {
        let previousScrollPosition = window.scrollY;
        window.onscroll = () => {
            let currentScrollPosition = window.scrollY;
            let arrows;
            arrows = document.getElementsByClassName("textSliderArrow");
            arrows = Array.prototype.slice.call(arrows);
            if (arrows) {
                if (currentScrollPosition < previousScrollPosition) {
                    arrows.forEach((arrow) => {
                        arrow.style.rotate = "0deg";
                    });
                } else {
                    arrows.forEach((arrow) => {
                        arrow.style.rotate = "-90deg";
                    });
                }
            }
            previousScrollPosition = currentScrollPosition;
        };
    }, [onscroll]);

    const textSliderContent = [
        {
            id: 1,
            text: "I'm loving it",
            img: "/images/up-right-arrow-red.png",
        },
        {
            id: 2,
            text: "I'm loving it",
            img: "/images/up-right-arrow-red.png",
        },
        {
            id: 3,
            text: "I'm loving it",
            img: "/images/up-right-arrow-red.png",
        },
        {
            id: 4,
            text: "I'm loving it",
            img: "/images/up-right-arrow-red.png",
        },
    ];
    return (
        <section
            ref={textSliderContainer}
            className="my-2 sm:my-5 overflow-x-hidden"
        >
            <div
                ref={textSlider}
                className="flex items-center whitespace-nowrap"
            >
                {textSliderContent.map(({ id, text, img }) => (
                    <>
                        <div
                            key={id}
                            className={`flex items-center text-[150px] xs:text-[200px] text-black font-dongpora uppercase leading-[-2px]`}
                        >
                            {text}
                        </div>
                        <img
                            src={img}
                            alt=""
                            className="textSliderArrow w-[100px] mx-5 bright"
                        />
                    </>
                ))}
            </div>
        </section>
    );
};

export default TextSlider;
