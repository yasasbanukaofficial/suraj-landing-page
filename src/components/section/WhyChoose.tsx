import {
  BookCheck,
  Headphones,
  LayoutGrid,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

export default function WhyChoose() {
  const reasons = [
    {
      icon: Target,
      title: "Exam-Focused Approach",
      desc: "Teaching strategies specifically designed around A/L exam patterns with extensive past paper practice.",
    },
    {
      icon: Lightbulb,
      title: "Concept Clarity",
      desc: "Complex ICT concepts broken down into simple, understandable lessons that stick.",
    },
    {
      icon: LayoutGrid,
      title: "Structured Curriculum",
      desc: "Systematically planned lessons covering the entire syllabus from basics to advanced topics.",
    },
    {
      icon: BookCheck,
      title: "Practice Materials",
      desc: "Comprehensive notes, model papers, and coding exercises provided for every topic.",
    },
    {
      icon: Headphones,
      title: "Continuous Support",
      desc: "Direct access to the instructor for doubts and questions beyond class hours.",
    },
    {
      icon: Users,
      title: "Small Batch Sizes",
      desc: "Limited students per batch ensuring personalized attention and better learning outcomes.",
    },
  ];

  return (
    <section id="results" className="px-6 md:px-12 lg:px-20 py-20 lg:py-32">
      <SectionHeading
        label="Why Students Choose Us"
        title="Built for Results"
        description="Everything about this program is designed to maximize your A/L ICT grade."
        align="center"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {reasons.map((reason, i) => (
          <div
            key={i}
            className="group flex gap-4 p-6 rounded-2xl hover:bg-zinc-50 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl border border-zinc-100 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white group-hover:border-transparent transition-all duration-500">
              <reason.icon size={20} strokeWidth={1.5} />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-zinc-900 tracking-tight">
                {reason.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {reason.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
