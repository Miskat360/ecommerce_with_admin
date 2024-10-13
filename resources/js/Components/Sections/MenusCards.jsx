import React from "react";
import MenuCart from "./Section-item/MenuCart";

const MenusCards = () => {
    return (
        <>
            <div className="flex gap-6">
                <MenuCart />
                <MenuCart />
            </div>
        </>
    );
};

export default MenusCards;
