"use client";

import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import AnimateIn from "@/components/ui/AnimateIn";
import { HiAcademicCap, HiStar, HiBookOpen, HiBadgeCheck } from "react-icons/hi";

type Award = {
  id: string;
  title: string;
  year: string;
  emoji: string;
};

// Static fallback matching the original awards data
const staticAwards: Award[] = [
  { id: "s1", emoji: "⭐", title: "MLK Student Leadership Award", year: "2026" },
  { id: "s2", emoji: "🎓", title: "Dean's List", year: "Fall 2023, Spring 2024, Fall 2024" },
  { id: "s3", emoji: "✅", title: "Father Henry L. Parker Scholarship", year: "2025" },
  { id: "s4", emoji: "⭐", title: "Graham Volunteer Service Award", year: "2× Recipient" },
  { id: "s5", emoji: "⚡", title: "Entrepreneur of the Year, ALA", year: "2021" },
  { id: "s6", emoji: "📖", title: "News Decoder Award", year: "Multiple wins" },
];

export default function AwardsSection() {
  const [awards, setAwards] = useState<Award[]>(staticAwards);

  useEffect(() => {
    if (!db) return;
    const q = query(collection(db, "awards"), orderBy("createdAt", "desc"));
    return onSnapshot(q, (snap) => {
      if (!snap.empty) {
        setAwards(snap.docs.map((d) => ({ id: d.id, ...d.data() } as Award)));
      } else {
        setAwards(staticAwards);
      }
    });
  }, []);

  return (
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
            <AnimateIn key={award.id} delay={i * 0.07}>
              <div className="flex items-center gap-4 bg-white/8 hover:bg-white/12 border border-white/10 rounded-2xl p-4 transition-colors">
                <span className="text-2xl shrink-0">{award.emoji}</span>
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
  );
}
