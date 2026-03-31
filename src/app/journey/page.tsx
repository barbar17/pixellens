import Link from "next/link";
import Image from "next/image";
import GoldLine from "@/components/GoldLine";

const stats = [
  { num: "120+", label: "Weddings\ncaptured" },
  { num: "300+", label: "Sessions\ncompleted" },
  { num: "4", label: "Years of\ncraft" },
  { num: "∞", label: "Frames\nconsidered" },
];

const values = [
  {
    num: "01", title: "Light is everything",
    body: "We don't fight the light — we study it, wait for it, and follow it. Every session begins with understanding how light moves through the space and the moment.",
  },
  {
    num: "02", title: "Moments, not poses",
    body: "The most powerful photographs are never staged. We create the conditions for genuine emotion, then step back and let the moment speak for itself.",
  },
  {
    num: "03", title: "Craft without compromise",
    body: "We obsess over every detail of post-processing, color grading, and delivery. The work isn't done when the shutter fires — it ends when every frame is perfect.",
  },
];

export default function Journey() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <div className="relative text-center px-10 pt-30 pb-24">
        <p className="text-[10px] tracking-[0.28em] uppercase text-gold font-['Montserrat'] mb-5">Our Journey</p>
        <h1 className="font-heading text-[clamp(44px,5.5vw,72px)] font-light text-[#f5f0e8] leading-[1.08] mb-2.5">
          Four years of light,<br />
          <em className="italic text-[rgba(245,240,232,0.5)]">craft, and devotion.</em>
        </h1>

        <GoldLine/>

        <p className="font-heading italic font-light text-[17px] text-[rgba(245,240,232,0.4)] tracking-[0.04em]">
          Every frame we've made has brought us here.
        </p>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-linear-to-b from-gold/50 to-transparent" />
      </div>

      <div className="grid grid-cols-2 gap-20 max-w-275 mx-auto px-14 pb-24 max-lg:grid-cols-1 max-lg:px-8">
        <div className="relative aspect-3/4 overflow-hidden">
          <Image src="/home/photography/4.jpg" alt="Founding" fill className="object-cover brightness-70 saturate-50" />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
          <span className="absolute bottom-6 left-6 font-heading text-[64px] font-light text-gold/25 leading-none tracking-[-0.02em]">2021</span>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[9px] tracking-[0.26em] uppercase text-gold font-medium font-['Montserrat'] mb-5">The Beginning</p>
          <h2 className="font-heading text-[clamp(28px,3vw,40px)] font-light text-[#f5f0e8] leading-[1.2] mb-2">
            Born from a love<br /><em className="italic text-[rgba(245,240,232,0.55)]">of honest moments.</em>
          </h2>
          <div className="w-8 h-px bg-gold opacity-50 my-5" />
          <p className="font-['Montserrat'] text-[13px] font-light leading-[1.95] text-[rgba(245,240,232,0.5)] mb-4">
            PixelLens was founded in 2021 in Bandar Lampung by two friends who shared one conviction — that photography is not about equipment, it's about seeing. What started as a small studio became something far greater than we imagined.
          </p>
          <p className="font-['Montserrat'] text-[13px] font-light leading-[1.95] text-[rgba(245,240,232,0.5)] mb-6">
            We started shooting graduation portraits for local students, learning the discipline of light and patience, frame by frame. Within six months, our first wedding booking arrived — and nothing has been the same since.
          </p>
          <blockquote className="border-l border-gold/40 pl-5">
            <p className="font-heading italic font-light text-[18px] leading-[1.6] text-[rgba(245,240,232,0.7)]">
              "We didn't set out to build a business. We set out to make photographs that mattered."
            </p>
          </blockquote>
        </div>
      </div>

      <div className="border-t border-b border-[rgba(245,240,232,0.06)] py-16 mb-24">
        <div
          className="grid grid-cols-4 gap-px max-w-275 mx-auto px-14 max-sm:grid-cols-2"
          style={{ background: "rgba(184,150,62,0.08)" }}
        >
          {stats.map(({ num, label }) => (
            <div key={num} className="bg-[#0a0a0a] py-9 px-10 text-center">
              <p className="font-heading text-[52px] font-light text-gold leading-none mb-2 tracking-[-0.02em]">{num}</p>
              <p className="text-[9px] tracking-[0.2em] uppercase text-[rgba(245,240,232,0.3)] font-['Montserrat'] leading-[1.6] whitespace-pre-line">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#0d0d0d] border-t border-b border-gold/10 py-24">
        <div className="max-w-275 mx-auto px-14 max-lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.28em] uppercase text-gold font-['Montserrat'] mb-4">Our Philosophy</p>
            <h2 className="font-heading text-[clamp(28px,3vw,42px)] font-light text-[#f5f0e8]">What we believe in</h2>
            <div className="flex items-center justify-center gap-2.5 mt-5">
              <span className="block w-10 h-px bg-gold opacity-40" />
              <span className="text-gold text-[9px] opacity-60">◆</span>
              <span className="block w-10 h-px bg-gold opacity-40" />
            </div>
          </div>
          <div
            className="grid grid-cols-3 gap-px max-lg:grid-cols-1"
            style={{ background: "rgba(184,150,62,0.08)" }}
          >
            {values.map(({ num, title, body }) => (
              <div key={num} className="bg-[#0d0d0d] p-11">
                <p className="font-heading text-[48px] font-light text-gold/15 leading-none mb-4">{num}</p>
                <h3 className="font-heading text-[22px] font-light text-[#f5f0e8] mb-3.5">{title}</h3>
                <p className="font-['Montserrat'] text-[12px] font-light leading-[1.9] text-[rgba(245,240,232,0.4)]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center px-10 py-24">
        <GoldLine margin="mt-0 mb-12"/>
        <h2 className="font-heading text-[clamp(32px,4vw,52px)] font-light text-[#f5f0e8] leading-[1.15] mb-9">
          Ready to add your story<br />
          <em className="italic text-[rgba(245,240,232,0.5)]">to ours?</em>
        </h2>
        <Link
          href="/contact"
          className="inline-block font-['Montserrat'] text-[10px] tracking-[0.28em] uppercase bg-gold text-black px-9 py-4 font-medium hover:bg-[#caa84e] hover:-translate-y-px transition-all duration-300"
        >
          Work With Us
        </Link>
      </div>

    </main>
  );
}