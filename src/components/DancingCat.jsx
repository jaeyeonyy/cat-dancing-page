import catSvg from '../assets/images/cat.svg';
import '../styles/animations.css';

function DancingCat({ isPlaying, speed }) {
  const animationDuration = speed === 'slow' ? '1.6s' : speed === 'fast' ? '0.5s' : '0.9s';

  return (
    <div className="dancing-cat-container">
      <div
        className={`cat-wrapper ${isPlaying ? 'dancing' : ''}`}
        style={{ '--dance-duration': animationDuration }}
      >
        <img src={catSvg} alt="춤추는 고양이" className="cat-image" />
        {isPlaying && (
          <div className="music-notes">
            <span className="note note-1">♪</span>
            <span className="note note-2">♫</span>
            <span className="note note-3">♩</span>
            <span className="note note-4">♬</span>
          </div>
        )}
      </div>
      <p className="cat-status">{isPlaying ? '신나게 춤추는 중! 🎵' : '쉬고 있어요... 😴'}</p>
    </div>
  );
}

export default DancingCat;
