export const managementHighlights = [
  {
    id: "highlight-1",
    label: "Berita Aktif",
    value: 28,
    change: "+6% vs minggu lalu",
    status: "up",
  },
  {
    id: "highlight-2",
    label: "Order Baru",
    value: 124,
    change: "+18 order",
    status: "alert",
  },
  {
    id: "highlight-3",
    label: "Anggota Aktif",
    value: 1874,
    change: "+42 anggota",
    status: "up",
  },
  {
    id: "highlight-4",
    label: "Event Minggu Ini",
    value: 7,
    change: "3 membutuhkan PIC",
    status: "warn",
  },
];

export const managementNotifications = [
  {
    id: "notif-1",
    title: "Berita butuh persetujuan",
    detail: "Artikel Profil Perguruan Cikalong menunggu review sejak 2 hari lalu.",
    badge: "Konten",
  },
  {
    id: "notif-2",
    title: "Order menunggu pembayaran",
    detail: "12 order marketplace belum dikonfirmasi setelah 24 jam.",
    badge: "Marketplace",
  },
  {
    id: "notif-3",
    title: "Stok merch terbatas",
    detail: "Stok kaos edisi Pekan Budaya tinggal 8 pcs.",
    badge: "Inventori",
  },
  {
    id: "notif-4",
    title: "Tiket dukungan baru",
    detail: "5 tiket support masuk dari pelatih cabang Karawang.",
    badge: "Helpdesk",
  },
];

export const navigationPrimary = [
  { id: "nav-1", label: "Dashboard", badge: null },
  { id: "nav-2", label: "Konten & Berita", badge: "6" },
  { id: "nav-3", label: "Marketplace", badge: "12" },
  { id: "nav-4", label: "Keanggotaan", badge: null },
  { id: "nav-5", label: "Program & Event", badge: null },
  { id: "nav-6", label: "Sertifikat Online", badge: null },
  { id: "nav-7", label: "Helpdesk", badge: "5" },
];

export const navigationSecondary = [
  { id: "nav-sec-1", label: "Pengaturan" },
  { id: "nav-sec-2", label: "Bantuan" },
  { id: "nav-sec-3", label: "Keluar" },
];

export const managementCalendar = [
  {
    id: "cal-1",
    date: "Sen, 4 Nov",
    title: "Rapat koordinasi DPW",
    detail: "Update kurikulum latihan & dana operasional",
  },
  {
    id: "cal-2",
    date: "Sel, 5 Nov",
    title: "Deadline publikasi artikel budaya",
    detail: "Serah terima konten dari tim riset ke media",
  },
  {
    id: "cal-3",
    date: "Kam, 7 Nov",
    title: "Pelatihan wasit senior",
    detail: "Sesi pagi 09.00 WIB, Gedung PPSI Bandung",
  },
  {
    id: "cal-4",
    date: "Sab, 9 Nov",
    title: "Festival Seni Bela Diri",
    detail: "Target peserta 300, siapkan rundown final",
  },
];

export const managerProfile = {
  name: "Totok Michael",
  role: "Sekretaris DPW Jawa Barat",
  email: "sekretariat@ppsi-digjaya.org",
  avatarInitials: "TM",
};

export const newsPipeline = [
  { id: "news-status-1", status: "Draft", count: 9 },
  { id: "news-status-2", status: "Menunggu Review", count: 5 },
  { id: "news-status-3", status: "Terbit", count: 28 },
  { id: "news-status-4", status: "Kadaluarsa", count: 3 },
];

export const contentEngagement = [
  { id: "eng-1", day: "S", percent: 42 },
  { id: "eng-2", day: "S", percent: 58 },
  { id: "eng-3", day: "M", percent: 74 },
  { id: "eng-4", day: "T", percent: 81 },
  { id: "eng-5", day: "W", percent: 65 },
  { id: "eng-6", day: "T", percent: 52 },
  { id: "eng-7", day: "F", percent: 38 },
];

export const newsPerformance = [
  {
    id: "news-1",
    title: "Jejak Pencak Silat di Ciamis",
    views: 2314,
    cta: "45 pendaftar latihan",
    shares: 126,
    status: "Performing",
  },
  {
    id: "news-2",
    title: "Highlight Festival Jawa Barat",
    views: 1780,
    cta: "32 donasi terkumpul",
    shares: 94,
    status: "Perlu Refresh",
  },
  {
    id: "news-3",
    title: "Tokoh Muda PPSI Digjaya",
    views: 1543,
    cta: "18 relawan baru",
    shares: 87,
    status: "Trending",
  },
];

export const editorialQueue = [
  {
    id: "edit-1",
    title: "Profil Perguruan Cikalong",
    owner: "Asep Mulyana",
    due: "2 hari lagi",
    notes: "Tambahkan foto kegiatan terbaru",
  },
  {
    id: "edit-2",
    title: "Seri Penelitian Jurus Tradisional",
    owner: "Tim Riset Budaya",
    due: "Menunggu naskah",
    notes: "Butuh validasi istilah jurus",
  },
  {
    id: "edit-3",
    title: "Rangkuman Liga antar Kabupaten",
    owner: "Humas",
    due: "Hari ini",
    notes: "Sudah disetujui Dewan Pelatih",
  },
];

export const orderSummary = {
  volumes: [
    { id: "ord-vol-1", label: "Hari ini", value: 24, diff: "+6 vs kemarin" },
    { id: "ord-vol-2", label: "Minggu ini", value: 124, diff: "+18 vs minggu lalu" },
    { id: "ord-vol-3", label: "Proses Pengiriman", value: 37, diff: "12 melewati SLA" },
  ],
  statusBreakdown: [
    { id: "ord-status-1", label: "Baru", count: 38 },
    { id: "ord-status-2", label: "Dikemas", count: 22 },
    { id: "ord-status-3", label: "Dikirim", count: 31 },
    { id: "ord-status-4", label: "Selesai", count: 28 },
    { id: "ord-status-5", label: "Refund", count: 5 },
  ],
  finance: [
    { id: "fin-1", label: "Pendapatan Minggu Ini", amount: "Rp48.560.000" },
    { id: "fin-2", label: "Piutang", amount: "Rp6.750.000" },
    { id: "fin-3", label: "Biaya Operasional", amount: "Rp11.200.000" },
  ],
};

export const orderAlerts = [
  {
    id: "ord-alert-1",
    title: "Order marketplace menunggu konfirmasi",
    detail: "12 transaksi perlu follow-up pembayaran.",
  },
  {
    id: "ord-alert-2",
    title: "Stok merch festival mendekati limit",
    detail: "Segera lakukan restock untuk ukuran L & XL.",
  },
];

export const orderTable = [
  {
    id: "ORD-1024",
    buyer: "Yuni Permatasari",
    product: "Paket Merchandise Festival",
    value: "Rp1.250.000",
    status: "Dikemas",
    eta: "3 Nov",
  },
  {
    id: "ORD-1023",
    buyer: "Perguruan Setia Hati",
    product: "Lisensi Materi Latihan",
    value: "Rp3.500.000",
    status: "Selesai",
    eta: "Terkirim",
  },
  {
    id: "ORD-1022",
    buyer: "Budi Rahman",
    product: "Seragam Resmi PPSI",
    value: "Rp680.000",
    status: "Dikirim",
    eta: "2 hari lagi",
  },
  {
    id: "ORD-1021",
    buyer: "Komunitas Cirebon",
    product: "Paket Workshop",
    value: "Rp4.200.000",
    status: "Menunggu Bayar",
    eta: "Follow-up",
  },
];

export const membershipStats = {
  summary: [
    { id: "mem-1", label: "Anggota Terverifikasi", value: 1874 },
    { id: "mem-2", label: "Menunggu Verifikasi", value: 126 },
    { id: "mem-3", label: "Tidak Aktif > 6 bln", value: 87 },
  ],
  segments: [
    { id: "mem-seg-1", label: "Pengurus Cabang", count: 56 },
    { id: "mem-seg-2", label: "Pelatih", count: 212 },
    { id: "mem-seg-3", label: "Atlet", count: 1340 },
    { id: "mem-seg-4", label: "Relawan", count: 266 },
  ],
  engagement: [
    { id: "mem-eng-1", metric: "Kehadiran event bulan ini", value: "73%" },
    { id: "mem-eng-2", metric: "Partisipasi forum diskusi", value: "418 kontribusi" },
    { id: "mem-eng-3", metric: "Feedback pelatihan", value: "4.6/5 rata-rata" },
  ],
};

