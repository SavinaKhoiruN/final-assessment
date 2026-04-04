function factorial(n) {
  // base case
  if (n === 0 || n === 1) {
    return 1;
  }

  // recursive case
  return n * factorial(n - 1);
}

// Jangan hapus kode di bawah ini!
export default factorial;