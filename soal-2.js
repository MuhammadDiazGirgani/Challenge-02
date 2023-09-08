const checkTypeNumber = (givenNumber) => {
  // Validasi tipe data parameter
  if (typeof givenNumber !== "number") {
    throw new Error("Parameter givenNumber harus berupa angka");
  }

  // Menggunakan operator modulo untuk mengecek genap atau ganjil
  if (givenNumber % 2 === 0) {
    return "GENAP";
  } else {
    return "GANJIL";
  }
};

// Contoh penggunaan
try {
  const angka = 8;
  const result = checkTypeNumber(angka);
  console.log(`${angka} adalah angka ${result}`);
} catch (error) {
  console.error(error.message);
}
