function fibonacci(n) {
  // base case
  if (n === 0) {
    return [0];
  }

  if (n === 1) {
    return [0, 1];
  }

  // recursive case
  const prev = fibonacci(n - 1); // ambil hasil sebelumnya
  const nextValue = prev[prev.length - 1] + prev[prev.length - 2]; // jumlah 2 angka terakhir

  return [...prev, nextValue]; // tambah ke array
}

// Jangan hapus kode di bawah ini!
export default fibonacci;