import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "https://cdn-images-1.medium.com/max/1200/1*lUO9b3U0mVYDQuU0e-7EjQ.png",
    // "https://miro.medium.com/v2/resize:fit:720/format:webp/1*FPB0AWlhXwHQIg-kNceo9A.png",
    "https://cdn-images-1.medium.com/max/1200/1*FFzDZYihmE2RE2-idVsEFA.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <section id="page1">
        <div id="left-page1">
          <h1>Ayurveda Hospital: Bridging Tradition and Technology</h1>
          <p>
            Experience holistic healing through traditional Ayurvedic practices,
            combined with modern technology for seamless consultations.
          </p>
          <p>
            Our Ayurveda hospital offers personalized treatment plans, using
            natural remedies to promote wellness and balance.
          </p>
          <p>
            Join our community of patients who have embraced the power of
            Ayurveda for a healthier lifestyle.
          </p>
        </div>
        <div id="right-page1">
          <img src={images[imageIndex]} alt={`Image ${imageIndex + 1}`} />
        </div>
      </section>
    </div>
  );
};

export default Header;
