import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen min-w-full bg-slate-400">
      <div className="w-full h-dvh overflow-hidden bg-[url(/hero1.png)]">
        {/* <Image src={"/hero1.png"} width={1920} height={1080} className="w-full object-cover" alt="hero"/> */}
      </div>
    </div>
  );
}
