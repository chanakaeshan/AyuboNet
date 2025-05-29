import React from "react";
import {
  FaUserMd,
  FaCalendarAlt,
  FaHeartbeat,
  FaMapMarkerAlt,
  FaHandsHelping,
} from "react-icons/fa"; // Importing icons from React Icons

const About = () => {
  return (
    <div>
      <div className="text-3xl pt-10 text-gray-500 font-medium italic">
        <p>ABOUT US</p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12 justify-center">
        <img
          className="w-full md:max-w-[360px] rounded-3xl"
          src="https://heritancehotels.imgix.net/sites/6/2025/01/gallery-treatment-ayuruvedha-opti-50_1-1-Steam-Bath-17.jpg"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to AyuboNet, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At AyuboNet, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            AyuboNet is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, AyuboNet is here to support you every step of the way.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision at AyuboNet is to create a seamless healthcare experience
            for every user. We aim to bridge the gap between patients and
            healthcare providers, making it easier for you to access the care
            you need, when you need it.
          </p>
          <b className="text-gray-800">Sri Lankan Context</b>
          <p>
            In Sri Lanka, where healthcare access can vary significantly between
            urban and rural areas, MediLink is dedicated to ensuring that
            everyone, regardless of their location, can access quality
            healthcare services. We partner with local healthcare providers to
            offer a wide range of services, from general consultations to
            specialized treatments.
          </p>
          <p>
            Our platform is designed to cater to the unique needs of Sri Lankan
            users, including support for local languages and integration with
            national healthcare initiatives. We also provide resources and
            information on preventive care, helping users to maintain their
            health and well-being.
          </p>
        </div>
      </div>

      <div className="text-2xl my-10 mt-10 font-medium italic text-gray-500 ">
        <p>WHY CHOOSE US</p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <div className="flex justify-center">
            <FaCalendarAlt className="text-4xl mb-3" />{" "}
            {/* Icon for Efficiency */}
          </div>
          <b className="text-center text-lg">Efficiency</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <div className="flex justify-center">
            <FaUserMd className="text-4xl mb-3" /> {/* Icon for Convenience */}
          </div>
          <b className="text-center text-lg">Convenience</b>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <div className="flex justify-center">
            <FaHeartbeat className="text-4xl mb-3" />{" "}
            {/* Icon for Personalization */}
          </div>
          <b className="text-center text-lg">Personalization</b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <div className="flex justify-center">
            <FaMapMarkerAlt className="text-4xl mb-3" />{" "}
            {/* Icon for Local Expertise */}
          </div>
          <b className="text-center text-lg">Local Expertise</b>
          <p>
            Our team includes local healthcare experts who understand the
            specific needs and challenges of Sri Lankan patients.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <div className="flex justify-center">
            <FaHandsHelping className="text-4xl mb-3" />{" "}
            {/* Icon for Community Focus */}
          </div>
          <b className="text-center text-lg">Community Focus</b>
          <p>
            We are committed to improving healthcare access and outcomes for all
            communities in Sri Lanka, including underserved areas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
