import React from "react";

const MedicalItemsShop = () => {
  const medicalItems = [
    {
      id: 1,
      name: "Hinhuru wel (හිඟුරු වැල්)",
      price: "Rs 300.00",
      description: "A comprehensive first aid kit for home and travel.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpl-HcIhT1STfuBQAQYijeQJkPnjSIFFt6g&s", // Replace with actual image path
    },
    {
      id: 2,
      name: "Polpala (පොල්පලා)",
      price: "Rs 400.00",
      description: "Fast and accurate digital thermometer.",
      image: "https://via.placeholder.com/150", // Replace with actual image path
    },
    {
      id: 3,
      name: "Sepadilla (සැපදිල්ලා)",
      price: "Rs 750.00",
      description: "Monitor your blood pressure at home.",
      image: "https://via.placeholder.com/150", // Replace with actual image path
    },
    {
      id: 4,
      name: "Sanjeewani (සංජීවනි )",
      price: "Rs 300.00",
      description: "Portable oxygen concentrator for home use.",
      image: "https://via.placeholder.com/150", // Replace with actual image path
    },
    {
      id: 5,
      name: "Potu thana (පොතු තණ)",
      price: "Rs 200.00",
      description: "Quickly measures blood oxygen levels.",
      image: "https://via.placeholder.com/150", // Replace with actual image path
    },
    {
      id: 6,
      name: "Maha diyasiyambala (මහ දියසියඹලා)",
      price: "Rs 800.00",
      description: "Comfortable wheelchair for mobility.",
      image: "https://via.placeholder.com/150", // Replace with actual image path
    },
    {
      id: 7,
      name: "Rata mee (රටමී)",
      price: "Rs 700.00",
      description: "Relief for muscle pain and tension.",
      image: "https://via.placeholder.com/150", // Replace with actual image path
    },
    {
      id: 8,
      name: "Medical Face Masks (50 Pack)",
      price: "$10.00",
      description: "High-quality disposable face masks.",
      image: "https://via.placeholder.com/150", // Replace with actual image path
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-6 px-6">
      <h1 className="text-4xl font-medium italic text-center mb-8 text-[#254336]">
        MEDICAL ITEMS SHOP
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {medicalItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-4 text-gray-800">
              {item.name}
            </h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-lg font-bold mt-2 text-[#1F7D53]">{item.price}</p>
            <button className="bg-[#977c44] text-white py-2 px-4 rounded mt-4 hover:bg-[#254336] transition-colors w-full">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalItemsShop;
