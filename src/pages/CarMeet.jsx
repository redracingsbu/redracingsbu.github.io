import { useState } from "react";
import Lightbox from "../components/Lightbox.jsx";
import PageLayout from "../components/PageLayout.jsx";
import CarMeetMain from "../assets/carmeet/hero.webp";
import FirstPlaceImg from "../assets/carmeet/fall-2025/winners/1.webp";
import SecondPlaceImg from "../assets/carmeet/fall-2025/winners/2.webp";
import ThirdPlaceImg from "../assets/carmeet/fall-2025/winners/3.webp";
import Spring2026FirstPlaceImg from "../assets/carmeet/spring-2026/winners/firstPlaceSpring2026.jpg";
import Spring2026SecondPlaceImg from "../assets/carmeet/spring-2026/winners/secondPlaceSpring2026.jpg";
import Spring2026ThirdPlaceImg from "../assets/carmeet/spring-2026/winners/thirdPlaceSpring2026.jpg";

const createGalleryImages = ({ semester, count, highResName }) =>
  Array.from({ length: count }, (_, i) => {
    const imageNumber = i + 1;

    return {
      src: new URL(
        `../assets/carmeet/${semester}/gallery/${imageNumber}.webp`,
        import.meta.url
      ).href,
      highRes: new URL(
        `../assets/carmeet/${semester}/highres/${highResName(imageNumber)}`,
        import.meta.url
      ).href,
    };
  });

const FALL_2025_GALLERY_IMAGES = createGalleryImages({
  semester: "fall-2025",
  count: 20,
  highResName: (imageNumber) => `${imageNumber}hr.webp`,
});

const SPRING_2026_GALLERY_IMAGES = createGalleryImages({
  semester: "spring-2026",
  count: 20,
  highResName: (imageNumber) => `${imageNumber}.webp`,
});

const CAR_MEET_SEMESTERS = [
  {
    title: "Spring 2026 Meet",
    winners: [
      {
        rank: "1",
        suffix: "st",
        name: "Jaime",
        car: "2007 Infiniti G35 6MT",
        image: Spring2026FirstPlaceImg,
        highRes: Spring2026FirstPlaceImg,
      },
      {
        rank: "2",
        suffix: "nd",
        name: "Eric",
        car: "2023 Toyota GR86",
        image: Spring2026SecondPlaceImg,
        highRes: Spring2026SecondPlaceImg,
      },
      {
        rank: "3",
        suffix: "rd",
        name: "Alex",
        car: "2018 Subaru WRX",
        image: Spring2026ThirdPlaceImg,
        highRes: Spring2026ThirdPlaceImg,
      },
    ],
    galleryImages: SPRING_2026_GALLERY_IMAGES,
  },
  {
    title: "Fall 2025 Meet",
    winners: [
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
    ],
    galleryImages: FALL_2025_GALLERY_IMAGES,
  },
];

const SemesterArrow = ({ direction }) => (
  <svg
    className="w-7 h-7 lg:w-10 lg:h-10"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    {direction === "left" ? (
      <path d="M6 12L18 4V20L6 12Z" />
    ) : (
      <path d="M18 12L6 4V20L18 12Z" />
    )}
  </svg>
);

function CarMeet() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);
  const [semesterIndex, setSemesterIndex] = useState(0);

  const selectedSemester = CAR_MEET_SEMESTERS[semesterIndex];
  const hasWinners = selectedSemester.winners.length > 0;
  const hasGallery = selectedSemester.galleryImages.length > 0;

  const openLightbox = (index, imageList) => {
    setCurrentImages(imageList);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const goToPrevSemester = () => {
    setSemesterIndex((prev) =>
      (prev - 1 + CAR_MEET_SEMESTERS.length) % CAR_MEET_SEMESTERS.length
    );
  };

  const goToNextSemester = () => {
    setSemesterIndex((prev) => (prev + 1) % CAR_MEET_SEMESTERS.length);
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

        <div className="flex items-center justify-center gap-5 lg:gap-8 mb-16 text-center">
          <button
            type="button"
            onClick={goToPrevSemester}
            className="text-white/80 hover:text-white transition-colors p-2"
            aria-label="View previous car meet semester"
          >
            <SemesterArrow direction="left" />
          </button>
          <h2 className="text-3xl lg:text-5xl font-bold">
            {selectedSemester.title}
          </h2>
          <button
            type="button"
            onClick={goToNextSemester}
            className="text-white/80 hover:text-white transition-colors p-2"
            aria-label="View next car meet semester"
          >
            <SemesterArrow direction="right" />
          </button>
        </div>

        {hasWinners ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 w-full max-w-7xl mb-24">
            {selectedSemester.winners.map((winner, index) => (
              <div
                key={winner.rank}
                role="button"
                tabIndex={0}
                aria-label={`Open ${winner.rank}${winner.suffix} place image`}
                className="flex flex-col items-center text-center space-y-6 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openLightbox(index, selectedSemester.winners)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(index, selectedSemester.winners);
                  }
                }}
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
        ) : (
          <div className="w-full max-w-4xl mb-24 text-center">
            <p className="text-xl lg:text-2xl text-gray-300">
              Winners will be posted after this meet.
            </p>
          </div>
        )}
      </div>

      <div className="bg-black text-white w-full pb-6 px-4 flex flex-col items-center">
        <h2 className="text-4xl lg:text-6xl font-bold mb-12 text-center">
          Gallery
        </h2>
        {hasGallery ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-[1600px]">
            {selectedSemester.galleryImages.map((img, index) => (
              <div
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`Open gallery image ${index + 1}`}
                className="w-full overflow-hidden bg-black group relative cursor-pointer"
                onClick={() => openLightbox(index, selectedSemester.galleryImages)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(index, selectedSemester.galleryImages);
                  }
                }}
              >
                <img
                  src={img.src}
                  alt={`${selectedSemester.title} Gallery ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full max-w-4xl pb-16 text-center">
            <p className="text-xl lg:text-2xl text-gray-300">
              Gallery photos will be posted after this meet.
            </p>
          </div>
        )}
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
