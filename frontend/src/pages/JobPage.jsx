import React, { useState } from "react";
import ApplicationForm from "./ApplicationForm"; // Import the ApplicationForm component

const JobPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const jobListings = [
    {
      title: "Registered Nurse",
      location: "Colombo, Sri Lanka",
      description:
        "We are seeking a compassionate Registered Nurse to provide high-quality patient care.",
      requirements: [
        "Bachelor's degree in Nursing",
        "Valid nursing license",
        "Excellent communication and interpersonal skills",
      ],
    },
    {
      title: "Medical Laboratory Technician",
      location: "Colombo, Sri Lanka",
      description:
        "Join our team as a Medical Laboratory Technician to perform diagnostic tests and analyses.",
      requirements: [
        "Associate's degree in Medical Laboratory Technology",
        "Experience in a clinical laboratory setting",
        "Attention to detail and strong analytical skills",
      ],
    },
    {
      title: "Healthcare Administrator",
      location: "Colombo, Sri Lanka",
      description:
        "We are looking for a Healthcare Administrator to oversee daily operations and improve healthcare services.",
      requirements: [
        "Bachelor's degree in Healthcare Administration or related field",
        "3+ years of experience in healthcare management",
        "Strong leadership and organizational skills",
      ],
    },
    {
      title: "Pharmacist",
      location: "Colombo, Sri Lanka",
      description:
        "We are looking for a detail-oriented Pharmacist to manage medication distribution and provide patient consultations.",
      requirements: [
        "Doctor of Pharmacy (Pharm.D.) degree",
        "Active pharmacist license",
        "Strong knowledge of pharmacology and patient care",
      ],
    },
    {
      title: "Physical Therapist",
      location: "Colombo, Sri Lanka",
      description:
        "Join our team as a Physical Therapist to help patients recover from injuries and improve their mobility.",
      requirements: [
        "Doctorate in Physical Therapy (DPT)",
        "State licensure to practice physical therapy",
        "Excellent interpersonal and communication skills",
      ],
    },
    {
      title: "Radiologic Technologist",
      location: "Colombo, Sri Lanka",
      description:
        "We are seeking a skilled Radiologic Technologist to perform imaging procedures and assist in patient care.",
      requirements: [
        "Associate's degree in Radiologic Technology",
        "Certification from the American Registry of Radiologic Technologists (ARRT)",
        "Strong attention to detail and patient care skills",
      ],
    },
    {
      title: "Nurse Practitioner",
      location: "Colombo, Sri Lanka",
      description:
        "We are looking for a Nurse Practitioner to provide primary and specialty care to patients.",
      requirements: [
        "Master's degree in Nursing",
        "Active Nurse Practitioner license",
        "Strong clinical skills and patient management experience",
      ],
    },
    {
      title: "Health Information Technician",
      location: "Colombo, Sri Lanka",
      description:
        "Join our team as a Health Information Technician to manage patient records and ensure data accuracy.",
      requirements: [
        "Associate's degree in Health Information Technology",
        "Certification as a Registered Health Information Technician (RHIT)",
        "Strong attention to detail and organizational skills",
      ],
    },
  ];

  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Job Openings</h1>
        <div className="grid md:grid-cols-2 gap-10">
          {jobListings.map((job, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
              <p className="text-gray-700 mb-2">{job.location}</p>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <h3 className="font-semibold mb-2">Requirements:</h3>
              <ul className="list-disc list-inside mb-4">
                {job.requirements.map((req, idx) => (
                  <li key={idx} className="text-gray-600">
                    {req}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleApplyClick(job.title)}
                className="bg-[#977c44] text-white py-2 px-4 rounded-lg hover:bg-[#254336] transition-colors"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
      {isFormOpen && (
        <ApplicationForm jobTitle={selectedJob} onClose={closeForm} />
      )}
    </div>
  );
};

export default JobPage;
