import { cn } from "@/utils/cn";
import React from "react";

const whatInsideArrow1 = "/images/burger-ingredients/arrow-1.png";
const whatInsideArrow2 = "/images/burger-ingredients/arrow-2.png";
const whatInsideBurgerArrows = [
    {
        image: whatInsideArrow1,
        alt: "what-inside-arrow-1",
        className: "top-[20%] lg:top-[16%] left-[60%] -rotate-[20deg]",
    },
    {
        image: whatInsideArrow2,
        alt: "what-inside-arrow-2",
        className: "top-[40%] left-[60%]",
    },
    {
        image: whatInsideArrow1,
        alt: "what-inside-arrow-3",
        className: "-rotate-[20deg] top-[56%] left-[58%]",
    },
    {
        image: whatInsideArrow2,
        alt: "what-inside-arrow-4",
        className:
            "rotate-[160deg] top-[26%] lg:top-[22%] left-[30%] lg:left-[26%]",
    },
    {
        image: whatInsideArrow1,
        alt: "what-inside-arrow-5",
        className:
            "rotate-[140deg] top-[43%] lg:top-[40%] left-[35%] lg:left-[30%]",
    },
    {
        image: whatInsideArrow2,
        alt: "what-inside-arrow-6",
        className: "rotate-[160deg] top-[60%] left-[30%] lg:left-[21%]",
    },
];
const CurveArrow = ({}) => {
    return (
        <div className="">
            {whatInsideBurgerArrows.map(({ image, alt, className }) => (
                <div className={cn(className, "hidden md:block absolute")}>
                    <img
                        src={image}
                        alt={alt}
                        className={`bright w-[80px] lg:w-[120px] xl:w-auto`}
                    />
                </div>
            ))}
        </div>
    );
};

export default CurveArrow;
