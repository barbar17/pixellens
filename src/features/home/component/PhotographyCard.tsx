"use client";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  title: string;
  index: string;
  href?: string;
}

const PhotographyCard = ({ src, alt, title, index, href = "#" }: Props) => {
  return (
    <a href={href} className="relative overflow-hidden cursor-pointer aspect-2/3 block group">
      <Image src={src} alt={alt} fill className="object-cover transition-all duration-700 ease-out brightness-65 saturate-50 group-hover:scale-105 group-hover:brightness-35 group-hover:saturate-30" />
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-transparent to-transparent" />
      <span className="absolute top-7 left-8 text-[11px] tracking-[0.2em] text-gold font-light opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
        {index}
      </span>
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start px-8 pb-10">
        <div className="w-8 h-px bg-gold mb-4 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
        <h3 className="font-heading text-[28px] font-light tracking-widest text-[#f5f0e8] mb-0 group-hover:mb-5 transition-all duration-400">
          {title}
        </h3>
        <div className="flex items-center gap-3 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 delay-150">
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium">
            Explore
          </span>
          <div className="w-6 h-px bg-gold" />
        </div>
      </div>
    </a>
  );
};

export default PhotographyCard;