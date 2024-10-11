import SecondaryButton from "@/Components/SecondaryButton";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Products() {
    const { processing, get } = useForm();

    return (
        <>
            <Head title="Products" />
            <AdminLayout>
                <div className="bg-red-80 py-5">
                    <SecondaryButton
                        onClick={() => {
                            get(route("admin.add-product"));
                        }}
                        disabled={processing}
                    >
                        add product
                    </SecondaryButton>
                </div>
            </AdminLayout>
        </>
    );
}
