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
    <div className="relative flex flex-col lg:flex-row items-center md:items-end lg:items-start justify-between gap-12 px-6 md:px-5 min-h-[80vh] overflow-hidden">
      <div className="relative z-10 flex-1 lg:max-w-[50%] mt-12 md:self-start">
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

      <div className="relative z-10 flex-1 w-full max-w-[400px] lg:max-w-[707px] md:ml-auto lg:ml-0">
        <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem]">
          <Image
            src="assets/instructor-bg.png"
            fill
            unoptimized
            alt="ICT Instructor"
            className="object-cover object-top transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      </div>
    </div>
  );
}
