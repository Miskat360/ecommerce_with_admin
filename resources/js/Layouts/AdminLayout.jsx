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
                    <section className="relative flex flex-col items-center flex-1 min-h-screen g-white px-2 pb-10 pt-24 max-md:pb-32 md:px-6 bg-[#F9FAFB]">
                        <div className="w-full">{children}</div>
                    </section>
                </main>

                <Bottombar />
            </div>
        </>
    );
};

export default AdminLayout;
