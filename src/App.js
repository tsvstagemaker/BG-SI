import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CookieConsentComp from "./components/CookieConsent/CookieConsent";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import NotFound from "./pages/notFound/NotFound";
import Testimonials from "./pages/testimonials/Testimonials";

import TermesAndConditions from "./pages/TermsAndConditions/TermsAndConditions";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/TermesAndConditions" element={<TermesAndConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <CookieConsentComp />
    </BrowserRouter>
  );
}
