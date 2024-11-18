import Stage from './components/Stage/Stage';
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
            <Stage isGlowing={true} />
            <Stage disabled />
            <Stage disabled />
            <Stage disabled />
            <Stage disabled />
            <Stage disabled />
            <Stage disabled />
            <Stage disabled />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;