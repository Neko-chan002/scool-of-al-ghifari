import React, { useState } from 'react';
import { 
  X, 
  FileCheck, 
  BookMarked, 
  ShieldAlert, 
  Download, 
  CheckCircle2, 
  Send, 
  Printer, 
  MessageCircle,
  HelpCircle,
  FileText
} from 'lucide-react';
import { schoolProfile } from '../data/schoolData';

export default function ServiceModal({ isOpen, serviceType, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    role: 'Wali Murid / Tamu',
    purpose: '',
    gradYear: '2024',
    ijazahNo: '',
    complaintText: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketNo, setTicketNo] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const prefix = serviceType === 'legalisir' ? 'LEG' : serviceType === 'buku-tamu' ? 'TAMU' : 'WBS';
    setTicketNo(`${prefix}-2026-${randomCode}`);
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-md overflow-y-auto animate-fade-in text-slate-800">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-900 to-teal-800 text-white p-5 sm:p-6 relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
              {serviceType === 'legalisir' ? <FileCheck className="w-6 h-6" /> :
               serviceType === 'buku-tamu' ? <BookMarked className="w-6 h-6" /> :
               serviceType === 'brosur' ? <Download className="w-6 h-6" /> :
               <ShieldAlert className="w-6 h-6" />}
            </div>
            <div>
              <h3 className="text-lg font-black">
                {serviceType === 'legalisir' ? 'Layanan Legalisir Ijazah Online' :
                 serviceType === 'buku-tamu' ? 'Buku Tamu Digital Kampus' :
                 serviceType === 'brosur' ? 'Unduh Brosur & Juknis SNMB 2026' :
                 'Kanal Pengaduan & Layanan Ramah Anak (WBS)'}
              </h3>
              <p className="text-xs text-emerald-200">
                SMA Plus Al Ghifari Kota Bandung
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Case 1: Brosur Download Preview */}
          {serviceType === 'brosur' ? (
            <div className="space-y-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center mx-auto">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-base text-slate-900">
                  Brosur Resmi & Panduan SNMB 2026/2027
                </h4>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  Berisi rincian jalur tahfidz, jadwal tes pemetaan, tata tertib sekolah, dan informasi pembiayaan.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Format File:</span>
                  <span className="font-bold text-slate-800">E-Brochure PDF (High-Res)</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Ukuran Berkas:</span>
                  <span className="font-bold text-slate-800">3.8 MB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Tahun Ajaran:</span>
                  <span className="font-bold text-emerald-800">2026 / 2027 (Gelombang II)</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <a
                  href="https://wa.me/6281222887890?text=Bismillah,%20Halo%20Panitia%20SNMB%20SMA%20Plus%20Al%20Ghifari,%20mohon%20kirimkan%20file%20PDF%20Brosur%20dan%20Rincian%20Biaya%202026."
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl font-bold text-xs bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Unduh Brosur via WhatsApp</span>
                </a>
                <button
                  onClick={handleClose}
                  className="py-3 px-4 rounded-xl font-semibold text-xs bg-slate-100 hover:bg-slate-200 text-slate-700"
                >
                  Tutup
                </button>
              </div>
            </div>
          ) : isSuccess ? (
            /* Success confirmation */
            <div className="space-y-4 text-center animate-fade-in">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Permohonan Diterima
                </span>
                <h4 className="text-base font-black text-slate-900 mt-2">
                  Nomor Antrean / Tiket Anda:
                </h4>
                <div className="text-xl font-black text-emerald-900 font-mono tracking-wider mt-1">
                  {ticketNo}
                </div>
                <p className="text-xs text-slate-600 mt-2 max-w-sm mx-auto">
                  Petugas Tata Usaha SMA Plus Al Ghifari Bandung akan memproses layanan Anda dan mengirimkan konfirmasi via WhatsApp.
                </p>
              </div>

              <div className="pt-3 flex gap-2">
                <a
                  href={`https://wa.me/6281222887890?text=Halo%20Tata%20Usaha%20Al%20Ghifari,%20saya%20telah%20mengajukan%20layanan%20dengan%20No%20Tiket:%20${ticketNo}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-xl font-bold text-xs bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Konfirmasi WA Tata Usaha</span>
                </a>
                <button
                  onClick={handleClose}
                  className="px-4 py-2.5 rounded-xl font-semibold text-xs bg-slate-100 text-slate-700"
                >
                  Selesai
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Service Form */
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nama Lengkap Pemohon *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Ahmad Fauzan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nomor WhatsApp Aktif *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Contoh: 08122288xxxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              {serviceType === 'legalisir' && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Tahun Kelulusan
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: 2022"
                      value={formData.gradYear}
                      onChange={(e) => setFormData({ ...formData, gradYear: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Jumlah Lembar
                    </label>
                    <select className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white">
                      <option>5 Lembar (Standar)</option>
                      <option>10 Lembar</option>
                      <option>15 Lembar</option>
                    </select>
                  </div>
                </div>
              )}

              {serviceType === 'buku-tamu' && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Instansi / Keperluan Kunjungan
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Studi Banding / Orang Tua Calon Siswa"
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
              )}

              {serviceType === 'pengaduan' && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Isi Laporan / Pengaduan (Kerahasiaan Terjamin) *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tuliskan laporan Anda secara jelas. Kami berkomitmen menjaga identitas pelapor."
                    value={formData.complaintText}
                    onChange={(e) => setFormData({ ...formData, complaintText: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  ></textarea>
                </div>
              )}

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Permohonan</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
