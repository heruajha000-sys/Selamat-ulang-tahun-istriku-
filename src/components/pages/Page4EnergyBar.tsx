import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Zap, Sparkles, Flame, Shield, Heart, ArrowRight } from 'lucide-react';
import { sound } from '../../utils/sound';
import { triggerStarBurst, triggerFestiveConfetti } from '../../utils/confetti';

interface PageProps {
  onNext: () => void;
  onPrev: () => void;
}

export const Page4EnergyBar: React.FC<PageProps> = ({ onNext, onPrev }) => {
  const [progress, setProgress] = useState(0);
  const [boostCount, setBoostCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Auto charge bar on mount
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 2;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        setIsCompleted(true);
        sound.playLevelUp();
        triggerFestiveConfetti();
        clearInterval(interval);
      } else {
        setProgress(current);
      }
    }, 28);

    return () => clearInterval(interval);
  }, []);

  const handleSupercharge = () => {
    sound.playPop();
    triggerStarBurst();
    setBoostCount((prev) => prev + 1);
  };

  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    sound.playPop();
    const rect = e.currentTarget.getBoundingClientRect();
    triggerStarBurst(rect.left / window.innerWidth, rect.top / window.innerHeight);
    onNext();
  };

  return (
    <div className="flex flex-col items-center space-y-4 px-2 py-1 text-center">
      {/* Top Tag */}
      <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 text-xs font-bold tracking-wider uppercase shadow-xs">
        <Zap className="w-3.5 h-3.5 text-amber-600 fill-amber-500 animate-bounce" />
        <span>GAMIFIED LOVE XP BAR · LEVEL UP</span>
        <Zap className="w-3.5 h-3.5 text-amber-600 fill-amber-500 animate-bounce" />
      </div>

      {/* Main Title Required by Prompt */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="space-y-1"
      >
        <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-rose-500 to-pink-600 tracking-tight">
          SELAMAT ULANG TAHUN YANG KE 31
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-sans">
          Dino Kuning sedang mengisi penuh baterai kebahagiaan untukmu!
        </p>
      </motion.div>

      {/* Main Game Stat Container */}
      <div className="w-full max-w-md bg-white/95 backdrop-blur-md rounded-3xl p-5 border-2 border-yellow-300/80 shadow-xl space-y-4 text-left">
        {/* Header of the Bar */}
        <div className="flex items-center justify-between text-xs font-bold text-slate-700">
          <div className="flex items-center gap-1.5">
            <span className="text-lg">⚡</span>
            <span className="tracking-wide">ENERGY & LOVE BAR</span>
          </div>
          <div className="flex items-center gap-1">
            <span className={`font-mono text-base font-extrabold tabular-nums ${progress === 100 ? 'text-amber-600 animate-pulse' : 'text-slate-800'}`}>
              {progress}%
            </span>
            <span className="text-[10px] text-pink-500 font-semibold">
              {progress === 100 ? 'MAX' : 'CHARGING'}
            </span>
          </div>
        </div>

        {/* The Health/Energy Bar */}
        <div className="relative w-full h-8 bg-slate-100 rounded-full p-1 border-2 border-amber-200 overflow-hidden shadow-inner">
          <motion.div
            className={`h-full rounded-full transition-all duration-100 flex items-center justify-end pr-2 ${
              progress === 100
                ? 'bg-gradient-to-r from-yellow-400 via-amber-400 to-rose-400 animate-pulse shadow-lg shadow-amber-300/60'
                : 'bg-gradient-to-r from-yellow-300 to-amber-500'
            }`}
            style={{ width: `${progress}%` }}
          >
            {/* Sparkle icon at head of bar */}
            {progress > 10 && (
              <span className="text-white text-xs select-none animate-spin" style={{ animationDuration: '4s' }}>
                ✦
              </span>
            )}
          </motion.div>

          {/* Shimmer light across bar */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
        </div>

        {/* Required Bottom Text from prompt */}
        <div className="text-center pt-1">
          <motion.p
            animate={progress === 100 ? { scale: [1, 1.04, 1] } : {}}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="font-serif font-bold text-sm sm:text-base text-amber-900 bg-amber-50/80 border border-amber-200/90 py-2 px-4 rounded-xl shadow-xs"
          >
            MAXIMUM CHARGED! Go conquer the world! 🚀
          </motion.p>
        </div>

        {/* Fun RPG Game Stats Grid */}
        <div className="grid grid-cols-3 gap-2 pt-1 text-center">
          <div className="bg-pink-50/80 p-2 rounded-xl border border-pink-100">
            <span className="text-[10px] text-slate-500 block font-medium">Wisdom Level</span>
            <span className="font-mono font-bold text-xs text-pink-700">31 (Master)</span>
          </div>
          <div className="bg-yellow-50/80 p-2 rounded-xl border border-yellow-100">
            <span className="text-[10px] text-slate-500 block font-medium">Beauty Aura</span>
            <span className="font-mono font-bold text-xs text-amber-700">9999+ (Max)</span>
          </div>
          <div className="bg-rose-50/80 p-2 rounded-xl border border-rose-100">
            <span className="text-[10px] text-slate-500 block font-medium">Cinta Suami</span>
            <span className="font-mono font-bold text-xs text-rose-700">∞ Infinite</span>
          </div>
        </div>

        {/* Interactive Tap to Supercharge button */}
        <div className="pt-1">
          <button
            onClick={handleSupercharge}
            className="w-full py-2 px-3 rounded-xl bg-amber-100/90 hover:bg-amber-200/90 border border-amber-300 text-amber-950 text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-600" />
            <span>Sentuh untuk Overcharge Tenaga (+{boostCount} Boost!) ⚡</span>
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="pt-2 w-full max-w-xs flex items-center gap-2">
        <button
          onClick={() => {
            sound.playPop();
            onPrev();
          }}
          className="flex-1 py-2.5 px-3 rounded-xl bg-white/90 border border-pink-200 text-slate-600 font-medium text-xs sm:text-sm hover:bg-pink-50 active:scale-95 transition-all shadow-xs"
        >
          👈🏻 Kembali
        </button>

        <button
          onClick={handleNextClick}
          className="flex-[2] py-2.5 px-4 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-pink-500/25 active:scale-95 hover:shadow-lg transition-all flex items-center justify-center gap-1.5"
        >
          <span>Gallery Kenangan 💌</span>
        </button>
      </div>
    </div>
  );
};
