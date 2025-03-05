import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import RetainingWall from "./pages/RetainingWall";
import "./App.css";
import "./index.css";
import Drilling from "./pages/drilling/Drilling";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/RetainingWall" element={<RetainingWall />} />
                    <Route path="/drilling" element={<Drilling />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
