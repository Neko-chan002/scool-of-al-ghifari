import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { schoolProfile } from '../data/schoolData';
import { socialMediaLinks } from '../data/socialData';

export default function HomeLocationSection() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("SMA Plus Al Ghifari Jl Inspeksi Pengairan No 23 Arcamanik Bandung")}`;

  return (
    <section className="py-8 sm:py-11 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 mb-6 pb-3 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12372A]/10 text-[#12372A] text-[11px] font-bold uppercase tracking-wider mb-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#c89b3c]" />
              <span>Lokasi Kampus & Pelayanan</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Alamat Kampus Terpadu Arcamanik Bandung
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 line-clamp-1 mt-0.5">
              Kawasan pendidikan yang asri, kondusif, dan mudah diakses dari berbagai penjuru Kota Bandung.
            </p>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold text-[#12372A] hover:text-[#c89b3c] flex items-center gap-1.5 transition-colors shrink-0"
          >
            <span>Buka Navigasi Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 2-Column Grid: Map Embed (6 cols) + Info Cards (6 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Peta Google Maps Interaktif (6 cols) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex-1 min-h-[300px] sm:min-h-[360px] bg-slate-100">
              <iframe
                title="Peta Lokasi SMA Plus Al Ghifari Bandung"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7788487739556!2d107.6836752749965!3d-6.917030593082531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68dd2632204c35%3A0xd68d90e0b6062f6b!2sSMA%20Plus%20Al-Ghifari!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Floating Badge */}
              <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-white/95 backdrop-blur-xs p-3 rounded-2xl border border-slate-200 shadow-md flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#12372A] text-[#c89b3c] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-black text-slate-900 leading-tight">Kampus Al Ghifari Arcamanik</p>
                  <p className="text-[10px] text-slate-500 line-clamp-1">Dekat Sport Jabar & Jl. AH Nasution</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kartu Informasi Alamat, Kontak & Jam Layanan (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-3.5">
            
            {/* Card 1: Alamat */}
            <div className="bg-[#fafcfb] border border-slate-200/90 rounded-2xl p-4 shadow-2xs hover:shadow-xs transition-all">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#12372A]/10 text-[#12372A] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#12372A]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                    Alamat Kampus
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-1 line-clamp-2 leading-relaxed">
                    {schoolProfile.alamat}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                    Patokan: Dekat kawasan Sport Jabar Arcamanik & Cisaranten Kulon.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Jam Operasional Pelayanan */}
            <div className="bg-[#fafcfb] border border-slate-200/90 rounded-2xl p-4 shadow-2xs hover:shadow-xs transition-all">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#c89b3c]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                    Jam Layanan Kampus & SPMB
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1.5 text-xs">
                    <div className="bg-white p-2 rounded-xl border border-slate-200">
                      <p className="font-bold text-slate-900">Senin - Jumat</p>
                      <p className="text-[11px] text-slate-500">07.30 - 15.30 WIB (Layanan Penuh)</p>
                    </div>
                    <div className="bg-white p-2 rounded-xl border border-slate-200">
                      <p className="font-bold text-slate-900">Sabtu (SPMB)</p>
                      <p className="text-[11px] text-slate-500">08.00 - 13.00 WIB (Konsultasi Siswa)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Kontak & Tombol Aksi */}
            <div className="bg-[#fafcfb] border border-slate-200/90 rounded-2xl p-4 shadow-2xs hover:shadow-xs transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                    Kontak Layanan Informasi
                  </h4>
                  <p className="text-xs text-slate-600">
                    Telepon: <span className="font-bold text-slate-900">{schoolProfile.telepon}</span>
                  </p>
                  <p className="text-xs text-slate-600">
                    Email: <span className="font-bold text-slate-900">{schoolProfile.email}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={socialMediaLinks.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-2xs transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Chat WhatsApp</span>
                  </a>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2.5 rounded-xl bg-[#12372A] hover:bg-[#1a4336] text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-2xs transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#c89b3c]" />
                    <span>Petunjuk</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
