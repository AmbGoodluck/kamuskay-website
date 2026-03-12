import type { Metadata } from "next";
import AnimateIn from "@/components/ui/AnimateIn";
import GalleryCarousel from "@/components/ui/GalleryCarousel";
import { HiUserGroup, HiGlobe, HiHeart, HiStar, HiFire, HiShieldCheck } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Kamuskay Kamara's campus roles, community service, and entrepreneurial work: leading at Berea and beyond.",
};

const impactStories = [
  {
    title: "First Cross-Cultural Dialogue",
    body: "Kamuskay organized Berea's first African & African American student dialogue. This landmark event broke barriers, opened conversations, and planted seeds for ongoing community-building between groups that too rarely shared the same table.",
    tag: "Community",
    color: "bg-gradient-to-br from-[#0B1F3B] to-[#132d57]",
  },
  {
    title: "First Year Summit Facilitator",
    body: "As a First Year Summit facilitator, Kamuskay helped incoming students navigate Berea's unique academic and labor culture. This reduced first-year anxiety and increased belonging from day one.",
    tag: "Mentorship",
    color: "bg-gradient-to-br from-[#30A38A] to-[#227a67]",
  },
  {
    title: "Beating the Berea Busy",
    body: "Recognizing that students were burning out under Berea's intense work-learn-study schedule, Kamuskay organized social events designed to create breathing room and strengthen peer connections across organizations.",
    tag: "Wellness",
    color: "bg-gradient-to-br from-[#1a3a6b] to-[#0B1F3B]",
  },
  {
    title: "Afro-Latin Ensemble Performances",
    body: "A performing member of the Afro-Latin Ensemble, Kamuskay brought cultural richness to chapel services and community events. He reminded students that celebration and joy are as important as service.",
    tag: "Arts & Culture",
    color: "bg-gradient-to-br from-[#d4891a] to-[#F2A93B]",
  },
];

