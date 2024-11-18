import { useState } from 'react';
import Stage from './components/Stage/Stage';
import { bubbleContent } from './data/bubbleContent';
import './styles/global.css';

function App() {
  const [activeBubble, setActiveBubble] = useState(null);
  const [pressedStage, setPressedStage] = useState(null);

  const handleBubbleOpen = (stageIndex) => {
    if (pressedStage !== null && pressedStage !== stageIndex) {
      const stages = document.querySelectorAll('.stage');
      stages[pressedStage]?.classList.add('release');
    }
    
    setActiveBubble(stageIndex);
    setPressedStage(stageIndex);
  };

  const handleBubbleClose = () => {
    setActiveBubble(null);
    setPressedStage(null);
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
            <Stage 
              isGlowing={true} 
              bubbleContent={bubbleContent.stage1}
              isActive={activeBubble === 0}
              onBubbleOpen={() => handleBubbleOpen(0)}
              onBubbleClose={handleBubbleClose}
              isPressed={pressedStage === 0}
              index={0}
            />
            <Stage 
              disabled 
              bubbleContent={bubbleContent.stage2}
              isActive={activeBubble === 1}
              onBubbleOpen={() => handleBubbleOpen(1)}
              onBubbleClose={handleBubbleClose}
              isPressed={pressedStage === 1}
              index={1}
            />
            <Stage 
              disabled 
              bubbleContent={bubbleContent.stage3}
              isActive={activeBubble === 2}
              onBubbleOpen={() => handleBubbleOpen(2)}
              onBubbleClose={handleBubbleClose}
              isPressed={pressedStage === 2}
              index={2}
            />
            <Stage 
              disabled 
              bubbleContent={bubbleContent.stage4}
              isActive={activeBubble === 3}
              onBubbleOpen={() => handleBubbleOpen(3)}
              onBubbleClose={handleBubbleClose}
              isPressed={pressedStage === 3}
              index={3}
            />
            <Stage 
              disabled 
              bubbleContent={bubbleContent.stage5}
              isActive={activeBubble === 4}
              onBubbleOpen={() => handleBubbleOpen(4)}
              onBubbleClose={handleBubbleClose}
              isPressed={pressedStage === 4}
              index={4}
            />
            <Stage 
              disabled 
              bubbleContent={bubbleContent.stage6}
              isActive={activeBubble === 5}
              onBubbleOpen={() => handleBubbleOpen(5)}
              onBubbleClose={handleBubbleClose}
              isPressed={pressedStage === 5}
              index={5}
            />
            <Stage 
              disabled 
              bubbleContent={bubbleContent.stage7}
              isActive={activeBubble === 6}
              onBubbleOpen={() => handleBubbleOpen(6)}
              onBubbleClose={handleBubbleClose}
              isPressed={pressedStage === 6}
              index={6}
            />
            <Stage 
              disabled 
              bubbleContent={bubbleContent.stage8}
              isActive={activeBubble === 7}
              onBubbleOpen={() => handleBubbleOpen(7)}
              onBubbleClose={handleBubbleClose}
              isPressed={pressedStage === 7}
              index={7}
            />
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
    </main>
  );
}

export default App;
