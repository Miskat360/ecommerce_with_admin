import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function Orders() {
    return (
        <>
            <Head title="Orders" />
            <AdminLayout>
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900 font-negaroa">
                                You're logged in!
                            </div>
                            <div className="font-['negaroa']">
                                Lorem ipsum, dolor sit ame
                            </div>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}