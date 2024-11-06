import TextInput from "@/Components/Admin/TextInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/Admin/InputLabel";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { RiArrowDropRightLine, RiArrowLeftLine } from "@remixicon/react";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import TertiaryButton from "@/Components/TertiaryButton";
import TextEditor from "@/Components/TextEditor";
import SecondaryButton from "@/Components/SecondaryButton";
import FileUploadDropzone from "@/Components/ui/FileUploadDropzone";

const AddProduct = () => {
    const { processing, get } = useForm();
    const foodMenuConRef = useRef();
    const foodMenuRef = useRef();
    const [showMenuBox, setShowMenuBox] = useState(false);
    const handleFoodMenu = () => {
        setShowMenuBox((prev) => !prev);
    };
    useEffect(() => {
        foodMenuRef.current = foodMenuConRef.current.children[0].children[1];
    }, []);
    document.addEventListener("mousedown", (e) => {
        if (showMenuBox && !foodMenuConRef.current?.contains(e.target)) {
            setShowMenuBox(false);
        }
    });

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
                        // onSubmit={}
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
                                {/* <FormSectionInput
                                    label={"Media"}
                                    type="file"
                                    name={"product_image"}
                                    inputClasses={
                                        "border-dashed h-[5rem] cursor-pointer"
                                    }
                                /> */}
                                <div className="mt-4">
                                    <InputLabel value={"Image"} />
                                    <FileUploadDropzone />
                                </div>
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
                            <div>
                                <TextEditor />
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
                            <div className="bg-white border rounded-xl overflow- p-4 flex flex-col">
                                <div ref={foodMenuConRef} className="relative">
                                    <FormSectionInput
                                        label={"Collections"}
                                        name={"product_collections"}
                                        className="!mt-0"
                                        onClick={handleFoodMenu}
                                        showMenuBox={showMenuBox}
                                        id="foodMenu"
                                    />
                                    <div
                                        className={`${
                                            showMenuBox ? "block" : "hidden"
                                        } absolute bg-white shadow-lg rounded-lg p-4 border`}
                                    >
                                        <p>Lorem, ipsum dolor.</p>
                                        <SecondaryButton
                                            onClick={() => {
                                                get(
                                                    route("admin.add-category")
                                                );
                                            }}
                                            disabled={processing}
                                        >
                                            Add Category
                                        </SecondaryButton>
                                    </div>
                                </div>
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
    onClick,
}) => {
    return (
        <>
            <div className={cn(className, `flex flex-col mt-4`)}>
                <InputLabel for={name}>{label}</InputLabel>
                <TextInput
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    className={inputClasses}
                    isFocused={isFocused}
                    onClick={onClick}
                />
                <InputError message={message} className="mt-2" />
            </div>
        </>
    );
};

export default AddProduct;
