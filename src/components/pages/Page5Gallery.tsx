import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Image as ImageIcon, ZoomIn, X, Camera, Lock, Unlock } from 'lucide-react';
import { sound } from '../../utils/sound';
import { triggerStarBurst } from '../../utils/confetti';

interface PageProps {
  onNext: () => void;
  onPrev: () => void;
}

interface PhotoItem {
  id: string;
  src: string;
  fallbackSrc: string;
  alt: string;
  caption: string;
  subcaption: string;
  date: string;
  tag: string;
}

const PHOTOS: PhotoItem[] = [
  {
    id: '1',
    src: 'https://iili.io/n1yhuae.md.jpg',
    fallbackSrc: '/src/assets/images/dino_romantic_love_1791339180437.jpg',
    alt: 'n1yhuae.md.jpg',
    caption: 'Senyum Manis yang Selalu Menghangatkan Rumah Kita',
    subcaption: 'Tatap matamu selalu jadi tempat terindah untuk berlabuh',
    date: 'Momen Bahagia',
    tag: 'Favorite Smile ✨',
  },
  {
    id: '2',
    src: 'https://iili.io/n1yhTF9.md.jpg',
    fallbackSrc: '/src/assets/images/dino_cute_hero_1791339164316.jpg',
    alt: 'n1yhTF9.md.jpg',
    caption: 'Setiap Detik Bersamamu adalah Anugerah Terindah',
    subcaption: 'Ditemani tawamu, hari-hari biasa berubah jadi istimewa',
    date: 'Kenangan Manis',
    tag: 'Sweetest Soulmate 🌸',
  },
  {
    id: '3',
    src: 'https://iili.io/n1yhon2.jpg',
    fallbackSrc: '/src/assets/images/dino_birthday_cake_1791339193716.jpg',
    alt: 'n1yhon2.jpg',
    caption: 'Tawa Ceria yang Selalu Jadi Mood Booster Dino',
    subcaption: 'Ga pernah bosen melihat ekspresi ceriamu setiap hari',
    date: 'Bahagia Selalu',
    tag: 'Pure Joy 💛',
  },
  {
    id: '4',
    src: 'https://iili.io/n1yhz67.md.jpg',
    fallbackSrc: '/src/assets/images/dino_romantic_love_1791339180437.jpg',
    alt: 'n1yhz67.md.jpg',
    caption: 'Melangkah Berdua Mengarungi Indahnya Waktu',
    subcaption: 'Bersamamu, setiap jalan terjal terasa begitu ringan',
    date: 'Selamanya Berdua',
    tag: 'Endless Journey 💫',
  },
];

