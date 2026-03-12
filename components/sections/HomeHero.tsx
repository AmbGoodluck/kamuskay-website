"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiPlay } from "react-icons/hi";
import VideoModal from "@/components/ui/VideoModal";

export default function HomeHero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Hero background — Kamuskay at Berea College official backdrop */}
        <div className="absolute inset-0">
          <Image
            src="/images/berea-portrait-smiling.jpeg"
            alt="Kamuskay Kamara at Berea College"
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
          {/* Dark gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3B]/92 via-[#0B1F3B]/75 to-[#0B1F3B]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/60 via-transparent to-transparent" />
        </div>

        {/* Decorative dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Ambient glow accents */}
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#F2A93B]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-2xl">
            {/* Live badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F2A93B]/20 border border-[#F2A93B]/40 rounded-full text-[#F2A93B] text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-[#F2A93B] rounded-full animate-pulse" />
              Berea College · SGA Executive Chair Candidate
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight font-poppins"
            >
              Leadership that
              <span className="block text-[#F2A93B]">listens.</span>
              Action that
              <span className="block text-[#30A38A]">delivers.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-xl"
            >
              Kamuskay Kamara is a junior at Berea College, community builder,
              and candidate for SGA Executive Chair.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/kamuskay4sga"
                className="w-full sm:w-auto text-center px-8 py-4 bg-[#F2A93B] text-[#0B1F3B] font-bold text-base rounded-full hover:bg-[#f7c46d] hover:shadow-xl hover:shadow-[#F2A93B]/30 hover:-translate-y-1 transition-all duration-200"
              >
                See the Vision
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto text-center px-8 py-4 border-2 border-white/50 text-white font-bold text-base rounded-full hover:border-white hover:bg-white/10 hover:-translate-y-1 transition-all duration-200"
              >
                Meet Kamuskay
              </Link>
            </motion.div>

            {/* Video play button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              onClick={() => setVideoOpen(true)}
              className="mt-8 flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
              aria-label="Watch intro video"
            >
              <span className="w-12 h-12 rounded-full border-2 border-white/40 group-hover:border-[#F2A93B] group-hover:bg-[#F2A93B]/20 flex items-center justify-center transition-all duration-200">
                <HiPlay size={20} className="ml-0.5" />
              </span>
              <span className="text-sm font-medium">Watch Intro Video (1 min)</span>
            </motion.button>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </section>

      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  );
}
