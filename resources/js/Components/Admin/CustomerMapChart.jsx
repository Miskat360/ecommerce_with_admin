import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const CustomerMapChart = ({ activeBtn, setActiveBtn }) => {
    const [customerChartState, setCustomerChartState] = useState({
        series: [
            {
                name: "Customers",
                data: [
                    3, 2, 4, 5, 8, 6, 8, 10, 9, 7, 12, 11, 3, 2, 4, 5, 8, 6, 8,
                    10, 9, 7, 12, 11, 8, 10, 9, 7, 12, 11,
                ],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: "bar",
            },
            dataLabels: {
                enabled: false,
            },

            xaxis: {
                categories: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                    "24",
                    "25",
                    "26",
                    "27",
                    "28",
                    "29",
                    "30",
                ],
                position: "bottom",
                crosshairs: {
                    fill: {
                        type: "gradient",
                        gradient: {
                            colorFrom: "#D8E3F0",
                            colorTo: "#BED1E6",
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        },
                    },
                },
                tooltip: {
                    enabled: false,
                },
            },
            yaxis: {
                labels: {
                    show: true,
                    formatter: function (val) {
                        return val;
                    },
                },
            },
        },
    });

    const [customerData, setCustomerData] = useState([
        {
            btnText: "Daily",
            data: [
                3, 2, 4, 5, 8, 6, 8, 10, 9, 7, 12, 11, 3, 2, 4, 5, 8, 6, 8, 10,
                9, 7, 12, 11, 8, 10, 9, 7, 12, 11,
            ],
            isBtnActive: true,
            xaxis: [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
            ],
        },
        {
            btnText: "Monthly",
            data: [30, 27, 40, 55, 48, 63, 86, 105, 94, 83, 102, 112],
            isBtnActive: false,
            xaxis: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
        },
        {
            btnText: "Yearly",
            data: [360, 270, 400, 505, 480, 603, 806, 705, 904, 803],
            isBtnActive: false,
            xaxis: [
                "2015",
                "2016",
                "2017",
                "2018",
                "2019",
                "2020",
                "2021",
                "2022",
                "2023",
                "2024",
            ],
        },
    ]);
    const handleCustomerData = (btnText, data, xaxis) => {
        setCustomerChartState((prevState) => ({
            ...prevState,
            series: [
                {
                    data: data,
                },
            ],
            options: {
                xaxis: {
                    categories: xaxis,
                },
            },
        }));
        setCustomerData((prev) => [
            {
                btnText: "Daily",
                isBtnActive: btnText == "Daily" ? true : false,
                data: [
                    3, 2, 4, 5, 8, 6, 8, 10, 9, 7, 12, 11, 3, 2, 4, 5, 8, 6, 8,
                    10, 9, 7, 12, 11, 8, 10, 9, 7, 12, 11,
                ],
                xaxis: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                    "24",
                    "25",
                    "26",
                    "27",
                    "28",
                    "29",
                    "30",
                ],
            },
            {
                btnText: "Monthly",
                isBtnActive: btnText == "Monthly" ? true : false,
                data: [30, 27, 40, 55, 48, 63, 86, 105, 94, 83, 102, 112],
                xaxis: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            },
            {
                btnText: "Yearly",
                isBtnActive: btnText == "Yearly" ? true : false,
                data: [360, 270, 400, 505, 480, 603, 806, 705, 904, 803],
                xaxis: [
                    "2015",
                    "2016",
                    "2017",
                    "2018",
                    "2019",
                    "2020",
                    "2021",
                    "2022",
                    "2023",
                    "2024",
                ],
            },
        ]);
    };
    return (
        <>
            <div className="bg-white pt-6 md:p-8 rounded-lg">
                <div className="block md:flex max-md:px-2 gap-4 justify-between mb-6">
                    <div>
                        <h1 className="text-xl font-bold text-black">
                            Customer Map
                        </h1>
                        <p className="text-sm font-medium">
                            Lorem ipsum dolor sit amet, consectetur
                        </p>
                    </div>
                    <div className="bg-secondary-50 px-4 py-2 max-md:mt-4 inline-flex gap-3 rounded">
                        {customerData.map(
                            ({ btnText, data, isBtnActive, xaxis }, index) => (
                                <div
                                    key={index}
                                    onClick={() =>
                                        handleCustomerData(btnText, data, xaxis)
                                    }
                                    className={`
                                ${isBtnActive && "bg-white"}
                             cursor-pointer px-3 py-2 rounded text-sm font-medium text-secondary`}
                                >
                                    {btnText}
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div id="chart">
                    <ReactApexChart
                        options={customerChartState.options}
                        series={customerChartState.series}
                        type="bar"
                        height={350}
                    />
                </div>
            </div>
        </>
    );
};

export default CustomerMapChart;
