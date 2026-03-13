'use client';
import { RiInstagramFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { menuList } from "./header/menu";
import Link from "next/link";

const Footer = () => {
  return (
    <div className='w-full h-100 bg-neutral-800 text-white p-8 flex flex-row'>
      <div className='flex flex-col h-full w-1/2 items-start justify-between p-8'>
        <div className='flex flex-row gap-2'>
          <h3 className='text-4xl font-bold font-heading border-r-2 pr-2'>PixelLens</h3>
          <span className='self-end'>Capture memories through the lens to its pixel.</span>
        </div>

        <ul>
          {
            menuList.map((item, index) =>
              item.children ? (
                <ul key={item.href}>
                  {
                    item.children.map((child, index) => (
                      <li key={child.href} className="pl-4 cursor-pointer hover:text-gold">
                        <Link href={child.href}>{child.title}</Link>
                      </li>
                    ))
                  }
                </ul>
              ) : (
                <li key={item.href} className="pl-4 cursor-pointer hover:text-gold">
                  <Link href={item.href}>{item.title}</Link>
                </li>
              )
            )
          }
        </ul>

        <div className="flex flex-col gap-2">
          <h3>Visit Us:</h3>
          <div className="flex flex-row gap-2 cursor-pointer group">
            <FaLocationDot className="group-hover:text-red-400 transition-colors" />
            <span className="group-hover:text-blue-300 transition-colors">Jl. Soekarno Hatta No.1, Way Dadi, Kec. Sukarame, Kota Bandar Lampung, Lampung 35133</span>
          </div>
        </div>
      </div>
      <div className='flex flex-col h-full w-1/2 items-center justify-center p-8 gap-2'>
        <span>Contact Us</span>
        <span>081234567890 | 081234567890</span>
        <div className="flex flex-row gap-4 text-3xl">
          <RiInstagramFill className="cursor-pointer hover:scale-120 transition-all" />
          <FaWhatsapp className="cursor-pointer hover:scale-120 transition-all" />
        </div>
      </div>
    </div>
  )
}

export default Footer