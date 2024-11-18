document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.stage').forEach(stage => {
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