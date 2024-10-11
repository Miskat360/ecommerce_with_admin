import { cn } from "@/utils/cn";

export default function InputLabel({
    value,
    className = "",
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={cn(
                className,
                `block text-[13px] font-semibold text-zinc-700`
            )}
        >
            {value ? value : children}
        </label>
    );
}
