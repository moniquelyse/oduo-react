import { useState, useEffect, useRef } from 'react';
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
  const stageRef = useRef(null);

  useEffect(() => {
    if (!isPressed && isPlatformPressed) {
      setIsReleasing(true);
      setIsPlatformPressed(false);
    }
  }, [isPressed, isPlatformPressed]);

  useEffect(() => {
    if (isActive && stageRef.current) {
      const bubble = stageRef.current.querySelector('.bubble-container');
      if (bubble) {
        const bubbleRect = bubble.getBoundingClientRect();
        const bottomOffset = bubbleRect.bottom + 32; // 32px de margen extra
        const windowHeight = window.innerHeight;
        
        if (bottomOffset > windowHeight) {
          const scrollNeeded = bottomOffset - windowHeight;
          window.scrollBy({
            top: scrollNeeded,
            behavior: 'smooth'
          });
        }
      }
    }
  }, [isActive]);

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

  return (
    <div 
      ref={stageRef}
      style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
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