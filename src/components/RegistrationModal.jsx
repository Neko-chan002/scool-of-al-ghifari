import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Printer, 
  MessageCircle, 
  CheckCircle2, 
  User, 
  Users, 
  FileText, 
  GraduationCap,
  Mail,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Clock,
  Send,
  Calendar,
  Phone,
  MapPin,
  Building2,
  FileCheck2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  SCHOOL_EMAILS, 
  generateOfficialEmailText, 
  generateMailtoUrl, 
  dispatchRegistrationEmail 
} from '../utils/emailTemplate';

export default function RegistrationModal({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [resultTab, setResultTab] = useState('email'); // 'email' atau 'kartu'
  const [generatedRegNo, setGeneratedRegNo] = useState('');
  const [dispatchInfo, setDispatchInfo] = useState(null);

  const [regData, setRegData] = useState({
    fullName: '',
    nisn: '',
    gender: 'Laki-laki',
    schoolOrigin: '',
    birthPlace: 'Bandung',
    birthDate: '',
    phone: '',
    email: '',
    jalur: 'tahfidz',
    tahfidzJuz: '3 Juz (Juz 30, 29, 28)',
    peminatan: 'MIPA & Rekayasa Teknologi',
    parentName: '',
    parentPhone: '',
    parentJob: 'Wiraswasta',
    address: '',
    ekskulInterest: 'Paskibra Satya Al Ghifari (Juara Umum Jabar)'
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (!regData.fullName.trim() || !regData.nisn.trim() || !regData.schoolOrigin.trim()) {
        alert('Mohon lengkapi Nama Lengkap, NISN, dan Asal Sekolah calon siswa.');
        return;
      }
    }
    if (currentStep === 2) {
      if (!regData.parentName.trim() || !regData.parentPhone.trim()) {
        alert('Mohon lengkapi Nama Orang Tua dan Nomor WhatsApp Orang Tua.');
        return;
      }
    }
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const newRegNo = `SNMB-2026-ALG-${randomSuffix}`;
    setGeneratedRegNo(newRegNo);

    // Kirim secara otomatis ke sistem email sekolah
    const dispatchResult = await dispatchRegistrationEmail(regData, newRegNo);
    setDispatchInfo(dispatchResult);

    setIsSubmitting(false);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 130,
        spread: 85,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti not available:', err);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmailText = () => {
    const text = generateOfficialEmailText(regData, generatedRegNo);
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const mailtoLink = generateMailtoUrl(regData, generatedRegNo);
  const waMessage = `Bismillah, Halo Panitia SNMB SMA Plus Al Ghifari Bandung, saya telah mengisi formulir online dengan No. Registrasi: ${generatedRegNo} atas nama ${regData.fullName} dari ${regData.schoolOrigin}. Salinan data pendaftaran telah dikirim ke email panitia (${SCHOOL_EMAILS.pmb}). Mohon informasi jadwal verifikasi berkas. Terima kasih.`;
  const waUrl = `https://wa.me/6281222887890?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in text-slate-800">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full my-6 overflow-hidden shadow-2xl border border-slate-200 relative flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#12372A] text-white p-5 sm:p-6 relative border-b border-[#0d2a20]">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#c89b3c] text-slate-950 flex items-center justify-center font-bold shadow-xs">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black tracking-tight text-white">
                Formulir Pendaftaran SNMB Online 2026/2027
              </h3>
              <p className="text-xs text-emerald-200">
                SMA Plus Al Ghifari Kota Bandung • Terintegrasi Email Resmi Sekolah
              </p>
            </div>
          </div>

          {/* Step Breadcrumbs during fill-out */}
          {!isSubmitted && (
            <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center text-xs">
              <div className={`p-2 rounded-xl transition-all ${currentStep === 1 ? 'bg-white/15 font-bold text-amber-300 border border-white/20' : 'text-slate-300'}`}>
                1. Data Siswa
              </div>
              <div className={`p-2 rounded-xl transition-all ${currentStep === 2 ? 'bg-white/15 font-bold text-amber-300 border border-white/20' : 'text-slate-300'}`}>
                2. Data Orang Tua
              </div>
              <div className={`p-2 rounded-xl transition-all ${currentStep === 3 ? 'bg-white/15 font-bold text-amber-300 border border-white/20' : 'text-slate-300'}`}>
                3. Peminatan & Kirim
              </div>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 bg-stone-50/50">
          
          {/* ================= SUCCESS STATE: SUBMITTED ================= */}
          {isSubmitted ? (
            <div className="space-y-5 animate-fade-in">
              
              {/* Green Delivery Confirmation Card */}
              <div className="bg-[#12372A] text-white p-5 rounded-2xl border border-emerald-900 shadow-md">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black tracking-wider uppercase text-[#c89b3c] bg-white/10 px-2 py-0.5 rounded">
                        PENGIRIMAN BERHASIL
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
                        Formulir Resmi Telah Masuk ke Email Panitia Sekolah!
                      </h4>
                      <p className="text-xs text-emerald-200 mt-0.5">
                        Tujuan: <strong>{SCHOOL_EMAILS.pmb}</strong> • Tembusan: <strong>{regData.email || 'Email Pendaftar'}</strong>
                      </p>
                    </div>
                  </div>

                  <div className="text-left sm:text-right shrink-0 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
                    <span className="text-[9px] text-slate-300 uppercase block font-semibold">Nomor Registrasi:</span>
                    <span className="text-xs sm:text-sm font-mono font-black text-[#c89b3c]">
                      {generatedRegNo}
                    </span>
                  </div>
                </div>
              </div>

              {/* Sub-Tabs: Format Email Resmi vs Kartu Bukti */}
              <div className="flex border-b border-slate-200 gap-2">
                <button
                  onClick={() => setResultTab('email')}
                  className={`pb-2.5 px-4 text-xs font-bold transition-all border-b-2 flex items-center gap-1.5 ${
                    resultTab === 'email'
                      ? 'border-[#12372A] text-[#12372A]'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Mail className="w-4 h-4 text-[#c89b3c]" />
                  <span>Format Email Resmi Sekolah</span>
                </button>
                <button
                  onClick={() => setResultTab('kartu')}
                  className={`pb-2.5 px-4 text-xs font-bold transition-all border-b-2 flex items-center gap-1.5 ${
                    resultTab === 'kartu'
                      ? 'border-[#12372A] text-[#12372A]'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <FileCheck2 className="w-4 h-4 text-[#c89b3c]" />
                  <span>Kartu Peserta SNMB (Cetak)</span>
                </button>
              </div>

              {/* TAB 1: FORMAT EMAIL RESMI (BUKAN ABAL-ABAL) */}
              {resultTab === 'email' && (
                <div className="space-y-4 animate-fade-in">
                  
                  {/* Email Actions Toolbar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 bg-white p-3 rounded-xl border border-slate-200 text-xs">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="w-4 h-4 text-[#12372A]" />
                      <span>Format Surat Dinas & Tabel Terstruktur</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleCopyEmailText}
                        className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-slate-700 font-bold flex items-center gap-1.5 transition-colors"
                      >
                        {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedEmail ? 'Teks Tersalin!' : 'Salin Format Email'}</span>
                      </button>

                      <a
                        href={mailtoLink}
                        className="px-3.5 py-1.5 rounded-lg bg-[#12372A] hover:bg-[#1a4336] text-white font-bold flex items-center gap-1.5 shadow-2xs transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#c89b3c]" />
                        <span>Buka di Gmail / Mail App</span>
                      </a>
                    </div>
                  </div>

                  {/* Clean Monospace / Document Dossier Display */}
                  <div className="bg-white rounded-2xl p-5 border border-slate-300 shadow-xs font-mono text-[11px] sm:text-xs text-slate-800 leading-relaxed overflow-x-auto whitespace-pre-wrap select-all">
                    {generateOfficialEmailText(regData, generatedRegNo)}
                  </div>
                </div>
              )}

              {/* TAB 2: KARTU BUKTI PENDAFTARAN (PRINTABLE) */}
              {resultTab === 'kartu' && (
                <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 animate-fade-in" id="print-area">
                  <div className="flex justify-between items-start border-b border-slate-200 pb-4">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">KARTU BUKTI PENDAFTARAN</span>
                      <h3 className="text-lg font-black text-slate-900 mt-0.5">
                        SMA Plus Al Ghifari Kota Bandung
                      </h3>
                      <p className="text-xs text-slate-500">Tahun Ajaran 2026/2027 • Kampus Terpadu Arcamanik</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] text-slate-400 font-bold uppercase block">NO. REGISTRASI:</span>
                      <span className="text-sm font-black text-[#12372A] font-mono">{generatedRegNo}</span>
                      <span className="inline-block mt-1 bg-amber-100 text-amber-900 text-[9px] font-black px-2 py-0.5 rounded">
                        MENUNGGU VERIFIKASI
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs py-2">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Nama Lengkap Siswa:</span>
                      <strong className="text-slate-900 text-sm">{regData.fullName}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">NISN:</span>
                      <strong className="text-slate-900 font-mono text-sm">{regData.nisn}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Asal Sekolah SMP/MTs:</span>
                      <strong className="text-slate-900">{regData.schoolOrigin}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Jalur Pilihan:</span>
                      <strong className="text-[#12372A] uppercase">{regData.jalur}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Peminatan Kurikulum:</span>
                      <strong className="text-slate-900">{regData.peminatan}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">No. WhatsApp Orang Tua:</span>
                      <strong className="text-slate-900">{regData.parentPhone}</strong>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-2">
                    <span>Email Panitia: <strong>{SCHOOL_EMAILS.pmb}</strong></span>
                    <span>Waktu Cetak: {new Date().toLocaleDateString('id-ID', { dateStyle: 'long' })}</span>
                  </div>
                </div>
              )}

              {/* Action Buttons Row */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-emerald-800 hover:bg-emerald-900 text-white flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>Konfirmasi via WhatsApp Panitia</span>
                </a>

                <button
                  onClick={handlePrint}
                  className="py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-stone-100 hover:bg-stone-200 text-slate-800 flex items-center justify-center gap-2 transition-all border border-slate-200"
                >
                  <Printer className="w-4 h-4" />
                  <span>Cetak Kartu / Simpan PDF</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={onClose}
                  className="text-xs text-slate-500 hover:text-slate-800 font-semibold underline"
                >
                  Selesai & Kembali ke Portal
                </button>
              </div>

            </div>
          ) : (

            /* ================= MULTI-STEP REGISTRATION FORM ================= */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Notification Box about School Email Output */}
              <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong>Pemberitahuan Otomatis:</strong> Setelah Anda menekan tombol kirim, formulir pendaftaran ini akan <strong>secara otomatis dikirimkan dengan format resmi berstandar dinas</strong> ke email panitia SPMB (<strong>{SCHOOL_EMAILS.pmb}</strong>) dengan tembusan arsip ke email Anda.
                </div>
              </div>

              {/* STEP 1: DATA CALON SISWA */}
              {currentStep === 1 && (
                <div className="space-y-3.5 animate-fade-in">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 pb-1 border-b border-slate-200">
                    <User className="w-4 h-4 text-[#12372A]" />
                    Langkah 1: Biodata Calon Siswa Baru
                  </h4>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nama Lengkap Siswa (Sesuai Ijazah SMP) *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={regData.fullName}
                      onChange={handleChange}
                      placeholder="Contoh: Muhammad Fadhil Al-Farizi"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#12372A] bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        NISN (10 Digit Angka) *
                      </label>
                      <input
                        type="text"
                        name="nisn"
                        value={regData.nisn}
                        onChange={handleChange}
                        placeholder="Contoh: 0082345678"
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#12372A] bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Jenis Kelamin *
                      </label>
                      <select
                        name="gender"
                        value={regData.gender}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#12372A] bg-white"
                      >
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Tempat Lahir
                      </label>
                      <input
                        type="text"
                        name="birthPlace"
                        value={regData.birthPlace}
                        onChange={handleChange}
                        placeholder="Contoh: Bandung"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#12372A] bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Tanggal Lahir
                      </label>
                      <input
                        type="date"
                        name="birthDate"
                        value={regData.birthDate}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#12372A] bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Asal Sekolah SMP / MTs *
                    </label>
                    <input
                      type="text"
                      name="schoolOrigin"
                      value={regData.schoolOrigin}
                      onChange={handleChange}
                      placeholder="Contoh: SMP Plus Al Ghifari / SMPN 17 Bandung"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#12372A] bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Aktif Calon Siswa / Wali (Untuk Tembusan Arsip)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={regData.email}
                        onChange={handleChange}
                        placeholder="Contoh: fadhil.alghifari@gmail.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#12372A] bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        No. WhatsApp Siswa
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={regData.phone}
                        onChange={handleChange}
                        placeholder="Contoh: 081234567890"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#12372A] bg-white"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: DATA ORANG TUA / WALI */}
              {currentStep === 2 && (
                <div className="space-y-3.5 animate-fade-in">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 pb-1 border-b border-slate-200">
                    <Users className="w-4 h-4 text-[#12372A]" />
                    Langkah 2: Data Orang Tua / Wali Santri
                  </h4>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nama Lengkap Orang Tua / Wali *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={regData.parentName}
                      onChange={handleChange}
                      placeholder="Contoh: Drs. H. Ahmad Rahmat, M.M."
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#12372A] bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nomor WhatsApp Orang Tua (Aktif untuk Verifikasi) *
                      </label>
                      <input
                        type="tel"
                        name="parentPhone"
                        value={regData.parentPhone}
                        onChange={handleChange}
                        placeholder="Contoh: 081222887890"
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#12372A] bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Pekerjaan Orang Tua / Wali
                      </label>
                      <input
                        type="text"
                        name="parentJob"
                        value={regData.parentJob}
                        onChange={handleChange}
                        placeholder="Contoh: ASN / Wiraswasta / Karyawan Swasta"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#12372A] bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Alamat Tempat Tinggal Lengkap Sesuai KK
                    </label>
                    <textarea
                      name="address"
                      rows={3}
                      value={regData.address}
                      onChange={handleChange}
                      placeholder="Nama Jalan, No. Rumah, RT/RW, Kelurahan, Kecamatan, Kota/Kabupaten"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#12372A] bg-white"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: PILIHAN JALUR & PEMINATAN */}
              {currentStep === 3 && (
                <div className="space-y-3.5 animate-fade-in">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 pb-1 border-b border-slate-200">
                    <FileText className="w-4 h-4 text-[#12372A]" />
                    Langkah 3: Pilihan Jalur, Peminatan & Pengiriman Email
                  </h4>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Pilihan Jalur Masuk Al Ghifari *
                    </label>
                    <select
                      name="jalur"
                      value={regData.jalur}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#12372A] bg-white font-medium"
                    >
                      <option value="tahfidz">Jalur Prestasi Tahfidz Qur'an (Bebas Biaya DSP s.d. 100%)</option>
                      <option value="prestasi">Jalur Prestasi Akademik / Olahraga / Seni Jabar</option>
                      <option value="alumni">Jalur Khusus Alumni SMP Plus Al Ghifari Bandung</option>
                      <option value="reguler">Jalur Reguler (Tes Pemetaan Bakat & Karakter)</option>
                      <option value="afirmasi">Jalur Afirmasi / Prasejahtera Berprestasi</option>
                    </select>
                  </div>

                  {regData.jalur === 'tahfidz' && (
                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                      <label className="block text-xs font-bold text-emerald-900 mb-1">
                        Target / Jumlah Hafalan Saat Ini:
                      </label>
                      <input
                        type="text"
                        name="tahfidzJuz"
                        value={regData.tahfidzJuz}
                        onChange={handleChange}
                        placeholder="Contoh: 3 Juz (Juz 30, 29, 28) atau 5 Juz"
                        className="w-full px-3 py-2 rounded-lg border border-emerald-300 text-xs bg-white focus:outline-none"
                      />
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Peminatan Kurikulum Merdeka *
                      </label>
                      <select
                        name="peminatan"
                        value={regData.peminatan}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#12372A] bg-white"
                      >
                        <option value="MIPA & Rekayasa Teknologi">MIPA & Rekayasa Teknologi</option>
                        <option value="IPS & Sosio-Humaniora">IPS & Sosio-Humaniora</option>
                        <option value="Bahasa & Diplomasi Kebudayaan">Bahasa & Diplomasi Kebudayaan</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Minat Ekstrakurikuler Unggulan
                      </label>
                      <select
                        name="ekskulInterest"
                        value={regData.ekskulInterest}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#12372A] bg-white"
                      >
                        <option value="Paskibra Satya Al Ghifari (Juara Umum Jabar)">Paskibra Satya Al Ghifari (Juara Umum Jabar)</option>
                        <option value="DKM & Remaja Masjid Rabbani">DKM & Remaja Masjid Rabbani</option>
                        <option value="Klub Futsal & Sepakbola">Klub Futsal & Sepakbola</option>
                        <option value="KIR & Robotika Modern">KIR & Robotika Modern</option>
                        <option value="PMR & KSR">PMR & KSR</option>
                        <option value="Seni Marawis & Degung Sunda">Seni Marawis & Degung Sunda</option>
                        <option value="Al Ghifari English Club">Al Ghifari English Club</option>
                      </select>
                    </div>
                  </div>

                  {/* Destination Email Info Card */}
                  <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200 text-xs space-y-1">
                    <span className="font-bold text-slate-800 block">Penerima Output Formulir:</span>
                    <div className="flex items-center gap-2 text-slate-600 font-mono text-[11px]">
                      <Mail className="w-3.5 h-3.5 text-[#12372A]" />
                      <span>{SCHOOL_EMAILS.pmb}</span>
                      <span className="text-slate-400">•</span>
                      <span>Arsip: {SCHOOL_EMAILS.official}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#12372A] shrink-0 mt-0.5" />
                    <span>
                      Data yang saya masukkan adalah benar. Saya bersedia mengikuti tahapan wawancara pemetaan dan tes hafalan Al-Qur'an di Kampus SMA Plus Al Ghifari Bandung.
                    </span>
                  </div>
                </div>
              )}

              {/* Form Navigation Buttons */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 flex items-center gap-1 transition-colors border border-slate-200"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Sebelumnya</span>
                  </button>
                ) : <div></div>}

                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#12372A] hover:bg-[#1a4336] flex items-center gap-1 shadow-2xs transition-all ml-auto"
                  >
                    <span>Langkah Selanjutnya</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-[#c89b3c] hover:bg-[#d4a849] shadow-md flex items-center gap-2 ml-auto transition-transform active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="w-4 h-4 animate-spin" />
                        <span>Mengirimkan ke Email Sekolah...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-slate-950" />
                        <span>Kirim Pendaftaran ke Email Sekolah</span>
                      </>
                    )}
                  </button>
                )}
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
}
