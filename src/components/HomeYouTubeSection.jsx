import React, { useState } from 'react';
import { Play, ExternalLink, CheckCircle2, Clock, Eye, Sparkles } from 'lucide-react';
import { Youtube } from './SocialIcons';
import { youtubeVideoList, socialMediaLinks } from '../data/socialData';

export default function HomeYouTubeSection({ onOpenVideoModal }) {
  const [selectedVideo, setSelectedVideo] = useState(youtubeVideoList[0]);
  const [isPlayingInline, setIsPlayingInline] = useState(false);

  const handleSelectVideo = (video) => {
    setSelectedVideo(video);
    setIsPlayingInline(true);
  };

  return (
    <section className="py-8 sm:py-11 bg-[#fafcfb] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 mb-6 pb-3 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-[11px] font-bold uppercase tracking-wider mb-1.5">
              <Youtube className="w-3.5 h-3.5 text-red-600" />
              <span>Kanal Video YouTube Resmi</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Galeri Video & Dokumentasi SMA Plus Al Ghifari
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 line-clamp-1 mt-0.5">
              Tonton langsung profil kampus, unjuk kabisa Paskibra, wisuda tahfidz, dan ragam aktivitas siswa.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={socialMediaLinks.youtube}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-2xs transition-all"
            >
              <Youtube className="w-3.5 h-3.5" />
              <span>Buka YouTube @alghifariofficial</span>
              <ExternalLink className="w-3 h-3 text-red-200" />
            </a>
          </div>
        </div>

        {/* Video Showcase Grid: Main Player (7 cols) + Video Playlist (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Main Featured Player (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="relative rounded-3xl overflow-hidden bg-slate-950 aspect-video shadow-md border border-slate-800">
              {isPlayingInline ? (
                <iframe
                  src={`${selectedVideo.embedUrl}?autoplay=1&rel=0`}
                  title={selectedVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="relative w-full h-full group">
                  <img
                    src={selectedVideo.thumbnail}
                    alt={selectedVideo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                  {/* Play Button Center */}
                  <button
                    onClick={() => setIsPlayingInline(true)}
                    className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-2xl transition-all transform group-hover:scale-110"
                    aria-label="Putar Video"
                  >
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                  </button>

                  {/* Badges on Video */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-xs text-white text-[10px] font-black uppercase tracking-wider border border-white/10">
                      {selectedVideo.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-red-600/90 text-white text-[10px] font-bold flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{selectedVideo.duration}</span>
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block mb-1">
                      Sedang Diputar:
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-white line-clamp-2 leading-snug">
                      {selectedVideo.title}
                    </h3>
                  </div>
                </div>
              )}
            </div>

            {/* Video Meta Info */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-1.5">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900">{selectedVideo.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-slate-400" />
                    <span>{selectedVideo.views} views</span>
                  </span>
                </div>
                <span className="text-[11px] text-[#12372A] font-bold">Resmi Al Ghifari TV</span>
              </div>
              <h4 className="font-black text-sm text-slate-900 line-clamp-2 leading-snug">
                {selectedVideo.title}
              </h4>
              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {selectedVideo.desc}
              </p>
            </div>
          </div>

          {/* Playlist / Video Lainnya (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between pb-1">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                Video Pilihan Lainnya
              </h3>
              <span className="text-[11px] text-slate-400 font-medium">Klik untuk memutar</span>
            </div>

            <div className="space-y-2.5">
              {youtubeVideoList.map((video) => {
                const isSelected = selectedVideo.id === video.id;
                return (
                  <div
                    key={video.id}
                    onClick={() => handleSelectVideo(video)}
                    className={`cursor-pointer rounded-2xl p-3 border transition-all duration-200 flex items-start gap-3.5 ${
                      isSelected
                        ? 'bg-emerald-50/70 border-[#12372A] shadow-xs'
                        : 'bg-white hover:bg-slate-50/80 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {/* Thumbnail Kecil dengan Play Overlay */}
                    <div className="w-24 sm:w-28 h-18 rounded-xl overflow-hidden shrink-0 bg-slate-900 relative group">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center ${isSelected ? 'bg-red-600 text-white' : 'bg-white/90 text-slate-900'}`}>
                          <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />
                        </div>
                      </div>
                      <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 text-[9px] font-bold text-white">
                        {video.duration}
                      </span>
                    </div>

                    {/* Deskripsi Singkat (Maksimal 2 Baris) */}
                    <div className="flex-1 min-w-0 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#12372A] block">
                        {video.category}
                      </span>
                      <h4 className={`text-xs font-bold line-clamp-2 leading-snug ${isSelected ? 'text-[#12372A]' : 'text-slate-900'}`}>
                        {video.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 line-clamp-1">
                        {video.views} penonton • {video.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Banner Subscribe YouTube */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-200/80 flex items-center justify-between gap-3 shadow-2xs">
              <div className="space-y-0.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-red-700 block">
                  Langganan Video Gratis
                </span>
                <p className="text-xs font-bold text-slate-900">Al Ghifari Official TV</p>
                <p className="text-[11px] text-slate-500">18.5K Pelanggan • Konten Edukatif</p>
              </div>

              <a
                href={socialMediaLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-colors shadow-2xs shrink-0"
              >
                <span>Subscribe</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
