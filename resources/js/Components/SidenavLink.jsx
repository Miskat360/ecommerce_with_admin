import { cn } from "@/utils/cn";

export default function SidenavLink({
    className = "",
    disabled,
    children,
    active = false,
    ...props
}) {
    return (
        <button
            {...props}
            className={cn(
                className,
                `relative flex justify-start items-center rounded-lg py-4 pl-4 pr-4 lg:pr-8 capitalize font-medium ${
                    active ? "bg-secondary text-white" : "hover:bg-secondary-50"
                } ${disabled && "opacity-60"} ${
                    disabled && !active && "hover:bg-transparent"
                }`
            )}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
