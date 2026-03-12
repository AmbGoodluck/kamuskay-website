import AnimateIn from "@/components/ui/AnimateIn";
import { HiUserGroup, HiStar, HiAcademicCap, HiGlobe } from "react-icons/hi";

const facts = [
  {
    icon: HiUserGroup,
    stat: "450+",
    label: "Students Supervised",
    sub: "Work-Learning-Service Director",
  },
  {
    icon: HiStar,
    stat: "2×",
    label: "Graham Volunteer Award",
    sub: "Ernest & Emily G. Graham Award",
  },
  {
    icon: HiAcademicCap,
    stat: "2026",
    label: "MLK Leadership Award",
    sub: "Berea College MLK Student Award",
  },
  {
    icon: HiGlobe,
    stat: "ASA",
    label: "President",
    sub: "African Students Association",
  },
];

export default function QuickFacts() {
  return (
    <section className="bg-[#0B1F3B] py-6 md:py-8 overflow-x-auto" aria-label="Quick facts">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: horizontal scroll row | Desktop: centered row */}
        <div className="flex gap-4 md:grid md:grid-cols-4 min-w-max md:min-w-0">
          {facts.map((fact, i) => (
            <AnimateIn key={fact.stat + fact.label} delay={i * 0.1}>
              <div className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-3 min-w-[200px] md:min-w-0 transition-colors duration-200">
                <div className="w-10 h-10 rounded-full bg-[#F2A93B]/15 flex items-center justify-center shrink-0">
                  <fact.icon className="text-[#F2A93B]" size={20} />
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-white font-bold text-lg leading-none">{fact.stat}</span>
                    <span className="text-white/80 text-sm font-medium">{fact.label}</span>
                  </div>
                  <p className="text-white/50 text-xs mt-0.5">{fact.sub}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
