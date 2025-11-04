export const certificateArchive = [
  {
    nomor: "PPSI-DIGJAYA-2025-001",
    nama: "Alya Putri Siliwangi",
    terbit: "12 Februari 2025",
    sabuk: "Hitam",
    berlaku: "12 Februari 2027",
    jenis: "Kenaikan Sabuk",
  },
  {
    nomor: "PPSI-DIGJAYA-PEL-045",
    nama: "Iis Herlina",
    terbit: "28 November 2024",
    sabuk: "Merah",
    berlaku: "28 November 2026",
    jenis: "Pelatih Madya",
  },
  {
    nomor: "PPSI-DIGJAYA-AT-210",
    nama: "Galih Siliwangi",
    terbit: "03 September 2024",
    sabuk: "Biru",
    berlaku: "03 September 2025",
    jenis: "Atlet Pasanggiri",
  },
];

export const expiringCertificates = [
  {
    nomor: "PPSI-DIGJAYA-AT-210",
    nama: "Galih Siliwangi",
    berlaku: "03 September 2025",
    catatan: "Segera perbarui status atlet sebelum pasanggiri Agustus.",
  },
  {
    nomor: "PPSI-DIGJAYA-PEL-045",
    nama: "Iis Herlina",
    berlaku: "28 November 2026",
    catatan: "Perlu resertifikasi pelatih dan laporan pembinaan.",
  },
];

export const certificatePricing = {
  range: "Rp8.000 – Rp12.000",
  description:
    "Biaya digitalisasi mencakup penerbitan sertifikat, hosting arsip, dan pemeliharaan tautan verifikasi aktif.",
  features: [
    {
      id: "pricing-qr",
      title: "Verifikasi URL & QR",
      detail: "Setiap sertifikat memiliki URL unik dan QR code yang dapat dipindai untuk validasi instan.",
    },
    {
      id: "pricing-metadata",
      title: "Metadata lengkap",
      detail: "Nama, nomor induk, program, sabuk, dan masa berlaku tersimpan aman di arsip digital.",
    },
    {
      id: "pricing-pdf",
      title: "Unduh PDF resmi",
      detail: "Penerima dapat mengunduh versi PDF bertanda tangan digital kapan saja tanpa biaya tambahan.",
    },
  ],
  notes: [
    "Biaya dihitung per sertifikat berdasarkan kompleksitas data dan kebutuhan branding cabang.",
    "Termasuk pembaruan QR setelah perpanjangan sertifikat serta dukungan helpdesk pengurus.",
  ],
};

export const certificateAdminMetrics = [
  {
    id: "cert-active",
    label: "Sertifikat Aktif",
    value: 428,
    helper: "+36 dibanding bulan lalu",
    variant: "success",
  },
  {
    id: "cert-requests",
    label: "Permintaan Minggu Ini",
    value: 74,
    helper: "18 sedang menunggu verifikasi",
    variant: "accent",
  },
  {
    id: "cert-downloads",
    label: "PDF Diunduh",
    value: 312,
    helper: "Rata-rata Rp9.500 / sertifikat",
    variant: "neutral",
  },
  {
    id: "cert-expiring",
    label: "<90 Hari Kedaluwarsa",
    value: 18,
    helper: "Perlu follow-up cabang",
    variant: "warning",
  },
];

export const certificateWorkflow = [
  {
    id: "flow-prepare",
    title: "Unggah data & metadata",
    detail: "Admin cabang mengisi template lengkap (identitas, program, masa berlaku).",
    owner: "Pengurus Cabang",
  },
  {
    id: "flow-verify",
    title: "Verifikasi URL & QR",
    detail: "Tim pusat meninjau kelengkapan lalu mengaktifkan URL publik dan QR code.",
    owner: "Sekretariat Pusat",
  },
  {
    id: "flow-publish",
    title: "Terbit & distribusi PDF",
    detail: "Sertifikat dikirim ke penerima via email dengan tautan unduh PDF resmi.",
    owner: "Sistem Otomatis",
  },
];

export const certificateRecentRequests = [
  {
    id: "CERT-5521",
    name: "Program Pelatih Madya",
    count: 24,
    fee: "Rp9.600",
    status: "Verifikasi",
  },
  {
    id: "CERT-5516",
    name: "Dojo Cirebon - Kenaikan Sabuk",
    count: 18,
    fee: "Rp8.400",
    status: "Siap Terbit",
  },
  {
    id: "CERT-5510",
    name: "Batch Atlet Junior 2025",
    count: 36,
    fee: "Rp10.800",
    status: "Pengumpulan Metadata",
  },
];

export const certificateMetadataChecklist = [
  {
    id: "meta-id",
    label: "Nomor induk PPSI",
    detail: "Kode anggota atau pelatih yang terhubung ke sistem keanggotaan.",
  },
  {
    id: "meta-program",
    label: "Program / kejuaraan",
    detail: "Teks judul singkat program, event, atau jenjang sertifikasi.",
  },
  {
    id: "meta-validity",
    label: "Tanggal terbit dan berlaku",
    detail: "Format DD MMMM YYYY untuk memastikan konsistensi arsip.",
  },
  {
    id: "meta-verifier",
    label: "Pejabat penandatangan",
    detail: "Nama dan jabatan pengesah untuk ditampilkan di PDF dan metadata.",
  },
];
