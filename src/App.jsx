import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import "./App.css";
import "./index.css";
import Drilling from "./pages/drilling/Drilling";
import Soil from "./pages/soil/Soil";
import Slopes from "./pages/slopes/Slopes";
import Road from "./pages/road/Road";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/drilling" element={<Drilling />} />
                    <Route path="/soil" element={<Soil />} />
                    <Route path="/slopes" element={<Slopes />}/>
                    <Route path="/road" element={<Road />} />
                    
                      
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
