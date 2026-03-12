"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const galleryImages = [
  "african-cultural-attire.jpeg",
  "ala-jumping.jpeg",
  "arts-instrument.jpeg",
  "asa-group.jpeg",
  "athletics-block-party.jpeg",
  "berea-campus-fist.jpeg",
  "berea-college-portrait.jpeg",
  "berea-news-reporter.jpeg",
  "berea-patrons-giving.jpeg",
  "berea-portrait-smiling.jpeg",
  "community-service.jpeg",
  "conference-with-peers.jpeg",
  "de007e40-6dfa-4f97-9c4f-f648d4111797.jpg",
  "finish-line.jpeg",
  "firefighter-christmas.jpeg",
  "firefighter-orange-suit.jpeg",
  "firefighter-portrait.jpeg",
  "graham-award.jpeg",
  "international-students.jpeg",
  "leadership-portrait-suit.jpeg",
  "lifeguard.jpeg",
  "media-production-airport.jpeg",
  "mlk-award-certificate.jpeg",
  "mlk-tribute-event.jpeg",
  "sga-nominees.jpeg",
  "sierra-leone-flag-track.jpeg",
  "speaking-podium.jpeg",
  "student-philanthropy-table.jpeg",
  "track-running-action.jpeg",
  "track-team.jpeg",
  "track-teammates.jpeg",
];

export default function GalleryCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
      }
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="overflow-x-auto whitespace-nowrap scrollbar-hide" ref={carouselRef} style={{ scrollBehavior: "smooth" }}>
      <div className="flex gap-4">
        {galleryImages.map((img, i) => (
          <div key={img} className="relative w-80 h-64 rounded-2xl overflow-hidden shadow hover:scale-105 transition-transform duration-300 bg-[#F5F5F7] flex-shrink-0">
            <Image
              src={`/images/${img}`}
              alt={`Gallery photo ${i + 1}`}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 80vw, 320px"
              priority={i < 2}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
