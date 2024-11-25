import React from "react";

function Dashboard() {
  return (
    <div>
      <h1>Tableau de Bord</h1>
      <p>Bienvenue sur votre tableau de bord.</p>
      <ul>
        <li><a href="/certificate-form">Créer un Certificat</a></li>
        <li><a href="/notifications">Voir les Notifications</a></li>
      </ul>
    </div>
  );
}

export default Dashboard;
