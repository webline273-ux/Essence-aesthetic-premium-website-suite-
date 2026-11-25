import { Link } from 'react-router-dom';
import { ArrowRight, HeartHandshake, MessageSquareHeart, ShieldCheck } from 'lucide-react';
import { CLINIC_IMAGES, CLINIC_INFO } from '../data/clinicData';
import { PageMeta } from '../components/PageMeta';
import { SmartImage } from '../components/SmartImage';

export function AboutPage() {
  return (
    <>
      <PageMeta
        title="About Us — Essence Aesthetics Clinic | DHA Phase II, Islamabad"
        description="Learn about Essence Aesthetics Clinic in DHA Phase II, Islamabad—our consultation-first philosophy, calm clinic environment, and personalized skincare approach."
      />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#E9B8CD]/20 to-[#FFF9F7] py-16 lg:py-24 border-b border-[#E9B8CD]/35">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.22em] text-[#C985A4] font-medium">
              About Essence Aesthetics
            </p>
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#59384F] leading-tight">
              Enhancing Natural Beauty with Thoughtful Personal Care
            </h1>
            <p className="text-base sm:text-lg text-[#343039]/80 leading-relaxed">
              {CLINIC_INFO.description}
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy & Environment */}
      <section className="bg-white py-16 lg:py-24 border-b border-[#E9B8CD]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#59384F]">
              Our Personalized Care Philosophy
            </h2>
            <p className="text-base text-[#343039]/80 leading-relaxed">
              Every skin journey is personal. At Essence Aesthetics Clinic in DHA Phase II,
              Islamabad, we take time to listen carefully to your concerns, explain options in
              plain language, and tailor each visit around comfort and realistic skincare goals.
            </p>
            <p className="text-base text-[#343039]/80 leading-relaxed">
              We focus on creating a warm, unhurried environment where patients never feel rushed
              or pressured—whether visiting for an initial skin consultation, microneedling, or
              laser sessions.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/book"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#59384F] text-white text-sm font-medium hover:bg-[#462b3e] transition-colors"
              >
                Book a Consultation
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#C985A4]/50 text-[#59384F] text-sm font-medium hover:border-[#59384F] transition-colors"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="aspect-[4/3] overflow-hidden border border-[#E9B8CD]/40 bg-[#FFF9F7]">
              <SmartImage
                src={CLINIC_IMAGES.receptionDesk}
                alt="Clinic reception environment preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden border border-[#E9B8CD]/40 bg-[#FFF9F7]">
              <SmartImage
                src={CLINIC_IMAGES.consultationLounge}
                alt="Private skincare consultation area preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:col-span-2 aspect-[16/9] overflow-hidden border border-[#E9B8CD]/40 bg-[#FFF9F7]">
              <SmartImage
                src={CLINIC_IMAGES.heroSanctuary}
                alt="Calm patient waiting lounge at Essence Aesthetics Clinic"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Patient Comfort & Consultation Pillars */}
      <section className="bg-[#FFF9F7] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.22em] text-[#C985A4] font-medium">
              The Clinic Experience
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#59384F]">
              What Defines a Visit to Essence Aesthetics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-[#E9B8CD]/40 p-8 space-y-4">
              <MessageSquareHeart className="w-6 h-6 text-[#C985A4]" strokeWidth={1.5} />
              <h3 className="font-editorial text-2xl text-[#59384F]">Consultation-Focused</h3>
              <p className="text-sm text-[#343039]/80 leading-relaxed">
                Questions are welcomed openly. We discuss suitability, preparation, and sensible
                aftercare before beginning any session.
              </p>
            </div>

            <div className="bg-white border border-[#E9B8CD]/40 p-8 space-y-4">
              <HeartHandshake className="w-6 h-6 text-[#C985A4]" strokeWidth={1.5} />
              <h3 className="font-editorial text-2xl text-[#59384F]">Kind, Attentive Support</h3>
              <p className="text-sm text-[#343039]/80 leading-relaxed">
                From appointment scheduling to in-room care, our team aims to make every patient
                feel respected, comfortable, and well looked after.
              </p>
            </div>

            <div className="bg-white border border-[#E9B8CD]/40 p-8 space-y-4">
              <ShieldCheck className="w-6 h-6 text-[#C985A4]" strokeWidth={1.5} />
              <h3 className="font-editorial text-2xl text-[#59384F]">Calm Clinical Atmosphere</h3>
              <p className="text-sm text-[#343039]/80 leading-relaxed">
                Clean, private treatment rooms in Plaza 48, DHA Phase II provide a peaceful space
                for professional skincare services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
