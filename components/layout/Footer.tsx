import Link from "next/link";
import { FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/activities", label: "Activities" },
  { href: "/kamuskay4sga", label: "Kamuskay4SGA" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "#", label: "LinkedIn", icon: FaLinkedin },
  { href: "#", label: "Instagram", icon: FaInstagram },
  { href: "#", label: "Twitter / X", icon: FaTwitter },
  { href: "mailto:kamarak@berea.edu", label: "Email", icon: FaEnvelope },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3B] text-white">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-[#F2A93B] via-[#30A38A] to-[#F2A93B]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold font-poppins">Kamuskay Kamara</h2>
            <p className="mt-1 text-[#F2A93B] italic text-sm font-medium">
              It&apos;s all about the solution.
            </p>
            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-xs">
              Berea College junior, community builder, and candidate for SGA
              Executive Chair. Building a Berea where every student truly belongs.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F2A93B] hover:text-[#0B1F3B] flex items-center justify-center transition-all duration-200 text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#F2A93B] transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">
              Get in Touch
            </h3>
            <p className="text-white/70 text-sm">
              <span className="block text-white font-medium">Academic Email</span>
              <a
                href="mailto:kamarak@berea.edu"
                className="hover:text-[#F2A93B] transition-colors"
              >
                kamarak@berea.edu
              </a>
            </p>
            <p className="mt-4 text-white/70 text-sm">
              <span className="block text-white font-medium">Campaign Email</span>
              <a
                href="mailto:kamuskay4sga@berea.edu"
                className="hover:text-[#F2A93B] transition-colors"
              >
                {/* TODO: Replace with actual campaign email */}
                kamuskay4sga@berea.edu
              </a>
            </p>
            <Link
              href="/kamuskay4sga"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-[#F2A93B] text-[#0B1F3B] font-bold rounded-full text-sm hover:bg-[#f7c46d] transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              Vote Kamuskay4SGA
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/40 text-xs">
          <p>
            &copy; {new Date().getFullYear()} Kamuskay Kamara. All rights reserved.
          </p>
          <p>Berea College &bull; Berea, Kentucky</p>
        </div>
      </div>
    </footer>
  );
}
