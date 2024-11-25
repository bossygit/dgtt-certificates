import React, { useState } from "react";

function CertificateForm() {
  const [patientName, setPatientName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [results, setResults] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Certificat généré pour :", patientName, birthDate, results);
    // Ajoutez ici l'appel API au backend
  };

  return (
    <div>
      <h2>Créer un Certificat Médical</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom du Patient"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Date de Naissance"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          required
        />
        <textarea
          placeholder="Résultats Médicaux"
          value={results}
          onChange={(e) => setResults(e.target.value)}
          required
        />
        <button type="submit">Générer</button>
      </form>
    </div>
  );
}

export default CertificateForm;
