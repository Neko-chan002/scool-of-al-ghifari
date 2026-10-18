import React from 'react';
import { Quote, Award, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { schoolProfile } from '../data/schoolData';

export default function HomePrincipalGreeting({ onNavigatePage }) {
  return (
    <section className="py-7 sm:py-9 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Sambutan Kepala Sekolah */}
        <div className="bg-[#fafcfb] border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Foto Kepala Sekolah (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative">
                <img 
                  src={schoolProfile.kepalaSekolah.foto} 
                  alt={schoolProfile.kepalaSekolah.nama} 
                  className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl object-cover shadow-sm border-2 border-white"
                />
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#12372A] text-[#c89b3c] font-black text-[10px] px-3 py-0.5 rounded-full uppercase tracking-wider border border-white/20 whitespace-nowrap shadow-xs">
                  Kepala Sekolah
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-black text-slate-900 mt-4 leading-tight">
                {schoolProfile.kepalaSekolah.nama}
              </h3>
              <p className="text-xs text-[#12372A] font-semibold mt-0.5">
                {schoolProfile.kepalaSekolah.gelar}
              </p>
            </div>

            {/* Teks Sambutan Hangat & Profil (8 cols) */}
            <div className="lg:col-span-8 space-y-3 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12372A]/10 text-[#12372A] text-[11px] font-bold uppercase tracking-wider">
                <Quote className="w-3.5 h-3.5 text-[#c89b3c]" />
                <span>Sambutan Kepala Sekolah</span>
              </div>

              <h4 className="text-lg sm:text-2xl font-black text-slate-900 leading-snug line-clamp-2">
                "Mencetak Generasi Qur'ani yang Cerdas, Mandiri & Berakhlak Mulia"
              </h4>

              {/* Teks sambutan dibatasi maksimal 2 baris (line-clamp-2) */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2 italic">
                "{schoolProfile.kepalaSekolah.sambutanSingkat}"
              </p>

              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-2">
                Di kawasan pendidikan terpadu Arcamanik Bandung, kami menghadirkan ekosistem belajar yang asri dan ramah anak. Melalui Gerakan 7 Harkat, siswa dibina menjadi insan beriman, berakhlak mulia, dan siap menembus PTN impian.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200">
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold text-slate-700">
                  <span className="px-2.5 py-0.5 rounded-md bg-white border border-slate-200">NPSN: {schoolProfile.npsn}</span>
                  <span className="px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-[#12372A]">Akreditasi A Unggul</span>
                  <span className="px-2.5 py-0.5 rounded-md bg-white border border-slate-200">28+ Tahun Mengabdi</span>
                </div>

                <button
                  onClick={() => onNavigatePage('profil')}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#12372A] hover:bg-[#1a4336] transition-all inline-flex items-center gap-1.5 shadow-2xs shrink-0"
                >
                  <span>Pelajari Profil & Sejarah</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c89b3c]" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
