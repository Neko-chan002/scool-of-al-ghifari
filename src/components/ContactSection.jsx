import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle, 
  CheckCircle2,
  Navigation
} from 'lucide-react';
import { socialMediaLinks } from '../data/socialData';
import { schoolProfile } from '../data/schoolData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'Informasi PPDB 2026',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWA = () => {
    const text = `Bismillah, Halo Panitia SPMB ${schoolProfile.name}, nama saya ${formData.name}. Subjek: ${formData.subject}. Pesan: ${formData.message}`;
    window.open(`https://wa.me/6281222887890?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="kontak" className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            Lokasi Kampus & Kontak
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Hubungi Panitia & Kunjungi Kampus Kami
          </h2>
          <p className="mt-2 text-slate-600 text-sm leading-relaxed">
            Jadwalkan kunjungan sekolah (School Tour) atau konsultasi langsung bersama panitia SPMB kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-start gap-3.5 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Alamat Kampus</h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  {schoolProfile.alamat}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-start gap-3.5 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Telepon & WhatsApp</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Hotline: {schoolProfile.telepon}
                </p>
                <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                  WhatsApp: {schoolProfile.hotlineWA}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-start gap-3.5 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Email Resmi</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  {schoolProfile.email}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-start gap-3.5 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Jam Layanan Kampus</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Senin - Jumat: 07.30 - 15.30 WIB
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Sabtu (SPMB): 08.00 - 13.00 WIB
                </p>
              </div>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("SMA Plus Al Ghifari Jl Inspeksi Pengairan No 23 Arcamanik Bandung")}`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 text-amber-300" />
              <span>Buka Petunjuk Arah Google Maps</span>
            </a>
          </div>

          {/* Right: Embedded Map & Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="rounded-3xl overflow-hidden border border-slate-200 h-64 sm:h-72 bg-slate-200 relative">
              <iframe
                title="Peta Lokasi SMA Plus Al Ghifari"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7788487739556!2d107.6836752749965!3d-6.917030593082531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68dd2632204c35%3A0xd68d90e0b6062f6b!2sSMA%20Plus%20Al-Ghifari!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs">
              <h4 className="font-bold text-slate-900 text-sm mb-1">
                Kirim Pertanyaan Cepat
              </h4>
              <p className="text-xs text-slate-500 mb-3.5">
                Kami siap membantu menjawab kebutuhan Anda seputar sekolah.
              </p>

              {submitted ? (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h5 className="font-bold text-emerald-900 text-xs">Pesan Terkirim!</h5>
                  <p className="text-xs text-slate-600">Lanjutkan percakapan langsung di WhatsApp:</p>
                  <button
                    onClick={handleSendWA}
                    className="px-4 py-2 rounded-xl bg-emerald-700 text-white font-bold text-xs inline-flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Buka WhatsApp</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <input
                      type="text"
                      placeholder="Nama Lengkap"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="px-3.5 py-2 rounded-xl border border-slate-300 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    />
                    <input
                      type="tel"
                      placeholder="Nomor WhatsApp"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="px-3.5 py-2 rounded-xl border border-slate-300 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>

                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-emerald-600"
                  >
                    <option value="Informasi PPDB 2026">Informasi PPDB 2026</option>
                    <option value="Jadwal Kunjungan Kampus">Jadwal Kunjungan Kampus (School Tour)</option>
                    <option value="Beasiswa Prestasi">Beasiswa Prestasi & Afirmasi</option>
                    <option value="Pertanyaan Umum">Pertanyaan Lainnya</option>
                  </select>

                  <textarea
                    rows={2}
                    placeholder="Tuliskan pertanyaan Anda..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-emerald-600"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim Pesan</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
