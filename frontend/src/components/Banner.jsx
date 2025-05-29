import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";
import { FaHeartbeat, FaUserMd, FaCalendarCheck } from "react-icons/fa"; // Importing icons from react-icons

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10">
      {/* Left Side */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-[#977c44]">
          <p>Book Appointment</p>
          <p className="mt-4">With 100+ Trusted Doctors</p>
        </div>
        <button
          onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
          className="bg-[#977c44] text-white sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all"
        >
          Create Account
        </button>

        {/* Additional Details */}
        <div className="mt-8 text-[#977c44]">
          <h3 className="text-lg font-bold">Why Choose Us?</h3>
          <div className="flex mt-4">
            <div className="flex items-center mr-6">
              <FaHeartbeat className="text-2xl mr-2" />
              <span>Comprehensive Care</span>
            </div>
            <div className="flex items-center mr-6">
              <FaUserMd className="text-2xl mr-2" />
              <span>Expert Doctors</span>
            </div>
            <div className="flex items-center">
              <FaCalendarCheck className="text-2xl mr-2" />
              <span>Flexible Scheduling</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          className="w-full absolute bottom-0 right-0 max-w-md"
          src={assets.appointment_img}
          alt="Appointment"
        />
      </div>
    </div>
  );
};

export default Banner;
