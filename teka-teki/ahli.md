# Teka-Teki Coding: Level Ahli

Temukan error / perilaku tak terduga pada kode berikut.

---

## Soal 1

```javascript
const obj = {};
const proxy = new Proxy(obj, {
  get(target, prop) {
    return target[prop] * 2;
  },
});
console.log(proxy.x);
```

**Pertanyaan:** Apa outputnya? Mengapa?

---

## Soal 2

```javascript
async function* gen() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
}
for (const v of gen()) {
  console.log(v);
}
```

**Pertanyaan:** Mengapa tidak ada output? Perbaiki.

---

## Soal 3

```javascript
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = args.join(",");
    if (key in cache) return cache[key];
    return (cache[key] = fn(...args));
  };
}
const f = memoize((x) => ({ value: x }));
const a = f(1);
const b = f(1);
console.log(a === b);
```

**Pertanyaan:** Apa outputnya? Apakah memoization benar-benar mengembalikan referensi yang sama?

---

## Soal 4

```javascript
class A {
  #x = 10;
  get x() {
    return this.#x;
  }
}
const a = new A();
console.log(a.#x);
```

**Pertanyaan:** Error apa yang muncul? Mengapa?

---

## Soal 5

```javascript
const arr = [1, 2, 3];
const [a, ...rest] = arr;
rest.push(4);
console.log(arr);
```

**Pertanyaan:** Apakah `arr` berubah? Jelaskan.

---

Lihat jawaban di [jawaban.md](jawaban.md).