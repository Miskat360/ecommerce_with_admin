import { cn } from "@/utils/cn";
import { Link } from "@inertiajs/react";
import { RiLoader4Line } from "@remixicon/react";

export default function TertiaryButton({
    className = "",
    disabled,
    buttonText,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={cn(
                className,
                `bg-zinc-700 hover:bg-zinc-800 text-gray-200 text-xs py-[6px] rounded-lg border-2 border-x-zinc-900 border-b-zinc-900 cursor-pointer border-t-zinc-600 hover:border-t-gray-600 transition ease-in-out duration-150 capitalize flex items-center ${
                    disabled ? "opacity-60 px-[4px] bg-zinc-800" : "px-[14px]"
                }`
            )}
            disabled={disabled}
        >
            {disabled && (
                <RiLoader4Line size={16} className="animate-spin mr-1" />
            )}
            <div>{buttonText ? buttonText : children}</div>
        </button>
    );
}
