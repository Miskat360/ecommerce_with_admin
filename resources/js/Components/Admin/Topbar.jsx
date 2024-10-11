import { Link, useForm, usePage } from "@inertiajs/react";
import {
    RiLogoutBoxRLine,
    RiNotification2Line,
    RiSearchLine,
    RiUserLine,
} from "@remixicon/react";

const Topbar = ({}) => {
    const admin = usePage().props.admin.user;

    const { post, processing } = useForm();
    const logoutHandler = () => {
        post(route("admin.logout"));
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
                    <div className="max-md:hidden size-10 flex items-center justify-center bg-secondary-50 text-secondary rounded-md">
                        <RiNotification2Line />
                    </div>
                    <div
                        onClick={logoutHandler}
                        className="xs:hidden size-10 flex items-center justify-center bg-secondary-50 text-secondary rounded-md"
                    >
                        <RiLogoutBoxRLine />
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
        </>
    );
};

export default Topbar;
