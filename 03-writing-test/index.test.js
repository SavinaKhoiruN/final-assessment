const test = require('node:test');
const assert = require('node:assert');
const sum = require('./index.js');

// Test 1: penjumlahan angka positif
test('should return correct result for positive numbers', () => {
  assert.strictEqual(sum(2, 3), 5);
});

// Test 2: salah satu angka nol
test('should return correct result when one number is zero', () => {
  assert.strictEqual(sum(0, 5), 5);
});

// Test 3: kedua angka nol
test('should return 0 when both numbers are zero', () => {
  assert.strictEqual(sum(0, 0), 0);
});

// Test 4: angka negatif
test('should handle negative numbers correctly', () => {
  assert.strictEqual(sum(-2, -3), -5);
});

// Test 5: kombinasi positif dan negatif
test('should handle positive and negative numbers', () => {
  assert.strictEqual(sum(-2, 3), 1);
});