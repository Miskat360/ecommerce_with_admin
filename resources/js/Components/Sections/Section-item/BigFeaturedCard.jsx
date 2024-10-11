import { cn } from "@/utils/cn";
import { Link } from "@inertiajs/react";
import { RiShoppingCartFill } from "@remixicon/react";
import React from "react";

const BigFeaturedCard = ({
    className,
    imgClasses,
    imgContainerClasses,
    img,
    title,
    price,
}) => {
    return (
        <>
            <div
                className={cn(
                    className,
                    "w-full h-auto bg-white border border-black rounded-[28px] overflow-hidden p-2 flex flex-col justify-between items-center"
                )}
            >
                <div
                    className={cn(
                        imgContainerClasses,
                        "w-full h-[250px] mb-[10px] sm:h-[320px]"
                    )}
                >
                    <img
                        src={img}
                        alt=""
                        className={cn(
                            imgClasses,
                            "bright w-full h-full rounded-[22px] lg:h-auto object-cover"
                        )}
                    />
                </div>
                <div className="text-center">
                    <div>
                        <div className="text-2xl leading-[25px] font-popularCafe sm:text-[28px] sm:leading-[26px]">
                            {title}
                        </div>
                        <div className="font-semibold pb-5">
                            Price: ${price}
                        </div>
                    </div>
                    <Link>
                        <div className="w-[200px] h-auto rounded-full border border-primary py-[2px] pr-[2px] pl-5 mx-auto font-bold capitalize flex items-center justify-between">
                            add to cart
                            <div className="bg-primary rounded-full p-3">
                                <RiShoppingCartFill size={16} />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default BigFeaturedCard;
