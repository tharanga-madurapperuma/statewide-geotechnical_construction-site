import React from "react";
import { Logo } from "../../assets/assets";

const Navbar = () => {
    return (
        <div className="h-[92px] w-full">
            <div className="flex justify-between items-center py-6 px-28 w-full h-full">
                <div className="h-full">
                    <img className="h-full" src={Logo} />
                </div>
                <div className="navbar-items">
                    <ul className="flex justify-between items-center space-x-18">
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
