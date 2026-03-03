import { LucideIcon } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  topics: string[];
}

export default function CourseCard({
  title,
  description,
  icon: Icon,
  topics,
}: CourseCardProps) {
  return (
    <div className="group relative bg-white border border-zinc-100 rounded-2xl p-6 sm:p-8 hover:border-orange-200 transition-all duration-500 hover:shadow-lg hover:shadow-orange-50">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shrink-0">
          <Icon size={22} strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-zinc-900 tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-zinc-500 mt-1 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      <div className="space-y-2">
        {topics.map((topic, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-sm text-zinc-600"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
            <span>{topic}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
