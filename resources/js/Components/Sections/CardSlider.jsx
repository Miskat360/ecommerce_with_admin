import React from "react";
import ProductCard from "../ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeading from "../SectionHeading";
import { cn } from "@/utils/cn";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={cn(
                className,
                `!bg-primary !flex !items-center !justify-center !size-12 before:!text-3xl before:!text-white rounded-xl`
            )}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={cn(
                className,
                `!bg-primary !flex !items-center !justify-center !size-12 before:!text-3xl before:!text-white !z-10 rounded-xl`
            )}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}
const CardSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="p-8">
            <SectionHeading
                title="today's best"
                subTitle="~menu~"
                img="https://demo2.pavothemes.com/poco/wp-content/uploads/2022/12/h7_cate5.png"
                imgClasses="!mb-1"
                paragraph="Discover the most-loved burgers and meals handpicked just
                    for you!"
                // subTitleClasses="!text-[#73C118]"
            />
            <div className="mt-8">
                <Slider {...settings} className="pr-4">
                    <div>
                        <ProductCard
                            num={8}
                            text={"burger"}
                            img={
                                "https://demo2.pavothemes.com/poco/wp-content/uploads/2022/12/h7_cate5.png"
                            }
                        />
                    </div>
                    <div>
                        <ProductCard
                            num={8}
                            text={"pizza"}
                            img={
                                "https://demo2.pavothemes.com/poco/wp-content/uploads/2020/08/category3.png"
                            }
                        />
                    </div>
                    <div>
                        <ProductCard
                            num={8}
                            text={"chicken"}
                            img={
                                "https://demo2.pavothemes.com/poco/wp-content/uploads/2020/09/category-33.png"
                            }
                        />
                    </div>
                    <div>
                        <ProductCard
                            num={8}
                            text={"burger"}
                            img={
                                "https://demo2.pavothemes.com/poco/wp-content/uploads/2022/12/h7_cate7.png"
                            }
                        />
                    </div>
                    <div>
                        <ProductCard
                            num={8}
                            text={"burger"}
                            img={
                                "https://demo2.pavothemes.com/poco/wp-content/uploads/2022/12/h7_cate4.png"
                            }
                        />
                    </div>
                    <div>
                        <ProductCard
                            num={8}
                            text={"burger"}
                            img={
                                "https://demo2.pavothemes.com/poco/wp-content/uploads/2022/12/h7_cate8.png"
                            }
                        />
                    </div>
                    <div>
                        <ProductCard
                            num={8}
                            text={"burger"}
                            img={
                                "https://demo2.pavothemes.com/poco/wp-content/uploads/2022/12/h7_cate2.png"
                            }
                        />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default CardSlider;
