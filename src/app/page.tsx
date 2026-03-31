import AboutTeaser from "@/features/home/component/AboutTeaserSection";
import CtaBanner from "@/features/home/component/CtaBannerSection";
import HeroSection from "@/features/home/component/HeroSection";
import PhotographySection from "@/features/home/component/photographySection/PhotographySection";
import VideographySection from "@/features/home/component/videographySection/VideographySection";

export default function Home() {
  return (
    <>
      <HeroSection/>

      <PhotographySection />

      <VideographySection />

      <AboutTeaser />

      <CtaBanner />
    </>
  );
}
