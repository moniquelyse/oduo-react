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
  const [isPlatformPressed, setIsPlatformPressed] = useState(false);

  const handleClick = () => {
    if (isPressed) {
      setIsReleasing(true);
      setIsPlatformPressed(false);
      onBubbleClose();
    } else {
      const stage = document.querySelectorAll('.stage')[index];
      const computedStyle = window.getComputedStyle(stage);
      const marginLeft = computedStyle.marginLeft;
      const marginRight = computedStyle.marginRight;
      
      let arrowMargin = 0;
      if (marginLeft !== '0px') {
        arrowMargin = parseInt(marginLeft) / 2;
      } else if (marginRight !== '0px') {
        arrowMargin = -parseInt(marginRight) / 2;
      }
      
      document.documentElement.style.setProperty('--arrow-margin-left', `${arrowMargin}px`);
      
      setIsPlatformPressed(true);
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