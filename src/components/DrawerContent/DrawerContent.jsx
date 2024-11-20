import { useEffect } from 'react';
import './DrawerContent.css';
import Test from '../Test/Test';
import { getTestUserName } from '../../utils/progress';

const DrawerContent = ({ stage, onClose, onHideCloseButton, onUserNameChange }) => {
  const handleAnimatedClose = () => {
    const drawer = document.querySelector('.drawer');
    drawer.classList.add('closing');
    
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleShowResult = (isShowingResult) => {
    if (onHideCloseButton) {
      onHideCloseButton(isShowingResult);
    }
  };

  useEffect(() => {
    if (stage?.id === 0) {
      let og_embedURL = 'https://ordenarme.outgrow.us/63a4a9707a8478521053b9e1?custom=1';
      const og_urlParameters = window.location.search.substring(1);
      
      if (og_urlParameters.length) {
        og_embedURL = `${og_embedURL}&${og_urlParameters}`;
      }

      const iframe = document.getElementById('og_iframe_temp');
      if (iframe) {
        iframe.src = og_embedURL;
      }
    }
  }, [stage]);

  if (!stage) return null;

  if (stage.id === 0) {
    return (
      <div className="drawer-stage-content">
        <Test 
          onClose={handleAnimatedClose}
          onShowResult={handleShowResult}
          onUserNameChange={onUserNameChange}
        />
      </div>
    );
  }

  return (
    <div className="drawer-stage-content">
      {stage.id === 0 ? (
        <Test 
          onClose={handleAnimatedClose}
          onShowResult={handleShowResult}
          onUserNameChange={onUserNameChange}
        />
      ) : (
        <div className="result-like-container">
          <div className="personality-type">
            <p className="overline">¡Vamos bien,<br/>{getTestUserName() || 'aprendiz'}! 💪</p>
            <h2 className="title">{stage.title}<br/><span className="bold">{stage.subtitle}</span></h2>
            <p className="description">{stage.content.description}</p>
            {stage.content.tasks && (
              <ul className="tasks-list">
                {stage.content.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            )}
          </div>
          <button 
            className="result-button"
            onClick={handleAnimatedClose}
          >
            Entendido
          </button>
        </div>
      )}
    </div>
  );
};

export default DrawerContent; 