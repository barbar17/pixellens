import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="relative min-h-[44vh] flex mt-10 items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <div
        className="absolute inset-0 bg-cover bg-position-[center_30%] brightness-[0.18] saturate-30 scale-[1.03] hover:scale-100 transition-transform duration-12000 ease-linear"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_20%,rgba(0,0,0,0.72)_100%)]" />
      <div className="absolute top-0 left-0 right-0 h-30 bg-linear-to-b from-[#0a0a0a] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-30 bg-linear-to-t from-[#0a0a0a] to-transparent" />

      <div className="absolute top-0 left-[10%] right-[10%] h-px bg-linear-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-linear-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative text-center flex flex-col items-center px-10 py-18">
        <p className="font-heading text-[10px] tracking-[0.28em] uppercase text-gold font-normal mb-7">
          Work With Us
        </p>

        <h2 className="font-heading text-[clamp(40px,5.5vw,72px)] font-light leading-[1.08] text-[#f5f0e8] tracking-[0.01em] mb-1.5">
          Every great story<br />
          <em className="italic text-[rgba(245,240,232,0.6)]">deserves to be told.</em>
        </h2>

        <div className="flex items-center gap-2.5 my-7">
          <span className="block w-12 h-px bg-gold opacity-40" />
          <span className="text-gold text-[10px] opacity-65">◆</span>
          <span className="block w-12 h-px bg-gold opacity-40" />
        </div>

        <p className="font-heading italic font-light text-[clamp(15px,1.6vw,18px)] text-[rgba(245,240,232,0.5)] mb-12 tracking-[0.03em]">
          Let's craft something you'll carry with you forever.
        </p>

        <div className="flex items-center gap-6 flex-wrap justify-center">
          <Link
            href="/contact"
            className="font-heading text-[10px] tracking-[0.28em] uppercase bg-gold text-black px-9 py-4 font-medium hover:bg-[#caa84e] hover:-translate-y-0.5 hover:tracking-[0.34em] transition-all duration-300"
          >
            Book Your Session
          </Link>
        </div>
      </div>

      <p className="absolute bottom-7 font-heading text-[9px] tracking-[0.2em] uppercase text-[rgba(245,240,232,0.18)]">
        Lampung, Indonesia · Est. 2021
      </p>

    </section>
  );
}