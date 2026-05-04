import PortofolioCarousel from "@/features/package/components/PortofolioCarousel";
import { PACKAGES } from "@/lib/var";
import Link from "next/link";
import { RxOpenInNewWindow } from "react-icons/rx";

export default function Package() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <div className="relative text-center px-10 pt-27.5 pb-20">
        <p className="font-heading text-[10px] tracking-[0.28em] uppercase text-gold mb-4">Fine Art Photography</p>
        <h1 className="font-heading text-[clamp(42px,5vw,68px)] font-light text-[#f5f0e8] leading-[1.08] mb-2">
          Every frame,<br /><em className="italic text-[rgba(245,240,232,0.5)]">a legacy.</em>
        </h1>
        <div className="flex items-center justify-center gap-2.5 my-5">
          <span className="block w-9 h-px bg-gold opacity-40" />
          <span className="text-gold text-[9px] opacity-60">◆</span>
          <span className="block w-9 h-px bg-gold opacity-40" />
        </div>
        <p className="font-heading italic font-light text-[17px] text-[rgba(245,240,232,0.4)]">
          Captured with intention. Delivered with precision.
        </p>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-14 bg-linear-to-b from-gold/45 to-transparent" />
      </div>

      {PACKAGES.map(({ name, portofolio, packages, igHref }, index) => (
        <div key={name} id={name} className="border-t border-[rgba(245,240,232,0.06)] last:border-b">
          <div className="flex items-center gap-5 px-14 py-10 border-b border-[rgba(245,240,232,0.04)] max-lg:px-8">
            <span className="font-heading text-[10px] md:text-[12px] font-light text-gold/40 tracking-[0.08em]">{String(index).padStart(2, "0")}</span>
            <h2 className="font-heading text-[20px] md:text-[32px] font-light text-[#f5f0e8] tracking-[0.02em]">{name}</h2>
            <div className="flex-1 h-px bg-linear-to-r from-gold/20 to-transparent" />
            <span className="font-heading text-[8px] md:text-xs tracking-[0.2em] uppercase text-gold/50 border border-gold/15 px-2 md:px-2.5 py-1 md:py-1.5">
              Photography
            </span>
          </div>

          <div className="grid grid-cols-2 max-xl:grid-cols-1">
            <div className="px-14 pt-9 pb-12 border-r border-gold/8 max-xl:border-r-0 max-xl:border-b max-lg:px-8">
              <p className="font-heading text-[9px] tracking-[0.22em] uppercase text-gold/60 font-medium mb-5">Portfolio</p>
              <div className="flex flex-col gap-8">
                <PortofolioCarousel
                  portofolio={portofolio}
                  name={name}
                />
                <Link
                  href={igHref}
                  target="_blank"
                  className="ml-2 text-[10px] tracking-[0.25em] uppercase font-medium
                      text-gold border border-gold/40 px-5 py-2.5
                      hover:bg-gold hover:text-black hover:border-gold
                      transition-all duration-250"
                >
                  <div className="flex flex-row gap-1 w-full items-center justify-end">
                    <span>View More On Instagram</span>
                    <RxOpenInNewWindow />
                  </div>
                </Link>
              </div>
            </div>

            <div className="px-12 pt-9 pb-12 flex flex-col max-lg:px-8">
              <p className="font-heading text-sm tracking-[0.22em] uppercase text-gold/60 font-medium mb-5">Packages</p>

              {packages.map(({ name: pkgName, price, includes }) => (
                <Link
                  key={pkgName}
                  href={`/contact?p=${name}&t=${pkgName}`}
                  className="group relative border border-[rgba(245,240,232,0.06)] p-5 mb-2.5 overflow-hidden hover:border-gold/22 hover:bg-gold/3 transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-gold to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />

                  <div className="flex items-start justify-between gap-2.5 mb-3">
                    <span className="font-heading text-xl font-light text-[#f5f0e8]">{pkgName}</span>
                    <div className="text-right shrink-0">
                      <span className="block font-heading text-[12px] tracking-[0.14em] uppercase text-[rgba(245,240,232,0.55)] mb-0.5">Starting from</span>
                      <span className="font-heading text-xl font-light text-gold">{price}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                    {
                      includes.map((item) => (
                        <div key={item} className="flex items-center gap-2 font-heading text-sm text-[rgba(245,240,232,0.50)] tracking-[0.03em]">
                          <span className="w-0.75 h-0.75 rounded-full bg-gold/45 shrink-0" />
                          {item}
                        </div>
                      ))
                    }
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </div>
      ))}

      <div className="text-center px-10 py-20">
        <div className="flex items-center justify-center gap-2.5 mb-5">
          <span className="block w-9 h-px bg-gold opacity-40" />
          <span className="text-gold text-[9px] opacity-60">◆</span>
          <span className="block w-9 h-px bg-gold opacity-40" />
        </div>
        <h2 className="font-heading text-[clamp(28px,3.5vw,46px)] font-light text-[#f5f0e8] leading-[1.15] mb-9">
          Not sure which package?<br />
          <em className="italic text-[rgba(245,240,232,0.45)]">Let's talk.</em>
        </h2>
        <Link
          href="/contact"
          className="inline-block font-heading text-[10px] tracking-[0.26em] uppercase bg-gold text-black px-9 py-4 font-medium hover:bg-[#caa84e] hover:-translate-y-px transition-all duration-300"
        >
          Work With Us
        </Link>
      </div>

    </main>
  );
}