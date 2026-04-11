import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";
import { PHONE_NUMBER } from "@/lib/var";
import { SOCIAL_MEDIA } from "@/lib/socialMedia";
import { TooltipContent, TooltipTrigger, Tooltip } from "@/components/ui/tooltip";

const ContactDisplay = ({ className }: { className: string }) => {
  return (
    <div className={`bg-black py-14 pr-14 flex flex-col gap-11 max-lg:px-0 max-lg:pt-10 ${className}`}>
      <div>
        <p className="text-[9px] tracking-[0.24em] uppercase text-gold font-medium mb-3.5">Get in touch with Us</p>
        <div className="flex flex-col gap-2 justify-start items-start font-heading text-[18px] font-light text-[rgba(245,240,232,0.7)] leading-[1.6]">
          <Tooltip>
            <TooltipTrigger>
              <Link href="tel:081234567890" className="hover:text-[#f5f0e8] transition-colors flex flex-row gap-2 w-fit">
                <BsFillTelephoneFill size={14} className="self-center" />
                <span className="self-center">+{PHONE_NUMBER.pixellens}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Pixellens</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Link href="tel:081234567891" className="hover:text-[#f5f0e8] transition-colors flex flex-row gap-2 w-fit">
                <BsFillTelephoneFill size={14} className="self-center" />
                <span className="self-center">+{PHONE_NUMBER.bagus}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Bagus</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <p className="text-[11px] tracking-[0.08em] text-[rgba(245,240,232,0.3)] mt-1.5">Available during business hours</p>
      </div>

      <div>
        <p className="text-[9px] tracking-[0.24em] uppercase text-gold font-medium mb-3.5">Visit Us</p>
        <Link href="https://maps.app.goo.gl/3LtYYLvdMYCjy6PC6" className="font-heading text-[18px] font-light text-[rgba(245,240,232,0.7)] leading-[1.6] hover:text-white transition-all">
          Jl. Soekarno Hatta No.1,<br />
          Way Dadi, Kec. Sukarame,<br />
          Kota Bandar Lampung 35133
        </Link>
      </div>

      <div>
        <p className="text-[9px] tracking-[0.24em] uppercase text-gold font-medium mb-3.5">Follow Our Work</p>
        <div className="flex gap-2.5 mt-3">

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
                <p>{label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactDisplay