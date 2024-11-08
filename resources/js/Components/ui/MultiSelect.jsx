import * as React from "react";
import { CheckIcon, XCircle, ChevronDown, XIcon, Loader } from "lucide-react";
import { cn } from "@/utils/cn";
import { Button } from "./Button";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "./Command";
import SecondaryButton from "../SecondaryButton";
import { useForm } from "@inertiajs/react";
export const MultiSelect = React.forwardRef(
    (
        {
            options,
            onValueChange,
            defaultValue = [],
            placeholder = "Select options",
            animation = 0,
            maxCount = 3,
            modalPopover = false,
            asChild = false,
            className,
            popoverClass,
            showall = false,
            ...props
        },
        ref
    ) => {
        const [selectedValues, setSelectedValues] =
            React.useState(defaultValue);
        const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
        const handleInputKeyDown = (event) => {
            if (event.key === "Enter") {
                setIsPopoverOpen(true);
            } else if (
                event.key === "Backspace" &&
                !event.currentTarget.value
            ) {
                const newSelectedValues = [...selectedValues];
                newSelectedValues.pop();
                setSelectedValues(newSelectedValues);
                onValueChange(newSelectedValues);
            }
        };
        const toggleOption = (option) => {
            const newSelectedValues = selectedValues.includes(option)
                ? selectedValues.filter((value) => value !== option)
                : [...selectedValues, option];
            setSelectedValues(newSelectedValues);
            onValueChange(newSelectedValues);
        };
        const handleClear = () => {
            setSelectedValues([]);
            onValueChange([]);
        };
        const handleTogglePopover = () => {
            setIsPopoverOpen((prev) => !prev);
        };
        const clearExtraOptions = () => {
            const newSelectedValues = selectedValues.slice(0, maxCount);
            setSelectedValues(newSelectedValues);
            onValueChange(newSelectedValues);
        };

        //*useForm Inertia.js
        const { processing, get } = useForm();
        return (
            <Popover
                open={isPopoverOpen}
                onOpenChange={setIsPopoverOpen}
                modal={modalPopover}
            >
                <PopoverTrigger asChild>
                    <Button
                        ref={ref}
                        {...props}
                        onClick={handleTogglePopover}
                        className={cn(
                            "flex w-full pl-1 pr-0 py-1.5 text-black h-auto items-center justify-between bg-white hover:bg-white border border-zinc-400 hover:border-zinc-500 rounded-lg",
                            className
                        )}
                    >
                        {selectedValues.length > 0 ? (
                            <div className="flex items-center justify-between w-full">
                                <div className="flex flex-wrap items-center gap-1">
                                    {(showall
                                        ? selectedValues
                                        : selectedValues.slice(0, maxCount)
                                    ).map((value) => {
                                        const option = options.find(
                                            (o) => o.value === value
                                        );
                                        return (
                                            <div
                                                key={value}
                                                className={cn(
                                                    "inline-flex items-center rounded border pl-2 pr-1 py-[3px] text-xs font-semibold hover:bg-blue-700 bg-secondary text-primary-foreground"
                                                )}
                                            >
                                                {option?.label}
                                                <XCircle
                                                    className="ml-1.5 h-4 w-4 cursor-pointer "
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        toggleOption(value);
                                                    }}
                                                />
                                            </div>
                                        );
                                    })}
                                    {!showall &&
                                        selectedValues.length > maxCount && (
                                            <div
                                                className={cn(
                                                    "inline-flex items-center border pl-2 pr-1 py-0.5 rounded-full"
                                                )}
                                                style={{
                                                    animationDuration: `${animation}s`,
                                                }}
                                            >
                                                {`+ ${
                                                    selectedValues.length -
                                                    maxCount
                                                } more`}
                                                <XCircle
                                                    className="ml-1.5 h-4 w-4 cursor-pointer"
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        clearExtraOptions();
                                                    }}
                                                />
                                            </div>
                                        )}
                                </div>
                                <XIcon
                                    className="h-4 mr-1 cursor-pointer text-zinc-600"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        handleClear();
                                    }}
                                />
                            </div>
                        ) : (
                            <div className="flex items-center justify-between w-full mx-auto text-zinc-700">
                                <span className="text-sm mx-2">
                                    {placeholder}
                                </span>
                                <ChevronDown className="h-4 cursor-pointer text-" />
                            </div>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    className={cn(
                        "w-[230px] xl:w-[320px] bg-white p-0",
                        popoverClass
                    )}
                    align="start"
                    onEscapeKeyDown={() => setIsPopoverOpen(false)}
                >
                    <Command>
                        <CommandInput
                            className="py-2"
                            placeholder="Search..."
                            onKeyDown={handleInputKeyDown}
                        />
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup>
                                {options.map((option) => {
                                    const isSelected = selectedValues.includes(
                                        option.value
                                    );
                                    const isDisabled = option.disable;
                                    return (
                                        <CommandItem
                                            key={option.value}
                                            onSelect={() =>
                                                !isDisabled &&
                                                toggleOption(option.value)
                                            }
                                            className={cn(
                                                "cursor-pointer",
                                                isDisabled &&
                                                    "opacity-50 cursor-not-allowed"
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border",
                                                    isSelected
                                                        ? "bg-secondary border-secondary text-primary-foreground"
                                                        : "opacity-50 [&_svg]:invisible border-zinc-700"
                                                )}
                                            >
                                                {!isDisabled && (
                                                    <CheckIcon className="h-4 w-4" />
                                                )}
                                            </div>
                                            <span>{option.label}</span>
                                        </CommandItem>
                                    );
                                })}
                            </CommandGroup>
                            <CommandSeparator />
                            <CommandGroup>
                                <div className="flex items-center justify-between">
                                    {selectedValues.length > 0 && (
                                        <>
                                            <CommandItem className="flex-1 justify-center cursor-pointer border-r p-0">
                                                <button
                                                    onClick={() => {
                                                        get(
                                                            route(
                                                                "admin.add-category"
                                                            )
                                                        );
                                                    }}
                                                    disabled={processing}
                                                    className="w-full px-2 py-1.5 flex justify-center"
                                                >
                                                    {processing ? (
                                                        <Loader
                                                            className={`${
                                                                processing &&
                                                                "animate-spin"
                                                            } size-5`}
                                                        />
                                                    ) : (
                                                        "Add New"
                                                    )}
                                                </button>
                                            </CommandItem>
                                        </>
                                    )}
                                    <CommandItem
                                        onSelect={() => setIsPopoverOpen(false)}
                                        className="flex-1 justify-center cursor-pointer max-w-full"
                                    >
                                        Close
                                    </CommandItem>
                                </div>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        );
    }
);
MultiSelect.displayName = "MultiSelect";
