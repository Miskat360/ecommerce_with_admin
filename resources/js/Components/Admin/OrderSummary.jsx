import React from "react";
import OrderSummaryChart from "./OrderSummaryChart";

const OrderSummary = ({ text, active, seriesData }) => {
    // console.log(active);
    return (
        <>
            <div className={`${active ? "block" : "hidden"} xl:w-full w-3/5`}>
                <div>{text}</div>
                <div className="flex">
                    <OrderSummaryChart seriesData={seriesData} />
                </div>
            </div>
        </>
    );
};

export default OrderSummary;
