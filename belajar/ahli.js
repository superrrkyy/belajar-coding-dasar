// ============================================
// ahli.js - Belajar Coding Tingkat Ahli (Lanjutan)
// ============================================
// Topik: Closure lanjut, Prototype, Class, Async Patterns,
//        Modul, Generator, Proxy/Reflect, Performance, Testing

// --------------------------------------------
// 1. CLOSURE LANJUTAN & CURRYING
// --------------------------------------------

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...next) => curried(...args, ...next);
  };
}

const tambah = (a, b, c) => a + b + c;
const tambahCurry = curry(tambah);
console.log("Curry:", tambahCurry(1)(2)(3));
console.log("Curry parsial:", tambahCurry(1, 2)(3));

// Memoization
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const fib = memoize(function fibonacci(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
});
console.log("Fib(40):", fib(40));

// --------------------------------------------
// 2. PROTOTYPE & CLASS
// --------------------------------------------

class Hewan {
  constructor(nama) {
    this.nama = nama;
  }
  bersuara() {
    return `${this.nama} bersuara...`;
  }
  static info() {
    return "Ini adalah kelas Hewan.";
  }
}

class Anjing extends Hewan {
  constructor(nama, ras) {
    super(nama);
    this.ras = ras;
  }
  bersuara() {
    return `${this.nama} (${this.ras}) menggonggong: Guk!`;
  }
}

const dog = new Anjing("Rex", "Husky");
console.log(dog.bersuara());
console.log(Hewan.info());

// Prototype chain manual
function Orang(nama) {
  this.nama = nama;
}
Orang.prototype.sapa = function () {
  return `Halo, saya ${this.nama}`;
};
const o = new Orang("Dewi");
console.log(o.sapa());
console.log("o instanceof Orang:", o instanceof Orang);

// --------------------------------------------
// 3. ASYNC PATTERNS LANJUTAN
// --------------------------------------------

async function fetchSimulasi(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url.includes("error")) reject(new Error("Gagal fetch"));
      else resolve({ status: 200, data: `Data dari ${url}` });
    }, 200);
  });
}

async function ambilSemua() {
  const urls = ["/api/a", "/api/b", "/api/c"];
  try {
    const hasil = await Promise.all(urls.map((u) => fetchSimulasi(u)));
    console.log("Semua hasil:", hasil.map((h) => h.data));
  } catch (e) {
    console.log("Error:", e.message);
  }
}

async function ambilRace() {
  const p1 = fetchSimulasi("/api/lambat");
  const p2 = fetchSimulasi("/api/cepat");
  const pemenang = await Promise.race([p1, p2]);
  console.log("Pemenang race:", pemenang.data);
}

ambilSemua().then(() => ambilRace());

// Async generator
async function* bacaHalaman() {
  for (let i = 1; i <= 3; i++) {
    await new Promise((r) => setTimeout(r, 100));
    yield `Halaman ${i}`;
  }
}

(async () => {
  for await (const hal of bacaHalaman()) {
    console.log("Async gen:", hal);
  }
})();

// --------------------------------------------
// 4. GENERATOR & ITERATOR
// --------------------------------------------

function* fibonacciGen(limit) {
  let a = 0;
  let b = 1;
  while (a <= limit) {
    yield a;
    [a, b] = [b, a + b];
  }
}

console.log("Fib gen:", [...fibonacciGen(50)]);

// Custom iterable
const rentang = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    let cur = this.from;
    const last = this.to;
    return {
      next() {
        if (cur <= last) return { value: cur++, done: false };
        return { value: undefined, done: true };
      },
    };
  },
};
console.log("Rentang:", [...rentang]);

// --------------------------------------------
// 5. PROXY & REFLECT
// --------------------------------------------

const target = { x: 10, y: 20 };
const proxy = new Proxy(target, {
  get(obj, prop) {
    if (prop === "sum") return obj.x + obj.y;
    return Reflect.get(obj, prop);
  },
  set(obj, prop, val) {
    if (typeof val !== "number") throw new TypeError("Harus angka");
    return Reflect.set(obj, prop, val);
  },
});

console.log("Proxy sum:", proxy.sum);
proxy.x = 100;
console.log("Proxy x:", proxy.x);
try {
  proxy.y = "abc";
} catch (e) {
  console.log("Proxy set error:", e.message);
}

// --------------------------------------------
// 6. MODUL PATTERN (IIFE)
// --------------------------------------------

const CounterModule = (function () {
  let count = 0;
  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    value() {
      return count;
    },
  };
})();

CounterModule.increment();
CounterModule.increment();
console.log("Counter:", CounterModule.value());
CounterModule.decrement();
console.log("Counter:", CounterModule.value());

// --------------------------------------------
// 7. PERFORMANCE & DEBOUNCE/THROTTLE
// --------------------------------------------

function debounce(fn, wait) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), wait);
  };
}

function throttle(fn, limit) {
  let inThrottle = false;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

const logDebounced = debounce((msg) => console.log("Debounced:", msg), 100);
logDebounced("a");
logDebounced("b");
logDebounced("c");

// --------------------------------------------
// 8. ERROR HANDLING LANJUTAN
// --------------------------------------------

class AppError extends Error {
  constructor(message, code) {
    super(message);
    this.name = "AppError";
    this.code = code;
  }
}

function proses(input) {
  if (typeof input !== "string") {
    throw new AppError("Input harus string", "INVALID_TYPE");
  }
  if (input.length === 0) {
    throw new AppError("Input tidak boleh kosong", "EMPTY_INPUT");
  }
  return input.toUpperCase();
}

for (const v of ["halo", "", 42]) {
  try {
    console.log("proses:", proses(v));
  } catch (e) {
    if (e instanceof AppError) {
      console.log(`AppError [${e.code}]: ${e.message}`);
    } else {
      console.log("Error lain:", e.message);
    }
  }
}

// --------------------------------------------
// 9. TESTING SEDERHANA (ASSERT)
// --------------------------------------------

function assertEqual(actual, expected, msg) {
  if (actual !== expected) {
    throw new Error(`${msg}: expected ${expected}, got ${actual}`);
  }
  console.log(`✔ ${msg}`);
}

function tambahDua(a, b) {
  return a + b;
}

assertEqual(tambahDua(2, 3), 5, "tambahDua(2,3)");
assertEqual(tambahDua(-1, 1), 0, "tambahDua(-1,1)");

// --------------------------------------------
// SELESAI
// --------------------------------------------
console.log("ahli.js selesai dijalankan.");