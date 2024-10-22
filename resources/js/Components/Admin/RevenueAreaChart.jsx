import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class RevenueAreaChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: "Net Profit",
                    data: [20, 40, 28, 51, 45, 79, 60, 105],
                },
                {
                    name: "Revenue",
                    data: [10, 32, 45, 32, 34, 52, 41, 50],
                },
            ],
            options: {
                chart: {
                    height: 350,
                    type: "area",
                    locales: [
                        {
                            name: "en",
                            options: {
                                months: [
                                    "January",
                                    "February",
                                    "March",
                                    "April",
                                    "May",
                                    "June",
                                    "July",
                                    "August",
                                    "September",
                                    "October",
                                    "November",
                                    "December",
                                ],
                                shortMonths: [
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
                                days: [
                                    "Sunday",
                                    "Monday",
                                    "Tuesday",
                                    "Wednesday",
                                    "Thursday",
                                    "Friday",
                                    "Saturday",
                                ],
                                shortDays: [
                                    "Sun",
                                    "Mon",
                                    "Tue",
                                    "Wed",
                                    "Thu",
                                    "Fri",
                                    "Sat",
                                ],
                            },
                        },
                    ],
                },
                legend: {
                    position: "top",
                    horizontalAlign: "left",
                    // width: undefined,
                    // height: undefined,
                    labels: {
                        colors: "#000",
                        useSeriesColors: false,
                    },
                    markers: {
                        size: 10,
                        shape: "square",
                    },
                    itemMargin: {
                        horizontal: 8,
                        vertical: 0,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: "smooth",
                },
                yaxis: {
                    labels: {
                        formatter: function (value) {
                            return "$" + value + "k";
                        },
                    },
                },
                xaxis: {
                    type: "month",
                    categories: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                    ],
                },
                tooltip: {
                    x: {
                        format: "dd/MM/yy HH:mm",
                    },
                },
            },
        };
    }

    render() {
        return (
            <div>
                <div id="chart">
                    <ReactApexChart
                        options={this.state.options}
                        series={this.state.series}
                        type="area"
                        height={350}
                    />
                </div>
                <div id="html-dist"></div>
            </div>
        );
    }
}

export default RevenueAreaChart;
