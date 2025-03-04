import React from "react";

const Card = ({ image, title, description }) => {
    return (
        <div className="rounded-lg ">
            <img
                src={image}
                alt={title}
                className="w-full h-[15vw] object-cover rounded-lg"
            />
            <div className="mt-4">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-gray-600 mt-2">{description}</p>
            </div>
        </div>
    );
};

export default Card;