export default function ActivitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-36 md:pb-20 bg-gradient-to-br from-[#30A38A] to-[#0B1F3B] overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <span className="inline-block text-[#F2A93B] text-sm font-semibold tracking-widest uppercase mb-4">Involvement</span>
            <h1 className="text-3xl md:text-5xl font-black text-white font-poppins leading-tight">
              Leading and serving at Berea and beyond.
            </h1>
            <p className="mt-5 text-white/65 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Student Director. ASA President. Volunteer firefighter. Athlete. Performer. Entrepreneur. Kamuskay wears many hats, and he wears them well.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Asymmetrical roles grid */}
      <section className="py-16 md:py-24 bg-[#F5F5F7]" aria-label="Campus roles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <span className="inline-block text-[#30A38A] text-sm font-semibold tracking-widest uppercase mb-3">Roles</span>
            <h2 className="text-2xl md:text-3xl font-black text-[#0B1F3B] font-poppins mb-10">Roles That Matter</h2>
          </AnimateIn>

          {/* Asymmetrical grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Big card: WLS Student Director */}
            <AnimateIn className="md:col-span-2 md:row-span-2">
              <div className="bg-[#0B1F3B] rounded-3xl p-8 md:p-10 h-full flex flex-col gap-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-[#F2A93B]/15 flex items-center justify-center">
                  <HiUserGroup className="text-[#F2A93B]" size={28} />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#F2A93B] uppercase tracking-widest">Flagship Role</span>
                  <h3 className="text-2xl md:text-3xl font-black text-white font-poppins mt-1">Student Director, Work-Learning-Service</h3>
                </div>
                <ul className="space-y-3 flex-1">
                  {[
                    "Oversees and supports 450+ students across WLS placements",
                    "Mediates student-supervisor conflicts with fairness and care",
                    "Leads weekly leadership meetings for WLS supervisors",
                    "Represents students at Board of Trustees events",
                    "Develops programming to improve the WLS student experience",
                    "Acts as primary liaison between students and administration",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-white/70 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F2A93B] mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-white/8 rounded-xl p-4 border border-[#F2A93B]/20">
                  <p className="text-[#F2A93B] font-bold text-3xl">450+</p>
                  <p className="text-white/60 text-sm">students supported directly through WLS</p>
                </div>
              </div>
            </AnimateIn>

            {/* ASA President */}
            <AnimateIn delay={0.1}>
              <div className="bg-[#30A38A] rounded-3xl p-6 h-full flex flex-col gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  <HiGlobe className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white font-poppins">ASA President</h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  Leads the African Students Association, organizing cultural events, advocating for African students, and bridging communities on campus.
                </p>
              </div>
            </AnimateIn>

            {/* Student Philanthropy */}
            <AnimateIn delay={0.15}>
              <div className="bg-[#F2A93B] rounded-3xl p-6 h-full flex flex-col gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-[#0B1F3B]/20 flex items-center justify-center">
                  <HiHeart className="text-[#0B1F3B]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3B] font-poppins">Student Philanthropy President & Class Captain</h3>
                <p className="text-[#0B1F3B]/70 text-sm leading-relaxed">
                  Led student giving campaigns and represented his class in fundraising initiatives, connecting students to Berea's philanthropic mission.
                </p>
              </div>
            </AnimateIn>
          </div>

          {/* Smaller roles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
            {[
              { icon: HiFire, title: "Volunteer Firefighter", sub: "Community emergency responder", color: "bg-red-50 border-red-100" },
              { icon: HiShieldCheck, title: "Green Dot Advocate", sub: "Violence prevention training", color: "bg-[#30A38A]/5 border-[#30A38A]/20" },
              { icon: HiStar, title: "Lifeguard & First Aider", sub: "Certified safety professional", color: "bg-blue-50 border-blue-100" },
              { icon: HiUserGroup, title: "Track & Field Athlete", sub: "Berea College team member", color: "bg-[#F2A93B]/5 border-[#F2A93B]/20" },
            ].map((role, i) => (
              <AnimateIn key={role.title} delay={i * 0.07}>
                <div className={`rounded-2xl border p-5 ${role.color} hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 h-full flex flex-col gap-3`}>
                  <role.icon className="text-[#0B1F3B]" size={22} />
                  <div>
                    <p className="font-bold text-[#0B1F3B] text-sm">{role.title}</p>
                    <p className="text-[#666] text-xs mt-0.5">{role.sub}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Impact stories */}
      <section className="py-16 md:py-24 bg-white" aria-label="Impact stories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <span className="inline-block text-[#30A38A] text-sm font-semibold tracking-widest uppercase mb-3">Impact</span>
            <h2 className="text-2xl md:text-3xl font-black text-[#0B1F3B] font-poppins mb-10">Stories That Stick</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {impactStories.map((story, i) => (
              <AnimateIn key={story.title} delay={i * 0.1}>
                <div className={`rounded-3xl overflow-hidden ${story.color} p-8 flex flex-col gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full`}>
                  <span className="inline-block text-xs font-semibold px-3 py-1 bg-white/20 text-white rounded-full w-fit">{story.tag}</span>
                  <h3 className="text-xl md:text-2xl font-black text-white font-poppins">{story.title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed flex-1">{story.body}</p>
                  {/* TODO: Add actual photo: <Image src={story.image} fill alt={story.title} className="object-cover opacity-20" /> */}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* SoLuTioN unLimited */}
      <section className="py-16 md:py-24 bg-[#F5F5F7]" aria-label="SoLuTioN unLimited entrepreneurship">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateIn direction="left">
              <div>
                <span className="inline-block text-[#30A38A] text-sm font-semibold tracking-widest uppercase mb-3">Entrepreneurship</span>
                <h2 className="text-2xl md:text-4xl font-black text-[#0B1F3B] font-poppins leading-tight mb-6">
                  SoLuTioN unLimited
                </h2>
                <div className="space-y-4 text-[#444] leading-relaxed">
                  <p>
                    Before coming to Berea, Kamuskay founded <strong>SoLuTioN unLimited</strong> in Sierra Leone. It is a social enterprise with two branches: a transportation company and a vocational training institute focused on empowering women with practical skills for sustainable livelihoods.
                  </p>
                  <p>
                    The vocational institute provides training in tailoring, baking, and other trades, giving women the tools for economic independence and dignity. The enterprise won Kamuskay the{" "}
                    <strong>Entrepreneur of the Year award</strong> at the African Leadership Academy.
                  </p>
                  <p>
                    SoLuTioN unLimited is not just a business. It is a proof of concept for the kind of thinking Kamuskay brings to every problem: find the solution, build the structure, empower the people.
                  </p>
                </div>
                <div className="mt-6 flex gap-4">
                  <div className="bg-white rounded-2xl border border-[#e0e0e0] p-5 text-center flex-1">
                    <p className="text-2xl font-black text-[#F2A93B]">2</p>
                    <p className="text-xs text-[#666] mt-1">Enterprise branches</p>
                  </div>
                  <div className="bg-white rounded-2xl border border-[#e0e0e0] p-5 text-center flex-1">
                    <p className="text-2xl font-black text-[#30A38A]">🏆</p>
                    <p className="text-xs text-[#666] mt-1">Entrepreneur of the Year, ALA</p>
                  </div>
                  <div className="bg-white rounded-2xl border border-[#e0e0e0] p-5 text-center flex-1">
                    <p className="text-2xl font-black text-[#0B1F3B]">SL</p>
                    <p className="text-xs text-[#666] mt-1">Based in Sierra Leone</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn direction="right" delay={0.15}>
              {/* TODO: Replace with actual image stack */}
              <div className="relative">
                <div className="rounded-3xl aspect-[4/5] bg-gradient-to-br from-[#F2A93B] to-[#d4891a] shadow-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-7xl font-black font-poppins opacity-30">S</p>
                    <p className="text-2xl font-bold mt-2 px-8 text-center leading-snug">SoLuTioN unLimited</p>
                    <p className="text-white/60 text-sm mt-2 px-8">{/* TODO: Add actual photo of the enterprise */}Photo placeholder</p>
                  </div>
                </div>
                {/* Decorative floating card */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-[#e0e0e0]">
                  <p className="text-xs text-[#888] font-medium">Sierra Leone</p>
                  <p className="font-bold text-[#0B1F3B] text-sm">Transportation + Vocational Institute</p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Gallery section with horizontal auto-sliding carousel */}
      <section className="py-16 md:py-24 bg-white" aria-label="Photo and video gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="mb-10">
              <span className="inline-block text-[#30A38A] text-sm font-semibold tracking-widest uppercase mb-3">Gallery</span>
              <h2 className="text-2xl md:text-3xl font-black text-[#0B1F3B] font-poppins">Photos & Videos</h2>
            </div>
          </AnimateIn>
          <GalleryCarousel />
        </div>
      </section>
    </>
  );
}
