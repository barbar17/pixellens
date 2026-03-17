"use client";

import { TVideographyCard } from "../../types/VideographyCardTypes";
import VideographyCard from "./VideographyCard";

const videoCategoriesMock: TVideographyCard[] = [
  {
    alt: "event",
    title: "Event Coverage",
    href: "#",
    src: "/home/photography/3.jpg",
    duration: "8 min"
  },
  {
    alt: "wedding",
    title: "Wedding Film",
    href: "#",
    src: "/home/photography/1.jpg",
    duration: "8 min"
  },
  {
    alt: "pre-wedding",
    title: "Pre Wedding",
    href: "#",
    src: "/home/photography/2.jpg",
    duration: "8 min"
  },
  {
    alt: "documentary",
    title: "Documentary",
    href: "#",
    src: "/home/photography/4.jpg",
    duration: "8 min"
  },
];

export default function VideographySection() {
  return (
    <section className="w-full py-24">
      <div className="text-center mb-12">
        <p className="text-gold font-['Montserrat'] text-[11px] tracking-[0.2em] uppercase font-light mb-4">
          Our Services
        </p>
        <h2 className="font-['Cormorant_Garamond'] text-[clamp(36px,5vw,58px)] font-light text-[#f5f0e8] leading-none mb-3">
          Cinematic Storytelling
        </h2>
        <p className="font-['Cormorant_Garamond'] italic text-[clamp(15px,1.8vw,18px)] font-light text-[rgba(245,240,232,0.65)]">
          Life moves. We make it last.
        </p>
        <div className="flex items-center justify-center mt-5">
          <span className="block w-10 h-px bg-gold opacity-50" />
          <span className="text-gold text-[10px] opacity-70 mx-2">◆</span>
          <span className="block w-10 h-px bg-gold opacity-50" />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-0.5 max-w-300 mx-auto px-10 max-md:grid-cols-2 max-md:px-4">
        {videoCategoriesMock.map(vid => (
          <VideographyCard key={vid.alt} href={vid.href} src={vid.src} alt={vid.alt} title={vid.title} duration={vid.duration}/>
        ))}
      </div>
    </section>
  );
}