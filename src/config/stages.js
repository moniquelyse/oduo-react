export const stages = [
  {
    id: 0,
    title: "Iniciación",
    subtitle: "Comienza tu viaje",
    content: {
      type: "typeform",
      formId: "abc123", // ID del typeform que usaremos después
      description: "Completa el formulario de iniciación para comenzar tu viaje"
    }
  },
  {
    id: 1,
    title: "Primera Misión",
    subtitle: "Descubre tu camino",
    content: {
      type: "content",
      description: "Aquí va el contenido de la primera misión",
      tasks: [
        "Tarea 1: Hacer esto",
        "Tarea 2: Hacer aquello"
      ]
    }
  },
  {
    id: 2,
    title: "Segunda Misión",
    subtitle: "Expande tus horizontes",
    content: {
      type: "content",
      description: "Contenido de la segunda misión",
      tasks: [
        "Tarea 1: Algo más",
        "Tarea 2: Otra cosa"
      ]
    }
  },
  {
    id: 3,
    title: "Tercera Misión",
    subtitle: "Conquista el mundo",
    content: {
      type: "content",
      description: "Contenido de la terceera misión",
      tasks: [
        "Tarea 1: Algo más",
        "Tarea 2: Otra cosa"
      ]
    }
  },
  {
    id: 4,
    title: "Cuarta Misión",
    subtitle: "Conquista el universo",
    content: {
      type: "content",
      description: "Contenido de la cuarta misión",
      tasks: [
        "Tarea 1: Algo más",
        "Tarea 2: Otra cosa"
      ]
    }
  },
  {
    id: 5,
    title: "Quinta Misión",
    subtitle: "Conquista el universo",
    content: {
      type: "content",
      description: "Contenido de la quinta misión",
      tasks: [
        "Tarea 1: Algo más",
        "Tarea 2: Otra cosa"
      ]
    }
  },
  {
    id: 6,
    title: "Sexta Misión",
    subtitle: "Conquista el universo",
    content: {
      type: "content",
      description: "Contenido de la sexta misión",
      tasks: [
        "Tarea 1: Algo más",
        "Tarea 2: Otra cosa"
      ]
    }
  },
  {
    id: 7,
    title: "Séptima Misión",
    subtitle: "Conquista el universo",
    content: {
      type: "content",
      description: "Contenido de la séptima misión",
      tasks: [
        "Tarea 1: Algo más",
        "Tarea 2: Otra cosa"
      ]
    }
  }
];

export const currentStage = 0; // Para pruebas