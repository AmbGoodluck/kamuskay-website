"use client";

import { useState } from "react";
import AnimateIn from "@/components/ui/AnimateIn";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { HiMail, HiCheckCircle } from "react-icons/hi";

type Mode = "campaign" | "general";

const topics: Record<Mode, string[]> = {
  campaign: [
    "Platform questions",
    "Volunteer / join the campaign",
    "Host a campaign conversation",
    "Media & press inquiry",
    "Other campaign matter",
  ],
  general: [
    "Collaboration opportunity",
    "Speaking invitation",
    "Research inquiry",
    "General question",
    "Other",
  ],
};

const affiliations = ["Student", "Staff / Faculty", "Community Organization", "Media", "Other"];

export default function ContactPage() {
  const [mode, setMode] = useState<Mode>("campaign");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "", email: "", affiliation: "", topic: "", message: "",
  });

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.topic) e.topic = "Please select a topic.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    // TODO: Connect to a backend or form service (e.g. Formspree, EmailJS, Resend)
    setSubmitted(true);
  };

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((er) => { const n = { ...er }; delete n[field]; return n; });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-12 md:pt-36 md:pb-16 bg-gradient-to-br from-[#0B1F3B] to-[#132d57]">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <span className="inline-block text-[#F2A93B] text-sm font-semibold tracking-widest uppercase mb-4">Contact</span>
            <h1 className="text-3xl md:text-5xl font-black text-white font-poppins">Let&apos;s build solutions together.</h1>
            <p className="mt-5 text-white/60 text-base md:text-lg max-w-xl mx-auto">
              Whether you have a question about the campaign, want to collaborate, or just want to say hi, reach out.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#F5F5F7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

            {/* Form column */}
            <div className="lg:col-span-2">
              <AnimateIn>
                {/* Mode toggle */}
                <div className="flex gap-2 p-1 bg-white rounded-xl border border-[#e0e0e0] w-fit mb-8 shadow-sm">
                  {(["campaign", "general"] as Mode[]).map((m) => (
                    <button
                      key={m}
                      onClick={() => { setMode(m); setForm((f) => ({ ...f, topic: "" })); }}
                      className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${mode === m ? "bg-[#0B1F3B] text-white shadow" : "text-[#666] hover:text-[#0B1F3B]"}`}
                    >
                      {m === "campaign" ? "Campaign & SGA" : "General & Collaborations"}
                    </button>
                  ))}
                </div>

                {submitted ? (
                  <div className="bg-white rounded-3xl p-10 border border-[#e0e0e0] text-center">
                    <HiCheckCircle className="text-[#30A38A] mx-auto mb-4" size={56} />
                    <h2 className="text-2xl font-black text-[#0B1F3B] font-poppins">Message sent!</h2>
                    <p className="text-[#666] mt-3">
                      Thanks for reaching out, {form.name.split(" ")[0]}. Kamuskay or the campaign team will get back to you soon.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", affiliation: "", topic: "", message: "" }); }}
                      className="mt-6 px-6 py-2.5 bg-[#0B1F3B] text-white rounded-full text-sm font-bold hover:bg-[#132d57] transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="bg-white rounded-3xl p-8 md:p-10 border border-[#e0e0e0] shadow-sm space-y-6">
                    <h2 className="text-xl font-black text-[#0B1F3B] font-poppins">
                      {mode === "campaign" ? "Campaign & SGA Inquiry" : "General & Collaboration Inquiry"}
                    </h2>

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-[#333] mb-1.5" htmlFor="name">Name *</label>
                        <input
                          id="name" type="text" value={form.name} onChange={set("name")}
                          placeholder="Your full name"
                          className={`w-full px-4 py-3 rounded-xl border text-[#222] text-sm outline-none transition-all focus:border-[#0B1F3B] focus:ring-2 focus:ring-[#0B1F3B]/10 ${errors.name ? "border-red-400 bg-red-50" : "border-[#d0d0d0] bg-white"}`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#333] mb-1.5" htmlFor="email">Email *</label>
                        <input
                          id="email" type="email" value={form.email} onChange={set("email")}
                          placeholder="your@email.com"
                          className={`w-full px-4 py-3 rounded-xl border text-[#222] text-sm outline-none transition-all focus:border-[#0B1F3B] focus:ring-2 focus:ring-[#0B1F3B]/10 ${errors.email ? "border-red-400 bg-red-50" : "border-[#d0d0d0] bg-white"}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Affiliation + Topic */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-[#333] mb-1.5" htmlFor="affiliation">Affiliation</label>
                        <select
                          id="affiliation" value={form.affiliation} onChange={set("affiliation")}
                          className="w-full px-4 py-3 rounded-xl border border-[#d0d0d0] bg-white text-[#222] text-sm outline-none transition-all focus:border-[#0B1F3B] focus:ring-2 focus:ring-[#0B1F3B]/10"
                        >
                          <option value="">Select affiliation...</option>
                          {affiliations.map((a) => <option key={a}>{a}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#333] mb-1.5" htmlFor="topic">Topic / Reason *</label>
                        <select
                          id="topic" value={form.topic} onChange={set("topic")}
                          className={`w-full px-4 py-3 rounded-xl border text-[#222] text-sm outline-none transition-all focus:border-[#0B1F3B] focus:ring-2 focus:ring-[#0B1F3B]/10 ${errors.topic ? "border-red-400 bg-red-50" : "border-[#d0d0d0] bg-white"}`}
                        >
                          <option value="">Select a topic...</option>
                          {topics[mode].map((t) => <option key={t}>{t}</option>)}
                        </select>
                        {errors.topic && <p className="text-red-500 text-xs mt-1">{errors.topic}</p>}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-[#333] mb-1.5" htmlFor="message">Message *</label>
                      <textarea
                        id="message" value={form.message} onChange={set("message")}
                        rows={5} placeholder="What's on your mind?"
                        className={`w-full px-4 py-3 rounded-xl border text-[#222] text-sm outline-none transition-all focus:border-[#0B1F3B] focus:ring-2 focus:ring-[#0B1F3B]/10 resize-none ${errors.message ? "border-red-400 bg-red-50" : "border-[#d0d0d0] bg-white"}`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#0B1F3B] text-white font-bold rounded-xl hover:bg-[#132d57] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </AnimateIn>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <AnimateIn delay={0.1}>
                <div className="bg-white rounded-2xl border border-[#e0e0e0] p-6">
                  <h3 className="font-bold text-[#0B1F3B] mb-5 font-poppins">Direct Contact</h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:kamarak@berea.edu"
                      className="flex items-center gap-3 text-sm text-[#444] hover:text-[#0B1F3B] transition-colors group"
                    >
                      <span className="w-9 h-9 rounded-xl bg-[#0B1F3B]/5 group-hover:bg-[#0B1F3B] flex items-center justify-center transition-colors">
                        <HiMail className="text-[#0B1F3B] group-hover:text-white" size={18} />
                      </span>
                      <div>
                        <p className="font-semibold text-[#0B1F3B]">Academic Email</p>
                        <p className="text-[#666] text-xs">kamarak@berea.edu</p>
                      </div>
                    </a>
                    {/* Campaign email removed as requested */}
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.15}>
                <div className="bg-white rounded-2xl border border-[#e0e0e0] p-6">
                  <h3 className="font-bold text-[#0B1F3B] mb-5 font-poppins">Follow Along</h3>
                  <div className="flex gap-3">
                    {[
                      { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/kamuskay-kamara-3b985b203/", bg: "bg-[#0077b5]/10 hover:bg-[#0077b5]", color: "text-[#0077b5] group-hover:text-white" },
                      { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/kamuskaykamuskaysl?igsh=MW00ZHJ1bGZqOGl3Nw==", bg: "bg-pink-50 hover:bg-pink-500", color: "text-pink-500 group-hover:text-white" },
                      { icon: FaFacebook, label: "Facebook", href: "https://www.facebook.com/kamuskay.kamuskay.2025", bg: "bg-blue-50 hover:bg-blue-600", color: "text-blue-600 group-hover:text-white" },
                    ].map(({ icon: Icon, label, href, bg, color }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group w-11 h-11 rounded-xl ${bg} flex items-center justify-center transition-all duration-200`}
                      >
                        <Icon className={`${color} transition-colors`} size={18} />
                      </a>
                    ))}
                  </div>
                  <p className="text-[#888] text-xs mt-3 italic">
                    Connect with Kamuskay on social media or by email.
                  </p>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <div className="bg-[#0B1F3B] rounded-2xl p-6 text-white">
                  <p className="font-black text-lg font-poppins">#Kamuskay4SGA</p>
                  <p className="text-white/60 text-sm mt-2 leading-relaxed">
                    Use this hashtag when sharing on social media and help spread the movement.
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
