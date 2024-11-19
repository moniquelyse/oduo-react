import { useState } from 'react';
import Stage from './components/Stage/Stage';
import { bubbleContent } from './data/bubbleContent';
import './styles/global.css';
import Drawer from './components/Drawer/Drawer';
import { stages, currentStage } from './config/stages';
import DrawerContent from './components/DrawerContent/DrawerContent';

function App() {
  const [activeBubble, setActiveBubble] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [pressedStage, setPressedStage] = useState(null);
  const [activeDrawerStage, setActiveDrawerStage] = useState(null);

  const handleBubbleOpen = (stageIndex) => {
    setActiveBubble(stageIndex);
    setPressedStage(stageIndex);
  };

  const handleBubbleClose = () => {
    setActiveBubble(null);
    setPressedStage(null);
  };

  const handleBubbleButtonClick = (stageIndex) => {
    setActiveDrawerStage(stageIndex);
    handleBubbleClose();
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
    setActiveDrawerStage(null);
  };

  return (
    <main className="container">
      <div className="logo-container">
        <img src="/img/o-logo.svg" alt="Logo" className="logo" />
      </div>
      
      <div className="content">
        <div className="chapter">
          <p className="overline">CAPÍTULO I</p>
          <h1 className="title">LA INICIACIÓN</h1>
          <p className="intro">El aprendiz se compromete a hacer las misiones que se le encomiendan</p>
          
          <div className="stages stages-1">
            {stages.map((stage, index) => (
              <Stage 
                key={stage.id}
                isGlowing={index === currentStage}
                disabled={index > currentStage}
                bubbleContent={bubbleContent[`stage${index + 1}`]}
                isActive={activeBubble === index}
                onBubbleOpen={() => handleBubbleOpen(index)}
                onBubbleClose={handleBubbleClose}
                onBubbleButtonClick={() => handleBubbleButtonClick(index)}
                isPressed={pressedStage === index}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="chapter disabled">
          <img src="/img/lock.svg" alt="Lock" className="lock" />
          <p className="overline">CAPÍTULO II</p>
          <h1 className="title">LA CALIBRACIÓN</h1>
          <p className="intro">Completa cada capítulo para desbloquear el siguiente.</p>
        </div>
      </div>

      <div className="bubble-container">
        <div className="bubble normal" style={{ display: 'none' }}>
          <div className="bubble-title">Title Normal</div>
          <div className="bubble-text">Text normal...</div>
          <a href="#" className="bubble-button">Empezar</a>
        </div>
        
        <div className="bubble disabled" style={{ display: 'none' }}>
          <div className="bubble-title">Title Disabled</div>
          <div className="bubble-text">Text disabled...</div>
          <a href="#" className="bubble-button">Cerrada</a>
        </div>
      </div>

      <img src="/img/oinc-linear.png" alt="Oinc" className="oinc" />
      <img src="/img/coin-linear.png" alt="Coin" className="coin" />

      <div className="credits">
        <p>2024 Ordenar.me ® Todos los derechos reservados</p>
      </div>

      <Drawer isOpen={isDrawerOpen} onClose={handleDrawerClose}>
        <DrawerContent stage={stages[activeDrawerStage]} />
      </Drawer>
    </main>
  );
}

export default App;
