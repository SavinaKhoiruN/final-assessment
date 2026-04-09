import test from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('should return correct result for positive numbers', () => {
  assert.strictEqual(sum(2, 3), 5);
});

test('should return correct result when one number is zero', () => {
  assert.strictEqual(sum(0, 5), 5);
});

test('should return 0 when both numbers are zero', () => {
  assert.strictEqual(sum(0, 0), 0);
});

test('should handle negative numbers correctly', () => {
  assert.strictEqual(sum(-2, -3), -5);
});

test('should handle positive and negative numbers', () => {
  assert.strictEqual(sum(-2, 3), 1);
});