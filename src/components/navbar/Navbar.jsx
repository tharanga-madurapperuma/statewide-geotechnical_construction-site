import React, { useRef, useState } from "react";
import { Close, Logo, Menu } from "../../assets/assets";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menu = document.getElementById("menu");

    const menuEffect = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="md:h-[92px] md:w-full" onClick={menuEffect}>
            <div className="hidden md:flex justify-between items-center py-6 px-[75px] w-full h-full">
                <div className="h-full">
                    <img className="h-full" src={Logo} />
                </div>
                <div className="navbar-items">
                    <ul className="flex justify-between items-center space-x-24 lg:space-x-40 xl:space-x-48">
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Resources</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            {/* NAVBAR FOR SMALL SCREENS */}
            <div className="md:hidden relative">
                <div className="h-full relative w-full flex justify-between items-center px-8 pt-4">
                    <img
                        className="w-[50%] sm:w-[40%] top-0 left-0"
                        src={Logo}
                    />
                    <div
                        className="relative top-0 right-0 cursor-pointer"
                        onClick={menuEffect}
                    >
                        <img src={menuOpen ? Close : Menu} />
                    </div>
                </div>

                <div className="w-full flex justify-end absolute">
                    <ul
                        className={`flex font-poppins font-500 text-16 sm:text-[20px] shadow-xl flex-col bg-gradient-to-bl to-blue-to from-blue-from w-[48%] sm:w-[35%] p-8 sm:p-48 space-y-8 sm:space-y-40 z-50 rounded-tl-2xl rounded-bl-2xl transition-transform duration-500 absolute top-4 ${
                            menuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                    >
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Resources</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
