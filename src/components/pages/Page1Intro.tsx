import React from 'react';
import { Sparkles, Heart, Star, Cake, PartyPopper } from 'lucide-react';
import { motion } from 'motion/react';
import { sound } from '../../utils/sound';
import { triggerStarBurst } from '../../utils/confetti';

interface PageProps {
  onNext: () => void;
}

export const Page1Intro: React.FC<PageProps> = ({ onNext }) => {
  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    sound.playPop();
    const rect = e.currentTarget.getBoundingClientRect();
    triggerStarBurst(rect.left / window.innerWidth, rect.top / window.innerHeight);
    onNext();
  };

  return (
    <div className="flex flex-col items-center text-center space-y-5 px-3 py-2">
      {/* Top Little Ornaments */}
      <div className="flex items-center justify-center space-x-2 text-xs tracking-widest text-pink-500 font-semibold uppercase">
        <Sparkles className="w-3.5 h-3.5 text-yellow-500 animate-spin" style={{ animationDuration: '6s' }} />
        <span className="bg-white/80 px-3 py-1 rounded-full shadow-xs border border-pink-200/60">
          Spesial Untuk Bidadari Hatiku
        </span>
        <Sparkles className="w-3.5 h-3.5 text-yellow-500 animate-spin" style={{ animationDuration: '6s' }} />
      </div>

      {/* Main Hero Yellow Dino Graphic */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="relative mx-auto"
      >
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full p-1.5 bg-gradient-to-tr from-yellow-300 via-pink-300 to-white shadow-xl shadow-pink-200/60">
          <img
            src="/src/assets/images/dino_cute_hero_1791339164316.jpg"
            alt="Dino Kuning Ulang Tahun"
            className="w-full h-full object-cover rounded-full"
            loading="eager"
          />
          {/* Cute Floating Badges */}
          <div className="absolute -top-2 -right-1 bg-yellow-400 text-yellow-950 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 animate-bounce">
            <Cake className="w-3 h-3 text-yellow-900" />
            <span>Dino Sayang Istri</span>
          </div>

          <div className="absolute -bottom-1 -left-1 bg-white/95 text-pink-600 text-[10px] font-semibold px-2.5 py-0.5 rounded-full shadow-md border border-pink-200 flex items-center gap-1">
            <Heart className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span>Istri Tercinta</span>
          </div>
        </div>

        {/* Delicate floating sparks around dino */}
        <span className="absolute -top-2 left-2 text-yellow-400 text-lg animate-sparkle">✨</span>
        <span className="absolute top-1/2 -right-4 text-pink-400 text-base animate-float">💛</span>
        <span className="absolute -bottom-2 right-4 text-amber-300 text-sm animate-pulse-subtle">⭐</span>
      </motion.div>

      {/* Bouncy Main Title */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15, type: 'spring', stiffness: 120 }}
        className="space-y-2"
      >
        <h1 className="font-serif text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 leading-tight tracking-tight">
          🎉 HAPPY BIRTHDAY ISTRIKU TERCINTA!! 🎉
        </h1>

        <div className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-pink-700 bg-pink-100/70 border border-pink-200/80 px-3.5 py-1 rounded-full shadow-xs">
          <span>SELAMAT ULANG TAHUN ISTRIKU</span>
          <span className="text-base">😻🎉🎉</span>
        </div>
      </motion.div>

      {/* Heartwarming Opening Letter */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-pink-100 shadow-md text-slate-700 max-w-lg mx-auto text-left"
      >
        {/* Subtle decorative quotation & flowers */}
        <div className="flex items-center justify-between text-xs text-pink-400 mb-2 border-b border-pink-100/80 pb-1.5 font-medium">
          <span className="flex items-center gap-1">
            <span className="text-yellow-500">🌸</span> Dari Suami Kesayanganmu
          </span>
          <span className="flex items-center gap-1 text-[11px] text-pink-400">
            <span>Special Day</span>
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 inline" />
          </span>
        </div>

        <p className="text-xs sm:text-sm leading-relaxed text-slate-700 font-sans italic text-center sm:text-left">
          &ldquo;Selamat Ulang Tahun yaa sayanggg semoga apa yang dicita citakan tercapai dan selalu diperlancar rezekinya di berkahkkan segala urusan dunia dan akhirat dan yang paling pentingggg rasa sayang sama suamimu makin bertambahh yaaa sayanggg hehehe 🥰&rdquo;
        </p>

        {/* Delicate tiny ornaments in card footer */}
        <div className="mt-3 pt-2 border-t border-pink-100/60 flex items-center justify-center gap-3 text-xs text-pink-500/80 font-medium">
          <span className="inline-flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
            Dreamy
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
            Classy
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
            Forever Love
          </span>
        </div>
      </motion.div>

      {/* Primary Warm CTA Button */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="pt-2 w-full max-w-xs"
      >
        <button
          onClick={handleNextClick}
          className="w-full group relative overflow-hidden rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white font-semibold text-sm sm:text-base py-3 px-6 shadow-lg shadow-pink-500/25 active:scale-95 hover:shadow-xl hover:shadow-pink-500/35 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <span className="relative z-10 flex items-center gap-1.5">
            <span>press me!</span>
            <span className="text-yellow-200">✨</span>
            <span className="font-bold">next👉🏻</span>
          </span>
          {/* Subtle light sheen highlight */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform" />
        </button>
        <p className="text-[11px] text-pink-400/80 mt-1.5 font-medium">Sentuh untuk membuka lembar doa selanjutnya 💕</p>
      </motion.div>
    </div>
  );
};
