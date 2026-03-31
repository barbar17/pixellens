import GoldLine from "@/components/GoldLine";
import Image from "next/image";
import { TJourneyStat } from "../types/OurJourneyStatTypes";

const OurJourneySection = ({stats}: {stats: TJourneyStat[]}) => {
  return (
    <>
      <div className="relative text-center px-10 pt-30 pb-24 mb-12">
        <p className="text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-gold font-['Montserrat'] mb-5">Our Journey</p>
        <h1 className="font-heading text-4xl md:text-6xl font-light text-[#f5f0e8] leading-[1.08] mb-2.5">
          Four years of light,<br />
          <em className="italic text-[rgba(245,240,232,0.5)]">craft, and devotion.</em>
        </h1>

        <GoldLine />

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
          <p className="text-[9px] md:text-[10px] tracking-[0.26em] uppercase text-gold font-medium font-['Montserrat'] mb-5">The Beginning</p>
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

      <div className="border-y border-[rgba(245,240,232,0.06)] py-18 mb-24">
  <div className="flex items-center justify-center max-w-275 mx-auto px-14 max-sm:grid max-sm:grid-cols-2 max-sm:gap-y-12">
    {stats.map(({ num, label }, i) => (
      <div key={num} className="relative flex-1 text-center px-12 max-sm:px-6">
        {i !== 0 && (
          <span className="absolute left-0 top-[15%] bottom-[15%] w-px bg-linear-to-b from-transparent via-gold/25 to-transparent max-sm:hidden" />
        )}
        <span className="font-heading text-[clamp(44px,5vw,68px)] font-light text-gold leading-none tracking-[-0.02em] block mb-3.5">
          {num}
        </span>
        <p className="font-['Montserrat'] text-[9px] tracking-[0.22em] uppercase text-[rgba(245,240,232,0.3)] leading-[1.8] whitespace-pre-line">
          {label}
        </p>
      </div>
    ))}
  </div>
</div>
    </>
  )
}

export default OurJourneySection