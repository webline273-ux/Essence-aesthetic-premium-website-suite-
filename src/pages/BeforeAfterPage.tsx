import { Link, useSearchParams } from 'react-router-dom';
import { Info } from 'lucide-react';
import { BEFORE_AFTER_PAIRS } from '../data/clinicData';
import { PageMeta } from '../components/PageMeta';
import { BeforeAfterComparator } from '../components/BeforeAfterComparator';

export function BeforeAfterPage() {
  const [searchParams] = useSearchParams();
  const treatmentParam = searchParams.get('treatment');
  const matchingInitial =
    BEFORE_AFTER_PAIRS.find((pair) => pair.treatmentCategory === treatmentParam)
      ?.treatmentCategory || 'All Treatments';

  return (
    <>
      <PageMeta
        title="Before & After Results — All 7 Treatments | Essence Aesthetics Clinic"
        description="Explore interactive Before & After comparisons across all seven treatment categories at Essence Aesthetics Clinic in DHA Phase II, Islamabad with Side-by-Side and Slider View modes."
      />

      <section className="bg-gradient-to-b from-[#E9B8CD]/20 to-[#FFF9F7] py-16 lg:py-20 border-b border-[#E9B8CD]/35">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-5">
          <p className="text-xs uppercase tracking-[0.22em] text-[#C985A4] font-medium">
            Comparison Gallery · All 7 Treatment Categories
          </p>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#59384F] leading-tight">
            Before &amp; After Comparisons
          </h1>
          <p className="text-base sm:text-lg text-[#343039]/80 max-w-3xl leading-relaxed">
            Select any treatment category below and switch seamlessly between{' '}
            <strong>Side-by-Side</strong> and interactive <strong>Slider View</strong> modes on
            desktop or mobile.
          </p>

          <div className="bg-white border border-[#D9C9E8] p-5 flex items-start gap-3 max-w-3xl">
            <Info className="w-5 h-5 text-[#C985A4] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#343039]/80 space-y-1 leading-relaxed">
              <p className="font-semibold text-[#59384F]">
                Illustrative Preview — Actual patient results may vary.
              </p>
              <p>
                The comparison images displayed below are matched illustrative preview visuals
                demonstrating the clinic’s Side-by-Side and Slider comparison system. They are
                not presented as verified Essence Aesthetics patient outcomes and can be replaced
                directly with clinic-approved, patient-consented photography.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF9F7] py-16 lg:py-24 border-b border-[#E9B8CD]/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <BeforeAfterComparator
            pairs={BEFORE_AFTER_PAIRS}
            showCategoryFilter={true}
            initialCategory={matchingInitial}
          />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-5">
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#59384F]">
            Discuss Realistic Expectations in Person
          </h2>
          <p className="text-sm sm:text-base text-[#343039]/80 max-w-2xl mx-auto">
            Every skin profile responds differently. Schedule a consultation at our DHA Phase II
            clinic or explore our seven treatment pages in detail.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/book"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[#59384F] text-white text-sm font-medium hover:bg-[#462b3e] transition-colors"
            >
              Book Your Consultation
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-[#C985A4]/50 text-[#59384F] text-sm font-medium hover:border-[#59384F] transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
