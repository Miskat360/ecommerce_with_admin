import { RiDashboardHorizontalLine, RiDiscountPercentLine, RiFolderImageLine, RiHome4Line, RiLineChartLine, RiListView, RiNotification2Line, RiPriceTag3Line, RiSettings5Line, RiUser3Line } from "@remixicon/react";
export const navItems = [
    { name: "home", link: "/", isDisabled: false },
    { name: "menu", link: "/menu", isDisabled: false },
    { name: "exclusive deals", link: "/deals", isDisabled: true },
    { name: "about our food", link: "/about-food", isDisabled: false },
    { name: "locations", link: "/locations", isDisabled: true },
];

export const sidebarLinks = [
    { icon: RiDashboardHorizontalLine, route: "admin.dashboard", label: "dashboard" },
    { icon: RiListView, route: "admin.orders", label: "orders" },
    { icon: RiPriceTag3Line, route: "admin.products", label: "products" },
    { icon: RiUser3Line, route: "admin.customers", label: "customers" },
    { icon: RiFolderImageLine, route: "admin.content", label: "content" }, //RiGalleryLine
    { icon: RiLineChartLine, route: "admin.analytics", label: "analytics" },
    { icon: RiDiscountPercentLine, route: "admin.discounts", label: "discounts" },
    { icon: RiSettings5Line, route: "admin.settings", label: "settings" }
]
export const bottombarLinks = [
    { icon: RiDashboardHorizontalLine, route: "admin.dashboard", label: "dashboard" },
    { icon: RiListView, route: "admin.orders", label: "orders" },
    { icon: RiPriceTag3Line, route: "admin.products", label: "products" },
    { icon: RiUser3Line, route: "admin.customers", label: "customers" },
    { icon: RiNotification2Line, route: "admin.analytics", label: "notification" },
    { icon: RiLineChartLine, route: "admin.analytics", label: "analytics" },
]
export const socialMediaContact = [
    { name: "facebook", link: "https://www.facebook.com" },
    { name: "youtube", link: "https://www.youtube.com" },
    { name: "instagram", link: "https://www.instagram.com" },
    { name: "twitter(X)", link: "https://twitter.com" },
    { name: "email", link: "mailto:info@example.com" },
    { name: "phone", link: "tel:123-456-7890" },
]

const logo = "/images/logo.svg";
const heroBg = "/images/bg/bg-img.jpg";
const whatInsideBurger = "/images/burger-ingredients/what-inside-burger.png";
const yellowQuote = "/images/text-moving/yellow-quote.png";
const redQuote = "/images/text-moving/red-quote.png";
const manAvatar = "/images/text-moving/man.png";
const smallBurger = "/images/text-moving/small-burger.png";

const textImgSlider1 = [
    { text: "foodo", img: logo },
    { text: "where", img: yellowQuote },
    { text: "foodo", img: logo },
    { text: "where", img: yellowQuote },
    { text: "foodo", img: logo },
    { text: "where", img: yellowQuote },
    { text: "foodo", img: logo },
    { text: "where", img: yellowQuote },
    { text: "foodo", img: logo },
    { text: "where", img: yellowQuote },
    { text: "foodo", img: logo },
    { text: "where", img: yellowQuote },
    { text: "foodo", img: logo },
    { text: "where", img: yellowQuote },
]
const textImgSlider2 = [
    { text: "comes with", img: redQuote },
    { text: "every meals", img: smallBurger },
    { text: "comes with", img: redQuote },
    { text: "every meals", img: smallBurger },
    { text: "comes with", img: redQuote },
    { text: "every meals", img: smallBurger },
    { text: "comes with", img: redQuote },
    { text: "every meals", img: smallBurger },
    { text: "comes with", img: redQuote },
    { text: "every meals", img: smallBurger },
]
const textImgSlider3 = [
    { text: "a side", img: manAvatar },
    { text: "of you", img: yellowQuote },
    { text: "a side", img: manAvatar },
    { text: "of you", img: yellowQuote },
    { text: "a side", img: manAvatar },
    { text: "of you", img: yellowQuote },
    { text: "a side", img: manAvatar },
    { text: "of you", img: yellowQuote },
    { text: "a side", img: manAvatar },
    { text: "of you", img: yellowQuote },
    { text: "a side", img: manAvatar },
    { text: "of you", img: yellowQuote },
    { text: "a side", img: manAvatar },
    { text: "of you", img: yellowQuote },
]

const textImgSliders = [
    { duration: 14, textImgSlider: textImgSlider1 },
    { duration: 12, textImgSlider: textImgSlider2 },
    { duration: 17, textImgSlider: textImgSlider3 },
];


export { logo, heroBg, whatInsideBurger, yellowQuote, redQuote, manAvatar, smallBurger, textImgSliders };