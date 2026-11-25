import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Clock,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Star,
} from 'lucide-react';
import {
  BEFORE_AFTER_PAIRS,
  CLINIC_GALLERY_ITEMS,
  CLINIC_IMAGES,
  CLINIC_INFO,
  OPENING_HOURS,
  REVIEW_THEME_SUMMARIES,
  SERVICES_CATALOG,
} from '../data/clinicData';
import { PageMeta } from '../components/PageMeta';
import { SmartImage } from '../components/SmartImage';
import { BeforeAfterComparator } from '../components/BeforeAfterComparator';

const WHY_CHOOSE_PILLARS = [
  {
    index: '01.',
    title: 'Consultation-Led Planning',
    body: 'Every visit begins with an unhurried conversation about your skin concerns, routine, and comfort preferences before any procedure is recommended.',
  },
  {
    index: '02.',
    title: 'Clear Explanations at Every Step',
    body: 'We believe trust comes from transparency—our doctor and staff walk you through what to expect before, during, and after your session.',
  },
  {
    index: '03.',
    title: 'Kind, Attentive Clinic Team',
    body: 'Patients consistently note the welcoming attitude of our staff and a calm pace that prioritizes your comfort throughout your appointment.',
  },
  {
    index: '04.',
    title: 'Serene DHA Phase II Setting',
    body: 'Located in Commercial Sector E, DHA Phase II, Islamabad, our clinic space is designed for privacy, cleanliness, and quiet reassurance.',
  },
];

const INSTAGRAM_PREVIEW_FRAMES = [
  {
    id: 'ig-1',
    image: CLINIC_IMAGES.receptionDesk,
    alt: 'Clinic reception area aesthetic preview',
    label: 'Reception & Welcome',
  },
  {
    id: 'ig-2',
    image: CLINIC_IMAGES.skincareDetail,
    alt: 'Luxury skincare serum preparation detail',
    label: 'Skincare Rituals',
  },
  {
    id: 'ig-3',
    image: CLINIC_IMAGES.microneedlingSuite,
    alt: 'Microneedling treatment suite interior',
    label: 'Treatment Suites',
  },
  {
    id: 'ig-4',
    image: CLINIC_IMAGES.consultationLounge,
    alt: 'Private skincare consultation lounge',
    label: 'Personal Consultations',
  },
];

