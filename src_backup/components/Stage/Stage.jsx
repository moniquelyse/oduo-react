import { useState } from 'react';
import Bubble from '../Bubble/Bubble';
import './Stage.css';

const Stage = ({ disabled, isGlowing, bubbleContent }) => {
  const [isPlatformPressed, setIsPlatformPressed] = useState(false);
  const [isReleasing, setIsReleasing] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  const handleClick = () => {
    if (disabled) return;
    
    if (isPlatformPressed) {
      setIsReleasing(true);
      setIsPlatformPressed(false);
      setShowBubble(false);
    } else {
      setIsPlatformPressed(true);
      setShowBubble(true);
    }
  };

  const handleBubbleButtonClick = () => {
    setShowBubble(false);
    setIsPlatformPressed(false);
    setIsReleasing(true);
    // Aquí irá la lógica para abrir el drawer
  };

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div className={`stage ${disabled ? 'disabled' : ''}`} onClick={handleClick}>
      <div 
        className={`stage-top-platform ${isPlatformPressed ? 'pressed' : ''} ${isReleasing ? 'release' : ''}`}
        onAnimationEnd={() => setIsReleasing(false)}
      />
      <div className={`stage-bottom-platform ${isGlowing ? 'glowing-stage' : ''}`} />
    </div>
    
    {showBubble && bubbleContent && (
      <div className="bubble-container">
        <Bubble 
          {...bubbleContent}
          onButtonClick={handleBubbleButtonClick}
        />
      </div>
    )}
  </div>
  );
};

export default Stage;