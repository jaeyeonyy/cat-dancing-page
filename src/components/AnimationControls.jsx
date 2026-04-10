import '../styles/animations.css';

function AnimationControls({ isPlaying, speed, onToggle, onSpeedChange }) {
  return (
    <div className="controls">
      <button
        className={`toggle-btn ${isPlaying ? 'playing' : ''}`}
        onClick={onToggle}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
      >
        {isPlaying ? '⏸ 정지' : '▶ 춤 시작!'}
      </button>

      <div className="speed-controls">
        <span className="speed-label">속도</span>
        {['slow', 'normal', 'fast'].map((s) => (
          <button
            key={s}
            className={`speed-btn ${speed === s ? 'active' : ''}`}
            onClick={() => onSpeedChange(s)}
            aria-pressed={speed === s}
          >
            {s === 'slow' ? '🐢 느리게' : s === 'normal' ? '🚶 보통' : '🐇 빠르게'}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AnimationControls;
