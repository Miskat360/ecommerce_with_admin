import React from "react";
import HomeCard from "./Section-item/HomeCard";

const HomeCards = () => {
    return (
        <>
            <section className="w-full py-4">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    <HomeCard
                        title="fries"
                        subTitle="hot"
                        img="/images/fries.png"
                        imgClasses="sm:!-right-[30%] lg:!-right-[55%] !top-[30%] scale-[140%]"
                        bgColor="!bg-[#00A850]"
                        titleColor="drop-shadow-[2px_0px_6px_#00a850]"
                    />
                    <HomeCard
                        title="burgers"
                        subTitle="BEEF"
                        img="/images/burger.png"
                        imgClasses="sm:!-right-[20%] lg:!-right-[40%] !top-[25%]"
                        titleColor="drop-shadow-[2px_0px_6px_#db731e]"
                    />
                    <HomeCard
                        title="salad"
                        subTitle="Fresh"
                        img="/images/salad.png"
                        imgClasses="scale-[140%]"
                        bgColor="!bg-[#FFC900]"
                        titleColor="!text-[#CD4414] drop-shadow-[2px_0px_6px_#db731e]"
                        textColor="!text-black"
                    />
                </div>
            </section>
        </>
    );
};

export default HomeCards;
