document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.stage').forEach(stage => {
    stage.addEventListener('click', (e) => {
      const platform = stage.querySelector('.stage-top-platform');
      platform.classList.toggle('pressed');
    });
  });
});