import TextInput from "@/Components/Admin/TextInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/Admin/InputLabel";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";
import { RiArrowDropRightLine, RiArrowLeftLine } from "@remixicon/react";
import React from "react";
import { cn } from "@/utils/cn";
import TertiaryButton from "@/Components/TertiaryButton";

const AddProduct = () => {
    return (
        <>
            <AdminLayout>
                <Head title="Add Product" />
                <section className="w-full">
                    <div className="flex items-center gap-2">
                        <Link
                            href={route("admin.products")}
                            className="hover:bg-gray-300 p-1 rounded-md"
                        >
                            <RiArrowLeftLine className="size-5" />
                        </Link>
                        <div className="text-xl font-bold text-gray-700">
                            Add product
                        </div>
                    </div>
                    <form
                        onSubmit=""
                        className="flex flex-col [@media(min-width:850px)]:flex-row gap-4 mt-6"
                    >
                        <div className="md:basis-4/6 flex flex-col gap-4">
                            <div className="bg-white border rounded-xl overflow-hidden p-4">
                                <FormSectionInput
                                    label={"Title"}
                                    isFocused={true}
                                    placeholder="Beef burger"
                                    name={"product_title"}
                                />
                                <div className="flex flex-col mt-4">
                                    <InputLabel for="product_description">
                                        Description
                                    </InputLabel>
                                    <textarea
                                        name="product_description"
                                        id=""
                                        rows="6"
                                        className="border border-zinc-400 hover:border-zinc-500 rounded-lg py-[6px] px-3 text-sm text-zinc-700 mt-1 outline-blue2"
                                    ></textarea>
                                    <InputError message={""} className="mt-2" />
                                </div>
                                <FormSectionInput
                                    label={"Media"}
                                    type="file"
                                    name={"product_image"}
                                    inputClasses={
                                        "border-dashed h-[5rem] cursor-pointer"
                                    }
                                />
                                <FormSectionInput
                                    label={"Category"}
                                    name={"product_category"}
                                />
                            </div>
                            <div className="bg-white border rounded-xl overflow-hidden p-4">
                                <p className="text-sm font-semibold text-zinc-700">
                                    Pricing
                                </p>
                                <div className="flex gap-4">
                                    <FormSectionInput
                                        label={"Price"}
                                        name={"product_price"}
                                        placeholder="$ 0.00"
                                    />
                                    <FormSectionInput
                                        label={"Compare-at price"}
                                        name={"compare_price"}
                                        placeholder="$ 0.00"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="md:basis-2/6 flex flex-col gap-4">
                            <div className="bg-white border rounded-xl overflow-hidden p-4 flex flex-col">
                                <label
                                    for="product_status"
                                    className="text-sm font-semibold text-zinc-700"
                                >
                                    Status
                                </label>
                                <select
                                    name="product_status"
                                    id=""
                                    className="border border-zinc-400 hover:border-zinc-500 outline-blue2 rounded-lg py-[6px] px-3 text-[13px] text-zinc-700 mt-1"
                                >
                                    <option value="active">Active</option>
                                    <option value="Draft">Draft</option>
                                </select>
                            </div>
                            <div className="bg-white border rounded-xl overflow-hidden p-4 flex flex-col">
                                <FormSectionInput
                                    label={"Collections"}
                                    name={"product_collections"}
                                    className="!mt-0"
                                />
                                <FormSectionInput
                                    label={"Tags"}
                                    name={"product_tags"}
                                />
                            </div>
                            <div className="mt-auto ml-auto">
                                <TertiaryButton buttonText={"save"} />
                            </div>
                        </div>
                    </form>
                </section>
            </AdminLayout>
        </>
    );
};

const FormSectionInput = ({
    className = "",
    label,
    inputClasses = "",
    type = "text",
    placeholder = "",
    name,
    isFocused = false,
    message,
}) => {
    return (
        <>
            <div className={cn(className, `flex flex-col mt-4`)}>
                <InputLabel for={name}>{label}</InputLabel>
                <TextInput
                    type={type}
                    name={name}
                    id=""
                    placeholder={placeholder}
                    className={inputClasses}
                    isFocused={isFocused}
                />
                <InputError message={message} className="mt-2" />
            </div>
        </>
    );
};

export default AddProduct;
