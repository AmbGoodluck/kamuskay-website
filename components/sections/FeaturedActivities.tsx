"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimateIn from "@/components/ui/AnimateIn";
import { HiArrowRight } from "react-icons/hi";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Activity = {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
  tag: string;
  focus: string;
};

const staticActivities: Activity[] = [
  { id: "s1", title: "African & African American Dialogue", caption: "Organized the first-ever cross-cultural student dialogue at Berea, bridging communities and sparking ongoing conversations.", imageUrl: "/images/asa-group.jpeg", tag: "Community", focus: "center" },
  { id: "s2", title: "First Year Summit Facilitator", caption: "Guided incoming students through Berea's unique culture and Work-Learning-Service program, helping them find their footing.", imageUrl: "/images/wls-conflict-training.jpeg", tag: "Mentorship", focus: "center" },
  { id: "s3", title: "Track & Field Athlete", caption: "Competing on the Berea College track team while balancing academics and leadership roles, proving excellence is achievable.", imageUrl: "/images/track-running-action.jpeg", tag: "Athletics", focus: "top" },
  { id: "s4", title: "Afro-Latin Ensemble", caption: "Performed at chapel services and community events, bringing vibrant cultural richness to campus life.", imageUrl: "/images/african-cultural-attire.jpeg", tag: "Arts & Culture", focus: "top" },
  { id: "s5", title: "Convocation & Campus Speaking", caption: "Delivered speeches representing the student body, sharing a vision of service, community, and belonging.", imageUrl: "/images/speaking-podium.jpeg", tag: "Leadership", focus: "center" },
];

export default function FeaturedActivities() {
  const [activities, setActivities] = useState<Activity[]>(staticActivities);

  useEffect(() => {
    if (!db) return;
    const q = query(collection(db, "activities"), orderBy("createdAt", "desc"));
    return onSnapshot(q, (snap) => {
      if (!snap.empty) {
        setActivities(snap.docs.map((d) => ({ id: d.id, ...d.data() } as Activity)));
      } else {
        setActivities(staticActivities);
      }
    });
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#F5F5F7] overflow-hidden" aria-label="Featured activities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-block text-[#30A38A] text-sm font-semibold tracking-widest uppercase mb-3">
                Highlights
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0B1F3B] font-poppins">
                Featured Activities
              </h2>
            </div>
            <Link
              href="/activities"
              className="inline-flex items-center gap-2 text-[#0B1F3B] font-semibold hover:text-[#30A38A] transition-colors group shrink-0"
            >
              See all activities <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimateIn>

        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory md:snap-none">
          {activities.map((act, i) => (
            <AnimateIn key={act.id} delay={i * 0.08}>
              <div className="group min-w-[260px] md:min-w-0 snap-start rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full flex flex-col bg-[#0B1F3B]">
                <div className="relative h-44 shrink-0 overflow-hidden">
                  <Image
                    src={act.imageUrl}
                    alt={act.title}
                    fill
                    className={`object-cover object-${act.focus} group-hover:scale-105 transition-transform duration-500`}
                    sizes="(max-width: 768px) 280px, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/60 to-transparent" />
                  <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 bg-black/40 backdrop-blur-sm text-white rounded-full">
                    {act.tag}
                  </span>
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-white font-bold text-sm leading-snug font-poppins">
                    {act.title}
                  </h3>
                  <p className="text-white/60 text-xs leading-relaxed flex-1">{act.caption}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
