"use client";

import {
  TrendingUp,
  CheckCircle,
  ShieldCheck,
  Award,
  Star,
  Clock,
} from "lucide-react";

export function StatsSummary() {
  const stats = [
    {
      label: "Today's Earnings",
      value: "$482.50",
      icon: TrendingUp,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
    },
    {
      label: "Completed Projects",
      value: "3",
      icon: CheckCircle,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
    },
    {
      label: "Avg. Response",
      value: "12m",
      icon: Clock,
      color: "text-amber-400",
      bg: "bg-amber-400/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white/5 border border-white/10 p-6 rounded-[2rem] flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
          style={{ animationDelay: `${idx * 100}ms` }}
        >
          <div
            className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center`}
          >
            <stat.icon className={`w-6 h-6 ${stat.color}`} />
          </div>
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">
              {stat.label}
            </div>
            <div className="text-3xl font-black text-white">{stat.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function PortfolioSection() {
  const badges = [
    { label: "Licensed Contractor", icon: ShieldCheck, color: "text-blue-400" },
    { label: "Top Rated", icon: Star, color: "text-amber-400" },
    { label: "Safety Verified", icon: Award, color: "text-emerald-400" },
  ];

  return (
    <div className="bg-[#121212] border border-white/10 rounded-[2.5rem] p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xl font-black text-white mb-1">
            Professional Portfolio
          </h3>
          <p className="text-xs text-white/40 font-bold">
            Standard certifications for the Remodel Handyman Network
          </p>
        </div>
        <button className="text-[10px] font-black uppercase tracking-widest text-blue-400 border-b border-blue-400/30 pb-1">
          Edit Profile
        </button>
      </div>

      <div className="flex flex-wrap gap-4">
        {badges.map((badge, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 bg-white/5 px-5 py-3 rounded-2xl border border-white/5 transition-transform hover:scale-105 duration-300"
          >
            <badge.icon className={`w-5 h-5 ${badge.color}`} />
            <span className="text-xs font-black uppercase tracking-widest text-white/80">
              {badge.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
