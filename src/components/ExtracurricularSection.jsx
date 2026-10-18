import React, { useState } from 'react';
import { 
  Trophy, 
  Clock, 
  Award, 
  Bot, 
  Flag, 
  Languages, 
  HeartPulse, 
  Camera, 
  Sparkles
} from 'lucide-react';
import { extracurricularsData, achievementsData } from '../data/schoolData';

export default function ExtracurricularSection() {
  const [activeTab, setActiveTab] = useState('ekskul');

  const iconMap = {
    Bot: Bot,
    Trophy: Trophy,
    Flag: Flag,
    Languages: Languages,
    HeartPulse: HeartPulse,
    Camera: Camera
  };

  return (
    <section id="ekskul" className="py-16 sm:py-20 bg-white border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-800 uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            Bakat, Minat & Kejuaraan
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            30+ Pilihan Ekstrakurikuler & Prestasi Siswa
          </h2>
          <p className="mt-2 text-slate-600 text-sm leading-relaxed">
            Menumbuhkan potensi kepemimpinan, sportivitas, daya cipta teknologi, dan karya seni yang membanggakan sekolah.
          </p>
        </div>

        {/* Switcher Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            <button
              onClick={() => setActiveTab('ekskul')}
              className={`px-5 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeTab === 'ekskul'
                  ? 'bg-white text-emerald-800 shadow-xs border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Daftar Ekstrakurikuler
            </button>
            <button
              onClick={() => setActiveTab('prestasi')}
              className={`px-5 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeTab === 'prestasi'
                  ? 'bg-white text-emerald-800 shadow-xs border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Prestasi & Kejuaraan Siswa 🏆
            </button>
          </div>
        </div>

        {/* View 1: Ekstrakurikuler Cards (Spacious, Clean) */}
        {activeTab === 'ekskul' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {extracurricularsData.map((ekskul) => {
              const IconComp = iconMap[ekskul.icon] || Sparkles;
              return (
                <div
                  key={ekskul.id}
                  className="rounded-3xl border border-slate-200/90 overflow-hidden bg-white hover:border-emerald-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="h-40 relative overflow-hidden bg-slate-100">
                      <img 
                        src={ekskul.image} 
                        alt={ekskul.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/95 backdrop-blur-md text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                          {ekskul.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 space-y-2.5">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center shrink-0">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <h3 className="font-bold text-slate-900 text-sm">
                          {ekskul.name}
                        </h3>
                      </div>

                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                        {ekskul.desc}
                      </p>

                      <div className="pt-2 flex items-center gap-1.5 text-xs text-slate-500">
                        <Clock className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{ekskul.schedule}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-amber-50/60 border-t border-amber-100 flex items-center gap-2 text-xs font-semibold text-amber-900">
                    <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="truncate text-[11px]">{ekskul.achievements}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View 2: Prestasi Siswa */}
        {activeTab === 'prestasi' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-fade-in">
            {achievementsData.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200/90 rounded-3xl p-5 hover:border-amber-300 hover:shadow-xs transition-all flex flex-col sm:flex-row gap-4 items-center"
              >
                <div className="w-full sm:w-36 h-32 rounded-2xl overflow-hidden shrink-0 relative bg-slate-100">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-amber-400 text-slate-950 font-bold text-[10px] px-2 py-0.5 rounded shadow-xs">
                    {item.year}
                  </div>
                </div>

                <div className="flex-1 space-y-1 text-left">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-50 text-emerald-800">
                    Tingkat {item.badge}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600">
                    Oleh: <strong className="text-slate-800">{item.student}</strong>
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Penyelenggara: {item.organizer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
