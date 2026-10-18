import React from 'react';
import { 
  FileCheck, 
  BookMarked, 
  ShieldAlert, 
  FileText, 
  Send, 
  Star, 
  HelpCircle,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { schoolProfile } from '../data/schoolData';

export default function ServicesSection({ onOpenServiceModal }) {
  const iconMap = {
    FileCheck: FileCheck,
    FileText: FileText,
    Send: Send,
    Star: Star,
    ShieldAlert: ShieldAlert,
    BookMarked: BookMarked
  };

  const handleAction = (id) => {
    if (id === 'legalisir') onOpenServiceModal('legalisir');
    else if (id === 'buku-tamu') onOpenServiceModal('buku-tamu');
    else if (id === 'pengaduan') onOpenServiceModal('pengaduan');
    else onOpenServiceModal('legalisir');
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50/80 border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Layanan Terpadu Sekolah
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Portal Layanan Online Al Ghifari
          </h2>
          <p className="mt-2 text-slate-600 text-sm leading-relaxed">
            Kemudahan pengurusan administrasi, legalisasi dokumen alumni, perizinan siswa, hingga buku tamu digital yang terintegrasi secara cepat.
          </p>
        </div>

        {/* Services Grid (Clean, Responsive & Interactive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {schoolProfile.layananPublik.map((item) => {
            const IconComp = iconMap[item.icon] || FileText;

            return (
              <div
                key={item.id}
                onClick={() => handleAction(item.id)}
                className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 group-hover:bg-emerald-700 group-hover:text-white transition-colors flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-800">
                  <span>Akses Layanan</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
