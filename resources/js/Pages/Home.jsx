import BurgerIngredients from "@/Components/Sections/Section-item/BurgerIngredients";
import CurveArrow from "@/Components/Sections/Section-item/CurveArrow";
import HomeFoodMenu from "@/Components/Sections/HomeFoodMenu";
import TextImgSlider from "@/Components/Sections/TextImgSlider";
import TextSlider from "@/Components/Sections/TextSlider";
import { heroBg, textImgSliders, whatInsideBurger } from "@/data";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import Delivery from "@/Components/Sections/Delivery";
import DownloadApp from "@/Components/Sections/DownloadApp";
import ExclusiveDeals from "@/Components/Sections/ExclusiveDeals";
import HomeCards from "@/Components/Sections/HomeCards";
import CardSlider from "@/Components/Sections/CardSlider";
import MenusCards from "@/Components/Sections/MenusCards";

export default function Home() {
    return (
        <GuestLayout>
            <Head title="Home" />
            <main className="font-syne overflow-x-hidden text-black">
                {/* hero section */}
                <section className="w-full p-5">
                    <div className="font-popularCafe text-[32px] sm:text-[38px] lg:text-[48px] xl:text-[64px] sm:max-w-[80%] mx-auto text-center leading-[30px] sm:leading-[40px] lg:leading-[50px] text-black">
                        Welcome to the{" "}
                        <span className="font-negaroa text-primary !font-medium">
                            Golden
                        </span>{" "}
                        Arches Where Every Bite is a{" "}
                        <span className="font-negaroa text-primary !font-medium">
                            Smile!
                        </span>
                    </div>
                    <div className="w-full h-[350px] sm:h-[300px] lg:h-[450px] overflow-hidden rounded-[24px] mt-5 object-cover">
                        <img
                            src={heroBg}
                            alt=""
                            className="w-full h-full sm:h-auto object-cover sm:translate-y-[-50px] lg:translate-y-[-140px] bright"
                        />
                    </div>
                </section>
                {/* Text Slider */}
                <section>
                    <TextSlider />
                </section>
                {/* Featured Card | Main Menu */}
                <section>
                    <HomeFoodMenu />
                </section>
                <section>
                    <MenusCards />
                </section>
                <section>
                    <CardSlider />
                </section>
                <section>
                    <HomeCards />
                </section>
                {/* Burger Ingredients section */}
                <section className="w-full bg-patternBg bg-center relative py-[8.2rem]">
                    <div className="size-full">
                        <div className="w-full flex items-center justify-center">
                            <div className="w-[300px] h-[550px] lg:w-[400px] lg:h-[700px] xl:w-[500px] xl:h-[900px] bg-[#ffeab8] rounded-full absolute" />
                            <img
                                src={whatInsideBurger}
                                alt=""
                                className="bright w-full xs:w-[400px] md:w-[300px] lg:w-[400px] xl:w-auto"
                            />
                        </div>
                        {/* curve arrows */}
                        <CurveArrow />
                        {/* Burger Ingredients */}
                        <BurgerIngredients />
                    </div>
                </section>
                {/* exclusive deals */}
                <section>
                    <ExclusiveDeals />
                </section>
                {/* three slider section */}
                <section>
                    <div className="flex flex-col gap-[10px]">
                        {textImgSliders.map(
                            ({ duration, textImgSlider }, index) => (
                                <TextImgSlider
                                    duration={duration}
                                    textImgSlider={textImgSlider}
                                />
                            )
                        )}
                    </div>
                </section>
                <section>
                    <Delivery />
                </section>
                <section>
                    <DownloadApp />
                </section>
            </main>
        </GuestLayout>
    );
}
