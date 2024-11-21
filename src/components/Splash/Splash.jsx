import { useEffect, useState } from 'react';
import './Splash.css';

const Splash = ({ onFinish }) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => setStartAnimation(true), 500);
    setTimeout(() => onFinish(), 4500);
  }, []);

  return (
    <>
      <div className={`splash-screen ${startAnimation ? 'animate' : ''}`}>
        <div className="logo-wrapper">
          <img src="/img/o-logo.svg" alt="Logo" className="splash-logo" />
        </div>
        <div className="splash-disclaimer">Esta es una experiencia demo <br/>de la futura App de Ordenar.me</div>
      </div>
      <div className={`splash-overlay ${startAnimation ? 'animate' : ''}`} />
    </>
  );
};

export default Splash; 