import "./ModalImage.css";
import { useEffect } from "react";

interface ModalImageProps {
  src: string;
  onClose: () => void;
}

const ModalImage = ({ src, onClose }: ModalImageProps) => {
  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="modal-image-overlay" onClick={onClose}>
      <button className="modal-image-close" onClick={onClose}>
        <i className="fa-solid fa-xmark"></i>
      </button>
      <div className="modal-image-content" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt="Fullscreen" />
      </div>
    </div>
  );
};

export default ModalImage;
