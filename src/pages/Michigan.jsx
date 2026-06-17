import { useEffect, useRef, useState } from "react";
import Lightbox from "../components/Lightbox.jsx";
import PageLayout from "../components/PageLayout.jsx";
import heroImage from "../assets/michigan/michiganhero.webp";
import frameImage from "../assets/michigan/frame.webp";
import frameHighRes from "../assets/michigan/hr/frame.webp";

const galleryImages = Array.from({ length: 5 }, (_, i) => {
  const imageNumber = i + 1;

  return {
    src: new URL(`../assets/michigan/${imageNumber}.webp`, import.meta.url)
      .href,
    highRes: new URL(
      `../assets/michigan/hr/${imageNumber}.webp`,
      import.meta.url,
    ).href,
    alt: `Michigan 2026 Gallery ${imageNumber}`,
  };
});

const storyImage = {
  src: frameImage,
  highRes: frameHighRes,
  alt: "RedRacing team with Formula SAE frame at Michigan",
};

const topGalleryAspectClasses = [
  "aspect-[3/4]",
  "aspect-[16/9]",
  "aspect-[3/4]",
];

function Reveal({ children, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("rr-reveal-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.16 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`rr-reveal ${className}`}>
      {children}
    </div>
  );
}

function Michigan() {
  const heroRef = useRef(null);
  const lightboxImages = [storyImage, ...galleryImages];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return undefined;

    let frameId = 0;

    const updateParallax = () => {
      frameId = 0;
      const { top, height } = heroElement.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -top / height));
      heroElement.style.setProperty(
        "--michigan-hero-parallax",
        `${progress * 36 - 24}px`,
      );
    };

    const queueUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", queueUpdate);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("resize", queueUpdate);
    };
  }, []);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const renderGalleryButton = (image, imageIndex, className) => (
    <button
      key={image.alt}
      type="button"
      onClick={() => openLightbox(imageIndex + 1)}
      className={`group block w-full overflow-hidden ${className}`}
      aria-label={`Open ${image.alt}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        loading="lazy"
      />
    </button>
  );

  return (
    <PageLayout
      wrapperClassName="rr-page"
      mainClassName="flex-1 flex flex-col"
      headerProps={{ variant: "overlay", overlayFadeAfterId: "michigan-hero" }}
    >
      <section className="relative bg-black overflow-x-clip overflow-y-visible">
        <div
          id="michigan-hero"
          ref={heroRef}
          className="relative h-[50svh] overflow-hidden"
        >
          <img
            src={heroImage}
            alt="Michigan International Speedway"
            className="w-full h-[calc(100%+48px)] object-cover object-center will-change-transform"
            style={{
              transform:
                "translate3d(0, var(--michigan-hero-parallax, -24px), 0)",
            }}
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="relative z-10 text-center text-[min(11.7vw,10rem)] md:text-[min(10vw,10rem)] leading-none">
          <h1 className="rr-archivo-black absolute left-1/2 top-0 z-10 box-border w-screen -translate-x-1/2 translate-y-[calc(-100%+0.14em)] whitespace-nowrap px-0 text-center text-[1em] italic leading-none text-white md:w-full">
            Michigan 2026
          </h1>

          <div className="px-6 pt-[0.66em] pb-14 lg:pb-20">
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold italic leading-tight text-white">
              Our First Ever Formula SAE Competition!
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white px-6 lg:px-12 pb-28 lg:pb-40">
        <Reveal className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <button
            type="button"
            onClick={() => openLightbox(0)}
            className="group overflow-hidden text-left"
            aria-label="Open Michigan frame photo"
          >
            <img
              src={storyImage.src}
              alt={storyImage.alt}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </button>

          <div className="rr-body text-left space-y-6 max-w-3xl">
            <p>
              After countless late nights and more problems than we care to
              admit, RedRacing brought a welded steel frame to Formula SAE
              Michigan and competed anyway.
            </p>
            <p>
              While we didn't show up with a finished car, we showed up with a
              team. For the first time ever, we represented Stony Brook on a
              national stage against programs with decades of history.
            </p>
            <p>
              We came with a clear vision for what year two looks like. Stay
              tuned.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-black px-6 lg:px-12 pt-4 lg:pt-8 pb-28">
        <Reveal className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 lg:h-[760px] lg:grid-rows-2 lg:gap-14 xl:h-[820px]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.86fr_1.45fr_0.86fr] lg:gap-14">
            {galleryImages
              .slice(0, 3)
              .map((image, index) =>
                renderGalleryButton(
                  image,
                  index,
                  `${topGalleryAspectClasses[index]} lg:aspect-auto`,
                ),
              )}
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
            {galleryImages
              .slice(3)
              .map((image, index) =>
                renderGalleryButton(
                  image,
                  index + 3,
                  "aspect-[4/3] lg:aspect-auto",
                ),
              )}
          </div>
        </Reveal>
      </section>

      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </PageLayout>
  );
}

export default Michigan;
