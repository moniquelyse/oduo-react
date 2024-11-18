import { useEffect } from 'react';
import './Bubble.css';

const Bubble = ({ title, text, buttonText, disabled, onButtonClick }) => {
  useEffect(() => {
    // Verificar si el bubble está fuera del viewport y hacer scroll si es necesario
    const bubble = document.querySelector('.bubble:not([style*="display: none"])');
    if (bubble) {
      const rect = bubble.getBoundingClientRect();
      const margin = 100;
      if (rect.bottom > (window.innerHeight - margin)) {
        const scrollNeeded = window.pageYOffset + rect.bottom - (window.innerHeight - margin);
        window.scrollTo({
          top: scrollNeeded,
          behavior: 'smooth'
        });
      }
    }
  }, []);

  return (
    <div className={`bubble ${disabled ? 'disabled' : 'normal'}`}>
      <div className="bubble-title">{title}</div>
      <div className="bubble-text">{text}</div>
      <button 
        className="bubble-button"
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Bubble;