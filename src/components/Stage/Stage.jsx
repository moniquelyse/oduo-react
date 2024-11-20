import { useState } from 'react';
import Bubble from '../Bubble/Bubble';
import Drawer from '../Drawer/Drawer';
import './Stage.css';

const Stage = ({ 
  disabled, 
  isGlowing, 
  bubbleContent, 
  isActive, 
  onBubbleOpen, 
  onBubbleClose, 
  onBubbleButtonClick,
  isPressed, 
  index 
}) => {
  const [isReleasing, setIsReleasing] = useState(false);
  const [isPlatformPressed, setIsPlatformPressed] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    
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
    setIsDrawerOpen(true);
    setIsReleasing(true);
    setIsPlatformPressed(false);
    onBubbleClose();
  };

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div 
        className={`stage ${disabled ? 'disabled' : ''}`} 
        onClick={handleClick}
      >
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
            isGlowing={isGlowing}
            onButtonClick={onBubbleButtonClick}
          />
        </div>
      )}
    </div>
  );
};

export default Stage;