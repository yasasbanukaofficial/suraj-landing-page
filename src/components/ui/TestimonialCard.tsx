import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  year: string;
  result: string;
  quote: string;
}

export default function TestimonialCard({
  name,
  year,
  result,
  quote,
}: TestimonialCardProps) {
  return (
    <div className="bg-white border border-zinc-100 rounded-2xl p-6 sm:p-8 hover:border-orange-200 transition-all duration-500 hover:shadow-lg hover:shadow-orange-50 flex flex-col justify-between relative overflow-hidden group">
      <div className="absolute top-4 right-4 text-orange-100 group-hover:text-orange-200 transition-colors">
        <Quote size={32} strokeWidth={1} />
      </div>

      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className="fill-orange-400 text-orange-400"
          />
        ))}
      </div>

      <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">
        {quote}
      </p>

      <div className="mt-6 pt-6 border-t border-zinc-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center text-white text-xs font-bold">
            {name.charAt(0)}
          </div>
          <div>
            <p className="font-bold text-zinc-900 text-sm">{name}</p>
            <p className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider">
              A/L {year}
            </p>
          </div>
        </div>
        <div className="bg-orange-50 px-3 py-1.5 rounded-lg">
          <p className="text-xs font-bold text-orange-600">{result}</p>
        </div>
      </div>
    </div>
  );
}
