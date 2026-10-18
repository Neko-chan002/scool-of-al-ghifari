import React, { useState } from 'react';
import { 
  GraduationCap, 
  Users, 
  BookOpenCheck, 
  Building2, 
  MessageSquareShare, 
  ChevronRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { schoolProfile } from '../data/schoolData';

export default function BidangSection({ onNavigatePage }) {
  const [activeBidang, setActiveBidang] = useState(0);

  const iconMap = {
    GraduationCap: GraduationCap,
    Users: Users,
    BookOpenCheck: BookOpenCheck,
    MessageSquareShare: MessageSquareShare,
    Building2: Building2
  };

  const details = [
    {
      title: "Bidang Akademik & Kurikulum Merdeka",
      lead: "Pusat Pengembangan Kompetensi Keilmuan & Sukses PTN",
      items: [
        "Penerapan Kurikulum Merdeka Terpadu yang berpusat pada minat bakat siswa",
        "Klinik Sukses PTN (Bimbingan intensif persiapan UTBK-SNBT bersama bimbel top)",
        "Bilingual Immersion Program (Penguatan percakapan dwi-bahasa Inggris & Arab)",
        "Program pengayaan olimpiade sains (OSN MIPA, IPS, & Kebumian)"
      ]
    },
    {
      title: "Bidang Kesiswaan & Ekstrakurikuler",
      lead: "Mewadahi Bakat, Sportivitas, Karakter, dan Kepemimpinan",
      items: [
        "Paskibra 'Satya Al Ghifari' (Pemegang piala Juara Umum LKBB se-Jawa Barat)",
        "Organisasi Siswa Intra Sekolah (OSIS) & Majelis Perwakilan Kelas (MPK)",
        "30+ Cabang Ekstrakurikuler Olahraga, Seni Degung Sunda, & Sains Robotika",
        "Pendidikan kedisiplinan, bela negara, dan pembinaan kepramukaan"
      ]
    },
    {
      title: "Bidang Keasramaan & Tahfidz Al-Qur'an",
      lead: "Kultur Pesantren Modern & Pembiasaan Akhlak Rabbani 24 Jam",
      items: [
        "Halaqah Tahfidz Al-Qur'an bersanad dengan target hafalan juz 30 dan 29",
        "Pembiasaan shalat tahajud, dhuha berjamaah, dan puasa sunnah",
        "Kajian kitab adab pencari ilmu (Ta'lim Muta'allim)",
        "Pondokan asrama mitra yang bersih, aman, dan kondusif bagi santri luar kota"
      ]
    },
    {
      title: "Bidang Humas & Kemitraan Strategis",
      lead: "Menjalin Sinergi dengan Wali Santri, Kampus, dan Dunia Usaha",
      items: [
        "Forum komunikasi berkala bersama komite sekolah dan orang tua murid",
        "Kerjasama studi lanjut dengan perguruan tinggi negeri (ITB, Unpad, UPI, UGM)",
        "Penyelenggaraan Al Ghifari Edu-Expo dan campus visit tahunan",
        "Pengelolaan portal media sosial resmi dan saluran informasi publik"
      ]
    },
    {
      title: "Bidang Sarana, Prasarana & Lingkungan Hidup",
      lead: "Kampus Hijau Asri Berstandar Adiwiyata Mandiri",
      items: [
        "Masjid Al Ghifari representatif untuk 1.200 jamaah",
        "Laboratorium Komputer Multimedia, Riset AI, dan Laboratorium IPA Terpadu",
        "Ruang kelas ber-AC dengan proyektor LCD dan tata letak modular",
        "Lapangan olahraga serbaguna outdoor dinaungi pepohonan rindang Arcamanik"
      ]
    }
  ];

  const current = details[activeBidang];

  return (
    <section className="py-16 sm:py-24 bg-[#fafcfb] border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12372A]/10 border border-[#12372A]/20 text-xs font-bold text-[#12372A] uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-[#c89b3c]" />
            Struktur Bidang Pelayanan
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Bidang Pengelolaan Sekolah Al Ghifari
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Sinergi lima pilar bidang dalam mewujudkan tata kelola pendidikan yang unggul dalam akademik, kokoh dalam moralitas, dan profesional dalam layanan.
          </p>
        </div>

        {/* 5 Bidang Nav Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-10">
          {schoolProfile.bidangSekolah.map((b, idx) => {
            const IconComp = iconMap[b.icon] || GraduationCap;
            const isSelected = activeBidang === idx;

            return (
              <button
                key={b.id}
                onClick={() => setActiveBidang(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-[#12372A] text-white border-[#12372A] shadow-md -translate-y-1' 
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <IconComp className={`w-5 h-5 ${isSelected ? 'text-[#c89b3c]' : 'text-slate-400'}`} />
                  <span className={`text-[10px] font-bold ${isSelected ? 'text-emerald-200' : 'text-slate-400'}`}>
                    0{idx + 1}
                  </span>
                </div>
                <h4 className="font-bold text-xs sm:text-sm leading-snug">
                  {b.name}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Active Bidang Details Display */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="max-w-3xl text-left space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#c89b3c] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              {current.lead}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              {current.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {schoolProfile.bidangSekolah[activeBidang]?.desc}
            </p>

            <div className="pt-4 space-y-2.5">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Fokus Program Utama:
              </span>
              {current.items.map((it, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span>{it}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-100 flex gap-3">
              <button
                onClick={() => onNavigatePage(activeBidang === 1 ? 'ekskul' : activeBidang === 4 ? 'profil' : 'profil')}
                className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#12372A] hover:bg-[#1a4336] transition-colors flex items-center gap-1.5"
              >
                <span>Lihat Fasilitas & Rincian</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
