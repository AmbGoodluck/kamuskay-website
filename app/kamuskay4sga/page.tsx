"use client";

import { useState } from "react";
import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import VideoModal from "@/components/ui/VideoModal";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown, HiPlay, HiMail, HiUserGroup, HiShare } from "react-icons/hi";

const issues = [
  {
    title: "Student Welfare & Mental Health",
    icon: "🧠",
    commitments: [
      "Advocate for expanded counseling services and reduced wait times",
      "Create peer support networks across residences and departments",
      "Push for mental health days to be formally recognized in the academic calendar",
    ],
    detail: "Too many Berea students are navigating mental health challenges in silence. Kamuskay will work with administration and health services to normalize help-seeking and increase resources.",
  },
  {
    title: "Labor Equity & Fairness",
    icon: "⚖️",
    commitments: [
      "Review WLS placement disparities and advocate for fair task assignments",
      "Create a student-accessible grievance process for labor concerns",
      "Ensure every student understands their rights and responsibilities in WLS",
    ],
    detail: "Having overseen 450+ students in WLS, Kamuskay has seen firsthand where the system works and where it falls short. He brings lived expertise to this issue.",
  },
  {
    title: "Academic Support & Advising",
    icon: "📚",
    commitments: [
      "Improve communication between advisors and students, especially for first-generation students",
      "Expand tutoring and study resources during peak exam seasons",
      "Advocate for transparent academic policy communication",
    ],
    detail: "Academic success should not depend on who you know. Kamuskay will push for systems that give every student equal access to guidance and support.",
  },
  {
    title: "First-Year & Transfer Support",
    icon: "🌱",
    commitments: [
      "Expand the First Year Summit to include more peer mentorship",
      "Create welcome structures for transfer students who currently have no formal onboarding",
      "Connect new students to campus resources within their first week",
    ],
    detail: "Kamuskay knows what it feels like to arrive somewhere new. His work as a First Year Summit facilitator and RA informs his vision for stronger student onboarding.",
  },
  {
    title: "Campus Life & Culture",
    icon: "🎉",
    commitments: [
      "Organize regular cross-cultural and cross-department social events",
      "Support student organizations in accessing funding and spaces",
      "Build a campus calendar that genuinely reflects Berea's diversity",
    ],
    detail: "A campus is not just a place you study. It's a place you live. Kamuskay will make sure Berea feels like a true home away from home.",
  },
  {
    title: "Student Voice & Transparency",
    icon: "🗣️",
    commitments: [
      "Establish a regular SGA town hall for open student feedback",
      "Publish clear summaries of SGA decisions and their rationale",
      "Create accessible channels for students to submit issues directly to SGA",
    ],
    detail: "SGA should be accountable to students, not just administrators. Kamuskay will build trust through radical transparency and consistent follow-through.",
  },
];

