"use client";

import { useState, useEffect } from "react";
import {
  Bell,
  LayoutDashboard,
  Briefcase,
  User,
  Settings,
  CheckCircle,
} from "lucide-react";
import OnDutyToggle from "./_components/OnDutyToggle";
import JobAlertModal from "./_components/JobAlertModal";
import ActiveJobHud from "./_components/ActiveJobHud";
import {
  StatsSummary,
  PortfolioSection,
} from "./_components/DashboardSections";

export default function HandymanDashboard() {
  const [isOnDuty, setIsOnDuty] = useState(false);
  const [jobStatus, setJobStatus] = useState<
    "idle" | "alerting" | "active" | "completed"
  >("idle");
  const [jobData, setJobData] = useState<any>(null);

  // Simulation: Trigger a job alert 3 seconds after going on duty
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isOnDuty && jobStatus === "idle") {
      timeout = setTimeout(() => {
        setJobData({
          customerName: "Sarah Jenkins",
          distance: "1.2 miles away",
          category: "Leaking Pipe Repair",
          estimatedPayout: "$145.00",
          address: "124 Oakwood Lane",
          tasks: [
            "Diagnose primary leak",
            "Replace valve washers",
            "Verify water pressure",
            "Clean work area",
          ],
        });
        setJobStatus("alerting");
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [isOnDuty, jobStatus]);

  const handleAcceptJob = () => {
    setJobStatus("active");
  };

  const handleDeclineJob = () => {
    setJobStatus("idle");
    setJobData(null);
  };

  const handleCompleteJob = () => {
    setJobStatus("completed");
    setTimeout(() => {
      setJobStatus("idle");
      setJobData(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      {/* ── Sidebar ── */}
      <aside className="fixed left-0 top-0 bottom-0 w-24 bg-[#0A0A0A] border-r border-white/5 flex flex-col items-center py-10 z-50">
        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-12 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
          <span className="text-xl font-black">R</span>
        </div>

        <nav className="flex-1 flex flex-col gap-8">
          {[
            { icon: LayoutDashboard, active: true },
            { icon: Briefcase, active: false },
            { icon: User, active: false },
            { icon: Settings, active: false },
          ].map((item, idx) => (
            <button
              key={idx}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                item.active
                  ? "bg-white/10 text-white"
                  : "text-white/20 hover:text-white/40"
              }`}
            >
              <item.icon className="w-6 h-6" />
            </button>
          ))}
        </nav>
      </aside>

      {/* ── Main Content ── */}
      <main className="pl-24 min-h-screen">
        {/* Top Header */}
        <header className="h-24 px-12 flex items-center justify-between border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-black uppercase tracking-tight">
              Contractor Hub
            </h1>
            <div className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">
                System Live
              </span>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <OnDutyToggle isOnDuty={isOnDuty} onToggle={setIsOnDuty} />

            <div className="flex items-center gap-4">
              <button className="relative w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Bell className="w-5 h-5 text-white/60" />
                <div className="absolute top-3.5 right-3.5 w-2 h-2 rounded-full bg-blue-500" />
              </button>
              <div className="w-12 h-12 rounded-2xl border border-white/10 overflow-hidden bg-white/5 p-1">
                <img
                  src="https://i.pravatar.cc/150?img=11"
                  alt="Avatar"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Canvas */}
        <div className="p-12 max-w-7xl mx-auto">
          {jobStatus === "active" ? (
            <div className="animate-in fade-in zoom-in-95 duration-500">
              <div className="mb-12">
                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-2">
                  Live Operation
                </h2>
                <h3 className="text-4xl font-black text-white tracking-tighter">
                  Current Assignment
                </h3>
              </div>
              <ActiveJobHud job={jobData} onComplete={handleCompleteJob} />
            </div>
          ) : jobStatus === "completed" ? (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="w-24 h-24 rounded-[2rem] bg-emerald-600 flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(16,185,129,0.4)] animate-bounce">
                <CheckCircle className="w-12 h-12 text-white" strokeWidth={3} />
              </div>
              <h2 className="text-5xl font-black text-white tracking-tighter mb-4">
                Job Perfected!
              </h2>
              <p className="text-xl text-white/40 font-bold mb-8">
                Your earnings have been updated locally.
              </p>
              <div className="bg-emerald-400/10 text-emerald-400 px-8 py-4 rounded-2xl border border-emerald-400/20 font-black text-2xl">
                +$145.00 Added
              </div>
            </div>
          ) : (
            <div className="space-y-12 animate-in fade-in duration-500">
              <div className="flex flex-col gap-2">
                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-white/40">
                  Market Overview
                </h2>
                <h3 className="text-4xl font-black text-white tracking-tighter">
                  Welcome back, Marcus
                </h3>
              </div>

              <StatsSummary />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <PortfolioSection />

                {/* Availability Promotion Card */}
                <div
                  className={`p-8 rounded-[2.5rem] flex flex-col justify-center border transition-all duration-700 ${
                    isOnDuty
                      ? "bg-blue-600/10 border-blue-500/30"
                      : "bg-[#121212] border-white/5"
                  }`}
                >
                  <h4 className="text-xl font-black mb-4">
                    Dispatcher Visibility
                  </h4>
                  <p className="text-sm text-white/40 font-bold mb-8 leading-relaxed">
                    {isOnDuty
                      ? "You are currently visible to homeowners within 15 miles. Positioning optimal."
                      : "Go On-Duty to start receiving local trade requests in real-time."}
                  </p>
                  <div className="flex items-center gap-4">
                    {isOnDuty && (
                      <div className="flex -space-x-3">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="w-10 h-10 rounded-full border-2 border-black overflow-hidden shadow-xl"
                          >
                            <img
                              src={`https://i.pravatar.cc/150?img=${i + 20}`}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                        <div className="w-10 h-10 rounded-full bg-blue-600 border-2 border-black flex items-center justify-center text-[10px] font-black">
                          +12
                        </div>
                      </div>
                    )}
                    <span className="text-xs font-bold text-blue-400">
                      {isOnDuty
                        ? "12 other pros active"
                        : "0 pros active near you"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── Background Patterns ── */}
        <div className="fixed inset-0 pointer-events-none -z-10 opacity-30">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, #1b4fd810 0%, transparent 70%)",
            }}
          />
        </div>
      </main>

      {/* ── Overlay Modal ── */}
      <JobAlertModal
        isOpen={jobStatus === "alerting"}
        jobData={jobData}
        onAccept={handleAcceptJob}
        onDecline={handleDeclineJob}
      />
    </div>
  );
}
