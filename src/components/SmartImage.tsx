import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface SmartImageProps {
  src?: string;
  alt: string;
  className?: string;
  aspectClassName?: string;
  fallbackLabel?: string;
  loading?: 'lazy' | 'eager';
}

export function SmartImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  aspectClassName = '',
  fallbackLabel,
  loading = 'lazy',
}: SmartImageProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#FFF9F7] via-[#E9B8CD]/25 to-[#D9C9E8]/35 border border-[#C985A4]/20 text-center p-6 ${aspectClassName} ${className}`}
        role="img"
        aria-label={alt}
      >
        <Sparkles className="w-6 h-6 text-[#C985A4] mb-2" strokeWidth={1.5} />
        <p className="font-editorial text-lg text-[#59384F] font-medium">
          {fallbackLabel || 'Essence Aesthetics Clinic'}
        </p>
        <p className="text-xs text-[#343039]/70 mt-1 max-w-xs">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
