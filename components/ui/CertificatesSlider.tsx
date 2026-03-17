"use client";

import { useState, useRef, useEffect } from "react";
import { HiChevronLeft, HiChevronRight, HiBadgeCheck } from "react-icons/hi";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Certificate = {
  id: string;
  src: string;
  alt: string;
};

const staticCerts: Certificate[] = [
  { id: "s1",  src: "/images/certificates/Screenshot%20(741).png",                                   alt: "Certificate" },
  { id: "s2",  src: "/images/certificates/Screenshot%20(742).png",                                   alt: "Certificate" },
  { id: "s3",  src: "/images/certificates/Screenshot%20(743).png",                                   alt: "Certificate" },
  { id: "s4",  src: "/images/certificates/WhatsApp%20Image%202026-03-12%20at%2014.11.46.jpeg",       alt: "Award certificate" },
  { id: "s5",  src: "/images/certificates/WhatsApp%20Image%202026-03-12%20at%2014.11.46%20(1).jpeg", alt: "Award certificate" },
  { id: "s6",  src: "/images/certificates/WhatsApp%20Image%202026-03-12%20at%2014.11.46%20(2).jpeg", alt: "Award certificate" },
  { id: "s7",  src: "/images/certificates/WhatsApp%20Image%202026-03-12%20at%2014.11.46%20(3).jpeg", alt: "Award certificate" },
  { id: "s8",  src: "/images/certificates/WhatsApp%20Image%202026-03-12%20at%2014.11.46%20(4).jpeg", alt: "Award certificate" },
  { id: "s9",  src: "/images/certificates/WhatsApp%20Image%202026-03-12%20at%2014.11.46%20(5).jpeg", alt: "Award certificate" },
  { id: "s10", src: "/images/certificates/WhatsApp%20Image%202026-03-12%20at%2014.11.46%20(6).jpeg", alt: "Award certificate" },
  { id: "s11", src: "/images/certificates/WhatsApp%20Image%202026-03-12%20at%2014.11.46%20(7).jpeg", alt: "Award certificate" },
  { id: "s12", src: "/images/certificates/WhatsApp%20Image%202026-03-12%20at%2014.11.46%20(8).jpeg", alt: "Award certificate" },
  { id: "s13", src: "/images/certificates/WhatsApp%20Image%202026-03-12%20at%2014.11.47.jpeg",       alt: "Award certificate" },
  { id: "s14", src: "/images/certificates/WhatsApp%20Image%202026-03-12%20at%2014.11.47%20(1).jpeg", alt: "Award certificate" },
  { id: "s15", src: "/images/certificates/WhatsApp%20Image%202026-03-12%20at%2014.11.47%20(2).jpeg", alt: "Award certificate" },
  { id: "s16", src: "/images/certificates/WhatsApp%20Image%202026-03-12%20at%2014.11.47%20(3).jpeg", alt: "Award certificate" },
];

export default function CertificatesSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [certificates, setCertificates] = useState<Certificate[]>(staticCerts);

  useEffect(() => {
    if (!db) return;
    const q = query(collection(db, "certificates"), orderBy("createdAt", "desc"));
    return onSnapshot(q, (snap) => {
      if (!snap.empty) {
        setCertificates(snap.docs.map((d) => ({ id: d.id, src: d.data().src, alt: d.data().alt })));
      } else {
        setCertificates(staticCerts);
      }
    });
  }, []);

  const total = certificates.length;

  const scrollByPage = (dir: "prev" | "next") => {
    if (!trackRef.current) return;
    const width = trackRef.current.clientWidth;
    trackRef.current.scrollBy({ left: dir === "next" ? width : -width, behavior: "smooth" });
  };

  const scrollToSlide = (i: number) => {
    if (!trackRef.current) return;
    const child = trackRef.current.children[i] as HTMLElement | undefined;
    if (child) child.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    setActive(i);
  };

  const handleScroll = () => {
    if (!trackRef.current) return;
    const el = trackRef.current;
    const firstChild = el.children[0] as HTMLElement | undefined;
    if (!firstChild) return;
    const slideWidth = firstChild.offsetWidth + 16;
    const i = Math.round(el.scrollLeft / slideWidth);
    setActive(Math.min(Math.max(i, 0), total - 1));
  };

  return (
    <div className="relative px-1">
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 no-scrollbar"
        onScroll={handleScroll}
      >
        {certificates.map((cert, i) => (
          <div
            key={cert.id}
            className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-8px)] lg:w-[calc(33.33%-11px)]"
          >
            <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-gradient-to-br from-[#132d57] to-[#0B1F3B] aspect-[4/3] relative flex items-center justify-center">
              {cert.src ? (
                <img src={cert.src} alt={cert.alt} className="w-full h-full object-contain" />
              ) : (
                <div className="text-center p-6">
                  <HiBadgeCheck className="text-white/20 mx-auto mb-3" size={48} />
                  <p className="text-white/40 text-xs leading-snug px-2">{cert.alt}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByPage("prev")}
        className="absolute -left-4 top-1/3 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md border border-[#e0e0e0] items-center justify-center text-[#0B1F3B] hover:bg-[#0B1F3B] hover:text-white transition-colors z-10 hidden sm:flex"
        aria-label="Previous certificate"
      >
        <HiChevronLeft size={18} />
      </button>
      <button
        type="button"
        onClick={() => scrollByPage("next")}
        className="absolute -right-4 top-1/3 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md border border-[#e0e0e0] items-center justify-center text-[#0B1F3B] hover:bg-[#0B1F3B] hover:text-white transition-colors z-10 hidden sm:flex"
        aria-label="Next certificate"
      >
        <HiChevronRight size={18} />
      </button>

      <div className="flex justify-center gap-2 mt-4 flex-wrap" aria-label="Certificate slider navigation">
        {certificates.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollToSlide(i)}
            aria-label={`Go to certificate ${i + 1}`}
            aria-current={i === active ? "true" : undefined}
            className={`rounded-full transition-all duration-200 ${
              i === active ? "w-6 h-2.5 bg-[#F2A93B]" : "w-2.5 h-2.5 bg-[#ccc] hover:bg-[#888]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
