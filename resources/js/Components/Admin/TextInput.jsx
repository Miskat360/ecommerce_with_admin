import { cn } from "@/utils/cn";
import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={cn(
                className,
                `border border-zinc-400 hover:border-zinc-500 rounded-lg py-[6px] px-3 text-sm text-zinc-700 mt-1`
            )}
            ref={input}
        />
    );
});
