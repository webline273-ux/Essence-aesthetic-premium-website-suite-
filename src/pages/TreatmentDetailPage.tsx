import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ChevronDown, Info, MessageCircle } from 'lucide-react';
import {
  CLINIC_INFO,
  SERVICES_CATALOG,
  ServiceTreatmentId,
} from '../data/clinicData';
import { PageMeta } from '../components/PageMeta';
import { SmartImage } from '../components/SmartImage';
import { BeforeAfterComparator } from '../components/BeforeAfterComparator';

interface TreatmentDetailPageProps {
  treatmentId: ServiceTreatmentId;
}

export function TreatmentDetailPage({ treatmentId }: TreatmentDetailPageProps) {
  const treatment =
    SERVICES_CATALOG.find((item) => item.id === treatmentId) || SERVICES_CATALOG[0];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === '#before-after') {
      const target = document.getElementById('before-after');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash, treatmentId]);

  const relatedServices = SERVICES_CATALOG.filter((item) => item.id !== treatment.id).slice(0, 3);

  return (
    <>
      <PageMeta
        title={`${treatment.name} Islamabad — Essence Aesthetics Clinic`}
        description={`${treatment.name} consultations at Essence Aesthetics Clinic in DHA Phase II, Islamabad. Overview, suitability considerations, Before & After comparison, and booking.`}
      />

      {/* A. Treatment Hero Section */}
      <section className="bg-gradient-to-b from-[#E9B8CD]/20 to-[#FFF9F7] py-14 lg:py-20 border-b border-[#E9B8CD]/35">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#59384F]/80 hover:text-[#59384F] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Services</span>
            </Link>
            <span className="text-xs text-[#C985A4] font-medium">
              {treatment.category} · DHA Phase II, Islamabad
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#59384F] leading-tight">
                {treatment.name}
              </h1>
              <p className="text-base sm:text-lg text-[#343039]/80 leading-relaxed">
                {treatment.summary}
              </p>

              <p className="text-xs text-[#59384F]/75 bg-white/80 border border-[#D9C9E8] px-4 py-3 leading-relaxed">
                {treatment.clinicConfirmationNote}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to={`/book?treatment=${encodeURIComponent(treatment.name)}`}
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-[#59384F] text-white text-sm font-medium hover:bg-[#462b3e] transition-colors"
                >
                  Book Consultation
                </Link>
                <a
                  href="#before-after"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#C985A4]/50 text-[#59384F] text-sm font-medium hover:border-[#59384F] transition-colors"
                >
                  <span>Explore Before &amp; After</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] overflow-hidden border border-[#E9B8CD]/45 bg-white p-2.5">
                <SmartImage
                  src={treatment.heroImage}
                  alt={treatment.heroAlt}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B. Treatment Information */}
      <section className="bg-white py-16 lg:py-24 border-b border-[#E9B8CD]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C985A4] font-medium">
                Overview
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#59384F]">
                What {treatment.shortTitle} Generally Involves
              </h2>
              <div className="space-y-4 text-base text-[#343039]/80 leading-relaxed">
                {treatment.overview.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              <ul className="space-y-3 pt-2 text-sm sm:text-base text-[#343039]/80">
                {treatment.whatItInvolves.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="font-editorial text-lg text-[#C6A16B] leading-snug tabular-nums">
                      0{idx + 1}.
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-[#E9B8CD]/30 space-y-4">
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#59384F]">
                Potential Suitability Considerations
              </h3>
              <ul className="space-y-2.5 text-sm sm:text-base text-[#343039]/80">
                {treatment.suitabilityConsiderations.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#C985A4] mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-[#E9B8CD]/30 space-y-4">
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#59384F]">
                Consultation Process
              </h3>
              <ul className="space-y-2.5 text-sm sm:text-base text-[#343039]/80">
                {treatment.consultationProcess.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#C6A16B] mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FFF9F7] border border-[#D9C9E8]/70 p-7 sm:p-8 space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C985A4] font-medium">
                General Guidance
              </p>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#59384F]">
                Preparation &amp; Aftercare Principles
              </h3>
              <ul className="space-y-3 text-sm text-[#343039]/80 leading-relaxed">
                {treatment.prepAndAftercare.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#C985A4] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#FFF9F7] border border-[#E9B8CD]/45 p-7 sm:p-8 space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C985A4] font-medium">
                Preparing for Your Consultation
              </p>
              <h3 className="font-editorial text-2xl text-[#59384F]">
                What to Discuss Before Treatment
              </h3>
              <ul className="space-y-2.5 text-sm text-[#343039]/80 leading-relaxed">
                {treatment.whatToDiscuss.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#C6A16B] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#343039]/65 pt-3 border-t border-[#E9B8CD]/35">
                All clinical suitability decisions and treatment protocols are confirmed in person
                by clinic staff. Individual results vary and outcomes are never guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* C. Treatment Photography Showcase */}
      <section className="bg-[#FFF9F7] py-16 lg:py-20 border-b border-[#E9B8CD]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C985A4] font-medium">
              Treatment Environment &amp; Care Details
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#59384F]">
              Inside the {treatment.shortTitle} Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 bg-white border border-[#E9B8CD]/40 p-2">
              <div className="aspect-[4/3] h-full overflow-hidden">
                <SmartImage
                  src={treatment.heroImage}
                  alt={treatment.heroAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="bg-white border border-[#E9B8CD]/40 p-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <SmartImage
                    src={treatment.environmentImage}
                    alt={treatment.environmentAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white border border-[#E9B8CD]/40 p-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <SmartImage
                    src={treatment.detailImage}
                    alt={treatment.detailAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* D. BEFORE & AFTER — BOTH DISPLAY MODES */}
      <section
        id="before-after"
        className="bg-white py-16 lg:py-24 border-b border-[#E9B8CD]/30 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C985A4] font-medium">
                Visual Comparison · Side-by-Side &amp; Slider View
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#59384F]">
                {treatment.shortTitle} Before &amp; After
              </h2>
              <p className="text-sm text-[#343039]/75 flex items-center gap-2">
                <Info className="w-4 h-4 text-[#C985A4] shrink-0" />
                <span>Illustrative Preview — Actual patient results may vary.</span>
              </p>
            </div>
            <Link
              to={`/before-after?treatment=${encodeURIComponent(treatment.beforeAfterPair.treatmentCategory)}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#59384F] border-b border-[#C985A4] pb-0.5 hover:text-[#C985A4] transition-colors whitespace-nowrap self-start md:self-auto"
            >
              <span>View All 7 Treatments in Before &amp; After</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <BeforeAfterComparator
            pairs={[treatment.beforeAfterPair]}
            showCategoryFilter={false}
          />
        </div>
      </section>

      {/* FAQs & Consultation CTA */}
      <section className="bg-[#FFF9F7] py-16 lg:py-24 border-b border-[#E9B8CD]/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C985A4] font-medium">
              Common Questions
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#59384F]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="bg-white border border-[#E9B8CD]/40 divide-y divide-[#E9B8CD]/35 px-6 sm:px-8">
            {treatment.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <span className="font-editorial text-xl sm:text-2xl text-[#59384F]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#C985A4] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-sm sm:text-base text-[#343039]/80 leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="bg-white border border-[#E9B8CD]/45 p-8 sm:p-10 text-center space-y-5">
            <h3 className="font-editorial text-3xl text-[#59384F]">
              Ready to Discuss {treatment.name}?
            </h3>
            <p className="text-sm sm:text-base text-[#343039]/80 max-w-xl mx-auto">
              Request a personalized consultation at Plaza 48, DHA Phase II, Islamabad, or connect
              directly on WhatsApp.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to={`/book?treatment=${encodeURIComponent(treatment.name)}`}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#59384F] text-white text-sm font-medium hover:bg-[#462b3e] transition-colors"
              >
                Book Consultation
              </Link>
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#C985A4]/50 text-[#59384F] text-sm font-medium hover:border-[#59384F] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#C985A4]" />
                <span>WhatsApp Clinic</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-[#D9C9E8] text-[#59384F] text-sm font-medium hover:border-[#59384F] transition-colors"
              >
                Clinic Directions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More Services */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-editorial text-3xl text-[#59384F]">Explore Other Treatments</h2>
            <Link
              to="/services"
              className="text-sm font-medium text-[#59384F] border-b border-[#C985A4] pb-0.5 hover:text-[#C985A4] transition-colors whitespace-nowrap"
            >
              All 7 Services →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.id}
                to={rel.slug}
                className="group block bg-[#FFF9F7] border border-[#E9B8CD]/40 overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <SmartImage
                    src={rel.heroImage}
                    alt={rel.heroAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5 space-y-1.5">
                  <p className="text-xs text-[#C985A4] font-medium">{rel.category}</p>
                  <h3 className="font-editorial text-2xl text-[#59384F]">{rel.name}</h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#59384F] pt-1">
                    <span>View Treatment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
