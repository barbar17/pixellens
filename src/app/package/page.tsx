import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    num: "01",
    name: "Wedding",
    portfolio: [
      "/home/photography/1.jpg",
      "/home/photography/2.jpg",
      "/home/photography/3.jpg",
      "/home/photography/4.jpg",
    ],
    packages: [
      {
        name: "Silver", price: "Rp 3.500.000",
        includes: ["4 hours coverage", "1 photographer", "100 edited photos", "Online gallery"],
      },
      {
        name: "Gold", price: "Rp 6.500.000",
        includes: ["8 hours coverage", "2 photographers", "300 edited photos", "Printed album", "Online gallery"],
      },
    ],
  },
  {
    num: "02",
    name: "Pre-Wedding",
    portfolio: [
      "/home/photography/1.jpg",
      "/home/photography/2.jpg",
      "/home/photography/3.jpg",
      "/home/photography/4.jpg",
    ],
    packages: [
      {
        name: "Intimate", price: "Rp 2.500.000",
        includes: ["2 hours session", "1 location", "60 edited photos"],
      },
      {
        name: "Cinematic", price: "Rp 4.500.000",
        includes: ["4 hours session", "2 locations", "150 edited photos", "Outfit change"],
      },
    ],
  },
  {
    num: "03",
    name: "Graduation",
    portfolio: [
      "/home/photography/1.jpg",
      "/home/photography/2.jpg",
      "/home/photography/3.jpg",
      "/home/photography/4.jpg",
    ],
    packages: [
      {
        name: "Classic", price: "Rp 500.000",
        includes: ["1 hour session", "30 edited photos", "Digital delivery"],
      },
      {
        name: "Premium", price: "Rp 1.200.000",
        includes: ["2 hours session", "2 locations", "80 edited photos", "Printed photos"],
      },
    ],
  },
  {
    num: "04",
    name: "Others",
    portfolio: [
      "/home/photography/1.jpg",
      "/home/photography/2.jpg",
      "/home/photography/3.jpg",
    ],
    packages: [
      {
        name: "Custom Session", price: "Rp 800.000",
        includes: ["Portraits, events, products", "Tailored to your needs", "Custom quote on inquiry"],
      },
    ],
  },
];

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

      {categories.map(({ num, name, portfolio, packages }) => (
        <div key={name} id={name} className="border-t border-[rgba(245,240,232,0.06)] last:border-b">
          <div className="flex items-center gap-5 px-14 py-10 border-b border-[rgba(245,240,232,0.04)] max-lg:px-8">
            <span className="font-heading text-[10px] md:text-[12px] font-light text-gold/40 tracking-[0.08em]">{num}</span>
            <h2 className="font-heading text-[20px] md:text-[32px] font-light text-[#f5f0e8] tracking-[0.02em]">{name}</h2>
            <div className="flex-1 h-px bg-linear-to-r from-gold/20 to-transparent" />
            <span className="font-heading text-[8px] md:text-xs tracking-[0.2em] uppercase text-gold/50 border border-gold/15 px-2 md:px-2.5 py-1 md:py-1.5">
              Photography
            </span>
          </div>

          <div className="grid grid-cols-2 max-xl:grid-cols-1">
            <div className="px-14 pt-9 pb-12 border-r border-gold/8 max-xl:border-r-0 max-xl:border-b max-lg:px-8">
              <p className="font-heading text-[9px] tracking-[0.22em] uppercase text-gold/60 font-medium mb-5">Portfolio</p>
              <div className="columns-2 gap-0.75 mx-12">
                {portfolio.map((src, i) => (
                  <div key={i} className="group break-inside-avoid mb-0.75 relative overflow-hidden cursor-pointer">
                    <Image
                      src={src}
                      alt={`${name} ${i + 1}`}
                      width={500}
                      height={700}
                      className={`w-full object-cover brightness-[0.72] saturate-[0.45] group-hover:scale-[1.05] group-hover:brightness-[0.45] group-hover:saturate-[0.25] transition-all duration-600 ${
                        i % 3 === 0 ? "aspect-2/3" : i % 3 === 1 ? "aspect-3/4" : "aspect-4/5"
                      }`}
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                      <div className="w-0 h-px bg-gold group-hover:w-10 transition-all duration-400 delay-100 mb-1" />
                      <span className="font-heading text-[12px] tracking-[0.18em] uppercase text-[rgba(245,240,232,0.7)]">{name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-12 pt-9 pb-12 flex flex-col max-lg:px-8">
              <p className="font-heading text-sm tracking-[0.22em] uppercase text-gold/60 font-medium mb-5">Packages</p>

              {packages.map(({ name: pkgName, price, includes }) => (
                <div
                  key={pkgName}
                  className="group relative border border-[rgba(245,240,232,0.06)] p-5 mb-2.5 overflow-hidden hover:border-gold/22 hover:bg-gold/3 transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-gold to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />

                  <div className="flex items-start justify-between gap-2.5 mb-3">
                    <span className="font-heading text-2xl font-light text-[#f5f0e8]">{pkgName}</span>
                    <div className="text-right shrink-0">
                      <span className="block font-heading text-xs tracking-[0.14em] uppercase text-[rgba(245,240,232,0.55)] mb-0.5">Starting from</span>
                      <span className="font-heading text-xl font-light text-gold">{price}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    {includes.map((item) => (
                      <div key={item} className="flex items-center gap-2 font-heading text-base text-[rgba(245,240,232,0.50)] tracking-[0.03em]">
                        <span className="w-0.75 h-0.75 rounded-full bg-gold/45 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <Link
                href="/contact"
                className="block font-heading text-[9px] tracking-[0.22em] uppercase text-gold border border-gold/25 py-3 text-center hover:bg-gold hover:text-black hover:border-gold transition-all duration-300 mt-4"
              >
                Book This Package
              </Link>
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
          href="/work-with-us"
          className="inline-block font-heading text-[10px] tracking-[0.26em] uppercase bg-gold text-black px-9 py-4 font-medium hover:bg-[#caa84e] hover:-translate-y-px transition-all duration-300"
        >
          Work With Us
        </Link>
      </div>

    </main>
  );
}