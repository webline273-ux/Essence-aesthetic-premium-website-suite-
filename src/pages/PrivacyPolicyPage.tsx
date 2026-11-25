import { AlertCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { PageMeta } from '../components/PageMeta';

export function PrivacyPolicyPage() {
  return (
    <>
      <PageMeta
        title="Privacy Policy — Essence Aesthetics Clinic"
        description="Draft Privacy Policy for Essence Aesthetics Clinic outlining booking request data, review submissions, and third-party map and social links."
      />

      <section className="bg-gradient-to-b from-[#E9B8CD]/20 to-[#FFF9F7] py-16 border-b border-[#E9B8CD]/35">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-4">
          <p className="text-xs uppercase tracking-[0.22em] text-[#C985A4] font-medium">
            Legal &amp; Patient Privacy
          </p>
          <h1 className="font-editorial text-4xl sm:text-5xl text-[#59384F]">Privacy Policy</h1>
          <div className="bg-white border border-[#59384F]/30 p-4 flex items-start gap-3 text-xs sm:text-sm text-[#343039]/85">
            <AlertCircle className="w-5 h-5 text-[#C985A4] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#59384F]">Draft Notice:</strong> This Privacy Policy is a
              draft prepared for website launch readiness and requires formal review and approval
              by Essence Aesthetics Clinic management before public launch.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-10 text-sm sm:text-base text-[#343039]/85 leading-relaxed">
          <div className="space-y-3">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#59384F]">
              1. Information Collected Through Appointment Forms
            </h2>
            <p>
              When you use our appointment request form, you may provide your full name, phone or
              WhatsApp number, email address, treatment of interest, preferred date and time
              window, preferred contact method, and optional notes. This information is used solely
              to help clinic staff coordinate and confirm your consultation request.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#59384F]">
              2. Direct Contact Details &amp; WhatsApp Communication
            </h2>
            <p>
              If you contact Essence Aesthetics Clinic via phone ({CLINIC_INFO.phoneDisplay}),
              email ({CLINIC_INFO.email}), or WhatsApp, your contact details and message contents
              are used to respond to your inquiry and schedule requested appointments.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#59384F]">
              3. Patient Review Submissions
            </h2>
            <p>
              When submitting feedback through our website’s “Share Your Experience” form, we
              collect your submitted name, star rating, optional service category, written review,
              optional email address, and consent confirmation. Optional email addresses are kept
              confidential for internal clinic follow-up and are never published publicly. Reviews
              are subject to clinic staff moderation prior to any publication.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#59384F]">
              4. Purpose of Data Collection &amp; Handling
            </h2>
            <p>
              Information provided through this website is intended strictly for appointment
              coordination, responding to patient inquiries, and improving clinic service quality.
              Essence Aesthetics Clinic does not sell or rent visitor contact details to third-party
              marketers. Once connected to a production backend, reasonable technical and
              administrative safeguards should be applied by the clinic’s hosting provider to
              protect stored records.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#59384F]">
              5. Third-Party Services (Maps, WhatsApp &amp; Social Platforms)
            </h2>
            <p>
              Our website includes embedded Google Maps for clinic directions as well as external
              links to Google Business Profile, WhatsApp, Instagram, and Facebook. Interacting
              with those external platforms is governed by their respective privacy policies.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#E9B8CD]/35">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#59384F]">
              6. Contact for Privacy Questions
            </h2>
            <p>
              If you have questions regarding your personal information or wish to request updates
              or removal of a submitted review, please contact Essence Aesthetics Clinic at{' '}
              <a href={CLINIC_INFO.emailHref} className="text-[#59384F] underline">
                {CLINIC_INFO.email}
              </a>{' '}
              or {CLINIC_INFO.phoneDisplay} ({CLINIC_INFO.addressFull}).
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
