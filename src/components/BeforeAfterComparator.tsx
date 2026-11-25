import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Columns2, Info, MoveHorizontal, SlidersHorizontal } from 'lucide-react';
import { ComparisonPair } from '../data/clinicData';

interface BeforeAfterComparatorProps {
  pairs: ComparisonPair[];
  showCategoryFilter?: boolean;
  initialCategory?: string;
}

type ComparisonMode = 'slider' | 'side-by-side';

function ComparisonPlate({
  variant,
  label,
  treatmentName,
}: {
  variant: 'before' | 'after';
  label: string;
  treatmentName: string;
}) {
  const isBefore = variant === 'before';

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between p-6 sm:p-8 select-none overflow-hidden ${
        isBefore
          ? 'bg-gradient-to-br from-[#F4EEF2] via-[#ECE3E9] to-[#E2D5DF]'
          : 'bg-gradient-to-br from-[#FFF9F7] via-[#F7E3EC] to-[#E8DCF3]'
      }`}
    >
      <div
        className={`relative mx-auto my-auto w-44 h-56 sm:w-56 sm:h-68 rounded-t-full border flex flex-col items-center justify-center text-center px-5 ${
          isBefore
            ? 'border-[#59384F]/25 bg-white/45'
            : 'border-[#C985A4]/45 bg-white/75 shadow-sm'
        }`}
      >
        <p className="font-editorial text-2xl sm:text-3xl text-[#59384F] font-medium">
          {label}
        </p>
        <div className="w-8 h-px bg-[#C6A16B] my-3" />
        <p className="text-xs text-[#343039]/80 leading-relaxed">{treatmentName}</p>
      </div>
    </div>
  );
}

function InteractiveSliderCard({ pair }: { pair: ComparisonPair }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width <= 0) return;
    const raw = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(2, Math.min(98, raw)));
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      e.currentTarget.releasePointerCapture(e.pointerId);
      setIsDragging(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPos((p) => Math.max(2, p - 4));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPos((p) => Math.min(98, p + 4));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSliderPos(5);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSliderPos(95);
    }
  };

  const hasImages = Boolean(pair.beforeImage && pair.afterImage && !pair.isDemoPlaceholder);

  return (
    <div className="bg-white border border-[#E9B8CD]/45 overflow-hidden">
      <div
        ref={containerRef}
        role="slider"
        tabIndex={0}
        aria-label={`Before and after comparison slider for ${pair.title}. Drag horizontally or use arrow keys.`}
        aria-valuemin={2}
        aria-valuemax={98}
        aria-valuenow={Math.round(sliderPos)}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
        className="relative w-full aspect-[4/3] cursor-ew-resize touch-none select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#59384F] bg-[#FFF9F7]"
      >
        {/* Right Layer: AFTER */}
        <div className="absolute inset-0">
          {hasImages ? (
            <img
              src={pair.afterImage}
              alt={`${pair.treatmentCategory} — ${pair.afterLabel} illustrative preview`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              draggable={false}
            />
          ) : (
            <ComparisonPlate
              variant="after"
              label={pair.afterLabel}
              treatmentName={pair.treatmentCategory}
            />
          )}
        </div>

        {/* Left Clipped Layer: BEFORE */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          {hasImages ? (
            <img
              src={pair.beforeImage}
              alt={`${pair.treatmentCategory} — ${pair.beforeLabel} illustrative preview`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              draggable={false}
            />
          ) : (
            <ComparisonPlate
              variant="before"
              label={pair.beforeLabel}
              treatmentName={pair.treatmentCategory}
            />
          )}
        </div>

        {/* Clear BEFORE and AFTER Labels */}
        <span className="absolute top-4 left-4 z-10 bg-white/95 text-[#59384F] text-xs font-semibold tracking-[0.14em] px-3.5 py-1.5 border border-[#E9B8CD]/50 pointer-events-none">
          {pair.beforeLabel}
        </span>
        <span className="absolute top-4 right-4 z-10 bg-[#59384F]/95 text-white text-xs font-semibold tracking-[0.14em] px-3.5 py-1.5 pointer-events-none">
          {pair.afterLabel}
        </span>

        {/* Vertical Draggable Divider & Handle */}
        <div
          aria-hidden="true"
          className="absolute top-0 bottom-0 z-20 w-0.5 bg-white shadow-[0_0_0_1px_rgba(89,56,79,0.5)] pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border-2 border-[#59384F] shadow-lg flex items-center justify-center text-[#59384F]">
            <MoveHorizontal className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Caption & Ethical Notice Footer */}
      <div className="p-6 sm:p-7 border-t border-[#E9B8CD]/30 bg-[#FFF9F7]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#C985A4] font-medium">
            <span>{pair.treatmentCategory}</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1 text-[#59384F]">
              <Info className="w-3.5 h-3.5 text-[#C985A4]" />
              <span>{pair.illustrativeNotice}</span>
            </span>
          </div>
          <h3 className="font-editorial text-2xl text-[#59384F]">{pair.title}</h3>
          <p className="text-xs sm:text-sm text-[#343039]/75">{pair.disclaimer}</p>
        </div>
        <div className="text-xs text-[#59384F] shrink-0 tabular-nums border border-[#D9C9E8] bg-white px-3.5 py-2 self-start sm:self-center">
          Drag Slider: {Math.round(sliderPos)}%
        </div>
      </div>
    </div>
  );
}

function SideBySideCard({ pair }: { pair: ComparisonPair }) {
  const hasImages = Boolean(pair.beforeImage && pair.afterImage && !pair.isDemoPlaceholder);

  return (
    <div className="bg-white border border-[#E9B8CD]/45 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E9B8CD]/35">
        {/* Before Side */}
        <div className="relative aspect-[4/3] bg-[#FFF9F7]">
          {hasImages ? (
            <img
              src={pair.beforeImage}
              alt={`${pair.treatmentCategory} — ${pair.beforeLabel} illustrative preview`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <ComparisonPlate
              variant="before"
              label={pair.beforeLabel}
              treatmentName={pair.treatmentCategory}
            />
          )}
          <span className="absolute top-4 left-4 bg-white/95 text-[#59384F] text-xs font-semibold tracking-[0.14em] px-3.5 py-1.5 border border-[#E9B8CD]/50">
            {pair.beforeLabel}
          </span>
        </div>

        {/* After Side */}
        <div className="relative aspect-[4/3] bg-[#FFF9F7]">
          {hasImages ? (
            <img
              src={pair.afterImage}
              alt={`${pair.treatmentCategory} — ${pair.afterLabel} illustrative preview`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <ComparisonPlate
              variant="after"
              label={pair.afterLabel}
              treatmentName={pair.treatmentCategory}
            />
          )}
          <span className="absolute top-4 left-4 bg-[#59384F]/95 text-white text-xs font-semibold tracking-[0.14em] px-3.5 py-1.5">
            {pair.afterLabel}
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-7 border-t border-[#E9B8CD]/30 bg-[#FFF9F7]/70 space-y-1.5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#C985A4] font-medium">
          <span>{pair.treatmentCategory}</span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1 text-[#59384F]">
            <Info className="w-3.5 h-3.5 text-[#C985A4]" />
            <span>{pair.illustrativeNotice}</span>
          </span>
        </div>
        <h3 className="font-editorial text-2xl text-[#59384F]">{pair.title}</h3>
        <p className="text-xs sm:text-sm text-[#343039]/75">{pair.disclaimer}</p>
      </div>
    </div>
  );
}

export function BeforeAfterComparator({
  pairs,
  showCategoryFilter = true,
  initialCategory = 'All Treatments',
}: BeforeAfterComparatorProps) {
  const [mode, setMode] = useState<ComparisonMode>('slider');
  const [category, setCategory] = useState<string>(initialCategory);

  useEffect(() => {
    setCategory(initialCategory);
  }, [initialCategory]);

  const categories = ['All Treatments', ...Array.from(new Set(pairs.map((p) => p.treatmentCategory)))];

  const filteredPairs =
    category === 'All Treatments'
      ? pairs
      : pairs.filter((item) => item.treatmentCategory === category);

  return (
    <div className="space-y-8">
      {/* Control Toolbar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-[#E9B8CD]/35">
        {showCategoryFilter ? (
          <div
            className="flex flex-wrap items-center gap-2"
            role="group"
            aria-label="Filter comparisons by treatment"
          >
            {categories.map((cat) => {
              const active = category === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer border ${
                    active
                      ? 'bg-[#59384F] text-white border-[#59384F]'
                      : 'bg-white text-[#59384F] border-[#E9B8CD]/50 hover:border-[#C985A4]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#59384F]/85">
            <Info className="w-4 h-4 text-[#C985A4] shrink-0" />
            <span>{pairs[0]?.illustrativeNotice || 'Illustrative Preview — Actual patient results may vary.'}</span>
          </div>
        )}

        {/* Mode Switcher */}
        <div
          className="inline-flex items-center bg-[#D9C9E8]/25 p-1 border border-[#D9C9E8]/60 self-start lg:self-auto shrink-0"
          role="group"
          aria-label="Comparison view mode"
        >
          <button
            type="button"
            onClick={() => setMode('side-by-side')}
            aria-pressed={mode === 'side-by-side'}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              mode === 'side-by-side'
                ? 'bg-[#59384F] text-white shadow-sm'
                : 'text-[#59384F] hover:bg-white/60'
            }`}
          >
            <Columns2 className="w-4 h-4" />
            <span>Side-by-Side</span>
          </button>
          <button
            type="button"
            onClick={() => setMode('slider')}
            aria-pressed={mode === 'slider'}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              mode === 'slider'
                ? 'bg-[#59384F] text-white shadow-sm'
                : 'text-[#59384F] hover:bg-white/60'
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Slider View</span>
          </button>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="space-y-10">
        {filteredPairs.map((pair) =>
          mode === 'slider' ? (
            <InteractiveSliderCard key={pair.id} pair={pair} />
          ) : (
            <SideBySideCard key={pair.id} pair={pair} />
          )
        )}
      </div>
    </div>
  );
}
