import React from 'react';

export const BackgroundElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft gradient aura */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-yellow-200/35 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-rose-200/35 rounded-full blur-3xl" />

      {/* Floating subtle sparkles and stars */}
      <div className="absolute top-[12%] left-[8%] animate-pulse-subtle opacity-60">
        <span className="text-yellow-400 text-xl select-none">✦</span>
      </div>
      <div className="absolute top-[20%] right-[10%] animate-sparkle opacity-75">
        <span className="text-amber-300 text-2xl select-none">★</span>
      </div>
      <div className="absolute top-[45%] left-[5%] animate-float opacity-50">
        <span className="text-pink-300 text-lg select-none">💖</span>
      </div>
      <div className="absolute top-[60%] right-[8%] animate-float opacity-60">
        <span className="text-yellow-400 text-sm select-none">✨</span>
      </div>
      <div className="absolute bottom-[18%] left-[12%] animate-sparkle opacity-50">
        <span className="text-amber-400 text-lg select-none">🌙</span>
      </div>
      <div className="absolute bottom-[10%] right-[15%] animate-pulse-subtle opacity-50">
        <span className="text-yellow-400 text-base select-none">💛</span>
      </div>
    </div>
  );
};
