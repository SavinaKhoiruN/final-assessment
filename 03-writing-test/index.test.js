const test = require('node:test');       // import module untuk membuat test
const assert = require('node:assert');   // import module untuk pengecekan hasil
const sum = require('./index');          // import fungsi sum dari index.js

// Test 1: penjumlahan angka positif
test('should return correct result for positive numbers', () => {
  assert.strictEqual(sum(2, 3), 5);     // 2 + 3 harus sama dengan 5
});

// Test 2: salah satu angka nol
test('should return correct result when one number is zero', () => {
  assert.strictEqual(sum(0, 5), 5);     // 0 + 5 harus sama dengan 5
});

// Test 3: kedua angka nol
test('should return 0 when both numbers are zero', () => {
  assert.strictEqual(sum(0, 0), 0);     // 0 + 0 harus sama dengan 0
});

// Test 4: angka negatif
test('should handle negative numbers correctly', () => {
  assert.strictEqual(sum(-2, -3), -5);  // -2 + -3 harus sama dengan -5
});

// Test 5: kombinasi positif dan negatif
test('should handle positive and negative numbers', () => {
  assert.strictEqual(sum(-2, 3), 1);    // -2 + 3 harus sama dengan 1
});