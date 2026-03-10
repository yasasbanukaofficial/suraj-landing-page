import Navbar from "@/components/layout/Navbar";
import GridBg from "@/components/layout/GridBg";
import Hero from "@/components/section/Hero";
import About from "@/components/section/About";
import Results from "@/components/section/Results";
import Courses from "@/components/section/Courses";
import WhyChoose from "@/components/section/WhyChoose";
import Testimonials from "@/components/section/Testimonials";
import Contact from "@/components/section/Contact";
import Footer from "@/components/section/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-orange-100">
      <Navbar />
      <GridBg />
      <main className="flex flex-col pt-32">
        <Hero />
        <About />
        <Results />
        <Courses />
        <WhyChoose />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
