import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import { HiAcademicCap, HiHeart, HiLightBulb } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";

const tiles = [
  {
    icon: HiAcademicCap,
    color: "#0B1F3B",
    accent: "#F2A93B",
    title: "On Campus",
    description:
      "WLS Student Director overseeing 450+ students, ASA President, Resident Advisor, TrueBlue Host, First Year Summit facilitator — Kamuskay is everywhere students need him.",
    href: "/activities",
  },
  {
    icon: HiHeart,
    color: "#30A38A",
    accent: "#fff",
    title: "In the Community",
    description:
      "Volunteer firefighter, certified First Aider, Green Dot advocate, two-time Graham Volunteer Service Award winner. Service isn't a line on a résumé — it's a way of life.",
    href: "/activities",
  },
  {
    icon: HiLightBulb,
    color: "#F2A93B",
    accent: "#0B1F3B",
    title: "Beyond Berea",
    description:
      "Founder of SoLuTioN unLimited in Sierra Leone — a transportation enterprise and vocational institute empowering women. Entrepreneur of the Year, African Leadership Academy.",
    href: "/activities",
  },
];

export default function LeadershipTiles() {
  return (
    <section className="py-16 md:py-24 bg-white" aria-label="How Kamuskay leads">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-[#30A38A] text-sm font-semibold tracking-widest uppercase mb-3">
              Areas of Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0B1F3B] font-poppins">
              How Kamuskay leads
            </h2>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiles.map((tile, i) => (
            <AnimateIn key={tile.title} delay={i * 0.1}>
              <div
                className="group rounded-3xl p-8 flex flex-col gap-5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full"
                style={{ backgroundColor: tile.color }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${tile.accent}20` }}
                >
                  <tile.icon
                    size={24}
                    style={{ color: tile.accent === "#fff" ? "#fff" : tile.accent }}
                  />
                </div>
                <h3
                  className="text-2xl font-bold font-poppins"
                  style={{ color: tile.accent === "#0B1F3B" ? "#0B1F3B" : "#fff" }}
                >
                  {tile.title}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{
                    color:
                      tile.accent === "#0B1F3B"
                        ? "rgba(11,31,59,0.7)"
                        : "rgba(255,255,255,0.75)",
                  }}
                >
                  {tile.description}
                </p>
                <Link
                  href={tile.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
                  style={{ color: tile.accent === "#0B1F3B" ? "#0B1F3B" : tile.accent }}
                >
                  Learn more <HiArrowRight size={16} />
                </Link>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
