import SecondaryButton from "@/Components/SecondaryButton";
import { MultiSelect } from "@/Components/ui/MultiSelect";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm } from "@inertiajs/react";
import { Cat, Dog, Fish, Rabbit, Turtle } from "lucide-react";
import { useState } from "react";

export default function Products() {
    const frameworksList = [
        { value: "react", label: "React", icon: Turtle, disable: true },
        { value: "nextjs", label: "Nextjs", icon: Cat },
        { value: "vue", label: "Vue", icon: Dog },
        { value: "svelte", label: "Svelte", icon: Rabbit },
        { value: "ember", label: "Ember", icon: Fish },
    ];
    const { processing, get } = useForm();
    const [selectedFrameworks, setSelectedFrameworks] = useState([
        "nextjs",
        "svelte",
    ]);

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
                    <div>
                        {/* <MultiSelect
                            options={frameworksList}
                            onValueChange={setSelectedFrameworks}
                            defaultValue={selectedFrameworks}
                            placeholder="Select frameworks"
                            popoverClass="w-96"
                            maxCount={3}
                        /> */}
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}
