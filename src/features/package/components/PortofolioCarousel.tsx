"use client";
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const PortofolioCarousel = ({ portofolio, name }: { portofolio: string[], name: string }) => {
  return (
    <>
    <Carousel
      opts={{
        align: "center",
        loop: true,
        dragFree: true,
        containScroll: "trimSnaps",
      }}
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: false,
        })
      ]}
    >
      <CarouselContent>
        {
          portofolio.map((src, i) => (
            <CarouselItem key={i} className="basis-1/2 flex items-center justify-center">
              <div className="group break-inside-avoid mb-0.75 relative overflow-hidden h-full">
                <Image
                  src={src}
                  alt={`${name} ${i + 1}`}
                  width={500}
                  height={700}
                  className={`w-full h-full object-cover brightness-[0.72] saturate-[0.45] group-hover:scale-[1.05] group-hover:brightness-[0.45] group-hover:saturate-[0.25] transition-all duration-600 `}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <div className="w-0 h-px bg-gold group-hover:w-10 transition-all duration-400 delay-100 mb-1" />
                  <span className="font-heading text-[12px] tracking-[0.18em] uppercase text-[rgba(245,240,232,0.7)]">{name}</span>
                </div>
              </div>
            </CarouselItem>
          ))
        }
      </CarouselContent>
    </Carousel>
    </>
  )
}

export default PortofolioCarousel