function IssueCard({ issue, index }: { issue: typeof issues[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <AnimateIn delay={index * 0.07}>
      <div className="bg-white rounded-2xl border border-[#e0e0e0] overflow-hidden hover:shadow-md transition-shadow">
        <button
          onClick={() => setOpen(!open)}
          className="w-full p-6 flex items-start gap-4 text-left group"
          aria-expanded={open}
        >
          <span className="text-3xl shrink-0 mt-0.5">{issue.icon}</span>
          <div className="flex-1">
            <h3 className="font-bold text-[#0B1F3B] text-lg font-poppins group-hover:text-[#30A38A] transition-colors">{issue.title}</h3>
            <p className="text-[#666] text-sm mt-1 line-clamp-2">{issue.detail}</p>
          </div>
          <HiChevronDown
            className={`text-[#888] shrink-0 mt-1 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
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
                <p className="text-[#555] text-sm leading-relaxed mb-4">{issue.detail}</p>
                <p className="text-xs font-semibold text-[#888] uppercase tracking-widest mb-3">Commitments</p>
                <ul className="space-y-2">
                  {issue.commitments.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-[#444]">
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

export default function SgaPage() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0B1F3B] pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3B] via-[#132d57] to-[#0a1a30]" />
        <div className="absolute inset-0 opacity-5 radial-bg" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#F2A93B]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-1/4 h-1/4 bg-[#30A38A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <AnimateIn>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F2A93B]/20 border border-[#F2A93B]/40 rounded-full text-[#F2A93B] text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-[#F2A93B] rounded-full animate-pulse" />
                  SGA Executive Chair Campaign 2026
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-poppins leading-[1.05]">
                  Kamuskay for<br />
                  <span className="text-[#F2A93B]">SGA Executive Chair.</span>
                </h1>
                <p className="mt-6 text-white/70 text-lg md:text-xl leading-relaxed">
                  Building a Berea where every student truly belongs.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="#issues"
                    className="px-8 py-4 bg-[#F2A93B] text-[#0B1F3B] font-bold rounded-full hover:bg-[#f7c46d] hover:shadow-xl hover:shadow-[#F2A93B]/30 hover:-translate-y-1 transition-all duration-200 text-center"
                  >
                    Read the Platform
                  </a>
                  <a
                    href="#get-involved"
                    className="px-8 py-4 border-2 border-white/40 text-white font-bold rounded-full hover:border-white hover:bg-white/10 hover:-translate-y-1 transition-all duration-200 text-center"
                  >
                    Join the Campaign
                  </a>
                </div>
              </AnimateIn>
            </div>

            {/* Portrait + video */}
            <AnimateIn direction="right" delay={0.2}>
              <div className="relative">
                {/* TODO: Replace with actual campaign portrait photo */}
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-[#132d57] to-[#0B1F3B] shadow-2xl max-w-sm mx-auto">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl font-black text-white/10 font-poppins">K</div>
                      <p className="text-white/30 text-sm mt-2">Campaign photo here</p>
                    </div>
                  </div>
                  {/* Gold accent corner */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F2A93B]/40 to-transparent" />
                </div>
                {/* Play button overlay */}
                <button
                  onClick={() => setVideoOpen(true)}
                  className="absolute bottom-6 right-6 md:-right-4 w-14 h-14 bg-[#F2A93B] rounded-full flex items-center justify-center shadow-xl hover:bg-[#f7c46d] hover:scale-110 transition-all duration-200"
                  aria-label="Watch campaign video"
                >
                  <HiPlay className="text-[#0B1F3B] ml-1" size={22} />
                </button>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Vision & stakes */}
      <section className="py-16 md:py-24 bg-[#F5F5F7]" aria-label="Vision and stakes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-12">
              <span className="inline-block text-[#30A38A] text-sm font-semibold tracking-widest uppercase mb-3">The Vision</span>
              <h2 className="text-2xl md:text-4xl font-black text-[#0B1F3B] font-poppins">What we see. What we can build.</h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimateIn delay={0.1}>
              <div className="bg-white rounded-3xl p-8 md:p-10 border-l-4 border-[#d4891a] h-full">
                <h3 className="text-xl font-black text-[#0B1F3B] font-poppins mb-4">📍 What I See</h3>
                <ul className="space-y-3 text-[#555] text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 shrink-0">→</span>Students navigating mental health challenges with inadequate support.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 shrink-0">→</span>Labor placements that sometimes feel unfair or unclear.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 shrink-0">→</span>First-year and transfer students feeling lost without proper onboarding.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 shrink-0">→</span>SGA decisions that rarely feel connected to student voices.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 shrink-0">→</span>A campus that doesn&apos;t always feel like home, especially for international and first-gen students.
                  </li>
                </ul>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.15}>
              <div className="bg-[#0B1F3B] rounded-3xl p-8 md:p-10 border-l-4 border-[#30A38A] h-full">
                <h3 className="text-xl font-black text-white font-poppins mb-4">✅ What We Can Build</h3>
                <ul className="space-y-3 text-white/75 text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[#30A38A] shrink-0">→</span>A campus where mental health support is accessible, visible, and stigma-free.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#30A38A] shrink-0">→</span>A WLS system every student understands, trusts, and can navigate with confidence.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#30A38A] shrink-0">→</span>An onboarding experience where no new student feels invisible.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#30A38A] shrink-0">→</span>An SGA that is genuinely transparent, accessible, and responsive.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#30A38A] shrink-0">→</span>A Berea that feels like a true home away from home for every single student.
                  </li>
                </ul>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Issues grid */}
      <section id="issues" className="py-16 md:py-24 bg-white scroll-mt-20" aria-label="Platform issues">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-12">
              <span className="inline-block text-[#30A38A] text-sm font-semibold tracking-widest uppercase mb-3">The Platform</span>
              <h2 className="text-2xl md:text-4xl font-black text-[#0B1F3B] font-poppins">Six Priorities. Real Commitments.</h2>
              <p className="mt-4 text-[#666] text-base">Click any issue to expand and see concrete commitments.</p>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {issues.map((issue, i) => (
              <IssueCard key={issue.title} issue={issue} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why I'm running */}
      <section className="py-16 md:py-24 bg-[#F2A93B]" aria-label="Why Kamuskay is running">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <span className="inline-block text-[#0B1F3B]/60 text-sm font-semibold tracking-widest uppercase mb-4">Personal Statement</span>
            <h2 className="text-2xl md:text-4xl font-black text-[#0B1F3B] font-poppins mb-8">Why I&apos;m Running</h2>
            <div className="space-y-5 text-[#0B1F3B]/80 text-base md:text-lg leading-relaxed">
              <p>
                When I arrived at Berea College from Sierra Leone, I didn&apos;t know anyone. I didn&apos;t know the systems. I didn&apos;t know the culture. What I did know was that I had survived harder things by leaning into community and finding solutions. So that&apos;s exactly what I did here.
              </p>
              <p>
                Over the past few years, I&apos;ve supervised 450+ students, organized dialogues, mediated conflicts, advocated for fairness, and celebrated with my community. I&apos;ve seen what students struggle with up close. I&apos;ve also seen what&apos;s possible when someone in a leadership position truly listens and follows through.
              </p>
              <p>
                I&apos;m not running for SGA Executive Chair to add a title to my name. I&apos;m running because I genuinely believe that with the right leadership, Berea can be a place where every student, no matter where they come from, what they look like, or how they got here, feels like they truly belong. That&apos;s the Berea I want to build. And I believe we can build it together.
              </p>
            </div>
            <div className="mt-8 font-bold text-[#0B1F3B] text-xl font-poppins">Kamuskay Kamara</div>
          </AnimateIn>
        </div>
      </section>

      {/* Campaign video */}
      <section className="py-16 md:py-24 bg-[#0B1F3B]" aria-label="Campaign videos">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-10">
              <span className="inline-block text-[#F2A93B] text-sm font-semibold tracking-widest uppercase mb-3">Campaign Videos</span>
              <h2 className="text-2xl md:text-3xl font-black text-white font-poppins">Hear directly from Kamuskay.</h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Main video */}
            <AnimateIn className="md:col-span-2">
              <button
                onClick={() => setVideoOpen(true)}
                className="w-full aspect-video rounded-2xl bg-gradient-to-br from-[#132d57] to-[#0B1F3B] border border-white/10 flex items-center justify-center group hover:border-[#F2A93B]/40 transition-colors"
              >
                {/* TODO: Add actual campaign video thumbnail here */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#F2A93B] flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-xl">
                    <HiPlay className="text-[#0B1F3B] ml-1" size={28} />
                  </div>
                  <p className="text-white/60 text-sm mt-4">Campaign Introduction Video</p>
                  <p className="text-white/40 text-xs mt-1">~2 minutes</p>
                </div>
              </button>
            </AnimateIn>
            {/* Short clips */}
            <AnimateIn delay={0.1}>
              <div className="flex flex-col gap-4">
                {[
                  { label: "Q&A with students", duration: "45s" },
                  { label: "Message to first-years", duration: "1 min" },
                  { label: "On labor equity", duration: "30s" },
                ].map((clip, i) => (
                  <button
                    key={i}
                    className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 text-left transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#F2A93B]/20 flex items-center justify-center shrink-0 group-hover:bg-[#F2A93B]/30">
                      <HiPlay className="text-[#F2A93B] ml-0.5" size={16} />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{clip.label}</p>
                      <p className="text-white/40 text-xs">{clip.duration}</p>
                    </div>
                  </button>
                ))}
              </div>
            </AnimateIn>
          </div>
          <p className="text-center text-white/30 text-xs mt-6 italic">
            {/* TODO: Link actual video files above */}
            Video placeholders. Replace with actual campaign video embeds.
          </p>
        </div>
      </section>

      {/* Student voices */}
      <section className="py-16 md:py-24 bg-[#F5F5F7]" aria-label="What students are asking for">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-10">
              <span className="inline-block text-[#30A38A] text-sm font-semibold tracking-widest uppercase mb-3">Student Voices</span>
              <h2 className="text-2xl md:text-3xl font-black text-[#0B1F3B] font-poppins">What Students Are Asking For</h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                concern: "\"I wish SGA actually knew what students were going through in WLS. It feels like we don't have a voice.\"",
                response: "Kamuskay has overseen 450+ WLS students. He doesn't just know, he's lived it. His first act will be a student labor forum.",
              },
              {
                concern: "\"As a first-year, I felt completely lost for the first month. No one told me where to go or who to talk to.\"",
                response: "Kamuskay's plan includes expanding the First Year Summit and creating a dedicated peer ambassador program for new students.",
              },
              {
                concern: "\"Mental health resources at Berea feel like a secret. I didn't know what was available until I was already struggling.\"",
                response: "Kamuskay will advocate for proactive mental health communications and push for a visible, accessible student wellness presence on campus.",
              },
            ].map((item, i) => (
              <AnimateIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 h-full flex flex-col gap-4 border border-[#e0e0e0] hover:shadow-md transition-shadow">
                  <div className="flex-1">
                    <p className="text-[#444] italic text-sm leading-relaxed">{item.concern}</p>
                    <p className="text-[#888] text-xs mt-1">Student, Berea College</p>
                  </div>
                  <div className="pt-4 border-t border-[#f0f0f0]">
                    <p className="text-xs font-semibold text-[#30A38A] uppercase tracking-widest mb-2">Kamuskay&apos;s Response</p>
                    <p className="text-[#0B1F3B] text-sm leading-relaxed">{item.response}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Get involved */}
      <section id="get-involved" className="py-16 md:py-24 bg-white scroll-mt-20" aria-label="Get involved">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-12">
              <span className="inline-block text-[#30A38A] text-sm font-semibold tracking-widest uppercase mb-3">Take Action</span>
              <h2 className="text-2xl md:text-4xl font-black text-[#0B1F3B] font-poppins">Get Involved</h2>
              <p className="mt-4 text-[#666]">Every conversation, every vote, every share matters.</p>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: HiUserGroup,
                color: "bg-[#0B1F3B]",
                textColor: "text-white",
                accent: "text-[#F2A93B]",
                title: "Volunteer",
                body: "Join the campaign team. Help with events, outreach, or communications. Every contribution counts.",
                cta: "Sign Up to Volunteer",
                href: "mailto:kamarak@berea.edu?subject=I want to volunteer for Kamuskay4SGA",
              },
              {
                icon: HiMail,
                color: "bg-[#30A38A]",
                textColor: "text-white",
                accent: "text-white",
                title: "Host a Conversation",
                body: "Invite Kamuskay to speak at your club meeting, residence hall, or class. Let&apos;s talk directly.",
                cta: "Request a Visit",
                href: "mailto:kamarak@berea.edu?subject=Host a conversation with Kamuskay",
              },
              {
                icon: HiShare,
                color: "bg-[#F2A93B]",
                textColor: "text-[#0B1F3B]",
                accent: "text-[#0B1F3B]",
                title: "Spread the Word",
                body: "Share this site, talk to your friends, and help spread the message. The more voices, the stronger the movement.",
                cta: "Share the Campaign",
                href: "#",
              },
            ].map((item, i) => (
              <AnimateIn key={item.title} delay={i * 0.1}>
                <div className={`${item.color} rounded-3xl p-8 flex flex-col gap-5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full`}>
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                    <item.icon className={item.textColor} size={24} />
                  </div>
                  <h3 className={`text-2xl font-black font-poppins ${item.textColor}`}>{item.title}</h3>
                  <p className={`text-sm leading-relaxed flex-1 ${item.textColor} opacity-80`}>{item.body}</p>
                  <a
                    href={item.href}
                    className={`inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/20 hover:bg-white/30 ${item.textColor} font-bold rounded-full text-sm transition-all`}
                  >
                    {item.cta}
                  </a>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Primary CTA */}
          <AnimateIn delay={0.3}>
            <div className="mt-12 text-center">
              <div className="inline-flex flex-col sm:flex-row gap-4 p-6 bg-[#F5F5F7] rounded-2xl border border-[#e0e0e0]">
                <div className="text-left">
                  <p className="font-bold text-[#0B1F3B]">Ready to vote?</p>
                  <p className="text-[#666] text-sm">Election day is coming. Make sure your voice is heard.</p>
                </div>
                <a
                  href="mailto:kamarak@berea.edu?subject=I'm supporting Kamuskay for SGA"
                  className="px-8 py-3 bg-[#F2A93B] text-[#0B1F3B] font-black rounded-full hover:bg-[#f7c46d] hover:shadow-lg hover:-translate-y-0.5 transition-all whitespace-nowrap"
                >
                  I&apos;m Supporting Kamuskay
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        // TODO: Replace with actual campaign video URL
        // videoUrl="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
      />
    </>
  );
}
