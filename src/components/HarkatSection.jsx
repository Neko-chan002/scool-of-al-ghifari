import React, { useState } from 'react';
import { 
  Sparkles, 
  Flag, 
  Globe, 
  BookOpen, 
  HeartPulse, 
  Calendar,
  CheckCircle2,
  Clock,
  Layers,
  Award
} from 'lucide-react';
import { schoolProfile } from '../data/schoolData';

export default function HarkatSection() {
  const [activeDay, setActiveDay] = useState(0);

  const iconMap = {
    Flag: Flag,
    Globe: Globe,
    BookOpen: BookOpen,
    Sparkles: Sparkles,
    HeartPulse: HeartPulse
  };

  const dayDetails = [
    {
      hari: "Senin",
      tema: "Wawasan Kebangsaan & Kepemimpinan",
      tagline: "Menumbuhkan Jiwa Nasionalisme & Kedisiplinan Patriotik",
      activities: [
        "Upacara bendera rutin dengan petugas bergilir per kelas",
        "Amanat kepemimpinan dari Kepala Sekolah & Tokoh Tamu",
        "Pemeriksaan kedisiplinan atribut & kerapian seragam",
        "Menyanyikan lagu kebangsaan & Mars Al Ghifari"
      ],
      quote: "Pemimpin besar lahir dari kedisiplinan dan rasa cinta yang mendalam terhadap tanah air."
    },
    {
      hari: "Selasa",
      tema: "Wawasan Global & Bilingual Immersion",
      tagline: "Membuka Cakrawala Dunia dengan Bahasa Internasional",
      activities: [
        "English & Arabic Morning Assembly (Pidato 3 Bahasa)",
        "Conversation circle & kosakata baru harian",
        "Bedah berita internasional & sains terkini",
        "Simulasi debat bahasa Inggris (Al Ghifari English Club)"
      ],
      quote: "Bahasa adalah kunci jendela dunia, mengantarkan kita bersaing di kancah internasional."
    },
    {
      hari: "Rabu",
      tema: "Literasi & Peduli Lingkungan (Eco-Green)",
      tagline: "Mencintai Buku, Menjaga Kelestarian Bumi Arcamanik",
      activities: [
        "Gerakan membaca senyap (silent reading) 15 menit sebelum KBM",
        "Aksi 'Kutang' (Kutip Sampah Sekarang) dan pemilahan bank sampah",
        "Perawatan taman hidroponik & edukasi pemilahan sampah organik",
        "Resume buku bacaan mingguan di Pojok Literasi Rabbani"
      ],
      quote: "Bumi yang lestari dan akal yang cerdas berakar dari kebiasaan membaca dan kepedulian lingkungan."
    },
    {
      hari: "Kamis",
      tema: "Rebo Nyunda (Kearifan Budaya Pasundan)",
      tagline: "Hade Tata Hade Basa, Ngamumule Seni Budaya Sunda",
      activities: [
        "Kewajiban mengenakan busana adat Sunda (Pangsi & Kebaya)",
        "Bertutur menggunakan Basa Sunda Lemes dalam interaksi warga sekolah",
        "Latihan kesenian gamelan degung Sunda & rampak angklung",
        "Mengenal kuliner tradisional Sunda di kantin sekolah"
      ],
      quote: "Ulah leungiteun jati kasilih ku junti. Rawat tradisi leluhur dengan penuh kebanggaan."
    },
    {
      hari: "Jumat",
      tema: "Sehat Jasmani & Rohani (Jumat Berkah)",
      tagline: "Meneguhkan Iman, Menyehatkan Raga, Menebar Kebaikan",
      activities: [
        "Shalat Dhuha berjamaah & tilawah Surah Al-Kahfi bersama di Masjid Al Ghifari",
        "Kajian tematik adab Rabbani dan kultum oleh siswa",
        "Senam kebugaran jasmani & jalan santai keliling kawasan hijau",
        "Program 'Jumat Sedekah' untuk yatim dan dhuafa sekitar Arcamanik"
      ],
      quote: "Kekuatan mukmin sejati terpancar dari raga yang bugar dan hati yang senantiasa berdzikir."
    }
  ];

  const current = dayDetails[activeDay];
  const IconComp = iconMap[schoolProfile.gerakanHarkat[activeDay]?.icon] || Sparkles;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-emerald-50/20 to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-300 text-xs font-bold text-emerald-900 uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-emerald-700" />
            Program Karakter Unggulan Khas Al Ghifari
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Gerakan 7 Harkat (7 Hari Berkarakter)
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Inovasi pendidikan karakter terpadu SMA Plus Al Ghifari Bandung yang menanamkan pembiasaan positif tematik setiap hari bagi seluruh siswa.
          </p>
        </div>

        {/* 5 Days Interactive Switcher */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3 mb-10">
          {schoolProfile.gerakanHarkat.map((item, idx) => {
            const ItemIcon = iconMap[item.icon] || Sparkles;
            const isSelected = activeDay === idx;

            return (
              <button
                key={idx}
                onClick={() => setActiveDay(idx)}
                className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-emerald-800 text-white border-emerald-800 shadow-md -translate-y-1' 
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-black uppercase tracking-wider ${isSelected ? 'text-amber-300' : 'text-emerald-700'}`}>
                    {item.hari}
                  </span>
                  <ItemIcon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                </div>
                <h4 className="font-bold text-xs leading-snug line-clamp-2">
                  {item.tema}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Active Day Showcase Card (Vibrant, Rich & Informative) */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Theme details */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold border border-emerald-200">
                <IconComp className="w-4 h-4 text-emerald-700" />
                <span>Pembiasaan Hari {current.hari}</span>
              </div>

              <h3 className="text-xl sm:text-3xl font-black text-slate-900 leading-tight">
                {current.tema}
              </h3>

              <p className="text-emerald-800 font-semibold text-xs sm:text-sm">
                "{current.tagline}"
              </p>

              <div className="space-y-2.5 pt-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Aktivitas Nyata di Sekolah:
                </span>
                {current.activities.map((act, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs italic text-slate-500">
                💬 {current.quote}
              </div>
            </div>

            {/* Right Column: Visual illustration banner */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100 h-64 sm:h-80">
                <img 
                  src={
                    activeDay === 0 ? "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80" :
                    activeDay === 1 ? "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80" :
                    activeDay === 2 ? "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80" :
                    activeDay === 3 ? "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80" :
                    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
                  }
                  alt={current.tema}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded uppercase">
                    Budaya Positif Al Ghifari
                  </span>
                  <h4 className="font-bold text-sm sm:text-base mt-1 drop-shadow-sm">
                    Mewujudkan Pelajar Pancasila Rabbani
                  </h4>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
