import React, { useState, useRef } from 'react';
import { 
  Menu, 
  X, 
  Sparkles, 
  ClipboardCheck, 
  ChevronDown, 
  FileText, 
  Download, 
  UserCheck, 
  History, 
  Target, 
  Award, 
  Users, 
  GraduationCap, 
  BookOpenCheck, 
  Building2, 
  MessageSquareShare, 
  FileCheck, 
  BookMarked, 
  ShieldAlert, 
  ShieldCheck,
  Scale,
  HandHeart,
  Send, 
  Newspaper, 
  Calendar, 
  Heart, 
  BookOpen, 
  ChevronRight
} from 'lucide-react';
import { Instagram, Facebook, Youtube } from './SocialIcons';
import { socialMediaLinks } from '../data/socialData';
import SchoolLogo from './SchoolLogo';

export default function Navbar({ 
  activePage, 
  setActivePage, 
  onOpenRegistration, 
  onOpenStatusCheck,
  onOpenServiceModal,
  onOpenBrochureModal
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const timeoutRef = useRef(null);

  const handleMouseEnter = (menuKey) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleSelectPage = (pageId, subAction = null) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (subAction) {
      if (subAction === 'pendaftaran') onOpenRegistration?.();
      if (subAction === 'status') onOpenStatusCheck?.();
      if (subAction === 'legalisir') onOpenServiceModal?.('legalisir');
      if (subAction === 'buku-tamu') onOpenServiceModal?.('buku-tamu');
      if (subAction === 'brosur') onOpenBrochureModal ? onOpenBrochureModal('brosur-utama') : onOpenServiceModal?.('brosur');
      if (subAction === 'biaya') onOpenBrochureModal ? onOpenBrochureModal('brosur-biaya') : onOpenServiceModal?.('brosur');
      if (subAction === 'pengaduan') onOpenServiceModal?.('pengaduan');
    }
  };

  const toggleMobileSubmenu = (menuKey) => {
    setMobileExpanded(prev => ({ ...prev, [menuKey]: !prev[menuKey] }));
  };

  // Navigasi Portal Lengkap Sesuai Struktur Al Ghifari Bandung & Screenshot Referensi
  const navStructure = [
    {
      id: 'beranda',
      label: 'Beranda',
      isDropdown: false,
      action: () => handleSelectPage('beranda')
    },
    {
      id: 'snmb',
      label: 'SNMB 2026',
      badge: 'Buka',
      isDropdown: true,
      items: [
        { 
          label: 'Brosur & Rincian Biaya', 
          desc: 'Pamflet gambar & berkas PDF', 
          icon: Download, 
          action: () => {
            if (onOpenBrochureModal) onOpenBrochureModal('brosur-utama');
            else handleSelectPage('snmb', 'brosur');
          } 
        },
        { 
          label: 'Juknis & 4 Jalur Masuk', 
          desc: 'Tahfidz, prestasi & reguler', 
          icon: FileText, 
          action: () => handleSelectPage('snmb') 
        },
        { 
          label: 'Pendaftaran Online', 
          desc: 'Pengisian biodata calon siswa', 
          icon: Sparkles, 
          action: () => onOpenRegistration() 
        },
        { 
          label: 'Syarat & Berkas Dokumen', 
          desc: 'Checklist akta, KK & rapor', 
          icon: UserCheck, 
          action: () => handleSelectPage('snmb') 
        },
        { 
          label: 'Cek Status Kelulusan', 
          desc: 'Periksa verifikasi kelulusan', 
          icon: ClipboardCheck, 
          action: () => onOpenStatusCheck() 
        }
      ]
    },
    {
      id: 'profil',
      label: 'Profil',
      isDropdown: true,
      items: [
        { label: 'Sejarah & Latar Belakang', desc: 'Dedikasi 28+ tahun Arcamanik', icon: History, action: () => handleSelectPage('profil') },
        { label: 'Visi dan Misi', desc: 'Insan Qurani berdaya saing IPTEK', icon: Target, action: () => handleSelectPage('profil') },
        { label: 'Tujuan & Standar Mutu', desc: 'Standar kompetensi kelulusan', icon: Award, action: () => handleSelectPage('profil') },
        { label: 'Profil Lulusan & Alumni', desc: 'Jejak sukses tembus PTN favorit', icon: GraduationCap, action: () => handleSelectPage('profil') },
        { label: 'Kepsek & Dewan Guru', desc: 'Ibu Teni Pursina & pendidik', icon: Users, action: () => handleSelectPage('profil') }
      ]
    },
    {
      id: 'bidang',
      label: 'Bidang',
      isDropdown: true,
      items: [
        { label: 'Bidang Akademik', desc: 'Kurikulum Merdeka & Klinik PTN', icon: GraduationCap, action: () => handleSelectPage('bidang') },
        { label: 'Bidang Kesiswaan', desc: 'OSIS, MPK & Paskibra Juara', icon: Users, action: () => handleSelectPage('bidang') },
        { label: 'Keasramaan & Tahfidz', desc: 'Santri mukim & hafalan Qur\'an', icon: BookOpenCheck, action: () => handleSelectPage('bidang') },
        { label: 'Sarana & Prasarana', desc: 'Masjid Al Ghifari & Lab Komputer', icon: Building2, action: () => handleSelectPage('bidang') },
        { label: 'Humas & Kemitraan', desc: 'Sinergi wali murid, kampus & dinas', icon: MessageSquareShare, action: () => handleSelectPage('bidang') }
      ]
    },
    {
      id: 'layanan',
      label: 'Layanan',
      isDropdown: true,
      items: [
        { label: 'Legalisir Online', desc: 'Legalisasi ijazah digital alumni', icon: FileCheck, action: () => handleSelectPage('layanan', 'legalisir') },
        { label: 'Layanan SIM K (Khusus)', desc: 'Dispensasi izin kegiatan lomba', icon: FileText, action: () => handleSelectPage('layanan', 'legalisir') },
        { label: 'Layanan SIM R (Reguler)', desc: 'Pemberitahuan izin sakit digital', icon: Send, action: () => handleSelectPage('layanan', 'legalisir') },
        { label: 'Buku Tamu Digital', desc: 'Registrasi kehadiran tamu dinas', icon: BookMarked, action: () => handleSelectPage('layanan', 'buku-tamu') },
        { label: 'Pengaduan & WBS', desc: 'Kanal rahasia anti-perundungan', icon: ShieldAlert, action: () => handleSelectPage('layanan', 'pengaduan') }
      ]
    },
    {
      id: 'publikasi',
      label: 'Publikasi',
      isDropdown: true,
      items: [
        { label: 'Warta & Berita Terkini', desc: 'Kegiatan harian siswa terkini', icon: Newspaper, action: () => handleSelectPage('publikasi') },
        { label: 'Prestasi Siswa', desc: 'Piala juara umum se-Jawa Barat', icon: Award, action: () => handleSelectPage('ekskul') },
        { label: 'Agenda & Kalender', desc: 'Jadwal ujian & kegiatan sekolah', icon: Calendar, action: () => handleSelectPage('publikasi') },
        { label: 'Renungan Rabbani', desc: 'Tausiyah bijak & hikmah Islami', icon: Heart, action: () => handleSelectPage('publikasi') },
        { label: 'Jurnal Cendikia', desc: 'Karya ilmiah terapan siswa/guru', icon: BookOpen, action: () => handleSelectPage('publikasi') }
      ]
    },
    {
      id: 'zona',
      label: 'Zona Integritas',
      badge: 'WBK',
      isDropdown: true,
      items: [
        { label: 'Rencana Strategis (Renstra)', desc: 'Peta jalan mutu Al Ghifari', icon: Scale, action: () => handleSelectPage('zona') },
        { label: 'Sertifikat WBK', desc: 'Wilayah Bebas Korupsi & Pungli', icon: ShieldCheck, action: () => handleSelectPage('zona') },
        { label: 'Maklumat Layanan', desc: 'Standar & janji pelayanan prima', icon: FileCheck, action: () => handleSelectPage('zona') },
        { label: 'Siap Menuju WBBM', desc: 'Birokrasi sekolah bersih melayani', icon: HandHeart, action: () => handleSelectPage('zona') }
      ]
    },
    {
      id: 'harkat',
      label: '7 Harkat',
      badge: 'Khas',
      isDropdown: false,
      action: () => handleSelectPage('harkat')
    }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      {/* Catatan: Baris headline ticker atas telah DIHAPUS sesuai permintaan pengguna agar tidak ramai/mencolok */}

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
        <div className="flex items-center justify-between gap-3">
          
          {/* School Brand Logo */}
          <button 
            onClick={() => handleSelectPage('beranda')}
            className="text-left focus:outline-none transition-transform active:scale-95"
            title="SMA Plus Al Ghifari Bandung"
          >
            <SchoolLogo size="md" />
          </button>

          {/* Desktop Navigation Links with Rich Dropdowns */}
          <nav className="hidden xl:flex items-center gap-1">
            {navStructure.map((menu) => {
              const isCurrent = activePage === menu.id || (menu.id === 'snmb' && activePage === 'ppdb');
              const isHovered = activeDropdown === menu.id;

              return (
                <div
                  key={menu.id}
                  className="relative"
                  onMouseEnter={() => menu.isDropdown && handleMouseEnter(menu.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => menu.action ? menu.action() : handleSelectPage(menu.id)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all duration-150 flex items-center gap-1.5 relative ${
                      isCurrent
                        ? 'text-[#12372A] bg-[#12372A]/10 font-extrabold shadow-2xs'
                        : 'text-slate-700 hover:text-[#12372A] hover:bg-slate-100/80'
                    }`}
                  >
                    <span>{menu.label}</span>
                    
                    {menu.badge && (
                      <span className={`text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded ${
                        menu.badge === 'Khas' 
                          ? 'bg-amber-100 text-amber-800 border border-amber-300' 
                          : menu.badge === 'WBK'
                          ? 'bg-indigo-100 text-indigo-800 border border-indigo-200'
                          : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      }`}>
                        {menu.badge}
                      </span>
                    )}

                    {menu.isDropdown && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isHovered ? 'rotate-180 text-[#12372A]' : 'text-slate-400'}`} />
                    )}

                    {/* Bottom active golden indicator */}
                    {isCurrent && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#c89b3c] rounded-full"></span>
                    )}
                  </button>

                  {/* Modern Floating Mega Dropdown Card (2 Kolom Lebar, Kompak & Rapi) */}
                  {menu.isDropdown && isHovered && (
                    <div className={`absolute top-full mt-2 w-[480px] sm:w-[520px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3 animate-fade-in z-50 ${
                      menu.id === 'layanan' || menu.id === 'publikasi' || menu.id === 'zona' ? 'right-0' : 'left-0'
                    }`}>
                      {/* Header Kategori Dropdown */}
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 px-1 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        <span>Menu {menu.label}</span>
                        <span className="text-[#12372A] font-semibold text-[10px] normal-case">Pilih opsi halaman di bawah</span>
                      </div>

                      {/* 2 Kolom Grid agar tidak panjang ke bawah & teks tidak terlipat 4 jajar */}
                      <div className="grid grid-cols-2 gap-1.5">
                        {menu.items.map((sub, i) => {
                          const SubIcon = sub.icon;
                          return (
                            <button
                              key={i}
                              onClick={sub.action}
                              className="w-full text-left p-2.5 rounded-xl hover:bg-stone-50 transition-colors flex items-center gap-2.5 group border border-transparent hover:border-slate-200/70"
                            >
                              <div className="w-8 h-8 rounded-lg bg-stone-100 text-[#12372A] group-hover:bg-[#12372A] group-hover:text-[#c89b3c] transition-colors flex items-center justify-center shrink-0 shadow-2xs">
                                <SubIcon className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className="font-bold text-xs text-slate-800 group-hover:text-[#12372A] block truncate leading-tight">
                                  {sub.label}
                                </span>
                                <span className="text-[10px] text-slate-500 block truncate mt-0.5">
                                  {sub.desc}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {/* Footer Info Strip */}
                      <div className="mt-2.5 pt-2 border-t border-slate-100 px-1 flex items-center justify-between text-[10px] text-slate-400">
                        <span className="font-semibold text-[#12372A]">SMA Plus Al Ghifari Kota Bandung</span>
                        <span>Akreditasi A (Unggul)</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => {
                if (onOpenBrochureModal) onOpenBrochureModal('brosur-utama');
                else handleSelectPage('snmb', 'brosur');
              }}
              className="px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-[#12372A] hover:bg-slate-100 border border-slate-200 transition-all flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-[#c89b3c]" />
              <span>Brosur PDF</span>
            </button>

            <button
              onClick={onOpenRegistration}
              className="px-4 py-2 rounded-xl font-bold text-xs text-white bg-[#12372A] hover:bg-[#1a4336] shadow-2xs hover:shadow transition-all flex items-center gap-1.5 border border-[#12372A]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#c89b3c]" />
              <span>Daftar SNMB</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={onOpenRegistration}
              className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#12372A]"
            >
              Daftar
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-800" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer with Accordion Submenus */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 px-4 py-5 shadow-xl max-h-[80vh] overflow-y-auto animate-fade-in">
          <div className="flex flex-col gap-1.5">
            {navStructure.map((menu) => {
              const isExpanded = !!mobileExpanded[menu.id];

              if (!menu.isDropdown) {
                return (
                  <button
                    key={menu.id}
                    onClick={() => menu.action ? menu.action() : handleSelectPage(menu.id)}
                    className="text-left px-4 py-3 rounded-xl font-bold text-sm text-slate-800 hover:bg-slate-50 flex items-center justify-between"
                  >
                    <span>{menu.label}</span>
                    {menu.badge && (
                      <span className="text-[10px] bg-amber-400 text-slate-950 font-bold px-2 py-0.5 rounded">
                        {menu.badge}
                      </span>
                    )}
                  </button>
                );
              }

              return (
                <div key={menu.id} className="border border-slate-200/90 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggleMobileSubmenu(menu.id)}
                    className="w-full text-left px-4 py-3 font-bold text-sm text-slate-800 bg-slate-50/80 flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <span>{menu.label}</span>
                      {menu.badge && (
                        <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${
                          menu.badge === 'WBK' ? 'bg-indigo-100 text-indigo-800' : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {menu.badge}
                        </span>
                      )}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  {isExpanded && (
                    <div className="p-2 space-y-1 bg-white border-t border-slate-100">
                      {menu.items.map((sub, idx) => (
                        <button
                          key={idx}
                          onClick={sub.action}
                          className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 text-xs font-semibold text-slate-700 flex items-center justify-between"
                        >
                          <span>{sub.label}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenBrochureModal) onOpenBrochureModal('brosur-utama');
                }}
                className="w-full py-2.5 rounded-xl font-bold text-xs text-slate-800 bg-slate-100 hover:bg-slate-200 flex items-center justify-center gap-2 border border-slate-200"
              >
                <Download className="w-4 h-4 text-[#c89b3c]" />
                Lihat Brosur & Biaya (PDF/Gambar)
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegistration();
                }}
                className="w-full py-3 rounded-xl font-bold text-sm text-white bg-[#12372A] hover:bg-[#1a4336] flex items-center justify-center gap-2 shadow-2xs"
              >
                <Sparkles className="w-4 h-4 text-[#c89b3c]" />
                Daftar SNMB Online 2026
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStatusCheck();
                }}
                className="w-full py-2.5 rounded-xl font-semibold text-xs text-slate-700 bg-slate-50 hover:bg-slate-100 flex items-center justify-center gap-1.5 border border-slate-200"
              >
                <ClipboardCheck className="w-4 h-4 text-[#12372A]" />
                Cek Status Kelulusan SNMB
              </button>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
