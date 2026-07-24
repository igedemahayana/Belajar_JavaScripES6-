// 1. var vs let vs const (why var sekarang dihindari)
function variabel() {
  // let itu datanya bisa dirubah
  let examValue = 86;
  examValue = 92;

  console.log(examValue); // output: 92

  // error, const tidak bisa dirubah
  let isLoggin = false;
  isLoggin = true;
  console.log(isLoggin); // error
}

// 2. Hoisting JavaScript
function hoisting() {
  /*
  Hoisting adalah proses JavaScript mengecek dan mencatat semua deklarasi variabel dan function
  terlebih dahulu sebelum menjalankan baris kode satu per satu.
  */

  console.log(nameCollege);
  let nameCollege = "Harvard University";

  // tetapi JavaScript membayangkan seperti ini
  // let nameCollege;
  // console.log(nameCollege);
  // nameCollege = "Harvard University";
}

// 3. Temporal Dead Zone (TDZ)
function temporalDeadZone() {
  console.log(nameMajor);
  let nameMajor = "Computer Science";

  // area TDZ sudah berakhir disini
  // karena variabel sudah di inisialisasi dan diberi nilai
  console.log(nameMajor); // no error, karena TDZ sudah berakhir
}

// 4. Variabel Scopes
// contoh variabel global scope
let nameStudent = "Arum";

function variabelScope() {
  // yang diluar gabisa akses kedalam
  // yang didalam bisa akses keluar
  let nameHobbies1 = "Digital Art"; // contoh variabel Function scope
  let nameHobbies2 = "Public Speaking"; // contoh variabel Function scope

  console.log(nameStudent); // mengakses variabel Global Scope
  console.log(nameHobbies1); // mengakses variabel Function Scope

  if (
    nameStudent === "Arum" &&
    (nameHobbies1 === "Digital Art" || nameHobbies2 === "Public Speaking")
  ) {
    console.log(`Halo ${nameStudent}, apa kabar kamu?`);
  } else {
    console.log(`Maaf kami tidak mengenal anda`);
  }
}

variabelScope();
