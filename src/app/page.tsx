import PhotographyCard from "@/features/home/component/PhotographyCard";

export default function Home() {
  return (
    <div className="min-h-screen min-w-full flex flex-col items-center justify-center gap-8">
      <section className="relative w-full h-dvh overflow-hidden">
        <div className="absolute inset-0 bg-[url(/hero.jpg)] bg-cover bg-center bg-fixed brightness-55 saturate-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.7)_100%)]" />
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-black/40" />
        <span className="absolute top-7 left-9 text-[10px] tracking-[0.2em] text-gold/50 font-light hidden md:block">
          Fine Art Photography
        </span>
        <span className="absolute top-7 right-9 text-[10px] tracking-[0.2em] text-gold/50 font-light hidden md:block">
          Lampung, Indonesia
        </span>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold font-light mb-5">
            PixelLens Studio
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-light text-[#f5f0e8] leading-tight tracking-wide mb-0">
            Capture the<br />Moment Forever
          </h1>
          <div className="flex items-center gap-4 my-6">
            <div className="w-12 h-px bg-gold opacity-60" />
            <div className="w-1.5 h-1.5 bg-gold rotate-45 opacity-80" />
            <div className="w-12 h-px bg-gold opacity-60" />
          </div>

          <p className="font-heading text-base italic font-light text-[#c8c0b0] tracking-wide mb-10">
            Memories through the lens, preserved to its pixel.
          </p>

          <div className="flex items-center gap-6">
            <a href="/portfolio" className="text-[10px] tracking-[0.25em] uppercase font-medium bg-gold text-black px-8 py-3.5 hover:bg-gold/80 transition-colors duration-300">
              View Our Work
            </a>
            <a href="/contact" className="text-[10px] tracking-[0.25em] uppercase font-light text-[#f5f0e8] border border-white/30 px-8 py-3.5 hover:border-gold hover:text-gold transition-all duration-300">
              Book a Session
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[9px] tracking-[0.35em] uppercase text-white/40">Scroll</span>
          <div className="w-px h-9 bg-linear-to-t from-gold/80 to-transparent animate-pulse" />
        </div>
      </section>

      <section className="w-full bg-black py-24">
        <div className="flex flex-col items-center mb-16">
          <p className="text-[12px] tracking-[0.35em] uppercase text-gold mb-5 font-light">
            Our Services
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-[#f5f0e8] mb-3 text-center">
            Fine Art Photography
          </h2>
          <p className="font-heading text-lg italic font-light text-neutral-500 tracking-wide">
            Your legacy, framed in perfection.
          </p>
          <div className="w-14 h-px bg-gold opacity-40 mt-12" />
        </div>

        <div className="grid grid-cols-4 gap-0.5 max-w-7xl mx-auto px-10">
          <PhotographyCard src="/home/photography/1.jpg" alt="graduation" title="Graduation" index="01" href="/" />
          <PhotographyCard src="/home/photography/2.jpg" alt="wedding" title="Wedding" index="02" href="/" />
          <PhotographyCard src="/home/photography/3.jpg" alt="pre-wedding" title="Pre Wedding" index="03" href="/" />
          <PhotographyCard src="/home/photography/4.jpg" alt="others" title="Others" index="04" href="/" />
        </div>
      </section>

      <section className="w-full bg-black py-24">
        <div className="flex flex-col items-center mb-16">
          <p className="text-[12px] tracking-[0.35em] uppercase text-gold mb-5 font-light">
            Our Services
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-[#f5f0e8] mb-3 text-center">
            Cinematic Storytelling
          </h2>
          <p className="font-heading text-lg italic font-light text-neutral-500 tracking-wide">
            Life moves. We make it last.
          </p>
          <div className="w-14 h-px bg-gold opacity-40 mt-12" />
        </div>
      </section>
    </div>
  );
}
