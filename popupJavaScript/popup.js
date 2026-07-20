/*
JavaScript memiliki fitur bawaan bernama alert, prompt , confirm
- alert → untuk memberi peringatan berupa popup text dibrowser
- prompt → meminta input string dari pengguna browser dalam bentuk popup input text
- confirm → meminta input boolean dari pengguna browser dalam bentuk popup input pilihan
*/

// prompt
function daftarSekolah() {
  const namaSiswa = prompt("Halo, tolong isi nama kamu ya:");
  const asalSekolah = prompt("Asal sekolah kamu:");
  const pilihJurusan = prompt("Pilihan Jurusan yang kamu sukai:");

  alert(`Halo ${namaSiswa}, kamu berhasil mendaftar Jurusan: ${pilihJurusan}`);
}

// confirm
function cekDepresi() {
  const cekDepresi = confirm("Apakah kamu merasa sedang depresi hari ini?");

  if (cekDepresi) {
    alert("Istirahat sekarang ya...jangan lupa minum air");
  } else {
    alert("Wah kamu masih sehat, tetap semangat hari ini ya!");
  }
}

// confirm + prompt + alert
function cekMasuk() {
  const cekMasuk = confirm("Apakah anda ingin masuk?");

  if (cekMasuk) {
    const username = prompt("Masukkan Username kamu:");
    prompt("Masukkan Email kamu:");
    prompt("Masukkan Password Kamu");

    alert(`Selamat datang kembali ${username}`);
  } else {
    alert("Bye bye");
  }
}

// di JavaScript Modern kita pakai Library SweetAlert
// Swal.fire({
//   title: "Apakah kamu merasa sedih hari ini?",
//   text: "Jangan lupa istirahat dan minum air ya.",
//   icon: "question", // error, warning, info, question, and succes
//   iconColor: "#fb2c36", // mengubah warna icon
//   showConfirmButton: false, // menampilkan/menyembunyikan tombol Confirm
//   showCancelButton: true, // menampilkan/menyembunyikan tombol Cancel
//   confirmButtonText: "Ya", // mengubah teks tombol Confirm
//   confirmButtonColor: "#5ea500", // mengubah warna button Confirm
//   cancelButtonText: "Tidak", // mengubah teks tombol Cancel
//   cancelButtonColor: "#fb2c36", // mengubah warna button Cancel
// }).then((result) => {
//   if (result.isConfirmed) {
//     Swal.fire("Istirahat dulu ya 😊");
//   } else {
//     Swal.fire("Semangat menjalani harimu! 🚀");
//   }
// });
