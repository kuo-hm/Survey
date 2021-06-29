const json = {
  title: "Emsi Survey",
  showProgressBar: "bottom",
  showTimerPanel: "top",

  firstPageIsStarted: true,
  startSurveyText: "Start Survey",
  pages: [
    {
      questions: [
        {
          type: "html",
          html: "Emsi Quiz",
        },
      ],
    },
    {
      questions: [
        {
          type: "radiogroup",
          name: "Niveau_Scolair",
          title: "Niveau Scolaire",
          choices: ["Bac", "Bac +2", "Bac +3", "autre"],
        },
      ],
    },
    {
      questions: [
        {
          type: "radiogroup",
          name: "Mention_Bac",
          title: "Mention Bac",
          choicesOrder: "random",
          choices: ["Passable ", "Assez bien", "Bien", "très bien"],
        },
      ],
    },
    {
      questions: [
        {
          type: "radiogroup",
          name: "Quel_filiére",
          title: "Quel filiére?",
          choices: [
            "Ingénierie Informatique et Réseaux",
            "Ingénierie Financière et Audit",
            "génie industriel",
            "génie civil, bâtiments et travaux publics",
          ],
        },
      ],
    },
  ],
  completedHtml: "<h4>Merci! .</h4>",
};

export default json;
