import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

export default function HeroBranding({
  title,
  sub,
  desc,
}: {
  title: string;
  sub: string;
  desc: string;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-7xl md:text-[8vw] font-black tracking-tighter leading-[0.85] text-black uppercase">
          {title.split(" ").slice(0, 2).join(" ")} <br />
          <span className="text-[#f06543]">
            {title.split(" ").slice(2).join(" ")}
          </span>
        </h1>
        <p className="text-lg text-gray-500 mt-6 pl-2 max-w-lg leading-relaxed font-medium">
          {desc}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button text="Explore Classes" isDarkMode={true} />
        <Button text="Course Outline" />
      </div>
    </div>
  );
}
