import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";

const hours = [
  { day: "Mon – Fri", time: "09:00 – 18:00" },
  { day: "Saturday", time: "09:00 – 15:00" },
  { day: "Sunday", time: "By appointment" },
];

const ContactDisplay = () => {
  return (
    <div className="bg-black py-14 pr-14 flex flex-col gap-11 max-lg:px-0 max-lg:pt-10">
          <div>
            <p className="text-[9px] tracking-[0.24em] uppercase text-gold font-medium mb-3.5">Call Us</p>
            <div className="font-heading text-[18px] font-light text-[rgba(245,240,232,0.7)] leading-[1.6]">
              <Link href="tel:081234567890" className="hover:text-[#f5f0e8] transition-colors flex flex-row gap-2 w-fit">
                <BsFillTelephoneFill size={14} className="self-center"/>
                <span className="self-center">081234567890</span>
              </Link>
              <Link href="tel:081234567891" className="hover:text-[#f5f0e8] transition-colors flex flex-row gap-2 w-fit">
                <BsFillTelephoneFill size={14} className="self-center"/>
                <span className="self-center">081234567891</span>
              </Link>
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
            <p className="text-[9px] tracking-[0.24em] uppercase text-gold font-medium mb-3.5">Business Hours</p>
            <div className="flex flex-col gap-1.5">
              {hours.map(({ day, time }) => (
                <div key={day} className="flex items-center">
                  <span className="text-[12px] tracking-[0.06em] text-[rgba(245,240,232,0.4)]">{day}</span>
                  <span className="flex-1 mx-2.5 h-px bg-[rgba(245,240,232,0.08)]" />
                  <span className="font-heading text-[15px] font-light text-[rgba(245,240,232,0.65)]">{time}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[9px] tracking-[0.24em] uppercase text-gold font-medium mb-3.5">Follow Our Work</p>
            <Link href="#" className="font-heading text-[18px] font-light text-[rgba(245,240,232,0.7)] hover:text-[#f5f0e8] transition-colors">
              @pixellens.id
            </Link>
            <div className="flex gap-2.5 mt-3">
              {[
                { icon: <RiInstagramFill size={15} />, label: "Instagram" },
                { icon: <FaWhatsapp size={15} />, label: "WhatsApp" },
              ].map(({ icon, label }) => (
                <Link
                  key={label}
                  aria-label={label}
                  href="#"
                  className="w-9 h-9 border border-gold/22 flex items-center justify-center text-gold hover:border-gold/60 hover:bg-gold/6 transition-all duration-300"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
  )
}

export default ContactDisplay