export const sabukOptions = [
  "Putih",
  "Kuning",
  "Hijau",
  "Biru",
  "Merah",
  "Cokelat",
  "Hitam",
];

export const jenisKeanggotaan = [
  "Pelatih",
  "Atlet",
  "Pengurus",
  "Anggota Umum",
];

export const statusKeaktifan = ["Aktif", "Tidak Aktif", "Dalam Proses"];

export const membershipPlans = [
  {
    id: "pelatih",
    name: "Pelatih PPSI",
    fee: "Rp250.000 / tahun",
    benefits: [
      "Materi pelatihan eksklusif dan sertifikasi resmi",
      "Akses forum strategi pengembangan perguruan",
      "Prioritas program dana sosial untuk pembinaan atlet",
    ],
  },
  {
    id: "atlet",
    name: "Atlet Prestasi",
    fee: "Rp150.000 / tahun",
    benefits: [
      "Pendampingan jadwal latihan dan evaluasi performa",
      "Kesempatan mengikuti pasanggiri dan festival daerah",
      "Asuransi latihan dasar serta dana darurat cedera",
    ],
  },
  {
    id: "pengurus",
    name: "Pengurus Perguruan",
    fee: "Rp300.000 / tahun",
    benefits: [
      "Bimbingan tata kelola organisasi dan administrasi",
      "Template laporan dan dashboard monitoring anggota",
      "Prioritas akses program kolaborasi pemerintah/mitra",
    ],
  },
  {
    id: "umum",
    name: "Anggota Umum",
    fee: "Rp100.000 / tahun",
    benefits: [
      "Akses perpustakaan digital dan arsip budaya PPSI",
      "Harga khusus atribut dan merchandise resmi",
      "Newsletter agenda budaya serta peluang kolaborasi",
    ],
  },
];

export const riwayatIuranDummy = [
  { tanggal: "12 Januari 2025", jenis: "Iuran Tahunan", status: "Lunas" },
  { tanggal: "10 September 2024", jenis: "Program Pelatihan", status: "Lunas" },
  { tanggal: "05 Mei 2024", jenis: "Dana Sosial Atlet", status: "Pending" },
];

export const paymentMethodOptions = [
  "Transfer Bank",
  "Virtual Account",
  "QRIS",
  "Setoran Tunai Sekretariat",
];

export const billingFrequencyOptions = ["Bulanan", "Triwulanan", "Tahunan"];

export const provinsiOptions = ["Jawa Barat", "DKI Jakarta", "Banten"];
export const kotaOptions = [
  "Kota Bandung",
  "Kabupaten Bandung",
  "Kota Cimahi",
  "Kota Bogor",
];
export const kecamatanOptions = ["Lengkong", "Arcamanik", "Cibeunying", "Cimahi Selatan"];
