import type { Metadata } from "next";
import AnimateIn from "@/components/ui/AnimateIn";
import { HiAcademicCap, HiStar, HiBookOpen, HiGlobe, HiBadgeCheck } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Kamuskay Kamara's academic journey: double major in Communication & Political Science, Dean's List, and impactful research.",
};

const interests = [
  "Political Communication", "Public Policy", "Education Equity", "Environmental Stewardship",
  "Human Rights", "Community Development", "Nonprofit Leadership", "Media & Journalism",
  "Law & Ethics", "African Politics", "Social Entrepreneurship", "Student Advocacy",
];

const awards = [
  { title: "MLK Student Leadership Award", year: "2026", icon: HiStar, color: "text-[#F2A93B]" },
  { title: "Dean's List", year: "Fall 2023, Spring 2024, Fall 2024", icon: HiAcademicCap, color: "text-[#0B1F3B]" },
  { title: "Father Henry L. Parker Scholarship", year: "2025", icon: HiBadgeCheck, color: "text-[#30A38A]" },
  { title: "Graham Volunteer Service Award", year: "2× Recipient", icon: HiStar, color: "text-[#F2A93B]" },
  { title: "Entrepreneur of the Year – ALA", year: "2021", icon: HiLightningBolt, color: "text-[#30A38A]" },
  { title: "News Decoder Award", year: "Multiple wins", icon: HiBookOpen, color: "text-[#0B1F3B]" },
];

function HiLightningBolt({ className, size }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size || 24} height={size || 24} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
    </svg>
  );
}

