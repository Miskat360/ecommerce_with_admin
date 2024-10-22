import { Link, useForm, usePage } from "@inertiajs/react";
import {
    RiFlipVertical2Line,
    RiLogoutBoxRLine,
    RiNotification2Line,
    RiSearchLine,
    RiStore2Line,
    RiUserLine,
} from "@remixicon/react";
import NotificationSidebar from "./NotificationSidebar";
import { useState } from "react";

const Topbar = ({}) => {
    const admin = usePage().props.admin.user;
    const [isNotificationBarOpen, setIsNotificationBarOpen] = useState(false);
    const { post, processing } = useForm();
    const logoutHandler = () => {
        post(route("admin.logout"));
    };
    // Window Full Screen handle
    const handleFullScreen = () => {
        if (
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.msFullscreenElement ||
            document.mozFullscreenElement
        ) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozExitFullscreen) {
                document.mozExitFullscreen();
            }
        } else {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            } else if (document.documentElement.mozRequestFullscreen) {
                document.documentElement.mozRequestFullscreen();
            }
        }
    };
    return (
        <>
            <div className="w-full fixed top-0 z-30 flex items-center px-6 py-3 bg-white shadow-sm">
                <div className="flex items-center w-[60%">
                    <div className="flex items-center gap-4 font-popularCafe text-secondary text-4xl">
                        <div className="bg-secondary-50 p-1 rounded-md flex-none">
                            <img
                                src="/images/logo3.png"
                                alt=""
                                className="size-10"
                            />
                        </div>
                        foodo
                    </div>
                </div>
                <form
                    action=""
                    method="get"
                    className="mx-auto bg-secondary-50 hidden md:flex items-center px-3 rounded-md w-[40%]"
                >
                    <RiSearchLine className="size-5 text-secondary" />
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search here..."
                        className="bg-transparent border-none focus:ring-0"
                    />
                </form>
                <div className="flex items-center gap-4 ml-auto">
                    <div
                        onClick={handleFullScreen}
                        className="size-10 flex items-center justify-center bg-secondary-50 text-secondary rounded-md cursor-pointer"
                    >
                        <RiFlipVertical2Line />
                    </div>
                    <Link
                        href="/"
                        className="size-10 flex items-center justify-center bg-secondary-50 text-secondary rounded-md"
                    >
                        <RiStore2Line />
                    </Link>
                    <div
                        onClick={() =>
                            setIsNotificationBarOpen((prev) => !prev)
                        }
                        className="max-md:hidden size-10 flex items-center justify-center bg-secondary-50 text-secondary rounded-md cursor-pointer"
                    >
                        <RiNotification2Line />
                    </div>
                    <details className="dropdown">
                        <summary className="flex items-center h-10 cursor-pointer select-none group">
                            <div className="bg-secondary text-white px-6 h-full flex items-center rounded-l-md text-[17px] max-xs:hidden">
                                {admin.name
                                    ? "hi, " + admin.name.split(/\s+/)[0]
                                    : "hi, admin"}
                            </div>
                            <div className="avatar placeholder -ml-4">
                                <div className="bg-secondary-50 group-hover:bg-secondary-100 border-[3px] border-white text-secondary size-11 rounded-full">
                                    <RiUserLine className="" />
                                </div>
                            </div>
                        </summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] max-w-[200px] w-full p-2 shadow max-xs:hidden">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-secondary capitalize font-medium text-[15px]"
                                >
                                    <RiUserLine className="size-[18px] text-secondary" />
                                    <span>profile</span>
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={logoutHandler}
                                    disabled={processing}
                                    className="hover:text-red-600 capitalize font-medium text-[15px]"
                                >
                                    <RiLogoutBoxRLine className="size-[18px] text-red-600" />
                                    <span>Logout</span>
                                </button>
                            </li>
                        </ul>
                    </details>
                </div>
            </div>
            {/* Notification Sidebar */}
            <NotificationSidebar
                isNotificationBarOpen={isNotificationBarOpen}
                setIsNotificationBarOpen={setIsNotificationBarOpen}
            />
        </>
    );
};

export default Topbar;
