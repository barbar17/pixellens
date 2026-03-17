import PhotographyCard from './PhotographyCard'

const photoCardMock = [
  { src: "/home/photography/1.jpg", alt: "graduation", title: "Graduation", href: "/" },
  { src: "/home/photography/2.jpg", alt: "wedding", title: "Wedding", href: "/" },
  { src: "/home/photography/3.jpg", alt: "pre-wedding", title: "Pre Wedding", href: "/" },
  { src: "/home/photography/4.jpg", alt: "others", title: "Others", href: "/" },
]

const PhotographySection = () => {
  return (
    <section className="w-full py-24">
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
        <div className="flex items-center justify-center mt-5">
          <span className="block w-10 h-px bg-gold opacity-50" />
          <span className="text-gold text-[10px] opacity-70 mx-2">◆</span>
          <span className="block w-10 h-px bg-gold opacity-50" />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-0.5 max-w-7xl mx-auto px-10">
        {
          photoCardMock.map((photo, index) => (
            <PhotographyCard key={photo.alt} src={photo.src} alt={photo.alt} title={photo.title} index={String(index + 1).padStart(2, "0")} href={photo.href} />
          ))
        }
      </div>
    </section>
  )
}

export default PhotographySection