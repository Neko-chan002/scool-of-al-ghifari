import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  FileCheck2, 
  Sparkles, 
  CheckCircle2, 
  Scale, 
  HandHeart,
  ChevronRight
} from 'lucide-react';

export default function ZonaIntegritasSection() {
  const items = [
    {
      id: "renstra",
      title: "Rencana Strategis (Renstra)",
      badge: "Tata Kelola Mutu",
      icon: Scale,
      desc: "Peta jalan pengembangan jangka menengah SMA Plus Al Ghifari menuju sekolah islam rujukan nasional yang akuntabel, transparan, dan berdaya saing global.",
      points: [
        "Peningkatan standar kompetensi pendidik bersertifikasi",
        "Pengembangan ekosistem digital e-learning terpadu",
        "Optimalisasi program pembinaan akhlak Rabbani & 7 Harkat"
      ]
    },
    {
      id: "wbk",
      title: "Sertifikat WBK (Wilayah Bebas Korupsi)",
      badge: "Integritas & Kejujuran",
      icon: Award,
      desc: "Komitmen nyata warga sekolah dalam mewujudkan lingkungan pendidikan yang bersih dari segala bentuk gratifikasi, pungutan liar, dan ketidakadilan administrasi.",
      points: [
        "Transparansi rincian biaya pendidikan tanpa pungutan tersembunyi",
        "Akuntabilitas pengelolaan dana operasional sekolah (BOS/BOPD)",
        "Sistem digitalisasi keuangan cashless berbasis perbankan syariah"
      ]
    },
    {
      id: "maklumat",
      title: "Maklumat Standar Pelayanan",
      badge: "Janji Layanan",
      icon: FileCheck2,
      desc: "Pernyataan resmi pimpinan sekolah untuk memberikan pelayanan prima yang cepat, santun, tepat waktu, dan ramah kepada siswa, wali santri, dan masyarakat.",
      points: [
        "Pelayanan legalisir dan surat keterangan maksimal 1x24 jam",
        "Layanan konsultasi BK & pendampingan psikologis siswa",
        "Kemudahan akses informasi melalui helpdesk WhatsApp terpadu"
      ]
    },
    {
      id: "wbbm",
      title: "Siap Menuju WBBM",
      badge: "Birokrasi Bersih Melayani",
      icon: HandHeart,
      desc: "Langkah berkelanjutan untuk menghadirkan kultur birokrasi sekolah yang melayani dengan hati, mengutamakan kepuasan pelanggan, dan berwawasan ramah anak.",
      points: [
        "Pemberdayaan kotak saran & whistleblower anti perundungan",
        "Evaluasi berkala indeks kepuasan wali murid setiap semester",
        "Pelayanan responsif tanggap darurat kesehatan UKS & konseling"
      ]
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12372A]/10 border border-[#12372A]/20 text-xs font-bold text-[#12372A] uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-[#c89b3c]" />
            Zona Integritas & Tata Kelola
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Komitmen Wilayah Bebas Korupsi & Bersih Melayani
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            SMA Plus Al Ghifari Bandung berkomitmen menjamin mutu pendidikan yang transparan, akuntabel, bebas diskriminasi, serta memberikan pelayanan terbaik bagi segenap warga sekolah.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => {
            const IconComp = item.icon;
            return (
              <div 
                key={item.id}
                className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#c89b3c] hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#12372A] text-[#c89b3c] flex items-center justify-center shadow-xs">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-slate-700 border border-slate-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-5 space-y-2 pt-4 border-t border-slate-200/80">
                    {item.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/60 text-xs font-bold text-[#12372A] flex items-center justify-between">
                  <span>Standar Pengawasan Internal Yayasan</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
