import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import useAnimation from './hooks/useAnimation';
import './styles/global.css';

function App() {
  const { isPlaying, speed, toggle, changeSpeed } = useAnimation();

  return (
    <div className="app">
      <header className="app-header">
        <h1>🐱 고양이 댄스 파티</h1>
        <p>고양이와 함께 신나게 춤을 춰요!</p>
      </header>

      <main className="app-main">
        <DancingCat isPlaying={isPlaying} speed={speed} />
        <AnimationControls
          isPlaying={isPlaying}
          speed={speed}
          onToggle={toggle}
          onSpeedChange={changeSpeed}
        />
      </main>

      <footer className="app-footer">
        <p>🎵 음악을 켜고 함께 춰요! 🎵</p>
      </footer>
    </div>
  );
}

export default App;
