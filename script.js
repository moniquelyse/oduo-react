// Objeto con los textos de las bubbles
const bubbleContent = {
  stage1: {
    title: "La iniciación",
    text: "Tu educación financiera, tus experiencias, sentimientos y preferencias forman tu Personalidad Financiera®. Descúbrela en el test a continuación.",
    buttonText: "Empezar"
  },
  stage2: {
    title: "El compromiso",
    text: "Después de conocer tuPersonalidad Financiera®, es el momento del compromiso contigo mism@, ¿vamos?",
    buttonText: "Cerrada",
    disabled: true
  },
  stage3: {
    title: "Lorem ipsum",
    text: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Cerrada",
    disabled: true
  },
  stage4: {
    title: "Lorem ipsum",
    text: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Cerrada",
    disabled: true
  },
  stage5: {
    title: "Lorem ipsum",
    text: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Cerrada",
    disabled: true
  },
  stage6: {
    title: "Lorem ipsum",
    text: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Cerrada",
    disabled: true
  },
  stage7: {
    title: "Lorem ipsum",
    text: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Cerrada",
    disabled: true
  },
  stage8: {
    title: "Lorem ipsum",
    text: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Cerrada",
    disabled: true
  },
  stage9: {
    title: "Lorem ipsum",
    text: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Cerrada",
    disabled: true
  },
  stage10: {
    title: "Lorem ipsum",
    text: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Cerrada",
    disabled: true
  },
  stage11: {
    title: "Lorem ipsum",
    text: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Cerrada",
    disabled: true
  },
  stage12: {
    title: "Lorem ipsum",
    text: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Cerrada",
    disabled: true
  },
  stage13: {
    title: "Lorem ipsum",
    text: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Cerrada",
    disabled: true
  },
  stage14: {
    title: "Lorem ipsum",
    text: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Cerrada",
    disabled: true
  },
  stage15: {
    title: "Lorem ipsum",
    text: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Cerrada",
    disabled: true
  },
  stage16: {
    title: "Lorem ipsum",
    text: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Cerrada",
    disabled: true
  }
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.stage').forEach((stage, index) => {
    stage.addEventListener('click', (e) => {
      const platform = stage.querySelector('.stage-top-platform');
      const isDisabled = stage.classList.contains('disabled');
      
      if (platform.classList.contains('pressed')) {
        // Release
        platform.classList.remove('pressed');
        platform.classList.add('release');
        
        // Cerrar bubble
        const activeBubble = document.querySelector('.bubble:not([style*="display: none"])');
        if (activeBubble) {
          activeBubble.remove();
        }
        
        stage.classList.remove('active');
        
        platform.addEventListener('animationend', () => {
          platform.classList.remove('release');
        }, { once: true });
      } else {
        // Antes de presionar la nueva plataforma, liberamos cualquier otra que esté presionada
        const pressedPlatform = document.querySelector('.stage-top-platform.pressed');
        if (pressedPlatform) {
          pressedPlatform.classList.remove('pressed');
          pressedPlatform.classList.add('release');
          pressedPlatform.closest('.stage').classList.remove('active');
          
          pressedPlatform.addEventListener('animationend', () => {
            pressedPlatform.classList.remove('release');
          }, { once: true });
        }

        // Press
        platform.classList.add('pressed');
        stage.classList.add('active');
        
        // Removemos cualquier bubble existente
        document.querySelectorAll('.bubble').forEach(b => {
          if (b.style.display !== 'none') b.remove();
        });
        
        // Clonamos y mostramos el bubble correspondiente
        const bubbleTemplate = document.querySelector(isDisabled ? '.bubble.disabled' : '.bubble.normal');
        
        if (bubbleTemplate) {
          const newBubble = bubbleTemplate.cloneNode(true);
          newBubble.style.display = 'block';
          
          // Calculamos la posición vertical
          const stageRect = stage.getBoundingClientRect();
          const stagesRect = document.querySelector('.stages').getBoundingClientRect();
          const topPosition = stageRect.top - stagesRect.top + stageRect.height + 220;
          
          // Aplicamos la posición
          newBubble.style.top = `${topPosition}px`;
          
          // Obtener el contenido correspondiente a la etapa
          const stageNumber = index + 1;
          const content = bubbleContent[`stage${stageNumber}`];
          
          if (content) {
            // Actualizar contenido
            newBubble.querySelector('.bubble-title').textContent = content.title;
            newBubble.querySelector('.bubble-text').textContent = content.text;
            newBubble.querySelector('.bubble-button').textContent = content.buttonText;
          }
          
          // Insertamos el bubble
          document.querySelector('.bubble-container').appendChild(newBubble);
          
          // Ajustamos la flecha según los márgenes
          const marginLeft = window.getComputedStyle(stage).marginLeft;
          const marginRight = window.getComputedStyle(stage).marginRight;
          
          if (marginLeft !== '0px') {
            const marginValue = parseInt(marginLeft);
            const halfMargin = marginValue / 2;
            newBubble.style.setProperty('--arrow-margin-left', `${halfMargin}px`);
          } else if (marginRight !== '0px') {
            const marginValue = parseInt(marginRight);
            const halfMargin = -marginValue / 2;
            newBubble.style.setProperty('--arrow-margin-left', `${halfMargin}px`);
          }
        }
        
        // Después de crear el bubble, verificar si está visible
        const newBubble = document.querySelector('.bubble:not([style*="display: none"])');
        if (newBubble && !isElementInViewport(newBubble, 100)) {
          scrollToElement(newBubble, 100);
        }
      }
    });
  });
});

