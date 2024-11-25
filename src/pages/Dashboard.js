import React from "react";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="text-gray-700 mb-6">Welcome to your dashboard.</p>
        <ul className="space-y-3">
          <li>
            <a href="/certificate-form" className="text-blue-600 hover:underline">
              Générer des Certificats 
            </a>
          </li>
          <li>
            <a href="/" className="text-blue-600 hover:underline">
              Voir les notifications
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
