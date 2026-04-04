import test from 'node:test';        // untuk membuat test
import assert from 'node:assert';    // untuk pengecekan
import sum from './index.js';        // import fungsi sum

// ===============================
// TEST KASUS VALID
// ===============================

// penjumlahan normal
test('should return correct sum for positive numbers', () => {
  assert.strictEqual(sum(2, 3), 5);
});

// penjumlahan dengan nol
test('should return correct result when one value is zero', () => {
  assert.strictEqual(sum(0, 5), 5);
});

// kedua nol
test('should return 0 when both values are zero', () => {
  assert.strictEqual(sum(0, 0), 0);
});


// ===============================
// TEST BUKAN NUMBER
// ===============================

// salah satu string
test('should return 0 if one argument is not a number', () => {
  assert.strictEqual(sum('2', 3), 0);
});

// kedua bukan number
test('should return 0 if both arguments are not numbers', () => {
  assert.strictEqual(sum('a', 'b'), 0);
});

// salah satu undefined
test('should return 0 if argument is undefined', () => {
  assert.strictEqual(sum(undefined, 3), 0);
});


// ===============================
// TEST ANGKA NEGATIF
// ===============================

// salah satu negatif
test('should return 0 if one number is negative', () => {
  assert.strictEqual(sum(-1, 5), 0);
});

// kedua negatif
test('should return 0 if both numbers are negative', () => {
  assert.strictEqual(sum(-2, -3), 0);
});