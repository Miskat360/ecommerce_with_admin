import { cn } from "@/utils/cn";

const SectionHeading = ({
    title,
    subTitle,
    paragraph,
    img,
    subTitleClasses,
    imgClasses,
}) => {
    return (
        <>
            <div className="w-[95%] md:w-[60%] xl:w-[50%] mx-auto text-center">
                <div className="font-costarica text-[72px] xs:text-[96px] sm:text-[100px] leading-[50px] xs:leading-[70px]">
                    {title}
                </div>
                <div
                    className={`flex items-end justify-center text-[48px] xs:text-[58px] sm:text-[64px] font-popularCafe ${
                        subTitleClasses && subTitleClasses
                    } 
                    text-primary leading-[35px] xs:leading-normal`}
                >
                    <img
                        src={img}
                        alt=""
                        className={cn(
                            imgClasses,
                            `bright w-[80px] xs:w-[100px] sm:w-auto -mb-2`
                        )}
                        style={{
                            transform: "rotateX(180deg) rotate(180deg)",
                        }}
                    />
                    {subTitle}
                    <img
                        src={img}
                        alt=""
                        className={cn(
                            imgClasses,
                            `bright w-[80px] xs:w-[100px] sm:w-auto -mb-2`
                        )}
                    />
                </div>
                <div className="w-[65%] h-[1px] bg-black mx-auto mt-2 xs:-mt-3" />
                <div className="font-semibold mt-1">{paragraph}</div>
            </div>
        </>
    );
};

export default SectionHeading;
