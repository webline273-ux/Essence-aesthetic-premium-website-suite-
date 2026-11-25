export interface OpeningHour {
  day: string;
  hours: string;
  isClosed?: boolean;
}

export type ServiceTreatmentId =
  | 'hydra-facial'
  | 'laser-hair-removal'
  | 'pigmentation-treatment'
  | 'microneedling'
  | 'chemical-peel'
  | 'acne-scar-treatment'
  | 'skin-rejuvenation';

export type ServiceFilterCategory =
  | 'All Treatments'
  | 'Skin Treatments'
  | 'Laser Treatments'
  | 'Facial Treatments';

export interface ComparisonPair {
  id: string;
  treatmentId: ServiceTreatmentId;
  title: string;
  treatmentCategory: string;
  sessionNote: string;
  isDemoPlaceholder: boolean;
  isIllustrativePreview: boolean;
  illustrativeNotice: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  disclaimer: string;
}

export interface TreatmentInfo {
  id: ServiceTreatmentId;
  slug: string;
  name: string;
  shortTitle: string;
  category: string;
  filterTags: Exclude<ServiceFilterCategory, 'All Treatments'>[];
  clinicConfirmationNote: string;
  summary: string;
  heroImage: string;
  heroAlt: string;
  environmentImage: string;
  environmentAlt: string;
  detailImage: string;
  detailAlt: string;
  overview: string[];
  whatItInvolves: string[];
  suitabilityConsiderations: string[];
  consultationProcess: string[];
  prepAndAftercare: string[];
  whatToDiscuss: string[];
  faqs: { question: string; answer: string }[];
  beforeAfterPair: ComparisonPair;
}

export interface ClinicGalleryItem {
  id: string;
  title: string;
  category: 'Reception' | 'Clinic Interior' | 'Treatment Rooms' | 'Clinic Environment';
  image: string;
  alt: string;
  caption: string;
  sourceType: 'illustrative-environment' | 'clinic-photo';
}

export const CLINIC_INFO = {
  name: 'Essence Aesthetics Clinic',
  shortName: 'Essence Aesthetics',
  tagline: 'Personalized aesthetic care designed to enhance your confidence.',
  description:
    'Essence Aesthetics is dedicated to enhancing natural beauty and confidence through personalized aesthetic treatments and professional skincare services.',
  phoneDisplay: '+92 315 0529578',
  phoneHref: 'tel:+923150529578',
  whatsappUrl: 'https://wa.me/923150529578',
  email: 'essenceaesthetics.pk@gmail.com',
  emailHref: 'mailto:essenceaesthetics.pk@gmail.com',
  addressShort: 'DHA Phase II, Islamabad',
  addressFull: 'Plaza 48, Commercial Sector E, DHA Phase II, Islamabad, 45730, Pakistan',
  googleBusinessUrl: 'https://share.google/vOBGrtvui1pUzyc7Y',
  facebookUrl: 'https://www.facebook.com/share/1E7ZK4HvZo/?mibextid=wwXIfr',
  instagramUrl: 'https://www.instagram.com/essenceaesthetics.pk',
  instagramHandle: '@essenceaesthetics.pk',
  instagramFollowersSnapshot: '14,013',
  googleRatingSnapshot: '4.4',
  googleReviewCountSnapshot: 27,
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.0!2d73.1587553!3d33.5314963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfedbcd44d1dbd%3A0x932e1b1edbf0f30e!2sEssence%20Aesthetics%20Clinic!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk',
  googleMapsDirectionsUrl: 'https://maps.app.goo.gl/ENG3PKF63QTjVrTh6',
  uploadedLogoPath: '/assets/aistudio/FB_IMG_1795585688882_3cb88d6d.jpg',
};

export const OPENING_HOURS: OpeningHour[] = [
  { day: 'Monday', hours: '1:00 PM – 9:00 PM' },
  { day: 'Tuesday', hours: '1:00 PM – 9:00 PM' },
  { day: 'Wednesday', hours: '1:00 PM – 9:00 PM' },
  { day: 'Thursday', hours: '1:00 PM – 9:00 PM' },
  { day: 'Friday', hours: '1:00 PM – 9:00 PM' },
  { day: 'Saturday', hours: '1:00 PM – 9:00 PM' },
  { day: 'Sunday', hours: 'Closed', isClosed: true },
];

