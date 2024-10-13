import React from "react";
import { useCountdown } from "@/hooks/useCountdown";
import { cn } from "@/utils/cn";

const DateTimeDisplay = ({
    value,
    type,
    isDanger,
    className,
    numberClasses,
    textClasses,
}) => {
    return (
        <>
            <div
                className={cn(
                    className,
                    `${
                        isDanger &&
                        "!text-red-600 !font-bold !bg-[rgba(255,255,255,1)]"
                    } bg-[rgba(255,255,255,0.08)] flex flex-col justify-center items-center size-[3.5rem] sm:w-[5.3rem] sm:h-[5.5rem] rounded sm:rounded-xl`
                )}
            >
                <span
                    className={cn(
                        numberClasses,
                        `text-[1.5rem] sm:text-[2.2rem] leading-none font-medium`
                    )}
                >
                    {value}
                </span>{" "}
                <span className={`${textClasses} max-sm:text-sm`}>{type}</span>
            </div>
        </>
    );
};
const ShowCounter = ({
    days,
    hours,
    minutes,
    seconds,
    className,
    numberClasses,
    textClasses,
}) => {
    return (
        <>
            <DateTimeDisplay
                value={days}
                type={"Days"}
                isDanger={days <= 3}
                className={className}
                numberClasses={numberClasses}
                textClasses={textClasses}
            />
            <DateTimeDisplay
                value={hours}
                type={"Hours"}
                isDanger={days <= 3}
                className={className}
                numberClasses={numberClasses}
                textClasses={textClasses}
            />
            <DateTimeDisplay
                value={minutes}
                type={"Mins"}
                isDanger={days <= 3}
                className={className}
                numberClasses={numberClasses}
                textClasses={textClasses}
            />
            <DateTimeDisplay
                value={seconds}
                type={"Seconds"}
                isDanger={days <= 3}
                className={className}
                numberClasses={numberClasses}
                textClasses={textClasses}
            />
        </>
    );
};

const ExpiredNotice = () => {
    return (
        <div className="text-white max-sm:text-3xl font-bold">
            <span>Expired!!!</span>
        </div>
    );
};

const CountdownTimer = ({
    targetDate,
    className,
    numberClasses,
    textClasses,
}) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                className={className}
                numberClasses={numberClasses}
                textClasses={textClasses}
            />
        );
    }
};

export default CountdownTimer;
