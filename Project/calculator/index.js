const display = document.getElementById("display");

function tampilkan(angka) {
  display.value += angka;
}
function bersihkan() {
  display.value = "";
}
function hapus() {
  display.value = display.value.slice(0, -1);
}
function jumlah() {
  display.value = eval(display.value);
}
