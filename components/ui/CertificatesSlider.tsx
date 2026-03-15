"use client";

import { useState, useRef } from "react";
import { HiChevronLeft, HiChevronRight, HiBadgeCheck } from "react-icons/hi";

// ─────────────────────────────────────────────────────────────────────────────
// ADD CERTIFICATES HERE
// Each entry becomes one slide in the carousel.
// Drop the image into /public/images/certificates/ then add an entry below.
// ─────────────────────────────────────────────────────────────────────────────
const certificates = [
  {
    // Add file → /public/images/certificates/mlk-award.jpg
    src: "",
    alt: "MLK Student Leadership Award certificate",
    label: "MLK Student Leadership Award",
    year: "2026",
    issuer: "Berea College",
  },
  {
    // Add file → /public/images/certificates/deans-list-fall24.jpg
    src: "",
    alt: "Dean's List certificate -Fall 2024",
    label: "Dean's List",
    year: "Fall 2024",
    issuer: "Berea College",
  },
  {
    // Add file → /public/images/certificates/deans-list-spring24.jpg
    src: "",
    alt: "Dean's List certificate -Spring 2024",
    label: "Dean's List",
    year: "Spring 2024",
    issuer: "Berea College",
  },
  {
    // Add file → /public/images/certificates/deans-list-fall23.jpg
    src: "",
    alt: "Dean's List certificate -Fall 2023",
    label: "Dean's List",
    year: "Fall 2023",
    issuer: "Berea College",
  },
  {
    // Add file → /public/images/certificates/parker-scholarship.jpg
    src: "",
    alt: "Father Henry L. Parker Scholarship certificate",
    label: "Father Henry L. Parker Scholarship",
    year: "2025",
    issuer: "Berea College",
  },
  {
    // Add file → /public/images/certificates/graham-service-award.jpg
    src: "",
    alt: "Graham Volunteer Service Award certificate",
    label: "Graham Volunteer Service Award",
    year: "2× Recipient",
    issuer: "Berea College",
  },
  {
    // Add file → /public/images/certificates/entrepreneur-ala.jpg
    src: "",
    alt: "Entrepreneur of the Year -ALA certificate",
    label: "Entrepreneur of the Year",
    year: "2021",
    issuer: "ALA",
  },
  {
    // Add file → /public/images/certificates/news-decoder.jpg
    src: "",
    alt: "News Decoder Award certificate",
    label: "News Decoder Award",
    year: "Multiple wins",
    issuer: "News Decoder",
  },
];

export default function CertificatesSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const total = certificates.length;

  const scrollByPage = (dir: "prev" | "next") => {
    if (!trackRef.current) return;
    const width = trackRef.current.clientWidth;
    trackRef.current.scrollBy({
      left: dir === "next" ? width : -width,
      behavior: "smooth",
    });
  };

  const scrollToSlide = (i: number) => {
    if (!trackRef.current) return;
    const child = trackRef.current.children[i] as HTMLElement | undefined;
    if (child) {
      child.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
    setActive(i);
  };

  const handleScroll = () => {
    if (!trackRef.current) return;
    const el = trackRef.current;
    const firstChild = el.children[0] as HTMLElement | undefined;
    if (!firstChild) return;
    const slideWidth = firstChild.offsetWidth + 16; // card width + gap-4
    const i = Math.round(el.scrollLeft / slideWidth);
    setActive(Math.min(Math.max(i, 0), total - 1));
  };

  return (
    <div className="relative px-1">
      {/* ── Slider track ── */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 no-scrollbar"
        onScroll={handleScroll}
      >
        {certificates.map((cert, i) => (
          <div
            key={i}
            className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-8px)] lg:w-[calc(33.33%-11px)]"
          >
            <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-gradient-to-br from-[#132d57] to-[#0B1F3B] aspect-[4/3] relative flex items-center justify-center">
              {cert.src ? (
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="w-full h-full object-contain"
                />
              ) : (
                /* Placeholder until real image is dropped in */
                <div className="text-center p-6">
                  <HiBadgeCheck className="text-white/20 mx-auto mb-3" size={48} />
                  <p className="text-white/40 text-xs leading-snug px-2">{cert.alt}</p>
                  <p className="text-white/20 text-[10px] mt-2">
                    📄 /public/images/certificates/
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ── Desktop arrow buttons ── */}
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

      {/* ── Dot indicators ── */}
      <div
        className="flex justify-center gap-2 mt-4 flex-wrap"
        aria-label="Certificate slider navigation"
      >
        {certificates.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollToSlide(i)}
            aria-label={`Go to certificate ${i + 1}`}
            aria-current={i === active ? "true" : undefined}
            className={`rounded-full transition-all duration-200 ${
              i === active
                ? "w-6 h-2.5 bg-[#F2A93B]"
                : "w-2.5 h-2.5 bg-[#ccc] hover:bg-[#888]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
