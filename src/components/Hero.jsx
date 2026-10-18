import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Play, 
  CheckCircle2, 
  Award, 
  Users, 
  Building2,
  Trophy,
  ChevronRight,
  ChevronLeft,
  Calendar,
  BookOpenCheck,
  ShieldCheck,
  Download
} from 'lucide-react';
import { Instagram as InstagramIcon } from './SocialIcons';
import { schoolProfile, heroSlides } from '../data/schoolData';

export default function Hero({ 
  onOpenRegistration, 
  onOpenVideoModal, 
  onNavigatePage,
  onOpenBrochureModal 
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  const quickCards = [
    {
      title: "SNMB Online 2026",
      desc: "Jalur Prestasi Tahfidz, Reguler & Lulusan SMP Al Ghifari.",
      icon: Sparkles,
      color: "bg-[#12372A]/10 text-[#12372A] border-[#12372A]/20",
      page: "snmb"
    },
    {
      title: "Brosur & Biaya",
      desc: "Download pamflet infografis resmi & rincian biaya (PDF/Gambar).",
      icon: Download,
      color: "bg-amber-50 text-amber-800 border-amber-200",
      action: () => onOpenBrochureModal ? onOpenBrochureModal('brosur-utama') : onNavigatePage('snmb')
    },
    {
      title: "Gerakan 7 Harkat",
      desc: "Inovasi kurikulum 5 hari pembiasaan karakter tematik Al Ghifari.",
      icon: BookOpenCheck,
      color: "bg-emerald-50 text-[#12372A] border-emerald-200",
      page: "harkat"
    },
    {
      title: "Profil & Bidang",
      desc: "Sejarah 28+ tahun, fasilitas terpadu, lab AI & 5 pilar bidang.",
      icon: Building2,
      color: "bg-stone-100 text-stone-800 border-stone-200",
      page: "profil"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#12372A]/5 via-[#fafcfb] to-white pt-3 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic Hero Carousel Card (Compact & Modern) */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-950 text-white min-h-[350px] sm:min-h-[420px] flex flex-col justify-between">
          
          {/* Background Slide Image with Cinematic Dark Gradient */}
          <div className="absolute inset-0">
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover transition-all duration-1000 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40 sm:to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
          </div>

          {/* Top Bar inside Hero */}
          <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12372A]/90 backdrop-blur-md border border-[#c89b3c]/30 text-white text-[11px] sm:text-xs font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#c89b3c] animate-ping"></span>
              <span>{slide.tag}</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full text-slate-200">
              {slide.badge}
            </div>
          </div>

          {/* Center Main Headlines (Maksimal 2 Jajar / Baris) */}
          <div className="relative z-10 px-5 sm:px-8 py-4 max-w-2xl text-left space-y-3">
            <span className="text-[#c89b3c] font-black text-[11px] sm:text-xs uppercase tracking-widest block">
              SMA Plus Al Ghifari Kota Bandung
            </span>
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug line-clamp-2 drop-shadow-sm">
              {slide.title}
            </h1>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-xl line-clamp-2">
              {slide.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-2.5">
              <button
                onClick={onOpenRegistration}
                className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-[#c89b3c] hover:bg-[#d4a849] shadow-md flex items-center gap-2 transition-transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>{slide.ctaPrimary}</span>
              </button>

              <button
                onClick={onOpenVideoModal}
                className="px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-white/15 hover:bg-white/25 border border-white/20 backdrop-blur-sm flex items-center gap-2 transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-white text-white" />
                <span>Video Profil Kampus</span>
              </button>
            </div>
          </div>

          {/* Bottom Slider Nav & Dots */}
          <div className="relative z-10 p-4 sm:px-8 sm:py-4 flex items-center justify-between border-t border-white/10 bg-slate-950/50 backdrop-blur-xs">
            <div className="flex items-center gap-1.5">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'w-6 bg-[#c89b3c]' : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* 4 Stats Cards Row (Compact Sleek Strip) */}
        <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {schoolProfile.stats.map((st, i) => (
            <div 
              key={i} 
              className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center gap-3.5"
            >
              <span className="text-xl sm:text-2xl font-black text-[#12372A] leading-none shrink-0">
                {st.value}
              </span>
              <div className="min-w-0">
                <span className="text-xs font-bold text-slate-800 block truncate">
                  {st.label}
                </span>
                <span className="text-[10px] text-slate-400 block truncate">
                  {st.sub}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Quick Access Portal Cards (Maksimal 2 Jajar / Baris) */}
        <div className="mt-5 pt-4 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3.5">
            <div>
              <span className="text-[10px] font-bold text-[#12372A] uppercase tracking-wider">
                Akses Layanan & Halaman Sekolah
              </span>
              <h3 className="text-base sm:text-lg font-black text-slate-900 mt-0.5">
                Portal Utama SMA Plus Al Ghifari Bandung
              </h3>
            </div>
            <span className="text-[11px] text-slate-500 mt-0.5 sm:mt-0">Pilih menu untuk membuka slide halaman khusus</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {quickCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    if (card.action) card.action();
                    else onNavigatePage(card.page);
                  }}
                  className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200 hover:border-[#c89b3c] hover:shadow-md transition-all duration-200 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2.5 border ${card.color}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-[#12372A] transition-colors truncate">
                      {card.title}
                    </h4>
                    {/* Deskripsi kartu strictly maksimal 2 baris */}
                    <p className="mt-1 text-[11px] text-slate-500 leading-snug line-clamp-2">
                      {card.desc}
                    </p>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#12372A]">
                    <span>Buka Slide</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#c89b3c]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
