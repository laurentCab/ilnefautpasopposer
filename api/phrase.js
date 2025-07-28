const phrases = [
"Il ne faut pas opposer économie et ruralité.",
"Il ne faut pas opposer les villes aux villages.",
"Il ne faut pas opposer police et justice.",
"Il ne faut pas opposer la lutte contre l'antisémitisme et la solidarité avec les Palestiniens.",
"Il ne faut pas opposer la liberté à la sécurité.",
"Il ne faut pas opposer les lignes TGV aux petites lignes.",
"Il ne faut pas opposer tennis et padel.",
"Il ne faut pas opposer les modes.",
"Il ne faut pas opposer les métropoles et les territoires ruraux.",
"Il ne faut pas opposer les énergies les unes aux autres.",
"Il ne faut pas opposer démarche palliative et euthanasie.",
"Il ne faut pas opposer efficacité énergétique et énergies renouvelables.",
"Il ne faut pas opposer le TGV aux petites lignes.",
"Il ne faut pas opposer moteur hydrogène et pile à combustible.",
"Il ne faut pas opposer souveraineté alimentaire et transition écologique.",
"Il ne faut pas opposer l'aide active à mourir aux soins palliatifs.",
"Il ne faut pas opposer impôt et travail.",
"Il ne faut pas opposer écologie et agriculteurs.",
"Il ne faut pas opposer progrès technologique et écologie.",
"Il ne faut pas opposer médecine libérale et médecine salariée.",
"Il ne faut pas opposer transformation numérique et humanisation des services publics.",
"Il ne faut pas opposer les énergies renouvelables au nucléaire.",
"Il ne faut pas opposer le Français et le Corse.",
"Il ne faut pas opposer épargne et consommation.",
"Il ne faut pas opposer les mobilités les unes aux autres mais les organiser de manière complémentaire.",
"Il ne faut pas opposer élargissement et intégration.",
"Il ne faut pas opposer la question des ZFE à la question de la santé.",
"Il ne faut pas opposer religion et liberté.",
"Il ne faut pas opposer bienêtre et apprentissages.",
"Il ne faut pas opposer les modes de chauffages.",

];

export default function handler(req, res) {
  const index = Math.floor(Math.random() * phrases.length);
  res.status(200).json({ phrase: phrases[index] });
}
