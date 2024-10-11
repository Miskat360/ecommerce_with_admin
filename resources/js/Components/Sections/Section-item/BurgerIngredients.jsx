import { cn } from "@/utils/cn";
import React from "react";

const bun = "/images/burger-ingredients/bun.png";
const onion = "/images/burger-ingredients/onion.png";
const cheese = "/images/burger-ingredients/cheese.png";
const lettuce = "/images/burger-ingredients/lettuce.png";
const tomato = "/images/burger-ingredients/tomato.png";
const beef = "/images/burger-ingredients/beef.png";
const burgerIngredients = [
    {
        img: bun,
        title: "bun",
        description: "Soft and toasted to perfection",
        className: "top-[15%] md:top-[20%] right-5 xs:right-20",
        imgClassName: "top-[65%] right-14",
        titleClassName: "",
        descClassName: "xl:rotate-2",
    },
    {
        img: onion,
        title: "onion",
        description: "Zesty and finely chopped",
        className: "top-[40%] right-5 xs:right-24",
        imgClassName: "right-0 -top-[60%]",
        titleClassName: "xl:rotate-[4deg]",
        descClassName: "xl:-rotate-2 -mt-2 md:-mt-1 lg:-mt-3 xl:-mt-0",
    },
    {
        img: cheese,
        title: "cheese",
        description: "Melted to creamy perfection",
        className: "top-[55%] md:top-[65%] xl:top-[60%] right-[6%] xl:right-2",
        imgClassName: "-top-[60%]",
        titleClassName: "xl:-rotate-[4deg]",
        descClassName: "-mt-2 md:-mt-1 lg:-mt-3 xl:-mt-0",
    },
    {
        img: lettuce,
        title: "lettuce",
        description: "Fresh and crispy for that perfect crunch",
        className: "top-[28%] md:top-[25%] left-[4%] xl:left-0",
        imgClassName: "left-[36%] -top-10",
        titleClassName: "",
        descClassName: "xl:-rotate-[4deg] -mt-2 md:-mt-1 lg:-mt-3 xl:-mt-0",
    },
    {
        img: tomato,
        title: "tomato",
        description: "Juicy slice for a burst of freshness",
        className: "top-[45%] left-5 xs:left-14",
        imgClassName: "left-0 lg:right-5 -top-12 lg:-top-16",
        titleClassName: "xl:-rotate-[4deg]",
        descClassName: " -mt-2 md:-mt-1 lg:-mt-3 xl:-mt-0",
    },
    {
        img: beef,
        title: "beef",
        description: "Juicy, flavorful, and cooked to order",
        className: "top-[65%] left-[2%] xl:left-0",
        imgClassName: "-top-14 lg:-top-16 right-0 lg:left-0",
        titleClassName: "xl:-rotate-[4deg]",
        descClassName: "xl:rotate-3 -mt-2 md:-mt-1 lg:-mt-3 xl:-mt-1",
    },
];
const BurgerIngredients = ({}) => {
    return (
        <>
            {burgerIngredients.map(
                ({
                    img,
                    title,
                    description,
                    className,
                    imgClassName,
                    titleClassName,
                    descClassName,
                }) => (
                    <div className={cn(className, "absolute")}>
                        <div
                            className={`relative flex justify-center xl:justify-normal ${
                                title == "bun" ? "flex-col-reverse" : "flex-col"
                            }`}
                        >
                            <div className={cn(imgClassName, "absolute z-10")}>
                                <img
                                    src={img}
                                    alt=""
                                    className="bright w-[80px] xl:w-[100px]"
                                />
                            </div>
                            <div
                                className={cn(
                                    titleClassName,
                                    "font-pinkPencil text-[10vw] xs:text-[7vw] lg:text-[5vw] xl:text-[6rem] leading-[40px] lg:leading-[60px] text-center"
                                )}
                            >
                                {title}
                            </div>
                            <div
                                className={cn(
                                    descClassName,
                                    "bg-[#ffcc54] font-medium w-[200px] xl:w-[245px] leading-[12px] xl:leading-[14px] xl:tracking-tight rounded-full text-center p-2 lg:p-[10px]"
                                )}
                            >
                                {description}
                            </div>
                        </div>
                    </div>
                )
            )}
        </>
    );
};

export default BurgerIngredients;
