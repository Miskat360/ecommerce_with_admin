import React, { FC, ReactNode } from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Magnetic from "./Magnetic";
import styles from "./ButtonStyles.module.css";

interface props {
    children: ReactNode;
    fill?: boolean;
    className?: string;
    backgroundColor?: string;
}
const Button: FC<props> = ({
    children,
    fill,
    className,
    backgroundColor = "#334BD3",
    ...attributes
}) => {
    const circle = useRef(null);
    let timeoutId: number | null = null;
    let timeline = useRef<gsap.core.Timeline | null>(null);
    useEffect(() => {
        timeline.current = gsap.timeline({ paused: true });
        timeline.current
            .to(
                circle.current,
                {
                    top: "-25%",
                    width: "150%",
                    duration: 0.4,
                    ease: "power3.in",
                },
                "enter"
            )
            .to(
                circle.current,
                { top: "-150%", width: "125%", duration: 0.25 },
                "exit"
            );
    }, []);

    const manageMouseEnter = () => {
        if (timeoutId) clearTimeout(timeoutId);
        timeline.current?.tweenFromTo("enter", "exit");
    };

    const manageMouseLeave = () => {
        timeoutId = window.setTimeout(() => {
            timeline.current?.play();
        }, 300);
    };

    return (
        <Magnetic points={0.5}>
            <div className={className} {...attributes}>
                <div
                    className={`${
                        fill
                            ? `${styles.fillButton} fillButton rounded-[50px] border border-gray-900`
                            : `${styles.roundedButton} roundedButton rounded-[50%]`
                    } overflow-hidden w-full h-full relative cursor-pointer`}
                    onMouseEnter={() => {
                        manageMouseEnter();
                    }}
                    onMouseLeave={() => {
                        manageMouseLeave();
                    }}
                >
                    {children}
                    <div
                        ref={circle}
                        style={{ backgroundColor }}
                        className={`${
                            fill ? "fill left-1/2 -translate-x-1/2" : "circle"
                        } w-full h-[150%] absolute rounded-[50%] top-full`}
                    />
                </div>
            </div>
        </Magnetic>
    );
};

export default Button;
