import React, { useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Clock,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { CLINIC_INFO, OPENING_HOURS } from '../data/clinicData';
import { ClinicLogo } from './ClinicLogo';

const ALL_NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Before & After', to: '/before-after' },
  { label: 'Our Clinic', to: '/clinic' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Book Appointment', to: '/book' },
  { label: 'Contact', to: '/contact' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms' },
];

function FacebookIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5H17V5c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V11H7.3v3H10v8h3.5z" />
    </svg>
  );
}

function GmailIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F7] text-[#343039]">
      {/* Slim Top Bar (Phone & Hours only — no location as requested) */}
      <div className="hidden md:block bg-[#59384F] text-[#FFF9F7] text-xs py-2 border-b border-[#C985A4]/25">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <a
              href={CLINIC_INFO.phoneHref}
              className="inline-flex items-center gap-1.5 hover:text-[#E9B8CD] transition-colors whitespace-nowrap tabular-nums"
            >
              <Phone className="w-3.5 h-3.5 text-[#E9B8CD]" />
              <span>{CLINIC_INFO.phoneDisplay}</span>
            </a>
            <span aria-hidden="true" className="text-[#E9B8CD]/40">
              |
            </span>
            <a
              href={CLINIC_INFO.emailHref}
              className="inline-flex items-center gap-1.5 hover:text-[#E9B8CD] transition-colors whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 text-[#E9B8CD]" />
              <span>{CLINIC_INFO.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-4 whitespace-nowrap">
            <span className="inline-flex items-center gap-1.5 text-[#FFF9F7]/90">
              <Clock className="w-3.5 h-3.5 text-[#E9B8CD]" />
              <span>Mon–Sat: 1:00 PM – 9:00 PM · Appointments Recommended</span>
            </span>
          </div>
        </div>
      </div>

      {/* Sticky Main Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E9B8CD]/35">
        {/* Row 1: Logo + Book Appointment Button (3-line menu removed) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#59384F] py-1 shrink-0"
            aria-label="Essence Aesthetics Clinic Home"
          >
            <ClinicLogo />
          </Link>

          <div className="flex items-center gap-2.5 shrink-0">
            <Link
              to="/book"
              className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 bg-[#59384F] text-white text-xs sm:text-sm font-medium tracking-wide hover:bg-[#462b3e] transition-colors whitespace-nowrap shrink-0"
            >
              Book Appointment
            </Link>
          </div>
        </div>

        {/* Row 2: All Pages Always Visible in Top Bar */}
        <div className="border-t border-[#E9B8CD]/25 bg-[#FFF9F7]/90">
          <nav
            aria-label="Main navigation"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center gap-4 sm:gap-5 overflow-x-auto text-[12.5px] sm:text-[13px] font-medium text-[#343039]/85"
          >
            {ALL_NAV_LINKS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative py-1 whitespace-nowrap shrink-0 transition-colors hover:text-[#59384F] ${
                    isActive
                      ? 'text-[#59384F] font-semibold after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-[#C985A4]'
                      : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Complete Luxury Footer */}
      <footer className="bg-[#59384F] text-[#FFF9F7] border-t border-[#C6A16B]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            {/* Brand & Address Column */}
            <div className="lg:col-span-4 space-y-5">
              <ClinicLogo variant="light" />
              <p className="text-sm text-[#FFF9F7]/80 leading-relaxed max-w-sm">
                {CLINIC_INFO.description}
              </p>
              <div className="space-y-2.5 text-sm text-[#FFF9F7]/90 pt-2">
                <a
                  href={CLINIC_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 hover:text-[#E9B8CD] transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#E9B8CD] mt-0.5 shrink-0" />
                  <span>{CLINIC_INFO.addressFull}</span>
                </a>
                <p className="flex items-center gap-2.5 tabular-nums">
                  <Phone className="w-4 h-4 text-[#E9B8CD] shrink-0" />
                  <a href={CLINIC_INFO.phoneHref} className="hover:text-[#E9B8CD] transition-colors">
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#E9B8CD] shrink-0" />
                  <a
                    href={CLINIC_INFO.emailHref}
                    className="hover:text-[#E9B8CD] transition-colors break-all"
                  >
                    {CLINIC_INFO.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Navigation Column */}
            <div className="lg:col-span-3 space-y-4">
              <h2 className="font-editorial text-xl text-white">Clinic Navigation</h2>
              <ul className="space-y-2.5 text-sm text-[#FFF9F7]/80">
                <li>
                  <Link to="/" className="hover:text-[#E9B8CD] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#E9B8CD] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-[#E9B8CD] transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/before-after" className="hover:text-[#E9B8CD] transition-colors">
                    Before &amp; After
                  </Link>
                </li>
                <li>
                  <Link to="/clinic" className="hover:text-[#E9B8CD] transition-colors">
                    Our Clinic
                  </Link>
                </li>
                <li>
                  <Link to="/reviews" className="hover:text-[#E9B8CD] transition-colors">
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>

            {/* Appointments & Legal Column */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="font-editorial text-xl text-white">Patient Care</h2>
              <ul className="space-y-2.5 text-sm text-[#FFF9F7]/80">
                <li>
                  <Link to="/book" className="hover:text-[#E9B8CD] transition-colors">
                    Book Appointment
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#E9B8CD] transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-[#E9B8CD] transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover:text-[#E9B8CD] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-[#E9B8CD] transition-colors">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Opening Hours & Socials */}
            <div className="lg:col-span-3 space-y-4">
              <h2 className="font-editorial text-xl text-white">Clinic Hours</h2>
              <ul className="space-y-1.5 text-xs text-[#FFF9F7]/85 tabular-nums">
                {OPENING_HOURS.map((row) => (
                  <li key={row.day} className="flex items-center justify-between gap-3">
                    <span className="text-[#FFF9F7]/70">{row.day}</span>
                    <span className={row.isClosed ? 'text-[#E9B8CD]' : ''}>{row.hours}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#E9B8CD]/90 pt-1">Appointments are recommended.</p>

              <div className="pt-3 flex items-center gap-3">
                <a
                  href={CLINIC_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Essence Aesthetics Clinic on Instagram"
                  className="inline-flex items-center justify-center w-10 h-10 border border-[#E9B8CD]/35 text-[#FFF9F7] hover:bg-[#E9B8CD] hover:text-[#59384F] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={CLINIC_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Essence Aesthetics Clinic on Facebook"
                  className="inline-flex items-center justify-center w-10 h-10 border border-[#E9B8CD]/35 text-[#FFF9F7] hover:bg-[#E9B8CD] hover:text-[#59384F] transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Message Essence Aesthetics Clinic on WhatsApp"
                  className="inline-flex items-center justify-center w-10 h-10 border border-[#E9B8CD]/35 text-[#FFF9F7] hover:bg-[#E9B8CD] hover:text-[#59384F] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href={CLINIC_INFO.emailHref}
                  aria-label="Email Essence Aesthetics Clinic via Gmail"
                  className="inline-flex items-center justify-center w-10 h-10 border border-[#E9B8CD]/35 text-[#FFF9F7] hover:bg-[#E9B8CD] hover:text-[#59384F] transition-colors"
                >
                  <GmailIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Legal & Brightline Web Credit Bar */}
          <div className="mt-14 pt-8 border-t border-[#FFF9F7]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF9F7]/70">
            <p>© {new Date().getFullYear()} Essence Aesthetics Clinic · DHA Phase II, Islamabad</p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[#FFF9F7]/70">
              <span>Website Concept &amp; Design by Brightline Web</span>
              <span aria-hidden="true">·</span>
              <span>Powered by Team Brightline Web</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Persistent Floating WhatsApp Button */}
      <a
        href={CLINIC_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Essence Aesthetics Clinic on WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 bg-[#59384F] text-white border border-[#C6A16B]/50 px-4 py-3 shadow-lg hover:bg-[#462b3e] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E9B8CD]"
      >
        <MessageCircle className="w-5 h-5 text-[#E9B8CD]" />
        <span className="hidden sm:inline text-xs font-medium tracking-wide whitespace-nowrap">
          WhatsApp Clinic
        </span>
      </a>
    </div>
  );
}
