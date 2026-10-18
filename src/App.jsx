import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HarkatSection from './components/HarkatSection';
import AboutSection from './components/AboutSection';
import FacilitiesSection from './components/FacilitiesSection';
import ExtracurricularSection from './components/ExtracurricularSection';
import PpdbSection from './components/PpdbSection';
import SocialFeedSection from './components/SocialFeedSection';
import NewsSection from './components/NewsSection';
import AlumniSection from './components/AlumniSection';
import ContactSection from './components/ContactSection';
import ServicesSection from './components/ServicesSection';
import BidangSection from './components/BidangSection';
import ZonaIntegritasSection from './components/ZonaIntegritasSection';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import RegistrationModal from './components/RegistrationModal';
import StatusCheckModal from './components/StatusCheckModal';
import VideoModal from './components/VideoModal';
import ServiceModal from './components/ServiceModal';
import BrochureModal from './components/BrochureModal';
import HomePrincipalGreeting from './components/HomePrincipalGreeting';
import HomePrestasiGallery from './components/HomePrestasiGallery';
import HomeNewsAgenda from './components/HomeNewsAgenda';
import HomeYouTubeSection from './components/HomeYouTubeSection';
import HomeLocationSection from './components/HomeLocationSection';
import { ChevronRight, Home, Sparkles, Download, ArrowRight } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState('beranda');
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isStatusCheckOpen, setIsStatusCheckOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [serviceModal, setServiceModal] = useState({ isOpen: false, type: 'legalisir' });
  const [brochureModal, setBrochureModal] = useState({ isOpen: false, id: 'brosur-utama' });

  const handleNavigatePage = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenServiceModal = (type) => {
    setServiceModal({ isOpen: true, type: type || 'legalisir' });
  };

  const handleOpenBrochureModal = (id = 'brosur-utama') => {
    setBrochureModal({ isOpen: true, id });
  };

  const pageTitles = {
    beranda: 'Beranda Utama',
    snmb: 'SNMB 2026 (Penerimaan Siswa Baru & Brosur)',
    ppdb: 'SNMB 2026 (Penerimaan Siswa Baru & Brosur)',
    profil: 'Profil, Sejarah & Sarana Kampus',
    bidang: 'Bidang Pengelolaan Sekolah Al Ghifari',
    layanan: 'Portal Layanan Terpadu & Digital',
    publikasi: 'Publikasi, Berita & Jurnal Ilmiah',
    zona: 'Zona Integritas (WBK & WBBM)',
    harkat: 'Gerakan 7 Harkat (7 Hari Berkarakter)',
    ekskul: 'Kesiswaan & Prestasi Ekstrakurikuler',
    kontak: 'Hubungi Kami & Denah Lokasi Kampus',
  };

  return (
    <div className="min-h-screen bg-[#fafcfb] text-slate-800 flex flex-col font-sans selection:bg-[#12372A] selection:text-white">
      {/* Top Navbar with Full Structure & Dropped Top Bar */}
      <Navbar 
        activePage={activePage}
        setActivePage={handleNavigatePage}
        onOpenRegistration={() => setIsRegistrationOpen(true)}
        onOpenStatusCheck={() => setIsStatusCheckOpen(true)}
        onOpenServiceModal={handleOpenServiceModal}
        onOpenBrochureModal={handleOpenBrochureModal}
      />

      {/* Subpage Breadcrumb Navigation */}
      {activePage !== 'beranda' && (
        <div className="bg-white border-b border-slate-200 py-3.5 px-4 sm:px-6 shadow-2xs">
          <div className="max-w-6xl mx-auto flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <button 
                onClick={() => handleNavigatePage('beranda')}
                className="hover:text-[#12372A] flex items-center gap-1 transition-colors font-medium"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Beranda</span>
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-bold text-slate-900">{pageTitles[activePage] || 'Halaman'}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleOpenBrochureModal('brosur-utama')}
                className="hidden sm:inline-flex items-center gap-1.5 font-bold text-xs bg-stone-100 hover:bg-stone-200 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-[#c89b3c]" />
                <span>Unduh Brosur PDF</span>
              </button>

              <button
                onClick={() => setIsRegistrationOpen(true)}
                className="inline-flex items-center gap-1.5 font-bold text-xs bg-[#12372A] hover:bg-[#1a4336] text-white px-3.5 py-1.5 rounded-lg transition-colors shadow-2xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#c89b3c]" />
                <span>Daftar SNMB</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dynamic Main Page Content */}
      <main className="flex-1">
        
        {/* SLIDE 1: BERANDA (LENGKAP, MODERN, MEWAH, TIDAK KOSONG & TIDAK SESAK) */}
        {activePage === 'beranda' && (
          <div className="animate-fade-in space-y-0">
            {/* 1. Dynamic Hero Carousel with 4 Access Portals */}
            <Hero 
              onOpenRegistration={() => setIsRegistrationOpen(true)}
              onOpenVideoModal={() => setIsVideoModalOpen(true)}
              onNavigatePage={handleNavigatePage}
              onOpenBrochureModal={handleOpenBrochureModal}
            />

            {/* 2. Profil & Sambutan Resmi Kepala Sekolah */}
            <HomePrincipalGreeting 
              onNavigatePage={handleNavigatePage} 
            />

            {/* 3. Catatan Sejarah & Kilas Singkat Al Ghifari (Maksimal 2 Jajar) */}
            <AboutSection 
              isHomepageCompact={true} 
              onNavigatePage={handleNavigatePage} 
            />

            {/* 4. Etalase Poster Prestasi Siswa (Format Gambar Poster Juara) */}
            <HomePrestasiGallery 
              onNavigatePage={handleNavigatePage} 
            />

            {/* 5. Warta Berita Terkini & Agenda Kalender Kegiatan Sekolah */}
            <HomeNewsAgenda 
              onNavigatePage={handleNavigatePage} 
            />

            {/* 6. Galeri Video YouTube Resmi Sekolah */}
            <HomeYouTubeSection 
              onOpenVideoModal={() => setIsVideoModalOpen(true)} 
            />

            {/* 7. Alamat Kampus Arcamanik, Peta Lokasi & Jam Layanan */}
            <HomeLocationSection />

            {/* 8. Featured Calm Banner: Brosur SNMB & Sosmed Connection */}
            <section className="py-6 sm:py-8 bg-[#fafcfb] border-t border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-[#12372A] via-[#1a4336] to-[#0d2a20] rounded-3xl p-5 sm:p-7 text-white flex flex-col md:flex-row items-center justify-between gap-5 shadow-md border border-emerald-950">
                  <div className="space-y-1.5 text-center md:text-left max-w-2xl">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#c89b3c] text-slate-950 inline-block">
                      INFORMASI BROSUR DIGITAL 2026
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white leading-snug line-clamp-2">
                      Unduh Pamflet Resmi & Rincian Biaya SNMB 2026/2027
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-100 line-clamp-2 leading-relaxed">
                      Dapatkan pamflet gambar resolusi tinggi dan berkas PDF resmi rincian biaya uang pangkal (DSP) serta beasiswa tahfidz 100%.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
                    <button
                      onClick={() => handleOpenBrochureModal('brosur-utama')}
                      className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-[#c89b3c] hover:bg-[#d4a849] flex items-center gap-2 shadow-sm transition-all"
                    >
                      <Download className="w-4 h-4" />
                      <span>Lihat Brosur & Biaya</span>
                    </button>

                    <button
                      onClick={() => handleNavigatePage('snmb')}
                      className="px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 flex items-center gap-1.5 transition-all"
                    >
                      <span>Halaman SNMB</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* SLIDE 2: SNMB 2026 (PPDB) DEDICATED SLIDE */}
        {(activePage === 'snmb' || activePage === 'ppdb') && (
          <div className="animate-fade-in">
            <PpdbSection 
              onOpenRegistration={() => setIsRegistrationOpen(true)}
              onOpenStatusCheck={() => setIsStatusCheckOpen(true)}
              onOpenBrochureModal={handleOpenBrochureModal}
            />
          </div>
        )}

        {/* SLIDE 3: PROFIL, SEJARAH & FASILITAS DEDICATED SLIDE */}
        {activePage === 'profil' && (
          <div className="animate-fade-in">
            <AboutSection 
              isHomepageCompact={false} 
              isStandalone={true} 
              onNavigatePage={handleNavigatePage} 
            />
            <FacilitiesSection />
          </div>
        )}

        {/* SLIDE 4: STRUKTUR 5 BIDANG DEDICATED SLIDE */}
        {activePage === 'bidang' && (
          <div className="animate-fade-in">
            <BidangSection onNavigatePage={handleNavigatePage} />
          </div>
        )}

        {/* SLIDE 5: GERAKAN 7 HARKAT DEDICATED SLIDE */}
        {activePage === 'harkat' && (
          <div className="animate-fade-in">
            <HarkatSection />
            <AlumniSection />
          </div>
        )}

        {/* SLIDE 6: KESISWAAN & EKSKUL DEDICATED SLIDE */}
        {activePage === 'ekskul' && (
          <div className="animate-fade-in">
            <ExtracurricularSection />
            <AlumniSection />
          </div>
        )}

        {/* SLIDE 7: PUBLIKASI & BERITA DEDICATED SLIDE */}
        {activePage === 'publikasi' && (
          <div className="animate-fade-in">
            <NewsSection />
            <SocialFeedSection 
              onOpenVideoModal={() => setIsVideoModalOpen(true)}
            />
          </div>
        )}

        {/* SLIDE 8: ZONA INTEGRITAS (WBK & WBBM) DEDICATED SLIDE */}
        {activePage === 'zona' && (
          <div className="animate-fade-in">
            <ZonaIntegritasSection />
          </div>
        )}

        {/* SLIDE 9: PORTAL LAYANAN PUBLIK DEDICATED SLIDE */}
        {activePage === 'layanan' && (
          <div className="animate-fade-in">
            <ServicesSection onOpenServiceModal={handleOpenServiceModal} />
          </div>
        )}

        {/* SLIDE 10: KONTAK & LOKASI DEDICATED SLIDE */}
        {activePage === 'kontak' && (
          <div className="animate-fade-in">
            <ContactSection />
            <ServicesSection onOpenServiceModal={handleOpenServiceModal} />
          </div>
        )}

      </main>

      {/* Comprehensive Clean Footer */}
      <Footer 
        onNavigatePage={handleNavigatePage}
        onOpenRegistration={() => setIsRegistrationOpen(true)}
      />

      {/* Floating Interactive WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Interactive Modals */}
      <RegistrationModal 
        isOpen={isRegistrationOpen} 
        onClose={() => setIsRegistrationOpen(false)} 
      />

      <StatusCheckModal 
        isOpen={isStatusCheckOpen} 
        onClose={() => setIsStatusCheckOpen(false)} 
      />

      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />

      <ServiceModal 
        isOpen={serviceModal.isOpen} 
        serviceType={serviceModal.type} 
        onClose={() => setServiceModal({ isOpen: false, type: 'legalisir' })} 
      />

      <BrochureModal 
        isOpen={brochureModal.isOpen}
        initialId={brochureModal.id}
        onClose={() => setBrochureModal({ isOpen: false, id: 'brosur-utama' })}
      />
    </div>
  );
}
