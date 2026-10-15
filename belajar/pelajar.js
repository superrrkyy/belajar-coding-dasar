// ============================================
// pelajar.js - Belajar Coding Tingkat Pelajar (Menengah)
// ============================================
// Topik: Array methods, Object, Destructuring, Spread/Rest,
//        Higher-Order Functions, Map/Set, Regex, Error Handling

// --------------------------------------------
// 1. ARRAY METHODS LANJUTAN
// --------------------------------------------

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const kuadrat = angka.map((n) => n * n);
console.log("Kuadrat:", kuadrat);

const genap = angka.filter((n) => n % 2 === 0);
console.log("Genap:", genap);

const total = angka.reduce((acc, n) => acc + n, 0);
console.log("Total:", total);

const pertamaLebihDari5 = angka.find((n) => n > 5);
console.log("Pertama > 5:", pertamaLebihDari5);

console.log("Ada yang > 9?", angka.some((n) => n > 9));
console.log("Semua > 0?", angka.every((n) => n > 0));

const acak = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Urut naik:", [...acak].sort((a, b) => a - b));
console.log("Urut turun:", [...acak].sort((a, b) => b - a));

// --------------------------------------------
// 2. OBJECT & DESTRUCTURING
// --------------------------------------------

const siswa = {
  nama: "Siti",
  umur: 16,
  kelas: "XII IPA 1",
  nilai: { matematika: 90, fisika: 85, kimia: 88 },
};

const { nama, umur, kelas } = siswa;
console.log(nama, umur, kelas);

const { nilai: { matematika, fisika } } = siswa;
console.log("Matematika:", matematika, "Fisika:", fisika);

const warna = ["merah", "hijau", "biru"];
const [pertama, kedua] = warna;
console.log(pertama, kedua);

// --------------------------------------------
// 3. SPREAD & REST
// --------------------------------------------

const a = [1, 2, 3];
const b = [4, 5, 6];
const gabung = [...a, ...b];
console.log("Gabung:", gabung);

const profil = { nama: "Andi", umur: 17 };
const profilLengkap = { ...profil, kota: "Jakarta", hobi: "Coding" };
console.log("Profil lengkap:", profilLengkap);

function jumlahkan(...angka) {
  return angka.reduce((acc, n) => acc + n, 0);
}
console.log("Jumlahkan:", jumlahkan(1, 2, 3, 4, 5));

// --------------------------------------------
// 4. HIGHER-ORDER FUNCTIONS
// --------------------------------------------

function ulangi(n, aksi) {
  for (let i = 0; i < n; i++) {
    aksi(i);
  }
}
ulangi(3, (i) => console.log("Iterasi HOF:", i));

function pembuatPengali(faktor) {
  return function (angka) {
    return angka * faktor;
  };
}
const kali2 = pembuatPengali(2);
const kali10 = pembuatPengali(10);
console.log("kali2(5):", kali2(5));
console.log("kali10(5):", kali10(5));

// --------------------------------------------
// 5. MAP & SET
// --------------------------------------------

const peta = new Map();
peta.set("nama", "Budi");
peta.set(42, "jawaban");
console.log("Map get:", peta.get("nama"), peta.get(42));
console.log("Ukuran Map:", peta.size);

const himpunan = new Set([1, 2, 2, 3, 3, 3]);
console.log("Set:", [...himpunan]);
himpunan.add(4);
console.log("Set setelah add:", [...himpunan]);

// --------------------------------------------
// 6. REGULAR EXPRESSION (REGEX)
// --------------------------------------------

const teks = "Email saya: budi@example.com dan andi@test.org";
const polaEmail = /\b[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}\b/g;
console.log("Email ditemukan:", teks.match(polaEmail));

function validHP(nomor) {
  return /^08\d{8,11}$/.test(nomor);
}
console.log("08123456789 valid?", validHP("08123456789"));
console.log("12345 valid?", validHP("12345"));

// --------------------------------------------
// 7. ERROR HANDLING (TRY/CATCH)
// --------------------------------------------

function bagi(a, b) {
  if (b === 0) {
    throw new Error("Tidak bisa membagi dengan nol!");
  }
  return a / b;
}

try {
  console.log("10 / 2 =", bagi(10, 2));
  console.log("10 / 0 =", bagi(10, 0));
} catch (err) {
  console.log("Terjadi error:", err.message);
} finally {
  console.log("Blok finally selalu dijalankan.");
}

// --------------------------------------------
// 8. PROMISE & ASYNC/AWAIT (PENGENALAN)
// --------------------------------------------

function ambilData(delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data berhasil diambil!"), delay);
  });
}

async function main() {
  console.log("Menunggu data...");
  const hasil = await ambilData(500);
  console.log(hasil);
}

main();

// --------------------------------------------
// SELESAI
// --------------------------------------------
console.log("pelajar.js selesai dijalankan.");