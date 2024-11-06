import CustomerMapChart from "@/Components/Admin/CustomerMapChart";
import OrderSummary from "@/Components/Admin/OrderSummary";
import RevenueAreaChart from "@/Components/Admin/RevenueAreaChart";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import { DateRangePicker } from "@nextui-org/date-picker";
import { parseDate } from "@internationalized/date";
import {
    RiArrowRightSLine,
    RiBarChartGroupedFill,
    RiCalendarLine,
    RiCupLine,
    RiFileList2Line,
    RiGroupLine,
    RiMoneyDollarCircleLine,
} from "@remixicon/react";
import { useState } from "react";

const Dashboard = ({ admin }) => {
    // const { post, processing } = useForm();

    const [activeBtn, setActiveBtn] = useState({
        btn1: false,
        btn2: true,
        btn3: false,
    });
    const today = new Date();
    const oneMonthAgo = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 2
    );
    const [datePicker, setDatePicker] = useState({
        startDate: oneMonthAgo.toISOString().split("T")[0],
        endDate: today.toISOString().split("T")[0],
    });
    const datePickerHandler = () => {
        // setDatePicker({
        //     startDate: datePicker.startDate,
        //     endDate: datePicker.endDate,
        // });
    };
    const [isTabActive, setIsTabActive] = useState({
        tab1: true,
        tab2: false,
        tab3: false,
    });
    const tabs = [
        {
            text: "Monthly",
            isTabActive: isTabActive.tab1,
            seriesData: [20, 21, 80, 27, 15],
        },
        {
            text: "Weekly",
            isTabActive: isTabActive.tab2,
            seriesData: [7, 7, 25, 7, 2],
        },
        {
            text: "Today",
            isTabActive: isTabActive.tab3,
            seriesData: [5, 8, 15, 2, 3],
        },
    ];
    return (
        <>
            <Head title="Dashboard" />
            <AdminLayout>
                <div className="text-tertiary-50">
                    <div className="xs:flex justify-between">
                        <div>
                            <h1 className="text-3xl font-extrabold text-secondary">
                                Dashboard
                            </h1>
                            <p className="text-tertiary">
                                Welcome to Foodo Admin!
                            </p>
                        </div>
                        <div>
                            <DateRangePicker
                                label="Filter Period"
                                onChange={(e) => datePickerHandler}
                                defaultValue={{
                                    start: parseDate(datePicker.startDate),
                                    end: parseDate(datePicker.endDate),
                                }}
                                className="max-w-xs border rounded-xl"
                            />
                        </div>
                    </div>
                    <div className="grid xs:grid-cols-2 lg:grid-cols-4 gap-8 my-8">
                        {[
                            { img: RiCupLine, value: 10, text: "menus" },
                            {
                                img: RiMoneyDollarCircleLine,
                                value: "10k",
                                text: "Revenue",
                            },
                            { img: RiFileList2Line, value: 10, text: "orders" },
                            { img: RiGroupLine, value: 10, text: "users" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-5 rounded-lg flex items-center gap-6"
                            >
                                <div className="bg-secondary-50 p-6 rounded-full">
                                    {
                                        <item.img className="text-secondary size-8" />
                                    }
                                </div>
                                <div>
                                    <div className="text-4xl font-extrabold text-black">
                                        {item.value}
                                    </div>
                                    <h1 className="uppercase font-medium text-sm mt-2 flex xs:flex-col max-xs:gap-1">
                                        <span>total</span> {item.text}
                                    </h1>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid xl:grid-cols-2 gap-8">
                        <div className="bg-white px-3 pt-5 md:p-8 rounded-lg">
                            <h1 className="text-xl font-bold text-black">
                                Orders Summary
                            </h1>
                            <p className="text-sm font-medium">
                                Lorem ipsum dolor sit amet, consectetur
                            </p>
                            <div className="flex items-center justify-between bg-[#e7faec] text-black px-4 py-3 rounded-lg my-5 cursor-pointer">
                                <div className="bg-[#2BC155] px-3 md:px-6 py-2 rounded-md text-white md:text-xl">
                                    25
                                </div>
                                <div className="flex items-center gap-2 md:text-lg font-medium">
                                    New Orders{" "}
                                    <div className="size-4 bg-[#2BC155] rounded-full" />
                                </div>
                                <div className="text-[#2BC155] flex">
                                    Manage Orders
                                    <RiArrowRightSLine />
                                </div>
                            </div>
                            <div>
                                <div className="bg-secondary-50 px-4 py-2 inline-flex gap-3 rounded">
                                    <div
                                        onClick={() =>
                                            setIsTabActive((prevState) => ({
                                                ...prevState,
                                                tab1: true,
                                                tab2: false,
                                                tab3: false,
                                            }))
                                        }
                                        className={`${
                                            isTabActive.tab1
                                                ? "bg-white"
                                                : "hover:bg-gray-100"
                                        } cursor-pointer px-3 py-2 rounded text-sm font-medium text-secondary`}
                                    >
                                        Monthly
                                    </div>
                                    <div
                                        onClick={() =>
                                            setIsTabActive((prevState) => ({
                                                ...prevState,
                                                tab2: true,
                                                tab1: false,
                                                tab3: false,
                                            }))
                                        }
                                        className={`${
                                            isTabActive.tab2
                                                ? "bg-white"
                                                : "hover:bg-gray-100"
                                        } cursor-pointer px-3 py-2 rounded text-sm font-medium text-secondary`}
                                    >
                                        Weekly
                                    </div>
                                    <div
                                        onClick={() =>
                                            setIsTabActive((prevState) => ({
                                                ...prevState,
                                                tab3: true,
                                                tab1: false,
                                                tab2: false,
                                            }))
                                        }
                                        className={`${
                                            isTabActive.tab3
                                                ? "bg-white"
                                                : "hover:bg-gray-100"
                                        } cursor-pointer px-3 py-2 rounded text-sm font-medium text-secondary`}
                                    >
                                        Today
                                    </div>
                                </div>
                                <div className="w-full h-[360px]">
                                    {tabs.map(
                                        (
                                            { text, isTabActive, seriesData },
                                            i
                                        ) => (
                                            <OrderSummary
                                                key={i}
                                                text={text}
                                                active={isTabActive}
                                                seriesData={seriesData}
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="bg-white pt-6 pb-14 md:px-8 rounded-lg">
                            <div className="flex justify-between max-md:px-2">
                                <div>
                                    <h1 className="text-xl text-black font-bold">
                                        Net Profit & Revenue
                                    </h1>
                                    <p className="text-sm font-medium">
                                        Lorem ipsum dolor sit amet, consectetur
                                    </p>
                                </div>
                                <div className="btn bg-secondary text-white ml-2">
                                    Monthly
                                </div>
                            </div>
                            <div className="flex items-center gap-8 justify-end my-8 max-md:pr-2">
                                <div className="flex gap-3 items-end">
                                    <RiBarChartGroupedFill className="text-[#00E396] mb-1" />
                                    <div>
                                        <p className="text-sm font-medium">
                                            Income
                                        </p>
                                        <h1 className="text-2xl text-black font-extrabold">
                                            $1,000k
                                        </h1>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-end">
                                    <RiBarChartGroupedFill className="text-red-600 mb-1" />
                                    <div>
                                        <p className="text-sm font-medium">
                                            Expense
                                        </p>
                                        <h1 className="text-2xl text-black font-extrabold">
                                            $1,000k
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <RevenueAreaChart />
                            </div>
                        </div>
                    </div>
                    <div className="my-8 grid gap-8 xl:grid-cols-3">
                        <div className="col-span-2">
                            <CustomerMapChart
                                activeBtn={activeBtn}
                                setActiveBtn={setActiveBtn}
                            />
                        </div>
                        <div className="p-4 md:p-10 bg-white">top Customer</div>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
};

export default Dashboard;
