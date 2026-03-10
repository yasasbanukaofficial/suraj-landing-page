"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

export default function Results() {
  const years = ["2021", "2022", "2023", "2024", "2025"];
  const passRates = [72, 84, 91, 95, 98];

  return (
    <section id="results" className="px-6 md:px-12 lg:px-20 py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <SectionHeading
            label="Metric Excellence"
            title="Beyond the Classroom"
            description="Our performance metrics reflect a commitment to educational precision and student growth across Sri Lanka."
          />
        </div>

        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-8 p-8 md:p-12 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 flex flex-col justify-between overflow-hidden relative"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                  Performance Index
                </span>
              </div>
              <h3 className="text-3xl font-black tracking-tighter text-zinc-900 mb-8">
                The Growth Trajectory
              </h3>
            </div>

            <div className="relative h-80 mt-12 flex items-end justify-between gap-4">
              {passRates.map((rate, i) => (
                <div key={i} className="flex-1 flex flex-col items-center group cursor-default h-full justify-end">
                  <div className="relative w-full flex items-end justify-center h-full">
                    <div className="absolute inset-x-0 bottom-0 h-full bg-zinc-200/20 rounded-2xl" />
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${rate}%` }}
                      transition={{ duration: 1.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="relative w-full bg-zinc-900 group-hover:bg-orange-600 rounded-2xl transition-colors duration-500 flex items-start justify-center pt-4"
                    >
                      <span className="text-[10px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        {rate}%
                      </span>
                    </motion.div>
                  </div>
                  <span className="mt-6 text-[10px] font-bold text-zinc-400 tracking-widest uppercase">
                    {years[i]}
                  </span>
                </div>
              ))}
            </div>

            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
              <div className="h-full w-full" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-12 md:col-span-6 lg:col-span-4 p-10 rounded-[2.5rem] bg-orange-600 text-white flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">
                A/L Success Rate
              </span>
              <div className="mt-12">
                <div className="text-8xl font-black tracking-tighter leading-none mb-4">
                  98<span className="text-4xl align-top opacity-40">%</span>
                </div>
                <p className="text-sm font-medium opacity-80 leading-relaxed max-w-[200px]">
                  Highest recorded pass rate in the history of our academy.
                </p>
              </div>
            </div>
            
            <div className="relative z-10 flex justify-end">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-orange-600 transition-all duration-500">
                <ArrowUpRight size={20} />
              </div>
            </div>

            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-12 md:col-span-6 lg:col-span-4 p-10 rounded-[2.5rem] bg-zinc-900 text-white relative overflow-hidden group"
          >
            <div className="relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                Active Community
              </span>
              <div className="mt-12">
                <div className="text-6xl font-black tracking-tighter leading-none mb-4">
                  2,000<span className="text-2xl text-orange-500">+</span>
                </div>
                <p className="text-sm font-medium text-zinc-400">
                  Joined the elite circle of ICT mastery.
                </p>
              </div>
            </div>
            
            <div className="mt-10 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "85%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-full bg-orange-500" 
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-12 md:col-span-6 lg:col-span-4 p-10 rounded-[2.5rem] border border-zinc-100 bg-white relative overflow-hidden group hover:border-orange-500/20 transition-colors"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
              Curriculum Scope
            </span>
            <div className="mt-12">
              <div className="text-6xl font-black tracking-tighter text-zinc-900 leading-none mb-4">
                500<span className="text-2xl text-zinc-300">+</span>
              </div>
              <p className="text-sm font-medium text-zinc-500">
                Detailed lessons covering full A/L syllabus.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-12 md:col-span-6 lg:col-span-4 p-10 rounded-[2.5rem] border border-zinc-100 bg-white relative overflow-hidden group hover:border-orange-500/20 transition-colors"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
              Island-wide Presence
            </span>
            <div className="mt-12">
              <div className="text-6xl font-black tracking-tighter text-zinc-900 leading-none mb-4">
                15<span className="text-2xl text-zinc-300">/25</span>
              </div>
              <p className="text-sm font-medium text-zinc-500">
                Districts reached through our online platform.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
