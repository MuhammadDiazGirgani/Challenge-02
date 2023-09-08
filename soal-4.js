function getTotalPenjualan(dataPenjualan) {
  // Validasi tipe data parameter//
  if (!Array.isArray(dataPenjualan)) {
    return "Parameter harus berupa array of object.";
  }

  let total = 0;
  for (let item of dataPenjualan) {
    if (typeof item === "object" && item.hasOwnProperty("totalTerjual") && typeof item.totalTerjual === "number") {
      total += item.totalTerjual;
    }
  }

  return total;
}

// Contoh data penjualan dalam bentuk array of object//
const dataPenjualan = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy B",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High - Original",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High - Original",
    hargaSatuan: 360000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy - [BNIB] Original",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

console.log("Total penjualan:", getTotalPenjualan(dataPenjualan));
