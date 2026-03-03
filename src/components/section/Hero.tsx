import Image from "next/image";
import HeroBranding from "../layout/HeroBranding";
import FeatureItem from "../layout/FeatureItem";

export default function Hero() {
  const features = [
    "English & Sinhala Medium",
    "Online & Physical Classes",
    "Practical Coding Sessions",
    "Full A/L Syllabus Coverage",
  ];

  return (
    <section className="relative flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 px-6 md:px-12 lg:px-20 min-h-[80vh] overflow-hidden">
      <div className="relative z-10 flex-1 lg:max-w-[55%] mt-6 lg:mt-12">
        <HeroBranding
          title={"Master ICT Properly"}
          sub={"A/L ICT TUITION — 2025/2026"}
          desc={
            "Join the most structured A/L ICT program in Sri Lanka with Suraj S Kumara. We simplify complex concepts through practical coding and real-world applications."
          }
        />
        <div className="flex flex-col gap-2 mt-10">
          {features.map((text, index) => (
            <FeatureItem key={index} text={text} />
          ))}
        </div>
      </div>

      <div className="relative z-10 flex-1 w-full max-w-87.5 sm:max-w-100 lg:max-w-125 mx-auto lg:mx-0">
        <div className="relative aspect-3/4 overflow-hidden rounded-4xl lg:rounded-[3rem]">
          <Image
            src="/assets/instructor-bg.png"
            fill
            unoptimized
            alt="Suraj S Kumara - ICT Instructor"
            className="object-cover object-top"
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 500px"
          />
        </div>
      </div>
    </section>
  );
}
