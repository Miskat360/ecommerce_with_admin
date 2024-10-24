import { cn } from "@/utils/cn";
import { RiArrowRightUpLine, RiLoader4Line } from "@remixicon/react";
const PrimaryButton = ({
    className = "",
    iconDivClasses,
    disabled,
    children,
    text,
    ...props
}) => {
    return (
        <>
            <button
                {...props}
                className={cn(
                    className,
                    `w-[200px] h-auto rounded-full border border-primary py-[2px] pr-[2px] pl-5 bg-white text-black font-bold capitalize inline-flex items-center justify-between`
                )}
                disabled={disabled}
            >
                {disabled && (
                    <RiLoader4Line size={16} className="animate-spin" />
                )}
                {text}
                <div
                    className={cn(
                        iconDivClasses,
                        "bg-primary rounded-full p-2"
                    )}
                >
                    {children ? (
                        children
                    ) : (
                        <RiArrowRightUpLine className="size-[20px]" />
                    )}
                </div>
            </button>
        </>
    );
};
export default PrimaryButton;
