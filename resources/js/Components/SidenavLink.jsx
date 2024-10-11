import { cn } from "@/utils/cn";
import { Link } from "@inertiajs/react";

export default function SidenavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={cn(
                className,
                `relative flex justify-start gap-4 rounded-lg py-4 pl-4 pr-4 lg:pr-8 capitalize font-medium ${
                    active ? "bg-secondary text-white" : "hover:bg-secondary-50"
                }`
            )}
        >
            {children}
        </Link>
    );
}
