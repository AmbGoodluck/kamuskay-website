"use client";

import { useState, useRef } from "react";
import AnimateIn from "@/components/ui/AnimateIn";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
  HiMail,
  HiShare,
  HiCheckCircle,
} from "react-icons/hi";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const priorities = [
  {
    title: "Student Welfare & Mental Health",
    icon: "🧠",
    commitments: [
      "Advocate for expanded counseling services and reduced wait times",
      "Create peer support networks across residences and departments",
      "Push for mental health days to be formally recognized in the academic calendar",
    ],
    detail:
      "Too many Berea students are navigating mental health challenges in silence. Kamuskay will work with administration and health services to normalize help-seeking and increase resources.",
  },
  {
    title: "Labor Equity & Fairness",
    icon: "⚖️",
    commitments: [
      "Review WLS placement disparities and advocate for fair task assignments",
      "Create a student-accessible grievance process for labor concerns",
      "Ensure every student understands their rights and responsibilities in WLS",
    ],
    detail:
      "Having overseen 450+ students in WLS, Kamuskay has seen firsthand where the system works and where it falls short. He brings lived expertise to this issue.",
  },
  {
    title: "Academic Support & Advising",
    icon: "📚",
    commitments: [
      "Improve communication between advisors and students, especially for first-generation students",
      "Expand tutoring and study resources during peak exam seasons",
      "Advocate for transparent academic policy communication",
    ],
    detail:
      "Academic success should not depend on who you know. Kamuskay will push for systems that give every student equal access to guidance and support.",
  },
  {
    title: "First-Year & Transfer Support",
    icon: "🌱",
    commitments: [
      "Expand the First Year Summit to include more peer mentorship",
      "Create welcome structures for transfer students who currently have no formal onboarding",
      "Connect new students to campus resources within their first week",
    ],
    detail:
      "Kamuskay knows what it feels like to arrive somewhere new. His work as a First Year Summit facilitator and RA informs his vision for stronger student onboarding.",
  },
  {
    title: "Campus Life & Culture",
    icon: "🎉",
    commitments: [
      "Organize regular cross-cultural and cross-department social events",
      "Support student organizations in accessing funding and spaces",
      "Build a campus calendar that genuinely reflects Berea's diversity",
    ],
    detail:
      "A campus is not just a place you study. It's a place you live. Kamuskay will make sure Berea feels like a true home away from home.",
  },
];

