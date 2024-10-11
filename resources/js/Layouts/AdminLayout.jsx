import Bottombar from "@/Components/Admin/Bottombar";
import Sidebar from "@/Components/Admin/Sidebar";
import Topbar from "@/Components/Admin/Topbar";

const AdminLayout = ({ children }) => {
    return (
        <>
            <div className="">
                <Topbar />

                <main className="flex">
                    <Sidebar />
                    <section className="flex flex-col items-center flex-1 min-h-screen g-white px-6 pb-10 pt-28 max-md:pb-32 sm:px-10 bg-[#f1f1f1]">
                        <div className="w-full">{children}</div>
                    </section>
                </main>

                <Bottombar />
            </div>
        </>
    );
};

export default AdminLayout;
