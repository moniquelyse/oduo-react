import Stage from './components/Stage/Stage';
import { bubbleContent } from './data/bubbleContent';
import './styles/global.css';

function App() {
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
            <Stage isGlowing={true} bubbleContent={bubbleContent.stage1} />
            <Stage disabled bubbleContent={bubbleContent.stage2} />
            <Stage disabled bubbleContent={bubbleContent.stage3} />
            <Stage disabled bubbleContent={bubbleContent.stage4} />
            <Stage disabled bubbleContent={bubbleContent.stage5} />
            <Stage disabled bubbleContent={bubbleContent.stage6} />
            <Stage disabled bubbleContent={bubbleContent.stage7} />
            <Stage disabled bubbleContent={bubbleContent.stage8} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
