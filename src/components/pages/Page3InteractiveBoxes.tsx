import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, Gift, Mail, Laugh, X, CheckCircle, ArrowRight } from 'lucide-react';
import { sound } from '../../utils/sound';
import { triggerFestiveConfetti, triggerStarBurst } from '../../utils/confetti';

interface PageProps {
  onNext: () => void;
  onPrev: () => void;
}

interface MiniModalData {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  accent: string;
}

export const Page3InteractiveBoxes: React.FC<PageProps> = ({ onNext, onPrev }) => {
  const [activeMiniPage, setActiveMiniPage] = useState<string | null>(null);
  const [claimedCoupons, setClaimedCoupons] = useState<number[]>([]);

  const openMini = (id: string) => {
    sound.playLoveChime();
    triggerStarBurst();
    setActiveMiniPage(id);
  };

  const closeMini = () => {
    sound.playPop();
    setActiveMiniPage(null);
  };

  const claimCoupon = (idx: number) => {
    sound.playLevelUp();
    triggerFestiveConfetti();
    if (!claimedCoupons.includes(idx)) {
      setClaimedCoupons([...claimedCoupons, idx]);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 px-2 py-1 text-center">
      {/* Top Banner */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-100/90 border border-yellow-300 text-yellow-900 text-xs font-semibold shadow-xs">
        <Sparkles className="w-3.5 h-3.5 text-yellow-600" />
        <span>Sentuh Kotak Cinta di Bawah 👇</span>
        <Sparkles className="w-3.5 h-3.5 text-yellow-600" />
      </div>

      <h2 className="font-serif text-2xl font-bold text-slate-800">
        3 Kejutan Mini Spesial
      </h2>
      <p className="text-xs text-slate-600 max-w-sm font-sans">
        Pilih dan buka setiap kotak untuk membaca pesan tersembunyi yang disiapkan khusus hari ini!
      </p>

      {/* 3 Interactive Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg mt-2">
        {/* Box 1: Surat Rahasia */}
        <motion.button
          whileHover={{ scale: 1.03, y: -3 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => openMini('letter')}
          className="relative bg-white/95 rounded-2xl p-4 border-2 border-pink-200/80 shadow-md text-left flex flex-col items-center text-center group cursor-pointer transition-colors hover:border-pink-400"
        >
          <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 mb-2 group-hover:scale-110 transition-transform shadow-xs">
            <Mail className="w-6 h-6" />
          </div>
          <span className="font-serif font-bold text-sm text-pink-900">
            Surat Rahasia
          </span>
          <span className="text-[11px] text-slate-500 mt-0.5">
            Dari lubuk hatiku yang terdalam 💌
          </span>
          <span className="mt-2 text-[10px] font-semibold text-pink-600 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-200">
            Buka Surat ✨
          </span>
        </motion.button>

        {/* Box 2: Fakta Dino Sayang Istri */}
        <motion.button
          whileHover={{ scale: 1.03, y: -3 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => openMini('dino')}
          className="relative bg-white/95 rounded-2xl p-4 border-2 border-yellow-200/90 shadow-md text-left flex flex-col items-center text-center group cursor-pointer transition-colors hover:border-yellow-400"
        >
          <div className="w-12 h-12 rounded-2xl bg-yellow-100 flex items-center justify-center text-yellow-700 mb-2 group-hover:scale-110 transition-transform shadow-xs">
            <span className="text-2xl">🦖</span>
          </div>
          <span className="font-serif font-bold text-sm text-yellow-950">
            Fakta Dino Lucu
          </span>
          <span className="text-[11px] text-slate-500 mt-0.5">
            5 alasan dino selalu bucin padamu 💛
          </span>
          <span className="mt-2 text-[10px] font-semibold text-yellow-800 bg-yellow-50 px-2 py-0.5 rounded-full border border-yellow-200">
            Intip Fakta 👀
          </span>
        </motion.button>

        {/* Box 3: Kupon Cinta */}
        <motion.button
          whileHover={{ scale: 1.03, y: -3 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => openMini('coupon')}
          className="relative bg-white/95 rounded-2xl p-4 border-2 border-rose-200/80 shadow-md text-left flex flex-col items-center text-center group cursor-pointer transition-colors hover:border-rose-400"
        >
          <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-600 mb-2 group-hover:scale-110 transition-transform shadow-xs">
            <Gift className="w-6 h-6" />
          </div>
          <span className="font-serif font-bold text-sm text-rose-900">
            Kupon Cinta
          </span>
          <span className="text-[11px] text-slate-500 mt-0.5">
            3 Voucher spesial berlaku seumur hidup 🎫
          </span>
          <span className="mt-2 text-[10px] font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
            Klaim Hadiah 🎁
          </span>
        </motion.button>
      </div>

      {/* Navigation Buttons */}
      <div className="pt-4 w-full max-w-xs flex items-center gap-2">
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
            triggerStarBurst();
            onNext();
          }}
          className="flex-[2] py-2.5 px-4 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-pink-500/25 active:scale-95 hover:shadow-lg transition-all flex items-center justify-center gap-1.5"
        >
          <span>Lanjut ke Energy Bar 🚀</span>
        </button>
      </div>

      {/* Mini Page Modals with AnimatePresence */}
      <AnimatePresence>
        {activeMiniPage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 15 }}
              transition={{ type: 'spring', damping: 20, stiffness: 260 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border-2 border-pink-200 text-left max-h-[85vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={closeMini}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-pink-100 text-slate-500 hover:text-pink-600 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal 1: Surat Rahasia */}
              {activeMiniPage === 'letter' && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="p-2 bg-pink-100 rounded-xl text-pink-600">💌</span>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-slate-800">
                        Surat Kecil dari Lubuk Hati
                      </h3>
                      <p className="text-xs text-pink-500 font-medium">Bidadari paling sabar & tercantik</p>
                    </div>
                  </div>

                  <div className="p-4 bg-pink-50/70 rounded-2xl border border-pink-100 space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                    <p>
                      Terima kasih sudah selalu menjadi rumah paling nyaman untuk pulang, pendengar paling setia saat lelah, dan penyemangat terbesar di setiap langkah.
                    </p>
                    <p>
                      Melihat senyummu setiap hari adalah kebahagiaan paling sederhana tapi paling berharga yang selalu kusyukuri kepada Allah.
                    </p>
                    <p className="italic font-serif text-pink-800 pt-1 border-t border-pink-200/60">
                      &ldquo;Apapun yang terjadi, tangan ini akan selalu siap menggenggammu erat, menemani setiap mimpi sampai terwujud.&rdquo;
                    </p>
                  </div>

                  <button
                    onClick={closeMini}
                    className="w-full py-2.5 rounded-xl bg-pink-600 text-white font-semibold text-xs sm:text-sm shadow-sm hover:bg-pink-700 transition-colors"
                  >
                    Tutup Surat & Peluk Hangat 🤗
                  </button>
                </div>
              )}

              {/* Modal 2: Fakta Lucu Dino */}
              {activeMiniPage === 'dino' && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="p-2 bg-yellow-100 rounded-xl text-2xl">🦖</span>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-yellow-950">
                        5 Fakta Kenapa Dino Bucin Banget
                      </h3>
                      <p className="text-xs text-yellow-700 font-medium">Pengakuan jujur dari sang suami</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {[
                      { num: '1', title: 'Senyum Istri = 100% Recharge', desc: 'Kalau istri senyum, semua capek kerjaan langsung lunas lenyap!' },
                      { num: '2', title: 'Koki Terfavorit di Dunia', desc: 'Masakan istri, sekecil apapun, rasanya selalu bintang lima di lidah dino.' },
                      { num: '3', title: 'Paling Gemas Saat Manja', desc: 'Mode cerewet atau manjanya istri adalah hal paling imut di muka bumi.' },
                      { num: '4', title: 'Partner Hidup & Curhat Terbaik', desc: 'Ga ada rahasia yang ga bisa diceritain ke istri tersayang.' },
                      { num: '5', title: 'Sayang yang Ga Pernah Habis', desc: 'Rasa sayang ini bakal terus bertambah tiap detik, hari ini, esok, dan selamanya!' },
                    ].map((item) => (
                      <div key={item.num} className="p-2.5 bg-yellow-50/80 rounded-xl border border-yellow-200/70 flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-yellow-400 text-yellow-950 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                          {item.num}
                        </span>
                        <div>
                          <p className="font-semibold text-yellow-950 text-xs">{item.title}</p>
                          <p className="text-[11px] text-slate-600 leading-snug">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={closeMini}
                    className="w-full py-2.5 rounded-xl bg-yellow-500 hover:bg-yellow-600 text-yellow-950 font-bold text-xs sm:text-sm shadow-sm transition-colors"
                  >
                    Dino Berjanji Selalu Setia! 💛
                  </button>
                </div>
              )}

              {/* Modal 3: Kupon Hadiah */}
              {activeMiniPage === 'coupon' && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="p-2 bg-rose-100 rounded-xl text-rose-600">🎫</span>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-slate-800">
                        Voucher Spesial Hari Ulang Tahun
                      </h3>
                      <p className="text-xs text-rose-600 font-medium">Berlaku seumur hidup & tanpa kadaluarsa!</p>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {[
                      { id: 1, title: 'Kupon Ratu Seharian', desc: 'Bebas perintahkan suami untuk pijat, buatkan teh, dan antar kemana saja!' },
                      { id: 2, title: 'Kupon Peluk & Cium Tanpa Batas', desc: 'Dapat ditukarkan kapan saja saat istri lagi butuh recharge ketenangan.' },
                      { id: 3, title: 'Kupon Traktir Makanan Favorit', desc: 'Makan apapun yang istri pengen, suami yang bayarin dengan senang hati!' },
                    ].map((cp) => {
                      const isClaimed = claimedCoupons.includes(cp.id);
                      return (
                        <div
                          key={cp.id}
                          className={`p-3 rounded-2xl border-2 transition-all ${
                            isClaimed
                              ? 'bg-emerald-50 border-emerald-300'
                              : 'bg-rose-50/60 border-dashed border-rose-300'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="font-bold text-xs sm:text-sm text-slate-800 flex items-center gap-1.5">
                                <span>{cp.title}</span>
                                {isClaimed && <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />}
                              </p>
                              <p className="text-[11px] text-slate-600 mt-0.5">{cp.desc}</p>
                            </div>
                            <button
                              onClick={() => claimCoupon(cp.id)}
                              disabled={isClaimed}
                              className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-xs ${
                                isClaimed
                                  ? 'bg-emerald-600 text-white cursor-default'
                                  : 'bg-rose-500 hover:bg-rose-600 text-white active:scale-95'
                              }`}
                            >
                              {isClaimed ? 'Terklaim ✔' : 'Klaim 🎁'}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <button
                    onClick={closeMini}
                    className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs sm:text-sm hover:bg-slate-800 transition-colors"
                  >
                    Simpan Kupon ke Dompet Hati 💖
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
