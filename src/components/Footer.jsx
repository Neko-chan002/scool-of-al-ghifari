import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Heart
} from 'lucide-react';
import { Instagram, Facebook, Youtube } from './SocialIcons';
import { socialMediaLinks } from '../data/socialData';
import { schoolProfile } from '../data/schoolData';
import SchoolLogo from './SchoolLogo';

export default function Footer({ onNavigatePage, onOpenRegistration }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-9 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-slate-800">
          
          {/* Col 1: Brand & Logo (4 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <SchoolLogo size="md" light={true} />

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mt-2 line-clamp-2">
              Lembaga pendidikan Islam terpadu yang memadukan kedalaman spiritual Qur'ani (IMTAQ) dan sains modern (IPTEK) di Arcamanik Bandung.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a 
                href={socialMediaLinks.instagram} 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-pink-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={socialMediaLinks.whatsapp} 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a 
                href={socialMediaLinks.youtube} 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-red-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href={socialMediaLinks.facebook} 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigatePage('beranda')} className="hover:text-emerald-400 text-left transition-colors">
                  Beranda Utama
                </button>
              </li>
              <li>
                <button onClick={() => onNavigatePage('profil')} className="hover:text-emerald-400 text-left transition-colors">
                  Profil & Fasilitas Kampus
                </button>
              </li>
              <li>
                <button onClick={() => onNavigatePage('ppdb')} className="hover:text-emerald-400 text-left transition-colors">
                  Penerimaan Siswa Baru (PPDB 2026)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigatePage('ekskul')} className="hover:text-emerald-400 text-left transition-colors">
                  Siswa & Ekstrakurikuler
                </button>
              </li>
              <li>
                <button onClick={() => onNavigatePage('medsos')} className="hover:text-emerald-400 text-left transition-colors">
                  Instagram Feed & Berita
                </button>
              </li>
              <li>
                <button onClick={() => onNavigatePage('kontak')} className="hover:text-emerald-400 text-left transition-colors">
                  Kontak & Lokasi Sekolah
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Sekretariat Sekolah
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Jl. Pendidikan Karakter No. 88, Bandung, Jawa Barat</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>(022) 7890-1234 • 0812-3456-7890</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>info@smaprestasibangsa.sch.id</span>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenRegistration}
                className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs transition-colors"
              >
                Daftar PPDB Online
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} <strong>SMA Prestasi Bangsa</strong>. Terakreditasi A Unggul (Nilai 98).
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Kembali ke Atas</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
