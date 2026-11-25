import React, { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Edit3,
  ExternalLink,
  Info,
  Shield,
  Star,
  Trash2,
} from 'lucide-react';
import { CLINIC_INFO, REVIEW_THEME_SUMMARIES } from '../data/clinicData';
import { PageMeta } from '../components/PageMeta';

type ModerationStatus = 'pending' | 'approved' | 'rejected';

interface SubmittedReviewItem {
  id: string;
  patientName: string;
  rating: number;
  treatment: string;
  reviewText: string;
  email: string;
  submittedAt: string;
  status: ModerationStatus;
  formattedNote?: string;
}

export function ReviewsPage() {
  const [patientName, setPatientName] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [treatment, setTreatment] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);

  const [isReviewingDraft, setIsReviewingDraft] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Session-only queue to transparently demonstrate staff moderation structure without faking database persistence
  const [sessionQueue, setSessionQueue] = useState<SubmittedReviewItem[]>([]);
  const [showModerationPreview, setShowModerationPreview] = useState(false);
  const [editingModerationId, setEditingModerationId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState('');

  const validateForm = (): string | null => {
    if (!patientName.trim()) {
      return 'Please enter your name before continuing.';
    }
    if (rating < 1 || rating > 5) {
      return 'Please select a star rating from 1 to 5.';
    }
    if (reviewText.trim().length < 10) {
      return 'Please share at least a brief sentence (10+ characters) describing your experience.';
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return 'Please enter a valid email address, or leave the optional email field blank.';
    }
    if (!consent) {
      return 'Please confirm the consent checkbox to submit your feedback.';
    }
    return null;
  };

  const handlePreviewClick = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(false);
    const err = validateForm();
    if (err) {
      setFormError(err);
      return;
    }
    setFormError(null);
    setIsReviewingDraft(true);
  };

  const handleConfirmSubmit = () => {
    const err = validateForm();
    if (err) {
      setFormError(err);
      setIsReviewingDraft(false);
      return;
    }

    const newSubmission: SubmittedReviewItem = {
      id: `preview-${Date.now()}`,
      patientName: patientName.trim(),
      rating,
      treatment: treatment || 'Not specified',
      reviewText: reviewText.trim(),
      email: email.trim(),
      submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'pending',
    };

    setSessionQueue((prev) => [newSubmission, ...prev]);
    setIsReviewingDraft(false);
    setSubmitSuccess(true);
    setPatientName('');
    setRating(5);
    setTreatment('');
    setReviewText('');
    setEmail('');
    setConsent(false);
  };

  const updateModerationStatus = (id: string, status: ModerationStatus) => {
    setSessionQueue((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
  };

  const removeQueueItem = (id: string) => {
    setSessionQueue((prev) => prev.filter((item) => item.id !== id));
  };

  const saveFormattingEdit = (id: string) => {
    if (!editingText.trim()) return;
    setSessionQueue((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              reviewText: editingText.trim(),
              formattedNote: 'Formatted for punctuation/clarity by staff (meaning preserved)',
            }
          : item
      )
    );
    setEditingModerationId(null);
    setEditingText('');
  };

  return (
    <>
      <PageMeta
        title="Patient Reviews & Feedback — Essence Aesthetics Clinic Islamabad"
        description="Read recorded Google feedback themes for Essence Aesthetics Clinic in DHA Phase II, Islamabad, write a Google review, or share your clinic experience."
      />

      {/* Header & Recorded Google Snapshot */}
      <section className="bg-gradient-to-b from-[#E9B8CD]/20 to-[#FFF9F7] py-16 lg:py-20 border-b border-[#E9B8CD]/35">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.22em] text-[#C985A4] font-medium">
                Reviews &amp; Patient Experiences
              </p>
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#59384F] leading-tight">
                Patient Experiences &amp; Feedback
              </h1>
              <p className="text-base sm:text-lg text-[#343039]/80 leading-relaxed">
                Transparency matters to us. Below is our recorded Google Business Profile snapshot,
                authentic feedback themes, and a direct way to share your experience.
              </p>
            </div>

            <div className="bg-white border border-[#E9B8CD]/50 p-6 sm:p-7 space-y-3 shrink-0 max-w-sm">
              <div className="flex items-center gap-1.5 text-[#C6A16B]" aria-hidden="true">
                <Star className="w-5 h-5 fill-[#C6A16B]" />
                <Star className="w-5 h-5 fill-[#C6A16B]" />
                <Star className="w-5 h-5 fill-[#C6A16B]" />
                <Star className="w-5 h-5 fill-[#C6A16B]" />
                <Star className="w-5 h-5 fill-[#C6A16B]/40" />
              </div>
              <p className="font-editorial text-3xl text-[#59384F] tabular-nums">
                {CLINIC_INFO.googleRatingSnapshot} / 5 — {CLINIC_INFO.googleReviewCountSnapshot}{' '}
                Google Reviews
              </p>
              <p className="text-xs text-[#343039]/70 leading-relaxed">
                Recorded Google Business Profile snapshot (not a live synchronized feed).
              </p>
              <a
                href={CLINIC_INFO.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#59384F] text-white text-xs sm:text-sm font-medium hover:bg-[#462b3e] transition-colors"
              >
                <span>Write a Google Review</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Authentic Recorded Themes (No Fabricated Testimonials) */}
      <section className="bg-white py-16 lg:py-20 border-b border-[#E9B8CD]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-2">
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#59384F]">
              Verified Themes from Clinic Feedback
            </h2>
            <p className="text-sm text-[#343039]/75">
              In line with our commitment to authenticity, we summarize recurring patient feedback
              from our Google Business Profile rather than publishing fabricated names or invented
              quotations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEW_THEME_SUMMARIES.map((theme) => (
              <div
                key={theme.id}
                className="bg-[#FFF9F7] border border-[#D9C9E8]/70 p-6 space-y-3"
              >
                <h3 className="font-editorial text-2xl text-[#59384F]">{theme.topic}</h3>
                <p className="text-sm text-[#343039]/80 leading-relaxed">{theme.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHARE YOUR EXPERIENCE — Review Submission Form */}
      <section className="bg-[#FFF9F7] py-16 lg:py-24 border-b border-[#E9B8CD]/30" id="share-experience">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <p className="text-xs uppercase tracking-[0.22em] text-[#C985A4] font-medium">
              Submit Feedback on Our Website
            </p>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#59384F]">
              Share Your Experience
            </h2>
            <p className="text-sm sm:text-base text-[#343039]/80 max-w-2xl mx-auto">
              Visited Essence Aesthetics Clinic? We welcome your honest feedback. You can also
              leave a public review directly on Google.
            </p>
            <div className="pt-1">
              <a
                href={CLINIC_INFO.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#59384F] border-b border-[#C985A4] pb-0.5 hover:text-[#C985A4] transition-colors"
              >
                <span>Or Write a Google Review Directly</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Honest Preview Storage Notice */}
          <div className="bg-white border border-[#D9C9E8] p-5 flex items-start gap-3">
            <Info className="w-5 h-5 text-[#C985A4] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#343039]/80 leading-relaxed space-y-1">
              <p className="font-semibold text-[#59384F]">
                Preview Environment Notice — Backend Integration Required Before Launch
              </p>
              <p>
                This website preview runs without a connected production database. Submitting this
                form demonstrates full validation, draft editing, and the clinic’s moderation
                queue in your current browser session only—submissions are{' '}
                <strong>not permanently saved</strong> or automatically published until backend
                database storage and staff authentication are connected for launch.
              </p>
            </div>
          </div>

          {/* Review Form Card */}
          <div className="bg-white border border-[#E9B8CD]/45 p-7 sm:p-10 space-y-6">
            {submitSuccess && (
              <div
                role="status"
                className="bg-[#D9C9E8]/25 border border-[#59384F]/30 p-5 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#59384F] shrink-0 mt-0.5" />
                <div className="text-sm text-[#343039] space-y-1">
                  <p className="font-semibold text-[#59384F]">
                    Thank you — your review passed validation (Preview Session Only).
                  </p>
                  <p className="text-xs sm:text-sm text-[#343039]/80">
                    Your entry has been placed into the pending moderation preview below and has
                    not been permanently stored or auto-published. In production, authorized clinic
                    staff review submissions before any public display.
                  </p>
                </div>
              </div>
            )}

            {formError && (
              <div
                role="alert"
                className="bg-[#E9B8CD]/25 border border-[#59384F] p-4 flex items-start gap-3 text-sm text-[#59384F]"
              >
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <span>{formError}</span>
              </div>
            )}

            {isReviewingDraft ? (
              <div className="space-y-6">
                <div className="border-b border-[#E9B8CD]/35 pb-4">
                  <h3 className="font-editorial text-2xl text-[#59384F]">
                    Review &amp; Edit Your Feedback Before Submitting
                  </h3>
                  <p className="text-xs text-[#343039]/70 mt-1">
                    Please verify your details below. You may return to edit your text before final
                    submission.
                  </p>
                </div>

                <div className="bg-[#FFF9F7] border border-[#E9B8CD]/40 p-6 space-y-3 text-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-semibold text-[#59384F]">{patientName}</span>
                    <span className="text-[#C6A16B] font-medium tabular-nums">
                      {'★'.repeat(rating)}
                      {'☆'.repeat(5 - rating)} ({rating}/5)
                    </span>
                  </div>
                  {treatment && (
                    <p className="text-xs text-[#C985A4]">Treatment / Service: {treatment}</p>
                  )}
                  <p className="text-[#343039]/85 leading-relaxed whitespace-pre-line">
                    {reviewText}
                  </p>
                  {email && <p className="text-xs text-[#343039]/65">Email (private): {email}</p>}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={handleConfirmSubmit}
                    className="px-7 py-3.5 bg-[#59384F] text-white text-sm font-medium hover:bg-[#462b3e] transition-colors cursor-pointer"
                  >
                    Submit Review
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsReviewingDraft(false)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#C985A4]/50 text-[#59384F] text-sm font-medium hover:border-[#59384F] transition-colors cursor-pointer"
                  >
                    <Edit3 className="w-4 h-4" />
                    <span>Edit My Text</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handlePreviewClick} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="review-name"
                      className="block text-xs uppercase tracking-[0.15em] text-[#59384F] font-semibold"
                    >
                      Patient Name *
                    </label>
                    <input
                      id="review-name"
                      type="text"
                      required
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 bg-[#FFF9F7] border border-[#E9B8CD]/60 text-sm text-[#343039] focus:outline-none focus:border-[#59384F]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="review-treatment"
                      className="block text-xs uppercase tracking-[0.15em] text-[#59384F] font-semibold"
                    >
                      Treatment or Service (Optional)
                    </label>
                    <select
                      id="review-treatment"
                      value={treatment}
                      onChange={(e) => setTreatment(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FFF9F7] border border-[#E9B8CD]/60 text-sm text-[#343039] focus:outline-none focus:border-[#59384F]"
                    >
                      <option value="">Select a service (optional)</option>
                      <option value="Hydra Therapy / Hydra Facial">
                        Hydra Therapy / Hydra Facial
                      </option>
                      <option value="Laser Hair Removal">Laser Hair Removal</option>
                      <option value="Pigmentation Treatment">Pigmentation Treatment</option>
                      <option value="Microneedling">Microneedling</option>
                      <option value="Chemical Peel Treatment">Chemical Peel Treatment</option>
                      <option value="Acne & Acne Scar Treatment">
                        Acne &amp; Acne Scar Treatment
                      </option>
                      <option value="Skin Rejuvenation Treatment">
                        Skin Rejuvenation Treatment
                      </option>
                      <option value="Skincare Consultation">Skincare Consultation</option>
                      <option value="Other Clinic Visit">Other Clinic Visit</option>
                    </select>
                  </div>
                </div>

                {/* Star Rating Selector */}
                <div className="space-y-2">
                  <span className="block text-xs uppercase tracking-[0.15em] text-[#59384F] font-semibold">
                    Star Rating *
                  </span>
                  <div className="flex items-center gap-2" role="radiogroup" aria-label="Star rating">
                    {[1, 2, 3, 4, 5].map((starVal) => (
                      <button
                        key={starVal}
                        type="button"
                        onClick={() => setRating(starVal)}
                        aria-label={`${starVal} out of 5 stars`}
                        aria-pressed={rating === starVal}
                        className="p-2 border border-[#E9B8CD]/50 bg-[#FFF9F7] hover:border-[#C6A16B] transition-colors cursor-pointer"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            starVal <= rating
                              ? 'fill-[#C6A16B] text-[#C6A16B]'
                              : 'text-[#343039]/25'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs text-[#343039]/75 ml-2 tabular-nums">
                      {rating} / 5 Stars
                    </span>
                  </div>
                </div>

                {/* Written Review */}
                <div className="space-y-2">
                  <label
                    htmlFor="review-text"
                    className="block text-xs uppercase tracking-[0.15em] text-[#59384F] font-semibold"
                  >
                    Your Written Review *
                  </label>
                  <textarea
                    id="review-text"
                    required
                    rows={5}
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Share how your consultation, staff communication, and overall clinic visit felt..."
                    className="w-full px-4 py-3 bg-[#FFF9F7] border border-[#E9B8CD]/60 text-sm text-[#343039] focus:outline-none focus:border-[#59384F]"
                  />
                </div>

                {/* Optional Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="review-email"
                    className="block text-xs uppercase tracking-[0.15em] text-[#59384F] font-semibold"
                  >
                    Email Address (Optional — Kept Private)
                  </label>
                  <input
                    id="review-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-[#FFF9F7] border border-[#E9B8CD]/60 text-sm text-[#343039] focus:outline-none focus:border-[#59384F]"
                  />
                </div>

                {/* Consent & Privacy Notice */}
                <div className="space-y-3 pt-2">
                  <label className="flex items-start gap-3 cursor-pointer text-sm text-[#343039]/85">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 w-4 h-4 accent-[#59384F]"
                    />
                    <span>
                      I confirm this feedback reflects my genuine experience and I consent to
                      submitting it for review by Essence Aesthetics Clinic staff before any
                      publication.
                    </span>
                  </label>
                  <p className="text-xs text-[#343039]/65 leading-relaxed">
                    Privacy Notice: Optional email addresses are used solely if clinic staff need
                    to follow up on your feedback and are never displayed publicly.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#59384F] text-white text-sm font-medium hover:bg-[#462b3e] transition-colors cursor-pointer"
                  >
                    Review &amp; Submit Feedback
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Staff Moderation Architecture Preview */}
          <div className="bg-white border border-[#D9C9E8]/70 p-7 sm:p-8 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#59384F] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-editorial text-2xl text-[#59384F]">
                    Clinic Staff Review Moderation Structure (Preview)
                  </h3>
                  <p className="text-xs sm:text-sm text-[#343039]/75">
                    Demonstrates how authorized clinic staff will approve, format-edit without
                    altering meaning, reject, or remove reviews once backend authentication is
                    enabled.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowModerationPreview((prev) => !prev)}
                className="px-4 py-2 text-xs font-medium border border-[#59384F]/40 text-[#59384F] hover:border-[#59384F] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {showModerationPreview ? 'Hide Moderation Queue' : `View Queue (${sessionQueue.length})`}
              </button>
            </div>

            {showModerationPreview && (
              <div className="pt-4 border-t border-[#E9B8CD]/35 space-y-4">
                {sessionQueue.length === 0 ? (
                  <p className="text-sm text-[#343039]/70">
                    No preview submissions in this browser session yet. Submit the form above to
                    inspect the staff moderation controls.
                  </p>
                ) : (
                  sessionQueue.map((item) => (
                    <div
                      key={item.id}
                      className="bg-[#FFF9F7] border border-[#E9B8CD]/40 p-5 space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                        <span className="font-semibold text-[#59384F]">
                          {item.patientName} · {item.rating}/5 Stars · {item.treatment}
                        </span>
                        <span className="font-medium text-[#59384F]">
                          Status:{' '}
                          <span className="capitalize">{item.status}</span> · {item.submittedAt}
                        </span>
                      </div>

                      {editingModerationId === item.id ? (
                        <div className="space-y-3">
                          <textarea
                            rows={3}
                            value={editingText}
                            onChange={(e) => setEditingText(e.target.value)}
                            className="w-full p-3 bg-white border border-[#59384F]/40 text-sm"
                          />
                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={() => saveFormattingEdit(item.id)}
                              className="px-3.5 py-1.5 bg-[#59384F] text-white text-xs font-medium cursor-pointer"
                            >
                              Save Formatting Edit
                            </button>
                            <button
                              type="button"
                              onClick={() => setEditingModerationId(null)}
                              className="px-3.5 py-1.5 border border-[#C985A4]/50 text-xs text-[#59384F] cursor-pointer"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <p className="text-sm text-[#343039]/85 leading-relaxed">
                          {item.reviewText}
                        </p>
                      )}

                      {item.formattedNote && (
                        <p className="text-[11px] text-[#C985A4]">{item.formattedNote}</p>
                      )}

                      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#E9B8CD]/25">
                        <button
                          type="button"
                          onClick={() => updateModerationStatus(item.id, 'approved')}
                          className="px-3 py-1.5 bg-[#59384F] text-white text-xs font-medium cursor-pointer"
                        >
                          Approve
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setEditingModerationId(item.id);
                            setEditingText(item.reviewText);
                          }}
                          className="px-3 py-1.5 bg-white border border-[#E9B8CD] text-[#59384F] text-xs font-medium cursor-pointer"
                        >
                          Format Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => updateModerationStatus(item.id, 'rejected')}
                          className="px-3 py-1.5 bg-white border border-[#D9C9E8] text-[#59384F] text-xs font-medium cursor-pointer"
                        >
                          Reject
                        </button>
                        <button
                          type="button"
                          onClick={() => removeQueueItem(item.id)}
                          aria-label="Remove review from queue"
                          className="ml-auto inline-flex items-center gap-1 px-3 py-1.5 text-xs text-[#59384F]/75 hover:text-[#59384F] cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
