export const quizQuestions = [
  {
    id: 1,
    question: "¿Sientes irritabilidad o ansiedad cuando no puedes jugar?",
    options: [
      { text: "Nunca", score: 0 },
      { text: "A veces", score: 1 },
      { text: "Frecuentemente", score: 2 },
      { text: "Siempre", score: 3 }
    ]
  },
  {
    id: 2,
    question: "¿Has mentido a familiares o amigos sobre el tiempo que pasas jugando?",
    options: [
      { text: "No", score: 0 },
      { text: "Sí, alguna vez", score: 2 }, // Mayor peso
      { text: "A menudo", score: 3 }
    ]
  },
  // ... más preguntas
];