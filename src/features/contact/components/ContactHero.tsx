const ContactHero = () => {
  return (
    <div className="relative text-center px-10 pt-30 pb-20">
      <p className="text-[10px] tracking-[0.28em] uppercase text-gold font-normal mb-5">
        Work With Us
      </p>
      <h1 className="font-heading text-[clamp(42px,5vw,68px)] font-light text-[#f5f0e8] leading-[1.08] mb-4">
        Let's create something<br />
        <em className="italic text-[rgba(245,240,232,0.55)]">worth remembering.</em>
      </h1>
      <div className="flex items-center justify-center gap-2.5 my-6">
        <span className="block w-9 h-px bg-gold opacity-40" />
        <span className="text-gold text-[9px] opacity-60">◆</span>
        <span className="block w-9 h-px bg-gold opacity-40" />
      </div>
      <p className="font-heading italic font-light text-[17px] text-[rgba(245,240,232,0.45)] tracking-[0.03em]">
        Tell us about your story — we'll take care of the rest.
      </p>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-12 bg-linear-to-b from-gold/50 to-transparent" />
    </div>
  )
}

export default ContactHero