function kalkulator() {
  var side = parseFloat(document.getElementById('side').value);
  // Mengambil nilai sisi dari elemen dengan ID "side" dan mengkonversi menjadi angka menggunakan parseFloat().
  // Nilai sisi disimpan dalam variabel "side".

  var area = side * side;
  // Menghitung luas persegi dengan mengalikan nilai sisi dengan dirinya sendiri.
  // Hasilnya disimpan dalam variabel "area".

  var perimeter = 4 * side;
  // Menghitung keliling persegi dengan mengalikan nilai sisi dengan 4.
  // Hasilnya disimpan dalam variabel "perimeter".

  document.getElementById('area').textContent = area;
  // Memperbarui teks di dalam elemen dengan ID "area" dengan nilai luas yang dihitung.

  document.getElementById('perimeter').textContent = perimeter;
  // Memperbarui teks di dalam elemen dengan ID "perimeter" dengan nilai keliling yang dihitung.
}
