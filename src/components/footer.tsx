'use client';
import { RiInstagramFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { menuList } from "./header/menu";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0d0d0d] border-t border-gold/15 font-sans">
      <div className="grid grid-cols-[1.6fr_1fr_1fr] gap-12 px-20 pt-16 pb-14 border-b border-[rgba(245,240,232,0.07)] max-lg:grid-cols-1 max-lg:px-10">

        <div>
          <h3 className="font-heading text-[32px] font-light text-[#f5f0e8] tracking-[0.02em]">
            Pixel<span className="text-gold">Lens</span>
          </h3>
          <p className="font-heading italic font-light text-[14px] text-[rgba(245,240,232,0.45)] mt-2.5 leading-relaxed max-w-65">
            Memories through the lens,<br />preserved to its pixel.
          </p>

          <div className="flex items-center gap-2 my-5">
            <span className="block w-7 h-px bg-gold opacity-40" />
            <span className="text-gold text-[9px] opacity-60">◆</span>
            <span className="block w-7 h-px bg-gold opacity-40" />
          </div>

          <p className="text-[9px] tracking-[0.22em] uppercase text-gold font-medium mb-2.5">Visit Us</p>
          <div className="flex gap-2 items-start cursor-pointer group">
            <FaLocationDot className="text-gold shrink-0 mt-0.5" />
            <span className="text-[12px] leading-[1.7] text-[rgba(245,240,232,0.5)] group-hover:text-[rgba(245,240,232,0.8)] transition-colors">
              Jl. Soekarno Hatta No.1, Way Dadi,<br />
              Kec. Sukarame, Kota Bandar Lampung,<br />
              Lampung 35133
            </span>
          </div>
        </div>

        <div>
          <p className="text-[9px] tracking-[0.22em] uppercase text-gold font-medium mb-5">Navigate</p>
          <ul className="flex flex-col gap-3">
            {menuList.map((item) =>
              item.children ? (
                item.children.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={`${item.href}/${child.href}`}
                      className="font-heading text-[16px] font-light text-[rgba(245,240,232,0.55)] tracking-[0.04em] hover:text-[#f5f0e8] hover:tracking-[0.08em] transition-all duration-300"
                    >
                      {child.title}
                    </Link>
                  </li>
                ))
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-heading text-[16px] font-light text-[rgba(245,240,232,0.55)] tracking-[0.04em] hover:text-[#f5f0e8] hover:tracking-[0.08em] transition-all duration-300"
                  >
                    {item.title}
                  </Link>
                </li>
              )
            )}
            <li>
              <Link
                href={"/contact"}
                className="font-heading text-[16px] font-light text-[rgba(245,240,232,0.55)] tracking-[0.04em] hover:text-[#f5f0e8] hover:tracking-[0.08em] transition-all duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[9px] tracking-[0.22em] uppercase text-gold font-medium mb-5">Contact Us</p>
          <div className="flex flex-col gap-1.5 mb-7">
            {["081234567890", "081234567891"].map((num) => (
              <span
                key={num}
                className="text-[13px] tracking-[0.05em] text-[rgba(245,240,232,0.55)] hover:text-[#f5f0e8] transition-colors cursor-pointer"
              >
                {num}
              </span>
            ))}
          </div>

          <p className="text-[9px] tracking-[0.22em] uppercase text-gold font-medium mb-3.5">Follow Us</p>
          <div className="flex gap-3">
            {[
              { icon: <RiInstagramFill size={16} />, label: "Instagram" },
              { icon: <FaWhatsapp size={16} />, label: "WhatsApp" },
            ].map(({ icon, label }) => (
              <button
                key={label}
                aria-label={label}
                className="cursor-pointer w-9.5 h-9.5 border border-gold/25 flex items-center justify-center text-gold hover:border-gold/70 hover:bg-gold/[0.07] transition-all duration-300"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-20 py-5 max-lg:px-10 max-sm:flex-col max-sm:gap-3 max-sm:text-center">
        <span className="text-[10px] tracking-[0.12em] text-[rgba(245,240,232,0.25)]">
          © 2025 <span className="text-gold/50">PixelLens</span>. All rights reserved.
        </span>
        <span className="font-heading italic text-[11px] text-[rgba(245,240,232,0.2)] tracking-[0.06em]">
          ——◆—— Fine Art Photography & Cinematography ——◆——
        </span>
      </div>

    </footer>
  );
};

export default Footer;