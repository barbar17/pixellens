"use client";
import DatePicker from "@/components/DatePicker";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const services = [
  "Wedding",
  "Pre-Wedding",
  "Graduation",
  "Ceremony",
  "Other",
];

const WA_NUMBER = "082281919482";

const OrderForm = () => {
  const [date, setDate] = useState<Date | undefined>(new Date);

  return (
    <div className="bg-black py-14 pl-14 max-lg:px-0 max-lg:pb-10">
      <p className="font-heading text-[22px] font-light text-[#f5f0e8] mb-8 tracking-[0.02em]">
        Tell us about your moment
      </p>

      <form className="grid grid-cols-2 gap-5">
        <div>
          <label className="block text-[9px] tracking-[0.22em] uppercase text-gold font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            required
            name="name"
            placeholder={"Ex: Jhon Doe"}
            className="w-full bg-transparent border-b border-[rgba(245,240,232,0.12)] pb-2.5 pt-2 text-[13px] font-light text-[#f5f0e8] placeholder-[rgba(245,240,232,0.25)] outline-none focus:border-gold/60 transition-colors duration-300"
          />
        </div>

        <div>
          <label className="block text-[9px] tracking-[0.22em] uppercase text-gold font-medium mb-2">
            Event Date
          </label>
          <DatePicker date={date} setDate={setDate} />
        </div>

        <div>
          <label className="block text-[9px] tracking-[0.22em] uppercase text-gold font-medium mb-2">
            Location
          </label>
          <input
            type="text"
            required
            name="location"
            placeholder={"Ex: Bandar Lampung"}
            className="w-full bg-transparent border-b border-[rgba(245,240,232,0.12)] pb-2.5 pt-2 text-[13px] font-light text-[#f5f0e8] placeholder-[rgba(245,240,232,0.25)] outline-none focus:border-gold/60 transition-colors duration-300"
          />
        </div>

        <div>
          <label className="block text-[9px] tracking-[0.22em] uppercase text-gold font-medium mb-2">
            Event Type
          </label>

          <Select required>
            <SelectTrigger className="w-full bg-transparent border-0 border-b border-[rgba(245,240,232,0.12)] rounded-none px-0 pb-2.5 pt-2 font-['Montserrat'] text-[13px] font-light text-[#f5f0e8] shadow-none focus:ring-0 focus:border-gold/60 hover:border-gold/60 transition-colors duration-300 [&>span]:text-[rgba(245,240,232,0.25)] data-placeholder:text-[rgba(245,240,232,0.25)]">
              <SelectValue placeholder="Select a Service" className="text-[#f5f0e8] data-placeholder:text-[rgba(245,240,232,0.25)]"/>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select a service</SelectLabel>
                {services.map((s) => (
                  <SelectItem key={s} value={s} className="bg-white text-black">{s}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="col-span-2">
          <label className="block text-[9px] tracking-[0.22em] uppercase text-gold font-medium mb-2">
            Tell Us More
          </label>
          <textarea
            name="notes"
            rows={4}
            placeholder="Venue, number of guests, special requests..."
            className="w-full bg-transparent border-b border-[rgba(245,240,232,0.12)] pb-2.5 pt-2 text-[13px] font-light text-[#f5f0e8] placeholder-[rgba(245,240,232,0.25)] outline-none focus:border-gold/60 transition-colors duration-300 resize-none"
          />
        </div>

        <div className="col-span-2 flex items-center gap-5 pt-7 border-t border-[rgba(245,240,232,0.06)] mt-2">
          <button
            type="submit"
            className="flex cursor-pointer items-center gap-2.5 font-heading text-[10px] tracking-[0.28em] uppercase bg-gold text-black px-8 py-4 font-medium hover:bg-[#caa84e] hover:tracking-[0.34em] transition-all duration-300"
          >
            <FaWhatsapp size={14} />
            Send via WhatsApp
          </button>
          <p className="text-[10px] text-[rgba(245,240,232,0.25)] tracking-[0.06em] leading-[1.6]">
            Opens <span className="text-gold/50">WhatsApp</span><br />with your details pre-filled
          </p>
        </div>
      </form>
    </div>
  )
}

export default OrderForm