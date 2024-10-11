import { cn } from "@/utils/cn";
import { RiLoader4Line } from "@remixicon/react";

export default function SecondaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={cn(
                className,
                `inline-flex items-center py-[10px] bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
                    disabled ? "opacity-60 px-[6px]" : "px-4"
                }`
            )}
            disabled={disabled}
        >
            {disabled && (
                <RiLoader4Line size={16} className="animate-spin mr-1" />
            )}
            <div>{children}</div>
        </button>
    );
}
