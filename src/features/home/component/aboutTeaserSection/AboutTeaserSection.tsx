// components/AboutTeaser.tsx
import Image from "next/image";
import Link from "next/link";

const stats = [
  { num: "120+", label: "Weddings" },
  { num: "4",    label: "Years of craft" },
  { num: "∞",    label: "Frames considered" },
];

export default function AboutTeaser() {
  return (
    <section className="grid grid-cols-2 min-h-[86vh] overflow-hidden bg-[#0a0a0a] max-lg:grid-cols-1">
      <div className="relative overflow-hidden group max-lg:aspect-4/3">
        <Image
          src="/hero.jpg"
          alt="Photographer at work"
          fill
          className="object-cover brightness-[0.72] saturate-50 scale-[1.04] group-hover:scale-100 transition-transform duration-9000 ease-linear"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,transparent_40%,rgba(0,0,0,0.45)_100%)]" />
        <div className="absolute top-[15%] bottom-[15%] right-0 w-px bg-linear-to-b from-transparent via-gold/35 to-transparent max-lg:hidden" />
        <p className="absolute bottom-9 left-9 text-[9px] tracking-[0.22em] uppercase text-gold/60 font-heading">
          Behind the lens — PixelLens Studio
        </p>
      </div>

      <div className="relative flex flex-col justify-center px-20 py-20 max-lg:px-10 max-lg:py-16">
        <span className="absolute top-1/2 right-12 -translate-y-1/2 font-heading text-[220px] font-light text-gold/4 leading-none pointer-events-none select-none tracking-[-0.05em]">
          PL
        </span>

        <p className="text-[10px] tracking-[0.24em] uppercase text-gold font-heading font-normal mb-5">
          Our Craft
        </p>
        <h2 className="font-heading text-[clamp(36px,3.8vw,54px)] font-light leading-[1.12] text-[#f5f0e8] mb-2.5">
          Pixel doesn't lie.<br />
          <em className="italic text-[rgba(245,240,232,0.65)]">Neither do we.</em>
        </h2>
        <div className="flex items-center gap-2.5 my-5">
          <span className="block w-8 h-px bg-gold opacity-45" />
          <span className="text-gold text-[9px] opacity-65">◆</span>
          <span className="block w-8 h-px bg-gold opacity-45" />
        </div>

        <p className="text-[13px] font-light leading-[1.9] text-[rgba(245,240,232,0.55)] max-w-105 mb-4">
          At PixelLens, photography and film are not services, they are a discipline. Every frame is a deliberate decision: the angle of light, the weight of silence before a shutter fires, the precise moment a story becomes visible.
        </p>

        <blockquote className="border-l border-gold/40 pl-5 mb-9">
          <p className="font-heading italic font-light text-[18px] leading-[1.6] text-[rgba(245,240,232,0.75)]">
            "We obsess over the details most people never notice — because those are the details you'll feel forever."
          </p>
        </blockquote>

        <div className="flex gap-9 mb-9 pb-9 border-b border-[rgba(245,240,232,0.07)]">
          {stats.map(({ num, label }) => (
            <div key={label}>
              <p className="font-heading text-[32px] font-light text-gold leading-none mb-1">{num}</p>
              <p className="text-[9px] tracking-[0.18em] uppercase text-[rgba(245,240,232,0.35)] font-heading">{label}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <Link
            href="/about"
            className="group/ghost flex items-center gap-2.5 font-heading text-[10px] tracking-[0.25em] uppercase text-gold transition-all duration-300"
          >
            Read the story
            <span className="block w-6 h-px bg-gold group-hover/ghost:w-9 transition-all duration-300" />
          </Link>
        </div>

      </div>
    </section>
  );
}