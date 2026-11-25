import { Link } from 'react-router-dom';
import {
  Clock,
  ExternalLink,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { CLINIC_INFO, OPENING_HOURS } from '../data/clinicData';
import { PageMeta } from '../components/PageMeta';

function FacebookIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5H17V5c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V11H7.3v3H10v8h3.5z" />
    </svg>
  );
}

export function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contact Us — Essence Aesthetics Clinic | DHA Phase II, Islamabad"
        description="Contact Essence Aesthetics Clinic at Plaza 48, Commercial Sector E, DHA Phase II, Islamabad. Call, message on WhatsApp, view hours, or get directions."
      />

      <section className="bg-gradient-to-b from-[#D9C9E8]/25 to-[#FFF9F7] py-16 lg:py-20 border-b border-[#E9B8CD]/35">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-4">
          <p className="text-xs uppercase tracking-[0.22em] text-[#C985A4] font-medium">
            Reach Our Clinic
          </p>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#59384F]">
            Contact Essence Aesthetics Clinic
          </h1>
          <p className="text-base sm:text-lg text-[#343039]/80 max-w-2xl leading-relaxed">
            We welcome inquiries about appointments, clinic hours, and personalized skincare
            consultations at our DHA Phase II, Islamabad location.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#FFF9F7] border border-[#E9B8CD]/45 p-7 sm:p-9 space-y-6">
              <h2 className="font-editorial text-3xl text-[#59384F]">Direct Contact</h2>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#C985A4] mt-1 shrink-0" />
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.15em] text-[#343039]/60">
                      Phone / WhatsApp
                    </p>
                    <a
                      href={CLINIC_INFO.phoneHref}
                      className="text-base font-medium text-[#59384F] hover:underline tabular-nums block"
                    >
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#C985A4] mt-1 shrink-0" />
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.15em] text-[#343039]/60">Email</p>
                    <a
                      href={CLINIC_INFO.emailHref}
                      className="text-base font-medium text-[#59384F] hover:underline break-all block"
                    >
                      {CLINIC_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C985A4] mt-1 shrink-0" />
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.15em] text-[#343039]/60">
                      Clinic Address
                    </p>
                    <a
                      href={CLINIC_INFO.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-[#59384F] hover:underline leading-relaxed block"
                    >
                      {CLINIC_INFO.addressFull}
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={CLINIC_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#59384F] text-white text-xs sm:text-sm font-medium hover:bg-[#462b3e] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E9B8CD]" />
                  <span>Call Clinic</span>
                </a>
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white border border-[#C985A4]/50 text-[#59384F] text-xs sm:text-sm font-medium hover:border-[#59384F] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#C985A4]" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="pt-4 border-t border-[#E9B8CD]/35 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={CLINIC_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-[#E9B8CD]/50 text-xs font-medium text-[#59384F] hover:border-[#59384F] transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-[#C985A4]" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={CLINIC_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-[#E9B8CD]/50 text-xs font-medium text-[#59384F] hover:border-[#59384F] transition-colors"
                  >
                    <FacebookIcon className="w-4 h-4 text-[#C985A4]" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href={CLINIC_INFO.emailHref}
                    aria-label="Gmail"
                    className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-[#E9B8CD]/50 text-xs font-medium text-[#59384F] hover:border-[#59384F] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#C985A4]" />
                    <span>Gmail</span>
                  </a>
                </div>

                <Link
                  to="/book"
                  className="text-xs sm:text-sm font-medium text-[#59384F] border-b border-[#C985A4] pb-0.5 hover:text-[#C985A4] transition-colors"
                >
                  Book Consultation →
                </Link>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-[#FFF9F7] border border-[#D9C9E8]/70 p-7 sm:p-9 space-y-4">
              <div className="flex items-center gap-2 text-[#59384F]">
                <Clock className="w-4 h-4 text-[#C985A4]" />
                <h2 className="font-editorial text-2xl sm:text-3xl">Opening Hours</h2>
              </div>
              <ul className="space-y-2 text-sm tabular-nums">
                {OPENING_HOURS.map((row) => (
                  <li
                    key={row.day}
                    className="flex items-center justify-between py-1 border-b border-[#E9B8CD]/20 last:border-b-0"
                  >
                    <span className="text-[#343039]/75">{row.day}</span>
                    <span
                      className={
                        row.isClosed ? 'text-[#C985A4] font-medium' : 'text-[#59384F] font-medium'
                      }
                    >
                      {row.hours}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#343039]/70">Appointments are recommended.</p>
            </div>
          </div>

          {/* Interactive Google Map Column */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="flex-1 min-h-[400px] lg:min-h-[540px] border border-[#E9B8CD]/45 overflow-hidden bg-[#FFF9F7]">
              <iframe
                title="Google Map — Essence Aesthetics Clinic, Plaza 48, Commercial Sector E, DHA Phase II, Islamabad"
                src={CLINIC_INFO.googleMapsEmbedUrl}
                className="w-full h-full min-h-[400px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="bg-[#FFF9F7] border border-[#E9B8CD]/40 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-editorial text-2xl text-[#59384F]">
                  Plaza 48, Commercial Sector E
                </p>
                <p className="text-sm text-[#343039]/75">DHA Phase II, Islamabad, 45730, Pakistan</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={CLINIC_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#59384F] text-white text-xs sm:text-sm font-medium hover:bg-[#462b3e] transition-colors"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <Link
                  to="/book"
                  className="inline-flex items-center justify-center px-5 py-3 bg-white border border-[#C985A4]/50 text-[#59384F] text-xs sm:text-sm font-medium hover:border-[#59384F] transition-colors"
                >
                  Request Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
