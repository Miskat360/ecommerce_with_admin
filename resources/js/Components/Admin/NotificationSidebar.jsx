import {
    RiCrossFill,
    RiNotification2Fill,
    RiSidebarUnfoldLine,
} from "@remixicon/react";
import React from "react";

const NotificationSidebar = ({
    isNotificationBarOpen,
    setIsNotificationBarOpen,
}) => {
    return (
        <>
            <div
                className={`w-full h-screen fixed top-0 ${
                    isNotificationBarOpen ? "right-0" : "right-[-100%]"
                } z-[31] bg-black/15 flex transition-all duration-1000`}
            >
                <div
                    className="w-[calc(100%-350px)]"
                    onClick={() => setIsNotificationBarOpen((prev) => !prev)}
                />
                <div className="w-[350px] relative h-full bg-white ml-auto z-[32]">
                    <div className="w-full text-xl py-4 font-medium text-center bg-secondary text-white sticky top-0 flex justify-center items-center">
                        <div
                            onClick={() =>
                                setIsNotificationBarOpen((prev) => !prev)
                            }
                            className="absolute left-0 cursor-pointer"
                        >
                            <RiSidebarUnfoldLine />
                        </div>
                        <div className="flex items-center gap-2">
                            Notification
                            <RiNotification2Fill className="size-5" />
                        </div>
                    </div>
                    <div className="p-4">
                        You don't have any Notification Yet.
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotificationSidebar;
