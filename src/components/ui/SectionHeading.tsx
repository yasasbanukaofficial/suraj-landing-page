export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-2xl space-y-4 ${align === "center" ? "mx-auto text-center" : "text-center lg:text-left mx-auto lg:mx-0"}`}
    >
      <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-orange-600 font-bold">
        {label}
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 leading-tight">
        {title}
      </h2>
      {description && (
        <p
          className={`text-base sm:text-lg text-zinc-500 leading-relaxed font-medium max-w-xl ${align === "center" ? "mx-auto" : "mx-auto lg:mx-0"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
