import CountdownTimer from "@/Components/CountdownTimer";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

const DAYS_IN_MS = 5 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();

const dateTime = NOW_IN_MS + DAYS_IN_MS;

export default function Customers() {
    return (
        <>
            <Head title="Customers" />
            <AdminLayout>
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                            <h1 className="text-center text-2xl">
                                We are still working on our website. Stay tuned
                                for updates!
                            </h1>
                            <div className="mt-8">
                                <CountdownTimer
                                    targetDate={dateTime}
                                    className={"border"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}
