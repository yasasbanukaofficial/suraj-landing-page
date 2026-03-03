import { MapPin, Phone, Globe, Clock } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: "074 296 6266",
      href: "tel:+94742966266",
    },
    {
      icon: Globe,
      label: "Website",
      value: "surajskumara.lk",
      href: "https://surajskumara.lk",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Island-wide (Online & Physical)",
      href: null,
    },
    {
      icon: Clock,
      label: "Class Hours",
      value: "Weekdays & Weekends",
      href: null,
    },
  ];

  return (
    <section id="contact" className="px-6 md:px-12 lg:px-20 py-20 lg:py-32">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
        <div className="flex-1">
          <SectionHeading
            label="Get in Touch"
            title="Ready to Start Learning?"
            description="Join the next batch of A/L ICT students and take the first step towards mastering ICT with Suraj S Kumara."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            {contactInfo.map((item, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl border border-zinc-100 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white group-hover:border-transparent transition-all duration-500">
                  <item.icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-zinc-400 font-bold">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm sm:text-base font-semibold text-zinc-900 hover:text-orange-600 transition-colors"
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm sm:text-base font-semibold text-zinc-900">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a href="tel:+94742966266">
              <Button text="Call Now" isDarkMode={true} />
            </a>
            <a
              href="https://wa.me/94742966266"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button text="WhatsApp" />
            </a>
          </div>
        </div>

        <div className="flex-1 bg-zinc-50 rounded-2xl lg:rounded-3xl p-8 sm:p-12 flex flex-col justify-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-orange-600 font-bold">
                Enrollment Open
              </p>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-900">
                2025/2026 Batch
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-zinc-100">
                <span className="text-sm text-zinc-500">Medium</span>
                <span className="text-sm font-semibold text-zinc-900">
                  English & Sinhala
                </span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-zinc-100">
                <span className="text-sm text-zinc-500">Format</span>
                <span className="text-sm font-semibold text-zinc-900">
                  Online & Physical
                </span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-zinc-100">
                <span className="text-sm text-zinc-500">Subject</span>
                <span className="text-sm font-semibold text-zinc-900">
                  A/L ICT
                </span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-zinc-100">
                <span className="text-sm text-zinc-500">Batch Size</span>
                <span className="text-sm font-semibold text-zinc-900">
                  Limited Seats
                </span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-sm text-zinc-500">Student Portal</span>
                <a
                  href="https://surajskumara.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                >
                  Login →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
