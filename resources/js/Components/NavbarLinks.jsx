import { useEffect } from "react";
import { logo, navItems, socialMediaContact } from "../data/index";
import { Link } from "@inertiajs/react";
import { RiArrowRightLine } from "@remixicon/react";

const NavbarLinks = ({ isNavOpen, setIsNavOpen }) => {
    useEffect(() => {
        if (isNavOpen) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
        }

        return () => {
            document.body.style.overflowY = "auto";
        };
    }, [isNavOpen]);

    return (
        <>
            <div
                className={`w-full h-screen ${
                    isNavOpen ? "top-0" : "-top-[150%]"
                } bg-white absolute left-0 z-[999] px-5 transition-all duration-[600ms] ease-linear delay-150 overflow-y-auto `}
            >
                <div>
                    <div className="flex items-center px-0 sm:px-5 xl:px-12 py-2">
                        <Link href={"/"} className="flex">
                            <img
                                src={logo}
                                alt=""
                                className="w-24 sm:w-28 grayscale"
                            />
                        </Link>
                        <div
                            onClick={() => setIsNavOpen((prev) => !prev)}
                            className="ml-auto border-2 border-black transition-all duration-500 size-14 sm:size-20 rounded-full flex items-center justify-center flex-col group my-2 cursor-pointer overflow-hidden"
                        >
                            <div className="w-5 sm:w-[55px] h-[1px] bg-black transition-all duration-500 max-sm:rotate-45 group-hover:rotate-45 group-hover:h-[2px]" />
                            <div className="w-5 sm:w-[55px] h-[1px] bg-black transition-all duration-500 max-sm:-rotate-45 group-hover:-rotate-45 group-hover:h-[2px]" />
                        </div>
                    </div>
                    {navItems.map((navItem, index) => {
                        const Wrapper = navItem.isDisabled ? "div" : Link;
                        return (
                            <Wrapper
                                {...(!navItem.isDisabled && {
                                    href: navItem.link,
                                })}
                                key={index}
                                className={`${
                                    navItem.isDisabled && "cursor-not-allowed"
                                }`}
                            >
                                <div
                                    className={`flex items-center py-5 border-b ${
                                        navItem.name == "home" && "border-y"
                                    } border-black hover:text-white relative overflow-hidden group px-0 sm:px-5`}
                                >
                                    <div className="w-full h-full bg-black absolute -left-full group-hover:left-0 transition-all duration-500 -z-10" />
                                    <div className="text-5xl lg:text-[100px] leading-none -mb-3 uppercase font-dongpora transition-all duration-500">
                                        {navItem.name}.
                                    </div>
                                    {navItem.isDisabled && (
                                        <span className="text-xs sm:text-base self-start border border-black group-hover:border-white px-1 sm:px-2 rounded-full">
                                            Upcoming
                                        </span>
                                    )}
                                    <span className="ml-auto">
                                        <RiArrowRightLine className="group-hover:-rotate-45 transition-all duration-300 w-5 sm:w-6" />
                                    </span>
                                    {/* {navItem.name == "home" && (
                                    )} */}
                                </div>
                            </Wrapper>
                        );
                    })}
                    <div className="font-syne font-bold flex items-center justify-between pt-4 pb-14">
                        {socialMediaContact.map((contact, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden"
                            >
                                <Link href={contact.link}>
                                    {contact.name}
                                    <div className="w-full h-[1px] bg-black -mt-1 group-hover:left-0 absolute -left-full transition-all duration-500" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavbarLinks;
