import React from 'react';
import { Trophy, Award, ArrowRight, Sparkles, Medal } from 'lucide-react';
import { prestasiUnggulan } from '../data/schoolData';

export default function HomePrestasiGallery({ onNavigatePage }) {
  return (
    <section className="py-8 sm:py-10 bg-[#fafcfb] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 mb-6 pb-3 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#12372A] text-[11px] font-bold uppercase tracking-wider mb-1.5">
              <Trophy className="w-3.5 h-3.5 text-[#c89b3c]" />
              <span>Etalase Poster Juara & Prestasi Siswa</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Galeri Prestasi Gemilang Siswa Al Ghifari
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 line-clamp-1 mt-0.5">
              Dokumentasi visual kejuaraan tingkat Kota Bandung, Provinsi Jawa Barat, hingga Nasional.
            </p>
          </div>

          <button
            onClick={() => onNavigatePage('ekskul')}
            className="text-xs font-bold text-[#12372A] hover:text-[#c89b3c] flex items-center gap-1 transition-colors shrink-0"
          >
            <span>Lihat Semua 30+ Prestasi</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Poster Gambar Prestasi Siswa (Maksimal 2 Baris Keterangan) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {prestasiUnggulan.map((item) => (
            <div
              key={item.id || item.title}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#c89b3c] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Poster Gambar Juara */}
                <div className="relative h-48 sm:h-52 bg-slate-900 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                  
                  {/* Badge Juara */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#12372A] text-[#c89b3c] border border-white/20 shadow-xs flex items-center gap-1">
                      <Medal className="w-3 h-3 text-[#c89b3c]" />
                      <span>{item.badge}</span>
                    </span>
                  </div>

                  {/* Overlay Nama Siswa */}
                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <span className="text-[9px] font-bold text-amber-300 uppercase tracking-wider block">
                      Peraih Juara:
                    </span>
                    <p className="text-xs font-black text-white line-clamp-1 drop-shadow-sm">
                      {item.student}
                    </p>
                  </div>
                </div>

                {/* Deskripsi Poster Prestasi */}
                <div className="p-4">
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-[#12372A] transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-[11px] text-slate-500 line-clamp-1">
                    Penyelenggara: {item.organizer}
                  </p>
                </div>
              </div>

              {/* Footer kartu poster */}
              <div className="p-4 pt-0">
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-semibold">
                  <span className="text-[#12372A] font-bold">#AlGhifariJuara</span>
                  <span>Tingkat Jabar/Nasional</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
