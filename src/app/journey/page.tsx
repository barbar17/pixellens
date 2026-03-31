import Link from "next/link";
import GoldLine from "@/components/GoldLine";
import OurJourneySection from "@/features/journey/components/OurJourneySection";
import OurPhilosophySection from "@/features/journey/components/OurPhilosophySection";
import { TPhilosophyVal } from "@/features/journey/types/PhilosophyValTypes";
import { TJourneyStat } from "@/features/journey/types/OurJourneyStatTypes";

const stats: TJourneyStat[] = [
  { num: "120+", label: "Weddings\ncaptured" },
  { num: "300+", label: "Sessions\ncompleted" },
  { num: "4", label: "Years of\ncraft" },
  { num: "∞", label: "Frames\nconsidered" },
];

const values: TPhilosophyVal[] = [
  {
    num: "01", title: "Light is everything",
    body: "We don't fight the light — we study it, wait for it, and follow it. Every session begins with understanding how light moves through the space and the moment.",
  },
  {
    num: "02", title: "Moments, not poses",
    body: "The most powerful photographs are never staged. We create the conditions for genuine emotion, then step back and let the moment speak for itself.",
  },
  {
    num: "03", title: "Craft without compromise",
    body: "We obsess over every detail of post-processing, color grading, and delivery. The work isn't done when the shutter fires — it ends when every frame is perfect.",
  },
];

export default function Journey() {
  return (
    <main className="bg-black min-h-screen">
      <OurJourneySection stats={stats} />

      <OurPhilosophySection values={values} />

      <div className="text-center px-10 py-24">
        <GoldLine margin="mt-0 mb-12" />
        <h2 className="font-heading text-[clamp(32px,4vw,52px)] font-light text-[#f5f0e8] leading-[1.15] mb-9">
          Ready to add your story<br />
          <em className="italic text-[rgba(245,240,232,0.5)]">to ours?</em>
        </h2>
        <Link
          href="/contact"
          className="inline-block font-['Montserrat'] text-[10px] tracking-[0.28em] uppercase bg-gold text-black px-9 py-4 font-medium hover:bg-[#caa84e] hover:-translate-y-px transition-all duration-300"
        >
          Work With Us
        </Link>
      </div>

    </main>
  );
}