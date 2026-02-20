import { LucideIcon } from "lucide-react";

interface StatItemProps {
  label: string;
  value: string;
  icon: LucideIcon;
}

export default function StatItem({ label, value, icon: Icon }: StatItemProps) {
  return (
    <div className="flex flex-col gap-6 p-8 group transition-all duration-500 hover:bg-zinc-50/50 relative overflow-hidden">
      <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
        <Icon size={120} strokeWidth={1} />
      </div>

      <div className="flex items-center justify-between">
        <div className="w-10 h-10 rounded-full border border-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all duration-500">
          <Icon size={16} strokeWidth={1.5} />
        </div>
        <div className="h-[1px] flex-1 bg-zinc-100 mx-4 group-hover:bg-orange-500 transition-colors"></div>
      </div>

      <div className="space-y-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 group-hover:text-orange-600 transition-colors">
          {label}
        </p>
        <div className="text-5xl lg:text-6xl font-black tracking-tighter text-zinc-900 leading-none">
          {value}
        </div>
      </div>
    </div>
  );
}
