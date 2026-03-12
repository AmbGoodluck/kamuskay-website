import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";

export default function CampaignBand() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#0B1F3B]" aria-label="Campaign preview">
      {/* Gold accent shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#F2A93B]/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#30A38A]/10 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateIn>
          <span className="inline-block text-[#F2A93B] text-sm font-semibold tracking-widest uppercase mb-4">
            #Kamuskay4SGA
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white font-poppins leading-tight">
            Kamuskay is running for{" "}
            <span className="text-[#F2A93B]">SGA Executive Chair</span> to help
            Berea feel like a true home away from home for every student.
          </h2>
          <p className="mt-6 text-white/65 text-lg leading-relaxed max-w-2xl mx-auto">
            Real change in student welfare, labor equity, academic support, and
            campus culture. Built on listening, driven by solutions.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kamuskay4sga"
              className="px-8 py-4 bg-[#F2A93B] text-[#0B1F3B] font-bold rounded-full hover:bg-[#f7c46d] hover:shadow-xl hover:shadow-[#F2A93B]/30 hover:-translate-y-1 transition-all duration-200"
            >
              Read the Platform
            </Link>
            <Link
              href="/kamuskay4sga#get-involved"
              className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:border-white hover:bg-white/10 hover:-translate-y-1 transition-all duration-200"
            >
              Get Involved
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
