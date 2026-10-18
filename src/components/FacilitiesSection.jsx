import React, { useState } from 'react';
import { 
  Building2, 
  Check, 
  X, 
  Maximize2
} from 'lucide-react';
import { facilitiesData } from '../data/schoolData';

export default function FacilitiesSection() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [activeModalFacility, setActiveModalFacility] = useState(null);

  const categories = [
    'Semua',
    'Akademik & Riset',
    'Literasi & Budaya',
    'Olahraga & Kesehatan',
    'Kreativitas & Seni',
    'Sosial & Keagamaan'
  ];

  const filteredFacilities = selectedCategory === 'Semua'
    ? facilitiesData
    : facilitiesData.filter(item => item.category === selectedCategory);

  return (
    <section id="fasilitas" className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-emerald-600" />
            Sarana & Prasarana
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Fasilitas Standar Unggul Menunjang Potensi Siswa
          </h2>
          <p className="mt-2 text-slate-600 text-sm leading-relaxed">
            Setiap fasilitas dirancang ramah anak, nyaman, aman, dan didukung teknologi mutakhir untuk memantik kreativitas siswa.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-emerald-300 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col group cursor-pointer"
              onClick={() => setActiveModalFacility(facility)}
            >
              {/* Image Preview Container */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-xs">
                  {facility.category}
                </span>
                <button 
                  className="absolute bottom-3 right-3 p-2 rounded-xl bg-white/90 text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity shadow-xs"
                  title="Perbesar"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-emerald-800 transition-colors line-clamp-1">
                    {facility.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                {/* Features Badges */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {facility.features.slice(0, 2).map((feat, i) => (
                      <span key={i} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium">
                        ✓ {feat}
                      </span>
                    ))}
                    {facility.features.length > 2 && (
                      <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md font-bold">
                        +{facility.features.length - 2} lagi
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Detail Fasilitas */}
        {activeModalFacility && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
            <div 
              className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalFacility(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative h-60 bg-slate-900">
                <img
                  src={activeModalFacility.image}
                  alt={activeModalFacility.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="bg-amber-400 text-slate-950 font-bold text-[10px] px-2 py-0.5 rounded uppercase">
                    {activeModalFacility.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1.5">
                    {activeModalFacility.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {activeModalFacility.description}
                </p>

                <div>
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Keunggulan & Fasilitas:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalFacility.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={() => setActiveModalFacility(null)}
                    className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
