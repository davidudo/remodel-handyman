"use client";

import { MapPin, Clock, ChevronRight, Briefcase, Zap } from "lucide-react";

interface Job {
  id: string;
  customerName: string;
  category: string;
  distance: string;
  estimatedPayout: string;
  address: string;
  timeRemaining?: string;
}

interface JobListsProps {
  availableJobs: Job[];
  activeJob: Job | null;
  onJobSelect: (job: Job) => void;
}

export default function JobLists({ availableJobs, activeJob, onJobSelect }: JobListsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* ── Available Jobs (Marketplace) ── */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-600/10 flex items-center justify-center">
              <Zap className="w-4 h-4 text-blue-500" />
            </div>
            <h3 className="text-xl font-black text-white">Available Near You</h3>
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-white/40">
            {availableJobs.length} Live Leads
          </span>
        </div>

        <div className="space-y-4">
          {availableJobs.length > 0 ? (
            availableJobs.map((job) => (
              <button
                key={job.id}
                onClick={() => onJobSelect(job)}
                className="w-full text-left bg-[#121212] border border-white/5 hover:border-blue-500/30 p-6 rounded-[2rem] transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-black text-white group-hover:text-blue-400 transition-colors">
                      {job.category}
                    </h4>
                    <div className="flex items-center gap-2 text-white/40 text-xs font-bold mt-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-500" />
                      {job.distance} • {job.customerName}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-1">Payout</div>
                    <div className="text-lg font-black text-emerald-400">{job.estimatedPayout}</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-white/40">
                      <Clock className="w-3 h-3" />
                      {job.timeRemaining || "Needs ASAP"}
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            ))
          ) : (
            <div className="bg-white/5 border border-dashed border-white/10 p-12 rounded-[2.5rem] text-center">
              <p className="text-white/20 font-bold">Scanning for trade requests...</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Active Assignment / History ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-emerald-600/10 flex items-center justify-center">
            <Briefcase className="w-4 h-4 text-emerald-500" />
          </div>
          <h3 className="text-xl font-black text-white">Active Assignment</h3>
        </div>

        {activeJob ? (
          <div className="bg-blue-600/10 border border-blue-500/30 p-8 rounded-[2.5rem] relative overflow-hidden group">
            {/* Pulsing indicator */}
            <div className="absolute top-8 right-8 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">In Progress</span>
            </div>

            <div className="mb-8">
              <div className="text-[10px] font-black uppercase tracking-widest text-blue-400/60 mb-2">Current Mission</div>
              <h4 className="text-3xl font-black text-white tracking-tight mb-2">{activeJob.category}</h4>
              <p className="text-white/60 font-medium">{activeJob.address}</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-black/40 flex items-center justify-center text-white/40 border border-white/10">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/20">Client</div>
                  <div className="text-sm font-bold text-white">{activeJob.customerName}</div>
                </div>
              </div>
              <button className="h-12 px-6 rounded-xl bg-white text-black font-black uppercase tracking-widest text-[10px] hover:bg-blue-500 hover:text-white transition-colors">
                Resume Mission
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-[#121212] border border-white/5 p-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center space-y-4 h-[300px]">
            <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center mb-2">
              <Briefcase className="w-8 h-8 text-white/10" />
            </div>
            <div>
              <p className="text-white/40 font-bold mb-1 border-b border-transparent">No active assignments</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-white/20">Accept a lead to begin</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
