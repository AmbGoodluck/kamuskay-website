import type { Metadata } from "next";
import AnimateIn from "@/components/ui/AnimateIn";
import CertificatesSlider from "@/components/ui/CertificatesSlider";
import AwardsSection from "@/components/academics/AwardsSection";
import ProjectsSection from "@/components/academics/ProjectsSection";
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

      <ProjectsSection />

      {/* Certificates & Awards Slideshow */}
      <section className="py-12 md:py-20 bg-white" aria-label="Certificates and awards gallery">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <span className="inline-block text-[#F2A93B] text-sm font-semibold tracking-widest uppercase mb-3">
              Certificates &amp; Awards
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[#0B1F3B] font-poppins mb-2">
              Recognition Gallery
            </h2>
            <p className="text-[#666] text-sm mb-8">
              Swipe or use the arrows to browse certificates and award recognition.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <CertificatesSlider />
          </AnimateIn>
        </div>
      </section>

      <AwardsSection />
    </>
  );
}
