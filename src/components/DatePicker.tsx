import { Dispatch, SetStateAction } from "react"
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover"
import { Calendar } from "./ui/calendar"
import { ChevronDownIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { id } from "date-fns/locale"

const DatePicker = ({
  date,
  setDate,
}: {
  date: Date | undefined,
  setDate: Dispatch<SetStateAction<Date | undefined>>
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            "w-full flex items-center justify-between cursor-pointer",
            "bg-transparent border-b border-[rgba(245,240,232,0.12)] pb-2.5 pt-2",
            "font-['Montserrat'] text-[13px] font-light outline-none",
            "hover:border-gold/60 focus:border-gold/60 transition-colors duration-300",
            date ? "text-[#f5f0e8]" : "text-[rgba(245,240,232,0.25)]"
          )}
        >
          {date ? format(date, "PPP", { locale: id }) : "Pick a date"}
          <ChevronDownIcon
            size={13}
            className="text-[rgba(245,240,232,0.3)] shrink-0"
          />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          defaultMonth={date}
          captionLayout="dropdown"
          endMonth={new Date(new Date().getFullYear() + 1, 11)}
          required
        />
      </PopoverContent>
    </Popover>
  )
}

export default DatePicker