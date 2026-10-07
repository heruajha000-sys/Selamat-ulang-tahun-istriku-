import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Moon, Sun, ArrowRight, Heart } from 'lucide-react';
import { sound } from '../../utils/sound';
import { triggerStarBurst } from '../../utils/confetti';

interface PageProps {
  onNext: () => void;
  onPrev: () => void;
}

export const Page2Doa: React.FC<PageProps> = ({ onNext, onPrev }) => {
  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    sound.playPop();
    const rect = e.currentTarget.getBoundingClientRect();
    triggerStarBurst(rect.left / window.innerWidth, rect.top / window.innerHeight);
    onNext();
  };

  const handlePrevClick = () => {
    sound.playPop();
    onPrev();
  };

  return (
    <div className="flex flex-col items-center space-y-4 px-2 py-1 text-center">
      {/* Top Banner Tag */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100/80 border border-pink-200 text-pink-700 text-xs font-semibold tracking-wide"
      >
        <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
        <span>this is special day for YOU .</span>
        <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
      </motion.div>

      {/* Romantic Dino Couple Illustration */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 180, damping: 14 }}
        className="relative mx-auto my-1"
      >
        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-tr from-pink-300 via-yellow-200 to-white shadow-lg shadow-pink-200/50 relative overflow-hidden">
          <img
            src="/src/assets/images/dino_romantic_love_1791339180437.jpg"
            alt="Dino Romantis Berdua"
            className="w-full h-full object-cover rounded-full"
            loading="eager"
          />
        </div>
        <div className="absolute -bottom-2 right-1 bg-amber-400 text-amber-950 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md flex items-center gap-1">
          <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
          <span>Pelukan Hangat</span>
        </div>
      </motion.div>

      {/* Main Elegant Header */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="font-serif text-xl sm:text-2xl font-bold text-slate-800 tracking-tight"
      >
        Untaian Doa Terbaik Untuk Istriku
      </motion.h2>

      {/* Elegant Letter with Ornament Corners & Warm Styling */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.25 }}
        className="relative bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-pink-100 shadow-md max-w-lg text-left"
      >
        {/* Subtle Luxury Corner Accents */}
        <div className="absolute top-2 left-2 text-[10px] text-yellow-500/70 select-none">✦</div>
        <div className="absolute top-2 right-2 text-[10px] text-pink-400/70 select-none">✦</div>
        <div className="absolute bottom-2 left-2 text-[10px] text-pink-400/70 select-none">✦</div>
        <div className="absolute bottom-2 right-2 text-[10px] text-yellow-500/70 select-none">✦</div>

        <div className="space-y-3 text-xs sm:text-sm font-sans leading-relaxed text-slate-700">
          <p className="font-serif text-pink-900 font-semibold italic text-sm sm:text-base border-b border-pink-100 pb-2">
            &ldquo;Selamat ulang tahun, istriku tercinta.&rdquo;
          </p>

          <p>
            Semoga Allah SWT senantiasa melimpahkan kesehatan, kebahagiaan, dan keberkahan dalam setiap langkahmu. Semoga usiamu yang bertambah membawa semakin banyak kebaikan dan keberkahan dalam hidup.
          </p>

          <p className="bg-pink-50/70 p-3 rounded-xl border border-pink-100/70 text-slate-800 italic leading-relaxed">
            &ldquo;Apapun yang sedang dituju dan di manapun keberadaanmu, setiap doa terbaik akan selalu dilangitkan untukmu. Semoga sang pencipta senantiasa memeluk setiap langkah yang ditempuh dengan penjagaan ridha-Nya. Sampai kelak semesta mengizinkan doa-doa yang melangit itu turun membumi, menjelma menjadi ruang paling teduh untuk meredam segala lelah.&rdquo;
          </p>
        </div>

        {/* Romantic Icons Footer */}
        <div className="mt-4 pt-2.5 border-t border-pink-100 flex items-center justify-between text-xs text-pink-600 font-medium">
          <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
            <span className="text-yellow-500">🌙</span> Bersamamu Selamanya
          </span>
          <span className="font-script text-lg text-pink-600 font-semibold">
            With Endless Love
          </span>
        </div>
      </motion.div>

      {/* Navigation Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="pt-2 w-full max-w-xs flex items-center gap-2"
      >
        <button
          onClick={handlePrevClick}
          className="flex-1 py-2.5 px-3 rounded-xl bg-white/90 border border-pink-200 text-slate-600 font-medium text-xs sm:text-sm hover:bg-pink-50 active:scale-95 transition-all shadow-xs"
        >
          👈🏻 Kembali
        </button>

        <button
          onClick={handleNextClick}
          className="flex-[2] py-2.5 px-4 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-pink-500/25 active:scale-95 hover:shadow-lg transition-all flex items-center justify-center gap-1.5"
        >
          <span>press again 💕</span>
          <span>📝next page</span>
        </button>
      </motion.div>
    </div>
  );
};
