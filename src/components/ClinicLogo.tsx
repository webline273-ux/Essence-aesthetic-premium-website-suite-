import { CLINIC_INFO } from '../data/clinicData';

interface ClinicLogoProps {
  variant?: 'default' | 'light';
  showLocationSubtitle?: boolean;
  className?: string;
}

/**
 * Renders the Essence Aesthetics Clinic brand logo in its signature pink/lavender palette.
 * If a high-resolution original logo asset is configured in CLINIC_INFO.uploadedLogoPath,
 * it displays that exact image without distortion or recoloring.
 */
export function ClinicLogo({
  variant = 'default',
  showLocationSubtitle = false,
  className = '',
}: ClinicLogoProps) {
  const titleColor = variant === 'light' ? 'text-white' : 'text-[#59384F]';
  const subColor = variant === 'light' ? 'text-[#E9B8CD]' : 'text-[#C985A4]';

  if (CLINIC_INFO.uploadedLogoPath) {
    return (
      <span className={`inline-flex items-center gap-3 shrink-0 select-none ${className}`}>
        <img
          src={CLINIC_INFO.uploadedLogoPath}
          alt="Essence Aesthetics Clinic logo"
          className="h-11 w-11 object-contain rounded-xl shrink-0"
          referrerPolicy="no-referrer"
        />
        <span className="flex flex-col leading-none">
          <span
            className={`font-editorial text-[21px] sm:text-[23px] font-semibold tracking-[0.03em] whitespace-nowrap ${titleColor}`}
          >
            Essence
          </span>
          <span
            className={`text-[9.5px] font-medium uppercase tracking-[0.26em] mt-0.5 whitespace-nowrap ${subColor}`}
          >
            Aesthetics Clinic
          </span>
          {showLocationSubtitle && (
            <span className="text-[10px] text-[#343039]/70 mt-1 whitespace-nowrap">
              DHA Phase II · Islamabad
            </span>
          )}
        </span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-3 shrink-0 select-none ${className}`}>
      {/* Pink & Lavender Monogram Emblem */}
      <svg
        width="38"
        height="38"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="essencePinkLavender" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E9B8CD" />
            <stop offset="55%" stopColor="#C985A4" />
            <stop offset="100%" stopColor="#D9C9E8" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="18.5" fill="#FFF9F7" stroke="url(#essencePinkLavender)" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="15" stroke="#D9C9E8" strokeWidth="0.75" />
        <path
          d="M25.5 13.5C23.7 12.1 21.3 11.7 18.9 12.5C15.5 13.6 13.6 17.2 14.5 20.8C15.2 23.7 17.6 26.2 20.6 26.8C22.8 27.2 24.9 26.5 26.4 25.1"
          stroke="#59384F"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M16.2 19.8H23.6"
          stroke="#C985A4"
          strokeWidth="1.35"
          strokeLinecap="round"
        />
        <circle cx="26.5" cy="14" r="1.3" fill="#C6A16B" />
      </svg>

      <span className="flex flex-col leading-none">
        <span
          className={`font-editorial text-[21px] sm:text-[23px] font-semibold tracking-[0.03em] whitespace-nowrap ${titleColor}`}
        >
          Essence
        </span>
        <span
          className={`text-[9.5px] font-medium uppercase tracking-[0.26em] mt-0.5 whitespace-nowrap ${subColor}`}
        >
          Aesthetics Clinic
        </span>
        {showLocationSubtitle && (
          <span className="text-[10px] text-[#343039]/70 mt-1 whitespace-nowrap">
            DHA Phase II · Islamabad
          </span>
        )}
      </span>
    </span>
  );
}
