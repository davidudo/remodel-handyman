"use client";

import {
  CheckCircle2,
  ChevronRight,
  Navigation,
  Phone,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";

interface ActiveJobHudProps {
  job: {
    customerName: string;
    category: string;
    address: string;
    tasks: string[];
  };
  onComplete: () => void;
}

export default function ActiveJobHud({ job, onComplete }: ActiveJobHudProps) {
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);

  const toggleTask = (index: number) => {
    setCompletedTasks((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const isAllCompleted = completedTasks.length === job.tasks.length;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Navigation HUD */}
      <div className="bg-[#121212] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="grid md:grid-cols-3">
          {/* Map Preview / Nav Context */}
          <div className="md:col-span-2 relative h-64 md:h-auto bg-[#1a1a1a] p-8 flex flex-col justify-end">
            <div className="absolute top-8 left-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg">
                <Navigation className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-white/40">
                  Navigating to
                </div>
                <div className="text-xl font-black text-white">
                  {job.address}
                </div>
              </div>
            </div>

            <div className="relative z-10 space-y-2">
              <h2 className="text-4xl font-black text-white tracking-tighter">
                {job.customerName}
              </h2>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-xs font-bold text-white transition-colors">
                  <Phone className="w-3.5 h-3.5" /> Call
                </button>
                <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-xs font-bold text-white transition-colors">
                  <MessageSquare className="w-3.5 h-3.5" /> Message
                </button>
              </div>
            </div>

            {/* Grid Pattern Background */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
          </div>

          {/* Checklist Sidebar */}
          <div className="bg-white/5 p-8 border-l border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs font-black uppercase tracking-widest text-white/40">
                Job Checklist
              </h3>
              <span className="text-[10px] font-black text-blue-400">
                {completedTasks.length}/{job.tasks.length}
              </span>
            </div>

            <div className="space-y-3 mb-8">
              {job.tasks.map((task, idx) => (
                <button
                  key={idx}
                  onClick={() => toggleTask(idx)}
                  className={`w-full flex items-center gap-3 p-4 rounded-2xl border transition-all duration-300 ${
                    completedTasks.includes(idx)
                      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                      : "bg-white/5 border-white/5 text-white/60 hover:bg-white/10"
                  }`}
                >
                  {completedTasks.includes(idx) ? (
                    <CheckCircle2 className="w-5 h-5 transition-transform duration-300 scale-110" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-current opacity-20" />
                  )}
                  <span className="text-sm font-bold text-left">{task}</span>
                </button>
              ))}
            </div>

            <button
              disabled={!isAllCompleted}
              onClick={onComplete}
              className={`w-full h-14 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2 ${
                isAllCompleted
                  ? "bg-emerald-600 text-white shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:scale-[1.02] active:scale-95"
                  : "bg-white/5 text-white/20 cursor-not-allowed border border-white/5"
              }`}
            >
              Complete Job
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
