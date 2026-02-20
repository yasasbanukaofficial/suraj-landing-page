import { ArrowRight } from "lucide-react";

export default function Button({
  text,
  isDarkMode,
}: {
  text: string;
  isDarkMode?: boolean;
}) {
  return (
    <button
      className={`flex items-center justify-between gap-8 px-8 py-4 rounded-xl transition-all group border
      ${
        isDarkMode
          ? "bg-black text-white border-transparent hover:bg-gray-800"
          : "bg-white text-gray-600 border-gray-200 hover:border-black"
      }`}
    >
      <span
        className={`text-xs uppercase tracking-widest font-bold ${!isDarkMode && "group-hover:text-black"}`}
      >
        {text}
      </span>

      <div
        className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all group-hover:translate-x-1
        ${
          isDarkMode
            ? "bg-white text-black"
            : "bg-gray-100 text-black group-hover:bg-black group-hover:text-white"
        }`}
      >
        <ArrowRight size={16} />
      </div>
    </button>
  );
}
