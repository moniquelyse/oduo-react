import { useEffect, useState } from 'react';
import './Splash.css';

const Splash = ({ onFinish }) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => setStartAnimation(true), 800);
    setTimeout(() => onFinish(), 3000);
  }, []);

  return (
    <>
      <div className={`splash-screen ${startAnimation ? 'animate' : ''}`}>
        <div className="logo-wrapper">
          <img src="/img/o-logo.svg" alt="Logo" className="splash-logo" />
        </div>
      </div>
      <div className={`splash-overlay ${startAnimation ? 'animate' : ''}`} />
    </>
  );
};

export default Splash; 