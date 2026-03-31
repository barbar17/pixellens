import { TPhilosophyVal } from "../types/PhilosophyValTypes"

const OurPhilosophySection = ({values}:{values: TPhilosophyVal[]}) => {
  return (
    <div className="bg-[#0d0d0d] border-t border-b border-gold/10 py-24">
      <div className="max-w-275 mx-auto px-14 max-lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-gold font-['Montserrat'] mb-4">Our Philosophy</p>
          <h2 className="font-heading text-4xl md:text-6xl font-light text-[#f5f0e8]">What we believe in</h2>
          <div className="flex items-center justify-center gap-2.5 mt-5">
            <span className="block w-10 h-px bg-gold opacity-40" />
            <span className="text-gold text-[9px] opacity-60">◆</span>
            <span className="block w-10 h-px bg-gold opacity-40" />
          </div>
        </div>
        <div
          className="grid grid-cols-3 gap-px max-lg:grid-cols-1"
          style={{ background: "rgba(184,150,62,0.08)" }}
        >
          {values.map(({ num, title, body }) => (
            <div key={num} className="bg-[#0d0d0d] p-11">
              <p className="font-heading text-[48px] font-light text-gold/15 leading-none mb-4">{num}</p>
              <h3 className="font-heading text-[22px] font-light text-[#f5f0e8] mb-3.5">{title}</h3>
              <p className="font-['Montserrat'] text-[12px] font-light leading-[1.9] text-[rgba(245,240,232,0.4)]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurPhilosophySection