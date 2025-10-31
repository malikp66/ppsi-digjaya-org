# Performance Log

Tanggal: 2025-10-31

Semua angka di bawah diambil dari perintah `pnpm build` (Next.js production build).

## Ringkasan Build

| Metrik                               | Sebelum | Sesudah | Perubahan |
|--------------------------------------|:-------:|:-------:|----------:|
| Waktu kompilasi (optimisasi)         |   7.0s  |   4.0s  |    -3.0s  |
| First Load JS root (`/`)             | 151 kB  | 142 kB  |    -9 kB  |
| First Load JS `/index-two`           | 143 kB  | 127 kB  |   -16 kB  |
| First Load JS `/index-three`         | 164 kB  | 148 kB  |   -16 kB  |
| First Load JS `/index-four`          | 168 kB  | 152 kB  |   -16 kB  |
| First Load JS `/index-five`          | 162 kB  | 146 kB  |   -16 kB  |
| First Load JS shared chunks          | 102 kB  | 102 kB  |     0 kB  |

## Sumber Data

- **Sebelum optimisasi**: output `pnpm build` pertama (default template).
- **Sesudah optimisasi**: lihat file `performance-after.log`.

Catatan: halaman lain seperti `/about-us`, `/events`, dan `/shop` sekarang juga berbagi bundle slider yang dimuat secara malas sehingga First Load JS mereka turun ke 118–121 kB.
