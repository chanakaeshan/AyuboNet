import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Myprofile from "./pages/Myprofile";
import MyAppointments from "./pages/MyAppointments";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JobPage from "./pages/JobPage";
import MedicalItemsShop from "./pages/MedicalItemsShop";
import Thinking from "./pages/Thinking";
import MedicalBot from "./pages/MedicalBot";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[6%] overflow-x-hidden">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/medicalbot" element={<MedicalBot />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<Myprofile />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/shop" element={<MedicalItemsShop />} />
        <Route path="/thinking" element={<Thinking />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
