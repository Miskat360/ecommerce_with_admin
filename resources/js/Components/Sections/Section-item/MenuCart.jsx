import { Link } from "@inertiajs/react";
import React from "react";

const MenuCart = () => {
    return (
        <Link href="">
            <div className="bg-primary-50 border border-primary hover:bg-primary group min-w-[12rem] flex items-center justify-center flex-col text-center min-h-[16rem] rounded-badge transition duration-300">
                <div className="flex items-end justify-center size-[100px] bg-white rounded-full">
                    <img
                        src="https://demo2.pavothemes.com/poco/wp-content/uploads/2022/12/h7_cate5.png"
                        alt=""
                        className="bright group-hover:scale-110 transition duration-300"
                    />
                </div>
                <div className="pt-4">
                    <h1 className="uppercase font-bold">burger</h1>
                    <p className="text-gray-600 text-[15px]">9 products</p>
                </div>
            </div>
        </Link>
    );
};

export default MenuCart;
