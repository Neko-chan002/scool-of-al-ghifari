/**
 * Format Template Email Resmi Pendaftaran PMB / SNMB
 * SMA Plus Al Ghifari Kota Bandung
 */

export const SCHOOL_EMAILS = {
  pmb: "pmb.smaplusalghifari@gmail.com",
  official: "sma.alghifari95@gmail.com",
  itHelpdesk: "admin@smaplusalghifari.sch.id"
};

/**
 * Menghasilkan format teks email resmi (dignified & structured)
 */
export function generateOfficialEmailText(regData, regNo, timestamp = new Date()) {
  const dateFormatted = timestamp.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const timeFormatted = timestamp.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit'
  }) + ' WIB';

  return `================================================================================
           YAYASAN AL GHIFARI - SMA PLUS AL GHIFARI KOTA BANDUNG
       Terakreditasi "A" (Unggul) BAN-S/M | NPSN: 20219776 | NSS: 302026017001
   Jl. Inspeksi Pengairan No. 23 Arcamanik, Bandung 40293 | Telp: (022) 7806223
================================================================================

Kepada Yth.
Ketua Panitia SNMB / SPMB TA 2026/2027
SMA Plus Al Ghifari Kota Bandung
di Tempat

Perihal  : Formulir Registrasi Calon Siswa Baru Online (SNMB 2026)
Lampiran : Berkas Pendaftaran & Biodata Calon Siswa

Assalamu'alaikum Warahmatullahi Wabarakatuh,

Dengan hormat,
Melalui portal resmi website SMA Plus Al Ghifari Bandung (smaplusalghifari.sch.id),
telah masuk formulir pendaftaran calon siswa baru dengan rincian data sebagai berikut:

--------------------------------------------------------------------------------
1. INFORMASI REGISTRASI RESMI
--------------------------------------------------------------------------------
• Nomor Registrasi : ${regNo}
• Tanggal Masuk    : ${dateFormatted}
• Waktu Pengisian  : ${timeFormatted}
• Gelombang Masuk  : Gelombang II (Tahun Ajaran 2026/2027)
• Status Dokumen   : [MENUNGGU VERIFIKASI ADMINISTRASI & TES WAWANCARA]

--------------------------------------------------------------------------------
2. BIODATA LENGKAP CALON SISWA
--------------------------------------------------------------------------------
• Nama Lengkap     : ${regData.fullName?.toUpperCase()}
• NISN             : ${regData.nisn}
• Jenis Kelamin    : ${regData.gender}
• Asal SMP / MTs   : ${regData.schoolOrigin}
• Tempat, Tgl Lahir: ${regData.birthPlace || 'Bandung'}, ${regData.birthDate || '-'}
• Email Siswa      : ${regData.email || '-'}
• No. WhatsApp/HP  : ${regData.phone || regData.parentPhone}

--------------------------------------------------------------------------------
3. PILIHAN JALUR & PEMINATAN AKADEMIK
--------------------------------------------------------------------------------
• Jalur Pendaftaran: ${regData.jalur?.toUpperCase() === 'TAHFIDZ' ? 'JALUR PRESTASI TAHFIDZ AL-QUR\'AN (BEBAS DSP 100%)' : regData.jalur?.toUpperCase()}
• Peminatan Siswa  : ${regData.peminatan}
• Target Hafalan   : ${regData.tahfidzJuz || '3 Juz (Juz 30, 29, 28)'}
• Minat Ekskul     : ${regData.ekskulInterest}

--------------------------------------------------------------------------------
4. DATA ORANG TUA / WALI SANTRI
--------------------------------------------------------------------------------
• Nama Orang Tua   : ${regData.parentName}
• Pekerjaan        : ${regData.parentJob || 'Wiraswasta / Swasta'}
• No. WhatsApp     : ${regData.parentPhone}
• Alamat Domisili  :
  ${regData.address || 'Kawasan Kota Bandung'}

--------------------------------------------------------------------------------
5. CHECKLIST DOKUMEN YANG HARUS DIVERIFIKASI PANITIA
--------------------------------------------------------------------------------
[x] Fotokopi Ijazah / Surat Keterangan Lulus (SKL) SMP
[x] Fotokopi Kartu Keluarga (KK) & Akta Kelahiran
[x] Fotokopi Rapor Semester 1 s.d. 5 Legalisir
[x] Pasfoto Resmi Calon Siswa Ukuran 3x4 (3 Lembar)
[x] Sertifikat Hafalan Qur'an / Piagam Prestasi (Bagi Jalur Prestasi)

--------------------------------------------------------------------------------
6. LEMBAR PERNYATAAN & KOMITMEN
--------------------------------------------------------------------------------
"Segala data yang tercantum dalam formulir ini diisi dengan sebenarnya dan dapat
dipertanggungjawabkan keabsahannya. Calon siswa dan orang tua berkomitmen mematuhi
tata tertib madani, pembiasaan Gerakan 7 Harkat Al Ghifari, serta menghadiri sesi
wawancara pemetaan karakter di Kampus Arcamanik Bandung."

Wassalamu'alaikum Warahmatullahi Wabarakatuh,

Panitia Penerimaan Murid Baru (SNMB 2026/2027)
SMA Plus Al Ghifari Kota Bandung

--------------------------------------------------------------------------------
Tembusan:
1. Kepala SMA Plus Al Ghifari Bandung (Ibu Teni Pursina, S.E.)
2. Bagian Administrasi & Keuangan Yayasan Al Ghifari
3. Arsip Email Calon Siswa / Wali (${regData.email || regData.parentPhone})
================================================================================`;
}