const makaylaSlides = [
  {
    // TODO: Add photo → /public/images/campaign/makayla-campus.jpg
    imgSrc: "",
    imgAlt: "Makayla Hughes on Berea's campus",
    caption:
      "Makayla on Berea's campus, committed to student leadership and service.",
  },
  {
    // TODO: Add photo → /public/images/campaign/makayla-bsu.jpg
    imgSrc: "",
    imgAlt: "Makayla at the Black Student Union",
    caption:
      "Vice President of the Black Student Union, advocating for Black student voices.",
  },
  {
    // TODO: Add photo → /public/images/campaign/makayla-bwi.jpg
    imgSrc: "",
    imgAlt: "Black Women Initiative event",
    caption:
      "Lead organizer of the Black Women Initiative, empowering Black women on campus.",
  },
  {
    // TODO: Add photo → /public/images/campaign/makayla-cheer.jpg
    imgSrc: "",
    imgAlt: "Makayla on the Berea College cheer team",
    caption:
      "Former member of the Berea College cheer team, building spirit and community.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

/** Accordion card for each of Kamuskay's five priorities */
function PriorityCard({
  priority,
  index,
}: {
  priority: (typeof priorities)[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <AnimateIn delay={index * 0.07}>
      <div className="bg-white rounded-2xl border border-[#e0e0e0] overflow-hidden hover:shadow-md transition-shadow h-full">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="w-full p-6 flex items-start gap-4 text-left group"
          aria-expanded={open ? "true" : "false"}
        >
          <span className="text-3xl shrink-0 mt-0.5">{priority.icon}</span>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-[#0B1F3B] text-lg font-poppins group-hover:text-[#30A38A] transition-colors leading-snug">
              {priority.title}
            </h3>
            <p className="text-[#666] text-sm mt-1 line-clamp-2">
              {priority.detail}
            </p>
          </div>
          <HiChevronDown
            className={`text-[#888] shrink-0 mt-1 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
            size={20}
          />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 border-t border-[#f0f0f0] pt-4">
                <p className="text-[#555] text-sm leading-relaxed mb-4">
                  {priority.detail}
                </p>
                <p className="text-xs font-semibold text-[#888] uppercase tracking-widest mb-3">
                  Commitments
                </p>
                <ul className="space-y-2">
                  {priority.commitments.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-2 text-sm text-[#444]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#30A38A] mt-2 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimateIn>
  );
}

/** Special card for Makayla's VP commitment — teal left-border accent */
function VPCommitmentCard({ index }: { index: number }) {
  return (
    <AnimateIn delay={index * 0.07}>
      <div className="bg-white rounded-2xl border border-[#e0e0e0] overflow-hidden hover:shadow-md transition-shadow h-full border-l-teal-accent">
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-3xl shrink-0 mt-0.5">🤝</span>
            <div>
              <h3 className="font-bold text-[#0B1F3B] text-lg font-poppins leading-snug">
                Vice President&apos;s Commitment
              </h3>
              <p className="text-[#30A38A] text-sm font-semibold mt-0.5">
                Makayla&apos;s Promise to Students
              </p>
            </div>
          </div>
          <p className="text-[#555] text-sm leading-relaxed mb-4">
            As Vice President, Makayla will:
          </p>
          <ul className="space-y-3 flex-1">
            {[
              "Champion the voices of first-generation, low-income, and marginalized students in every room where decisions are made.",
              "Strengthen spaces like the Black Student Union and Black Women Initiative so students feel seen, supported, and safe.",
              "Advocate for policies and programs that help every student not just survive at Berea, but truly thrive—academically, emotionally, and in community.",
            ].map((c) => (
              <li
                key={c}
                className="flex items-start gap-2 text-sm text-[#444]"
              >
                <HiCheckCircle
                  className="text-[#30A38A] shrink-0 mt-0.5"
                  size={16}
                />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimateIn>
  );
}

/** Horizontally scrollable slider for Makayla's photos */
function MakaylaSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const total = makaylaSlides.length;

  const scrollByPage = (dir: "prev" | "next") => {
    if (!trackRef.current) return;
    const width = trackRef.current.clientWidth;
    trackRef.current.scrollBy({
      left: dir === "next" ? width : -width,
      behavior: "smooth",
    });
  };

  const scrollToSlide = (i: number) => {
    if (!trackRef.current) return;
    const children = trackRef.current.children;
    if (children[i]) {
      (children[i] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
    setActive(i);
  };

  const handleScroll = () => {
    if (!trackRef.current) return;
    const el = trackRef.current;
    const firstChild = el.children[0] as HTMLElement | undefined;
    if (!firstChild) return;
    const slideWidth = firstChild.offsetWidth + 16; // card width + gap-4
    const i = Math.round(el.scrollLeft / slideWidth);
    setActive(Math.min(Math.max(i, 0), total - 1));
  };

  return (
    <div className="relative px-1">
      {/* ── Track ── */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 no-scrollbar"
        onScroll={handleScroll}
      >
        {makaylaSlides.map((slide, i) => (
          <div
            key={i}
            className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-8px)] lg:w-[calc(33.33%-11px)]"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e8e8e8] hover:shadow-md transition-shadow h-full">
              {/* Image area */}
              <div className="aspect-[4/3] bg-gradient-to-br from-[#132d57] to-[#0B1F3B] flex items-center justify-center relative overflow-hidden">
                {slide.imgSrc ? (
                  // Once real photos are added they render here
                  <img
                    src={slide.imgSrc}
                    alt={slide.imgAlt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  /* ── Placeholder until real photos are dropped in ── */
                  <div className="text-center p-6">
                    <div className="text-6xl font-black text-white/10 font-poppins select-none">
                      M
                    </div>
                    <p className="text-white/40 text-xs mt-2 leading-snug px-2">
                      {slide.imgAlt}
                    </p>
                    <p className="text-white/20 text-[10px] mt-2">
                      📸 /public/images/campaign/
                    </p>
                  </div>
                )}
                {/* Slide counter badge */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#30A38A]/90 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                  {i + 1}/{total}
                </div>
              </div>
              {/* Caption */}
              <div className="p-4">
                <p className="text-[#444] text-sm leading-relaxed">
                  {slide.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Desktop arrow buttons ── */}
      <button
        type="button"
        onClick={() => scrollByPage("prev")}
        className="absolute -left-4 top-1/3 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md border border-[#e0e0e0] items-center justify-center text-[#0B1F3B] hover:bg-[#0B1F3B] hover:text-white transition-colors z-10 hidden sm:flex"
        aria-label="Previous slide"
      >
        <HiChevronLeft size={18} />
      </button>
      <button
        type="button"
        onClick={() => scrollByPage("next")}
        className="absolute -right-4 top-1/3 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md border border-[#e0e0e0] items-center justify-center text-[#0B1F3B] hover:bg-[#0B1F3B] hover:text-white transition-colors z-10 hidden sm:flex"
        aria-label="Next slide"
      >
        <HiChevronRight size={18} />
      </button>

      {/* ── Dot indicators ── */}
      <div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="Slider navigation">
        {makaylaSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollToSlide(i)}
            role="tab"
            aria-selected={i === active ? "true" : "false"}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-200 ${
              i === active
                ? "w-6 h-2.5 bg-[#30A38A]"
                : "w-2.5 h-2.5 bg-[#ccc] hover:bg-[#888]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function Kamuskay4SGAPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          1. TICKET HERO
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0B1F3B] pt-16"
        aria-label="Campaign ticket hero"
      >
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3B] via-[#132d57] to-[#071428]" />
        <div className="absolute inset-0 opacity-5 radial-bg" />
        <div className="absolute bottom-0 right-0 w-1/2 h-2/3 bg-[#F2A93B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 left-1/3 w-1/3 h-1/3 bg-[#30A38A]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* ── Left: Copy ── */}
            <div>
              <AnimateIn>
                {/* Election date badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F2A93B]/20 border border-[#F2A93B]/40 rounded-full text-[#F2A93B] text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-[#F2A93B] rounded-full animate-pulse" />
                  Election Day: March 24, 2026
                </div>

                {/* Main heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-poppins leading-[1.05] mb-6">
                  Kamuskay &amp; Makayla
                  <br />
                  <span className="text-[#F2A93B]">for SGA President</span>
                  <br />
                  <span className="text-white/80 text-3xl sm:text-4xl lg:text-5xl">
                    &amp; Vice President
                  </span>
                </h1>

                {/* Subheading */}
                <p className="text-[#30A38A] font-semibold text-lg md:text-xl mb-3">
                  A solution‑driven team committed to student voice, belonging,
                  and real change.
                </p>

                {/* Supporting line */}
                <p className="text-white/65 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                  Together, Kamuskay Kamara and Makayla Hughes are running to
                  build a Berea where every student—across identity, background,
                  and experience—has the opportunity to thrive.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#priorities"
                    className="px-8 py-4 bg-[#F2A93B] text-[#0B1F3B] font-bold rounded-full hover:bg-[#f7c46d] hover:shadow-xl hover:shadow-[#F2A93B]/30 hover:-translate-y-1 transition-all duration-200 text-center min-h-[52px] flex items-center justify-center"
                  >
                    Read Our Priorities
                  </a>
                  <a
                    href="#makayla"
                    className="px-8 py-4 border-2 border-white/40 text-white font-bold rounded-full hover:border-[#30A38A] hover:bg-[#30A38A]/10 hover:-translate-y-1 transition-all duration-200 text-center min-h-[52px] flex items-center justify-center"
                  >
                    Meet Makayla
                  </a>
                </div>
              </AnimateIn>
            </div>

            {/* ── Right: Ticket visual ── */}
            <AnimateIn direction="right" delay={0.2}>
              <div className="relative max-w-md mx-auto lg:mx-0 lg:ml-auto">
                {/*
                  TODO: Replace this placeholder with the actual ticket hero image.
                  Recommended: /public/images/campaign/ticket-hero.jpg
                  A photo of Kamuskay & Makayla together works great here.
                */}
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[#132d57] to-[#0B1F3B] shadow-2xl border border-white/10">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <div className="flex gap-4 items-end">
                      <div className="text-6xl font-black text-white/10 font-poppins">
                        K
                      </div>
                      <div className="text-5xl font-black text-[#30A38A]/20 font-poppins">
                        &amp;
                      </div>
                      <div className="text-6xl font-black text-white/10 font-poppins">
                        M
                      </div>
                    </div>
                    <p className="text-white/20 text-sm text-center px-8">
                      Ticket photo here
                      <br />
                      /public/images/campaign/ticket-hero.jpg
                    </p>
                  </div>
                  {/* Gold gradient bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#F2A93B]/30 to-transparent" />
                  {/* Names overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-bold text-sm font-poppins">
                          Kamuskay Kamara
                        </p>
                        <p className="text-[#F2A93B] text-xs">President</p>
                      </div>
                      <div className="w-px h-8 bg-white/20" />
                      <div className="text-right">
                        <p className="text-white font-bold text-sm font-poppins">
                          Makayla Hughes
                        </p>
                        <p className="text-[#30A38A] text-xs">Vice President</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating accent badge */}
                <div className="absolute -bottom-4 -left-4 bg-[#30A38A] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  #Kamuskay4SGA
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          2. MEET YOUR PRESIDENT & VICE PRESIDENT
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="py-16 md:py-24 bg-[#F5F5F7]"
        aria-label="Meet the candidates"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-12">
              <span className="inline-block text-[#30A38A] text-sm font-semibold tracking-widest uppercase mb-3">
                Your 2026 Ticket
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-[#0B1F3B] font-poppins">
                Meet your President &amp; Vice President
              </h2>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* ── Kamuskay Card ── */}
            <AnimateIn delay={0.1}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#e8e8e8] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                {/* Profile image */}
                <div className="aspect-[3/2] bg-gradient-to-br from-[#0B1F3B] to-[#132d57] flex items-center justify-center relative overflow-hidden">
                  {/*
                    TODO: Replace with actual photo.
                    Recommended: /public/images/campaign/kamuskay-profile.jpg
                  */}
                  <div className="text-center">
                    <div className="text-7xl font-black text-white/10 font-poppins">
                      K
                    </div>
                    <p className="text-white/25 text-xs mt-1">
                      /images/campaign/kamuskay-profile.jpg
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F2A93B]/25 to-transparent" />
                  <div className="absolute top-3 left-3 bg-[#F2A93B] text-[#0B1F3B] text-xs font-bold px-3 py-1 rounded-full">
                    President
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-[#0B1F3B] font-poppins">
                    Kamuskay Kamara
                  </h3>
                  <p className="text-[#F2A93B] font-semibold text-sm mt-0.5 mb-4">
                    Candidate for SGA President
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "Junior, Communication & Political Science double major, minor in Law, Ethics & Society.",
                      "Student Director of the Work-Learning-Service program, supervising 450+ students.",
                      "Community builder, entrepreneur, and long-term policymaker in the making.",
                    ].map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm text-[#444]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F2A93B] mt-2 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateIn>

            {/* ── Makayla Card ── */}
            <AnimateIn delay={0.15}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#e8e8e8] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                {/* Profile image */}
                <div className="aspect-[3/2] bg-gradient-to-br from-[#227a67] to-[#0B1F3B] flex items-center justify-center relative overflow-hidden">
                  {/*
                    TODO: Replace with actual photo.
                    Recommended: /public/images/campaign/makayla-profile.jpg
                  */}
                  <div className="text-center">
                    <div className="text-7xl font-black text-white/10 font-poppins">
                      M
                    </div>
                    <p className="text-white/25 text-xs mt-1">
                      /images/campaign/makayla-profile.jpg
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#30A38A]/30 to-transparent" />
                  <div className="absolute top-3 left-3 bg-[#30A38A] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Vice President
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-[#0B1F3B] font-poppins">
                    Makayla Hughes
                  </h3>
                  <p className="text-[#30A38A] font-semibold text-sm mt-0.5 mb-4">
                    Candidate for Vice President
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "Sophomore, Child and Family Studies major with a focus in child development.",
                      "Vice President of the Black Student Union and lead organizer of the Black Women Initiative.",
                      "First-generation student from the South Side of Chicago, rooted in advocacy, honesty, and action.",
                    ].map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm text-[#444]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#30A38A] mt-2 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          3. MAKAYLA SPOTLIGHT + HORIZONTAL SLIDER
      ══════════════════════════════════════════════════════════════════ */}
      <section
        id="makayla"
        className="py-16 md:py-24 bg-white scroll-mt-20"
        aria-label="Makayla Hughes spotlight"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="mb-3">
              <span className="inline-block text-[#30A38A] text-sm font-semibold tracking-widest uppercase mb-3">
                Vice Presidential Candidate
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-[#0B1F3B] font-poppins">
                Meet Makayla Hughes
              </h2>
              <p className="text-[#F2A93B] font-semibold mt-1">
                Candidate for Vice President
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mt-8">
            {/* ── Bio copy ── */}
            <AnimateIn delay={0.1}>
              <div className="space-y-4 text-[#444] text-base leading-relaxed">
                <p>
                  Makayla Hughes is a sophomore majoring in Child and Family
                  Studies with a focus in child development. Since arriving at
                  Berea, she has been dedicated to service, leadership, and
                  uplifting the voices of others.
                </p>
                <p>
                  She currently serves as Vice President of the Black Student
                  Union and lead organizer of the Black Women Initiative, a
                  growing program designed to empower and support Black women on
                  campus. Makayla also spent two years on the cheer team,
                  helping build school spirit and community.
                </p>
                <p>
                  A proud first-generation and Emerging Scholars Program student
                  from the South Side of Chicago, Makayla was raised by strong
                  women and carries their resilience into every space she enters.
                  After graduating, she plans to become a midwife and open a
                  clinic dedicated to caring for women in minority communities.
                </p>
                {/* Decorative quote pull */}
                <blockquote className="border-l-4 border-[#30A38A] pl-4 mt-6 text-[#0B1F3B] italic font-medium">
                  &ldquo;I want every student to know they have someone in their
                  corner—someone who will fight for their voice, their space,
                  and their future at Berea.&rdquo;
                  <footer className="text-[#888] text-sm font-normal not-italic mt-1">
                    — Makayla Hughes
                  </footer>
                </blockquote>
              </div>
            </AnimateIn>

            {/* ── Photo slider ── */}
            <AnimateIn delay={0.15} className="overflow-hidden">
              <div className="relative">
                <p className="text-xs font-semibold text-[#888] uppercase tracking-widest mb-4">
                  Photo Gallery
                </p>
                <MakaylaSlider />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. JOINT VISION
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="py-16 md:py-24 bg-[#F5F5F7]"
        aria-label="Joint vision"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-12">
              <span className="inline-block text-[#30A38A] text-sm font-semibold tracking-widest uppercase mb-3">
                Shared Mission
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-[#0B1F3B] font-poppins">
                Our Vision for Berea Students
              </h2>
              <p className="mt-4 text-[#666] text-base max-w-2xl mx-auto">
                As a President–Vice President team, Kamuskay and Makayla are
                committed to building a campus where every student feels
                represented, supported, and empowered to succeed.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏠",
                title: "Belonging & Representation",
                color: "border-[#F2A93B]",
                iconBg: "bg-[#F2A93B]/10",
                body: "Cross-cultural dialogue, support for the Black Student Union and Black Women Initiative, and intentional work to make Berea feel like a genuine home for every student—regardless of where they come from.",
              },
              {
                icon: "🛡️",
                title: "Support & Advocacy",
                color: "border-[#30A38A]",
                iconBg: "bg-[#30A38A]/10",
                body: "Student welfare, fair labor experiences, and dedicated support for first-generation and low-income students. Listening isn't enough—this ticket will act on what it hears.",
              },
              {
                icon: "✅",
                title: "Action & Accountability",
                color: "border-[#0B1F3B]",
                iconBg: "bg-[#0B1F3B]/10",
                body: "Moving from listening to real, measurable action. Transparent follow-through on every commitment, so students always know what SGA is doing and why.",
              },
            ].map((pillar, i) => (
              <AnimateIn key={pillar.title} delay={i * 0.1}>
                <div
                  className={`bg-white rounded-3xl p-7 border-t-4 ${pillar.color} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl ${pillar.iconBg} flex items-center justify-center text-2xl mb-4`}
                  >
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-black text-[#0B1F3B] font-poppins mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-[#555] text-sm leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. SIX PRIORITIES. REAL COMMITMENTS.
      ══════════════════════════════════════════════════════════════════ */}
      <section
        id="priorities"
        className="py-16 md:py-24 bg-white scroll-mt-20"
        aria-label="Platform priorities"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-12">
              <span className="inline-block text-[#30A38A] text-sm font-semibold tracking-widest uppercase mb-3">
                The Platform
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-[#0B1F3B] font-poppins">
                Six Priorities. Real Commitments.
              </h2>
              <p className="mt-4 text-[#666] text-base">
                Click any priority to expand and see concrete commitments.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {priorities.map((priority, i) => (
              <PriorityCard key={priority.title} priority={priority} index={i} />
            ))}
            {/* 6th card: Makayla's VP commitment — teal left-border accent */}
            <VPCommitmentCard index={5} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          6. ELECTION CTA BAND
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="py-16 md:py-20 bg-[#0B1F3B] relative overflow-hidden"
        aria-label="Election call to action"
      >
        {/* Background accents */}
        <div className="absolute inset-0 opacity-5 radial-bg" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#F2A93B]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#30A38A]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F2A93B]/20 border border-[#F2A93B]/40 rounded-full text-[#F2A93B] text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#F2A93B] rounded-full animate-pulse" />
              Mark Your Calendar
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-poppins mb-4">
              Election Day
              <span className="text-[#F2A93B] block sm:inline">
                {" "}
                — March 24, 2026
              </span>
            </h2>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Your vote decides the leadership that will listen, advocate, and
              act for you.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kamarak@berea.edu?subject=I pledge to vote for Kamuskay %26 Makayla"
                className="px-10 py-4 bg-[#F2A93B] text-[#0B1F3B] font-black rounded-full hover:bg-[#f7c46d] hover:shadow-2xl hover:shadow-[#F2A93B]/30 hover:-translate-y-1 transition-all duration-200 text-base flex items-center justify-center gap-2 min-h-[56px]"
              >
                <HiMail size={20} />
                Pledge to Vote
              </a>
              <button
                type="button"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: "Kamuskay & Makayla for SGA",
                      text: "Vote for Kamuskay Kamara & Makayla Hughes for SGA President & Vice President on March 24, 2026!",
                      url: window.location.href,
                    });
                  } else {
                    // Fallback: copy link to clipboard
                    navigator.clipboard.writeText(window.location.href);
                    alert("Link copied to clipboard!");
                  }
                }}
                className="px-10 py-4 border-2 border-white/40 text-white font-black rounded-full hover:border-[#30A38A] hover:bg-[#30A38A]/10 hover:-translate-y-1 transition-all duration-200 text-base flex items-center justify-center gap-2 min-h-[56px]"
              >
                <HiShare size={20} />
                Share with a Friend
              </button>
            </div>

            {/* Bottom tag line */}
            <p className="mt-10 text-white/30 text-sm">
              #Kamuskay4SGA · Kamuskay Kamara &amp; Makayla Hughes · Berea
              College SGA 2026
            </p>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
