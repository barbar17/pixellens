import GoldLine from '@/components/GoldLine'
import PhotographyCard from './PhotographyCard'
import { PACKAGES } from '@/lib/var'

const PhotographySection = () => {
  return (
    <section className="w-full md:py-24 py-16">
      <div className="flex flex-col items-center mb-16">
        <p className="text-[11px] md:text-[12px] tracking-[0.35em] uppercase text-gold mb-5 font-light">
          Our Services
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-light text-[#f5f0e8] mb-3 text-center">
          Fine Art Photography
        </h2>
        <p className="font-heading text-base md:text-lg italic font-light text-neutral-500 tracking-wide">
          Your legacy, framed in perfection.
        </p>

        <GoldLine scale='75' margin='mt-5' />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-0.5 max-w-7xl mx-auto px-10">
        {
          PACKAGES.map((photo, index) => {
            if (index < 4) return (
              <PhotographyCard key={photo.alt} src={photo.portofolio[0]} alt={photo.alt} title={photo.name} index={String(index + 1).padStart(2, "0")} href={photo.href} />
            )
          })
        }
      </div>
    </section>
  )
}

export default PhotographySection