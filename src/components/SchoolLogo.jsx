import React from 'react';

export default function SchoolLogo({ size = "md", light = false }) {
  const isSmall = size === "sm";
  const isLarge = size === "lg";

  return (
    <div className="flex items-center gap-3.5 select-none">
      {/* Al Ghifari Emblem Logo SVG */}
      <div className={`relative flex items-center justify-center shrink-0 ${
        isSmall ? 'w-10 h-10' : isLarge ? 'w-16 h-16' : 'w-12 h-12'
      }`}>
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full drop-shadow-xs transition-transform duration-300 hover:scale-105"
        >
          {/* Outer Islamic Pentagon/Shield Form */}
          <path
            d="M50 4 L90 20 C90 62 50 94 50 94 C50 94 10 62 10 20 Z"
            fill="url(#alghifariGradient)"
            stroke={light ? "#ffffff" : "#064E3B"}
            strokeWidth="2.5"
          />
          {/* Inner Golden Border */}
          <path
            d="M50 11 L83 24 C83 56 50 85 50 85 C50 85 17 56 17 24 Z"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="1.5"
          />
          {/* Islamic Dome Silhouette */}
          <path
            d="M40 38 C40 30 50 22 50 22 C50 22 60 30 60 38 L60 48 L40 48 Z"
            fill="#F59E0B"
          />
          {/* Crescent Moon & Star */}
          <circle cx="50" cy="20" r="2.5" fill="#FFFFFF" />
          {/* Open Quran Book */}
          <path
            d="M32 50 C38 46 45 47 50 51 C55 47 62 46 68 50 L68 66 C62 62 55 63 50 67 C45 63 38 62 32 66 Z"
            fill="#FFFFFF"
            stroke="#0D5C3A"
            strokeWidth="1.5"
          />
          <line x1="50" y1="51" x2="50" y2="67" stroke="#0D5C3A" strokeWidth="1.5" />
          {/* Torch & Ribbon motif */}
          <path
            d="M36 76 Q50 82 64 76"
            stroke="#F59E0B"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />

          <defs>
            <linearGradient id="alghifariGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="50%" stopColor="#047857" />
              <stop offset="100%" stopColor="#064E3B" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography Brand Name */}
      <div className="flex flex-col text-left justify-center">
        <span className={`font-black tracking-tight leading-none ${
          isSmall ? 'text-sm' : isLarge ? 'text-2xl' : 'text-base sm:text-lg'
        } ${light ? 'text-white' : 'text-slate-900'}`}>
          SMA PLUS AL GHIFARI
        </span>
      </div>
    </div>
  );
}
