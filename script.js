// ===== Tombol Ubah Teks =====
// Teks deskripsi bergantian antara dua kalimat setiap tombol diklik
const deskripsi = document.querySelector("#deskripsi");
const tombolTeks = document.querySelector("#tombol-teks");

const teksAwal = "Halo, saya Annisa, mahasiswa semester 1 Sistem Informasi. Saya suka berorganisasi dan sedang belajar membuat website.";
const teksBaru = "Saya Annisa dari Universitas Dian Nuswantoro. Saya ingin terus belajar teknologi dan berkontribusi lewat organisasi kampus.";

tombolTeks.addEventListener("click", function () {
  if (deskripsi.textContent === teksAwal) {
    deskripsi.textContent = teksBaru;
  } else {
    deskripsi.textContent = teksAwal;
  }
});

// ===== Tombol Ganti Tema =====
// classList.toggle menambah/menghapus class "gelap" pada <body>
const tombolTema = document.querySelector("#tombol-tema");

tombolTema.addEventListener("click", function () {
  document.body.classList.toggle("gelap");
});