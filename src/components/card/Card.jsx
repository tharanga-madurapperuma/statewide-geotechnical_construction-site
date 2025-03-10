import React from "react";
import { DrillBit } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Card = ({ image, title, description, link }) => {
    const navigate = useNavigate();

    return (
        <div
            className="rounded-lg cursor-pointer"
            onClick={() => {
                navigate(`/${link}`);
            }}
        >
            <img
                src={image}
                alt={title}
                className="w-full h-[30vw] sm:h-[15vw] object-cover rounded-2xl"
            />
            <div className="mt-4 px-2">
                <div className="w-8 h-8 md:w-auto md:h-auto">
                    <img src={DrillBit} />
                </div>
                <h3 className="font-inter font-500 text-14 mt-2 md:font-600 sm:text-14 md:text-18">
                    {title}
                </h3>
                <p className="sm:hidden font-inter font-400 text-12 sm:text-14 md:text-16  text-gray-600 mt-2">
                    {description.length > 100
                        ? `${description.slice(0, 50)}...`
                        : description}
                </p>
                <p className="hidden sm:block font-inter font-400 text-12 sm:text-14 md:text-16 text-gray-600 mt-2">
                    {description.length > 100
                        ? `${description.slice(0, 80)}...`
                        : description}
                </p>
            </div>
        </div>
    );
};

export default Card;
