import Image from "next/image";
import HeroBranding from "../layout/HeroBranding";
import FeatureItem from "../layout/FeatureItem";

export default function Hero() {
  const features = [
    "English & Sinhala Medium",
    "Online & Physical Classes",
    "Practical Coding",
    "Full Syllabus Coverage",
  ];
  return (
    <div className="relative flex flex-col lg:flex-row items-center md:items-start justify-between gap-12 px-6 lg:px-5">
      <div className="flex-1 lg:max-w-[50%] mt-12">
        <HeroBranding
          title={"Master ICT Properly"}
          sub={"ICT TUITION — 2025"}
          desc={
            "Join the most structured ICT program in Sri Lanka. We simplify complex concepts for A/L & O/L using practical coding."
          }
        />
        <div className="flex flex-col gap-2 mt-12">
          {features.map((text, index) => (
            <FeatureItem key={index} text={text} />
          ))}
        </div>
      </div>

      <div className="relative flex-1 w-full max-w-[400px] lg:max-w-[707px]">
        <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full blur-2xl opacity-60"></div>
        <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem]">
          <Image
            src="/assets/instructor-no-bg.png"
            fill
            priority
            alt="ICT Instructor"
            className="object-cover object-top transition-transform duration-700 hover:scale-102"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      </div>
    </div>
  );
}
