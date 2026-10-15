# 🚀 Belajar Coding Dasar — Panduan Lengkap & Interaktif

![Belajar Coding Dasar](https://img.shields.io/badge/Belajar-Coding%20Dasar-blue?style=for-the-badge)
![Level](https://img.shields.io/badge/Level-Pemula%20%E2%86%92%20Ahli-success?style=for-the-badge)
![Bahasa](https://img.shields.io/badge/Bahasa-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Lisensi](https://img.shields.io/badge/Lisensi-MIT-lightgrey?style=for-the-badge)

> **Repository ini dirancang agar mudah dipahami oleh siapa pun** — mulai dari yang belum pernah menyentuh kode, pelajar, hingga programmer berpengalaman. Lengkap dengan contoh, animasi, dan teka-teki (puzzle) untuk melatih ketajaman mata dalam menemukan error.

---

## 🎬 Animasi: Dunia Coding

### ✨ Coding & Pemrograman

![Animasi Coding](https://media.tenor.com/cKgOapMuyWcAAAAM/coding-developer-code.gif)

### 🧩 Bahasa Pemrograman

![Animasi Bahasa Pemrograman](https://media.tenor.com/Cw1xiqIp5akAAAAM/bom-dia-java.gif)

### 🔧 Memperbaiki Project yang Gagal

![Memperbaiki Project Gagal](https://media.tenor.com/OAt09eQzFVEAAAAd/code-fixing-bugs.gif)

### 🎉 Berhasil Memperbaiki Project

![Berhasil Memperbaiki](https://media1.tenor.com/m/IDb3smjimb8AAAAd/after-fixing-all-the-bugs-is-your-code-working.gif)

---

## 📚 Daftar Isi

- [💡 Apa itu Coding?](#-apa-itu-coding)
- [🎯 Mengapa Belajar Coding?](#-mengapa-belajar-coding)
- [⚙️ Bagaimana Program Komputer Bekerja?](#️-bagaimana-program-komputer-bekerja)
- [🧩 Bahasa Pemrograman](#-bahasa-pemrograman)
- [🧱 Konsep Dasar dalam Coding](#-konsep-dasar-dalam-coding)
- [❌ Jenis-Jenis Kesalahan dalam Pemrograman](#-jenis-jenis-kesalahan-dalam-pemrograman)
- [🔍 Perbedaan Syntax Error dan Logical Error](#-perbedaan-syntax-error-dan-logical-error)
- [🛠️ Tips Menghindari dan Memperbaiki Kesalahan](#️-tips-menghindari-dan-memperbaiki-kesalahan)
- [📁 Materi Belajar Berdasarkan Level](#-materi-belajar-berdasarkan-level)
- [🧩 Teka-Teki (Puzzle) Menemukan Error](#-teka-teki-puzzle-menemukan-error)
- [🚀 Cara Menjalankan Kode JavaScript](#-cara-menjalankan-kode-javascript)
- [🧠 Kesimpulan](#-kesimpulan)
- [📄 Lisensi](#-lisensi)

---

## 💡 Apa itu Coding?

**Coding** (atau pemrograman) adalah proses menulis instruksi-instruksi yang dapat dimengerti oleh komputer untuk menjalankan suatu tugas. Instruksi-instruksi tersebut ditulis menggunakan **bahasa pemrograman** (seperti JavaScript, Python, C++, dll.) sehingga komputer dapat memproses dan menghasilkan output yang diinginkan.

Secara sederhana, coding adalah cara kita "berbicara" dengan komputer. Sama seperti manusia menggunakan bahasa untuk berkomunikasi, kita menggunakan bahasa pemrograman untuk berkomunikasi dengan mesin.

---

## 🎯 Mengapa Belajar Coding?

- **Melatih logika berpikir**: Coding mengajarkan cara memecah masalah menjadi langkah-langkah kecil.
- **Meningkatkan kreativitas**: Kamu bisa membuat aplikasi, game, website, dan alat bantu sendiri.
- **Peluang karier**: Permintaan tenaga kerja di bidang teknologi sangat tinggi.
- **Memahami teknologi di sekitar kita**: Hampir semua perangkat modern menggunakan program.

---

## ⚙️ Bagaimana Program Komputer Bekerja?

1. **Kode Sumber (Source Code)**: Kita menulis instruksi dalam bahasa pemrograman.
2. **Penerjemah (Compiler/Interpreter)**: Komputer tidak mengerti bahasa manusia, sehingga kode perlu diterjemahkan ke bahasa mesin (biner) oleh compiler atau interpreter.
3. **Eksekusi**: Setelah diterjemahkan, komputer menjalankan instruksi tersebut dan menghasilkan output.

---

## 🧩 Bahasa Pemrograman

Ada banyak bahasa pemrograman, masing-masing memiliki kelebihan dan kegunaan. Contoh populer:

| Bahasa | Kegunaan Utama |
|--------|----------------|
| JavaScript | Pengembangan web (frontend & backend), aplikasi mobile |
| Python | Data science, AI, scripting, web |
| Java | Aplikasi enterprise, Android |
| C/C++ | Sistem operasi, game, aplikasi berkinerja tinggi |
| PHP | Web backend |
| Ruby | Web development |

Dalam repository ini kita menggunakan **JavaScript** karena mudah dipelajari dan dapat dijalankan langsung di browser tanpa perlu instalasi khusus.

---

## 🧱 Konsep Dasar dalam Coding

Sebelum membahas kesalahan, pahami dulu beberapa konsep penting:

- **Variabel**: Tempat menyimpan data. Contoh: `let nama = "Budi";`
- **Tipe Data**: Jenis data yang disimpan, misal angka (`number`), teks (`string`), boolean (`true/false`), array, objek.
- **Operator**: Simbol untuk operasi, seperti `+`, `-`, `==`, `&&`.
- **Kondisional**: Percabangan logika, misal `if`, `else`.
- **Perulangan (Loop)**: Menjalankan kode berulang, misal `for`, `while`.
- **Fungsi**: Blok kode yang dapat dipanggil kembali.
- **Komentar**: Teks yang diabaikan komputer, untuk dokumentasi.

---

## ❌ Jenis-Jenis Kesalahan dalam Pemrograman

Dalam coding, kita pasti akan menemui kesalahan (error). Secara umum ada tiga jenis:

### 1. Syntax Error

**Syntax Error** adalah kesalahan yang terjadi karena kode yang ditulis **tidak sesuai aturan bahasa** (sintaks). Aturan ini seperti tata bahasa dalam bahasa manusia; jika salah, komputer tidak dapat memahami instruksi.

Contoh syntax error di JavaScript:

```javascript
// Syntax error: kurung tutup tidak ada
if (x > 5 {
  console.log("x besar");
}
```

Ciri-ciri syntax error:

- Program tidak dapat dijalankan sama sekali.
- Biasanya muncul pesan error saat compile/interpretasi.
- Mudah dideteksi oleh editor atau browser.
- Paling sering dilakukan pemula: lupa titik koma (tergantung bahasa), lupa kurung, salah eja kata kunci (funtion bukan function), dll.

### 2. Logical Error

**Logical Error** (kesalahan logika) adalah kesalahan di mana program berjalan tanpa pesan error, tetapi hasilnya tidak sesuai yang diharapkan. Ini terjadi karena alur berpikir atau rumus yang salah, bukan karena sintaks yang salah.

Contoh logical error:

```javascript
// Logika salah: seharusnya menggunakan >= bukan >
let umur = 18;
if (umur > 18) {
  console.log("Boleh membuat KTP");
} else {
  console.log("Belum boleh membuat KTP");
}
// Output: "Belum boleh membuat KTP" padahal seharusnya sudah boleh
```

Ciri-ciri logical error:

- Program berjalan normal tanpa pesan error.
- Output tidak sesuai harapan.
- Sulit dideteksi karena tidak ada peringatan dari komputer.
- Membutuhkan pengujian dan pemahaman logika untuk menemukannya.

### 3. Runtime Error

**Runtime Error** terjadi saat program sedang berjalan (runtime), misalnya mencoba mengakses variabel yang tidak ada, membagi dengan nol, atau memanggil fungsi yang tidak didefinisikan. Ini berbeda dengan syntax error yang muncul sebelum program dijalankan.

Contoh runtime error:

```javascript
let angka = 10;
console.log(angka.toUpperCase()); // TypeError: angka.toUpperCase is not a function
```

---

## 🔍 Perbedaan Syntax Error dan Logical Error

| Aspek | Syntax Error | Logical Error |
|-------|--------------|---------------|
| Penyebab | Aturan penulisan tidak dipatuhi | Kesalahan dalam alur berpikir/rumus |
| Pesan error | Muncul pesan error jelas | Tidak ada pesan error |
| Program dijalankan? | Tidak bisa dijalankan | Bisa dijalankan |
| Output | Tidak menghasilkan output | Menghasilkan output yang salah |
| Cara menemukan | Mudah, editor akan menandai | Sulit, perlu debugging dan pengujian |
| Contoh | `if (x = 5)` (seharusnya `==`) | Menggunakan operator logika yang salah (misal `&&` padahal `\|\|`) |
| Dampak | Program langsung berhenti | Program tetap berjalan tetapi hasil tidak benar |

---

## 🛠️ Tips Menghindari dan Memperbaiki Kesalahan

1. **Baca pesan error dengan teliti** – Pesan error biasanya menunjukkan letak dan jenis kesalahan.
2. **Gunakan editor dengan syntax highlighting** – Banyak editor (VS Code, Sublime, dll.) akan menandai syntax error.
3. **Pahami alur program** – Sebelum menulis kode, buatlah pseudocode atau diagram alur.
4. **Gunakan console.log()** – Cetak nilai variabel di berbagai titik untuk melacak logical error.
5. **Mulai dari yang sederhana** – Pecah masalah besar menjadi bagian-bagian kecil.
6. **Jangan takut salah** – Kesalahan adalah bagian dari proses belajar.

---

## 📁 Materi Belajar Berdasarkan Level

Pilih level yang sesuai dengan kemampuanmu:

| Level | File | Topik Utama |
|-------|------|-------------|
| 🌱 Pemula | [pemula.js](pemula.js) | Variabel, operator, kondisional, loop, fungsi, contoh error |
| 📗 Pelajar | [belajar/pelajar.js](belajar/pelajar.js) | Array methods, object, destructuring, spread/rest, HOF, Map/Set, regex, async |
| 🏆 Ahli | [belajar/ahli.js](belajar/ahli.js) | Closure, class, async patterns, generator, proxy, module pattern, testing |

---

## 🧩 Teka-Teki (Puzzle) Menemukan Error

Latih ketajaman mata dengan menemukan error pada potongan kode:

- [Teka-Teki Pemula](teka-teki/pemula.md)
- [Teka-Teki Pelajar](teka-teki/pelajar.md)
- [Teka-Teki Ahli](teka-teki/ahli.md)
- [Jawaban](teka-teki/jawaban.md)

---

## 🚀 Cara Menjalankan Kode JavaScript

Ada beberapa cara:

1. **Di Browser**
   - Buka DevTools (tekan F12), pilih tab Console.
   - Tempel kode JavaScript, tekan Enter.
2. **Menggunakan Node.js**
   - Instal Node.js dari nodejs.org.
   - Simpan file, lalu jalankan di terminal: `node pemula.js` atau `node belajar/pelajar.js`.
3. **Editor Online**
   - Gunakan platform seperti CodePen, JSFiddle, atau Replit.

---

## 🧠 Kesimpulan

- Coding adalah keterampilan menulis instruksi untuk komputer.
- Syntax error terjadi karena kesalahan penulisan kode, mudah dideteksi.
- Logical error terjadi karena kesalahan logika, program berjalan tapi hasil salah.
- Belajar coding membutuhkan latihan terus-menerus dan pemahaman konsep dasar.

Jangan takut untuk mencoba dan membuat kesalahan. Setiap programmer handal pun pernah mengalami error.

---

## 📄 Lisensi

Repository ini bebas digunakan untuk pembelajaran. Silakan modifikasi dan bagikan. Lihat [LICENSE](LICENSE).