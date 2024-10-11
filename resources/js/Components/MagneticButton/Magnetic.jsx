import React, { ReactElement, useEffect, useRef } from "react";
import gsap from "gsap";

interface magneticProps {
    points: number;
    children: ReactElement;
}
const Magnetic: React.FC<magneticProps> = ({ children, points }) => {
    const magnetic = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const xTo = gsap.quickTo(magnetic.current, "x", {
            duration: 1,
            ease: "elastic.out(1, 0.3)",
        });
        const yTo = gsap.quickTo(magnetic.current, "y", {
            duration: 1,
            ease: "elastic.out(1, 0.3)",
        });

        magnetic.current?.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            const rect = magnetic.current?.getBoundingClientRect();
            const height = rect?.height ?? 0;
            const width = rect?.width ?? 0;
            const left = rect?.left ?? 0;
            const top = rect?.top ?? 0;
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * points);
            yTo(y * points);
        });
        magnetic.current?.addEventListener("mouseleave", () => {
            xTo(0);
            yTo(0);
        });
    }, []);

    return React.cloneElement(children, { ref: magnetic });
};

export default Magnetic;
