# Teka-Teki Coding: Level Pemula

Temukan **error** (kesalahan) pada setiap potongan kode di bawah ini.
Tentukan apakah itu **Syntax Error**, **Logical Error**, atau **Runtime Error**.

---

## Soal 1

```javascript
let umur = 18;
if (umur = 18) {
  console.log("Sudah dewasa");
} else {
  console.log("Belum dewasa");
}
```

**Pertanyaan:** Apa yang salah? Apa output yang dihasilkan?

---

## Soal 2

```javascript
function sapa(nama) {
  console.log("Halo, " + nama);
}

sapa();
```

**Pertanyaan:** Apa yang terjadi saat dijalankan? Jenis error apa ini?

---

## Soal 3

```javascript
let total = 0;
for (let i = 1; i <= 5; i++) {
  total += i;
}
console.log("Total:", total); // seharusnya 15
```

Kode ini sebenarnya benar. Ubah satu operator agar menjadi **logical error** yang menghasilkan total 14.

---

## Soal 4

```javascript
let angka = "10";
console.log(angka + 5);
```

**Pertanyaan:** Mengapa hasilnya `"105"` bukan `15`? Konsep apa yang terlibat?

---

## Soal 5

```javascript
if (x > 5) {
  console.log("x besar");
}
```

**Pertanyaan:** Jenis error apa yang muncul? Mengapa?

---

Lihat jawaban di [jawaban.md](jawaban.md).