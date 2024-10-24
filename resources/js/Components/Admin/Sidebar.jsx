import { sidebarLinks } from "@/data";
import SidenavLink from "../SidenavLink";
import { useForm } from "@inertiajs/react";
import { RiLoader4Line } from "@remixicon/react";

const Sidebar = () => {
    const { processing, get } = useForm();
    return (
        <>
            <div className="sticky left-0 top-0 z-20 flex h-screen w-fit flex-col overflow-y-auto border-r bg-white text-secondary pb-5 pt-28 max-md:hidden no-scrollbar">
                <div className="flex flex-1 flex-col w-full gap-6 px-6">
                    {sidebarLinks.map((item, index) => {
                        return (
                            <SidenavLink
                                onClick={() => {
                                    get(route(item.route));
                                }}
                                disabled={processing}
                                active={
                                    route().current(item.route) ||
                                    window.location.pathname.split("/")[2] ==
                                        item.label
                                }
                            >
                                {/* {processing && route().current(item.route) ? (
                                    <RiLoader4Line
                                        // size={16}
                                        className="animate-spin"
                                    />
                                ) : ( */}
                                {<item.icon />}
                                {/* )} */}
                                <p className="max-lg:hidden ml-4">
                                    {item.label}
                                </p>
                            </SidenavLink>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Sidebar;
