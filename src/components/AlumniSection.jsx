import React from 'react';
import { 
  GraduationCap, 
  Quote, 
  Sparkles, 
  Award, 
  MapPin, 
  Briefcase 
} from 'lucide-react';
import { alumniTestimonials } from '../data/alumniData';

export default function AlumniSection() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-school-700 uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-school-600" />
            Jejak Alumni & Kisah Inspiratif
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Melangkah Pasti Menuju Perguruan Tinggi Terbaik & Karir Global
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Keluarga besar alumni SMA Prestasi Bangsa tersebar di berbagai universitas terkemuka dunia dan berkontribusi nyata bagi kemajuan bangsa.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {alumniTestimonials.map((alumni) => (
            <div
              key={alumni.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-school-300 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-school-700">
                    {alumni.tag}
                  </span>
                  <Quote className="w-5 h-5 text-gold-400" />
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic mb-6">
                  "{alumni.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img 
                  src={alumni.avatar} 
                  alt={alumni.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-school-100"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {alumni.name}
                  </h4>
                  <p className="text-[11px] text-school-700 font-semibold">
                    {alumni.graduationYear}
                  </p>
                  <p className="text-[10px] text-slate-400 line-clamp-1">
                    {alumni.currentRole}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
