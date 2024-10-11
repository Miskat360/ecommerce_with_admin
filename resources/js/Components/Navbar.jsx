import { Link, usePage } from "@inertiajs/react";
import {
    RiDashboardHorizontalLine,
    RiShoppingCartFill,
    RiUserFill,
} from "@remixicon/react";
import { useState } from "react";
import NavbarLinks from "./NavbarLinks";
import { logo } from "@/data";

const Navbar = () => {
    const { auth } = usePage();
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <>
            <nav className="flex items-center justify-between px-5 py-3 text-black">
                <div>
                    <Link href={"/"}>
                        <img src={logo} alt="" className="w-24 sm:w-28" />
                    </Link>
                </div>
                <div className="flex items-center gap-2">
                    <div
                        className="w-10 h-auto flex flex-col items-end gap-[3px] cursor-pointer z-10 group"
                        onClick={() => {
                            setIsNavOpen((prev) => !prev);
                        }}
                    >
                        <div className="w-[40%] h-[2px] bg-black group-hover:w-full transition-all duration-300"></div>
                        <div className="w-[70%] h-[2px] bg-black group-hover:w-[40%] transition-all duration-300"></div>
                        <div className="w-full h-[2px] bg-black"></div>
                    </div>
                    <div className="w-[1px] h-14 bg-black" />
                    <div className="flex items-center gap-2 border-2 border-primary rounded-full p-[2px]">
                        <div>
                            {/* {auth.user ? (
                                <Link href={route("dashboard")}>
                                    <div className="bg-primary rounded-full p-2">
                                        <RiDashboardHorizontalLine size={16} />
                                    </div>
                                </Link>
                            ) : ( */}
                            <>
                                <Link href={route("login")}>
                                    <div className="bg-primary rounded-full p-2">
                                        <RiUserFill size={16} />
                                    </div>
                                </Link>
                            </>
                            {/* )} */}
                        </div>
                        <div className="w-[1px] h-5 bg-black" />
                        <div className="bg-primary rounded-full p-2">
                            <Link href={""}>
                                <RiShoppingCartFill size={16} />
                            </Link>
                        </div>
                    </div>
                    <NavbarLinks
                        setIsNavOpen={setIsNavOpen}
                        isNavOpen={isNavOpen}
                    />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
