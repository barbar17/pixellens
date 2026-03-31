import React from 'react'

const GoldLine = ({ scale = "100", margin = "my-6" }: { scale?: "50" | "75" | "90" | "100", margin?: string }) => {
  const twScale = `scale-${scale}`;
  return (
    <div className={`flex items-center justify-center gap-4 ${margin} ${twScale}`}>
      <div className="w-12 h-px bg-gold opacity-60" />
      <div className="w-1.5 h-1.5 bg-gold rotate-45 opacity-80" />
      <div className="w-12 h-px bg-gold opacity-60" />
    </div>
  )
}

export default GoldLine