export const CLINIC_IMAGES = {
  heroSanctuary: '/src/assets/images/hero_clinic_sanctuary_1795586504030.jpg',
  receptionDesk: '/src/assets/images/clinic_reception_desk_1795586477436.jpg',
  consultationLounge: '/src/assets/images/clinic_consultation_lounge_1795586478423.jpg',
  microneedlingSuite: '/src/assets/images/treatment_microneedling_suite_1795586479537.jpg',
  laserSuite: '/src/assets/images/treatment_laser_suite_1795586479478.jpg',
  skincareDetail: '/src/assets/images/skincare_ritual_detail_1795586479155.jpg',
  // Seven Service Hero Photographs
  serviceHydraFacial: '/src/assets/images/service_hydra_facial_1795594125351.jpg',
  servicePigmentation: '/src/assets/images/service_pigmentation_1795594126627.jpg',
  serviceChemicalPeel: '/src/assets/images/service_chemical_peel_1795594126964.jpg',
  serviceAcneScar: '/src/assets/images/service_acne_scar_1795594127668.jpg',
  serviceSkinRejuvenation: '/src/assets/images/service_skin_rejuvenation_1795594128459.jpg',
  // Matched Before & After Illustrative Preview Images (replace paths when clinic-approved patient photos are provided)
  baHydraBefore: '/src/assets/images/ba_hydra_before_1795594128783.jpg',
  baHydraAfter: '/src/assets/images/ba_hydra_after_1795594207456.jpg',
  baLaserBefore: '/src/assets/images/ba_laser_before_1795594129023.jpg',
  baLaserAfter: '/src/assets/images/ba_laser_after_1795594206594.jpg',
  baPigmentationBefore: '/src/assets/images/ba_pigmentation_before_1795594129578.jpg',
  baPigmentationAfter: '/src/assets/images/ba_pigmentation_after_1795594207600.jpg',
  baMicroneedlingBefore: '/src/assets/images/ba_microneedling_before_1795594130076.jpg',
  baMicroneedlingAfter: '/src/assets/images/ba_microneedling_after_1795594208145.jpg',
  baPeelBefore: '/src/assets/images/ba_peel_before_1795594130071.jpg',
  baPeelAfter: '/src/assets/images/ba_peel_after_1795594152795.jpg',
  baAcneBefore: '/src/assets/images/ba_acne_before_1795594131635.jpg',
  baAcneAfter: '/src/assets/images/ba_acne_after_1795594207680.jpg',
  baRejuvenationBefore: '/src/assets/images/ba_rejuvenation_before_1795594130299.jpg',
  baRejuvenationAfter: '/src/assets/images/ba_rejuvenation_after_1795594154592.jpg',
};

const ILLUSTRATIVE_NOTICE = 'Illustrative Preview — Actual patient results may vary.';

