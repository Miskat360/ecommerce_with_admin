import { sidebarLinks } from "@/data";
import SidenavLink from "../SidenavLink";

const Sidebar = () => {
    return (
        <>
            <div className="sticky left-0 top-0 z-20 flex h-screen w-fit flex-col overflow-y-auto border-r bg-white text-secondary pb-5 pt-28 max-md:hidden no-scrollbar">
                <div className="flex flex-1 flex-col w-full gap-6 px-6">
                    {sidebarLinks.map((item, index) => {
                        return (
                            <SidenavLink
                                key={index}
                                href={route(item.route)}
                                active={
                                    route().current(item.route) ||
                                    window.location.pathname.split("/")[2] ==
                                        item.label
                                }
                            >
                                {<item.icon />}
                                <p className="max-lg:hidden">{item.label}</p>
                            </SidenavLink>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Sidebar;
