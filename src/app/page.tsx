import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/section/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-orange-100">
      <Navbar />
      <main className="pt-32 px-6 md:px-12">
        <Hero />
      </main>
    </div>
  );
}