export const SERVICES_CATALOG: TreatmentInfo[] = [
  {
    id: 'hydra-facial',
    slug: '/services/hydra-facial',
    name: 'Hydra Therapy / Hydra Facial',
    shortTitle: 'Hydra Facial',
    category: 'Facial Treatments',
    filterTags: ['Facial Treatments', 'Skin Treatments'],
    clinicConfirmationNote:
      'Website preview category — exact service menu naming and protocol details are confirmed directly with clinic staff.',
    summary:
      'Gentle multi-step facial cleansing, exfoliation, and hydration care tailored to refresh dull or dehydrated skin.',
    heroImage: CLINIC_IMAGES.serviceHydraFacial,
    heroAlt:
      'Calm hydro-dermabrasion facial session inside a sunlit ivory and blush aesthetic treatment room',
    environmentImage: CLINIC_IMAGES.consultationLounge,
    environmentAlt: 'Private skincare consultation space prior to facial therapy',
    detailImage: CLINIC_IMAGES.skincareDetail,
    detailAlt: 'Hydrating skincare serums and warm linen towels prepared on travertine stone',
    overview: [
      'Hydra therapy / hydra facial sessions focus on gentle surface cleansing, light exfoliation, pore decongestion, and hydrating serum infusion in a relaxing clinical setting.',
      'Before any session, a consultation helps assess your skin barrier, sensitivity level, and daily skincare habits so the steps remain comfortable and well suited to your skin.',
    ],
    whatItInvolves: [
      'Surface cleansing to lift makeup, sunscreen, and everyday environmental buildup.',
      'Controlled gentle exfoliation and light suction-assisted pore clearing where appropriate.',
      'Application of soothing hydrating serums selected during your consultation.',
    ],
    suitabilityConsiderations: [
      'Often discussed for individuals experiencing dryness, dullness, or mild congestion.',
      'Sensitivity, active skin irritation, or recent procedures should be evaluated in person first.',
      'Session frequency and serum selection are tailored individually rather than standardized.',
    ],
    consultationProcess: [
      'Assessment of your skin hydration, sensitivity, and current home routine.',
      'Clear walkthrough of each gentle step prior to beginning the session.',
      'Simple daily skincare and sun-protection guidance tailored to Islamabad’s climate.',
    ],
    prepAndAftercare: [
      'Share any active topical retinoids or exfoliating acids you currently use during consultation.',
      'Avoid harsh scrubs or unnecessary sun exposure right around your appointment.',
      'Maintain gentle cleansing and broad-spectrum sunscreen afterward as advised.',
    ],
    whatToDiscuss: [
      'Any known skin sensitivities, allergies, or recent facial treatments.',
      'Upcoming events or travel dates when planning your appointment.',
      'Your current morning and evening skincare products.',
    ],
    faqs: [
      {
        question: 'Is a consultation helpful before booking a hydra facial session?',
        answer:
          'Yes. Discussing your skin sensitivity and current routine helps ensure the cleansing and hydration steps are appropriate for you.',
      },
      {
        question: 'How should I prepare before visiting the clinic?',
        answer:
          'Arrive comfortably and let our clinic staff know if you use prescription topicals or active exfoliants so they can advise you accurately.',
      },
      {
        question: 'How can I confirm availability for Hydra Therapy?',
        answer:
          'You can request a consultation through our Book Appointment page or message the clinic desk on WhatsApp at +92 315 0529578.',
      },
    ],
    beforeAfterPair: {
      id: 'ba-hydra-facial',
      treatmentId: 'hydra-facial',
      title: 'Hydra Therapy / Hydra Facial — Illustrative Comparison',
      treatmentCategory: 'Hydra Therapy / Hydra Facial',
      sessionNote: 'Illustrative facial hydration preview · Replaceable with clinic-consented photos',
      isDemoPlaceholder: false,
      isIllustrativePreview: true,
      illustrativeNotice: ILLUSTRATIVE_NOTICE,
      beforeImage: CLINIC_IMAGES.baHydraBefore,
      afterImage: CLINIC_IMAGES.baHydraAfter,
      beforeLabel: 'BEFORE',
      afterLabel: 'AFTER',
      disclaimer:
        'Illustrative Preview — Actual patient results may vary. Authentic patient comparisons are published only with explicit clinic and patient consent.',
    },
  },
  {
    id: 'laser-hair-removal',
    slug: '/services/laser-hair-removal',
    name: 'Laser Hair Removal',
    shortTitle: 'Laser Hair Removal',
    category: 'Laser Treatments',
    filterTags: ['Laser Treatments'],
    clinicConfirmationNote:
      'Confirmed clinic topic (laser hair removal / face laser sessions) — individualized plan confirmed during consultation.',
    summary:
      'Consultation-led laser hair removal and face laser sessions designed with patient comfort, clear guidance, and attentive care.',
    heroImage: CLINIC_IMAGES.laserSuite,
    heroAlt:
      'Modern aesthetic clinic laser suite with ergonomic treatment chair and clinical laser console',
    environmentImage: CLINIC_IMAGES.receptionDesk,
    environmentAlt: 'Calm travertine reception space at Essence Aesthetics Clinic',
    detailImage: CLINIC_IMAGES.consultationLounge,
    detailAlt: 'One-on-one laser suitability consultation with skincare specialist',
    overview: [
      'Essence Aesthetics Clinic offers laser hair removal and face laser sessions following an attentive one-on-one consultation. Every plan is tailored to your skin tone, hair characteristics, and comfort needs.',
      'Our team prioritizes transparent communication—explaining session pacing, preparation steps, and appropriate sun-care guidance without exaggerated claims or unrealistic promises.',
    ],
    whatItInvolves: [
      'Pre-session assessment of the target facial or body area and skin sensitivity.',
      'Targeted light-based hair reduction settings selected carefully for your skin profile.',
      'Cooling comfort measures and soothing post-session care instructions.',
    ],
    suitabilityConsiderations: [
      'Suitability depends on skin tone, hair pigment, and medical or medication history.',
      'Areas with recent sunburn, active skin infections, or waxing may require rescheduling.',
      'Multiple spaced sessions are typically discussed realistically during consultation.',
    ],
    consultationProcess: [
      'Evaluation of the treatment area, skin sensitivity, and suitability during your consultation.',
      'Discussion of realistic session intervals and preparation steps prior to your appointment.',
      'Clear, attentive guidance from the doctor and clinic staff throughout your visit.',
    ],
    prepAndAftercare: [
      'Avoid waxing, threading, or plucking the target area before laser sessions when advised.',
      'Protect treated areas from direct sun exposure and follow staff guidance on soothing care.',
      'Inform the clinic team of any photosensitive medications before each visit.',
    ],
    whatToDiscuss: [
      'Recent sun exposure, tanning, or waxing/threading in the intended area.',
      'Any skincare actives, medications, or previous laser sessions you have experienced.',
      'Your preferred schedule so sessions can be spaced thoughtfully around your routine.',
    ],
    faqs: [
      {
        question: 'How is suitability for face laser or laser hair removal determined?',
        answer:
          'Suitability is assessed individually during your in-clinic consultation based on your skin, hair profile, and medical history.',
      },
      {
        question: 'What should I know before coming in for a consultation?',
        answer:
          'Please share any current skincare products or recent hair removal methods used in the area so our staff can advise you accurately on preparation.',
      },
      {
        question: 'Are multiple sessions usually discussed?',
        answer:
          'Yes. During your consultation, the clinic team will explain how laser sessions are typically scheduled over time and answer any questions about your specific plan.',
      },
    ],
    beforeAfterPair: {
      id: 'ba-laser-hair-removal',
      treatmentId: 'laser-hair-removal',
      title: 'Laser Hair Removal / Face Laser — Illustrative Comparison',
      treatmentCategory: 'Laser Hair Removal',
      sessionNote: 'Illustrative smooth jawline preview · Replaceable with clinic-consented photos',
      isDemoPlaceholder: false,
      isIllustrativePreview: true,
      illustrativeNotice: ILLUSTRATIVE_NOTICE,
      beforeImage: CLINIC_IMAGES.baLaserBefore,
      afterImage: CLINIC_IMAGES.baLaserAfter,
      beforeLabel: 'BEFORE',
      afterLabel: 'AFTER',
      disclaimer:
        'Illustrative Preview — Actual patient results may vary. Authentic patient comparisons are published only with explicit clinic and patient consent.',
    },
  },
  {
    id: 'pigmentation-treatment',
    slug: '/services/pigmentation-treatment',
    name: 'Pigmentation Treatment',
    shortTitle: 'Pigmentation Care',
    category: 'Skin Treatments',
    filterTags: ['Skin Treatments', 'Laser Treatments'],
    clinicConfirmationNote:
      'Website preview category — exact pigmentation options and clinical protocols are confirmed during your in-clinic visit.',
    summary:
      'Consultation-guided skincare approaches aimed at addressing uneven skin tone, sun-related spots, and post-blemish discoloration.',
    heroImage: CLINIC_IMAGES.servicePigmentation,
    heroAlt:
      'Aesthetic skincare consultation desk with diagnostic mirror and brightening serums in soft lavender room',
    environmentImage: CLINIC_IMAGES.heroSanctuary,
    environmentAlt: 'Sunlit waiting lounge at Essence Aesthetics Clinic',
    detailImage: CLINIC_IMAGES.skincareDetail,
    detailAlt: 'Formulated skincare dropper bottles and soft facial towels',
    overview: [
      'Uneven pigmentation can stem from sun exposure, hormonal factors, or lingering post-blemish marks. Addressing tone concerns safely begins with understanding the underlying cause rather than applying harsh one-size-fits-all measures.',
      'During consultation, your skin tone, sun habits, and sensitivity are carefully reviewed so any recommended plan prioritizes gradual, balanced skin support.',
    ],
    whatItInvolves: [
      'Visual assessment of sunspots, uneven patches, or post-inflammatory discoloration.',
      'Discussion of gentle in-clinic options and daily supportive brightening skincare.',
      'Strong emphasis on consistent sun protection to help maintain even skin tone.',
    ],
    suitabilityConsiderations: [
      'Different skin tones require carefully calibrated, conservative care to protect pigment balance.',
      'Pregnancy, breastfeeding, or photosensitizing products should always be disclosed.',
      'Gradual improvement over structured visits is discussed realistically without guaranteed timelines.',
    ],
    consultationProcess: [
      'Review of how long uneven tone or spots have been present and prior products tried.',
      'Explanation of conservative, skin-tone-appropriate options and realistic pacing.',
      'Daily sun-protection and gentle routine guidance tailored to Islamabad’s sunny climate.',
    ],
    prepAndAftercare: [
      'Consistent broad-spectrum SPF use is essential before and after any pigmentation-focused care.',
      'Avoid unverified bleaching creams or harsh home scrubs prior to evaluation.',
      'Follow clinic instructions gently if mild temporary sensitivity occurs.',
    ],
    whatToDiscuss: [
      'Any history of melasma, sun sensitivity, or reaction to previous brightening products.',
      'Medications, supplements, or hormonal changes that may influence pigment.',
      'Your daily outdoor sun exposure and current sunscreen habits.',
    ],
    faqs: [
      {
        question: 'Can pigmentation concerns be evaluated in a single consultation?',
        answer:
          'An initial consultation lets our team examine your skin tone and discuss potential contributing factors before recommending an individualized care plan.',
      },
      {
        question: 'Why is sun protection emphasized alongside pigmentation care?',
        answer:
          'UV exposure frequently darkens existing spots and triggers new discoloration, making daily sun protection a cornerstone of tone management.',
      },
      {
        question: 'Are outcomes guaranteed to remove all spots completely?',
        answer:
          'No ethical clinic can guarantee complete removal. Responses vary based on pigment depth, skin type, and consistent aftercare.',
      },
    ],
    beforeAfterPair: {
      id: 'ba-pigmentation',
      treatmentId: 'pigmentation-treatment',
      title: 'Pigmentation Treatment — Illustrative Comparison',
      treatmentCategory: 'Pigmentation Treatment',
      sessionNote: 'Illustrative tone clarity preview · Replaceable with clinic-consented photos',
      isDemoPlaceholder: false,
      isIllustrativePreview: true,
      illustrativeNotice: ILLUSTRATIVE_NOTICE,
      beforeImage: CLINIC_IMAGES.baPigmentationBefore,
      afterImage: CLINIC_IMAGES.baPigmentationAfter,
      beforeLabel: 'BEFORE',
      afterLabel: 'AFTER',
      disclaimer:
        'Illustrative Preview — Actual patient results may vary. Authentic patient comparisons are published only with explicit clinic and patient consent.',
    },
  },
  {
    id: 'microneedling',
    slug: '/services/microneedling',
    name: 'Microneedling',
    shortTitle: 'Microneedling',
    category: 'Skin Treatments',
    filterTags: ['Skin Treatments', 'Facial Treatments'],
    clinicConfirmationNote:
      'Confirmed clinic topic — personalized microneedling care confirmed during consultation.',
    summary:
      'Personalized microneedling consultations and sessions focused on thoughtful skin texture care in a calm, hygienic clinic environment.',
    heroImage: CLINIC_IMAGES.microneedlingSuite,
    heroAlt:
      'Clean luxury aesthetic treatment suite prepared for microneedling sessions at Essence Aesthetics Clinic',
    environmentImage: CLINIC_IMAGES.consultationLounge,
    environmentAlt: 'Private consultation lounge for pre-treatment skin discussion',
    detailImage: CLINIC_IMAGES.skincareDetail,
    detailAlt: 'Soothing skincare serums and soft ivory towels prepared for post-care',
    overview: [
      'Microneedling is a targeted aesthetic skincare procedure discussed during an individualized consultation at Essence Aesthetics Clinic. Each appointment begins with a calm evaluation of your skin concerns, comfort preferences, and realistic expectations.',
      'Rather than a one-size-fits-all routine, our clinic emphasizes clear explanations before every step so you understand how your skin is cared for before, during, and after your visit.',
    ],
    whatItInvolves: [
      'Thorough skin cleansing and comfort preparation prior to the session.',
      'Controlled, sterile micro-channeling across targeted areas of the skin.',
      'Application of calming, hydrating post-session skincare and clear recovery guidance.',
    ],
    suitabilityConsiderations: [
      'Commonly discussed for skin texture refinement, visible pores, or mild surface unevenness.',
      'Not performed over active breakouts, open skin irritation, or certain medical conditions.',
      'Temporary redness similar to mild windburn is typical immediately afterward and discussed beforehand.',
    ],
    consultationProcess: [
      'Review of your skin history, current skincare routine, and personal aesthetic goals.',
      'Clear walkthrough of the session steps, expected skin appearance immediately afterward, and comfort measures.',
      'Personalized post-session skincare guidance tailored to your daily routine in Islamabad’s climate.',
    ],
    prepAndAftercare: [
      'Pause irritating active exfoliants prior to your visit if advised during consultation.',
      'Keep skin clean, well hydrated, and protected from direct sun during recovery.',
      'Avoid makeup or heavy fragranced products for the period advised by clinic staff.',
    ],
    whatToDiscuss: [
      'Any active skin irritation, sensitivities, or recent cosmetic procedures.',
      'Your current topical products, sun exposure habits, and upcoming schedule.',
      'Questions regarding comfort during the session and recommended spacing between visits.',
    ],
    faqs: [
      {
        question: 'Do I need a consultation before scheduling microneedling?',
        answer:
          'Yes. An initial consultation allows the clinic team to assess your skin, answer your questions clearly, and confirm whether microneedling aligns with your goals.',
      },
      {
        question: 'Will the procedure be explained before we begin?',
        answer:
          'Clear communication is central to our care approach. Every step and aftercare recommendation is discussed openly prior to treatment.',
      },
      {
        question: 'How do I request a microneedling appointment in DHA Phase II, Islamabad?',
        answer:
          'You can submit an appointment request through our Book Appointment page or message the clinic directly on WhatsApp at +92 315 0529578.',
      },
    ],
    beforeAfterPair: {
      id: 'ba-microneedling',
      treatmentId: 'microneedling',
      title: 'Microneedling — Illustrative Comparison',
      treatmentCategory: 'Microneedling',
      sessionNote: 'Illustrative skin texture preview · Replaceable with clinic-consented photos',
      isDemoPlaceholder: false,
      isIllustrativePreview: true,
      illustrativeNotice: ILLUSTRATIVE_NOTICE,
      beforeImage: CLINIC_IMAGES.baMicroneedlingBefore,
      afterImage: CLINIC_IMAGES.baMicroneedlingAfter,
      beforeLabel: 'BEFORE',
      afterLabel: 'AFTER',
      disclaimer:
        'Illustrative Preview — Actual patient results may vary. Authentic patient comparisons are published only with explicit clinic and patient consent.',
    },
  },
  {
    id: 'chemical-peel',
    slug: '/services/chemical-peel',
    name: 'Chemical Peel Treatment',
    shortTitle: 'Chemical Peel',
    category: 'Facial Treatments',
    filterTags: ['Skin Treatments', 'Facial Treatments'],
    clinicConfirmationNote:
      'Website preview category — peel strengths and availability are confirmed directly with clinic staff.',
    summary:
      'Controlled clinical exfoliation treatments selected carefully during consultation to refresh surface dullness and uneven texture.',
    heroImage: CLINIC_IMAGES.serviceChemicalPeel,
    heroAlt:
      'Botanical and clinical facial peel preparation with fan brush, glass vials, and folded ivory towels',
    environmentImage: CLINIC_IMAGES.microneedlingSuite,
    environmentAlt: 'Serene facial treatment room with warm natural light',
    detailImage: CLINIC_IMAGES.skincareDetail,
    detailAlt: 'Soothing post-peel recovery serums and soft towels on travertine stone',
    overview: [
      'Chemical peel treatments use carefully selected exfoliating solutions to gently lift dull outer skin cells and encourage a fresher, smoother surface appearance.',
      'Because peel strength must match your skin type and sensitivity, an in-person consultation is essential to decide whether a mild superficial peel or alternative care is most appropriate.',
    ],
    whatItInvolves: [
      'Skin cleansing and protective preparation around sensitive facial contours.',
      'Controlled timed application of an appropriate exfoliating solution.',
      'Neutralization or calming finish followed by barrier-supporting moisturizer and sun care.',
    ],
    suitabilityConsiderations: [
      'Carefully selected for dullness, mild surface roughness, or uneven post-blemish marks.',
      'Skin barrier condition, sun exposure, and history of sensitivity guide peel choice.',
      'Mild temporary flaking or dryness can occur depending on the peel type discussed.',
    ],
    consultationProcess: [
      'Evaluation of your skin sensitivity and prior experience with exfoliating acids.',
      'Honest overview of expected downtime, mild flaking, or redness if applicable.',
      'Clear step-by-step post-care instructions to keep skin calm and protected.',
    ],
    prepAndAftercare: [
      'Avoid picking or peeling flaking skin manually—allow natural shedding.',
      'Pause strong home retinoids or scrubs beforehand as instructed by clinic staff.',
      'Apply gentle moisturizer and broad-spectrum sunscreen diligently afterward.',
    ],
    whatToDiscuss: [
      'Any upcoming social events where mild flaking would be inconvenient.',
      'Current prescription acne or anti-aging creams in your home routine.',
      'Previous sensitivity or reactions to glycolic, lactic, or salicylic ingredients.',
    ],
    faqs: [
      {
        question: 'Will my skin visibly peel after every chemical peel?',
        answer:
          'Not always. Milder superficial peels may leave little to no visible flaking, while other options involve light peeling—your provider will explain what to expect during consultation.',
      },
      {
        question: 'How do I know which peel is safe for my skin tone?',
        answer:
          'Peel selection is always customized in person based on your skin tone, barrier health, and aesthetic goals.',
      },
      {
        question: 'Can I wear makeup right after a peel session?',
        answer:
          'Your clinic team will advise how long to wait based on the specific peel applied and how your skin responds.',
      },
    ],
    beforeAfterPair: {
      id: 'ba-chemical-peel',
      treatmentId: 'chemical-peel',
      title: 'Chemical Peel Treatment — Illustrative Comparison',
      treatmentCategory: 'Chemical Peel Treatment',
      sessionNote: 'Illustrative radiance & surface tone preview · Replaceable with clinic photos',
      isDemoPlaceholder: false,
      isIllustrativePreview: true,
      illustrativeNotice: ILLUSTRATIVE_NOTICE,
      beforeImage: CLINIC_IMAGES.baPeelBefore,
      afterImage: CLINIC_IMAGES.baPeelAfter,
      beforeLabel: 'BEFORE',
      afterLabel: 'AFTER',
      disclaimer:
        'Illustrative Preview — Actual patient results may vary. Authentic patient comparisons are published only with explicit clinic and patient consent.',
    },
  },
  {
    id: 'acne-scar-treatment',
    slug: '/services/acne-scar-treatment',
    name: 'Acne & Acne Scar Treatment',
    shortTitle: 'Acne & Scar Care',
    category: 'Skin Treatments',
    filterTags: ['Skin Treatments'],
    clinicConfirmationNote:
      'Website preview category — individualized acne and scar management plans are confirmed in clinic.',
    summary:
      'Thoughtful, consultation-led skincare strategies supporting calmer blemish-prone skin and gradual texture refinement for post-acne marks.',
    heroImage: CLINIC_IMAGES.serviceAcneScar,
    heroAlt:
      'Hygienic aesthetic clinic room prepared for acne and skin texture consultation and treatment',
    environmentImage: CLINIC_IMAGES.consultationLounge,
    environmentAlt: 'Private consultation seating for personalized acne skin history review',
    detailImage: CLINIC_IMAGES.skincareDetail,
    detailAlt: 'Calming serums and sterile facial care linens',
    overview: [
      'Managing active breakouts and addressing lingering acne scars require two distinct, thoughtful phases of care. Trying aggressive texture treatments over active inflammation can irritate the skin further.',
      'At Essence Aesthetics Clinic, consultations focus on calming active skin concerns first and discussing appropriate, gradual texture-supportive options tailored to your scar type.',
    ],
    whatItInvolves: [
      'Distinguishing between active acne, post-acne redness/dark marks, and indented texture scars.',
      'Stepwise planning that respects your skin barrier and avoids unnecessary irritation.',
      'Clear guidance on supportive daily skincare habits alongside in-clinic visits.',
    ],
    suitabilityConsiderations: [
      'Active breakouts are typically stabilized before texture-focused scar procedures.',
      'Recent oral acne medications must always be disclosed prior to treatment planning.',
      'Scar improvement is typically gradual across multiple visits and varies by scar depth.',
    ],
    consultationProcess: [
      'Detailed review of breakout patterns, past treatments, and current skincare products.',
      'Realistic discussion of how different post-acne marks respond to staged care.',
      'Clear, supportive explanations without pressure or exaggerated promises.',
    ],
    prepAndAftercare: [
      'Avoid squeezing or picking blemishes prior to or following clinic visits.',
      'Use non-comedogenic, gentle cleansers and sun protection recommended during consultation.',
      'Inform clinic staff of any prescription dermatology medications before each session.',
    ],
    whatToDiscuss: [
      'Current or recent oral or topical acne prescriptions.',
      'Whether your main concern is active breakouts, flat dark marks, or textured scars.',
      'Sensitivities or dryness from previous acne products.',
    ],
    faqs: [
      {
        question: 'Can acne scars and active breakouts be addressed together?',
        answer:
          'Usually active breakouts are calmed first so the skin is healthy enough for texture-focused care. Your consultation will map out the safest sequence.',
      },
      {
        question: 'How many sessions are typically needed for acne scars?',
        answer:
          'The number of visits varies widely depending on scar depth, skin healing response, and chosen approach—this is discussed honestly during your assessment.',
      },
      {
        question: 'Will my daily skincare routine be reviewed?',
        answer:
          'Yes. Understanding your cleansers, moisturizers, and sunscreens helps prevent pore congestion and supports clinic care.',
      },
    ],
    beforeAfterPair: {
      id: 'ba-acne-scar',
      treatmentId: 'acne-scar-treatment',
      title: 'Acne & Acne Scar Treatment — Illustrative Comparison',
      treatmentCategory: 'Acne & Acne Scar Treatment',
      sessionNote: 'Illustrative scar texture smoothing preview · Replaceable with clinic photos',
      isDemoPlaceholder: false,
      isIllustrativePreview: true,
      illustrativeNotice: ILLUSTRATIVE_NOTICE,
      beforeImage: CLINIC_IMAGES.baAcneBefore,
      afterImage: CLINIC_IMAGES.baAcneAfter,
      beforeLabel: 'BEFORE',
      afterLabel: 'AFTER',
      disclaimer:
        'Illustrative Preview — Actual patient results may vary. Authentic patient comparisons are published only with explicit clinic and patient consent.',
    },
  },
  {
    id: 'skin-rejuvenation',
    slug: '/services/skin-rejuvenation',
    name: 'Skin Rejuvenation Treatment',
    shortTitle: 'Skin Rejuvenation',
    category: 'Facial Treatments',
    filterTags: ['Facial Treatments', 'Skin Treatments'],
    clinicConfirmationNote:
      'Website preview category — specific rejuvenation modalities are discussed and confirmed during consultation.',
    summary:
      'Restorative skincare consultations and sessions designed to support skin radiance, hydration, and refreshed overall vitality.',
    heroImage: CLINIC_IMAGES.serviceSkinRejuvenation,
    heroAlt:
      'Luxury aesthetic skin rejuvenation suite in blush pink, ivory, and champagne gold tones',
    environmentImage: CLINIC_IMAGES.heroSanctuary,
    environmentAlt: 'Quiet guest sanctuary at Essence Aesthetics Clinic',
    detailImage: CLINIC_IMAGES.skincareDetail,
    detailAlt: 'Restorative skincare ampoules and ivory towels in soft clinic light',
    overview: [
      'Skin rejuvenation care focuses on supporting tired, stressed, or dehydrated skin so it feels supple, comfortable, and naturally refreshed.',
      'Rather than chasing artificial perfection, our consultations focus on subtle, healthy-looking radiance tailored to your age, lifestyle, and comfort.',
    ],
    whatItInvolves: [
      'Comprehensive evaluation of skin elasticity, hydration levels, and fine dehydration lines.',
      'Selection of gentle restorative facial or skin-conditioning steps suited to your profile.',
      'Practical daily routine recommendations to support long-term skin comfort.',
    ],
    suitabilityConsiderations: [
      'Suitable for adults seeking refreshed skin vitality and gentle maintenance.',
      'Tailored conservatively for sensitive, dry, or mature skin types.',
      'Specific modalities and spacing are confirmed individually during consultation.',
    ],
    consultationProcess: [
      'Listening to what makes your skin feel tired or dull day to day.',
      'Outlining gentle, non-rushed options that fit comfortably into your schedule.',
      'Clear explanation of expected immediate feel and recommended follow-up care.',
    ],
    prepAndAftercare: [
      'Stay well hydrated and keep your baseline cleanser and moisturizer gentle.',
      'Protect restored skin with daily broad-spectrum sunscreen.',
      'Discuss any upcoming travel or major events so visits are timed thoughtfully.',
    ],
    whatToDiscuss: [
      'Areas where you notice dryness, fine lines, or loss of natural glow.',
      'Any previous aesthetic treatments you have enjoyed or found too strong.',
      'Preferences regarding minimal-downtime clinic sessions.',
    ],
    faqs: [
      {
        question: 'What is the goal of a skin rejuvenation consultation?',
        answer:
          'The goal is to understand your skin’s hydration, texture, and tone so our team can suggest gentle, personalized ways to support natural radiance.',
      },
      {
        question: 'Is there significant downtime with gentle rejuvenation care?',
        answer:
          'Many supportive facial and rejuvenation approaches involve minimal to no downtime, though any recovery expectations depend on the exact option chosen in consultation.',
      },
      {
        question: 'How do I book a Skin Rejuvenation consultation?',
        answer:
          'Select Skin Rejuvenation Treatment on our Book Appointment page or message our DHA Phase II clinic directly on WhatsApp.',
      },
    ],
    beforeAfterPair: {
      id: 'ba-skin-rejuvenation',
      treatmentId: 'skin-rejuvenation',
      title: 'Skin Rejuvenation Treatment — Illustrative Comparison',
      treatmentCategory: 'Skin Rejuvenation Treatment',
      sessionNote: 'Illustrative skin vitality preview · Replaceable with clinic-consented photos',
      isDemoPlaceholder: false,
      isIllustrativePreview: true,
      illustrativeNotice: ILLUSTRATIVE_NOTICE,
      beforeImage: CLINIC_IMAGES.baRejuvenationBefore,
      afterImage: CLINIC_IMAGES.baRejuvenationAfter,
      beforeLabel: 'BEFORE',
      afterLabel: 'AFTER',
      disclaimer:
        'Illustrative Preview — Actual patient results may vary. Authentic patient comparisons are published only with explicit clinic and patient consent.',
    },
  },
];

