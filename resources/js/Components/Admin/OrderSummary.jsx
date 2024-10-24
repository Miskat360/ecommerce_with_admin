import React from "react";
import OrderSummaryChart from "./OrderSummaryChart";

const OrderSummary = ({ text, active, seriesData }) => {
    // console.log(active);
    return (
        <>
            <div className={`${active ? "block" : "hidden"} max-w-[30em]`}>
                <div className="flex mt-4">
                    <OrderSummaryChart seriesData={seriesData} />
                </div>
            </div>
        </>
    );
};

export default OrderSummary;
