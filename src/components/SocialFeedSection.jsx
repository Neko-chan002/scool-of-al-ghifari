import React, { useState } from 'react';
import { 
  MessageCircle, 
  Heart, 
  MessageSquare, 
  ExternalLink, 
  CheckCircle, 
  Play, 
  Video, 
  Image as ImageIcon, 
  Layers, 
  X,
  Sparkles
} from 'lucide-react';
import { Instagram, Facebook, Youtube } from './SocialIcons';
import { socialMediaLinks, instagramPosts, youtubeFeaturedVideo } from '../data/socialData';

export default function SocialFeedSection({ onOpenVideoModal }) {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [selectedPost, setSelectedPost] = useState(null);
  const [likedPosts, setLikedPosts] = useState({});

  const filterOptions = ['Semua', 'Prestasi Siswa', 'Kegiatan Kampus', 'Sports & DBL', 'PPDB 2026'];

  const filteredPosts = activeFilter === 'Semua' 
    ? instagramPosts 
    : instagramPosts.filter(p => p.badge.toLowerCase().includes(activeFilter.toLowerCase()) || p.tags.some(t => t.toLowerCase().includes(activeFilter.toLowerCase())));

  const toggleLike = (postId, e) => {
    e.stopPropagation();
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  return (
    <section id="medsos" className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-xs font-bold text-pink-700 uppercase tracking-wider mb-3">
            <Instagram className="w-3.5 h-3.5 text-pink-600" />
            Media Sosial & Galeri Instagram
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Keseruan Harian Siswa di Media Sosial
          </h2>
          <p className="mt-2 text-slate-600 text-sm leading-relaxed">
            Ikuti dokumentasi kegiatan nyata, karya inovasi, liputan kejuaraan, dan cerita keseharian siswa langsung dari Instagram resmi sekolah.
          </p>
        </div>

        {/* Instagram Profile Bar Showcase (Light & Aesthetic) */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Account Info */}
            <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
              <div className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=200&q=80" 
                    alt="Instagram SMA Prestasi Bangsa" 
                    className="w-full h-full rounded-full object-cover border-2 border-white"
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-0.5 shadow-xs">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    {socialMediaLinks.schoolHandle}
                  </h3>
                  <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-blue-200">
                    Verified
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5 max-w-md">
                  Akun resmi SMA Prestasi Bangsa • Berbagi inspirasi sains, teknologi, seni & prestasi pelajar.
                </p>

                {/* Follower Stats */}
                <div className="flex items-center justify-center sm:justify-start gap-5 mt-2.5 text-xs">
                  <div><strong className="text-slate-900 font-bold">{socialMediaLinks.postsCount}</strong> <span className="text-slate-500">kiriman</span></div>
                  <div><strong className="text-slate-900 font-bold">{socialMediaLinks.followersCount}</strong> <span className="text-slate-500">pengikut</span></div>
                  <div><strong className="text-slate-900 font-bold">{socialMediaLinks.followingCount}</strong> <span className="text-slate-500">mengikuti</span></div>
                </div>
              </div>
            </div>

            {/* Direct Links */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={socialMediaLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 shadow-xs flex items-center gap-2 transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span>Ikuti di Instagram</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={socialMediaLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl font-bold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 flex items-center gap-1.5 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Official</span>
              </a>
            </div>

          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 mb-8 gap-2 scrollbar-none">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setActiveFilter(opt)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeFilter === opt
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Instagram Grid Feed (Clean, Bright & Non-cramped) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {filteredPosts.map((post) => {
            const isLiked = likedPosts[post.id];
            const currentLikes = post.likes + (isLiked ? 1 : 0);

            return (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-pink-300 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col group cursor-pointer"
              >
                {/* Photo with Overlay */}
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                  <img 
                    src={post.imageUrl} 
                    alt={post.caption} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/95 backdrop-blur-md text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                      {post.badge}
                    </span>
                  </div>

                  {/* Post Type Icon */}
                  <div className="absolute top-3 right-3 p-1 rounded-md bg-white/90 text-slate-700 shadow-xs">
                    {post.type === 'reel' ? (
                      <Video className="w-3.5 h-3.5 text-pink-600" />
                    ) : post.type === 'carousel' ? (
                      <Layers className="w-3.5 h-3.5 text-blue-600" />
                    ) : (
                      <ImageIcon className="w-3.5 h-3.5 text-amber-600" />
                    )}
                  </div>
                </div>

                {/* Caption Snippet & Footer */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {post.caption}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="text-[11px]">{post.timeAgo}</span>
                    <button 
                      onClick={(e) => toggleLike(post.id, e)}
                      className={`flex items-center gap-1 transition-colors ${isLiked ? 'text-red-500 font-bold' : 'hover:text-slate-800'}`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                      <span>{currentLikes}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ecosystem Channels (Clean Cards with generous space) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* YouTube Video Highlight */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4">
                <Youtube className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">YouTube Resmi Sekolah</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Tonton liputan tur sekolah, pentas seni, dan video karya inovasi siswa.
              </p>
            </div>
            <button
              onClick={onOpenVideoModal}
              className="mt-5 w-full py-2.5 rounded-xl bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Putar Profil Video</span>
            </button>
          </div>

          {/* Facebook */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center mb-4">
                <Facebook className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Facebook Fanpage</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Forum komunikasi resmi orang tua siswa, komite sekolah, dan silaturahmi alumni.
              </p>
            </div>
            <a
              href={socialMediaLinks.facebook}
              target="_blank"
              rel="noreferrer"
              className="mt-5 w-full py-2.5 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Kunjungi Fanpage</span>
            </a>
          </div>

          {/* WhatsApp Helpdesk */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Layanan WhatsApp</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Layanan cepat tanggap untuk tanya jawab seputar pendaftaran siswa baru & beasiswa.
              </p>
            </div>
            <a
              href={socialMediaLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-5 w-full py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat WhatsApp Panitia</span>
            </a>
          </div>

        </div>

        {/* Modal Post Detail */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
            <div 
              className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative text-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 to-pink-500">
                    <img 
                      src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=100&q=80" 
                      alt="Avatar" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-bold text-xs">{socialMediaLinks.schoolHandle}</span>
                    <span className="text-[10px] text-slate-400 block">{selectedPost.timeAgo}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedPost(null)}
                  className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="relative aspect-video bg-black">
                <img 
                  src={selectedPost.imageUrl} 
                  alt={selectedPost.caption} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold">{selectedPost.likes + (likedPosts[selectedPost.id] ? 1 : 0)} Menyukai</span>
                  <span>{selectedPost.comments} Komentar</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-h-32 overflow-y-auto pr-2">
                  {selectedPost.caption}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <a
                    href={socialMediaLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold text-xs flex items-center justify-center gap-2"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Lihat di Instagram ↗</span>
                  </a>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 text-xs font-semibold text-slate-700"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
