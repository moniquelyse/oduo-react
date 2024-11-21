import './Bubble.css';

const Bubble = ({ title, text, disclaimer, disabled, isGlowing, onButtonClick }) => {
  const getButtonText = () => {
    if (disabled) return "Cerrada";
    if (isGlowing) return "Comenzar";
    return "Abrir";
  };

  return (
    <div className={`bubble ${disabled ? 'disabled' : ''}`}>
      <div className="bubble-title">{title}</div>
      <div className="bubble-text">{text}</div>
      <div className="bubble-text-disclaimer">{disclaimer}</div>
      <button 
        className="bubble-button"
        onClick={onButtonClick}
      >
        {getButtonText()}
      </button>
    </div>
  );
};

export default Bubble;