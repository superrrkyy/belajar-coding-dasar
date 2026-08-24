
---

```javascript
// ============================================
// pemula.js - Belajar Coding Dasar dengan JavaScript
// ============================================

// --------------------------------------------
// 1. VARIABEL DAN TIPE DATA
// --------------------------------------------

// Deklarasi variabel menggunakan let (bisa diubah)
let nama = "Budi";
let umur = 20;
let tinggiBadan = 170.5;
let isPelajar = true;

// Menampilkan nilai variabel
console.log("Nama:", nama);
console.log("Umur:", umur);
console.log("Tinggi Badan:", tinggiBadan);
console.log("Apakah pelajar?", isPelajar);

// --------------------------------------------
// 2. OPERATOR
// --------------------------------------------

let angka1 = 10;
let angka2 = 3;

console.log("Penjumlahan:", angka1 + angka2);       // 13
console.log("Pengurangan:", angka1 - angka2);       // 7
console.log("Perkalian:", angka1 * angka2);         // 30
console.log("Pembagian:", angka1 / angka2);         // 3.3333
console.log("Sisa bagi (modulus):", angka1 % angka2); // 1
console.log("Pangkat:", angka1 ** angka2);           // 1000

// Operator perbandingan
console.log("Apakah angka1 lebih besar dari angka2?", angka1 > angka2); // true
console.log("Apakah angka1 sama dengan 10?", angka1 == 10); // true
console.log("Apakah angka1 sama dengan '10' (string)?", angka1 == "10"); // true (loose)
console.log("Apakah angka1 sama dengan '10' (strict)?", angka1 === "10"); // false (strict)

// --------------------------------------------
// 3. PERCABANGAN (IF-ELSE)
// --------------------------------------------

let nilaiUjian = 75;

if (nilaiUjian >= 85) {
  console.log("Nilai A");
} else if (nilaiUjian >= 75) {
  console.log("Nilai B");
} else if (nilaiUjian >= 60) {
  console.log("Nilai C");
} else {
  console.log("Nilai D");
}

// --------------------------------------------
// 4. PERULANGAN (LOOP)
// --------------------------------------------

console.log("Perulangan for:");
for (let i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}

console.log("Perulangan while:");
let counter = 1;
while (counter <= 3) {
  console.log("Counter:", counter);
  counter++;
}

// --------------------------------------------
// 5. FUNGSI
// --------------------------------------------

// Mendefinisikan fungsi
function sapa(nama) {
  return "Halo, " + nama + "! Selamat belajar coding.";
}

// Memanggil fungsi
let pesan = sapa("Andi");
console.log(pesan);

// Fungsi dengan parameter dan logika
function hitungLuasPersegi(panjang, lebar) {
  return panjang * lebar;
}

let luas = hitungLuasPersegi(5, 10);
console.log("Luas persegi panjang:", luas);

// --------------------------------------------
// 6. CONTOH SYNTAX ERROR (JANGAN DIJALANKAN)
// --------------------------------------------

/*
  Syntax error: kurang kurung tutup
  if (x > 5 {
    console.log("x besar");
  }
*/

// Syntax error: salah eja kata kunci
// funtion salah() {
//   console.log("Ini tidak akan berjalan");
// }

// Syntax error: tanda kutip tidak seimbang
// let nama = "Budi;

// --------------------------------------------
// 7. CONTOH LOGICAL ERROR
// --------------------------------------------

// Program ini seharusnya mengecek apakah umur cukup untuk membuat KTP (>=17)
let umurSeseorang = 17;

// Kode yang salah (logical error): menggunakan > bukan >=
if (umurSeseorang > 17) {
  console.log("Boleh membuat KTP");
} else {
  console.log("Belum boleh membuat KTP");
}
// Output: "Belum boleh membuat KTP" padahal seharusnya "Boleh membuat KTP"
// Ini adalah logical error karena program berjalan tetapi hasilnya salah.

// Kode yang benar:
if (umurSeseorang >= 17) {
  console.log("Boleh membuat KTP (versi benar)");
} else {
  console.log("Belum boleh membuat KTP (versi benar)");
}

// Contoh logical error lain: menggunakan operator && padahal seharusnya ||
let hari = "Minggu";
let cuaca = "Hujan";

if (hari === "Minggu" && cuaca === "Panas") {
  console.log("Pergi piknik");
} else {
  console.log("Tidak jadi piknik");
}
// Output: "Tidak jadi piknik" padahal seharusnya piknik jika hari Minggu ATAU cuaca panas
// Logika yang benar menggunakan || (OR)

if (hari === "Minggu" || cuaca === "Panas") {
  console.log("Pergi piknik (versi benar)");
} else {
  console.log("Tidak jadi piknik (versi benar)");
}

// --------------------------------------------
// 8. DEBUGGING SEDERHANA
// --------------------------------------------

// Gunakan console.log untuk memeriksa nilai variabel
let total = 0;
for (let i = 1; i <= 5; i++) {
  total += i;
  console.log("Iterasi", i, "-> total sementara:", total);
}
console.log("Total akhir:", total); // 15

// --------------------------------------------
// SELESAI
// --------------------------------------------
console.log("Program selesai dijalankan.");