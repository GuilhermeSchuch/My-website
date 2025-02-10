// Video Player
import { Player, BigPlayButton, LoadingSpinner } from 'video-react';

// Hooks
import { useRef, useEffect } from 'react';

const VideoPlayer = ({ videoURL }: any) => {
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if(playerRef.current) {
      playerRef.current.video.volume = 0.5;
    }
  }, []);  

  return (
    <Player
      playsInline
      src={videoURL}
      ref={playerRef}
    >
      <LoadingSpinner />
      <BigPlayButton position="center" />
    </Player>
  );
};

export default VideoPlayer;
