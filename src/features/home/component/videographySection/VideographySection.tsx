"use client";

import GoldLine from "@/components/GoldLine";
import VideographyCard from "./VideographyCard";
import { PACKAGES } from "@/lib/var";

export default function VideographySection() {
  return (
    <section className="w-full md:py-24 py-16">
      <div className="text-center mb-12">
        <p className="text-[11px] md:text-[12px] tracking-[0.35em] uppercase text-gold mb-5 font-light">
          Our Services
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-light text-[#f5f0e8] mb-3 text-center">
          Cinematic Storytelling
        </h2>
        <p className="font-heading text-base scale md:text-lg italic font-light text-neutral-500 tracking-wide">
          Life moves. We make it last.
        </p>
        <GoldLine scale='75' margin='mt-5' />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-0.5 max-w-7xl mx-auto px-10">
        {PACKAGES.map((vid, index) => {
          if (index < 4) return (
            <VideographyCard key={vid.alt} href={vid.href} src={vid.portofolio[0]} alt={vid.alt} title={vid.name} duration={"8"} />
          )
        })}
      </div>
    </section>
  );
}