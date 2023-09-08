function getAngkaTerbesarKedua(dataAngka) {
  const SortedNumbers = dataAngka.sort((a, b) => b - a);
  return SortedNumbers[1];
}
const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
console.log(getAngkaTerbesarKedua(dataAngka));
