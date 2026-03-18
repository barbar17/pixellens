"use client";
import DatePicker from "@/components/DatePicker";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { TOrderForm } from "../types/OrderFormTypes";
import { format } from "date-fns"
import { id } from "date-fns/locale"

const services = [
  "Wedding",
  "Pre-Wedding",
  "Graduation",
  "Ceremony",
  "Other",
];

const orderFormDefault: TOrderForm = {
  name: "",
  date: new Date(),
  location: "",
  event: "",
  desc: "",
}

const buildOrderMessage = (form: TOrderForm) => {
  if (!form.date) return;
  const formattedDate = format(form.date, "PPP", { locale: id });

  const text =
    `Hi PixelLens! I'd like to inquire about a booking.\n\n` +
    `*Name:* ${form.name.trim()}\n` +
    `*Service:* ${form.event.trim()}\n` +
    `*Date:* ${formattedDate}\n` +
    `*Location:* ${form.location.trim()}\n` +
    (form.desc ? `*Notes:* ${form.desc}\n` : "") +
    `\nLooking forward to hearing from you!`;

  return text;
}

const OrderForm = () => {
  const [form, setForm] = useState<TOrderForm>(orderFormDefault);

  const onSubmit = () => {
    const message = buildOrderMessage(form);
    console.log(message)
  }

  return (
    <div className="bg-black py-14 pl-14 max-lg:px-0 max-lg:pb-10">
      <p className="font-heading text-[22px] font-light text-[#f5f0e8] mb-8 tracking-[0.02em]">
        Tell us about your moment
      </p>

      <form
        className="grid grid-cols-2 gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit()
        }}
      >
        <div>
          <label className="block text-[9px] tracking-[0.22em] uppercase text-gold font-medium mb-2">
            Your Name
          </label>
          <input
            autoComplete="off"
            type="text"
            required
            name="name"
            placeholder={"Ex: Jhon Doe"}
            className="w-full bg-transparent border-b border-[rgba(245,240,232,0.12)] pb-2.5 pt-2 text-[13px] font-light text-[#f5f0e8] placeholder-[rgba(245,240,232,0.25)] outline-none focus:border-gold/60 transition-colors duration-300"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.currentTarget.value })}
          />
        </div>

        <div>
          <label className="block text-[9px] tracking-[0.22em] uppercase text-gold font-medium mb-2">
            Event Date
          </label>
          <DatePicker date={form.date} setDate={(date) => setForm({ ...form, date })} />
        </div>

        <div>
          <label className="block text-[9px] tracking-[0.22em] uppercase text-gold font-medium mb-2">
            Location
          </label>
          <input
            autoComplete="off"
            type="text"
            required
            name="location"
            placeholder={"Ex: Bandar Lampung"}
            className="w-full bg-transparent border-b border-[rgba(245,240,232,0.12)] pb-2.5 pt-2 text-[13px] font-light text-[#f5f0e8] placeholder-[rgba(245,240,232,0.25)] outline-none focus:border-gold/60 transition-colors duration-300"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.currentTarget.value })}
          />
        </div>

        <div>
          <label className="block text-[9px] tracking-[0.22em] uppercase text-gold font-medium mb-2">
            Event Type
          </label>
          <Select
            required
            value={form.event || undefined}
            onValueChange={(val) => setForm({ ...form, event: val })}
          >
            <SelectTrigger className="w-full bg-transparent border-0 border-b border-[rgba(245,240,232,0.12)] rounded-none px-0 pb-2.5 pt-2 font-['Montserrat'] text-[13px] font-light text-[#f5f0e8] shadow-none focus:ring-0 focus:border-gold/60 hover:border-gold/60 transition-colors duration-300 [&>span]:text-[rgba(245,240,232,0.25)] data-placeholder:text-[rgba(245,240,232,0.25)]">
              <SelectValue placeholder="Select a Service" className="text-[#f5f0e8] data-placeholder:text-[rgba(245,240,232,0.25)]" />
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
            autoComplete="off"
            name="notes"
            rows={4}
            placeholder="Venue, number of guests, special requests..."
            className="w-full bg-transparent border-b border-[rgba(245,240,232,0.12)] pb-2.5 pt-2 text-[13px] font-light text-[#f5f0e8] placeholder-[rgba(245,240,232,0.25)] outline-none focus:border-gold/60 transition-colors duration-300 resize-none"
            value={form.desc}
            onChange={(e) => setForm({ ...form, desc: e.currentTarget.value })}
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