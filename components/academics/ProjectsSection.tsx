"use client";

import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import AnimateIn from "@/components/ui/AnimateIn";
import { HiBookOpen, HiGlobe } from "react-icons/hi";

type Project = {
  id: string;
  role: string;
  name: string;
  bullets: string[];
  whyItMatters: string;
};

const accentColors = [
  { band: "from-[#0B1F3B] to-[#30A38A]", role: "text-[#30A38A] bg-[#30A38A]/10", bullet: "bg-[#30A38A]" },
  { band: "from-[#30A38A] to-[#F2A93B]", role: "text-[#F2A93B] bg-[#F2A93B]/10", bullet: "bg-[#F2A93B]" },
  { band: "from-[#F2A93B] to-[#0B1F3B]", role: "text-[#0B1F3B] bg-[#0B1F3B]/10", bullet: "bg-[#0B1F3B]" },
];

const icons = [HiBookOpen, HiGlobe, HiBookOpen];

const staticProjects: Project[] = [
  {
    id: "s1",
    role: "Research Associate",
    name: "The FREE Zion Project",
    bullets: [
      "Ethnographic research on Black rural education in Appalachia",
      "Freedom School curriculum development support",
      "Archival research and primary interviews with community members",
      "IRB-compliant research protocols",
      "Co-presented findings at BURIS (Berea Undergraduate Research & Innovation Symposium)",
    ],
    whyItMatters: "Understanding educational inequity in the region directly informs how Kamuskay advocates for first-generation and rural students at Berea.",
  },
  {
    id: "s2",
    role: "Remote Extern",
    name: "National Geographic Society + The Nature Conservancy",
    bullets: [
      "Investigated freshwater conservation challenges in local and global contexts",
      "Conducted primary and secondary research on environmental policy",
      "Engaged with local leaders and conservation stakeholders",
      "Produced storytelling content connecting environmental science to community impact",
    ],
    whyItMatters: "Environmental stewardship and community health are interconnected. This experience deepens Kamuskay's commitment to sustainable campus policies.",
  },
];

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>(staticProjects);

  useEffect(() => {
    if (!db) return;
    const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
    return onSnapshot(q, (snap) => {
      if (!snap.empty) {
        setProjects(snap.docs.map((d) => ({ id: d.id, ...d.data() } as Project)));
      } else {
        setProjects(staticProjects);
      }
    });
  }, []);

  return (
    <section className="py-12 md:py-20 bg-[#F5F5F7]" aria-label="Research and projects">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <span className="inline-block text-[#30A38A] text-sm font-semibold tracking-widest uppercase mb-3">Research</span>
          <h2 className="text-2xl md:text-3xl font-black text-[#0B1F3B] font-poppins mb-10">Projects & Experiences</h2>
        </AnimateIn>

        <div className="space-y-8">
          {projects.map((project, i) => {
            const accent = accentColors[i % accentColors.length];
            const Icon = icons[i % icons.length];
            return (
              <AnimateIn key={project.id} delay={0.1 + i * 0.05}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`h-2 bg-gradient-to-r ${accent.band}`} />
                  <div className="p-8 md:p-10 grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                      <div className={`aspect-square rounded-2xl bg-gradient-to-br ${accent.band} flex items-center justify-center`}>
                        <Icon className="text-white/40" size={48} />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <span className={`inline-block text-xs font-semibold ${accent.role} px-3 py-1 rounded-full mb-3`}>
                        {project.role}
                      </span>
                      <h3 className="text-xl md:text-2xl font-black text-[#0B1F3B] font-poppins mb-4">{project.name}</h3>
                      <ul className="space-y-2">
                        {project.bullets?.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-[#555] text-sm">
                            <span className={`w-1.5 h-1.5 rounded-full ${accent.bullet} mt-2 shrink-0`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                      {project.whyItMatters && (
                        <div className="mt-6 p-4 bg-[#F5F5F7] rounded-xl">
                          <p className="text-sm font-semibold text-[#0B1F3B] mb-1">Why it matters for students</p>
                          <p className="text-xs text-[#666] leading-relaxed">{project.whyItMatters}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
