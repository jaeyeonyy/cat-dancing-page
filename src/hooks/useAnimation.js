import { useState, useCallback } from 'react';

function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState('normal');

  const toggle = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const changeSpeed = useCallback((newSpeed) => {
    setSpeed(newSpeed);
  }, []);

  return { isPlaying, speed, toggle, changeSpeed };
}

export default useAnimation;