export const collaborationBoard = [
  {
    id: "col-1",
    name: "Alexandra Deff",
    focus: "Koordinasi repo dokumentasi digital",
    status: "Selesai",
    statusVariant: "success",
  },
  {
    id: "col-2",
    name: "Edwin Adenike",
    focus: "Integrasi modul autentikasi anggota",
    status: "Progres",
    statusVariant: "accent",
  },
  {
    id: "col-3",
    name: "Isaac Oluwatemilorun",
    focus: "Pengembangan sistem pencarian arsip",
    status: "Progres",
    statusVariant: "accent",
  },
  {
    id: "col-4",
    name: "David Oshodi",
    focus: "Layout responsif halaman komunitas",
    status: "Review",
    statusVariant: "warning",
  },
];

export const programSchedules = [
  {
    id: "prog-1",
    name: "Program Pembinaan Atlet Junior",
    progress: "70%",
    status: "On Track",
    tasks: ["Lengkapi modul latihan taktik", "Penugasan mentor kabupaten"],
  },
  {
    id: "prog-2",
    name: "Festival Seni Bela Diri 2025",
    progress: "45%",
    status: "Butuh PIC Media",
    tasks: ["Finalisasi vendor", "Update area bazar"],
  },
  {
    id: "prog-3",
    name: "Digitalisasi Arsip Jurus",
    progress: "82%",
    status: "Menunggu Validasi Dewan",
    tasks: ["Review terminologi", "Upload dokumentasi video"],
  },
];

export const programReports = [
  {
    id: "prog-rep-1",
    title: "Laporan Festival Kabupaten",
    highlight: "Kehadiran 312 peserta, surplus dana Rp8,5 juta",
    owner: "Tim Event",
  },
  {
    id: "prog-rep-2",
    title: "Evaluasi Latihan Terpusat",
    highlight: "Nilai kebugaran naik 12%, butuh alat latihan tambahan",
    owner: "Bidang Pembinaan",
  },
  {
    id: "prog-rep-3",
    title: "Audit Program Dana Sosial",
    highlight: "Penyaluran 96% tepat sasaran, kurangi backlog verifikasi",
    owner: "Keuangan",
  },
];

export const helpdeskTickets = [
  {
    id: "SUP-308",
    topic: "Reset akses dashboard cabang",
    requester: "Rudi - Purwakarta",
    status: "Diproses",
    sla: "Sisa 4 jam",
  },
  {
    id: "SUP-307",
    topic: "Koreksi data anggota",
    requester: "Sinta - Bogor",
    status: "Baru",
    sla: "Sisa 10 jam",
  },
  {
    id: "SUP-306",
    topic: "Pelaporan kerusakan perlengkapan",
    requester: "Dani - Bandung",
    status: "Selesai",
    sla: "Closed",
  },
];

export const reportShortcuts = [
  {
    id: "report-1",
    title: "Unduh Laporan Bulanan",
    description: "Ringkasan order, keuangan, dan aktivitas anggota",
    format: "PDF / Excel",
  },
  {
    id: "report-2",
    title: "Insight Promosi vs Penjualan",
    description: "Evaluasi dampak kampanye konten ke penjualan produk",
    format: "Dashboard",
  },
  {
    id: "report-3",
    title: "Heatmap Aktivitas Pengguna",
    description: "Jam ramai, halaman populer, dan pola akses perangkat",
    format: "Grafik interaktif",
  },
];

export const governanceReminders = [
  {
    id: "gov-1",
    title: "Atur peran & akses",
    detail: "Tinjau ulang akses pengurus cabang setelah rotasi jabatan.",
  },
  {
    id: "gov-2",
    title: "Audit log aktivitas",
    detail: "Pastikan log download laporan disimpan aman.",
  },
  {
    id: "gov-3",
    title: "Integrasi kalender",
    detail: "Sinkronkan event besar ke Google Calendar pengurus.",
  },
  {
    id: "gov-4",
    title: "Pengingat stok kritis",
    detail: "Aktifkan notifikasi otomatis jika stok < 10 unit.",
  },
];

export const trackerInfo = {
  elapsed: "01:24:08",
  label: "Pendampingan cabang Karawang",
  controls: [
    { id: "tracker-pause", icon: "pause" },
    { id: "tracker-stop", icon: "square" },
  ],
};
