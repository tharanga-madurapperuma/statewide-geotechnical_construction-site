import React, { useEffect, useState } from "react";
import { Close, Logo, Menu } from "../../assets/assets";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import "../../App.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showSubmenu, setShowSubmenu] = useState(false); // For submenu
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState("home");
    const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
    const location = useLocation();

    const submenuItems = [
        { name: "Geotechnical Drilling & Testing", url: "/drilling" },
        { name: "Environmental Drilling", url: "/envdrilling" },
        { name: "Soil & Rock Testing", url: "/soil" },
        { name: "Slope Stability Assessment", url: "/slopes" },
        { name: "Road Pavement Design", url: "/road" },
        { name: "Land Capability Assessment", url: "/land" },
        { name: "Site Investigations", url: "/siteinvetigate" },
    ];

    useEffect(() => {
        const path = location.pathname;
        if (path === "/") {
            setActiveMenu("home");
        } else if (path === "/aboutus") {
            setActiveMenu("about");
        } else if (path === "/resources") {
            setActiveMenu("resources");
        } else if (path === "/contact") {
            setActiveMenu("contact");
        } else if (submenuItems.some((item) => item.url === path)) {
            setActiveMenu("services");
        }
    }, [location.pathname]);

    return (
        <div className="md:h-[92px] w-full md:w-full bg-slate-background z-100 fixed">
            {/* NAVBAR FOR DESKTOP */}
            <div className="hidden md:flex justify-between items-center py-6 px-80 lg:px-[100px] xl:px-[110px] w-full h-full">
                <div className="h-full sm:w-[30%]">
                    <img
                        className="h-full cursor-pointer"
                        src={Logo}
                        alt="Logo"
                        onClick={() => {
                            navigate("/");
                            setActiveMenu("home");
                        }}
                    />
                </div>
                <div className="navbar-items">
                    <ul className="flex justify-between sm:text-16 md:text-14 lg:text-16 xl:text-18 items-center space-x-24 sm:space-x-28 lg:space-x-40 xl:space-x-48">
                        <li
                            className="cursor-pointer hover:text-blue-600 transition duration-300 flex flex-col items-center relative"
                            onClick={() => {
                                setMenuOpen(false);
                                setShowSubmenu(false);
                                setActiveMenu("home");
                                navigate("/");
                            }}
                        >
                            Home
                            {activeMenu === "home" ? (
                                <div className="line-animation bg-blue-600 absolute -bottom-1 left-1/2 transform -translate-x-1/2"></div>
                            ) : null}
                        </li>
                        <li
                            className="cursor-pointer hover:text-blue-600 transition duration-300 flex flex-col items-center relative"
                            onClick={() => {
                                setMenuOpen(false);
                                setShowSubmenu(false);
                                setActiveMenu("about");
                                navigate("/aboutus");
                            }}
                        >
                            About
                            {activeMenu === "about" ? (
                                <div className="line-animation bg-blue-600 absolute -bottom-1 left-1/2 transform -translate-x-1/2"></div>
                            ) : null}
                        </li>
                        <li className=" cursor-pointer hover:text-blue-600 transition duration-300 -pb-3 relative">
                            <div
                                className="services flex flex-col items-center relative"
                                onClick={() => {
                                    setActiveMenu("services");
                                    setShowSubmenu(!showSubmenu);
                                    setMenuOpen(false);
                                }}
                            >
                                <div className="flex items-center">
                                    Services{" "}
                                    <span className="ml-1 text-gray-500 services-icon">
                                        <IoIosArrowDown />
                                    </span>
                                </div>
                            </div>

                            {/* Submenu */}
                            {showSubmenu && (
                                <ul className="p-2 absolute left-0 w-[250px] bg-white shadow-md rounded-lg z-50">
                                    {submenuItems.map((item, index) => (
                                        <li
                                            key={index}
                                            className="px-4 py-3 text-[16px] blue-600 text-gray-700 hover:bg-gray-100 hover:text-blue-600 cursor-pointer"
                                            onClick={() => {
                                                setActiveMenu("services");
                                                setMenuOpen(false);
                                                setShowSubmenu(false);
                                                navigate(item.url);
                                            }}
                                        >
                                            {item.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        <li
                            className="cursor-pointer hover:text-blue-600 transition duration-300 flex flex-col items-center relative"
                            onClick={() => {
                                setMenuOpen(false);
                                setShowSubmenu(false);
                                setActiveMenu("resources");
                                navigate("/resources");
                            }}
                        >
                            Resources
                            {activeMenu === "resources" ? (
                                <div className="line-animation bg-blue-600 absolute -bottom-1 left-1/2 transform -translate-x-1/2"></div>
                            ) : null}
                        </li>
                        <li
                            className="cursor-pointer hover:text-blue-600 transition duration-300 flex flex-col items-center relative"
                            onClick={() => {
                                setMenuOpen(false);
                                setShowSubmenu(false);
                                setActiveMenu("contact");
                                navigate("/contact");
                            }}
                        >
                            Contact Us
                            {activeMenu === "contact" ? (
                                <div className="line-animation bg-blue-600 absolute -bottom-1 left-1/2 transform -translate-x-1/2"></div>
                            ) : null}
                        </li>
                    </ul>
                </div>
            </div>

            {/* NAVBAR FOR SMALL SCREENS */}
            <div className="md:hidden relative z-20 w-full pb-4 sm:pb-[20px] md:pb-0">
                <div className="h-full w-full flex justify-between items-center px-8 pt-4 sm:px-80 ">
                    <img
                        className="w-[50%] xs:w-[40%] sm:w-[40%] top-0 left-0 cursor-pointer"
                        src={Logo}
                        alt="Logo"
                        onClick={() => {
                            navigate("/");
                            setActiveMenu("home");
                        }}
                    />
                    <div
                        className="cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <img src={menuOpen ? Close : Menu} alt="Menu Toggle" />
                    </div>
                </div>

                <div
                    className={`w-full h-[100vh] flex justify-end absolute top-0 ${
                        menuOpen
                            ? "translate-y-[55px] opacity-100 sm:translate-y-[65px]"
                            : "-translate-y-full opacity-0"
                    } transition-transform duration-500`}
                >
                    <ul className="flex font-poppins font-500 text-14 sm:text-16 shadow-xl flex-col bg-white w-full p-8 sm:p-48 space-y-8 sm:space-y-28 z-50 rounded-tl-2xl rounded-bl-2xl">
                        <li
                            className="cursor-pointer hover:text-gray-600 transition duration-300"
                            onClick={() => {
                                navigate("/");
                                setActiveMenu("home");
                                setMenuOpen(false);
                            }}
                            style={{
                                color: activeMenu === "home" ? "#0064FF" : "",
                            }}
                        >
                            Home
                        </li>
                        <li
                            className="cursor-pointer hover:text-gray-600 transition duration-300"
                            onClick={() => {
                                navigate("/aboutus");
                                setActiveMenu("about");
                                setMenuOpen(false);
                            }}
                            style={{
                                color: activeMenu === "about" ? "#0064FF" : "",
                            }}
                        >
                            About
                        </li>
                        <li
                            className="cursor-pointer hover:text-gray-600 transition duration-300 relative"
                            onClick={() => {
                                setActiveMenu("services");
                                servicesMenuOpen
                                    ? setServicesMenuOpen(false)
                                    : setServicesMenuOpen(true);
                            }}
                            style={{
                                color:
                                    activeMenu === "services" ? "#0064FF" : "",
                            }}
                        >
                            <div className="flex items-center">
                                Services{" "}
                                <span className="ml-1 text-gray-500">
                                    <IoIosArrowDown />
                                </span>
                            </div>
                        </li>
                        {servicesMenuOpen && (
                            <div className="w-full">
                                {/* Submenu for mobile */}
                                <ul className="z-50 pl-4 pr-4 pb-4 text-12 sm:text-14 h-auto down-animation">
                                    {submenuItems.map((item, index) => (
                                        <li
                                            key={index}
                                            className="px-4 pb-4 text-gray-700 hover:bg-gray-100 hover:text-blue-600 cursor-pointer"
                                            onClick={() => {
                                                setMenuOpen(false); // Close the mobile menu after navigation
                                                navigate(item.url);
                                                setServicesMenuOpen(false);
                                                setMenuOpen(false);
                                            }}
                                        >
                                            {item.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <li
                            className="cursor-pointer hover:text-gray-600 transition duration-300"
                            onClick={() => {
                                navigate("/resources");
                                setActiveMenu("resources");
                                setMenuOpen(false);
                            }}
                            style={{
                                color:
                                    activeMenu === "resources" ? "#0064FF" : "",
                            }}
                        >
                            Resources
                        </li>
                        <li
                            className="cursor-pointer hover:text-gray-600 transition duration-300"
                            onClick={() => {
                                navigate("/contact");
                                setActiveMenu("contact");
                                setMenuOpen(false);
                            }}
                            style={{
                                color:
                                    activeMenu === "contact" ? "#0064FF" : "",
                            }}
                        >
                            Contact Us
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
