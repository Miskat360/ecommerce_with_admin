import {
    RiCrossFill,
    RiNotification2Fill,
    RiSidebarUnfoldLine,
} from "@remixicon/react";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
const NotificationSidebar = ({
    isNotificationBarOpen,
    setIsNotificationBarOpen,
}) => {
    const [showSkeleton, setShowSkeleton] = useState(true);
    if (isNotificationBarOpen) {
        setTimeout(() => {
            setShowSkeleton(false);
        }, 3000);
    }
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
                    <div className="w-full py-3 px-4 bg-zinc-900 text-white sticky top-0 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            Notification
                        </div>
                        <div
                            onClick={() =>
                                setIsNotificationBarOpen((prev) => !prev)
                            }
                            className="cursor-pointer"
                        >
                            <X className="size-6 hover:bg-zinc-800 rounded p-1" />
                        </div>
                    </div>
                    <div className="p-4">
                        <div
                            className={`${
                                showSkeleton ? "block" : "hidden"
                            } max-w-sm w-full mx-auto`}
                        >
                            <div className="animate-pulse flex items-center space-x-4 border-b py-2">
                                <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                                <div className="flex-1 space-y-6 py-1">
                                    <div className="space-y-3">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="h-2 bg-slate-700 rounded col-span-3"></div>
                                            <div className="h-2 col-span-1" />
                                            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                        </div>
                                        <div className="h-2 bg-slate-700 rounded"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="animate-pulse flex items-center space-x-4 border-b py-2">
                                <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                                <div className="flex-1 space-y-6 py-1">
                                    <div className="space-y-3">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="h-2 bg-slate-700 rounded col-span-3"></div>
                                            <div className="h-2 col-span-1" />
                                            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                        </div>
                                        <div className="h-2 bg-slate-700 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={showSkeleton && "hidden"}>
                            You don't have any Notification Yet.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotificationSidebar;
