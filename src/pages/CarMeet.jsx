import { useState, useEffect } from "react";
import PageLayout from "../components/PageLayout.jsx";
import CarMeetMain from "../assets/carmeet/2025CarMeetMain.webp";
import FirstPlaceImg from "../assets/carmeet/550i.webp";
import SecondPlaceImg from "../assets/carmeet/KamuriiCamry.webp";
import ThirdPlaceImg from "../assets/carmeet/datsun200sx.webp";
import spr26qr from "../assets/carmeet/spr26qr.webp";

const MEET_WINNERS = [
  {
    rank: "1",
    suffix: "st",
    name: "Amann",
    car: "2019 BMW M550i",
    image: FirstPlaceImg,
    highRes: FirstPlaceImg,
  },
  {
    rank: "2",
    suffix: "nd",
    name: "Ricky",
    car: "2009 Toyota Camry",
    image: SecondPlaceImg,
    highRes: SecondPlaceImg,
  },
  {
    rank: "3",
    suffix: "rd",
    name: "Ash",
    car: "1987 Nissan Datsun 200SX S12",
    image: ThirdPlaceImg,
    highRes: ThirdPlaceImg,
  },
];

const GALLERY_IMAGES = Array.from({ length: 20 }, (_, i) => ({
  src: new URL(`../assets/carmeet/gallery/${i + 1}.webp`, import.meta.url).href,
  highRes: new URL(`../assets/carmeet/highres/${i + 1}hr.webp`, import.meta.url)
    .href,
}));

function Lightbox({ images, initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center text-white/80 z-50">
        <span className="text-sm font-mono tracking-widest">
          {currentIndex + 1} / {images.length}
        </span>
        <div className="flex gap-6">
          <a
            href={images[currentIndex].highRes}
            download
            onClick={(e) => e.stopPropagation()}
            className="hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>
          <button
            onClick={onClose}
            className="hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white transition-colors hidden lg:block z-50"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>

      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white transition-colors hidden lg:block z-50"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>

      <div className="w-full h-full p-4 lg:p-12 flex items-center justify-center">
        <img
          src={images[currentIndex].highRes}
          alt="Full Screen View"
          className="max-w-full max-h-full object-contain shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}

function CarMeet() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState(GALLERY_IMAGES);

  const openLightbox = (index, imageList) => {
    setCurrentImages(imageList);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <PageLayout wrapperClassName="rr-page" mainClassName="flex-1 flex flex-col">
      <div className="relative w-full h-[60vh] lg:h-[75vh] -mt-24 lg:-mt-24">
        <img
          src={CarMeetMain}
          alt="Campus Car Meet Group Photo"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex justify-center pt-30">
          <h1 className="rr-h1 tracking-wide px-4 drop-shadow-lg text-center">
            Campus Car Meet
          </h1>
        </div>
      </div>

      <div className="bg-black text-white w-full py-8 pb-2 px-6 flex flex-col items-center text-center space-y-12">
        <p className="max-w-6xl text-lg lg:text-xl leading-relaxed text-white">
          We host an on-campus car meet every semester as a way for students,
          local car enthusiasts, and other colleges to connect through our
          shared love for cars. If you have a cool ride that you want to show
          off, or if you just want to chill with us and check out cool cars,
          feel free to stop by!
        </p>
      </div>

      <div className="bg-black text-white w-full pb-16 px-6 flex flex-col items-center">
        <div className="w-full max-w-7xl border-t border-gray-700 my-16"></div>
        <h2 className="text-3xl lg:text-5xl font-bold mb-16 text-center">
          Fall 2025 Meet Winners!
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 w-full max-w-7xl mb-24">
          {MEET_WINNERS.map((winner, index) => (
            <div
              key={winner.rank}
              className="flex flex-col items-center text-center space-y-6 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openLightbox(index, MEET_WINNERS)}
            >
              <h3 className="text-3xl lg:text-4xl font-bold italic tracking-wide">
                {winner.rank}
                <sup className="text-2xl lg:text-3xl not-italic -top-2 relative">
                  {winner.suffix}
                </sup>{" "}
                Place
              </h3>
              <div className="w-full aspect-video overflow-hidden rounded-sm shadow-lg">
                <img
                  src={winner.image}
                  alt="Winner Car"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <p className="text-xl lg:text-2xl font-medium text-white">
                  {winner.name}
                </p>
                <p className="text-lg lg:text-xl text-gray-300 font-light">
                  {winner.car}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black text-white w-full pb-6 px-4 flex flex-col items-center">
        <h2 className="text-4xl lg:text-6xl font-bold mb-12 text-center">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-[1600px]">
          {GALLERY_IMAGES.map((img, index) => (
            <div
              key={index}
              className="w-full aspect-[4/3] overflow-hidden bg-gray-900 group relative cursor-pointer"
              onClick={() => openLightbox(index, GALLERY_IMAGES)}
            >
              <img
                src={img.src}
                alt={`Car Meet Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          isOpen={lightboxOpen}
          images={currentImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </PageLayout>
  );
}

export default CarMeet;
