import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigation = useNavigate();

    return (
        <div className="w-full h-full flex flex-col items-center bg-slate-background">
            <div className="w-full flex flex-col items-center my-[150px]">
                <h1 className="font-inter font-600 text-[50px] md:text-80 sm:text-62">
                    Not Found
                </h1>
                <p
                    className="text-blue-600 font-inter font-500 hover:text-blue-800 cursor-pointer transition duration-300"
                    onClick={() => {
                        navigation("/");
                    }}
                >
                    Go Back to Home Page
                </p>
            </div>
        </div>
    );
};

export default NotFound;
