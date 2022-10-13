export default function karatsuba(x, y) {

  if (x < 10 && y < 10) {
    return x * y;
  }

  const n = Math.max(x.toString().length, y.toString().length);
  const m = n / 2 | 0;

  const a = Math.floor(x / Math.pow(10, m));
  const b = x %  Math.pow(10, m);

  const c = Math.floor(y / Math.pow(10, m));
  const d = y %  Math.pow(10, m);

  const ac = karatsuba(a, c);
  const bd = karatsuba(b, d);

  return Math.pow(10, m * 2) * ac + Math.pow(10, m) * (karatsuba(a + b, c + d) - ac - bd) + bd;
}