// Preserved alias for backward compatibility
export const CONFIRMED_TREATMENTS = SERVICES_CATALOG.filter(
  (t) => t.id === 'microneedling' || t.id === 'laser-hair-removal'
);

// Global Before & After comparison list matching all 7 services 1-to-1
export const BEFORE_AFTER_PAIRS: ComparisonPair[] = SERVICES_CATALOG.map(
  (service) => service.beforeAfterPair
);

export const CLINIC_GALLERY_ITEMS: ClinicGalleryItem[] = [
  {
    id: 'gal-reception',
    title: 'Welcoming Reception & Front Desk',
    category: 'Reception',
    image: CLINIC_IMAGES.receptionDesk,
    alt: 'Travertine reception desk with soft blush and lavender wall paneling in an aesthetic clinic',
    caption: 'Calm arrival space designed around soft blush, lavender, and warm stone tones.',
    sourceType: 'illustrative-environment',
  },
  {
    id: 'gal-sanctuary',
    title: 'Guest Lounge & Seating Sanctuary',
    category: 'Clinic Interior',
    image: CLINIC_IMAGES.heroSanctuary,
    alt: 'Sunlit aesthetic clinic waiting lounge with dusty rose velvet seating and travertine coffee table',
    caption: 'Quiet seating lounge where patients relax prior to their scheduled consultation.',
    sourceType: 'illustrative-environment',
  },
  {
    id: 'gal-consultation',
    title: 'Private Consultation Suite',
    category: 'Clinic Interior',
    image: CLINIC_IMAGES.consultationLounge,
    alt: 'Intimate consultation room with boucle armchairs and soft natural light',
    caption: 'One-on-one consultation environment focused on unhurried, clear explanations.',
    sourceType: 'illustrative-environment',
  },
  {
    id: 'gal-microneedling',
    title: 'Facial & Microneedling Suite',
    category: 'Treatment Rooms',
    image: CLINIC_IMAGES.microneedlingSuite,
    alt: 'Hygienic aesthetic treatment room prepared for microneedling and facial care',
    caption: 'Thoughtfully prepared facial care suite prioritizing hygiene and patient comfort.',
    sourceType: 'illustrative-environment',
  },
  {
    id: 'gal-laser',
    title: 'Laser Treatment Suite',
    category: 'Treatment Rooms',
    image: CLINIC_IMAGES.laserSuite,
    alt: 'Modern laser hair removal and face laser treatment room with clinical equipment',
    caption: 'Dedicated laser session suite outfitted for controlled, comfortable care.',
    sourceType: 'illustrative-environment',
  },
  {
    id: 'gal-environment',
    title: 'Skincare Preparation & Detail',
    category: 'Clinic Environment',
    image: CLINIC_IMAGES.skincareDetail,
    alt: 'Frosted glass skincare bottles, warm ivory towels, and peony petals on travertine stone',
    caption: 'Attentive preparation details supporting every personalized skincare visit.',
    sourceType: 'illustrative-environment',
  },
];

export const REVIEW_THEME_SUMMARIES = [
  {
    id: 'theme-microneedling',
    topic: 'Microneedling Care',
    summary:
      'Patients visiting for microneedling highlighted a comfortable treatment process and appreciated noticeable, thoughtful care.',
  },
  {
    id: 'theme-explanations',
    topic: 'Clear Explanations',
    summary:
      'Visitors consistently noted that consultations and procedures were explained clearly so they felt informed and at ease.',
  },
  {
    id: 'theme-team',
    topic: 'Kind Staff & Doctor Care',
    summary:
      'Feedback from the clinic’s Google profile reflects positive experiences with the doctor and kind, attentive support staff.',
  },
  {
    id: 'theme-comfort',
    topic: 'Comfortable Experience',
    summary:
      'Reviews emphasize a welcoming clinic atmosphere and effective treatments delivered without rushing.',
  },
];
