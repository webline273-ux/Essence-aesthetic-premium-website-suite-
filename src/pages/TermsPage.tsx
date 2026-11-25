import { AlertCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { PageMeta } from '../components/PageMeta';

export function TermsPage() {
  return (
    <>
      <PageMeta
        title="Terms & Conditions — Essence Aesthetics Clinic"
        description="Draft Terms & Conditions for Essence Aesthetics Clinic covering website usage, consultation requests, disclaimers, and review submissions."
      />

      <section className="bg-gradient-to-b from-[#D9C9E8]/25 to-[#FFF9F7] py-16 border-b border-[#E9B8CD]/35">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-4">
          <p className="text-xs uppercase tracking-[0.22em] text-[#C985A4] font-medium">
            Clinic Website Terms
          </p>
          <h1 className="font-editorial text-4xl sm:text-5xl text-[#59384F]">
            Terms &amp; Conditions
          </h1>
          <div className="bg-white border border-[#59384F]/30 p-4 flex items-start gap-3 text-xs sm:text-sm text-[#343039]/85">
            <AlertCircle className="w-5 h-5 text-[#C985A4] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#59384F]">Approval Notice:</strong> These Terms &amp;
              Conditions are a draft template and any unconfirmed clinic policies remain subject
              to formal approval by Essence Aesthetics Clinic before public launch.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-9 text-sm sm:text-base text-[#343039]/85 leading-relaxed">
          <div className="space-y-2.5">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#59384F]">
              1. Website Usage
            </h2>
            <p>
              This website provides general information about Essence Aesthetics Clinic, our DHA
              Phase II, Islamabad location, and ways to request a consultation. You agree to use
              this website lawfully and respectfully.
            </p>
          </div>

          <div className="space-y-2.5">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#59384F]">
              2. Appointment Requests &amp; Confirmations
            </h2>
            <p>
              Submitting an appointment request online or via WhatsApp does not automatically
              guarantee a confirmed time slot. All appointments remain subject to availability and
              direct confirmation from Essence Aesthetics Clinic staff.
            </p>
          </div>

          <div className="space-y-2.5">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#59384F]">
              3. Cancellation &amp; Rescheduling Policy
            </h2>
            <p>
              Any specific notice windows, rescheduling terms, or cancellation policies are{' '}
              <strong>subject to clinic confirmation</strong> by Essence Aesthetics Clinic staff at
              the time of booking. Please contact the clinic directly as early as possible if you
              need to adjust a scheduled visit.
            </p>
          </div>

          <div className="space-y-2.5">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#59384F]">
              4. Treatment Information Disclaimer
            </h2>
            <p>
              Content describing skincare services such as microneedling or laser sessions is
              general educational information only and does not constitute personalized medical
              advice or a guarantee of specific outcomes. Treatment suitability is evaluated in
              person during a clinic consultation.
            </p>
          </div>

          <div className="space-y-2.5">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#59384F]">
              5. Before-and-After Image Disclaimer
            </h2>
            <p>
              Any patient comparison photographs published after clinic approval reflect individual
              cases shared with patient consent. Individual skin responses vary and comparison
              images do not guarantee identical results.
            </p>
          </div>

          <div className="space-y-2.5">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#59384F]">
              6. Review Submission Rules
            </h2>
            <p>
              Feedback submitted on this website must reflect a genuine personal experience and
              must not include unlawful, defamatory, or misleading content. Clinic staff reserve
              the right to moderate submissions for formatting or policy compliance without
              altering the meaning of authentic feedback.
            </p>
          </div>

          <div className="space-y-2.5">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#59384F]">
              7. Intellectual Property &amp; External Links
            </h2>
            <p>
              The Essence Aesthetics Clinic brand name, logo, and original clinic materials remain
              the property of Essence Aesthetics Clinic. External links to Google Maps, Google
              Business Profile, Instagram, Facebook, and WhatsApp are provided for convenience; we
              are not responsible for the content or availability of external sites.
            </p>
          </div>

          <div className="space-y-2.5">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#59384F]">
              8. Limitation of Liability &amp; Contact
            </h2>
            <p>
              To the extent permitted by applicable law, Essence Aesthetics Clinic is not liable
              for indirect losses arising from temporary website unavailability or external
              third-party platforms. For questions regarding these terms, contact{' '}
              <a href={CLINIC_INFO.emailHref} className="text-[#59384F] underline">
                {CLINIC_INFO.email}
              </a>{' '}
              or {CLINIC_INFO.phoneDisplay}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
