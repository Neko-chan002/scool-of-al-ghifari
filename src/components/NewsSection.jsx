import React, { useState } from 'react';
import { 
  Newspaper, 
  Calendar, 
  Clock, 
  ChevronRight, 
  User, 
  X, 
  Heart, 
  BookOpen, 
  Award,
  Sparkles,
  Quote
} from 'lucide-react';
import { newsArticles, schoolAgenda } from '../data/newsData';
import { renunganMingguan, jurnalCendikia } from '../data/schoolData';

export default function NewsSection() {
  const [activeTab, setActiveTab] = useState('berita');
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="berita" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3">
            <Newspaper className="w-3.5 h-3.5 text-emerald-600" />
            Pusat Publikasi & Warta Sekolah
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Kabar Terkini, Riset Cendikia & Renungan Rabbani
          </h2>
          <p className="mt-2 text-slate-600 text-sm leading-relaxed">
            Ikuti berbagai warta aktivitas santri/siswa Al Ghifari, karya ilmiah remaja, mutiara hikmah mingguan, serta kalender agenda terdekat.
          </p>
        </div>

        {/* Tab Switcher (Berita, Renungan, Jurnal Cendikia, Agenda) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('berita')}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
                activeTab === 'berita'
                  ? 'bg-white text-emerald-800 shadow-2xs border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Berita & Warta
            </button>
            <button
              onClick={() => setActiveTab('renungan')}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
                activeTab === 'renungan'
                  ? 'bg-white text-emerald-800 shadow-2xs border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Renungan Rabbani 💚
            </button>
            <button
              onClick={() => setActiveTab('jurnal')}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
                activeTab === 'jurnal'
                  ? 'bg-white text-emerald-800 shadow-2xs border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Jurnal Cendikia (Riset)
            </button>
            <button
              onClick={() => setActiveTab('agenda')}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
                activeTab === 'agenda'
                  ? 'bg-white text-emerald-800 shadow-2xs border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Kalender Agenda
            </button>
          </div>
        </div>

        {/* Tab 1: Berita & Warta */}
        {activeTab === 'berita' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            {newsArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="h-44 relative overflow-hidden bg-slate-100">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 bg-white/95 text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded shadow-2xs">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="text-[11px] text-slate-400">
                      {article.date} • {article.readTime}
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-emerald-800 transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-800 mt-2">
                  <span>Baca Selengkapnya</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Renungan Rabbani (Kajian Jumat Khas Al Ghifari) */}
        {activeTab === 'renungan' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            {renunganMingguan.map((renungan) => (
              <div 
                key={renungan.id}
                className="p-6 rounded-3xl bg-emerald-50/50 border border-emerald-200/80 flex flex-col justify-between shadow-2xs"
              >
                <div className="space-y-3 text-left">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-emerald-800 bg-white px-2.5 py-0.5 rounded-full border border-emerald-100">
                      {renungan.tanggal}
                    </span>
                    <Quote className="w-5 h-5 text-emerald-600/40" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900">
                    {renungan.title}
                  </h3>

                  <div className="p-3 bg-white rounded-xl border border-emerald-100 text-xs italic text-emerald-900 font-medium leading-relaxed">
                    "{renungan.kutipanAyat}"
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {renungan.isi}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-emerald-200/60 text-[11px] text-slate-500 font-medium">
                  Tausiyah: <strong className="text-emerald-900">{renungan.narasumber}</strong>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Jurnal Cendikia (Riset Ilmiah Siswa & Guru) */}
        {activeTab === 'jurnal' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            {jurnalCendikia.map((jurnal) => (
              <div
                key={jurnal.id}
                className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-emerald-300 shadow-2xs flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                      {jurnal.kategori}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">{jurnal.tahun}</span>
                  </div>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {jurnal.title}
                  </h4>
                  <p className="text-xs text-emerald-800 font-semibold">
                    Peneliti: {jurnal.penulis}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {jurnal.abstrak}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span>Terdaftar di Perpustakaan Al Ghifari</span>
                  <button className="text-emerald-800 font-bold hover:underline">
                    Unduh PDF Jurnal
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Kalender Agenda Sekolah */}
        {activeTab === 'agenda' && (
          <div className="max-w-2xl mx-auto space-y-3.5 animate-fade-in">
            {schoolAgenda.map((agenda, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex flex-col items-center justify-center shrink-0">
                    <span className="text-[9px] uppercase font-bold text-emerald-700 leading-none">{agenda.day}</span>
                    <span className="text-xs font-black mt-0.5">{agenda.date}</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                      {agenda.title}
                    </h5>
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{agenda.time}</span>
                      <span>•</span>
                      <span>{agenda.location}</span>
                    </div>
                  </div>
                </div>

                <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                  Agenda Resmi
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Modal Baca Artikel Lengkap */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
            <div 
              className="bg-white rounded-3xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200 relative text-slate-800 p-6 space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="h-48 rounded-2xl overflow-hidden bg-slate-100">
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <span className="bg-emerald-100 text-emerald-800 font-bold text-[10px] px-2 py-0.5 rounded">
                  {selectedArticle.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-2">
                  {selectedArticle.title}
                </h3>
                <span className="text-xs text-slate-400 block mt-1">{selectedArticle.date} • Oleh {selectedArticle.author}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedArticle.summary}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedArticle.content}
              </p>

              <div className="pt-2 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
