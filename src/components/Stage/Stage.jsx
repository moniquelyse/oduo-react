import { useState } from 'react';
import Bubble from '../Bubble/Bubble';
import './Stage.css';

const Stage = ({ 
  disabled, 
  isGlowing, 
  bubbleContent,
  isActive,
  onBubbleOpen,
  onBubbleClose,
  isPressed,
  index 
}) => {
  const [isReleasing, setIsReleasing] = useState(false);

  const handleClick = () => {
    if (isPressed) {
      setIsReleasing(true);
      onBubbleClose();
    } else {
      onBubbleOpen();
    }
  };

  const handleBubbleButtonClick = () => {
    setIsReleasing(true);
    onBubbleClose();
  };

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className={`stage ${disabled ? 'disabled' : ''}`} onClick={handleClick}>
        <div 
          className={`stage-top-platform ${isPressed ? 'pressed' : ''} ${isReleasing ? 'release' : ''}`}
          onAnimationEnd={() => setIsReleasing(false)}
        />
        <div className={`stage-bottom-platform ${isGlowing ? 'glowing-stage' : ''}`} />
      </div>
      
      {isActive && bubbleContent && (
        <div className="bubble-container">
          <Bubble 
            {...bubbleContent}
            disabled={disabled}
            onButtonClick={handleBubbleButtonClick}
          />
        </div>
      )}
    </div>
  );
};

export default Stage;