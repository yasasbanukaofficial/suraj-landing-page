export default function MetaText({
  txt,
  boldTxt,
}: {
  txt: string;
  boldTxt?: string;
}) {
  return (
    <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-medium">
      <span className="text-zinc-900">{boldTxt}</span>
      {txt}
    </div>
  );
}
