import "./VideoPlayer.css";
import { Player, BigPlayButton, LoadingSpinner } from "video-react";
import {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import type { PlayerReference } from "video-react";

interface VideoPlayerProps {
  videoURL: string;
}

export interface VideoPlayerHandle {
  pause: () => void;
}

type VideoReactPlayer = PlayerReference & {
  video?: {
    video?: HTMLVideoElement;
  };
};

const VideoPlayer = forwardRef<VideoPlayerHandle, VideoPlayerProps>(({ videoURL }, ref) => {
  const playerRef = useRef<VideoReactPlayer | null>(null);

  useImperativeHandle(ref, () => ({
    pause: () => {
      if (playerRef.current) {
        playerRef.current.pause();
      }
    },
  }));

  useEffect(() => {
    const video = playerRef.current?.video?.video;

    if (video) {
      video.volume = 0.5;
      video.disablePictureInPicture = true;
      video.disableRemotePlayback = true;

      video.setAttribute(
        "controlsList",
        "nodownload noplaybackrate noremoteplayback nofullscreen"
      );

      video.setAttribute("preload", "metadata");
    }
  }, []);

  return (
    <Player ref={playerRef} playsInline src={videoURL}>
      <LoadingSpinner />
      <BigPlayButton position="center" />
    </Player>
  );
});

export default VideoPlayer;
