"use client";

import Image from "next/image";
import { useRef } from "react";

const photos = [
  ["LUC_0015.jpg", "Integrantes del equipo de Packlin revisan documentación de producción."],
  ["LUC_9773.jpg", "Lote de componentes metálicos fabricados en la planta de Packlin."],
  ["LUC_9794.jpg", "Colada de metal fundido en un molde durante el proceso de fabricación."],
  ["LUC_9954.jpg", "Vertido de metal fundido en un molde de producción."],
  ["LUC_9834.jpg", "Pieza metálica calentada al rojo dentro de un horno industrial."],
  ["LUC_9936.jpg", "Operario trabaja junto a una prensa industrial con protección auditiva."],
  ["LUC_9992.jpg", "Operario de Packlin supervisa una máquina de producción."],
  ["LUC_9839.jpg", "Pieza metálica al rojo apoyada sobre una matriz de trabajo."],
  ["LUC_9796.jpg", "Operario de Packlin trabaja con una pieza en una máquina de planta."],
  ["LUC_9860.jpg", "Operario con protección auditiva organiza componentes de latón."],
  ["LUC_9866.jpg", "Retrato de un integrante del equipo de Packlin en la planta."],
  ["LUC_9891.jpg", "Operario con guantes manipula componentes metálicos en una bandeja."],
  ["LUC_9906.jpg", "Integrante del equipo de Packlin durante una tarea de producción."],
  ["LUC_9915.jpg", "Retrato de un integrante del equipo de Packlin."],
  ["LUC_9920.jpg", "Operario selecciona componentes metálicos terminados."],
  ["LUC_9938.jpg", "Integrante del equipo de Packlin en la planta."],
  ["LUC_9952.jpg", "Operario vierte metal fundido en un molde de fabricación."],
  ["LUC_9812.jpg", "Operario inspecciona una pieza metálica junto a una máquina."],
  ["LUC_9976.jpg", "Colada de metal fundido desde un crisol hacia un molde."],
  ["LUC_9977.jpg", "Integrante del equipo de Packlin trabaja junto a componentes metálicos."],
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
          {photos.map(([photo, alt]) => (
            <article className="photo-slide" key={photo}>
              <div className="photo-frame">
                <Image
                  src={`/Fotos/${photo}`}
                  alt={alt}
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
