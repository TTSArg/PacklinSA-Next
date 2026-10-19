"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 0.8;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      void video.play().catch(() => {});
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className="hero-video"
      role="img"
      aria-label="Video del proceso de colada de latón en la planta de Packlin"
      muted
      loop
      playsInline
      preload="metadata"
      poster="/Fotos/LUC_9954.jpg"
    >
      <source src="/video_horizontal.mp4" type="video/mp4" />
    </video>
  );
}
