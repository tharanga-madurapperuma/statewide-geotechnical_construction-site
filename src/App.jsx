import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import RetainingWall from "./pages/RetainingWall";
import SiteInvetigate from "./pages/SiteInvetigate";
import FoundationBuilt from "./pages/FoundationBuilt";
import "./App.css";
import "./index.css";
import Drilling from "./pages/drilling/Drilling";
import Soil from "./pages/soil/Soil";
import Slopes from "./pages/slopes/Slopes";
import Road from "./pages/road/Road";
import Resources from "./pages/resources/Resources";
import LandCapability from "./pages/Land Capability/LandCapability";
import EnvDrilling from "./pages/envDrilling/EnvDrilling";
import Inspections from "./pages/inspections/Inspections";
import AccreditedPage from "./pages/accredited/AccreditedPage";
import NotFound from "./pages/notFound/NotFound";
import ContactSection from "./components/contacts/ContactSection";
import { Hero } from "./assets/assets";
import HeroSection from "./components/hero-section/HeroSection";
import ContactPage from "./pages/contactUs/ContactPage";
import AppointmentRequestForm from "./components/form/AppointmentRequestForm";

const App = () => {
  return (
    <div className="overflow-x-hidden ">
      <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/RetainingWall" element={<RetainingWall />} />
                    <Route path="/drilling" element={<Drilling />} />
                    <Route path="/soil" element={<Soil />} />
                    <Route path="/slopes" element={<Slopes />} />
                    <Route path="/road" element={<Road />} />
                    <Route path="/land" element={<LandCapability />} />
                    <Route
                        path="/SiteInvetigate"
                        element={<SiteInvetigate />}
                    />
                    <Route
                        path="/FoundationBuilt"
                        element={<FoundationBuilt />}
                    />
                    <Route path="/accredited" element={<AccreditedPage />} />
                    <Route path="/envDrilling" element={<EnvDrilling />} />
                  <Route path="/inspections" element={<Inspections />} />
                    <Route path="/inspections" element={<Inspections />} />
                    <Route path="/*" element={<NotFound />} />
                    <Route path="/resources" element={<Resources />} />
                </Routes>
                <Footer />
            </BrowserRouter>
          
    </div>
  )
}

export default App
