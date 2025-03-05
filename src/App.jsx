import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import "./App.css";
import "./index.css";
import Drilling from "./pages/drilling/Drilling";
import EnvDrilling from "./pages/envDrilling/EnvDrilling";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/drilling" element={<Drilling />} />
                    <Route path="/envDrilling" element={<EnvDrilling />} />
                </Routes>
                {/* <Footer /> */}
            </BrowserRouter>
        </div>
    );
};

export default App;
