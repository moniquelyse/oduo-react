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
    description: "Para Lucreci@ el mundo de las finanzas es fascinante. Comprendes buena parte de sus complejidades y manejas bien las diferentes áreas. \n\nEl dinero sirve para hacer más dinero. Saber mucho sobre la industria también genera una perspectiva de \"siempre puedo estar mejor\", terminando en muchas horas gastadas para obtener ese preciado retorno. \n\nSin embargo, es importante considerar que el dinero debe mejorar tu vida y no solo acumularse, la meta es que tus finanzas mejoren tu vida, no que sean un trabajo más. Vivir de acuerdo a un plan financiero alineado con tu personalidad te ayudará a alcanzar una mejor calidad de vida."
  },
  B: {
    title: "Prudenci@ Segurini",
    description: "Podríamos decir que el slogan de vida de Prudenci@ es \"quien guarda siempre tiene\". \n\nSon personas manejan sus finanzas en base al ahorro y generalmente piensan mucho antes de realizar una compra. El dinero es un medio de seguridad, imposible disponer de lo que no se ha guardado, por lo que a ahorrar se ha dicho. \n\nAlgunos gastos son necesarios, pero si nos aferramos solamente al ahorro dejaremos pasar oportunidades que podrían mejorar nuestra calidad de vida significativamente en el futuro. \n\nVivir de acuerdo a un plan financiero alineado con tu personalidad te ayudará a alcanzar una mejor calidad de vida."
  },
  C: {
    title: "Gaston@ Dell' Oro",
    description: "Para Gastón@ el dinero es algo hermoso que le permite tener todas las maravillosas experiencias y cosas que quiere. \n\nLo que define propiamente a Gaston@ Dell’ Oro es el profundo placer por la experiencia de adquisición, ya sea comprar bienes, servicios o experiencias. A todas las personas les gusta comprar, pero a Gaston@ una compra satisfactoria podría incluso realinearle los chakras. \n\nEs importante saber disfrutar el dinero, porque para eso está, pero también es importante saber que tu futuro está asegurado a pesar de tus impulsos de compra. Vivir de acuerdo a un plan financiero alineado con tu personalidad te ayudará a alcanzar una mejor calidad de vida."
  },
  D: {
    title: "Inocenci@ Scappatoria",
    description: "Para Inocenci@ el mundo de las finanzas puede parecer complejo o una tarea abrumadora. \n\nIndependientemente de que tenga mayores o menores conocimientos financieros, lo que define propiamente a Inocenci@ Scappatoria es el hecho de que los temas financieros le causen agotamiento emocional y mental. No le dan ganas de enfrentarlo y sueña con ojalá nunca tener que hacerse cargo de temas financieros. \n\nSin embargo, nos guste o no, el dinero es el medio con el cual nuestra sociedad realiza transacciones de valor (bienes y servicios). Vivir de acuerdo a un plan financiero alineado con tu personalidad te ayudará a alcanzar una mejor calidad de vida."
  }
}; 