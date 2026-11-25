import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  AlertCircle,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { CLINIC_INFO, OPENING_HOURS } from '../data/clinicData';
import { PageMeta } from '../components/PageMeta';

interface BookingDraft {
  fullName: string;
  phone: string;
  email: string;
  treatment: string;
  preferredDate: string;
  preferredTime: string;
  contactMethod: 'WhatsApp' | 'Phone Call' | 'Email';
  message: string;
  consent: boolean;
}

export function BookAppointmentPage() {
  const [searchParams] = useSearchParams();
  const initialTreatment = searchParams.get('treatment') || 'Initial Skincare Consultation';

  const [form, setForm] = useState<BookingDraft>({
    fullName: '',
    phone: '',
    email: '',
    treatment: initialTreatment,
    preferredDate: '',
    preferredTime: '1:00 PM – 3:00 PM',
    contactMethod: 'WhatsApp',
    message: '',
    consent: false,
  });

  const [error, setError] = useState<string | null>(null);
  const [submittedRequest, setSubmittedRequest] = useState<BookingDraft | null>(null);

  useEffect(() => {
    const paramTreatment = searchParams.get('treatment');
    if (paramTreatment) {
      setForm((prev) => ({ ...prev, treatment: paramTreatment }));
    }
  }, [searchParams]);

  const todayIso = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (form.phone.trim().length < 7) {
      setError('Please provide a valid phone or WhatsApp number.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!form.preferredDate) {
      setError('Please choose a preferred appointment date (Monday–Saturday).');
      return;
    }
    const chosenDay = new Date(`${form.preferredDate}T12:00:00`).getDay();
    if (chosenDay === 0) {
      setError('Essence Aesthetics Clinic is closed on Sundays. Please select Monday through Saturday.');
      return;
    }
    if (!form.consent) {
      setError('Please agree to the privacy consent checkbox to submit your request.');
      return;
    }

    setError(null);
    setSubmittedRequest({ ...form });
  };

  const buildWhatsAppLink = (draft: BookingDraft) => {
    const lines = [
      'Hello Essence Aesthetics Clinic, I would like to request a consultation:',
      `Name: ${draft.fullName}`,
      `Phone / WhatsApp: ${draft.phone}`,
      `Email: ${draft.email}`,
      `Treatment of Interest: ${draft.treatment}`,
      `Preferred Date: ${draft.preferredDate}`,
      `Preferred Time Window: ${draft.preferredTime}`,
      `Preferred Contact Method: ${draft.contactMethod}`,
      draft.message.trim() ? `Notes: ${draft.message.trim()}` : '',
    ].filter(Boolean);

    return `${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  return (
    <>
      <PageMeta
        title="Book Appointment — Essence Aesthetics Clinic DHA Phase II, Islamabad"
        description="Request a consultation at Essence Aesthetics Clinic in DHA Phase II, Islamabad via our online appointment request form or WhatsApp."
      />

      <section className="bg-gradient-to-b from-[#E9B8CD]/20 to-[#FFF9F7] py-16 lg:py-20 border-b border-[#E9B8CD]/35">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-4">
          <p className="text-xs uppercase tracking-[0.22em] text-[#C985A4] font-medium">
            Consultation Request · DHA Phase II, Islamabad
          </p>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#59384F] leading-tight">
            Your Journey to Confidence Starts Here.
          </h1>
          <p className="text-base sm:text-lg text-[#343039]/80 max-w-2xl leading-relaxed">
            Submit your preferred consultation details below or reach our clinic directly on
            WhatsApp. All appointment times are confirmed by clinic staff.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Booking Form */}
          <div className="lg:col-span-7">
            {submittedRequest ? (
              <div className="bg-[#FFF9F7] border border-[#59384F]/35 p-8 sm:p-10 space-y-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#59384F] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#C985A4] font-medium">
                      Request Prepared — Not Yet Confirmed
                    </p>
                    <h2 className="font-editorial text-3xl text-[#59384F]">
                      Complete Your Request with Our Clinic Desk
                    </h2>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#343039]/85 leading-relaxed">
                  Thank you, <strong>{submittedRequest.fullName}</strong>. Final appointment
                  confirmation is provided directly by Essence Aesthetics Clinic staff to ensure
                  availability. Click below to send your prefilled request straight to our clinic
                  WhatsApp desk, or call us during opening hours.
                </p>

                <div className="bg-white border border-[#E9B8CD]/45 p-5 space-y-2 text-sm tabular-nums">
                  <p>
                    <span className="text-[#343039]/65">Treatment:</span>{' '}
                    <span className="font-medium text-[#59384F]">{submittedRequest.treatment}</span>
                  </p>
                  <p>
                    <span className="text-[#343039]/65">Preferred Date:</span>{' '}
                    <span className="font-medium text-[#59384F]">
                      {submittedRequest.preferredDate}
                    </span>
                  </p>
                  <p>
                    <span className="text-[#343039]/65">Preferred Window:</span>{' '}
                    <span className="font-medium text-[#59384F]">
                      {submittedRequest.preferredTime}
                    </span>
                  </p>
                  <p>
                    <span className="text-[#343039]/65">Preferred Contact:</span>{' '}
                    <span className="font-medium text-[#59384F]">
                      {submittedRequest.contactMethod}
                    </span>
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={buildWhatsAppLink(submittedRequest)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#59384F] text-white text-sm font-medium hover:bg-[#462b3e] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#E9B8CD]" />
                    <span>Send Request via WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmittedRequest(null)}
                    className="px-6 py-3.5 border border-[#C985A4]/50 text-[#59384F] text-sm font-medium hover:border-[#59384F] transition-colors cursor-pointer"
                  >
                    Edit Request Details
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-[#FFF9F7] border border-[#E9B8CD]/45 p-7 sm:p-10 space-y-6"
              >
                {error && (
                  <div
                    role="alert"
                    className="bg-white border border-[#59384F] p-4 flex items-start gap-3 text-sm text-[#59384F]"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="book-name"
                      className="block text-xs uppercase tracking-[0.15em] text-[#59384F] font-semibold"
                    >
                      Full Name *
                    </label>
                    <input
                      id="book-name"
                      type="text"
                      required
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 bg-white border border-[#E9B8CD]/60 text-sm focus:outline-none focus:border-[#59384F]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="book-phone"
                      className="block text-xs uppercase tracking-[0.15em] text-[#59384F] font-semibold"
                    >
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      id="book-phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+92 3XX XXXXXXX"
                      className="w-full px-4 py-3 bg-white border border-[#E9B8CD]/60 text-sm focus:outline-none focus:border-[#59384F]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="book-email"
                      className="block text-xs uppercase tracking-[0.15em] text-[#59384F] font-semibold"
                    >
                      Email Address *
                    </label>
                    <input
                      id="book-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 bg-white border border-[#E9B8CD]/60 text-sm focus:outline-none focus:border-[#59384F]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="book-treatment"
                      className="block text-xs uppercase tracking-[0.15em] text-[#59384F] font-semibold"
                    >
                      Treatment of Interest *
                    </label>
                    <select
                      id="book-treatment"
                      value={form.treatment}
                      onChange={(e) => setForm({ ...form, treatment: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#E9B8CD]/60 text-sm focus:outline-none focus:border-[#59384F]"
                    >
                      <option value="Initial Skincare Consultation">
                        Initial Skincare Consultation
                      </option>
                      <option value="Hydra Therapy / Hydra Facial">
                        Hydra Therapy / Hydra Facial
                      </option>
                      <option value="Laser Hair Removal">Laser Hair Removal</option>
                      <option value="Pigmentation Treatment">Pigmentation Treatment</option>
                      <option value="Microneedling">Microneedling</option>
                      <option value="Chemical Peel Treatment">Chemical Peel Treatment</option>
                      <option value="Acne & Acne Scar Treatment">
                        Acne &amp; Acne Scar Treatment
                      </option>
                      <option value="Skin Rejuvenation Treatment">
                        Skin Rejuvenation Treatment
                      </option>
                      <option value="Follow-Up Visit">Follow-Up Visit</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="book-date"
                      className="block text-xs uppercase tracking-[0.15em] text-[#59384F] font-semibold"
                    >
                      Preferred Date (Mon–Sat) *
                    </label>
                    <input
                      id="book-date"
                      type="date"
                      min={todayIso}
                      required
                      value={form.preferredDate}
                      onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#E9B8CD]/60 text-sm tabular-nums focus:outline-none focus:border-[#59384F]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="book-time"
                      className="block text-xs uppercase tracking-[0.15em] text-[#59384F] font-semibold"
                    >
                      Preferred Time Window *
                    </label>
                    <select
                      id="book-time"
                      value={form.preferredTime}
                      onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#E9B8CD]/60 text-sm tabular-nums focus:outline-none focus:border-[#59384F]"
                    >
                      <option value="1:00 PM – 3:00 PM">1:00 PM – 3:00 PM</option>
                      <option value="3:00 PM – 5:00 PM">3:00 PM – 5:00 PM</option>
                      <option value="5:00 PM – 7:00 PM">5:00 PM – 7:00 PM</option>
                      <option value="7:00 PM – 9:00 PM">7:00 PM – 9:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="block text-xs uppercase tracking-[0.15em] text-[#59384F] font-semibold">
                    Preferred Contact Method *
                  </span>
                  <div className="grid grid-cols-3 gap-3">
                    {(['WhatsApp', 'Phone Call', 'Email'] as const).map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setForm({ ...form, contactMethod: method })}
                        aria-pressed={form.contactMethod === method}
                        className={`py-2.5 px-3 text-xs sm:text-sm font-medium border transition-colors cursor-pointer ${
                          form.contactMethod === method
                            ? 'bg-[#59384F] text-white border-[#59384F]'
                            : 'bg-white text-[#59384F] border-[#E9B8CD]/60 hover:border-[#59384F]'
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="book-message"
                    className="block text-xs uppercase tracking-[0.15em] text-[#59384F] font-semibold"
                  >
                    Additional Message (Optional)
                  </label>
                  <textarea
                    id="book-message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Share any questions or scheduling notes for our clinic coordinator..."
                    className="w-full px-4 py-3 bg-white border border-[#E9B8CD]/60 text-sm focus:outline-none focus:border-[#59384F]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-start gap-3 cursor-pointer text-sm text-[#343039]/85">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                      className="mt-1 w-4 h-4 accent-[#59384F]"
                    />
                    <span>
                      I consent to Essence Aesthetics Clinic using these details to contact me
                      regarding my consultation request.
                    </span>
                  </label>
                  <p className="text-xs text-[#343039]/65">
                    Submitting this form prepares your appointment request; final confirmation is
                    provided directly by clinic staff.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#59384F] text-white text-sm font-medium hover:bg-[#462b3e] transition-colors cursor-pointer"
                >
                  Submit Appointment Request
                </button>
              </form>
            )}
          </div>

          {/* Direct Booking Alternatives & Clinic Hours */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="bg-[#FFF9F7] border border-[#D9C9E8]/70 p-7 sm:p-8 space-y-5">
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#59384F]">
                Prefer Instant WhatsApp Booking?
              </h2>
              <p className="text-sm text-[#343039]/80 leading-relaxed">
                Speak directly with our reception desk during clinic hours or send us a WhatsApp
                message anytime to arrange your consultation.
              </p>
              <div className="space-y-3">
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#59384F] text-white text-sm font-medium hover:bg-[#462b3e] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#E9B8CD]" />
                  <span>Book via WhatsApp</span>
                </a>
                <a
                  href={CLINIC_INFO.phoneHref}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#C985A4]/50 text-[#59384F] text-sm font-medium hover:border-[#59384F] transition-colors tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#C985A4]" />
                  <span>Call {CLINIC_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="bg-white border border-[#E9B8CD]/40 p-7 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 text-[#59384F]">
                <Clock className="w-4 h-4 text-[#C985A4]" />
                <h3 className="font-editorial text-2xl">Appointment Hours</h3>
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
              <p className="text-xs text-[#343039]/70 flex items-start gap-2 pt-2">
                <Calendar className="w-4 h-4 text-[#C985A4] shrink-0 mt-0.5" />
                <span>Appointments are recommended so our team can dedicate unhurried time to your visit.</span>
              </p>
              <a
                href={CLINIC_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#59384F] hover:underline flex items-start gap-2"
              >
                <MapPin className="w-4 h-4 text-[#C985A4] shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.addressFull}</span>
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
