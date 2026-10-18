import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Youtube } from './SocialIcons';
import { youtubeFeaturedVideo, socialMediaLinks } from '../data/socialData';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div 
        className="bg-slate-900 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-white/20 relative text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Youtube className="w-5 h-5 text-red-500" />
            <h3 className="font-bold text-sm sm:text-base">{youtubeFeaturedVideo.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Embed Player */}
        <div className="relative aspect-video bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
            title={youtubeFeaturedVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Footer info */}
        <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300 bg-slate-950/60">
          <div>
            <span className="font-bold text-white">{youtubeFeaturedVideo.channelName}</span>
            <p className="text-[11px] text-slate-400">{youtubeFeaturedVideo.description}</p>
          </div>
          <a
            href={socialMediaLinks.youtube}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold flex items-center gap-1.5 shrink-0 transition-colors"
          >
            <span>Buka Channel YouTube</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
