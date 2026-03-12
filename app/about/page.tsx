import type { Metadata } from "next";
import Image from "next/image";
import AnimateIn from "@/components/ui/AnimateIn";
import { HiShieldCheck, HiUserGroup, HiClipboardCheck, HiLightBulb } from "react-icons/hi";

export const metadata: Metadata = {
  title: "About",
  description:
    "From Sierra Leone to Berea College: Kamuskay Kamara's story of purpose-driven service and leadership.",
};

const storyBlocks = [
  {
    label: "Where it began",
    title: "Roots in Sierra Leone",
    body: "Growing up in Sierra Leone, Kamuskay Kamara was surrounded by a community where neighbors looked out for one another and young people were expected to contribute. That environment shaped his belief that leadership is service, not status. He excelled academically and was recognized for his drive to create solutions where others saw only problems.",
    side: "right",
    color: "bg-gradient-to-br from-[#0B1F3B] to-[#132d57]",
    image: "/images/sierra-leone-flag-track.jpeg",
    imagePosition: "object-top",
  },
  {
    label: "African Leadership Academy",
    title: "Entrepreneurship & Recognition",
    body: "Kamuskay attended the African Leadership Academy, where his entrepreneurial spirit won him the Entrepreneur of the Year award. He founded SoLuTioN unLimited, a transportation enterprise and vocational institute for women, proving that young Africans can build solutions for their own communities. This experience solidified his commitment to turning ideas into lasting impact.",
    side: "left",
    color: "bg-gradient-to-br from-[#30A38A] to-[#227a67]",
    image: "/images/ala-jumping.jpeg",
    imagePosition: "object-center",
  },
  {
    label: "Arriving at Berea",
    title: "Jumping In from Day One",
    body: "From the moment Kamuskay arrived at Berea College, he threw himself into service. Not because it was required, but because it is simply who he is. He took on roles as an Office Assistant, Lifeguard, News Reporter, Resident Advisor, and TrueBlue Host simultaneously, while maintaining Dean's List standing. His energy and commitment quickly made him a familiar and trusted face across campus.",
    side: "right",
    color: "bg-gradient-to-br from-[#1a3a6b] to-[#0B1F3B]",
    image: "/images/Day one.png.jpeg",
    imagePosition: "object-top",
  },
  {
    label: "Growing into leadership",
    title: "Student Director, ASA President, SGA Candidate",
    body: "Kamuskay rose to become WLS Student Director, overseeing 450+ students in the Work-Learning-Service program, and President of the African Students Association. He organized Berea's first African & African American student dialogue, facilitated the First Year Summit, and advocated for mental health and equity. Now, he channels all that experience into his run for SGA Executive Chair.",
    side: "left",
    color: "bg-gradient-to-br from-[#d4891a] to-[#F2A93B]",
    image: "/images/leadership-portrait-suit.jpeg",
    imagePosition: "object-center",
  },
];

const values = [
  {
    icon: HiShieldCheck,
    title: "Service",
    description:
      "Service is not transactional for Kamuskay. It is foundational. From volunteering as a firefighter to mentoring first-year students, he shows up.",
    example: "2× Graham Volunteer Service Award",
  },
  {
    icon: HiUserGroup,
    title: "Community",
    description:
      "Building genuine community, where every student feels seen, heard, and supported, is the driving force behind every role he takes on.",
    example: "ASA President, First Year Summit Facilitator",
  },
  {
    icon: HiClipboardCheck,
    title: "Accountability",
    description:
      "Kamuskay believes leaders must answer to the people they serve. He listens first, then acts, with transparency about outcomes and challenges.",
    example: "Student Philanthropy Committee President",
  },
  {
    icon: HiLightBulb,
    title: "Solutions",
    description:
      "His tagline isn't just a slogan. From SoLuTioN unLimited in Sierra Leone to policy proposals for SGA, he is wired to solve problems.",
    example: "Founder, SoLuTioN unLimited",
  },
];

