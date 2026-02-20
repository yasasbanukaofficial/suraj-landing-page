import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/section/Hero";
import Stats from "@/components/section/Stats";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-orange-100">
      <Navbar />
      <main className="flex flex-col gap-10 pt-32 px-6 md:px-12">
        <Hero />
        <Stats />
      </main>
    </div>
  );
}
