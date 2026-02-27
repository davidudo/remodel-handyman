"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  CheckBadgeIcon,
  HeartIcon,
  InformationCircleIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

const pros = [
  {
    id: "mike-d",
    name: "Mike D.",
    distance: "0.5 mi",
    status: "Available now",
    avatar: "https://i.pravatar.cc/150?img=11",
    rating: "4.9",
    verified: true,
  },
  {
    id: "sarah-k",
    name: "Sarah K.",
    distance: "0.7 mi",
    status: "Busy until 4pm",
    avatar: "https://i.pravatar.cc/150?img=9",
    rating: "4.8",
    verified: true,
  },
  {
    id: "john-t",
    name: "John T.",
    distance: "1.2 mi",
    status: "Available now",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: "5.0",
    verified: true,
  },
  {
    id: "anna-l",
    name: "Anna L.",
    distance: "1.5 mi",
    status: "Available now",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: "4.7",
    verified: false,
  },
  {
    id: "chris-m",
    name: "Chris M.",
    distance: "2.1 mi",
    status: "Available now",
    avatar: "https://i.pravatar.cc/150?img=7",
    rating: "4.9",
    verified: true,
  },
];

export default function Sidebar() {
  const [search, setSearch] = useState("");

  return (
    <aside className="w-[400px] h-full bg-[#050505] border-r border-white/10 flex flex-col z-10">
      {/* Search Header */}
      <div className="p-6 pb-2">
        <div className="flex items-center justify-between mb-6">
          <button className="text-gray-400 hover:text-white transition-colors">
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center p-1.5">
              <Image src="/logo.svg" alt="Logo" width={20} height={20} />
            </div>
            <span className="text-white font-semibold flex items-center gap-1">
              remodel<span className="text-gray-500">handyman</span>
            </span>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors">
            <InformationCircleIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="relative mb-6">
          <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search for services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent/50 transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 mb-6 overflow-x-auto no-scrollbar pb-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-white hover:bg-white/10 transition-colors shrink-0">
            Show me: <span className="text-gray-400">Open Now</span>
            <ChevronDownIcon className="w-4 h-4 text-gray-600" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-white hover:bg-white/10 transition-colors shrink-0">
            Sort by: <span className="text-gray-400">Nearest</span>
            <ChevronDownIcon className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors shrink-0">
            <AdjustmentsHorizontalIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* List Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-4 pb-6">
        <div className="flex flex-col gap-2">
          {pros.map((pro) => (
            <button
              key={pro.id}
              className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all text-left"
            >
              <div className="relative shrink-0">
                <img
                  src={pro.avatar}
                  alt={pro.name}
                  className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all"
                />
                {pro.verified && (
                  <CheckBadgeIcon className="absolute -top-1 -right-1 w-5 h-5 text-accent bg-[#050505] rounded-full p-0.5" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <h3 className="text-white font-medium truncate">
                    {pro.name}
                  </h3>
                  <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <CheckBadgeIcon className="w-4 h-4 text-accent" />
                    <HeartIcon className="w-4 h-4 text-gray-500 hover:text-red-500 transition-colors" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-1">
                  {pro.distance} •{" "}
                  <span
                    className={
                      pro.status.includes("Available")
                        ? "text-success"
                        : "text-gray-600"
                    }
                  >
                    {pro.status}
                  </span>
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
