document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.stage').forEach(stage => {
    stage.addEventListener('click', (e) => {
      const platform = stage.querySelector('.stage-top-platform');
      
      if (platform.classList.contains('pressed')) {
        // Si está presionado, hacemos la animación de release
        platform.classList.remove('pressed');
        platform.classList.add('release');
        
        // Cuando termina la animación de release, volvemos a la flotación normal
        platform.addEventListener('animationend', () => {
          platform.classList.remove('release');
        }, { once: true }); // once: true hace que el listener se elimine después de ejecutarse
      } else {
        // Si no está presionado, hacemos la animación de press
        platform.classList.add('pressed');
      }
    });
  });
});