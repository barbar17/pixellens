import Image from 'next/image'
import { TVideographyCard } from '../../types/VideographyCardTypes'
import { BsClockHistory } from "react-icons/bs";
import { FaFilm } from "react-icons/fa";

const VideographyCard = ({ href, src, alt, title, duration }: TVideographyCard) => {
  return (
    <a href={href} className="relative overflow-hidden cursor-pointer aspect-2/3 block group">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-all duration-700 ease-out brightness-60 saturate-40 group-hover:scale-105 group-hover:brightness-35 group-hover:saturate-25"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/88 via-transparent to-transparent" />

      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-600"
        style={{
          background: "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px)",
        }}
      />

      <span className="absolute top-6 right-7 flex items-center gap-1.5 text-[10px] tracking-[0.22em] text-gold font-light uppercase opacity-0 -translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
        <BsClockHistory />
        {duration}
      </span>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-13 h-13 border border-gold/55 rounded-full flex items-center justify-center opacity-0 scale-[0.6] group-hover:opacity-100 group-hover:scale-100 transition-all duration-450 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
        <svg width="13" height="15" viewBox="0 0 12 14" fill="#b8963e" className="ml-1">
          <path d="M0 0L12 7L0 14V0Z" />
        </svg>
        <div className="absolute -inset-2 border border-gold/18 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start px-7 pb-8">
        <div
          className="w-8 h-px bg-gold mb-3.5 transition-all duration-500"
          style={{ clipPath: "inset(0 100% 0 0)" }}
        />
        <h3 className="font-heading text-[26px] font-light tracking-[0.06em] text-[#f5f0e8] italic mb-0 group-hover:mb-4 transition-all duration-400">
          {title}
        </h3>
        <div className="flex items-center gap-2 opacity-0 translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 delay-150">
          <div className="flex flex-row gap-2 text-[10px] tracking-[0.3em] uppercase text-gold font-medium">
            <FaFilm className='self-center'/>
            <span>Watch Film</span>
          </div>
        </div>
      </div>
    </a>
  )
}

export default VideographyCard