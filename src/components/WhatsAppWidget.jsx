import React, { useState } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  Sparkles, 
  Check, 
  Clock, 
  HelpCircle,
  GraduationCap
} from 'lucide-react';
import { socialMediaLinks } from '../data/socialData';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickMessages = [
    { title: "Tanya Syarat & Jadwal PPDB 2026", msg: "Halo Admin PPDB, saya ingin menanyakan jadwal dan berkas pendaftaran siswa baru 2026." },
    { title: "Informasi Beasiswa Prestasi", msg: "Halo Admin, saya ingin konsultasi mengenai jalur beasiswa prestasi akademik & non-akademik di SMA Prestasi Bangsa." },
    { title: "Jadwal School Tour / Kunjungan", msg: "Halo Admin, saya orang tua calon siswa ingin menjadwalkan kunjungan langsung ke kampus sekolah." },
    { title: "Brosur & Rincian Biaya", msg: "Halo Admin, bisakah saya dikirimkan brosur digital dan informasi pembiayaan sekolah?" }
  ];

  const handleSend = (text) => {
    const finalMsg = text || customMsg || "Halo Admin SMA Prestasi Bangsa, saya ingin bertanya seputar sekolah.";
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(finalMsg)}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Pop-up Chat Card */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-fade-in text-slate-800">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-4 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 p-1 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-white absolute bottom-0 right-0"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm">Helpdesk Resmi PPDB</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>Online • Balas Cepat</span>
                </p>
              </div>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            
            {/* Incoming bubble */}
            <div className="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-xs border border-slate-200/80 text-xs text-slate-700 leading-relaxed space-y-1">
              <p className="font-bold text-emerald-700">Halo! Selamat Datang di SMA Prestasi Bangsa 👋</p>
              <p>Ada yang bisa kami bantu seputar pendaftaran siswa baru, fasilitas, atau program sekolah?</p>
            </div>

            {/* Quick action buttons */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                Pilih Topik Cepat:
              </span>
              {quickMessages.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(item.msg)}
                  className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 text-xs font-semibold border border-slate-200/90 hover:border-emerald-300 transition-colors flex items-center justify-between"
                >
                  <span className="truncate">{item.title}</span>
                  <Send className="w-3 h-3 text-emerald-600 shrink-0" />
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(customMsg);
              }}
              className="pt-2 flex gap-1.5"
            >
              <input
                type="text"
                placeholder="Ketik pertanyaan Anda..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

          </div>

          <div className="p-2.5 bg-slate-100 text-[10px] text-center text-slate-500 border-t border-slate-200">
            Terhubung langsung ke WhatsApp Panitia Resmi
          </div>

        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
        title="Chat dengan Panitia via WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="w-2.5 h-2.5 rounded-full bg-gold-400 border-2 border-emerald-600 absolute -top-0.5 -right-0.5 animate-ping"></span>
        </div>
        <span className="hidden sm:inline font-bold text-xs">
          Tanya Kami di WA
        </span>
      </button>

    </div>
  );
}
