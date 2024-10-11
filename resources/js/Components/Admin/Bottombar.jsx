import { bottombarLinks } from "@/data";
import { Link } from "@inertiajs/react";

const Bottombar = () => {
    return (
        <>
            <div className="fixed bottom-0 z-10 w-full p-3 xs:p-4 bg-secondary-50 xs:px-7 md:hidden text-secondary">
                <div className="flex items-center justify-between gap-3 xs:gap-5">
                    {bottombarLinks.map((item, index) => {
                        const active = route().current(item.route);
                        return (
                            <Link
                                href={route(item.route)}
                                key={index}
                                className={`${
                                    active && "bg-secondary text-white"
                                } flex flex-col items-center gap-1 p-[5px] rounded-md`}
                            >
                                {<item.icon className="size-5" />}
                                <p className="max-sm:hidden capitalize text-sm">
                                    {item.label}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Bottombar;
