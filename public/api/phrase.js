const phrases = [
  "Il n'y a pas de fumée sans feu.",
  "L'avenir appartient à ceux qui se lèvent tôt.",
  "Qui ne tente rien n’a rien.",
  "Petit à petit, l’oiseau fait son nid.",
  "Mieux vaut tard que jamais."
];

export default function handler(req, res) {
  const index = Math.floor(Math.random() * phrases.length);
  res.status(200).json({ phrase: phrases[index] });
}
