export const questions = [
  {
    question: "¿Cómo es tu conocimiento y experiencia financiera?",
    description: "Tu capacidad de manejar tus ingresos, gastos, presupuestos, ahorros, inversiones, etc.",
    answers: [
      { text: "Muy bajo o nulo conocimiento en esta materia", points: 1 },
      { text: "Un poco de conocimientos y experiencia con instrumentos de deuda (créditos, tarjetas, etc.)", points: 2 },
      { text: "Buen conocimiento y experiencia con instrumentos de ahorro.", points: 3 },
      { text: "Mucho conocimiento y experiencia con instrumentos de inversión.", points: 4 }
    ]
  },
  {
    question: "\"Conozco muy bien cuanto gano, cuanto gasto, lo que tengo, lo que debo. Comprendo muy bien mi situación financiera.\"",
    answers: [
      { text: "Ehm.... nop", points: 1 },
      { text: "Ojalá, pero no mucho.", points: 2 },
      { text: "Igual sí, algo me representa", points: 3 },
      { text: "Es la mejor definición que he escuchado de mí", points: 4 }
    ]
  },
  {
    question: "¿Cuál sería tu situación financiera soñada?",
    answers: [
      { text: "No tener que tener ningún tipo de dedicación a mis finanzas", points: 1 },
      { text: "Gastar infinitamente sin tener que pensar en limitar mis gastos", points: 2 },
      { text: "Equilibrio entre poder ahorrar y darme gustos", points: 3 },
      { text: "Vivir de la rentabilidad de mis inversiones", points: 4 }
    ]
  },
  {
    question: "¿Cómo describirías tu capacidad actual de ahorro?",
    answers: [
      { text: "No me alcanza y a veces me endeudo. Imposible ahorrar", points: 1 },
      { text: "Generalmente me alcanza para cubrir mis gastos y nada más", points: 2 },
      { text: "Generalmente ahorro de acuerdo a lo planeado", points: 3 },
      { text: "Siempre ahorro y lo invierto para que ese dinero trabaje por mí", points: 4 }
    ]
  },
  {
    question: "En general, ¿qué sientes cuando gastas dinero?",
    answers: [
      { text: "¿Sentir? No quiero ni pensar en dinero.", points: 1 },
      { text: "Amo gastar. Si gastar fuera un deporte, clasificaría para las olimpiadas", points: 2 },
      { text: "Molestia. Entiendo que ciertos gastos son necesarios pero preferiría no gastar y poder ahorrarlo", points: 3 },
      { text: "Incomodidad. Creo que preferiría invertir dinero en vez de gastarlo", points: 4 }
    ]
  },
  {
    question: "Completa la oración según tu opinión: La deuda es: ...",
    answers: [
      { text: "Pura maldad", points: 1 },
      { text: "Un mal necesario", points: 2 },
      { text: "Un camino del cual alejarse", points: 3 },
      { text: "Una posibilidad para ciertas inversiones", points: 4 }
    ]
  },
  {
    question: "¿Cómo te sientes en relación a darte esos gustitos del momento?",
    answers: [
      { text: "Pues no me lo he cuestionado nunca", points: 1 },
      { text: "Es necesario para la vida. Si no disfruto ahora, ¿cuándo?", points: 2 },
      { text: "Casi siempre es una trampa, es mejor planificarse para el futuro", points: 3 },
      { text: "A veces se puede permitir, pero siempre cuando no ponga en riesgo otros planes", points: 4 }
    ]
  }
];

export const personalityTypes = {
  A: {
    title: "Lucreci@ Fortunati",
    description: "Balance máximo, {name}. Sabes cuándo invertir y cuándo gastar. ¿Pero a qué costo?"
  },
  B: {
    title: "Prudenci@ Segurini",
    description: "Tanto amor por el orden y el ahorro puede ser muy bueno, {name}, siempre y cuando no limite el poder crecer e ir un poco más allá."
  },
  C: {
    title: "Gaston@ Dell' Oro",
    description: "{name}, amas gastar y disfrutar hasta que, por experiencia propia, gastar más de lo que se puede te genera problemas."
  },
  D: {
    title: "Inocenci@ Scappatoria",
    description: "{name}, podríamos decir que quieres vivir en paz, en armonía y no tener que atender temas tan \"mundanos\" como el dinero."
  }
}; 