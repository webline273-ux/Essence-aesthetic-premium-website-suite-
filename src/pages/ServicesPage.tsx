import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Info, MessageCircle } from 'lucide-react';
import {
  CLINIC_INFO,
  SERVICES_CATALOG,
  ServiceFilterCategory,
} from '../data/clinicData';
import { PageMeta } from '../components/PageMeta';
import { SmartImage } from '../components/SmartImage';

const SERVICE_FILTERS: ServiceFilterCategory[] = [
  'All Treatments',
  'Skin Treatments',
  'Laser Treatments',
  'Facial Treatments',
];

type GroupFilter = Exclude<ServiceFilterCategory, 'All Treatments'>;
type ActiveFilter = ServiceFilterCategory | string;

export function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>('All Treatments');

  const isGroupFilter = (val: string): val is GroupFilter =>
    val !== 'All Treatments' && SERVICE_FILTERS.includes(val as ServiceFilterCategory);

  const filteredServices =
    activeFilter === 'All Treatments'
      ? SERVICES_CATALOG
      : isGroupFilter(activeFilter)
      ? SERVICES_CATALOG.filter((service) => service.filterTags.includes(activeFilter))
      : SERVICES_CATALOG.filter((service) => service.name === activeFilter);

  return (
    <>
      <PageMeta
        title="Services — Explore Our Treatments | Essence Aesthetics Clinic Islamabad"
        description="Explore aesthetic and skincare treatment categories at Essence Aesthetics Clinic in DHA Phase II, Islamabad, including Hydra Facial, Laser Hair Removal, Pigmentation, Microneedling, Chemical Peels, Acne Care, and Skin Rejuvenation."
      />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#D9C9E8]/25 to-[#FFF9F7] py-16 lg:py-24 border-b border-[#E9B8CD]/35">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.22em] text-[#C985A4] font-medium">
              Personalized Skincare &amp; Aesthetic Services
            </p>
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#59384F] leading-tight">
              Explore Our Treatments
            </h1>
            <p className="text-base sm:text-lg text-[#343039]/80 leading-relaxed">
              Discover personalized aesthetic and skincare treatments designed to support your
              individual beauty goals.
            </p>
          </div>

          <div className="bg-white border border-[#E9B8CD]/45 p-4 sm:p-5 flex items-start gap-3 max-w-3xl">
            <Info className="w-5 h-5 text-[#C985A4] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-[#343039]/80 leading-relaxed">
              <strong className="text-[#59384F] font-semibold">Consultation-Guided Care:</strong>{' '}
              The categories below showcase website service previews across facial, skin, and laser
              care. Exact treatment availability, suitability, and individualized protocols are
              always confirmed directly with Essence Aesthetics Clinic staff during your
              consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar & 7-Treatment Responsive Grid */}
      <section className="bg-white py-16 lg:py-24 border-b border-[#E9B8CD]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
          {/* Interactive Category Filters */}
          <div className="space-y-4 pb-6 border-b border-[#E9B8CD]/35">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs text-[#343039]/70 tabular-nums">
                Showing {filteredServices.length} of {SERVICES_CATALOG.length} treatment categories
              </p>
              {activeFilter !== 'All Treatments' && (
                <button
                  type="button"
                  onClick={() => setActiveFilter('All Treatments')}
                  className="text-xs font-medium text-[#59384F] underline underline-offset-4 hover:text-[#C985A4] cursor-pointer"
                >
                  Show All 7
                </button>
              )}
            </div>

            {/* All 7 Individual Treatment Category Click Buttons */}
            <div
              className="flex flex-wrap items-center gap-2"
              role="group"
              aria-label="Filter by individual treatment category"
            >
              {SERVICES_CATALOG.map((service) => {
                const isSelected = activeFilter === service.name;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() =>
                      setActiveFilter(isSelected ? 'All Treatments' : service.name)
                    }
                    aria-pressed={isSelected}
                    className={`px-3.5 py-2 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isSelected
                        ? 'bg-[#59384F] text-white border-[#59384F]'
                        : 'bg-white text-[#59384F] border-[#D9C9E8] hover:border-[#C985A4]'
                    }`}
                  >
                    {service.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <article
                key={service.id}
                className="group bg-[#FFF9F7] border border-[#E9B8CD]/45 flex flex-col justify-between overflow-hidden transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(89,56,79,0.08)]"
              >
                <div>
                  {/* Treatment Photograph */}
                  <Link
                    to={service.slug}
                    className="block aspect-[4/3] overflow-hidden bg-white"
                  >
                    <SmartImage
                      src={service.heroImage}
                      alt={service.heroAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </Link>

                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="flex items-center gap-2 text-xs text-[#C985A4] font-medium">
                      <span>{service.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#343039]/60 font-normal">Consultation-Led</span>
                    </div>

                    <h2 className="font-editorial text-3xl text-[#59384F] leading-snug">
                      <Link to={service.slug} className="hover:text-[#C985A4] transition-colors">
                        {service.name}
                      </Link>
                    </h2>

                    <p className="text-sm text-[#343039]/80 leading-relaxed">{service.summary}</p>

                    {/* Before & After Preview Strip inside Card */}
                    <Link
                      to={`${service.slug}#before-after`}
                      className="block bg-white border border-[#D9C9E8]/70 p-3 hover:border-[#C985A4] transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] uppercase tracking-[0.14em] text-[#59384F] font-semibold">
                          Before &amp; After Preview
                        </span>
                        <span className="text-[11px] text-[#C985A4] font-medium">
                          Compare →
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="relative aspect-[4/3] overflow-hidden bg-[#FFF9F7]">
                          <SmartImage
                            src={service.beforeAfterPair.beforeImage}
                            alt={`${service.name} illustrative before preview`}
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute bottom-1.5 left-1.5 bg-white/90 text-[#59384F] text-[10px] font-semibold px-1.5 py-0.5">
                            BEFORE
                          </span>
                        </div>
                        <div className="relative aspect-[4/3] overflow-hidden bg-[#FFF9F7]">
                          <SmartImage
                            src={service.beforeAfterPair.afterImage}
                            alt={`${service.name} illustrative after preview`}
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute bottom-1.5 left-1.5 bg-[#59384F]/90 text-white text-[10px] font-semibold px-1.5 py-0.5">
                            AFTER
                          </span>
                        </div>
                      </div>
                      <p className="text-[10.5px] text-[#343039]/65 mt-2">
                        Illustrative Preview — Actual patient results may vary.
                      </p>
                    </Link>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to={service.slug}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white border border-[#59384F]/35 text-[#59384F] text-xs font-medium hover:border-[#59384F] transition-colors whitespace-nowrap"
                  >
                    <span>View Treatment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to={`/book?treatment=${encodeURIComponent(service.name)}`}
                    className="ml-auto inline-flex items-center justify-center px-4 py-2.5 bg-[#59384F] text-white text-xs font-medium hover:bg-[#462b3e] transition-colors whitespace-nowrap"
                  >
                    Book Consultation
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Connections Strip */}
      <section className="bg-[#FFF9F7] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white border border-[#E9B8CD]/45 p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C985A4] font-medium">
                Personalized Guidance
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#59384F]">
                Not Sure Which Treatment Fits Your Skin?
              </h2>
              <p className="text-sm sm:text-base text-[#343039]/80 leading-relaxed">
                Explore our full Before &amp; After comparison gallery, book a one-on-one
                consultation, or reach our DHA Phase II, Islamabad clinic team directly.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                to="/before-after"
                className="inline-flex items-center justify-center px-5 py-3 bg-white border border-[#C985A4]/60 text-[#59384F] text-xs sm:text-sm font-medium hover:border-[#59384F] transition-colors whitespace-nowrap"
              >
                Explore Before &amp; After
              </Link>
              <Link
                to="/book"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#59384F] text-white text-xs sm:text-sm font-medium hover:bg-[#462b3e] transition-colors whitespace-nowrap"
              >
                Book Appointment
              </Link>
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#D9C9E8]/25 border border-[#D9C9E8] text-[#59384F] text-xs sm:text-sm font-medium hover:border-[#59384F] transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-[#C985A4]" />
                <span>WhatsApp Clinic</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