export const Page5Gallery: React.FC<PageProps> = ({ onNext, onPrev }) => {
  const [isAlbumOpen, setIsAlbumOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [likes, setLikes] = useState<Record<string, number>>({ '1': 14, '2': 28, '3': 31, '4': 99 });
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleOpenAlbum = () => {
    sound.playLevelUp();
    triggerStarBurst();
    setIsAlbumOpen(true);
  };

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playPop();
    triggerStarBurst();
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleImageError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="flex flex-col items-center space-y-4 px-2 py-1 text-center">
      {/* Top Badge */}
      <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100/90 border border-pink-200 text-pink-700 text-xs font-semibold shadow-xs">
        <Camera className="w-3.5 h-3.5 text-pink-600" />
        <span>GALLERY KENANGAN · MEMORIES OF US</span>
        <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
      </div>

      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-800">
        Potret Indah Bidadariku
      </h2>

      {!isAlbumOpen ? (
        /* Envelope locked state with user requested "Tombol Buka 💌" */
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-full max-w-sm bg-white/95 backdrop-blur-md rounded-3xl p-6 border-2 border-dashed border-pink-300 shadow-xl space-y-4 my-2"
        >
          <div className="w-20 h-20 mx-auto rounded-3xl bg-pink-100/80 border border-pink-200 flex items-center justify-center text-4xl shadow-inner animate-float">
            💌
          </div>

          <div className="space-y-1">
            <h3 className="font-serif text-lg font-bold text-pink-900">
              Album Kenangan Spesial
            </h3>
            <p className="text-xs text-slate-600 font-sans">
              Setiap foto menyimpan sejuta rasa syukur dan cinta yang tak pernah luntur.
            </p>
          </div>

          <button
            onClick={handleOpenAlbum}
            className="w-full py-3 px-6 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white font-bold text-sm shadow-lg shadow-pink-500/25 active:scale-95 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Unlock className="w-4 h-4 text-yellow-200" />
            <span>Tombol Buka 💌</span>
          </button>
        </motion.div>
      ) : (
        /* Unwrapped photo grid */
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-lg space-y-3"
        >
          <p className="text-xs text-slate-600 italic">
            Klik foto untuk memperbesar & sentuh tombol hati untuk memberi love ekstra! 💖
          </p>

          <div className="grid grid-cols-2 gap-3">
            {PHOTOS.map((photo) => {
              const hasError = imgErrors[photo.id];
              const displaySrc = hasError ? photo.fallbackSrc : photo.src;

              return (
                <motion.div
                  key={photo.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    sound.playPop();
                    setSelectedPhoto(photo);
                  }}
                  className="bg-white rounded-2xl p-2.5 pb-3 shadow-md border border-pink-100 flex flex-col text-left group cursor-pointer relative"
                >
                  {/* Photo Frame */}
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-pink-50 mb-2 border border-slate-100">
                    <img
                      src={displaySrc}
                      alt={photo.alt}
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(photo.id)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Tag badge on top of photo */}
                    <div className="absolute top-1.5 left-1.5 bg-slate-900/60 backdrop-blur-xs text-white text-[9px] font-semibold px-2 py-0.5 rounded-full">
                      {photo.tag}
                    </div>

                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-white drop-shadow-md" />
                    </div>
                  </div>

                  {/* Caption & Likes */}
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-800 line-clamp-1 leading-snug">
                      {photo.caption}
                    </p>
                    <p className="text-[10px] text-slate-500 line-clamp-1">
                      {photo.subcaption}
                    </p>
                  </div>

                  <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-[10px] text-pink-500 font-medium">
                      {photo.date}
                    </span>
                    <button
                      onClick={(e) => handleLike(photo.id, e)}
                      className="flex items-center gap-1 text-rose-500 font-semibold hover:scale-110 active:scale-95 transition-transform"
                    >
                      <Heart className="w-3.5 h-3.5 fill-rose-500" />
                      <span className="font-mono text-[10px]">{likes[photo.id] || 0}</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}

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
          onClick={() => {
            sound.playPop();
            triggerStarBurst();
            onNext();
          }}
          className="flex-[2] py-2.5 px-4 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-pink-500/25 active:scale-95 hover:shadow-lg transition-all flex items-center justify-center gap-1.5"
        >
          <span>Pesan Penutup 💖</span>
        </button>
      </div>

      {/* Photo Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-sm w-full bg-white rounded-3xl p-4 shadow-2xl text-left border-2 border-pink-300 overflow-hidden"
            >
              <button
                onClick={() => {
                  sound.playPop();
                  setSelectedPhoto(null);
                }}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-pink-100 flex items-center justify-center shadow-md transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="aspect-square w-full rounded-2xl overflow-hidden mb-3 bg-pink-50">
                <img
                  src={imgErrors[selectedPhoto.id] ? selectedPhoto.fallbackSrc : selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-200">
                    {selectedPhoto.tag}
                  </span>
                  <button
                    onClick={(e) => handleLike(selectedPhoto.id, e)}
                    className="flex items-center gap-1 text-rose-500 font-bold text-xs"
                  >
                    <Heart className="w-4 h-4 fill-rose-500" />
                    <span className="font-mono">{likes[selectedPhoto.id] || 0} Cinta</span>
                  </button>
                </div>
                <h4 className="font-serif font-bold text-base text-slate-900">
                  {selectedPhoto.caption}
                </h4>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  {selectedPhoto.subcaption}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-pink-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 italic">Abadi dalam kalbu</span>
                <button
                  onClick={() => {
                    sound.playPop();
                    setSelectedPhoto(null);
                  }}
                  className="px-4 py-1.5 rounded-xl bg-pink-500 hover:bg-pink-600 text-white text-xs font-semibold"
                >
                  Tutup ✕
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
