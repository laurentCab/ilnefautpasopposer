const phrases = [
"« Il ne faut pas opposer économie et ruralité. &#187;",
"« Il ne faut pas opposer les villes aux villages. &#187;",
"« Il ne faut pas opposer police et justice. &#187; &#187;",
"&#171; Il ne faut pas opposer la liberté à la sécurité. &#187;",
"&#171; Il ne faut pas opposer les lignes TGV aux petites lignes. &#187;",
"&#171; Il ne faut pas opposer tennis et padel. &#187;",
"&#171; Il ne faut pas opposer les modes de transport. &#187;",
"&#171; Il ne faut pas opposer les métropoles et les territoires ruraux. &#187;",
"&#171; Il ne faut pas opposer les énergies les unes aux autres. &#187;",
"&#171; Il ne faut pas opposer démarche palliative et euthanasie. &#187;",
"&#171; Il ne faut pas opposer efficacité énergétique et énergies renouvelables. &#187;",
"&#171; Il ne faut pas opposer le TGV aux petites lignes. &#187;",
"&#171; Il ne faut pas opposer moteur hydrogène et pile à combustible. &#187;",
"&#171; Il ne faut pas opposer souveraineté alimentaire et transition écologique. &#187;",
"&#171; Il ne faut pas opposer l'aide active à mourir aux soins palliatifs. &#187;",
"&#171; Il ne faut pas opposer impôt et travail. &#187;",
"&#171; Il ne faut pas opposer écologie et agriculteurs. &#187;",
"&#171; Il ne faut pas opposer progrès technologique et écologie. &#187;",
"&#171; Il ne faut pas opposer médecine libérale et médecine salariée. &#187;",
"&#171; Il ne faut pas opposer transformation numérique et humanisation des services publics. &#187;",
"&#171; Il ne faut pas opposer les énergies renouvelables au nucléaire. &#187;",
"&#171; Il ne faut pas opposer le Français et le Corse. &#187;",
"&#171; Il ne faut pas opposer épargne et consommation. &#187;",
"&#171; Il ne faut pas opposer les mobilités les unes aux autres mais les organiser de manière complémentaire. &#187;",
"&#171; Il ne faut pas opposer élargissement et intégration. &#187;",
"&#171; Il ne faut pas opposer la question des ZFE à la question de la santé. &#187;",
"&#171; Il ne faut pas opposer religion et liberté. &#187;",
"&#171; Il ne faut pas opposer bienêtre et apprentissages. &#187;",
"&#171; Il ne faut pas opposer les modes de chauffages. &#187;",

];

export default function handler(req, res) {
  const index = Math.floor(Math.random() * phrases.length);
  res.status(200).json({ phrase: phrases[index] });
}
