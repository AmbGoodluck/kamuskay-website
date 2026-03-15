import Link from "next/link";
import Image from "next/image";
import AnimateIn from "@/components/ui/AnimateIn";
import { HiArrowRight } from "react-icons/hi";

export default function StorySnapshot() {
  return (
    <section className="py-16 md:py-24 bg-[#F5F5F7]" aria-label="Story snapshot">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image block — left on desktop */}
          <AnimateIn direction="left">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <Image
                src="/images/berea-campus-fist.jpeg"
                alt="Kamuskay Kamara at Berea College campus"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/80 via-transparent to-transparent flex items-end">
                <div className="p-8">
                  <span className="block text-[#F2A93B] text-sm font-semibold tracking-widest uppercase mb-2">
                    Sierra Leone → Berea, Kentucky
                  </span>
                  <p className="text-white text-xl font-bold font-poppins leading-snug">
                    A story of purpose-driven service.
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Text block — right on desktop */}
          <AnimateIn direction="right" delay={0.15}>
            <div>
              <span className="inline-block text-[#30A38A] text-sm font-semibold tracking-widest uppercase mb-4">
                Who is Kamuskay?
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0B1F3B] leading-tight font-poppins">
                From Sierra Leone to Berea College.
              </h2>
              <div className="mt-6 space-y-4 text-[#444] leading-relaxed text-base md:text-lg">
                <p>
                  Born and raised in Sierra Leone, Kamuskay Kamara&apos;s journey
                  to Berea College was shaped by a deep belief in community and
                  solutions. From founding <em>SoLuTioN unLimited</em>, a
                  transportation and vocational enterprise empowering women in
                  his home country, to winning the Entrepreneur of the Year
                  award at the African Leadership Academy, Kamuskay has always
                  turned ideas into impact.
                </p>
                <p>
                  At Berea, he is pursuing a double major in{" "}
                  <strong>Communication and Political Science</strong> with a
                  minor in <strong>Law, Ethics & Society</strong>, studying the
                  exact disciplines that equip him to serve, advocate, and lead
                  for every student on campus.
                </p>
              </div>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#0B1F3B] text-white font-bold rounded-full hover:bg-[#132d57] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
              >
                Read Kamuskay&apos;s story
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
