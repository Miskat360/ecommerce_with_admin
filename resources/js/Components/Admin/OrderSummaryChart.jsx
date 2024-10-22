import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const OrderSummaryChart = ({ seriesData }) => {
    const [state, setState] = useState({
        series: seriesData,

        options: {
            labels: [
                "pending",
                "processing",
                "completed",
                "cancelled",
                "refunded",
            ],
            chart: {
                type: "donut",
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            total: {
                                show: true,
                                color: "#000",
                            },
                        },
                    },
                },
            },
            colors: ["#FEB019", "#008FFB", "#00E396", "#FF4560", "#775DD0"],
            legend: {
                markers: {
                    // shape: "square",
                },
            },
            responsive: [
                {
                    breakpoint: 700,
                    options: {
                        chart: {
                            width: 400,
                        },
                        legend: {
                            position: "bottom",
                        },
                    },
                },
            ],
        },
    });

    return (
        <div className="w-full">
            <div id="chart">
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="donut"
                />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default OrderSummaryChart;