const timeline = [
  { year: "2021", title: "Entrepreneur of the Year", body: "African Leadership Academy, founded SoLuTioN unLimited.", color: "bg-[#F2A93B]" },
  { year: "2022", title: "Arrived at Berea College", body: "Began roles as Office Assistant, Lifeguard, and News Reporter from day one.", color: "bg-[#30A38A]" },
  { year: "Fall 2023", title: "Dean's List", body: "Academic excellence while managing multiple Work-Learning-Service roles.", color: "bg-[#0B1F3B]" },
  { year: "Spring 2024", title: "Dean's List & RA Role", body: "Became Resident Advisor, supporting residential students through community building.", color: "bg-[#F2A93B]" },
  { year: "2024", title: "ASA President", body: "Elected President of the African Students Association; organized the first cross-cultural student dialogue.", color: "bg-[#30A38A]" },
  { year: "Fall 2024", title: "Dean's List & WLS Director", body: "Promoted to Student Director overseeing 450+ students.", color: "bg-[#0B1F3B]" },
  { year: "2025", title: "MLK Leadership Award & Graham Award", body: "Recognized for outstanding community service and student leadership.", color: "bg-[#F2A93B]" },
  { year: "2026", title: "SGA Executive Chair Candidate", body: "Running to build a Berea where every student truly belongs.", color: "bg-[#30A38A]" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-[#0B1F3B] to-[#132d57] overflow-hidden">
        <div className="absolute inset-0 opacity-5 radial-bg" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <span className="inline-block text-[#F2A93B] text-sm font-semibold tracking-widest uppercase mb-4">About Kamuskay</span>
            <h1 className="text-4xl md:text-6xl font-black text-white font-poppins leading-tight">
              From Sierra Leone<br />to Berea.
            </h1>
            <p className="mt-6 text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              A journey defined by purpose, service, and the belief that every student deserves a leader who truly listens and delivers.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Story blocks */}
      <section className="py-16 md:py-24" aria-label="Kamuskay's story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-28">
          {storyBlocks.map((block, i) => (
            <div
              key={block.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center ${block.side === "left" ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""}`}
            >
              {/* Image section */}
              <AnimateIn direction={block.side === "right" ? "left" : "right"}>
                <div className={`rounded-3xl overflow-hidden aspect-[4/3] ${block.color} flex items-end p-0 shadow-2xl relative`}>
                  <Image
                    src={block.image}
                    alt={block.title}
                    fill
                    className={`object-cover ${block.imagePosition}`}
                    priority={i === 0}
                  />
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white/80 text-xs font-semibold uppercase tracking-widest bg-black/40 px-2 py-1 rounded">{block.label}</span>
                  </div>
                </div>
              </AnimateIn>

              {/* Text */}
              <AnimateIn direction={block.side === "right" ? "right" : "left"} delay={0.15}>
                <div>
                  <span className="text-[#30A38A] text-sm font-semibold tracking-widest uppercase">{block.label}</span>
                  <h2 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-black text-[#0B1F3B] font-poppins leading-tight">{block.title}</h2>
                  <p className="mt-4 text-[#444] leading-relaxed text-base md:text-lg">{block.body}</p>
                </div>
              </AnimateIn>
            </div>
          ))}

          {/* Pull quote */}
          <AnimateIn>
            <blockquote className="relative max-w-3xl mx-auto text-center py-12 px-8">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F2A93B]/10 to-[#30A38A]/10 rounded-3xl" />
              <p className="relative text-2xl md:text-3xl font-bold text-[#0B1F3B] font-poppins leading-snug italic">
                &ldquo;From the moment I arrived at Berea, I threw myself into service, not because it was required, but because it is simply who I am.&rdquo;
              </p>
              <footer className="relative mt-6 text-[#30A38A] font-semibold">Kamuskay Kamara</footer>
            </blockquote>
          </AnimateIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-[#F5F5F7]" aria-label="Values and leadership framework">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block text-[#30A38A] text-sm font-semibold tracking-widest uppercase mb-3">Core Values</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0B1F3B] font-poppins">Leadership Framework</h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimateIn key={v.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 h-full flex flex-col gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-[#30A38A]/20">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B1F3B]/5 flex items-center justify-center">
                    <v.icon className="text-[#0B1F3B]" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1F3B] font-poppins">{v.title}</h3>
                  <p className="text-[#555] text-sm leading-relaxed flex-1">{v.description}</p>
                  <span className="text-xs font-semibold text-[#30A38A] bg-[#30A38A]/10 px-3 py-1 rounded-full w-fit">{v.example}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white" aria-label="Growth timeline">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-12">
              <span className="inline-block text-[#30A38A] text-sm font-semibold tracking-widest uppercase mb-3">Journey</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0B1F3B] font-poppins">Growth Timeline</h2>
            </div>
          </AnimateIn>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#e0e0e0] -translate-x-1/2" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <AnimateIn key={item.title} delay={i * 0.07}>
                  <div className={`relative flex gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start md:items-center`}>
                    {/* Dot */}
                    <div className={`relative z-10 w-12 h-12 rounded-full ${item.color} flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-md`}>
                      {item.year.slice(-2)}
                    </div>
                    {/* Content */}
                    <div className={`flex-1 bg-[#F5F5F7] rounded-2xl p-5 ${i % 2 === 0 ? "md:mr-[calc(50%-1.5rem)]" : "md:ml-[calc(50%-1.5rem)]"}`}>
                      <span className="text-xs text-[#888] font-medium">{item.year}</span>
                      <h3 className="text-[#0B1F3B] font-bold text-base mt-0.5">{item.title}</h3>
                      <p className="text-[#555] text-sm mt-1 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
