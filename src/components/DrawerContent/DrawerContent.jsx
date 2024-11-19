import { useEffect } from 'react';
import './DrawerContent.css';

const DrawerContent = ({ stage }) => {
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
      <div className="drawer-stage-content outgrow">
        <iframe 
          id="og_iframe_temp"
          allow="camera *;"
          scrolling="auto"
          style={{
            width: '100%',
            height: '100%',
            margin: 0,
            border: 'none'
          }}
          title="Personalidad Financiera"
        />
      </div>
    );
  }

  return (
    <div className="drawer-stage-content">
      <h2>{stage.title}</h2>
      <h3>{stage.subtitle}</h3>
      {stage.content.type === 'typeform' ? (
        <div className="typeform-container">
          <p>{stage.content.description}</p>
        </div>
      ) : (
        <div className="content-container">
          <p>{stage.content.description}</p>
          <ul>
            {stage.content.tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DrawerContent; 