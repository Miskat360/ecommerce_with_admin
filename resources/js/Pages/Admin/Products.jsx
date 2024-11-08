import SecondaryButton from "@/Components/SecondaryButton";
import { DataTableDemo } from "@/Components/ui/DataTable";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Products({ products }) {
    const { processing, get } = useForm();

    return (
        <>
            <Head title="Products" />
            <AdminLayout>
                <div className="bg-red-80 py-5">
                    <SecondaryButton
                        onClick={() => {
                            get(route("products.create"));
                        }}
                        disabled={processing}
                    >
                        add product
                    </SecondaryButton>
                    <div>
                        <DataTableDemo products={products} />
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}
