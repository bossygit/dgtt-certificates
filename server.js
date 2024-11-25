const express = require("express");
const path = require("path");

const app = express();

// Serve les fichiers statiques depuis le dossier "build"
app.use(express.static(path.join(__dirname, "build")));

// Route par défaut pour toutes les autres requêtes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Définir le port utilisé par Heroku ou 5000 par défaut
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