export default function AcademicsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-36 md:pb-20 bg-gradient-to-br from-[#132d57] to-[#0B1F3B] overflow-hidden">
        <div className="absolute inset-0 opacity-5 radial-bg" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <span className="inline-block text-[#F2A93B] text-sm font-semibold tracking-widest uppercase mb-4">Academics</span>
            <h1 className="text-3xl md:text-5xl font-black text-white font-poppins leading-tight">
              Studying communication, politics, and ethics to build better communities.
            </h1>
            <p className="mt-5 text-white/65 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Academic rigor that informs advocacy. Every course, every project, every award feeds directly into Kamuskay&apos;s mission to serve.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Academic summary card */}
      <section className="py-12 md:py-16 bg-[#F5F5F7]" aria-label="Academic summary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#F2A93B] via-[#30A38A] to-[#0B1F3B]" />
              <div className="p-8 md:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div>
                    <p className="text-xs font-semibold text-[#888] uppercase tracking-widest mb-3">Institution</p>
                    <div className="flex items-center gap-3">
                      <HiAcademicCap className="text-[#0B1F3B]" size={24} />
                      <div>
                        <p className="font-bold text-[#0B1F3B] text-lg">Berea College</p>
                        <p className="text-[#666] text-sm">Berea, Kentucky</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#888] uppercase tracking-widest mb-3">Double Major</p>
                    <div className="space-y-2">
                      <span className="inline-flex items-center gap-1.5 bg-[#0B1F3B]/8 text-[#0B1F3B] px-3 py-1.5 rounded-full text-sm font-semibold">
                        <HiBookOpen size={14} /> Communication
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-[#0B1F3B]/8 text-[#0B1F3B] px-3 py-1.5 rounded-full text-sm font-semibold ml-1">
                        <HiGlobe size={14} /> Political Science
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#888] uppercase tracking-widest mb-3">Minor</p>
                    <span className="inline-flex items-center gap-1.5 bg-[#30A38A]/10 text-[#30A38A] px-3 py-1.5 rounded-full text-sm font-semibold">
                      <HiBadgeCheck size={14} /> Law, Ethics & Society
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#888] uppercase tracking-widest mb-3">Dean&apos;s List</p>
                    <div className="flex flex-wrap gap-2">
                      {["Fall 2023", "Spring 2024", "Fall 2024"].map((sem) => (
                        <span key={sem} className="bg-[#F2A93B]/15 text-[#d4891a] px-2.5 py-1 rounded-lg text-xs font-bold">{sem}</span>
                      ))}
                    </div>
                  </div>
                  <div className="sm:col-span-2 lg:col-span-2">
                    <p className="text-xs font-semibold text-[#888] uppercase tracking-widest mb-3">Scholarship</p>
                    <div className="flex items-start gap-3 bg-[#F5F5F7] rounded-xl p-4">
                      <HiStar className="text-[#F2A93B] shrink-0 mt-0.5" size={20} />
                      <div>
                        <p className="font-bold text-[#0B1F3B] text-sm">Father Henry L. Parker Scholarship</p>
                        <p className="text-[#666] text-xs mt-0.5">Academic Excellence Award, 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Interests */}
      <section className="py-12 md:py-16 bg-white" aria-label="Academic interests">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <span className="inline-block text-[#30A38A] text-sm font-semibold tracking-widest uppercase mb-3">Themes & Interests</span>
            <h2 className="text-2xl md:text-3xl font-black text-[#0B1F3B] font-poppins mb-6">Academic Focus Areas</h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="flex flex-wrap gap-3 mb-8">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 bg-[#F5F5F7] hover:bg-[#0B1F3B] hover:text-white text-[#333] rounded-full text-sm font-medium transition-all duration-200 cursor-default border border-transparent hover:border-[#0B1F3B]"
                >
                  {interest}
                </span>
              ))}
            </div>
            <p className="text-[#555] leading-relaxed text-base md:text-lg max-w-3xl">
              These themes are not just academic interests. They are the foundation of Kamuskay&apos;s advocacy. His coursework in political communication informs how he crafts student-facing messaging. His study of law and ethics grounds his approach to fairness in the Work-Learning-Service program. His environmental stewardship work connects to his broader belief that students thrive in sustainable communities.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Research projects */}
      <section className="py-12 md:py-20 bg-[#F5F5F7]" aria-label="Research and projects">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <span className="inline-block text-[#30A38A] text-sm font-semibold tracking-widest uppercase mb-3">Research</span>
            <h2 className="text-2xl md:text-3xl font-black text-[#0B1F3B] font-poppins mb-10">Projects & Experiences</h2>
          </AnimateIn>

          <div className="space-y-8">
            {/* Project 1 */}
            <AnimateIn delay={0.1}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                {/* Color band */}
                <div className="h-2 bg-gradient-to-r from-[#0B1F3B] to-[#30A38A]" />
                <div className="p-8 md:p-10 grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    {/* TODO: Replace with actual project image */}
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#0B1F3B] to-[#132d57] flex items-center justify-center">
                      <HiBookOpen className="text-white/40" size={48} />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <span className="inline-block text-xs font-semibold text-[#30A38A] bg-[#30A38A]/10 px-3 py-1 rounded-full mb-3">Research Associate</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#0B1F3B] font-poppins mb-4">The FREE Zion Project</h3>
                    <ul className="space-y-2">
                      {[
                        "Ethnographic research on Black rural education in Appalachia",
                        "Freedom School curriculum development support",
                        "Archival research and primary interviews with community members",
                        "IRB-compliant research protocols",
                        "Co-presented findings at BURIS (Berea Undergraduate Research & Innovation Symposium)",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[#555] text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#30A38A] mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 p-4 bg-[#F5F5F7] rounded-xl">
                      <p className="text-sm font-semibold text-[#0B1F3B] mb-1">Why it matters for students</p>
                      <p className="text-xs text-[#666] leading-relaxed">
                        Understanding educational inequity in the region directly informs how Kamuskay advocates for first-generation and rural students at Berea.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Project 2 */}
            <AnimateIn delay={0.15}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-2 bg-gradient-to-r from-[#30A38A] to-[#F2A93B]" />
                <div className="p-8 md:p-10 grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    {/* TODO: Replace with actual project image */}
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#30A38A] to-[#227a67] flex items-center justify-center">
                      <HiGlobe className="text-white/40" size={48} />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <span className="inline-block text-xs font-semibold text-[#F2A93B] bg-[#F2A93B]/10 px-3 py-1 rounded-full mb-3">Remote Extern</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#0B1F3B] font-poppins mb-4">National Geographic Society + The Nature Conservancy</h3>
                    <ul className="space-y-2">
                      {[
                        "Investigated freshwater conservation challenges in local and global contexts",
                        "Conducted primary and secondary research on environmental policy",
                        "Engaged with local leaders and conservation stakeholders",
                        "Produced storytelling content connecting environmental science to community impact",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[#555] text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F2A93B] mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 p-4 bg-[#F5F5F7] rounded-xl">
                      <p className="text-sm font-semibold text-[#0B1F3B] mb-1">Why it matters for students</p>
                      <p className="text-xs text-[#666] leading-relaxed">
                        Environmental stewardship and community health are interconnected. This experience deepens Kamuskay&apos;s commitment to sustainable campus policies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Awards strip */}
      <section className="py-12 md:py-16 bg-[#0B1F3B]" aria-label="Awards and honors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-10">
              <span className="inline-block text-[#F2A93B] text-sm font-semibold tracking-widest uppercase mb-3">Recognition</span>
              <h2 className="text-2xl md:text-3xl font-black text-white font-poppins">Awards & Honors</h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {awards.map((award, i) => (
              <AnimateIn key={award.title} delay={i * 0.07}>
                <div className="flex items-center gap-4 bg-white/8 hover:bg-white/12 border border-white/10 rounded-2xl p-4 transition-colors">
                  <award.icon className={award.color} size={24} />
                  <div>
                    <p className="text-white font-semibold text-sm">{award.title}</p>
                    <p className="text-white/50 text-xs">{award.year}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
