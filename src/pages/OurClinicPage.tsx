import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Expand, Info, X } from 'lucide-react';
import { CLINIC_GALLERY_ITEMS, ClinicGalleryItem } from '../data/clinicData';
import { PageMeta } from '../components/PageMeta';
import { SmartImage } from '../components/SmartImage';

type GalleryFilter = 'All' | ClinicGalleryItem['category'];

const GALLERY_CATEGORIES: GalleryFilter[] = [
  'All',
  'Reception',
  'Clinic Interior',
  'Treatment Rooms',
  'Clinic Environment',
];

export function OurClinicPage() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryFilter>('All');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const visibleItems =
    selectedCategory === 'All'
      ? CLINIC_GALLERY_ITEMS
      : CLINIC_GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveIndex((prev) =>
          prev === null ? null : (prev + 1) % visibleItems.length
        );
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) =>
          prev === null ? null : (prev - 1 + visibleItems.length) % visibleItems.length
        );
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeIndex, visibleItems.length]);

  const activeItem = activeIndex !== null ? visibleItems[activeIndex] : null;

  return (
    <>
      <PageMeta
        title="Our Clinic Gallery — Essence Aesthetics Clinic Islamabad"
        description="Tour the reception, consultation spaces, and treatment suites of Essence Aesthetics Clinic in DHA Phase II, Islamabad."
      />

      <section className="bg-gradient-to-b from-[#D9C9E8]/25 to-[#FFF9F7] py-16 lg:py-20 border-b border-[#E9B8CD]/35">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-5">
          <p className="text-xs uppercase tracking-[0.22em] text-[#C985A4] font-medium">
            Our Clinic Space
          </p>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#59384F]">
            Our Clinic Gallery
          </h1>
          <p className="text-base sm:text-lg text-[#343039]/80 max-w-3xl leading-relaxed">
            Explore our reception, consultation lounge, and treatment rooms designed for privacy,
            calmness, and clinical comfort. Click any frame to enlarge.
          </p>

          <div className="bg-white border border-[#E9B8CD]/45 p-4 sm:p-5 flex items-start gap-3 max-w-3xl">
            <Info className="w-5 h-5 text-[#C985A4] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-[#343039]/80 leading-relaxed">
              <strong className="text-[#59384F] font-semibold">Visual Preview Note:</strong>{' '}
              The images below are illustrative aesthetic clinic environment previews representing
              our layout categories. Authentic clinic photographs supplied by Essence Aesthetics
              Clinic can be placed directly into these category slots without altering the gallery.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24 border-b border-[#E9B8CD]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-[#E9B8CD]/30">
            {GALLERY_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(category);
                    setActiveIndex(null);
                  }}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#59384F] text-white border-[#59384F]'
                      : 'bg-[#FFF9F7] text-[#59384F] border-[#E9B8CD]/50 hover:border-[#C985A4]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Uniform Ratio Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {visibleItems.map((item, idx) => (
              <figure
                key={item.id}
                className="group bg-[#FFF9F7] border border-[#E9B8CD]/40 overflow-hidden flex flex-col"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Enlarge ${item.title}`}
                  className="relative aspect-[4/3] overflow-hidden w-full text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#59384F]"
                >
                  <SmartImage
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-white/95 text-[#59384F] text-xs font-medium px-3 py-1.5 border border-[#E9B8CD]/40 opacity-90 group-hover:opacity-100 transition-opacity">
                    <Expand className="w-3.5 h-3.5" />
                    <span>Enlarge</span>
                  </span>
                </button>
                <figcaption className="p-6 space-y-1.5 flex-1">
                  <div className="flex items-center gap-2 text-xs text-[#C985A4] font-medium">
                    <span>{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#343039]/60 font-normal">Illustrative Preview</span>
                  </div>
                  <h2 className="font-editorial text-2xl text-[#59384F]">{item.title}</h2>
                  <p className="text-sm text-[#343039]/75 leading-relaxed">{item.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="bg-[#FFF9F7] py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-5">
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#59384F]">
            Visit Us in DHA Phase II, Islamabad
          </h2>
          <p className="text-sm sm:text-base text-[#343039]/80">
            Plaza 48, Commercial Sector E, DHA Phase II · Open Monday to Saturday, 1:00 PM – 9:00 PM.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/book"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[#59384F] text-white text-sm font-medium hover:bg-[#462b3e] transition-colors"
            >
              Book Consultation
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white border border-[#C985A4]/50 text-[#59384F] text-sm font-medium hover:border-[#59384F] transition-colors"
            >
              Directions &amp; Map
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          className="fixed inset-0 z-50 bg-[#343039]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white border border-[#E9B8CD]/40 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close gallery lightbox"
              className="absolute top-3 right-3 z-10 w-10 h-10 bg-white/95 text-[#59384F] border border-[#E9B8CD]/50 flex items-center justify-center hover:bg-[#59384F] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-[#FFF9F7]">
              <SmartImage
                src={activeItem.image}
                alt={activeItem.alt}
                className="w-full h-full object-cover"
              />
              {visibleItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex(
                        (activeIndex - 1 + visibleItems.length) % visibleItems.length
                      )
                    }
                    aria-label="Previous gallery photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 text-[#59384F] border border-[#E9B8CD]/50 flex items-center justify-center hover:bg-[#59384F] hover:text-white transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveIndex((activeIndex + 1) % visibleItems.length)}
                    aria-label="Next gallery photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 text-[#59384F] border border-[#E9B8CD]/50 flex items-center justify-center hover:bg-[#59384F] hover:text-white transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            <div className="p-6 bg-white border-t border-[#E9B8CD]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <p className="text-xs text-[#C985A4] font-medium">
                  {activeItem.category} · Illustrative Clinic Environment Preview
                </p>
                <h3 className="font-editorial text-2xl text-[#59384F]">{activeItem.title}</h3>
                <p className="text-sm text-[#343039]/80 mt-1">{activeItem.caption}</p>
              </div>
              <span className="text-xs text-[#343039]/60 tabular-nums shrink-0">
                {activeIndex + 1} / {visibleItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
