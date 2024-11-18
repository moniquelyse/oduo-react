import { useState } from 'react';
import './Stage.css';

const Stage = ({ disabled, isGlowing }) => {
  const [isPlatformPressed, setIsPlatformPressed] = useState(false);
  const [isReleasing, setIsReleasing] = useState(false);

  const handleClick = () => {
    if (isPlatformPressed) {
      setIsReleasing(true);
      setIsPlatformPressed(false);
    } else {
      setIsPlatformPressed(true);
    }
  };

  return (
    <div className={`stage ${disabled ? 'disabled' : ''}`} onClick={handleClick}>
      <div 
        className={`stage-top-platform ${isPlatformPressed ? 'pressed' : ''} ${isReleasing ? 'release' : ''}`}
        onAnimationEnd={() => setIsReleasing(false)}
      />
      <div className={`stage-bottom-platform ${isGlowing ? 'glowing-stage' : ''}`} />
    </div>
  );
};

export default Stage; 