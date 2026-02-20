import Navbar from "@/components/layout/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-orange-100">
      <Navbar />
    </div>
  );
}
