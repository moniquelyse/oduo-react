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
          const topPosition = stageRect.top - stagesRect.top + stageRect.height + 20;
          
          // Aplicamos la posición
          newBubble.style.top = `${topPosition}px`;
          
          // Insertamos el bubble
          document.querySelector('.bubble-container').appendChild(newBubble);
          
          // Ajustamos la flecha según los márgenes
          const marginLeft = window.getComputedStyle(stage).marginLeft;
          const marginRight = window.getComputedStyle(stage).marginRight;
          
          if (marginLeft !== '0px') {
            // Convertimos el margen a número y calculamos la mitad
            const marginValue = parseInt(marginLeft);
            const halfMargin = marginValue / 2 + 'px';
            newBubble.style.setProperty('--arrow-margin-left', halfMargin);
          }
          if (marginRight !== '0px') {
            // Convertimos el margen a número y calculamos la mitad
            const marginValue = parseInt(marginRight);
            const halfMargin = marginValue / 2 + 'px';
            newBubble.style.setProperty('--arrow-margin-right', halfMargin);
          }
        }
      }
    });
  });
});