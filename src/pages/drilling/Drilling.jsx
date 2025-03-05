import React from "react";
import CardIconTopLeft from "../../components/card-icon-top-left/CardIconTopLeft";
import { WorkerHat } from "../../assets/assets";

const Drilling = () => {
    return (
        <div className="p-[10%] b">
            <div className="grid grid-cols-3 gap-4">
                <CardIconTopLeft
                    iconUrl={WorkerHat}
                    background="bg-blue-25"
                    iconBackground="bg-white"
                    stroke={true}
                    titleText="Topsoil Removal"
                    bodyText="Thorough inspection of topsoil removal to ensure a stable base for fill placement."
                    titleColor="text-gray-900"
                    bodyColor="text-gray-900"
                    padding={true}
                    backgroundHover={false}
                />
                <CardIconTopLeft
                    iconUrl={WorkerHat}
                    background="bg-white"
                    iconBackground="bg-white"
                    stroke={false}
                    titleText="Geotechnical Site Assessment"
                    bodyText="We conduct a detailed site assessment to evaluate ground conditions, slope angles, and potential hazards. This assessment includes soil sampling, rock analysis, and in-situ testing to provide a comprehensive understanding of the site’s stability profile."
                    titleColor="text-gray-900"
                    bodyColor="text-gray-900"
                    padding={false}
                    backgroundHover={false}
                />
                <CardIconTopLeft
                    iconUrl={WorkerHat}
                    background="bg-blue-600"
                    iconBackground="bg-white"
                    stroke={false}
                    titleText="Residential Foundations"
                    bodyText="Understanding the density and absorption of aggregate particles ensures you’re working with materials that support strong, durable concrete, avoiding premature wear and degradation."
                    titleColor="text-white"
                    bodyColor="text-white"
                    padding={true}
                    backgroundHover={true}
                />
            </div>
        </div>
    );
};

export default Drilling;
