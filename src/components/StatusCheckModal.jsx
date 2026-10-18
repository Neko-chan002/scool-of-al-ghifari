import React, { useState } from 'react';
import { 
  X, 
  Search, 
  ClipboardCheck, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  MessageCircle,
  FileCheck,
  Building,
  UserCheck
} from 'lucide-react';
import { ppdbConfig } from '../data/ppdbData';

export default function StatusCheckModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const cleanQuery = query.trim().toUpperCase();
    
    // Cek pendaftaran dari local storage terlebih dahulu
    let localList = [];
    try {
      localList = JSON.parse(localStorage.getItem('alghifari_registrations') || '[]');
    } catch (err) {
      localList = [];
    }

    const localFound = localList.find(
      (item) => 
        (item.regNo && item.regNo.toUpperCase().includes(cleanQuery)) || 
        (item.nisn && item.nisn.includes(cleanQuery)) ||
        (item.fullName && item.fullName.toUpperCase().includes(cleanQuery))
    );

    if (localFound) {
      setSearchResult({
        regNo: localFound.regNo,
        name: localFound.fullName,
        nisn: localFound.nisn,
        jalur: localFound.jalur?.toUpperCase() || 'REGULER',
        status: localFound.status || 'Menunggu Verifikasi Berkas',
        notes: 'Formulir Anda telah terkirim ke email panitia (pmb.smaplusalghifari@gmail.com). Panitia sedang meninjau berkas pendaftaran.',
        statusCode: 'VERIFIKASI'
      });
      setHasSearched(true);
      return;
    }

    const found = ppdbConfig.sampleRegistrations.find(
      (item) => 
        item.regNo.toUpperCase().includes(cleanQuery) || 
        item.nisn.includes(cleanQuery)
    );

    setSearchResult(found || null);
    setHasSearched(true);
  };

  const handleSelectSample = (sample) => {
    setQuery(sample.regNo);
    setSearchResult(sample);
    setHasSearched(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full my-8 overflow-hidden shadow-2xl border border-slate-200 relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-school-900 to-school-700 text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-400 text-slate-950 flex items-center justify-center font-bold">
              <ClipboardCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black">
                Cek Status Kelulusan & Berkas PPDB
              </h3>
              <p className="text-xs text-blue-200">
                Penerimaan Siswa Baru TA 2026/2027
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <form onSubmit={handleSearch} className="space-y-3">
            <label className="block text-xs font-bold text-slate-700">
              Masukkan Nomor Registrasi PPDB atau NISN Calon Siswa:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Contoh: PPDB-2026-00124 atau NISN"
                required
                className="flex-1 px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-school-600"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-school-700 hover:bg-school-800 text-white font-bold text-sm flex items-center gap-2 shadow-md transition-all"
              >
                <Search className="w-4 h-4" />
                <span>Cari</span>
              </button>
            </div>

            {/* Quick Demo Buttons */}
            <div className="pt-1">
              <span className="text-[11px] text-slate-500 font-semibold block mb-1.5">
                Coba Contoh Nomor Registrasi Demo:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {ppdbConfig.sampleRegistrations.map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectSample(s)}
                    className="text-[10px] font-mono font-bold bg-slate-100 hover:bg-school-50 hover:text-school-700 text-slate-700 px-2 py-1 rounded-lg border border-slate-200 transition-colors"
                  >
                    {s.regNo} ({s.statusCode})
                  </button>
                ))}
              </div>
            </div>
          </form>

          {/* Result Area */}
          {hasSearched && (
            <div className="pt-4 border-t border-slate-200 animate-fade-in">
              {searchResult ? (
                <div className="space-y-4">
                  {/* Status Banner */}
                  <div className={`p-4 rounded-2xl flex items-start gap-3 ${
                    searchResult.statusCode === 'accepted' 
                      ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                      : searchResult.statusCode === 'verified'
                      ? 'bg-blue-50 text-blue-900 border border-blue-200'
                      : 'bg-amber-50 text-amber-900 border border-amber-200'
                  }`}>
                    {searchResult.statusCode === 'accepted' ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                    ) : searchResult.statusCode === 'verified' ? (
                      <FileCheck className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                    ) : (
                      <Clock className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider">Status Seleksi:</span>
                      <h4 className="text-base font-black">
                        {searchResult.status}
                      </h4>
                      <p className="text-xs mt-1 leading-relaxed">
                        {searchResult.message}
                      </p>
                    </div>
                  </div>

                  {/* Candidate Details Card */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Nama Siswa:</span>
                      <span className="font-bold text-slate-800">{searchResult.fullName}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Nomor Registrasi:</span>
                      <span className="font-mono font-bold text-school-800">{searchResult.regNo}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">NISN:</span>
                      <span className="font-mono text-slate-700">{searchResult.nisn}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Asal Sekolah:</span>
                      <span className="font-medium text-slate-700">{searchResult.schoolOrigin}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Jalur Masuk:</span>
                      <span className="font-semibold text-school-700">{searchResult.jalur}</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-slate-500">Jadwal Tahapan:</span>
                      <span className="font-bold text-slate-900">{searchResult.scheduleTest}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <a
                      href={`https://wa.me/6281234567890?text=Halo%20Admin%20PPDB,%20saya%20ingin%20menanyakan%20status%20pendaftaran%20${searchResult.regNo}%20atas%20nama%20${searchResult.fullName}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center gap-2 shadow transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Hubungi Helpdesk PPDB WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="text-center py-6 bg-red-50/60 rounded-2xl border border-red-200 p-4 space-y-2">
                  <AlertCircle className="w-8 h-8 text-red-500 mx-auto" />
                  <h4 className="text-sm font-bold text-red-800">
                    Data Pendaftaran Tidak Ditemukan
                  </h4>
                  <p className="text-xs text-red-700 max-w-sm mx-auto">
                    Nomor registrasi atau NISN "{query}" belum terdaftar. Pastikan nomor yang dimasukkan sudah benar atau tanyakan langsung ke admin.
                  </p>
                  <a
                    href="https://wa.me/6281234567890?text=Halo%20Admin%20PPDB,%20nomor%20pendaftaran%20saya%20tidak%20ditemukan.%20Mohon%20bantuan."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-school-700 hover:underline pt-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Tanya Bantuan WhatsApp Helpdesk</span>
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
