import InputLabel from "@/Components/Admin/InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { RiSearch2Line } from "@remixicon/react";
import React from "react";

const AddCategory = () => {
    return (
        <AdminLayout>
            <Head title="Add Category" />
            <section>
                <form action="" method="post">
                    {/* CSRF token */}
                    {/* <input type="hidden" name="_token" value={usePage().props._token} /> */}
                    <div className="flex flex-col [@media(min-width:850px)]:flex-row gap-4 mt-6">
                        <div className="bg-white border rounded-xl overflow-hidden p-4 md:basis-3/5">
                            <div className="flex flex-col">
                                <InputLabel for="category_description">
                                    Title
                                </InputLabel>
                                <input
                                    name="category_title"
                                    className="border border-zinc-400 hover:border-zinc-500 rounded-lg py-[6px] px-3 text-sm text-zinc-700 mt-1"
                                />
                                <InputError message={""} className="mt-2" />
                            </div>
                            <div className="flex flex-col mt-4">
                                <InputLabel for="category_description">
                                    Description
                                </InputLabel>
                                <textarea
                                    name="category_description"
                                    id=""
                                    rows="6"
                                    className="border border-zinc-400 hover:border-zinc-500 rounded-lg py-[6px] px-3 text-sm text-zinc-700 mt-1"
                                ></textarea>
                                <InputError message={""} className="mt-2" />
                            </div>
                        </div>
                        <div className="bg-white border rounded-xl overflow-hidden p-4 md:basis-2/5">
                            <div className="flex flex-col">
                                <InputLabel for="category_description">
                                    Title
                                </InputLabel>
                                <input
                                    name="category_title"
                                    id=""
                                    rows="6"
                                    className="border border-zinc-400 hover:border-zinc-500 rounded-lg py-[6px] px-3 text-sm text-zinc-700 mt-1"
                                />
                                <InputError message={""} className="mt-2" />
                            </div>
                            <div className="flex flex-col mt-4">
                                <InputLabel for="category_description">
                                    Description
                                </InputLabel>
                                <textarea
                                    name="category_description"
                                    id=""
                                    rows="6"
                                    className="border border-zinc-400 hover:border-zinc-500 rounded-lg py-[6px] px-3 text-sm text-zinc-700 mt-1"
                                ></textarea>
                                <InputError message={""} className="mt-2" />
                            </div>
                        </div>
                    </div>
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
                                        <option selected>
                                            Who shot first?
                                        </option>
                                        <option>Han Solo</option>
                                        <option>Greedo</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </AdminLayout>
    );
};

export default AddCategory;
