import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
    ],

    theme: {
        screens: {
            xs: "475px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#FFB710",
                    50: "#fff9e9",
                    100: "#f9ebc7",
                    // 200: "#E2E8F0",
                    // 300: "#CBD5E0",
                    // 400: "#A0AEC0",
                    // 500: "#718096",
                    // 600: "#4A5568",
                    // 700: "#2D3748",
                    // 800: "#1A202C",
                    // 900: "#171923",
                },
                tertiary: {
                    DEFAULT: "#969BA0",
                    50: "#7E7E7E",
                },
                // tertiary: {
                //     DEFAULT: "#ff6d4d",
                //     50: "#ffeae6",
                //     100: "#fcdcd6",
                //     200: "#ffd3cc",
                //     300: "#E8D9D7",
                //     400: "#E4CDD0",
                // },
                secondary: {
                    DEFAULT: "#2F4CDD",
                    50: "#E9EDFC",
                    100: "#d2daf7",
                    // 200: "#A3D9CE",
                    // 300: "#7FCCCD",
                    // 400: "#55B6C3",
                },
                green: {
                    DEFAULT: "#34C38F",
                    50: "#E6F7FA",
                    100: "#C3E6E0",
                    200: "#A3D9CE",
                    300: "#7FCCCD",
                    400: "#55B6C3",
                    500: "#2EA49F",
                    600: "#2C979B",
                    700: "#2A8788",
                    800: "#277474",
                    900: "#246161",
                },
                yellow: {
                    DEFAULT: "#FFB710",
                },
            },
            backgroundImage: {
                patternBg: "url(/images/bg/pattern-bg.png)",
                deliveryBg: "url(/images/home-delivery/main-bg.png)",
                downloadBg: "url(/images/download-app/main-bg.png)",
                offerBg: "url(/images/exclusive-deals/offer-bg.png)",
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                negaroa: '"negaroa"',
                dongpora: '"dongpora"',
                popularCafe: '"popular-cafe"',
                syne: '"syne"',
                pinkPencil: '"pink-pencil"',
                costarica: '"costarica"',
                gilroy: '"gilroy"',
                norican: '"norican"',
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1.2rem",
                    xl: "5rem",
                    "2xl": "6rem",
                },
                screens: {
                    lg: "984px",
                    xl: "1280px",
                    "2xl": "1536px",
                },
            },
        },
    },

    plugins: [forms, daisyui],
    daisyui: {
        themes: ["light"],
    },
};
