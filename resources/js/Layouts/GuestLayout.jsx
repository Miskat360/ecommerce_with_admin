import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
// import Lenis from "lenis";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Guest({ children }) {
    // gsap.registerPlugin(ScrollTrigger);

    // const lenis = new Lenis();

    // lenis.on("scroll", (e) => {
    //     console.log(e);
    // });

    // function raf(time) {
    //     lenis.raf(time);
    //     requestAnimationFrame(raf);
    // }

    // requestAnimationFrame(raf);
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}
