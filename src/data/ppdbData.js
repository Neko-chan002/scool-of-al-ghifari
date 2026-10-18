export const ppdbConfig = {
  academicYear: "2026/2027",
  statusGelombang: "SPMB Gelombang II Dibuka",
  deadlineText: "Pendaftaran Ditutup dalam 25 Hari lagi",
  kuotaTotal: 240,
  kuotaTerisi: 168,
  teleponHelpdesk: "(022) 7806223",
  waHelpdesk: "+62 812-2288-7890",
  emailHelpdesk: "spmb@smaplusalghifari.sch.id",
  jamLayanan: "Senin - Sabtu: 08.00 - 15.00 WIB",
  biayaPendaftaran: "Bebas Biaya Formulir Pendaftaran Online",
  portalUrl: "https://spmb.smaplusalghifari.sch.id",

  jalurList: [
    {
      id: "tahfidz",
      name: "Jalur Prestasi Tahfidz & Kejuaraan",
      badge: "Beasiswa Unggulan",
      kuota: "30% Kuota (72 Siswa)",
      desc: "Diperuntukkan bagi hafiz/hafizah Al-Qur'an minimal 2 Juz, peraih medali olimpiade sains, atau kejuaraan olahraga/seni minimal tingkat Kota.",
      benefits: ["Bebas Uang Pangkal / DSP hingga 100%", "Prioritas Kelas Bimbingan Prestasi", "Bebas Ujian Tertulis"],
      color: "border-emerald-500 bg-emerald-50/60 text-emerald-900"
    },
    {
      id: "alumni",
      name: "Jalur Lulusan SMP Al Ghifari & Kemitraan",
      badge: "Keluarga Besar",
      kuota: "35% Kuota (84 Siswa)",
      desc: "Jalur khusus kesinambungan pendidikan bagi lulusan SMP Plus Al Ghifari Bandung atau mitra yayasan pendidikan.",
      benefits: ["Potongan Biaya Khusus Alumni Al Ghifari", "Bebas Biaya Tes Masuk", "Proses Berkas Otomatis"],
      color: "border-blue-500 bg-blue-50/60 text-blue-900"
    },
    {
      id: "reguler",
      name: "Jalur Reguler & Minat Bakat",
      badge: "Terbuka Umum",
      kuota: "25% Kuota (60 Siswa)",
      desc: "Terbuka untuk seluruh lulusan SMP/MTs negeri maupun swasta melalui tes pemetaan potensi akademik & wawancara komitmen adab.",
      benefits: ["Tes Pemetaan Karakter Rabbani", "Bebas Pilihan Peminatan Kurikulum Merdeka", "Fasilitas Pengayaan"],
      color: "border-amber-500 bg-amber-50/60 text-amber-900"
    },
    {
      id: "afirmasi",
      name: "Jalur Afirmasi / KIP & Duafa Berprestasi",
      badge: "Bantuan Pendidikan",
      kuota: "10% Kuota (24 Siswa)",
      desc: "Diperuntukkan bagi siswa dari keluarga prasejahtera yang berprestasi dan memiliki motivasi kuat untuk menuntut ilmu.",
      benefits: ["Bantuan Subsidi Biaya Pendidikan", "Paket Buku & Bimbingan Terpadu", "Dukungan Penuh Yayasan"],
      color: "border-purple-500 bg-purple-50/60 text-purple-900"
    }
  ],

  timeline: [
    {
      step: 1,
      title: "Pendaftaran Online & Pembuatan Akun",
      date: "01 Februari - 30 April 2026",
      desc: "Mengisi biodata lengkap calon siswa dan memilih jalur pendaftaran di website resmi SPMB Al Ghifari.",
      status: "active"
    },
    {
      step: 2,
      title: "Verifikasi Dokumen & Berkas",
      date: "01 Mei - 08 Mei 2026",
      desc: "Panitia memvalidasi nilai rapor SMP, piagam tahfidz/prestasi, dan dokumen kartu keluarga secara online.",
      status: "upcoming"
    },
    {
      step: 3,
      title: "Tes Pemetaan Akademik & Baca Qur'an",
      date: "10 Mei - 11 Mei 2026",
      desc: "Uji potensi dasar skolastik, tes bacaan Al-Qur'an (Tahsin/Tahfidz), serta wawancara komitmen orang tua.",
      status: "upcoming"
    },
    {
      step: 4,
      title: "Pengumuman Resmi Kelulusan",
      date: "16 Mei 2026",
      desc: "Hasil seleksi diumumkan melalui website SPMB Al Ghifari dan notifikasi WhatsApp resmi panitia.",
      status: "upcoming"
    },
    {
      step: 5,
      title: "Daftar Ulang & Pengenalan Sekolah (MPLS)",
      date: "20 Mei - 27 Mei 2026",
      desc: "Pengambilan perlengkapan seragam, orientasi lingkungan sekolah islami ramah anak, dan temu wali santri baru.",
      status: "upcoming"
    }
  ],

  requirements: [
    "Scan Kartu Keluarga (KK) yang masih berlaku",
    "Scan Akta Kelahiran Calon Siswa",
    "Surat Keterangan Lulus (SKL) / Rapor Semester 1-5 SMP/MTs dilegalisir",
    "Pas Foto Berwarna Terbaru 3x4 (Background Merah/Biru)",
    "Nomor Induk Siswa Nasional (NISN) yang valid",
    "Sertifikat Hafalan Tahfidz Al-Qur'an (Khusus Jalur Tahfidz)",
    "Piagam Kejuaraan Lomba Resmi (Khusus Jalur Prestasi)",
    "Kartu KIP/KPS/Surat Keterangan Tidak Mampu (Khusus Jalur Afirmasi)"
  ],

  sampleRegistrations: [
    {
      regNo: "SPMB-2026-00108",
      nisn: "0082345678",
      fullName: "Muhammad Fadhil Al-Farizi",
      schoolOrigin: "SMP Plus Al Ghifari",
      jalur: "Lulusan SMP Al Ghifari",
      status: "DITERIMA DI SMA PLUS AL GHIFARI",
      statusCode: "accepted",
      message: "ALHAMDULILLAH! Selamat Anda dinyatakan DITERIMA di SMA Plus Al Ghifari Bandung Tahun Ajaran 2026/2027. Silakan lakukan proses Daftar Ulang.",
      registeredAt: "10 Februari 2026",
      scheduleTest: "Selesai (Skor: 96/100)"
    },
    {
      regNo: "SPMB-2026-00215",
      nisn: "0071239845",
      fullName: "Siti Nur Syifa Aulia",
      schoolOrigin: "MTs Negeri 1 Kota Bandung",
      jalur: "Prestasi Tahfidz (3 Juz)",
      status: "Lolos Seleksi Berkas & Siap Uji Tahfidz",
      statusCode: "verified",
      message: "Berkas Anda dinyatakan LENGKAP. Jadwal tes tasmi' hafalan Al-Qur'an dan wawancara pada Sabtu, 10 Mei 2026 di Ruang Al-Quds.",
      registeredAt: "22 Februari 2026",
      scheduleTest: "Sabtu, 10 Mei 2026 | 08.30 WIB | Kampus Arcamanik"
    },
    {
      regNo: "SPMB-2026-00340",
      nisn: "0098761234",
      fullName: "Raihan Aditya Pratama",
      schoolOrigin: "SMP Negeri 17 Bandung",
      jalur: "Reguler Minat Bakat",
      status: "Menunggu Verifikasi Administrasi",
      statusCode: "pending",
      message: "Data Anda telah masuk dalam antrean verifikasi panitia SPMB SMA Plus Al Ghifari. Mohon pantau secara berkala.",
      registeredAt: "05 Maret 2026",
      scheduleTest: "Menunggu Jadwal Tes"
    }
  ],

  faqs: [
    {
      q: "Apakah ada program asrama (boarding) di SMA Plus Al Ghifari Bandung?",
      a: "SMA Plus Al Ghifari melayani siswa *Full Day School* (Senin-Jumat). Bagi siswa dari luar kota Bandung, yayasan juga bekerja sama dengan asrama/pondok mitra terpercaya di sekitar kawasan Arcamanik Bandung."
    },
    {
      q: "Bagaimana sistem pembinaan Tahfidz Al-Qur'an di sekolah ini?",
      a: "Setiap pagi sebelum kegiatan KBM dimulai, diadakan pembiasaan tahsin dan tahfidz Al-Qur'an bersanad selama 30-45 menit. Siswa dibimbing per kelompok sesuai tingkat hafalan dengan target minimal kelulusan memiliki hafalan juz 30 dan juz 29."
    },
    {
      q: "Apa itu Program Gerakan 7 Harkat?",
      a: "Gerakan 7 Harkat (7 Hari Berkarakter) adalah program pembiasaan khas Al Ghifari: Senin (Kebangsaan), Selasa (Wawasan Global/Bilingual), Rabu (Literasi & Eco-Green), Kamis (Rebo Nyunda), Jumat (Sehat Jasmani Rohani), serta Sabtu-Minggu (Keluarga & Masyarakat)."
    },
    {
      q: "Bagaimana cara mendaftar dan apakah bisa dibantu via WhatsApp?",
      a: "Sangat bisa! Anda cukup mengisi formulir online di website ini, atau langsung klik tombol WhatsApp Helpdesk SPMB di pojok kanan bawah. Petugas kami siap membimbing pengisian berkas dari awal hingga selesai."
    }
  ]
};
