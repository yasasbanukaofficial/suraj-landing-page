import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import { BookOpen, Clock, GraduationCap } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Qualified Educator",
      desc: "Experienced A/L ICT teacher with deep expertise in the national curriculum and modern IT concepts.",
    },
    {
      icon: BookOpen,
      title: "Bilingual Teaching",
      desc: "Classes conducted in both English and Sinhala mediums to ensure every student can learn effectively.",
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      desc: "Both online and physical class options available, making quality ICT education accessible island-wide.",
    },
  ];

  return (
    <section id="about" className="px-6 md:px-12 lg:px-20 pb-10 lg:pb-16 pt-10 lg:pt-20">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
        <div className="relative w-full max-w-100 lg:max-w-112.5 shrink-0">
          <div className="relative aspect-4/5 rounded-2xl lg:rounded-3xl overflow-hidden">
            <Image
              src="/assets/instructor.jpg"
              fill
              alt="Suraj S Kumara"
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 450px"
            />
          </div>

        </div>

        <div className="flex-1">
          <SectionHeading
            label="About the Instructor"
            title="Teaching ICT the Right Way"
            description="Suraj S Kumara is a dedicated A/L ICT instructor who has guided thousands of students through Sri Lanka's national ICT curriculum. With a passion for making technology accessible, he combines theoretical knowledge with practical coding to ensure students truly understand the subject."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {highlights.map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                  <item.icon size={18} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-zinc-900 text-sm tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
