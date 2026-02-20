import { Award, CheckCircle2, Layers, Users } from "lucide-react";
import StatItem from "../ui/StatItem";

export default function Stats() {
  const stats = [
    { label: "Students", value: "2,000+", icon: Users },
    { label: "Lessons", value: "500+", icon: Layers },
    { label: "Pass Rate", value: "98%", icon: CheckCircle2 },
    { label: "Districts", value: "15+", icon: Award },
  ];
  return (
    <section className="mb-32 border-t border-zinc-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <StatItem key={i} {...stat} />
        ))}
      </div>
    </section>
  );
}
