import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { TreatmentDetailPage } from './pages/TreatmentDetailPage';
import { BeforeAfterPage } from './pages/BeforeAfterPage';
import { OurClinicPage } from './pages/OurClinicPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { BookAppointmentPage } from './pages/BookAppointmentPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { FaqPage } from './pages/FaqPage';

function NotFoundPage() {
  return (
    <section className="py-24 px-6 text-center max-w-xl mx-auto space-y-5">
      <p className="text-xs uppercase tracking-[0.22em] text-[#C985A4] font-medium">Page Not Found</p>
      <h1 className="font-editorial text-4xl sm:text-5xl text-[#59384F]">
        We Could Not Find That Page
      </h1>
      <p className="text-sm sm:text-base text-[#343039]/80">
        Return to the Essence Aesthetics Clinic homepage or explore our treatments and consultations.
      </p>
      <div className="pt-2 flex flex-wrap justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center justify-center px-7 py-3 bg-[#59384F] text-white text-sm font-medium hover:bg-[#462b3e] transition-colors"
        >
          Return Home
        </Link>
        <Link
          to="/services"
          className="inline-flex items-center justify-center px-7 py-3 border border-[#C985A4]/60 text-[#59384F] text-sm font-medium hover:border-[#59384F] transition-colors"
        >
          Explore Services
        </Link>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route
            path="/services/hydra-facial"
            element={<TreatmentDetailPage treatmentId="hydra-facial" />}
          />
          <Route
            path="/services/laser-hair-removal"
            element={<TreatmentDetailPage treatmentId="laser-hair-removal" />}
          />
          <Route
            path="/services/pigmentation-treatment"
            element={<TreatmentDetailPage treatmentId="pigmentation-treatment" />}
          />
          <Route
            path="/services/microneedling"
            element={<TreatmentDetailPage treatmentId="microneedling" />}
          />
          <Route
            path="/services/chemical-peel"
            element={<TreatmentDetailPage treatmentId="chemical-peel" />}
          />
          <Route
            path="/services/acne-scar-treatment"
            element={<TreatmentDetailPage treatmentId="acne-scar-treatment" />}
          />
          <Route
            path="/services/skin-rejuvenation"
            element={<TreatmentDetailPage treatmentId="skin-rejuvenation" />}
          />
          {/* Preserved /treatments aliases */}
          <Route path="/treatments" element={<ServicesPage />} />
          <Route
            path="/treatments/microneedling"
            element={<TreatmentDetailPage treatmentId="microneedling" />}
          />
          <Route
            path="/treatments/laser-hair-removal"
            element={<TreatmentDetailPage treatmentId="laser-hair-removal" />}
          />
          <Route path="/before-after" element={<BeforeAfterPage />} />
          <Route path="/clinic" element={<OurClinicPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/book" element={<BookAppointmentPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
