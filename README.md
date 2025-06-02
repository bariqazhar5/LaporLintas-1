# 🛣️ LaporLintas – Aplikasi Web Pelaporan Lalu Lintas Masyarakat

**LaporLintas** adalah aplikasi web berbasis React dan Leaflet yang memungkinkan masyarakat untuk melaporkan kondisi lalu lintas secara real-time, seperti kemacetan, kecelakaan, atau lampu lalu lintas yang tidak berfungsi.  
Laporan yang dikirim akan ditampilkan dalam bentuk peta interaktif untuk membantu petugas menindaklanjuti secara cepat dan efisien.

---

## 🔧 Teknologi yang Digunakan

| Komponen      | Teknologi                         |
|---------------|------------------------------------|
| Frontend      | ReactJS, Bootstrap 5, React Leaflet |
| Backend API   | PHP (XAMPP), REST API              |
| Database      | MySQL (phpMyAdmin/HeidiSQL)        |
| Map           | OpenStreetMap + Leaflet.js         |
| Icons         | FontAwesome                       |

---

## ✨ Fitur Utama

### 👥 Pengguna Umum
- Mengisi form pelaporan (nama, deskripsi, lokasi)
- Memilih titik koordinat di peta Leaflet
- Data laporan disimpan ke database MySQL

### 🧭 Live Location
- Halaman khusus untuk melihat semua laporan aktif
- Marker biru ditampilkan berdasarkan data database
- Nama pelapor muncul di atas marker dengan background putih semi transparan

### 🎨 Tampilan dan UX
- Navbar gradasi biru dengan ikon `fa-road`
- Routing antar halaman dengan `react-router-dom`
- Footer dengan branding institusi dan pembuat

---

## 📂 Struktur Folder

```bash
laporlintas/
├── public/
│   └── assets/
│       └── Ilustrasi.png
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   └── Hero.js
│   ├── pages/
│   │   └── LiveLocation.js
│   ├── App.js
│   └── index.js



---

## 🎥 Demo Visual

![Demo Aplikasi LaporLintas](https://github.com/RaAuthentic/LaporLintas/blob/main/demo.gif?raw=true)