/**
 * Menghasilkan mailto link untuk membuka aplikasi email (Gmail / Outlook / Apple Mail)
 */
export function generateMailtoUrl(regData, regNo) {
  const recipient = SCHOOL_EMAILS.pmb;
  const cc = regData.email ? encodeURIComponent(regData.email) : '';
  const subject = encodeURIComponent(`[REGISTRASI SNMB 2026] No: ${regNo} - a.n. ${regData.fullName} (${regData.schoolOrigin})`);
  const body = encodeURIComponent(generateOfficialEmailText(regData, regNo));

  let url = `mailto:${recipient}?subject=${subject}&body=${body}`;
  if (cc) {
    url += `&cc=${cc}`;
  }
  return url;
}

/**
 * Simulasi Pengiriman Email Otomatis ke Server / Webhook Sekolah
 */
export async function dispatchRegistrationEmail(regData, regNo) {
  const timestamp = new Date();
  const textBody = generateOfficialEmailText(regData, regNo, timestamp);

  const payload = {
    to: SCHOOL_EMAILS.pmb,
    cc: [regData.email, SCHOOL_EMAILS.official].filter(Boolean),
    subject: `[REGISTRASI SNMB 2026] No: ${regNo} - a.n. ${regData.fullName} (${regData.schoolOrigin})`,
    body: textBody,
    metadata: {
      registrationNo: regNo,
      studentName: regData.fullName,
      schoolOrigin: regData.schoolOrigin,
      phone: regData.parentPhone,
      jalur: regData.jalur,
      submittedAt: timestamp.toISOString()
    }
  };

  // Mencoba kirim ke endpoint webhook/Formspree jika aktif
  try {
    // Timeout 4 detik agar tidak menghambat UX pengguna
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    // Kirim request (disiapkan untuk endpoint sekolah / form endpoint)
    await fetch("https://formspree.io/f/xbjnvpzw", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        ...payload.metadata,
        message: textBody,
        _replyto: regData.email || SCHOOL_EMAILS.pmb
      }),
      signal: controller.signal
    }).catch(() => {
      // Fallback diam jika formspree belum dikonfigurasi pendaftaran
    });

    clearTimeout(timeoutId);
  } catch (e) {
    console.log("Email dispatch local fallback:", e);
  }

  // Simpan riwayat pendaftaran di localStorage browser untuk verifikasi status
  try {
    const existingList = JSON.parse(localStorage.getItem('alghifari_registrations') || '[]');
    existingList.unshift({
      regNo,
      ...regData,
      dateFormatted: timestamp.toLocaleDateString('id-ID'),
      status: 'Menunggu Verifikasi Berkas'
    });
    localStorage.setItem('alghifari_registrations', JSON.stringify(existingList));
  } catch (err) {
    console.error("Local storage error:", err);
  }

  return {
    success: true,
    regNo,
    targetEmail: SCHOOL_EMAILS.pmb,
    ccEmail: SCHOOL_EMAILS.official,
    timestamp: timestamp.toLocaleString('id-ID')
  };
}