document.addEventListener('click', (e) => {
  if (e.target.closest('.bubble:not(.disabled) .bubble-button')) {
    // Cerrar la bubble
    const activeBubble = document.querySelector('.bubble:not([style*="display: none"])');
    if (activeBubble) {
      activeBubble.remove();
    }
    
    // Liberar la plataforma presionada
    const pressedPlatform = document.querySelector('.stage-top-platform.pressed');
    if (pressedPlatform) {
      pressedPlatform.classList.remove('pressed');
      pressedPlatform.classList.add('release');
      pressedPlatform.closest('.stage').classList.remove('active');
      
      pressedPlatform.addEventListener('animationend', () => {
        pressedPlatform.classList.remove('release');
      }, { once: true });
    }

    // Abrir el drawer (código existente)
    const drawer = document.querySelector('.drawer-modal');
    drawer.style.display = 'flex';
    drawer.offsetHeight;
    drawer.classList.add('open');
    
    // Guardar posición del scroll
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    drawer.dataset.scrollPosition = scrollY;

    // Configurar el iframe
    var og_embedURL = 'https://ordenarme.outgrow.us/63a4a9707a8478521053b9e1?custom=1';
    var og_urlParameters = window.location.search;
    og_urlParameters = og_urlParameters.substring(1);
    if (og_urlParameters.length) {
      og_embedURL = og_embedURL + '&' + og_urlParameters;
    }
    document.getElementById('og_iframe_temp').src = og_embedURL;
  }
});

document.querySelector('.drawer-overlay').addEventListener('click', (e) => {
  const drawer = e.target.closest('.drawer-modal');
  drawer.classList.remove('open');
  
  // Restaurar scroll manteniendo la posición visual
  const scrollY = parseInt(drawer.dataset.scrollPosition || '0');
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, scrollY);
  
  // Esperar a que termine la animación
  setTimeout(() => {
    drawer.style.display = 'none';
  }, 300);
});

document.querySelector('.drawer-close').addEventListener('click', (e) => {
  const drawer = e.target.closest('.drawer-modal');
  drawer.classList.remove('open');
  
  // Restaurar scroll manteniendo la posición visual
  const scrollY = parseInt(drawer.dataset.scrollPosition || '0');
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, scrollY);
  
  // Esperar a que termine la animación
  setTimeout(() => {
    drawer.style.display = 'none';
  }, 300);
});

// Función auxiliar para verificar si el elemento está visible
function isElementInViewport(el, margin = 100) {
  const rect = el.getBoundingClientRect();
  return (
    rect.bottom <= (window.innerHeight - margin)
  );
}

// Función para hacer scroll suave
function scrollToElement(el, margin = 100) {
  const rect = el.getBoundingClientRect();
  const scrollNeeded = window.pageYOffset + rect.bottom - (window.innerHeight - margin);
  window.scrollTo({
    top: scrollNeeded,
    behavior: 'smooth'
  });
}