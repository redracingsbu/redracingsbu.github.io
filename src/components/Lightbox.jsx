import { useEffect, useState } from "react";

const stopClick = (e) => e.stopPropagation();

function Icon({ type, className = "w-6 h-6" }) {
  const paths = {
    close: "M6 18L18 6M6 6l12 12",
    download: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
    next: "M14 5l7 7m0 0l-7 7m7-7H3",
    prev: "M10 19l-7-7m0 0l7-7m-7 7h18",
  };

  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={paths[type]}
      />
    </svg>
  );
}

function Lightbox({ images, initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const currentImage = images[currentIndex];
  const label = currentImage.alt || "Full Screen View";

  const moveImage = (direction, e) => {
    e?.stopPropagation();
    setCurrentIndex(
      (prev) => (prev + direction + images.length) % images.length,
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") moveImage(1);
      if (e.key === "ArrowLeft") moveImage(-1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center text-white/80 z-50">
        <span className="text-sm font-mono tracking-widest">
          {currentIndex + 1} / {images.length}
        </span>
        <div className="flex gap-6">
          <a
            href={currentImage.highRes}
            download
            onClick={stopClick}
            className="hover:text-white transition-colors"
            aria-label="Download image"
          >
            <Icon type="download" />
          </a>
          <button
            type="button"
            onClick={onClose}
            className="hover:text-white transition-colors"
            aria-label="Close image"
          >
            <Icon type="close" />
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={(e) => moveImage(-1, e)}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white transition-colors hidden lg:block z-50"
        aria-label="Previous image"
      >
        <Icon type="prev" className="w-8 h-8" />
      </button>

      <button
        type="button"
        onClick={(e) => moveImage(1, e)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white transition-colors hidden lg:block z-50"
        aria-label="Next image"
      >
        <Icon type="next" className="w-8 h-8" />
      </button>

      <div className="w-full h-full p-4 lg:p-12 flex items-center justify-center">
        <img
          src={currentImage.highRes}
          alt={label}
          className="max-w-full max-h-full object-contain shadow-2xl"
          onClick={stopClick}
        />
      </div>
    </div>
  );
}

export default Lightbox;
