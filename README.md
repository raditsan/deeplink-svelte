# 🚀 SvelteKit Project – Tring!

Project ini menggunakan **SvelteKit + Vite**.  
Dokumen ini menjelaskan cara menjalankan (run) dan build project dengan berbagai environment (**development**, **UAT**, dan **production**).

---

## 📦 Persiapan

1. Clone repository ini:
   ```bash
   git clone <repo-url>
   cd <repo-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## ⚙️ Environment

Gunakan file `.env` sesuai environment:

- `.env.development`
- `.env.uat`
- `.env.production`

Contoh isi file:

```env
# .env.development
VITE_SCHEME=dash-dev://
VITE_API_URL=https://dev-api.example.com

# .env.uat
VITE_SCHEME=dash-uat://
VITE_API_URL=https://uat-api.example.com

# .env.production
VITE_SCHEME=dash://
VITE_API_URL=https://api.example.com
```

> Semua variabel yang akan dipakai di client **harus diawali** dengan `VITE_`.

---

## ▶️ Menjalankan Project

### Development
```bash
npm run dev
```
Menjalankan server dengan **.env.development**.  
Default URL: `http://localhost:5173`

### UAT
```bash
npm run dev:uat
```
Menjalankan server dengan **.env.uat**.  
Default URL: `http://localhost:5173`

### Production (mode prod di dev server)
```bash
npm run dev:prod
```
Menjalankan server dengan **.env.production**.  
Default URL: `http://localhost:5173`

---

## 🛠️ Build Project

### Build Development
```bash
npm run build:dev
```

### Build UAT
```bash
npm run build:uat
```

### Build Production
```bash
npm run build:prod
```

Hasil build akan tersedia di folder `build/`.

---

## 👀 Preview Hasil Build

Setelah build, jalankan:

```bash
npm run preview
```

Default URL: `http://localhost:4173`

---

## 📂 Struktur Project (ringkas)

```
src/
  routes/
    +layout.svelte
    +page.svelte
    +page.ts
static/
  favicon.ico
  illustration_flow_success.png
  illustration_flow_session_berakhir.png
.env.development
.env.uat
.env.production
```

---
