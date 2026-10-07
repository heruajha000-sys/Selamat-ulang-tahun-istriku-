/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'motion/react';
import { Volume2, VolumeX, Sparkles, Heart } from 'lucide-react';
import { BackgroundElements } from './components/BackgroundElements';
import { Page1Intro } from './components/pages/Page1Intro';
import { Page2Doa } from './components/pages/Page2Doa';
import { Page3InteractiveBoxes } from './components/pages/Page3InteractiveBoxes';
import { Page4EnergyBar } from './components/pages/Page4EnergyBar';
import { Page5Gallery } from './components/pages/Page5Gallery';
import { Page6Surprise } from './components/pages/Page6Surprise';
import { sound } from './utils/sound';
import { triggerStarBurst } from './utils/confetti';

const PAGE_NAMES = [
  { id: 1, label: 'Ucapan', icon: '🎉', short: 'Intro' },
  { id: 2, label: 'Untaian Doa', icon: '🌙', short: 'Doa' },
  { id: 3, label: 'Kotak Cinta', icon: '💌', short: 'Kejutan' },
  { id: 4, label: 'Level 31', icon: '⚡', short: 'XP Bar' },
  { id: 5, label: 'Galeri', icon: '📸', short: 'Foto' },
  { id: 6, label: 'Surprise', icon: '🥳', short: 'Penutup' },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [direction, setDirection] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const toggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    sound.isMuted = nextMuted;
    if (!nextMuted) {
      sound.playPop();
    }
  };

  const goToPage = (newPage: number) => {
    if (newPage === currentPage) return;
    sound.playPop();
    setDirection(newPage > currentPage ? 1 : -1);
    setCurrentPage(newPage);
  };

  const handleNext = () => {
    if (currentPage < 6) {
      goToPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const handleRestart = () => {
    sound.playPop();
    triggerStarBurst();
    setDirection(-1);
    setCurrentPage(1);
  };

  const pageVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 28 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.15 },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between bg-gradient-to-b from-[#FFF0F5] via-[#FFF5F8] to-[#FDF2F8] py-3 px-3 sm:px-6">
      <BackgroundElements />

      {/* Top Header Bar */}
      <header className="relative z-10 w-full max-w-lg mx-auto flex items-center justify-between py-1.5 px-2">
        {/* Brand Title */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-300 to-pink-300 flex items-center justify-center text-sm shadow-xs border border-white">
            🦖
          </div>
          <div>
            <h1 className="font-serif text-sm sm:text-base font-bold text-slate-900 leading-none">
              Istriku Tercinta
            </h1>
            <p className="text-[10px] text-pink-500 font-medium tracking-wide">
              Edisi Spesial Ulang Tahun ke-31
            </p>
          </div>
        </div>

        {/* Action Controls: Sound Toggle & Page Indicator */}
        <div className="flex items-center gap-2">
          <div className="bg-white/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-pink-200/70 text-[11px] font-mono font-semibold text-pink-700 shadow-xs">
            {currentPage} <span className="text-slate-400">/</span> 6
          </div>

          <button
            onClick={toggleSound}
            aria-label={isMuted ? 'Aktifkan Suara' : 'Bisukan Suara'}
            className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md border border-pink-200/70 flex items-center justify-center text-pink-700 hover:bg-pink-100 transition-colors shadow-xs active:scale-90"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-pink-600" />}
          </button>
        </div>
      </header>

      {/* Main Interactive Window / Popup Card */}
      <main className="relative z-10 w-full max-w-lg mx-auto my-auto py-2">
        <div className="relative rounded-3xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-2xl shadow-pink-300/25 overflow-hidden transition-all duration-300">
          {/* Window Chrome / Title Bar */}
          <div className="bg-gradient-to-r from-pink-100/90 via-pink-50/90 to-yellow-50/90 px-4 py-2.5 border-b border-pink-100 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block shadow-xs"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block shadow-xs"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block shadow-xs"></span>
            </div>

            <div className="flex items-center gap-1 text-xs font-semibold text-slate-700">
              <span className="text-xs">{PAGE_NAMES[currentPage - 1].icon}</span>
              <span className="font-serif">Jendela {currentPage}: {PAGE_NAMES[currentPage - 1].label}</span>
            </div>

            <div className="flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 fill-pink-400 text-pink-400 animate-pulse" />
            </div>
          </div>

          {/* Animated Page Content */}
          <div className="p-4 sm:p-6 min-h-[440px] flex flex-col justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              {currentPage === 1 && (
                <motion.div
                  key="page-1"
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full"
                >
                  <Page1Intro onNext={handleNext} />
                </motion.div>
              )}

              {currentPage === 2 && (
                <motion.div
                  key="page-2"
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full"
                >
                  <Page2Doa onNext={handleNext} onPrev={handlePrev} />
                </motion.div>
              )}

              {currentPage === 3 && (
                <motion.div
                  key="page-3"
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full"
                >
                  <Page3InteractiveBoxes onNext={handleNext} onPrev={handlePrev} />
                </motion.div>
              )}

              {currentPage === 4 && (
                <motion.div
                  key="page-4"
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full"
                >
                  <Page4EnergyBar onNext={handleNext} onPrev={handlePrev} />
                </motion.div>
              )}

              {currentPage === 5 && (
                <motion.div
                  key="page-5"
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full"
                >
                  <Page5Gallery onNext={handleNext} onPrev={handlePrev} />
                </motion.div>
              )}

              {currentPage === 6 && (
                <motion.div
                  key="page-6"
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full"
                >
                  <Page6Surprise onRestart={handleRestart} onPrev={handlePrev} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Ergonomic Mobile Thumb Navigation (Bottom Bar) */}
      <footer className="relative z-10 w-full max-w-lg mx-auto py-2">
        <nav
          aria-label="Navigasi Halaman Kartu"
          className="bg-white/85 backdrop-blur-md rounded-2xl p-1.5 border border-pink-200/70 shadow-lg shadow-pink-200/40 grid grid-cols-6 gap-1"
        >
          {PAGE_NAMES.map((page) => {
            const isActive = currentPage === page.id;
            return (
              <button
                key={page.id}
                onClick={() => goToPage(page.id)}
                className={`flex flex-col items-center justify-center py-1.5 px-0.5 rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-b from-pink-500 to-rose-500 text-white font-bold shadow-sm scale-102'
                    : 'text-slate-600 hover:bg-pink-50 hover:text-pink-600'
                }`}
              >
                <span className="text-sm leading-none">{page.icon}</span>
                <span className="text-[9px] font-medium tracking-tight mt-0.5 truncate w-full text-center">
                  {page.short}
                </span>
              </button>
            );
          })}
        </nav>
        <p className="text-[10px] text-center text-pink-400/80 mt-1.5 font-medium">
          Dibuat dengan segenap cinta & rindu untuk Istriku Tercinta 💛
        </p>
      </footer>
    </div>
  );
}
