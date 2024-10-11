import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";

const TextImgSlider = ({ duration, textImgSlider }) => {
    gsap.registerPlugin(useGSAP);
    useGSAP(() => {
        gsap.to(`.moving-${duration}`, {
            x: "-200%",
            duration: duration,
            repeat: -1,
            ease: "linear",
            transformOrigin: "center",
        });
    }, {});
    return (
        <div className=" overflow-x-hidden">
            <div className="text-white uppercase bg-black py-3">
                <div
                    className={`moving-${duration} flex items-center gap-10 whitespace-nowrap`}
                >
                    {textImgSlider.map(({ text, img }, index) => (
                        <>
                            <div className="font-dongpora text-[90px]">
                                {text}
                            </div>
                            <img src={img} alt="" />

                            {/* <div className="font-dongpora text-[90px]">where</div>
                    <img src={yellowQuote} alt="" />

                    <div className="font-dongpora text-[90px]">foodo</div>
                    <img src={logo} alt="" />

                    <div className="font-dongpora text-[90px]">where</div>
                    <img src={yellowQuote} alt="" />

                    <div className="font-dongpora text-[90px]">foodo</div>
                    <img src={logo} alt="" />

                    <div className="font-dongpora text-[90px]">where</div>
                    <img src={yellowQuote} alt="" />

                    <div className="font-dongpora text-[90px]">foodo</div>
                    <img src={logo} alt="" />

                    <div className="font-dongpora text-[90px]">where</div>
                    <img src={yellowQuote} alt="" /> */}
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TextImgSlider;
