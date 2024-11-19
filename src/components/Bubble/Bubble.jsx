import './Bubble.css';

const Bubble = ({ title, text, disabled, onButtonClick }) => {
  return (
    <div className={`bubble ${disabled ? 'disabled' : ''}`}>
      <div className="bubble-title">{title}</div>
      <div className="bubble-text">{text}</div>
      <button 
        className="bubble-button"
        onClick={onButtonClick}
      >
        {disabled ? "Cerrada" : "Abrir"}
      </button>
    </div>
  );
};

export default Bubble;