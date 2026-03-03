import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "About", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Results", href: "#results" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-zinc-950 text-white">
      <div className="px-6 md:px-12 lg:px-20 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="space-y-6 max-w-sm">
            <Image
              src="/assets/logo.png"
              alt="Suraj S Kumara ICT"
              width={60}
              height={40}
              className="brightness-0 invert"
            />
            <p className="text-sm text-zinc-400 leading-relaxed">
              A/L ICT tuition by Suraj S Kumara. Structured learning in English
              & Sinhala medium with practical coding and proven results.
            </p>
            <p className="text-sm text-zinc-500">
              <a
                href="tel:+94742966266"
                className="hover:text-orange-400 transition-colors"
              >
                074 296 6266
              </a>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 lg:gap-20">
            <div className="space-y-4">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold">
                Navigation
              </p>
              <div className="flex flex-col gap-3">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold">
                Resources
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://surajskumara.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  Student Portal
                </a>
                <a
                  href="https://wa.me/94742966266"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
                <a
                  href="https://surajskumara.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  surajskumara.lk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800 px-6 md:px-12 lg:px-20 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-500">
            &copy; {currentYear} Suraj S Kumara. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            A/L ICT Tuition — Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}
