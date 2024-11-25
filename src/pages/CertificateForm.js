import React, { useState } from "react";

function CertificateForm() {
  const [patientName, setPatientName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [results, setResults] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Certificate generated for:", patientName, birthDate, results);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Generate Certificate</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Patient Name
            </label>
            <input
              type="text"
              placeholder="Enter patient's name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Birth Date
            </label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Results
            </label>
            <textarea
              placeholder="Enter results"
              value={results}
              onChange={(e) => setResults(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
          >
            Generate
          </button>
        </form>
      </div>
    </div>
  );
}

export default CertificateForm;
