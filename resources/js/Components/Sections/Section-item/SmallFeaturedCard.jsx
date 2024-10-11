import { cn } from "@/utils/cn";
import { Link } from "@inertiajs/react";
import { RiShoppingCartFill } from "@remixicon/react";
import React from "react";

const SmallFeaturedCard = ({
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
                    "w-full h-[300px] bg-white rounded-[22px] flex flex-col justify-between lg:justify-normal lg:flex-row overflow-hidden p-2 border border-black lg:h-[240px] lg:w-[600px]"
                )}
            >
                <div
                    className={cn(
                        imgContainerClasses,
                        "w-full h-[55%] lg:h-full rounded-[22px] lg:w-[350px] mb-2"
                    )}
                >
                    <img
                        src={img}
                        alt=""
                        className={cn(
                            imgClasses,
                            "bright w-full h-full rounded-[22px] object-cover"
                        )}
                    />
                </div>
                <div className="text-center flex flex-col justify-between ml-[10px]">
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

export default SmallFeaturedCard;
