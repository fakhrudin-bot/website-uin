# 🎓 UIN Maulana Malik Ibrahim Malang - Official Website

Website resmi **Universitas Islam Negeri Maulana Malik Ibrahim Malang** dengan desain modern, elegan, responsif, dan profesional.

## ✨ Fitur Utama

### Desain & UI
- 🎨 **Desain Modern Premium** — Inspirasi dari Harvard, Oxford, BINUS, Telkom University
- 📱 **Fully Responsive** — Mobile-first design untuk semua perangkat
- 🌓 **Dark/Light Mode** — Toggle tema dengan localStorage persistence
- ✨ **Smooth Animations** — Framer Motion untuk animasi halus dan profesional
- 🎯 **Glassmorphism** — Efek kaca modern pada komponen auth
- 🖼️ **Loading Animation** — Spinner elegan saat halaman dimuat

### Halaman Lengkap (10 Pages)
1. **🏠 Home** — Hero, Sambutan Rektor, Statistik, Berita, Fakultas, Prestasi, Agenda, Testimoni, CTA
2. **ℹ️ Tentang Kampus** — Sejarah, Visi Misi, Profil, Struktur Organisasi, Akreditasi, Video
3. **🏛️ Fakultas** — List 10 Fakultas, Detail per Fakultas, Program Studi, Dosen, Prestasi
4. **📚 Akademik** — Kalender, Jadwal Kuliah, Sistem Pembelajaran, Kurikulum, Download Panduan
5. **📝 PMB** — Alur Pendaftaran, Syarat, Jalur Seleksi, Form Modern, FAQ Accordion
6. **📰 Berita** — Blog Modern, Detail Artikel, Kategori, Search
7. **🖼️ Galeri** — Grid Gallery, Lightbox Preview, Filter Kategori, Video Support
8. **📞 Kontak** — Form Kontak, Maps, Sosial Media, Info Lengkap
9. **👨‍🎓 Dashboard Mahasiswa** — Profile, Jadwal, Nilai, Pengumuman, Mata Kuliah
10. **🔐 Login & Register** — Glassmorphism Style, Validasi Form, Multi-step Register

### Komponen Premium
- 🧭 **Mega Menu Navbar** — Dropdown multi-kolom dengan animasi
- 🍞 **Breadcrumb** — Navigasi hierarki halaman
- 🃏 **Animated Cards** — Hover effects dan scroll-triggered animations
- 📊 **Stats Counter** — Animasi angka berhitung saat scroll
- 🔍 **Search Overlay** — Pencarian fullscreen dengan suggestions
- 📋 **Tab System** — Akademik & PMB dengan konten dinamis
- 🎠 **Testimonial Slider** — Carousel dengan transisi smooth

## 🚀 Teknologi

| Teknologi | Versi | Kegunaan |
|-----------|-------|----------|
| Next.js | 14.2 | Framework React dengan App Router |
| React | 18.3 | UI Library |
| TypeScript | 5.4 | Type Safety |
| Tailwind CSS | 3.4 | Utility-first CSS |
| Framer Motion | 11.0 | Animations & Gestures |
| Lucide React | 0.378 | Icon Library |
| clsx + tailwind-merge | latest | Conditional classnames |

## 🎨 Sistem Warna

```
Primary:   #0A6921 (Hijau UIN Malang)
Accent:    #C5A572 (Emas Elegan)
Gold:      #D4AF37 (Aksen Premium)
Dark:      #052e16 (Dark Mode)
Light:     #dcfce7 (Light Mode)
```

## 📁 Struktur Folder

```
uin-malang-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Home
│   │   ├── tentang/page.tsx    # About
│   │   ├── fakultas/           # Faculty list + detail
│   │   ├── akademik/page.tsx   # Academic
│   │   ├── pmb/page.tsx        # Admissions
│   │   ├── berita/             # News list + detail
│   │   ├── galeri/page.tsx     # Gallery
│   │   ├── kontak/page.tsx     # Contact
│   │   ├── dashboard/page.tsx  # Student Dashboard
│   │   ├── login/page.tsx      # Login
│   │   └── register/page.tsx   # Register
│   ├── components/
│   │   ├── layout/             # Navbar, Footer, Breadcrumb, Loading
│   │   ├── ui/                 # Reusable UI components
│   │   └── sections/home/      # Home page sections
│   ├── data/
│   │   └── dummyData.ts        # Realistic dummy data
│   ├── hooks/
│   │   ├── useDarkMode.ts      # Theme management
│   │   └── useScrollAnimation.ts # Intersection Observer
│   ├── lib/
│   │   └── utils.ts            # Helper functions
│   └── types/
│       └── index.ts            # TypeScript interfaces
├── public/
│   └── images/                 # Image assets
├── tailwind.config.js          # Custom colors & animations
└── next.config.js              # Export configuration
```

## 🛠️ Cara Menjalankan

### 1. Install Dependencies
```bash
cd uin-malang-website
npm install
```

### 2. Development Server
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000)

### 3. Build untuk Production
```bash
npm run build
```
Output akan ada di folder `dist/` (static export)

### 4. Deploy
```bash
# Contoh deploy ke Vercel
vercel --prod

# Atau deploy ke Netlify
netlify deploy --prod --dir=dist
```

## 🎯 SEO & Performance

- ✅ Meta tags lengkap (title, description, keywords, Open Graph)
- ✅ Semantic HTML structure
- ✅ Responsive images dengan aspect-ratio
- ✅ Lazy loading via Intersection Observer
- ✅ Smooth scrolling
- ✅ Clean URL structure
- ✅ Breadcrumb navigation untuk SEO

## 📱 Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| sm | 640px | Mobile landscape |
| md | 768px | Tablet |
| lg | 1024px | Desktop |
| xl | 1280px | Large desktop |

## 🔧 Konfigurasi

### Tailwind Config
Custom colors, fonts, animations, dan shadows untuk branding UIN Malang.

### Next.js Config
Static export untuk deployment ke hosting static (Netlify, Vercel, GitHub Pages).

## 📄 Lisensi

© 2026 UIN Maulana Malik Ibrahim Malang. All rights reserved.

---

**Dibuat dengan ❤️ untuk UIN Malang**
