import AnimateIn from "@/components/ui/AnimateIn";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Kamuskay doesn't just talk about change; he shows up and makes it happen. I've watched him transform how our work program feels to students.",
    author: "Student Peer",
    role: "Berea College Junior",
    // TODO: Replace with actual photo: avatar: "/images/testimonial-1.jpg"
  },
  {
    quote:
      "His ability to listen to every voice in the room and still move the group forward is something I haven't seen in many student leaders. He's the real deal.",
    author: "Faculty Member",
    role: "Berea College",
  },
  {
    quote:
      "As a first-year student, I was lost until Kamuskay took time out of his incredibly packed schedule to help me navigate the school. That's who he is.",
    author: "First-Year Student",
    role: "Berea College",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white" aria-label="Voices of Berea">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-[#30A38A] text-sm font-semibold tracking-widest uppercase mb-3">
              Endorsements
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0B1F3B] font-poppins">
              Voices of Berea
            </h2>
            <p className="mt-3 text-[#666] text-sm italic">
              {/* TODO: Replace placeholders with real endorsements */}
              Placeholder endorsements — to be replaced with real quotes from students, faculty, and mentors.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="bg-[#F5F5F7] rounded-3xl p-8 flex flex-col gap-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full border border-transparent hover:border-[#30A38A]/20">
                <FaQuoteLeft className="text-[#F2A93B]" size={28} />
                <blockquote className="text-[#333] leading-relaxed text-base flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="flex items-center gap-3">
                  {/* Avatar placeholder — TODO: replace with actual image */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0B1F3B] to-[#30A38A] flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {t.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0B1F3B] text-sm">{t.author}</p>
                    <p className="text-[#666] text-xs">{t.role}</p>
                  </div>
                </footer>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
