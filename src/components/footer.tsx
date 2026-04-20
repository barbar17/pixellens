'use client';
import { RiMapPin5Line } from "react-icons/ri";
import { menuList } from "./header/menu";
import Link from "next/link";
import { ADDRESS, PHONE_NUMBER } from "@/lib/var";
import { SOCIAL_MEDIA } from "@/lib/socialMedia";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { RxOpenInNewWindow } from "react-icons/rx";

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
          <Tooltip>
            <TooltipTrigger>
              <Link href={ADDRESS.url} target="_blank" className="flex gap-2 text-start items-start cursor-pointer group">
                <RiMapPin5Line className="text-gold shrink-0 mt-0.5" />
                <span className="text-[12px] leading-[1.7] text-[rgba(245,240,232,0.5)] group-hover:text-[rgba(245,240,232,0.8)] transition-colors">
                  {ADDRESS.text}
                </span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <div className="flex gap-2 align-text-top">
                <span>Open maps</span>
                <RxOpenInNewWindow />
              </div>
            </TooltipContent>
          </Tooltip>

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
          <div className="flex flex-col justify-start items-start font-heading text-[18px] font-light gap-2 text-[rgba(245,240,232,0.7)] leading-[1.6] mb-7">
            {
              PHONE_NUMBER.map(item => {
                return (
                  <Tooltip key={item.phone}>
                    <TooltipTrigger>
                      <Link href={`tel:${item.phone}`} className="hover:text-[#f5f0e8] transition-colors flex flex-row gap-2 w-fit">
                        <span className="self-center">+{item.phone}</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.name}</p>
                    </TooltipContent>
                  </Tooltip>
                )
              })
            }
          </div>

          <p className="text-[9px] tracking-[0.22em] uppercase text-gold font-medium mb-3.5">Follow Us</p>
          <div className="grid grid-cols-3 gap-4 w-fit">
            {SOCIAL_MEDIA.map(({ icon, label, url }) => (
              <Tooltip key={label}>
                <TooltipTrigger>
                  <Link
                    href={url}
                    target="_blank"
                    className="cursor-pointer w-9.5 h-9.5 border border-gold/25 flex items-center justify-center text-gold hover:border-gold/70 hover:bg-gold/[0.07] transition-all duration-300"
                  >
                    {icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="flex gap-2">
                    <p>{label}</p>
                    <RxOpenInNewWindow />
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-20 py-5 max-lg:px-10 max-sm:flex-col max-sm:gap-3 max-sm:text-center">
        <span className="text-[10px] tracking-[0.12em] text-[rgba(245,240,232,0.25)]">
          © 2025 <span className="text-gold/50">PixelLens & Akbar Maulana</span>. All rights reserved.
        </span>
        <span className="font-heading italic text-[11px] text-[rgba(245,240,232,0.2)] tracking-[0.06em]">
          Fine Art Photography & Cinematography
        </span>
      </div>

    </footer>
  );
};

export default Footer;