export function HomePage() {
  return (
    <>
      <PageMeta
        title="Essence Aesthetics Clinic — Aesthetic Clinic in DHA Phase II, Islamabad"
        description="Discover your natural beauty at Essence Aesthetics Clinic in DHA Phase II, Islamabad. Personalized microneedling, face laser consultations, and skincare care."
      />

      {/* 1. HERO BANNER */}
      <section className="relative bg-[#FFF9F7] border-b border-[#E9B8CD]/35">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Editorial Copy Column */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-7">
              <div className="space-y-4">
                <p className="font-editorial italic text-xl sm:text-2xl text-[#59384F]/80">
                  Beauty, Refined. Confidence, Renewed.
                </p>
                <h1 className="font-editorial text-[clamp(2.5rem,4.5vw,4.15rem)] leading-[1.06] text-[#59384F] font-medium tracking-[-0.01em]">
                  Discover Your Natural Beauty.
                </h1>
                <p className="text-base sm:text-lg text-[#343039]/80 leading-relaxed max-w-xl">
                  Personalized aesthetic care designed to enhance your confidence—thoughtful
                  skincare experiences and attentive consultations in Islamabad.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/book"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-[#59384F] text-white text-sm font-medium tracking-wide hover:bg-[#462b3e] transition-colors whitespace-nowrap"
                >
                  Book Your Consultation
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white border border-[#C985A4]/50 text-[#59384F] text-sm font-medium hover:border-[#59384F] transition-colors whitespace-nowrap"
                >
                  <span>Explore Treatments</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Quiet recorded proof strip */}
              <div className="pt-6 border-t border-[#E9B8CD]/35 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#343039]/75">
                <span className="inline-flex items-center gap-1.5 font-medium text-[#59384F] tabular-nums">
                  <Star className="w-3.5 h-3.5 fill-[#C6A16B] text-[#C6A16B]" />
                  <span>
                    {CLINIC_INFO.googleRatingSnapshot} / 5 ({CLINIC_INFO.googleReviewCountSnapshot} Google
                    Reviews · Recorded Snapshot)
                  </span>
                </span>
                <span aria-hidden="true" className="text-[#C985A4]">
                  ·
                </span>
                <span className="tabular-nums">Mon–Sat · 1:00 PM – 9:00 PM</span>
              </div>
            </div>

            {/* Dominant Hero Visual Anchor */}
            <div className="lg:col-span-6 relative min-h-[340px] lg:min-h-[520px]">
              <div className="h-full w-full overflow-hidden border border-[#E9B8CD]/40 bg-white p-2.5">
                <div className="relative h-full w-full overflow-hidden">
                  <SmartImage
                    src={CLINIC_IMAGES.heroSanctuary}
                    alt="Essence Aesthetics Clinic luxury reception lounge in warm ivory and dusty rose tones"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#59384F]/25 via-transparent to-transparent pointer-events-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHORT INTRODUCTION TO ESSENCE AESTHETICS */}
      <section className="bg-white py-20 lg:py-24 border-b border-[#E9B8CD]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] overflow-hidden border border-[#D9C9E8]/60 bg-[#FFF9F7] p-2">
                <SmartImage
                  src={CLINIC_IMAGES.consultationLounge}
                  alt="Private skincare consultation lounge at Essence Aesthetics Clinic"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs uppercase tracking-[0.22em] text-[#C985A4] font-medium">
                Welcome to Essence Aesthetics Clinic
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#59384F] leading-tight">
                Thoughtful aesthetic care built around your individual skin.
              </h2>
              <p className="text-base sm:text-lg text-[#343039]/80 leading-relaxed">
                {CLINIC_INFO.description}
              </p>
              <p className="text-sm sm:text-base text-[#343039]/75 leading-relaxed">
                From your first greeting at our DHA Phase II reception to your post-care guidance,
                every step is unhurried, respectful, and centered on clear communication.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#59384F] border-b border-[#C985A4] pb-1 hover:text-[#C985A4] transition-colors"
                >
                  <span>Read About Our Philosophy</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED TREATMENTS */}
      <section className="bg-[#FFF9F7] py-20 lg:py-24 border-b border-[#E9B8CD]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.22em] text-[#C985A4] font-medium">
                Personalized Aesthetic Care
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#59384F]">
                Featured Treatments
              </h2>
              <p className="text-sm sm:text-base text-[#343039]/75">
                Every treatment begins with an in-clinic consultation to discuss your skin goals,
                suitability, and personal comfort.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#59384F] border-b border-[#C985A4] pb-1 hover:text-[#C985A4] transition-colors self-start md:self-auto whitespace-nowrap"
            >
              <span>Explore All 7 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[SERVICES_CATALOG[0], SERVICES_CATALOG[3], SERVICES_CATALOG[1]].map((treatment) => (
              <article
                key={treatment.id}
                className="bg-white border border-[#E9B8CD]/40 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="aspect-[4/3] overflow-hidden bg-[#FFF9F7]">
                    <SmartImage
                      src={treatment.heroImage}
                      alt={treatment.heroAlt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-7 space-y-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#C985A4] font-medium">
                      {treatment.category}
                    </p>
                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#59384F]">
                      {treatment.name}
                    </h3>
                    <p className="text-sm text-[#343039]/80 leading-relaxed">
                      {treatment.summary}
                    </p>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to={treatment.slug}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#59384F] hover:text-[#C985A4] transition-colors"
                  >
                    <span>View Treatment</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to={`/book?treatment=${encodeURIComponent(treatment.name)}`}
                    className="ml-auto inline-flex items-center justify-center px-4 py-2 bg-[#59384F] text-white text-xs font-medium hover:bg-[#462b3e] transition-colors whitespace-nowrap"
                  >
                    Book Consultation
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE ESSENCE AESTHETICS */}
      <section className="bg-gradient-to-b from-[#D9C9E8]/20 to-[#FFF9F7] py-20 lg:py-24 border-b border-[#E9B8CD]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.22em] text-[#C985A4] font-medium">
              Our Care Standard
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#59384F]">
              Why Choose Essence Aesthetics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_PILLARS.map((item) => (
              <div
                key={item.index}
                className="bg-white border border-[#E9B8CD]/35 p-7 space-y-4"
              >
                <span className="font-editorial text-2xl text-[#C6A16B] block tabular-nums">
                  {item.index}
                </span>
                <h3 className="font-editorial text-2xl text-[#59384F] leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[#343039]/80 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR CLINIC PHOTO PREVIEW */}
      <section className="bg-white py-20 lg:py-24 border-b border-[#E9B8CD]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.22em] text-[#C985A4] font-medium">
                Clinic Spaces
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#59384F]">
                Inside Our Clinic Environment
              </h2>
              <p className="text-sm text-[#343039]/75">
                Illustrative aesthetic environment previews showcasing the calm reception,
                consultation rooms, and treatment suites designed for your visit.
              </p>
            </div>
            <Link
              to="/clinic"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#59384F] border-b border-[#C985A4] pb-1 hover:text-[#C985A4] transition-colors whitespace-nowrap self-start md:self-auto"
            >
              <span>Explore Full Clinic Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLINIC_GALLERY_ITEMS.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                to="/clinic"
                className="group block bg-[#FFF9F7] border border-[#E9B8CD]/35 overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <SmartImage
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5 space-y-1">
                  <p className="text-xs text-[#C985A4] font-medium">{item.category}</p>
                  <h3 className="font-editorial text-xl text-[#59384F]">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BEFORE & AFTER INTERACTIVE COMPARISON */}
      <section className="bg-[#FFF9F7] py-20 lg:py-24 border-b border-[#E9B8CD]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.22em] text-[#C985A4] font-medium">
                Visual Comparison System
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#59384F]">
                Before &amp; After Results Preview
              </h2>
              <p className="text-sm sm:text-base text-[#343039]/75">
                Compare visual skincare examples in either interactive Slider View or Side-by-Side
                mode. Illustrative Preview — Actual patient results may vary.
              </p>
            </div>
            <Link
              to="/before-after"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#59384F] border-b border-[#C985A4] pb-1 hover:text-[#C985A4] transition-colors whitespace-nowrap self-start md:self-auto"
            >
              <span>Open Full Comparison Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <BeforeAfterComparator pairs={BEFORE_AFTER_PAIRS.slice(0, 1)} showCategoryFilter={false} />
        </div>
      </section>

      {/* 7. PATIENT REVIEWS & TESTIMONIALS */}
      <section className="bg-white py-20 lg:py-24 border-b border-[#E9B8CD]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.22em] text-[#C985A4] font-medium">
                Patient Experiences
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#59384F]">
                What Patients Value Most
              </h2>
              <p className="text-sm sm:text-base text-[#343039]/75">
                Themes highlighted across our recorded Google Business Profile feedback. Individual
                patient quotations are published only with explicit consent.
              </p>
            </div>

            <div className="bg-[#FFF9F7] border border-[#E9B8CD]/45 px-6 py-4 flex items-center gap-4 shrink-0">
              <div className="flex items-center gap-1 text-[#C6A16B]" aria-hidden="true">
                <Star className="w-4 h-4 fill-[#C6A16B]" />
                <Star className="w-4 h-4 fill-[#C6A16B]" />
                <Star className="w-4 h-4 fill-[#C6A16B]" />
                <Star className="w-4 h-4 fill-[#C6A16B]" />
                <Star className="w-4 h-4 fill-[#C6A16B]/40" />
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-semibold text-[#59384F] tabular-nums">
                  {CLINIC_INFO.googleRatingSnapshot} / 5 — {CLINIC_INFO.googleReviewCountSnapshot}{' '}
                  Google Reviews
                </p>
                <p className="text-[#343039]/65 text-xs">Recorded Google profile snapshot</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEW_THEME_SUMMARIES.map((theme) => (
              <div
                key={theme.id}
                className="bg-[#FFF9F7] border border-[#D9C9E8]/60 p-6 space-y-3"
              >
                <h3 className="font-editorial text-2xl text-[#59384F]">{theme.topic}</h3>
                <p className="text-sm text-[#343039]/80 leading-relaxed">{theme.summary}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/reviews"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#59384F] text-white text-sm font-medium hover:bg-[#462b3e] transition-colors"
            >
              Share Your Experience
            </Link>
            <a
              href={CLINIC_INFO.googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#C985A4]/50 text-[#59384F] text-sm font-medium hover:border-[#59384F] transition-colors"
            >
              Write a Google Review
            </a>
          </div>
        </div>
      </section>

      {/* 8. INSTAGRAM GALLERY */}
      <section className="bg-[#FFF9F7] py-20 lg:py-24 border-b border-[#E9B8CD]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.22em] text-[#C985A4] font-medium">
                Social Community
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#59384F]">
                Follow {CLINIC_INFO.instagramHandle}
              </h2>
              <p className="text-sm text-[#343039]/75 tabular-nums">
                {CLINIC_INFO.instagramFollowersSnapshot} followers (recorded profile snapshot) ·
                Clinic updates &amp; skincare care insights
              </p>
            </div>
            <a
              href={CLINIC_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-white border border-[#E9B8CD] text-[#59384F] text-sm font-medium hover:bg-[#E9B8CD]/15 transition-colors self-start md:self-auto whitespace-nowrap"
            >
              <Instagram className="w-4 h-4 text-[#C985A4]" />
              <span>Visit Instagram Profile</span>
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {INSTAGRAM_PREVIEW_FRAMES.map((frame) => (
              <a
                key={frame.id}
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden bg-white border border-[#E9B8CD]/35"
              >
                <SmartImage
                  src={frame.image}
                  alt={frame.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-[#59384F]/85 via-[#59384F]/40 to-transparent">
                  <p className="text-xs font-medium text-white">{frame.label}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 9. APPOINTMENT BOOKING CTA */}
      <section className="bg-gradient-to-r from-[#E9B8CD]/35 via-[#FFF9F7] to-[#D9C9E8]/35 py-20 border-b border-[#E9B8CD]/35">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.22em] text-[#59384F]/80 font-medium">
            Personalized Care in DHA Phase II
          </p>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#59384F]">
            Your Journey to Confidence Starts Here.
          </h2>
          <p className="text-base text-[#343039]/80 max-w-2xl mx-auto leading-relaxed">
            Request an appointment online or connect directly with our clinic desk on WhatsApp to
            arrange your personal consultation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/book"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#59384F] text-white text-sm font-medium hover:bg-[#462b3e] transition-colors"
            >
              Book Appointment
            </Link>
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white border border-[#59384F]/30 text-[#59384F] text-sm font-medium hover:border-[#59384F] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#C985A4]" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 10. LOCATION AND OPENING HOURS */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-5 bg-[#FFF9F7] border border-[#E9B8CD]/40 p-7 sm:p-9 flex flex-col justify-between space-y-8">
              <div className="space-y-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[#C985A4] font-medium">
                  Visit Essence Aesthetics Clinic
                </p>
                <h2 className="font-editorial text-3xl sm:text-4xl text-[#59384F]">
                  Location &amp; Hours
                </h2>
                <div className="space-y-3 text-sm text-[#343039]/85">
                  <a
                    href={CLINIC_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 hover:text-[#59384F] transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-[#C985A4] mt-0.5 shrink-0" />
                    <span className="underline decoration-[#E9B8CD] underline-offset-4">
                      {CLINIC_INFO.addressFull}
                    </span>
                  </a>
                  <p className="flex items-center gap-2.5 tabular-nums">
                    <Phone className="w-4 h-4 text-[#C985A4] shrink-0" />
                    <a
                      href={CLINIC_INFO.phoneHref}
                      className="font-medium text-[#59384F] hover:underline"
                    >
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E9B8CD]/35 space-y-2">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#59384F] font-semibold flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#C985A4]" />
                    <span>Opening Hours (Appointments Recommended)</span>
                  </p>
                  <ul className="space-y-1.5 text-sm tabular-nums pt-1">
                    {OPENING_HOURS.map((row) => (
                      <li key={row.day} className="flex items-center justify-between">
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
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={CLINIC_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3 bg-[#59384F] text-white text-xs sm:text-sm font-medium hover:bg-[#462b3e] transition-colors"
                >
                  Get Directions
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-[#C985A4]/50 text-[#59384F] text-xs sm:text-sm font-medium hover:border-[#59384F] transition-colors"
                >
                  Contact Details
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 min-h-[340px] lg:min-h-[440px] border border-[#E9B8CD]/40 overflow-hidden bg-[#FFF9F7]">
              <iframe
                title="Essence Aesthetics Clinic Map — Plaza 48, Commercial Sector E, DHA Phase II, Islamabad"
                src={CLINIC_INFO.googleMapsEmbedUrl}
                className="w-full h-full min-h-[340px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
