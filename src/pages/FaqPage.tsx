import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { PageMeta } from '../components/PageMeta';

const GENERAL_FAQS = [
  {
    question: 'How do I request an appointment at Essence Aesthetics Clinic?',
    answer:
      'You can submit your preferred date, time window, and treatment interest through our Book Appointment page, or message the clinic directly on WhatsApp at +92 315 0529578. Clinic staff will follow up to confirm availability.',
  },
  {
    question: 'How can I contact the clinic directly?',
    answer:
      'You can call or message us on WhatsApp at +92 315 0529578, or email essenceaesthetics.pk@gmail.com. Full contact details and Google Maps directions are also available on our Contact page.',
  },
  {
    question: 'Where is Essence Aesthetics Clinic located and what are the opening hours?',
    answer:
      'We are located at Plaza 48, Commercial Sector E, DHA Phase II, Islamabad, 45730, Pakistan. The clinic is open Monday through Saturday from 1:00 PM to 9:00 PM and is closed on Sundays. Appointments are recommended.',
  },
  {
    question: 'How can I find out if a treatment is suitable for my skin?',
    answer:
      'Treatment suitability is always assessed individually during an in-clinic consultation rather than online. Booking a consultation allows you to discuss your skin goals, questions, and current routine directly with our team.',
  },
  {
    question: 'How do I submit a patient review or feedback?',
    answer:
      'Visit our Reviews page to either share your feedback using the "Share Your Experience" website form or click "Write a Google Review" to post directly on our Google Business Profile.',
  },
  {
    question: 'How can I request more information about treatments not listed in detail?',
    answer:
      'Please reach out via WhatsApp (+92 315 0529578), call the reception desk, or request an Initial Skincare Consultation through our booking page so our staff can provide accurate clinic-approved details.',
  },
];

export function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <PageMeta
        title="Frequently Asked Questions — Essence Aesthetics Clinic Islamabad"
        description="Answers to common questions about booking appointments, clinic hours, location in DHA Phase II Islamabad, and submitting patient feedback."
      />

      <section className="bg-gradient-to-b from-[#E9B8CD]/20 to-[#FFF9F7] py-16 lg:py-20 border-b border-[#E9B8CD]/35">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-4">
          <p className="text-xs uppercase tracking-[0.22em] text-[#C985A4] font-medium">
            Helpful Information
          </p>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#59384F]">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-[#343039]/80 leading-relaxed">
            General guidance on scheduling consultations, reaching our DHA Phase II clinic, and
            sharing patient feedback.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="divide-y divide-[#E9B8CD]/35 border-y border-[#E9B8CD]/35">
            {GENERAL_FAQS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-5 sm:py-6">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <span className="font-editorial text-xl sm:text-2xl text-[#59384F]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#C985A4] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-sm sm:text-base text-[#343039]/80 leading-relaxed pr-8">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="bg-[#FFF9F7] border border-[#D9C9E8]/70 p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#59384F]">
                Still Have a Question?
              </h2>
              <p className="text-sm text-[#343039]/75">
                Our clinic team is happy to assist during opening hours (Mon–Sat, 1:00 PM – 9:00 PM).
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                to="/book"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#59384F] text-white text-sm font-medium hover:bg-[#462b3e] transition-colors"
              >
                Book Consultation
              </Link>
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-[#C985A4]/50 text-[#59384F] text-sm font-medium hover:border-[#59384F] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#C985A4]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
