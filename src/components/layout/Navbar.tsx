import Image from "next/image";
import NavLink from "../ui/NavLink";
import Link from "next/link";

export default function Navbar() {
  const navItems = ["About", "Classes", "Contact"];
  return (
    <nav className="fixed top-0 w-full z-50 flex items-center align-middle justify-between px-6 md:px-20 py-6 bg-white/80 backdrop-blur-md">
      <Link href={"/"} className="flex items-center gap-2">
        <Image
          src={"/assets/logo.png"}
          alt="ssk-logo"
          width={70}
          height={50}
          className=""
        />
      </Link>
      <div className="flex items-center gap-8 text-xs font-medium uppercase tracking-widest">
        {navItems.map((item) => (
          <NavLink
            key={item}
            txt={item}
            href={`#${item.toLocaleLowerCase()}`}
            showBg={item === "Contact"}
          />
        ))}
      </div>
    </nav>
  );
}
