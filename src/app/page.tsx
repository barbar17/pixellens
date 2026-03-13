import PhotographyCard from "@/features/home/component/PhotographyCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen min-w-full flex flex-col items-center justify-center gap-8">
      <div className="flex felx-col w-full h-dvh overflow-hidden bg-[url(/hero1.png)] bg-fixed bg-blend-overlay bg-cover">
        <div className="h-full w-full flex flex-col items-center justify-center gap-2 text-side font-extrabold text-center bg-black/40 backdrop-blur-xs">
          <span className="text-2xl md:text-4xl lg:text-5xl text-white drop-shadow-xl font-heading">PixelLens</span>
          <span className="text-lg text-white drop-shadow-xl font-semibold">Capture memories through the lens to its pixel.</span>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-between gap-8">
        <div className="flex flex-col gap-8 items-center justify-center">
          <h3 className="text-2xl text-gold drop-shadow-md font-bold font-heading">Photography</h3>
          <div className="flex flex-col text-3xl font-semibold items-center justify-center">
            <p>Fine Art Photography,</p>
            <p>Your legacy, framed in perfection.</p>
          </div>
        </div>

        <div className="w-full flex flex-row gap-4 relative items-center justify-center p-6 overflow-hidden">
          <div className="grid grid-cols-3 grid-rows-4 w-3/4 aspect-video gap-1">
            <PhotographyCard
              src="/home/photography/1.jpg"
              alt="photo-1"
              title="Graduation"
            />
            {/* <div></div> */}
            {/* <div></div> */}
            <PhotographyCard
              src="/home/photography/2.jpg"
              alt="photo-2"
              title="Wedding"
            />
            {/* <div></div> */}
            <PhotographyCard
              src="/home/photography/3.jpg"
              alt="photo-3"
              title="Pre Wedding"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto">
        <div className="flex flex-col gap-8 items-center justify-center">
          <h3 className="text-2xl text-gold drop-shadow-md font-bold font-heading">Videography</h3>
          <div className="flex flex-col text-3xl font-semibold items-center justify-center">
            <p>Cinematic Storytelling,</p>
            <p>Life moves. We make it last.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
