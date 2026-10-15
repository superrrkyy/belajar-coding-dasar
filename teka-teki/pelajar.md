# Teka-Teki Coding: Level Pelajar (Menengah)

Temukan error pada setiap potongan kode. Jelaskan jenis error dan cara memperbaikinya.

---

## Soal 1

```javascript
const angka = [1, 2, 3, 4, 5];
const hasil = angka.map((n) => n * 2).filter((n) => n > 5);
console.log(hasil); // perkiraan: [6, 8, 10]
```

Kode ini benar. Ubah menjadi **logical error** dengan mengganti `>` menjadi `>=` tanpa sadar? Jelaskan dampaknya.

---

## Soal 2

```javascript
const siswa = { nama: "Budi", nilai: 80 };
console.log(siswa.alamat.kota);
```

**Pertanyaan:** Error apa yang muncul? Bagaimana cara mencegahnya?

---

## Soal 3

```javascript
async function ambil() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  console.log(data);
}
ambil();
```

**Pertanyaan:** Apa potensi masalah? Tambahkan penanganan error yang tepat.

---

## Soal 4

```javascript
function jumlahkan(...args) {
  return args.reduce((a, b) => a + b);
}
console.log(jumlahkan()); // seharusnya 0
```

**Pertanyaan:** Apa yang terjadi? Perbaiki.

---

## Soal 5

```javascript
const set = new Set([1, 2, 2, 3]);
console.log(set.length);
```

**Pertanyaan:** Mengapa `undefined`? Properti apa yang benar?

---

Lihat jawaban di [jawaban.md](jawaban.md).