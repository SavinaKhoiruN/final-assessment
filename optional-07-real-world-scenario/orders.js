// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders = []; // array untuk menyimpan semua pesanan


// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  // hitung total harga dari semua item
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  // buat object order baru
  const newOrder = {
    id: generateUniqueId(), // id unik
    customerName,
    items,
    totalPrice,
    status: 'Menunggu' // default status
  };

  // masukkan ke array orders
  orders.push(newOrder);
}


// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  // cari order berdasarkan id
  const order = orders.find(order => order.id === orderId);

  // kalau ketemu, update status
  if (order) {
    order.status = status;
  }
}


// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders
    .filter(order => order.status === 'Selesai') // ambil yg selesai
    .reduce((total, order) => total + order.totalPrice, 0); // jumlahkan
}


// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  orders = orders.filter(order => order.id !== id);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };