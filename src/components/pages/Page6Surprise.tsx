import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, PartyPopper, Flame, RotateCcw, Volume2, Award, Music } from 'lucide-react';
import { sound } from '../../utils/sound';
import { triggerFestiveConfetti, triggerStarBurst } from '../../utils/confetti';

interface PageProps {
  onRestart: () => void;
  onPrev: () => void;
}

export const Page6Surprise: React.FC<PageProps> = ({ onRestart, onPrev }) => {
  const [hasClickedSurprise, setHasClickedSurprise] = useState(false);
  const [burstCount, setBurstCount] = useState(0);

  const handleClickSurprise = () => {
    sound.playFireworksBurst();
    triggerFestiveConfetti();
    setHasClickedSurprise(true);
    setBurstCount((prev) => prev + 1);

    // Chain additional fireworks
    setTimeout(() => {
      triggerStarBurst(0.3, 0.4);
    }, 400);
    setTimeout(() => {
      triggerStarBurst(0.7, 0.4);
    }, 800);
  };

  const handlePlaySong = () => {
    sound.playHappyBirthdayTune();
    triggerStarBurst();
  };

  return (
    <div className="flex flex-col items-center space-y-4 px-2 py-1 text-center">
      {/* Top Badge */}
      <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100/90 border border-rose-300 text-rose-800 text-xs font-semibold shadow-xs">
        <PartyPopper className="w-3.5 h-3.5 text-rose-600 animate-bounce" />
        <span>PUNCAK KEJUTAN SPESIAL</span>
        <Sparkles className="w-3.5 h-3.5 text-yellow-500 animate-spin" style={{ animationDuration: '5s' }} />
      </div>

      {/* Hero Celebratory Dino with Cake 31 */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 180, damping: 14 }}
        className="relative mx-auto"
      >
        <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 bg-gradient-to-tr from-yellow-300 via-rose-300 to-amber-200 shadow-xl shadow-rose-200/60 relative overflow-hidden">
          <img
            src="/src/assets/images/dino_birthday_cake_1791339193716.jpg"
            alt="Dino Kuning Kue Ulang Tahun 31"
            className="w-full h-full object-cover rounded-full"
            loading="eager"
          />
        </div>

        <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-yellow-950 text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md flex items-center gap-1 animate-pulse">
          <span>🎂 Happy 31st!</span>
        </div>
      </motion.div>

      {/* Main Closing Words Required by User */}
      <div className="space-y-1">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-script text-3xl sm:text-4xl text-rose-600 font-bold tracking-wide"
        >
          You are the best person for me
        </motion.p>
        <p className="text-xs sm:text-sm text-slate-600 font-sans max-w-sm mx-auto">
          Terima kasih telah mewarnai setiap hari dalam hidupku dengan kehangatan dan kebahagiaan tanpa syarat.
        </p>
      </div>

      {/* Big High-Contrast CLICK Button as explicitly requested by user */}
      <motion.div
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.95 }}
        className="w-full max-w-xs pt-1"
      >
        <button
          onClick={handleClickSurprise}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-rose-500 to-pink-500 hover:from-amber-300 hover:to-rose-600 text-white font-extrabold text-lg sm:text-xl shadow-xl shadow-rose-500/35 active:shadow-md transition-all flex items-center justify-center gap-3 cursor-pointer border-2 border-white/60"
        >
          <span className="text-2xl animate-spin" style={{ animationDuration: '3s' }}>
            🎉
          </span>
          <span className="tracking-wider">CLICK! 🥳✨</span>
          <span className="text-2xl animate-bounce">🎇</span>
        </button>
        <p className="text-[11px] text-pink-500/80 mt-1 font-medium">
          Sentuh tombol untuk ledakan konfeti & kembang api perayaan!
        </p>
      </motion.div>

      {/* Surprise Celebration Banner & Salam Suami */}
      <AnimatePresence>
        {hasClickedSurprise && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="w-full max-w-md bg-gradient-to-br from-pink-50 via-white to-amber-50 rounded-3xl p-5 border-2 border-amber-300 shadow-xl space-y-3 text-left relative overflow-hidden"
          >
            <div className="flex items-center gap-2 border-b border-pink-200 pb-2">
              <span className="text-2xl">🎊</span>
              <div>
                <h3 className="font-serif font-bold text-base text-pink-900">
                  Surprise! Selamat Ulang Tahun Sayang!
                </h3>
                <p className="text-[11px] text-pink-600 font-medium">Doa terbaik selalu mengalir untukmu</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Semoga di usia yang ke-31 ini, semua impian indahmu dipermudah jalannya oleh Allah SWT. Tetaplah menjadi sosok yang lembut, tangguh, dan selalu ceria menemani setiap hembusan nafas ini.
            </p>

            {/* Required Salam: "SUAMI MU TERBAIK" */}
            <div className="pt-2 border-t border-pink-200/80 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-medium">
                  Salam Paling Hangat:
                </span>
                <span className="font-serif font-extrabold text-sm sm:text-base text-rose-700 tracking-wide">
                  SUAMI MU TERBAIK 👑
                </span>
              </div>

              {/* Romantic Stamp */}
              <div className="w-12 h-12 rounded-full border-2 border-dashed border-rose-400 bg-rose-50 flex flex-col items-center justify-center text-[8px] font-bold text-rose-600 rotate-12 shadow-xs">
                <span>OFFICIAL</span>
                <span>SEAL</span>
                <Heart className="w-2.5 h-2.5 fill-rose-500" />
              </div>
            </div>

            {/* Extra Fun Controls */}
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={handleClickSurprise}
                className="flex-1 py-2 px-3 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-950 font-bold text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer"
              >
                <span>🎇 Kembang Api ({burstCount})</span>
              </button>
              <button
                onClick={handlePlaySong}
                className="flex-1 py-2 px-3 rounded-xl bg-pink-100 hover:bg-pink-200 text-pink-900 font-bold text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer"
              >
                <Music className="w-3.5 h-3.5 text-pink-600" />
                <span>Melodi Musik 🎶</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Navigation: Back & Restart */}
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
          onClick={() => {
            sound.playPop();
            onRestart();
          }}
          className="flex-[2] py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5 text-yellow-300" />
          <span>Ulangi dari Awal 🔄</span>
        </button>
      </div>
    </div>
  );
};
