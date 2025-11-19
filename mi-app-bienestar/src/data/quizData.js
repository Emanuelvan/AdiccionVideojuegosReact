// src/data/quizData.js

export const questions = [
  {
    id: 1,
    text: "¿Con qué frecuencia piensas en jugar cuando estás haciendo otras cosas (estudiando, trabajando, comiendo)?",
    options: [
      { text: "Casi nunca", points: 0 },
      { text: "A veces", points: 1 },
      { text: "Frecuentemente", points: 2 },
      { text: "Todo el tiempo", points: 3 },
    ],
  },
  {
    id: 2,
    text: "¿Sientes inquietud, irritabilidad o tristeza cuando intentas jugar menos o no puedes jugar?",
    options: [
      { text: "No, estoy tranquilo", points: 0 },
      { text: "Un poco molesto", points: 1 },
      { text: "Bastante ansioso/irritado", points: 2 },
      { text: "Muy mal, no puedo soportarlo", points: 3 },
    ],
  },
  {
    id: 3,
    text: "¿Has mentido a familiares, amigos o terapeutas sobre cuánto tiempo pasas jugando?",
    options: [
      { text: "Nunca", points: 0 },
      { text: "Alguna vez", points: 1 },
      { text: "Varias veces", points: 2 },
      { text: "A menudo", points: 3 },
    ],
  },
  {
    id: 4,
    text: "¿Has perdido interés en otros pasatiempos o actividades que antes disfrutabas debido al juego?",
    options: [
      { text: "No, sigo haciendo mis cosas", points: 0 },
      { text: "Un poco", points: 1 },
      { text: "Sí, he dejado casi todo", points: 2 },
      { text: "El juego es mi único interés", points: 3 },
    ],
  },
  {
    id: 5,
    text: "¿Usas los juegos para escapar de problemas o aliviar sentimientos negativos (culpa, ansiedad, tristeza)?",
    options: [
      { text: "Rara vez", points: 0 },
      { text: "A veces", points: 1 },
      { text: "Frecuentemente", points: 2 },
      { text: "Siempre es mi escape", points: 3 },
    ],
  },
];