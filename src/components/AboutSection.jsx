import React, { useState } from 'react';
import { 
  Quote, 
  Target, 
  Eye, 
  Cpu, 
  GraduationCap, 
  Award,
  Sparkles,
  BookOpenCheck,
  TreePine,
  Trophy,
  HeartHandshake,
  History,
  Users,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { schoolProfile } from '../data/schoolData';

export default function AboutSection({ isHomepageCompact = false, onNavigatePage }) {
  const [activeTab, setActiveTab] = useState('sejarah');

  const iconMap = {
    BookOpenCheck: BookOpenCheck,
    HeartHandshake: HeartHandshake,
    GraduationCap: GraduationCap,
    Cpu: Cpu,
    TreePine: TreePine,
    Trophy: Trophy
  };

  // IF ON HOMEPAGE: Keep it calm, brief, and clean (catatan sejarah kecil maksimal 2 jajar)
  if (isHomepageCompact) {
    return (
      <section className="py-7 sm:py-9 bg-[#fafcfb] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-[#12372A] text-[11px] font-bold uppercase tracking-wider">
                <History className="w-3.5 h-3.5 text-[#c89b3c]" />
                <span>Catatan Sejarah Singkat</span>
              </div>

              <h2 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight leading-tight line-clamp-2">
                28+ Tahun Berdedikasi di Kawasan Pendidikan Arcamanik Bandung
              </h2>

              {/* Teks dibatasi maksimal 2 jajar / baris sesuai instruksi pengguna */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                Didirikan tahun 1995 di bawah Yayasan Al Ghifari Bandung, berdedikasi mencetak generasi Qur'ani yang kokoh dalam iman taqwa (IMTAQ), unggul sains teknologi (IPTEK), dan berwawasan lingkungan hidup.
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-2.5 text-[11px] font-bold text-slate-700">
                <span className="px-2.5 py-0.5 rounded-md bg-stone-50 border border-slate-200">Sejak 1995</span>
                <span className="px-2.5 py-0.5 rounded-md bg-stone-50 border border-slate-200">NPSN: {schoolProfile.npsn}</span>
                <span className="px-2.5 py-0.5 rounded-md bg-stone-50 border border-slate-200 text-[#12372A]">Akreditasi A Unggul</span>
              </div>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <button
                onClick={() => onNavigatePage && onNavigatePage('profil')}
                className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-xs text-white bg-[#12372A] hover:bg-[#1a4336] transition-all inline-flex items-center justify-center gap-2 shadow-2xs"
              >
                <span>Buka Profil & Sejarah Lengkap</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#c89b3c]" />
              </button>
            </div>

          </div>
        </div>
      </section>
    );
  }

  // IF ON DEDICATED PROFIL PAGE: Full comprehensive view with all sub-menus
  return (
    <section id="profil" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12372A]/10 border border-[#12372A]/20 text-xs font-bold text-[#12372A] uppercase tracking-wider mb-3">
            <Award className="w-4 h-4 text-[#c89b3c]" />
            Profil Resmi SMA Plus Al Ghifari
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Sejarah, Visi, Misi & Dewan Guru
          </h2>
          <p className="mt-2 text-slate-600 text-sm leading-relaxed">
            Mengenal lebih dalam kultur kepemimpinan, perjalanan pendirian, cita-cita luhur, dan tenaga pendidik berdedikasi tinggi.
          </p>
        </div>

        {/* Principal Welcome Section (Ibu Teni Pursina, S.E.) */}
        <div className="bg-[#fcfdfc] border border-slate-200 rounded-3xl p-6 sm:p-10 mb-12 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative">
                <img 
                  src={schoolProfile.kepalaSekolah.foto} 
                  alt={schoolProfile.kepalaSekolah.nama} 
                  className="w-44 h-44 sm:w-48 sm:h-48 rounded-2xl object-cover shadow-xs border-2 border-white"
                />
                <div className="absolute -bottom-2 bg-[#12372A] text-[#c89b3c] font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                  Kepala Sekolah
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-4">
                {schoolProfile.kepalaSekolah.nama}
              </h3>
              <p className="text-xs text-emerald-800 font-semibold">
                {schoolProfile.kepalaSekolah.gelar}
              </p>
            </div>

            <div className="md:col-span-8 space-y-3 text-left">
              <Quote className="w-7 h-7 text-[#c89b3c]" />
              <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                "Mencetak Generasi Rabbani yang Cerdas, Mandiri & Berakhlak Mulia"
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                "{schoolProfile.kepalaSekolah.sambutanSingkat}"
              </p>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Di kawasan pendidikan terpadu Arcamanik Bandung, kami menghadirkan ekosistem belajar yang asri, tenang, dan ramah anak. Melalui Gerakan 7 Harkat, siswa tidak hanya dipersiapkan sukses lolos PTN favorit, melainkan memiliki adab dan ketaatan beribadah.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                <span className="px-3 py-1 rounded-lg bg-white border border-slate-200">NPSN: {schoolProfile.npsn}</span>
                <span className="px-3 py-1 rounded-lg bg-white border border-slate-200">{schoolProfile.akreditasi}</span>
                <span className="px-3 py-1 rounded-lg bg-white border border-slate-200">Yayasan Al Ghifari</span>
              </div>
            </div>

          </div>
        </div>

        {/* Sub-Tabs for Profil Page: Sejarah, Visi-Misi, Profil Lulusan, Dewan Guru, 6 Pilar */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('sejarah')}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
                activeTab === 'sejarah' ? 'bg-white text-[#12372A] shadow-xs border border-slate-200' : 'text-slate-600'
              }`}
            >
              Sejarah & Latar Belakang
            </button>
            <button
              onClick={() => setActiveTab('visi-misi')}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
                activeTab === 'visi-misi' ? 'bg-white text-[#12372A] shadow-xs border border-slate-200' : 'text-slate-600'
              }`}
            >
              Visi & Misi
            </button>
            <button
              onClick={() => setActiveTab('lulusan')}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
                activeTab === 'lulusan' ? 'bg-white text-[#12372A] shadow-xs border border-slate-200' : 'text-slate-600'
              }`}
            >
              Profil Lulusan
            </button>
            <button
              onClick={() => setActiveTab('staf')}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
                activeTab === 'staf' ? 'bg-white text-[#12372A] shadow-xs border border-slate-200' : 'text-slate-600'
              }`}
            >
              Dewan Guru & Staf
            </button>
            <button
              onClick={() => setActiveTab('keunggulan')}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
                activeTab === 'keunggulan' ? 'bg-white text-[#12372A] shadow-xs border border-slate-200' : 'text-slate-600'
              }`}
            >
              6 Pilar Keunggulan
            </button>
          </div>
        </div>

        {/* Tab 1: Sejarah Lengkap & Milestones */}
        {activeTab === 'sejarah' && (
          <div className="bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200 space-y-6 animate-fade-in text-left">
            <div>
              <span className="text-xs font-bold uppercase text-[#c89b3c] tracking-wider">Perjalanan Bersejarah</span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                Dedikasi Sejak Tahun 1995 di Kota Bandung
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2 max-w-3xl">
                {schoolProfile.sejarah.ringkasan}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Linimasa Tonggak Perkembangan:</h4>
              <div className="space-y-3">
                {schoolProfile.sejarah.milestones.map((m, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-3.5 bg-white rounded-2xl border border-slate-200/80">
                    <div className="px-3 py-1 rounded-xl bg-[#12372A] text-[#c89b3c] font-black text-xs shrink-0">
                      {m.tahun}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {m.peristiwa}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Visi & Misi */}
        {activeTab === 'visi-misi' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-fade-in">
            <div className="lg:col-span-5 bg-emerald-50/40 p-8 rounded-3xl border border-emerald-200 flex flex-col justify-between text-left">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#12372A] text-[#c89b3c] flex items-center justify-center mb-5">
                  <Eye className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Visi Al Ghifari</span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-2 mb-4 leading-snug">
                  Cita-Cita Luhur Lembaga
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  "{schoolProfile.visi}"
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-emerald-200/60">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Nilai Inti:</div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-white px-2.5 py-1 rounded-md text-xs font-bold text-slate-800 border border-emerald-100">Aqidah Salimah</span>
                  <span className="bg-white px-2.5 py-1 rounded-md text-xs font-bold text-slate-800 border border-emerald-100">Akhlak Karimah</span>
                  <span className="bg-white px-2.5 py-1 rounded-md text-xs font-bold text-slate-800 border border-emerald-100">Inovasi IPTEK</span>
                  <span className="bg-white px-2.5 py-1 rounded-md text-xs font-bold text-slate-800 border border-emerald-100">Peduli Lingkungan</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between text-left">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#c89b3c] text-slate-950 flex items-center justify-center mb-5">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Misi Utama</span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-2 mb-5">
                  Langkah Pembelajaran Terpadu
                </h3>

                <div className="space-y-3">
                  {schoolProfile.misi.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-[#12372A] text-white flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
                Penerapan Kurikulum Merdeka Terintegrasi IMTAQ & IPTEK
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Profil Lulusan */}
        {activeTab === 'lulusan' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-in text-left">
            {schoolProfile.profilLulusan.map((l, idx) => (
              <div key={idx} className="p-6 bg-slate-50 rounded-3xl border border-slate-200 hover:border-[#c89b3c] hover:bg-white transition-all">
                <div className="w-8 h-8 rounded-xl bg-[#12372A] text-[#c89b3c] font-black text-xs flex items-center justify-center mb-3">
                  0{idx + 1}
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1.5">{l.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Staf & Dewan Guru */}
        {activeTab === 'staf' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in text-left">
            {schoolProfile.stafPengajar.map((staf, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-md transition-all flex items-center gap-4 p-4">
                <img 
                  src={staf.foto} 
                  alt={staf.nama} 
                  className="w-16 h-16 rounded-2xl object-cover shrink-0 border border-slate-200"
                />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">{staf.nama}</h4>
                  <span className="text-[11px] font-bold text-emerald-800 block mt-0.5">{staf.jabatan}</span>
                  <span className="text-[10px] text-slate-500">{staf.spesialisasi}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 5: 6 Pilar Keunggulan */}
        {activeTab === 'keunggulan' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-in text-left">
            {schoolProfile.keunggulan.map((item, idx) => {
              const IconComp = iconMap[item.icon] || Sparkles;
              return (
                <div 
                  key={idx} 
                  className="bg-slate-50 hover:bg-white p-6 rounded-3xl border border-slate-200 hover:border-[#c89b3c] hover:shadow-xs transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white text-[#12372A] border border-slate-200 flex items-center justify-center mb-4 group-hover:bg-[#12372A] group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#12372A] transition-colors">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-bold text-emerald-800">
                    Standar Mutu Terjamin
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
