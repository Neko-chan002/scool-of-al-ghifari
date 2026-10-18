import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  FileText, 
  Calendar, 
  ClipboardCheck, 
  Check, 
  Download,
  Eye,
  FileCheck2,
  Image as ImageIcon,
  ExternalLink,
  PhoneCall
} from 'lucide-react';
import { ppdbConfig } from '../data/ppdbData';
import { brochureList } from '../data/brochureData';

export default function PpdbSection({ 
  onOpenRegistration, 
  onOpenStatusCheck, 
  onOpenBrochureModal 
}) {
  const [openFaq, setOpenFaq] = useState(0);
  const [checkedRequirements, setCheckedRequirements] = useState({});

  const toggleReq = (idx) => {
    setCheckedRequirements(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const kuotaPercentage = Math.round((ppdbConfig.kuotaTerisi / ppdbConfig.kuotaTotal) * 100);

  const handleBrochureClick = (id) => {
    if (onOpenBrochureModal) {
      onOpenBrochureModal(id);
    }
  };

  return (
    <section id="ppdb" className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12372A]/10 border border-[#12372A]/20 text-xs font-bold text-[#12372A] uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#c89b3c]" />
            SNMB 2026/2027 • SMA Plus Al Ghifari
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Penerimaan Murid Baru Terpadu
          </h2>
          <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
            Selamat datang di gerbang seleksi siswa baru. Akses brosur gambar resmi, cek rincian biaya transparan, dan ikuti alur pendaftaran digital.
          </p>
        </div>

        {/* Live Banner: Deep Forest Charcoal & Gold */}
        <div className="bg-gradient-to-br from-[#12372A] via-[#1a4336] to-[#0a231b] text-white rounded-3xl p-6 sm:p-9 shadow-lg mb-14 relative overflow-hidden border border-emerald-950">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#c89b3c]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-3.5">
              <div className="inline-flex items-center gap-2 bg-[#c89b3c] text-slate-950 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping"></span>
                {ppdbConfig.statusGelombang}
              </div>

              <h3 className="text-xl sm:text-3xl font-black text-white leading-tight">
                Penerimaan Siswa Baru TA 2026/2027
              </h3>

              <p className="text-emerald-100 text-xs sm:text-sm leading-relaxed max-w-xl">
                {ppdbConfig.biayaPendaftaran}. Sistem seleksi terpadu dengan transparansi pembiayaan, pengurusan berkas online, dan konsultasi terbuka bersama panitia.
              </p>

              {/* Kuota Progress */}
              <div className="pt-2 max-w-md">
                <div className="flex justify-between text-xs font-semibold text-emerald-200 mb-1.5">
                  <span>Keterisian Kuota: {kuotaPercentage}%</span>
                  <span>{ppdbConfig.kuotaTerisi} dari {ppdbConfig.kuotaTotal} Kursi</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className="bg-[#c89b3c] h-full rounded-full transition-all duration-1000"
                    style={{ width: `${kuotaPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="lg:col-span-5 flex flex-col gap-2.5 justify-center">
              <button
                onClick={onOpenRegistration}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-[#c89b3c] hover:bg-[#d4a849] shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Isi Formulir Pendaftaran Online</span>
              </button>

              <button
                onClick={() => handleBrochureClick('brosur-utama')}
                className="w-full py-3 px-6 rounded-xl font-bold text-xs text-white bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center gap-2 transition-all"
              >
                <Download className="w-4 h-4 text-[#c89b3c]" />
                <span>Buka Pamflet & Brosur PDF Lengkap</span>
              </button>

              <button
                onClick={onOpenStatusCheck}
                className="w-full py-2.5 px-6 rounded-xl font-semibold text-xs text-emerald-200 hover:text-white flex items-center justify-center gap-1.5 transition-all text-center"
              >
                <ClipboardCheck className="w-3.5 h-3.5" />
                <span>Sudah Mendaftar? Cek Status Verifikasi Disini</span>
              </button>
            </div>

          </div>
        </div>

        {/* SECTION PENTING: GALERI BROSUR GAMBAR & PDF (SESUAI PERMINTAAN USER) */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 pb-4 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#12372A] mb-1">
                <ImageIcon className="w-3.5 h-3.5 text-[#c89b3c]" />
                <span>Format Visual Gambar & E-Brochure PDF</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Brosur Resmi SNMB & Rincian Biaya
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Klik gambar pamflet untuk memperbesar brosur, membaca detail biaya, atau mengunduh versi PDF resmi.
              </p>
            </div>

            <button
              onClick={() => handleBrochureClick('brosur-biaya')}
              className="text-xs font-bold text-[#12372A] hover:text-[#c89b3c] flex items-center gap-1 shrink-0 transition-colors"
            >
              <span>Lihat Rincian Biaya Pendidikan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 3 Graphic Brochure Flyer Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brochureList.map((brochure) => (
              <div
                key={brochure.id}
                onClick={() => handleBrochureClick(brochure.id)}
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#c89b3c] transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Visual Flyer Preview Thumbnail */}
                  <div className="relative h-64 bg-slate-900 overflow-hidden">
                    <img 
                      src={brochure.image} 
                      alt={brochure.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                    
                    {/* Badge top */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#12372A] text-[#c89b3c] border border-white/20 shadow-xs">
                        {brochure.category}
                      </span>
                    </div>

                    {/* Flyer Content Mockup Overlay */}
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-[9px] font-mono tracking-widest text-amber-300 uppercase block">
                        DOKUMEN RESMI 2026
                      </span>
                      <h4 className="text-sm font-extrabold text-white line-clamp-1 leading-snug drop-shadow-sm">
                        {brochure.flyerData.headline}
                      </h4>
                      <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                        {brochure.flyerData.subheadline}
                      </p>
                    </div>

                    {/* Hover Inspect Icon */}
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                      <div className="px-3.5 py-2 rounded-xl bg-[#c89b3c] text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg">
                        <Eye className="w-4 h-4" />
                        <span>Buka Brosur Gambar</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Description */}
                  <div className="p-5">
                    <h4 className="font-bold text-sm text-slate-900 group-hover:text-[#12372A] transition-colors leading-snug">
                      {brochure.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1.5 leading-snug line-clamp-2">
                      {brochure.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1">
                      {brochure.flyerData.highlights.slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                          <CheckCircle2 className="w-3 h-3 text-[#12372A] shrink-0" />
                          <span className="line-clamp-1">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Button */}
                <div className="p-5 pt-0">
                  <button
                    type="button"
                    className="w-full py-2.5 rounded-xl font-bold text-xs bg-stone-100 group-hover:bg-[#12372A] group-hover:text-white text-slate-800 transition-colors flex items-center justify-center gap-2 border border-slate-200"
                  >
                    <Download className="w-3.5 h-3.5 text-[#c89b3c]" />
                    <span>Lihat Gambar & Unduh PDF</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Jalur Pendaftaran (Clean & Breathable Cards) */}
        <div className="mb-16">
          <div className="text-left mb-6">
            <h3 className="text-xl font-black text-slate-900">
              4 Pilihan Jalur Masuk SMA Plus Al Ghifari
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Sesuaikan dengan bakat, hafalan Al-Qur'an, dan prestasi akademik putra-putri Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ppdbConfig.jalurList.map((jalur) => (
              <div 
                key={jalur.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-[#c89b3c] hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {jalur.badge}
                    </span>
                    <span className="text-xs font-bold text-[#12372A]">
                      {jalur.kuota}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 group-hover:text-[#12372A] transition-colors">
                    {jalur.name}
                  </h4>

                  <p className="text-xs text-slate-600 mt-1.5 leading-snug line-clamp-2">
                    {jalur.desc}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Fasilitas Khusus:</span>
                    {jalur.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#12372A] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100">
                  <button
                    onClick={onOpenRegistration}
                    className="w-full py-2.5 rounded-xl font-bold text-xs text-[#12372A] bg-stone-100 hover:bg-[#12372A] hover:text-white transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Daftar Lewat Jalur Ini</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alur Pendaftaran Visual Timeline */}
        <div className="mb-16 bg-[#fafcfb] border border-slate-200 rounded-3xl p-6 sm:p-10">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#12372A]">
              Tahapan Seleksi Terpadu
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
              5 Langkah Mudah Menjadi Siswa Al Ghifari
            </h3>
            <p className="text-slate-500 text-xs mt-1">
              Dapat diikuti secara online dari rumah atau dibantu panitia langsung di kampus Arcamanik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5">
            {ppdbConfig.timeline.map((step) => (
              <div 
                key={step.step}
                className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col justify-between shadow-2xs hover:border-[#c89b3c] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#12372A] text-[#c89b3c] font-bold text-xs flex items-center justify-center">
                      {step.step}
                    </div>
                    {step.status === 'active' && (
                      <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-[#c89b3c] text-slate-950">
                        Aktif
                      </span>
                    )}
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 mb-1 leading-snug">
                    {step.title}
                  </h4>
                  <div className="text-[11px] text-[#12372A] font-semibold mb-1 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#c89b3c]" />
                    <span>{step.date}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-snug line-clamp-2">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements Checklist & FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Requirements Checklist */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-stone-100 text-[#12372A] border border-slate-200 flex items-center justify-center">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">
                  Checklist Dokumen Syarat
                </h3>
                <p className="text-xs text-slate-500">
                  Tandai berkas yang telah Anda persiapkan
                </p>
              </div>
            </div>

            <div className="space-y-2 mt-4">
              {ppdbConfig.requirements.map((req, idx) => {
                const isChecked = !!checkedRequirements[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleReq(idx)}
                    className={`p-2.5 rounded-xl border text-xs font-medium flex items-start gap-2.5 cursor-pointer transition-all ${
                      isChecked 
                        ? 'bg-emerald-50/80 border-emerald-300 text-emerald-900' 
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 mt-0.5 border ${
                      isChecked ? 'bg-[#12372A] border-[#12372A] text-white' : 'border-slate-400 bg-white'
                    }`}>
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span className={isChecked ? 'line-through opacity-75' : ''}>
                      {req}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-xs">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">
                  Tanya Jawab SNMB (FAQ)
                </h3>
                <p className="text-xs text-slate-500">
                  Pertanyaan yang sering diajukan orang tua siswa
                </p>
              </div>
            </div>

            <div className="space-y-2.5">
              {ppdbConfig.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="w-full p-3.5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-800 hover:bg-slate-50"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#12372A] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-3.5 pb-3.5 pt-1 text-xs text-slate-600 leading-relaxed bg-slate-50/50 border-t border-slate-100 animate-fade-in">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
