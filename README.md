# 🏫 Website Resmi SMA Plus Al Ghifari Bandung

Website profil interaktif dan sistem informasi Penerimaan Peserta Didik Baru (PPDB / SPMB) SMA Plus Al Ghifari Bandung. Dibangun menggunakan **React**, **Vite**, dan **Tailwind CSS**.

---

## 🚀 Panduan Menjalankan Proyek (Lokal)

Ikuti langkah-langkah di bawah ini untuk menjalankan website di komputer Anda:

### 1. Prasyarat
Pastikan Anda sudah menginstal:
- [Node.js](https://nodejs.org/) versi 18 atau lebih baru
- [Git](https://git-scm.com/)

Periksa versi Node.js dan npm di terminal:
```bash
node -v
npm -v
```

### 2. Kloning Repositori
```bash
git clone https://github.com/Neko-chan002/scool-of-al-ghifari.git
cd scool-of-al-ghifari
```

### 3. Instalasi Dependensi
Jalankan perintah berikut untuk menginstal semua library yang dibutuhkan:
```bash
npm install
```

### 4. Menjalankan Server Pengembangan (Dev Mode)
Untuk melihat dan mengembangkan website secara langsung:
```bash
npm run dev
```
Setelah dijalankan, buka browser di alamat yang muncul di terminal (biasanya `http://localhost:5173`).

### 5. Membangun Proyek untuk Produksi (Build)
Untuk mengompilasi dan mengoptimasi aset menjadi file siap deploy di folder `dist/`:
```bash
npm run build
```

### 6. Menjalankan Preview Hasil Build
Untuk menguji hasil build produksi secara lokal:
```bash
npm run preview
```

---

## 🌐 Deploy Otomatis ke GitHub Pages

Proyek ini telah dilengkapi dengan GitHub Actions workflow (`.github/workflows/deploy.yml`).

Untuk mengaktifkan website agar bisa diakses langsung via link GitHub Pages:
1. Masuk ke halaman repositori di GitHub: [scool-of-al-ghifari](https://github.com/Neko-chan002/scool-of-al-ghifari)
2. Buka tab **Settings** > menu **Pages** (di sidebar kiri).
3. Pada bagian **Build and deployment** > **Source**, pilih **GitHub Actions**.
4. GitHub Actions akan otomatis melakukan build dan deploy setiap kali ada push ke branch `main`.
5. Website Anda akan aktif di URL:
   `https://neko-chan002.github.io/scool-of-al-ghifari/`

---

## ✨ Fitur-Fitur Utama

- **Hero Slider & Quick Info**: Banner utama dinamis dengan informasi pendaftaran dan nilai unggulan sekolah.
- **Profil Sekolah**: Sambutan kepala sekolah, visi & misi, serta program 7 Harkat Al Ghifari.
- **Formulir Pendaftaran Online (PPDB/SPMB)**: Formulir registrasi calon siswa interaktif dengan konfirmasi dan generator nomor registrasi.
- **Cek Status Pendaftaran**: Fitur pencarian status berkas dan pendaftaran siswa berbasis nomor registrasi.
- **Unduh Brosur & Rincian Biaya**: Modal preview dan download informasi PPDB.
- **Fasilitas & Ekstrakurikuler**: Galeri fasilitas kampus terpadu Arcamanik serta pilihan kegiatan ekstrakurikuler.
- **Berita & Agenda Sekolah**: Pembaruan terkini seputar kegiatan dan prestasi siswa.
- **Widget WhatsApp & Kontak**: Akses langsung chat panitia SPMB dan informasi kontak/lokasi Google Maps.
- **Desain Responsif**: Tampilan optimal untuk smartphone, tablet, maupun layar desktop.

---

## 🛠️ Teknologi yang Digunakan

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) & PostCSS
- **Icons**: [Lucide React](https://lucide.dev/)
- **Efek Interaktif**: Canvas Confetti
