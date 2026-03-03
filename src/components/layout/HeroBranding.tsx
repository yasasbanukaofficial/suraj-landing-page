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
      <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-orange-600 font-bold pl-1">
        {sub}
      </p>
      <div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5vw] xl:text-[5vw] font-black tracking-tighter leading-[0.85] text-black uppercase">
          {title.split(" ").slice(0, 2).join(" ")} <br />
          <span className="text-[#f06543]">
            {title.split(" ").slice(2).join(" ")}
          </span>
        </h1>
        <p className="text-base sm:text-lg text-gray-500 mt-6 pl-1 max-w-lg leading-relaxed font-medium">
          {desc}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button text="Start Learning" isDarkMode={true} />
        <Button text="View Courses" />
      </div>
    </div>
  );
}
