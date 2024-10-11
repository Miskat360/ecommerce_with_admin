import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";

const Dashboard = ({ admin }) => {
    const { post, processing } = useForm();
    const handleLogout = () => {
        post(route("admin.logout"));
    };
    return (
        <>
            <Head title="Dashboard" />
            <AdminLayout>
                <div className="bg-red-80">
                    <div className="">
                        <div className="">
                            <h1 className="text-4xl font-semibold">
                                403
                                <div>
                                    {admin.user ? (
                                        <h1>
                                            Welcome, Admin {admin.user.name}!
                                        </h1>
                                    ) : (
                                        <h1>Please log in as Admin.</h1>
                                    )}
                                </div>
                            </h1>
                            <h2 className="text-xl font-semibold">Forbidden</h2>
                            <p className="">
                                You don't have permission to access this page.
                            </p>
                            <p className=" text-sm">"just kidding!"😜</p>
                            <button
                                onClick={handleLogout}
                                className="btn btn-primary"
                                disabled={processing}
                            >
                                {processing ? "Logging out..." : "Logout"}
                            </button>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
};

export default Dashboard;
