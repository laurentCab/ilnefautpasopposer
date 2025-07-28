const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const phrases = [
  "Il n'y a pas de fumée sans feu.",
  "L'avenir appartient à ceux qui se lèvent tôt.",
  "Qui ne tente rien n’a rien.",
  "Petit à petit, l’oiseau fait son nid.",
  "Mieux vaut tard que jamais."
];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/phrase', (req, res) => {
  const index = Math.floor(Math.random() * phrases.length);
  res.json({ phrase: phrases[index] });
});

app.listen(PORT, () => {
  console.log(`Serveur actif sur http://localhost:${PORT}`);
});
