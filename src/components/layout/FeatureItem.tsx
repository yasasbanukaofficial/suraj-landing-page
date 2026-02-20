export default function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-zinc-500">
      <div className="w-4 h-4 rounded-full border border-zinc-200 flex items-center justify-center">
        <div className="w-1 h-1 bg-zinc-400 rounded-full"></div>
      </div>
      <span className="text-sm uppercase tracking-widest leading-none">
        {text}
      </span>
    </div>
  );
}
