import Link from "next/link";

export default function NavLink({
  txt,
  href,
  showBg = false,
}: {
  txt: string;
  href: string;
  showBg?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`text-md font-semibold uppercase transition-colors ${showBg === true ? "bg-foreground px-4 py-3 rounded-md text-background hover:text-background" : "hover:text-brand"}`}
    >
      {txt}
    </Link>
  );
}
