import React from "react";

const Thinking = () => {
  return (
    <div className="container mx-auto py-6 px-6 bg-white">
      <h1 className="text-5xl font-medium italic text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r " style={{ color: '#255F38' }}>
        THINKING
      </h1>
      <p className="text-lg text-center mb-6 text-gray-700">
        This is the Thinking page. Here, you can reflect on your thoughts and
        ideas.
      </p>

      <section className="mb-10 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: '#D6EFD8' }}>
        <h2 className="text-3xl font-semibold mb-4" style={{ color: '#1F7D53' }}>
          Medical Advice
        </h2>
        <p className="text-lg text-gray-700">
          Taking care of your health is essential for a fulfilling life. Here
          are some tips:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li className="text-gray-700">
            Maintain a balanced diet rich in fruits, vegetables, and whole
            grains.
          </li>
          <li className="text-gray-700">
            Stay hydrated by drinking plenty of water throughout the day.
          </li>
          <li className="text-gray-700">
            Engage in regular physical activity, aiming for at least 30 minutes
            a day.
          </li>
          <li className="text-gray-700">
            Get adequate sleep to support your physical and mental well-being.
          </li>
          <li className="text-gray-700">
            Schedule regular check-ups with your healthcare provider.
          </li>
        </ul>
      </section>

      <section className="mb-10 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: '#D6EFD8' }}>
        <h2 className="text-3xl font-semibold mb-4 " style={{ color: '#1F7D53' }}>
          Health Treatments for Common Issues
        </h2>
        <p className="text-lg text-gray-700">
          Here are some common health issues and their potential treatments:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li className="text-gray-700">
            <strong>Stress and Anxiety:</strong> Consider mindfulness practices
            such as meditation, yoga, or therapy.
          </li>
          <li className="text-gray-700">
            <strong>Insomnia:</strong> Establish a bedtime routine, reduce
            screen time before bed, and consider herbal teas like chamomile.
          </li>
          <li className="text-gray-700">
            <strong>Digestive Issues:</strong> Incorporate probiotics into your
            diet, such as yogurt, and maintain a fiber-rich diet.
          </li>
          <li className="text-gray-700">
            <strong>Chronic Pain:</strong> Explore physical therapy,
            acupuncture, or consult a healthcare provider for pain management
            options.
          </li>
          <li className="text-gray-700">
            <strong>Weight Management:</strong> Focus on portion control,
            regular exercise, and consult a nutritionist for personalized
            advice.
          </li>
        </ul>
      </section>

      <section className="mb-10 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: '#D6EFD8' }}>
        <h2 className="text-3xl font-semibold mb-4 " style={{ color: '#1F7D53' }}>
          Resources for Further Reading
        </h2>
        <p className="text-lg text-gray-700">
          Here are some reputable resources to learn more about health and
          wellness:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li className="text-gray-700">
            <a
              href="https://www.who.int"
              className="text-blue-600 hover:underline"
            >
              World Health Organization (WHO)
            </a>
          </li>
          <li className="text-gray-700">
            <a
              href="https://www.cdc.gov"
              className="text-blue-600 hover:underline"
            >
              Centers for Disease Control and Prevention (CDC)
            </a>
          </li>
          <li className="text-gray-700">
            <a
              href="https://www.mayoclinic.org"
              className="text-blue-600 hover:underline"
            >
              Mayo Clinic
            </a>
          </li>
          <li className="text-gray-700">
            <a
              href="https://www.healthline.com"
              className="text-blue-600 hover:underline"
            >

              
              Healthline
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Thinking;
