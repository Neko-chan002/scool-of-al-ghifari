import React from 'react';
import { Newspaper, Calendar, Clock, MapPin, ArrowRight, ArrowUpRight, BookOpen } from 'lucide-react';
import { newsArticles, schoolAgenda } from '../data/newsData';

export default function HomeNewsAgenda({ onNavigatePage }) {
  return (
    <section className="py-8 sm:py-11 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 mb-6 pb-3 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12372A]/10 text-[#12372A] text-[11px] font-bold uppercase tracking-wider mb-1.5">
              <Newspaper className="w-3.5 h-3.5 text-[#c89b3c]" />
              <span>Publikasi & Kalender Akademik</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Warta Berita Terkini & Agenda Sekolah
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 line-clamp-1 mt-0.5">
              Ikuti kabar terbaru seputar prestasi, kurikulum karakter, dan kalender kegiatan penting SMA Plus Al Ghifari.
            </p>
          </div>

          <button
            onClick={() => onNavigatePage('publikasi')}
            className="text-xs font-bold text-[#12372A] hover:text-[#c89b3c] flex items-center gap-1 transition-colors shrink-0"
          >
            <span>Buka Ruang Publikasi & Berita</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 2-Column Grid: Berita (7 cols) + Agenda (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Kolom Kiri: 3 Kartu Berita Terkini (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-1">
              <h3 className="text-sm font-black text-slate-900 flex items-center gap-1.5 uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-[#12372A]" />
                <span>Berita & Kabar Sekolah Terkini</span>
              </h3>
              <span className="text-[11px] text-slate-400 font-medium">Update Terkini</span>
            </div>

            <div className="space-y-3.5">
              {newsArticles.slice(0, 3).map((article) => (
                <div
                  key={article.id}
                  onClick={() => onNavigatePage('publikasi')}
                  className="group cursor-pointer bg-[#fafcfb] hover:bg-white border border-slate-200/90 hover:border-[#c89b3c] rounded-2xl p-3.5 sm:p-4 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row gap-4 items-start"
                >
                  {/* Thumbnail Berita */}
                  <div className="w-full sm:w-40 h-28 rounded-xl overflow-hidden shrink-0 bg-slate-900 relative">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 bg-[#12372A]/90 backdrop-blur-xs text-[9px] font-bold text-white px-2 py-0.5 rounded uppercase tracking-wider">
                      {article.category}
                    </div>
                  </div>

                  {/* Konten Berita (Maksimal 2 Baris) */}
                  <div className="flex-1 space-y-1.5 min-w-0">
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-[#12372A] transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h4>

                    <p className="text-[11px] sm:text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {article.summary}
                    </p>

                    <div className="pt-1 flex items-center gap-1 text-[11px] font-bold text-[#12372A] group-hover:text-[#c89b3c] transition-colors">
                      <span>Baca Selengkapnya</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: 4 Kalender Agenda Kegiatan (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-1">
              <h3 className="text-sm font-black text-slate-900 flex items-center gap-1.5 uppercase tracking-wider">
                <Calendar className="w-4 h-4 text-[#c89b3c]" />
                <span>Agenda & Kalender Kegiatan</span>
              </h3>
              <span className="text-[11px] text-slate-400 font-medium">Semester Genap 2026</span>
            </div>

            <div className="space-y-3">
              {schoolAgenda.map((agenda, idx) => (
                <div
                  key={idx}
                  className="bg-[#fafcfb] hover:bg-white border border-slate-200/90 rounded-2xl p-3.5 shadow-2xs hover:shadow-xs transition-all flex items-start gap-3.5"
                >
                  {/* Kotak Tanggal */}
                  <div className="w-14 h-14 rounded-xl bg-[#12372A] text-white flex flex-col items-center justify-center shrink-0 border border-emerald-950 shadow-2xs">
                    <span className="text-xs font-black text-[#c89b3c] leading-none">
                      {agenda.date}
                    </span>
                    <span className="text-[9px] font-semibold text-emerald-100 uppercase tracking-wider mt-0.5">
                      {agenda.day}
                    </span>
                  </div>

                  {/* Detail Agenda (Maksimal 2 Baris) */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <h4 className="text-xs sm:text-sm font-black text-slate-900 line-clamp-2 leading-snug">
                      {agenda.title}
                    </h4>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-[10px] text-slate-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#c89b3c]" />
                        <span className="line-clamp-1">{agenda.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span className="line-clamp-1">{agenda.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Box: Info Kunjungan Sekolah */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50/60 border border-amber-200/80 flex items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <p className="font-black text-slate-900 text-xs">Ingin Berkunjung ke Kampus?</p>
                <p className="text-[11px] text-slate-600 line-clamp-1">Layanan School Tour & Konsultasi SPMB setiap hari kerja.</p>
              </div>
              <button
                onClick={() => onNavigatePage('kontak')}
                className="px-3 py-1.5 rounded-lg bg-[#12372A] text-white text-[11px] font-bold hover:bg-[#1a4336] transition-colors shrink-0"
              >
                Jadwal
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
