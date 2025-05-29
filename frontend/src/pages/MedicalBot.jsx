import React, { useState } from "react";

const MedicalBot = () => {
  const [image, setImage] = useState(null);
  const [diagnosis, setDiagnosis] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setError("Please upload a medical image.");
      return;
    }

    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await fetch("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", {
        method: "POST",
        headers: {
          "Authorization": `Bearer YOUR_OPENAI_API_KEY`,
        },
        body: formData,
      });

      const data = await response.json();
      setDiagnosis(data.diagnosis); // Adjust based on your API response
      setDescription(data.description); // Adjust based on your API response
    } catch (err) {
      setError("An error occurred while processing the image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Medical Bot</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Analyze Image
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {diagnosis && (
        <div className="mt-4">
          <h2 className="text-xl">Diagnosis: {diagnosis}</h2>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default MedicalBot;
