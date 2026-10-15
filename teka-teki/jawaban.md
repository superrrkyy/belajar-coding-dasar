# Jawaban Teka-Teki Coding

## Level Pemula

### Soal 1
- **Jenis:** Logical Error
- **Masalah:** Menggunakan `=` (assignment) bukan `==`/`===` pada kondisi `if`. Assignment mengembalikan nilai 18 (truthy), sehingga selalu masuk cabang "Sudah dewasa".
- **Perbaikan:** `if (umur === 18)`

### Soal 2
- **Jenis:** Runtime Error (TypeError)
- **Masalah:** Parameter `nama` bernilai `undefined`, sehingga concatenation menghasilkan `"Halo, undefined"`. Tidak error fatal, tapi hasil tidak diinginkan. Untuk mencegah, beri nilai default: `function sapa(nama = "Teman")`.

### Soal 3
- Ubah `i++` menjadi `i += 2` atau ubah `total += i` menjadi `total += i - 1`? Contoh logical error: `for (let i = 1; i < 5; i++)` menghasilkan 10. Atau `total += i - 1` menghasilkan 10. (Jawaban fleksibel; inti: perubahan kecil pada batas/operator mengubah hasil tanpa error.)

### Soal 4
- **Konsep:** Type coercion. `"10"` adalah string, operator `+` melakukan konkatenasi string, bukan penjumlahan angka.
- **Perbaikan:** Konversi ke number: `Number(angka) + 5` atau `parseInt(angka) + 5`.

### Soal 5
- **Jenis:** ReferenceError (Runtime)
- **Masalah:** Variabel `x` belum dideklarasikan.
- **Perbaikan:** Deklarasikan `x` terlebih dahulu, mis. `let x = 10;`.

---

## Level Pelajar

### Soal 1
- Mengganti `>` menjadi `>=` membuat nilai 6 (hasil 3*2) ikut tersaring, sehingga hasil menjadi `[6, 8, 10]`? Wait asli filter >5: [6,8,10]. Dengan >=5 juga [6,8,10] (6>=5). Contoh lain: ganti `* 2` menjadi `* 1` mengubah hasil. Inti: perubahan operator kecil mengubah output tanpa error (logical error).

### Soal 2
- **Jenis:** TypeError (Runtime) — `Cannot read properties of undefined (reading 'kota')`.
- **Pencegahan:** Optional chaining: `siswa.alamat?.kota` atau pengecekan eksistensi.

### Soal 3
- Potensi masalah: tidak ada penanganan error jaringan/HTTP. Tambahkan `try/catch` dan cek `res.ok`.

### Soal 4
- `reduce` tanpa initial value pada array kosong melempar TypeError. Beri initial value 0: `args.reduce((a, b) => a + b, 0)`.

### Soal 5
- `Set` tidak memiliki properti `length`. Gunakan `set.size`.

---

## Level Ahli

### Soal 1
- Output: `NaN`. Karena `target.x` adalah `undefined`, `undefined * 2` = `NaN`.

### Soal 2
- Async generator tidak bisa diiterasi dengan `for...of` biasa; gunakan `for await...of`.

### Soal 3
- Output: `true`. Karena cache menyimpan hasil `fn(...args)` yang sama referensinya, sehingga `a === b` true. Memoization mengembalikan referensi yang sama (benar untuk objek). Namun hati-hati: jika fn mengembalikan objek yang dimutasi, cache akan ikut berubah.

### Soal 4
- **Error:** SyntaxError — Private field `#x` tidak dapat diakses dari luar kelas. Akses hanya via getter: `a.x`.

### Soal 5
- `arr` tidak berubah. Rest parameter membuat array baru (salinan), `push` pada `rest` tidak memengaruhi `arr`.