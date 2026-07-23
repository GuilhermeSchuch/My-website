import "./Carousel.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

import VideoPlayer from "../VideoPlayer/VideoPlayer";
import type { VideoPlayerHandle } from "../VideoPlayer/VideoPlayer";
import ModalImage from "../ModalImage/ModalImage";
import { useRef, useState } from "react";
import type { CSSProperties } from "react";

interface CarouselProps {
  media: { type: string; src: string }[];
  maxWidth?: string;
  aspectRatio?: string;
  variant?: "default" | "portrait";
}

const Carousel = ({
  media,
  maxWidth = "100%",
  aspectRatio = "16 / 9",
  variant = "default",
}: CarouselProps) => {
  const videoRefs = useRef<Array<VideoPlayerHandle | null>>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const carouselClassName = [
    "media-carousel",
    variant === "portrait" ? "media-carousel--portrait" : "",
  ].filter(Boolean).join(" ");
  const carouselStyle = {
    "--carousel-aspect-ratio": aspectRatio,
  } as CSSProperties;

  const pauseAllVideos = () => {
    videoRefs.current.forEach((video) => {
      video?.pause();
    });
  };

  return (
    <>
      <Splide
        className={carouselClassName}
        style={carouselStyle}
        options={{
          rewind: true,
          width: maxWidth,
          gap: 10,
          interval: 10000,
          perPage: 1,
          autoplay: true,
          pauseOnHover: true,
          arrows: true,
          breakpoints: {
            768: {
              width: variant === "portrait" ? maxWidth : "100%",
            },
          },
        }}
        onMove={pauseAllVideos}
      >
        {media.map((item, index) => (
          <SplideSlide key={index}>
            <div className="carousel-media-frame">
              {item.type === "video" ? (
                <VideoPlayer
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  videoURL={item.src}
                />
              ) : (
                <img 
                  src={item.src} 
                  alt={item.src} 
                  onClick={() => setSelectedImage(item.src)}
                  style={{ cursor: "pointer" }}
                />
              )}
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {selectedImage && (
        <ModalImage src={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </>
  );
};

export default Carousel;
