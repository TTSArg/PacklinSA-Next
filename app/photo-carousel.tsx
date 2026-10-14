"use client";

import Image from "next/image";
import { useRef } from "react";

const photos = [
  "LUC_0015.jpg",
  "LUC_9773.jpg",
  "LUC_9794.jpg",
  "LUC_9954.jpg",
  "LUC_9834.jpg",
  "LUC_9936.jpg",
  "LUC_9992.jpg",
  "LUC_9839.jpg",
  "LUC_9860.jpg",
  "LUC_9866.jpg",
  "LUC_9891.jpg",
  "LUC_9906.jpg",
  "LUC_9915.jpg",
  "LUC_9920.jpg",
  "LUC_9938.jpg",
  "LUC_9952.jpg",
  "LUC_9812.jpg",
  "LUC_9976.jpg",
  "LUC_9977.jpg",
];

export default function PhotoCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollPhotos(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;

    const firstSlide = track.querySelector<HTMLElement>(".photo-slide");
    const step = firstSlide ? firstSlide.getBoundingClientRect().width + 16 : track.clientWidth;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  }

  return (
    <section className="section photo-gallery" aria-labelledby="photo-gallery-title">
      <div className="container">
        <div className="photo-gallery-heading">
          <div className="section-heading">
            <p className="eyebrow">Packlin en imágenes</p>
            <h2 id="photo-gallery-title">La planta, el equipo y nuestro trabajo.</h2>
          </div>
          <div className="photo-gallery-controls" aria-label="Controles de la galería">
            <button className="photo-gallery-control" type="button" aria-label="Fotos anteriores" onClick={() => scrollPhotos(-1)}>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button className="photo-gallery-control" type="button" aria-label="Fotos siguientes" onClick={() => scrollPhotos(1)}>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="photo-carousel-track" ref={trackRef} tabIndex={0} aria-label="Fotos de Packlin">
          {photos.map((photo, index) => (
            <article className="photo-slide" key={photo}>
              <div className="photo-frame">
                <Image
                  src={`/Fotos/${photo}`}
                  alt={`Fotografía ${index + 1} de Packlin`}
                  fill
                  sizes="(max-width: 640px) 52vw, (max-width: 900px) 30vw, 20vw"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
