import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  MessageCircle, 
  Sparkles, 
  FileText, 
  CheckCircle2, 
  Maximize2,
  Phone,
  MapPin,
  Calendar
} from 'lucide-react';
import { brochureList } from '../data/brochureData';

export default function BrochureModal({ isOpen, initialId = "brosur-utama", onClose }) {
  const [selectedBrochureId, setSelectedBrochureId] = useState(initialId);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!isOpen) return null;

  const current = brochureList.find(b => b.id === selectedBrochureId) || brochureList[0];

  const handlePrint = () => {
    window.print();
  };

  const handleSendWA = () => {
    const text = `Bismillah, Halo Panitia SNMB SMA Plus Al Ghifari Bandung, saya ingin meminta berkas PDF resmi untuk: ${current.title}. Terima kasih.`;
    window.open(`https://wa.me/6281222887890?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in text-slate-800">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full my-6 overflow-hidden shadow-2xl border border-slate-200 relative flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal with Tabs */}
        <div className="bg-[#12372A] text-white p-4 sm:p-5 flex items-center justify-between border-b border-[#0d2b24]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#c89b3c] text-slate-950 flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                Galeri Brosur Resmi & Rincian SNMB 2026
              </h3>
              <p className="text-[11px] text-emerald-200">
                SMA Plus Al Ghifari Kota Bandung • Format Gambar & PDF
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Brochure Tabs Bar */}
        <div className="bg-slate-100 p-2 border-b border-slate-200 flex gap-2 overflow-x-auto scrollbar-none">
          {brochureList.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedBrochureId(item.id);
                setIsZoomed(false);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedBrochureId === item.id
                  ? 'bg-white text-emerald-900 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Body Area: High Quality Graphical Flyer Display */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-stone-100 flex flex-col items-center">
          
          {/* Authentic High-Res Brochure Canvas Flyer */}
          <div 
            id="print-brochure"
            className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-300/80 transition-transform duration-300 relative"
          >
            {/* Top Flyer Header Banner */}
            <div className="bg-gradient-to-r from-[#12372A] via-[#1a4336] to-[#0a231b] text-white p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#c89b3c]/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/15 pb-5">
                <div>
                  <span className="text-[10px] font-black tracking-widest uppercase bg-[#c89b3c] text-slate-950 px-2.5 py-0.5 rounded">
                    PAMFLET RESMI 2026/2027
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-white mt-1.5 leading-tight">
                    {current.flyerData.headline}
                  </h2>
                  <p className="text-xs text-emerald-200 font-semibold mt-0.5">
                    {current.flyerData.subheadline}
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-center shrink-0">
                  <span className="text-[9px] text-amber-300 font-bold block uppercase">Akreditasi</span>
                  <span className="text-lg font-black text-white">A (UNGGUL)</span>
                </div>
              </div>

              {/* Graphic highlights row */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                {current.flyerData.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#c89b3c] shrink-0" />
                    <span className="text-[11px] font-medium">{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Flyer Middle Visual Picture */}
            <div className="relative h-60 sm:h-72 bg-slate-900 overflow-hidden">
              <img 
                src={current.image} 
                alt={current.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-3 left-4 right-4 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">Jalur Masuk:</span>
                  <p className="text-xs font-bold text-white drop-shadow-sm">{current.flyerData.jalur}</p>
                </div>
                <div className="bg-emerald-800/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                  GELOMBANG II AKTIF
                </div>
              </div>
            </div>

            {/* Flyer Bottom Contact & Details Strip */}
            <div className="p-5 bg-white space-y-3 text-xs border-t border-slate-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span>{current.flyerData.kampus}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span>Hotline SPMB: {current.flyerData.hotline}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
                <span>Website Resmi: <strong>smaplusalghifari.sch.id</strong></span>
                <span className="font-mono text-emerald-800 font-bold">#AlGhifariBandung-2026</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500 text-center sm:text-left">
            Tersedia dalam format gambar resolusi tinggi & berkas PDF resmi
          </span>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleSendWA}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl font-bold text-xs bg-emerald-800 hover:bg-emerald-900 text-white flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Minta File PDF via WA</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-2.5 rounded-xl font-semibold text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center gap-1.5 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak Pamflet</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
