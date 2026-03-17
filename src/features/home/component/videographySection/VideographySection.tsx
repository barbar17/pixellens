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
        <p className="text-[12px] tracking-[0.35em] uppercase text-gold mb-5 font-light">
          Our Services
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-light text-[#f5f0e8] mb-3 text-center">
          Cinematic Storytelling
        </h2>
        <p className="font-heading text-lg italic font-light text-neutral-500 tracking-wide">
          Life moves. We make it last.
        </p>
        <div className="flex items-center justify-center mt-5">
          <span className="block w-10 h-px bg-gold opacity-50" />
          <span className="text-gold text-[10px] opacity-70 mx-2">◆</span>
          <span className="block w-10 h-px bg-gold opacity-50" />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-0.5 max-w-7xl mx-auto px-10">
        {videoCategoriesMock.map(vid => (
          <VideographyCard key={vid.alt} href={vid.href} src={vid.src} alt={vid.alt} title={vid.title} duration={vid.duration}/>
        ))}
      </div>
    </section>
  );
}