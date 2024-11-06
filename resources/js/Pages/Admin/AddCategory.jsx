import InputLabel from "@/Components/Admin/InputLabel";
import InputError from "@/Components/InputError";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import FileUploadDropzone from "@/Components/ui/FileUploadDropzone";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm } from "@inertiajs/react";
import { RiSearch2Line, RiUploadCloud2Line } from "@remixicon/react";
import React from "react";

const AddCategory = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        category_title: "",
        category_description: "",
        category_image: "",
    });
    const handleAddCategoryForm = (e) => {
        console.log("success add category");
        e.preventDefault();
        post(route("admin.add-category"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };
    return (
        <AdminLayout>
            <Head title="Add Category" />
            <section>
                <form onSubmit={handleAddCategoryForm} method="post">
                    <div className="flex flex-col [@media(min-width:850px)]:flex-row gap-4 mt-6">
                        <div className="bg-white border rounded-xl overflow-hidden p-4 md:basis-3/5">
                            <div className="flex flex-col">
                                <InputLabel for="category_title">
                                    Title
                                </InputLabel>
                                <input
                                    name="category_title"
                                    value={data.category_title}
                                    onChange={(e) =>
                                        setData(
                                            "category_title",
                                            e.target.value
                                        )
                                    }
                                    className="border border-zinc-400 hover:border-zinc-500 rounded-lg py-[6px] px-3 text-sm text-zinc-700 mt-1"
                                />
                                <InputError
                                    message={errors.category_title}
                                    className="mt-2"
                                />
                            </div>
                            <div className="flex flex-col mt-4">
                                <InputLabel for="category_description">
                                    Description
                                </InputLabel>
                                <textarea
                                    rows="6"
                                    id=""
                                    name="category_description"
                                    value={data.category_description}
                                    onChange={(e) =>
                                        setData(
                                            "category_description",
                                            e.target.value
                                        )
                                    }
                                    className="border border-zinc-400 hover:border-zinc-500 rounded-lg py-[6px] px-3 text-sm text-zinc-700 mt-1"
                                ></textarea>
                                <InputError
                                    message={errors.category_description}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div className="bg-white border rounded-xl overflow-hidden p-4 md:basis-2/5">
                            <div className="flex flex-col">
                                <InputLabel value={"Image"} />
                                <FileUploadDropzone />
                            </div>
                            <InputError
                                message={errors.category_image}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end mt-4">
                        <SecondaryButton disabled={processing}>
                            save
                        </SecondaryButton>
                    </div>
                </form>
                <div className="bg-white border rounded-xl overflow-hidden p-4 mt-4">
                    <div className="flex flex-col">
                        <p className="text-sm font-semibold text-zinc-700">
                            Products
                        </p>
                        <div className="flex items-center gap-4">
                            <label className="relative inline-block">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <RiSearch2Line className="size-4" />
                                </span>
                                <input
                                    className="w-full h-[34px] border border-zinc-400 hover:border-zinc-500 rounded-lg pl-9 pr-3 text-sm"
                                    placeholder="Search products"
                                />
                            </label>
                            <div>
                                <select className="select select-bordered w-full max-w-xs">
                                    <option selected>best sell</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AdminLayout>
    );
};

export default AddCategory;
