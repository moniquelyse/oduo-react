import './DrawerContent.css';

const DrawerContent = ({ stage }) => {
  if (!stage) return null;

  return (
    <div className="drawer-stage-content">
      <h2>{stage.title}</h2>
      <h3>{stage.subtitle}</h3>
      
      {stage.content.type === 'typeform' ? (
        <div className="typeform-container">
          <p>{stage.content.description}</p>
          {/* Aquí irá el embed del typeform */}
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