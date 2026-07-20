// Operator Aritmatika, Asssigment & Unary adalah Operators Khusus Number

// Operator Aritmatika
function operatorAritmatika() {
  /*
  // artimatika itu ada kasta nya:

  () = paling tinggi prioritasnya
  Eskponen / Pangkat (**)
  Kali (*), Bagi (/), Modulus (%)
  Penjumlahan (+), Pengurangan (-)
  */

  console.log("====Aritmatika====");

  // menggunakan kurung ()
  console.log((2 + 5) * 2); // 2 + 5 = 7 * 2, output: 14

  // menggunakan Eskponen
  console.log(5 + 2 ** 4); // 2 ** 4 = 16 + 5, output: 21

  // Kali, bagi, modulus
  console.log(((5 * 2) / 2) % 2.5); // 5 * 2 = 10 % 2 = 5 % 2.5, output: 0

  // modulus itu mengambil sisa bagi
  console.log(10 % 3); // output: 1

  // Gabungan
  console.log(2 + 3 * 4 ** 2); // 4 ** 2 = 16 * 3 = 48 + 2, output 50

  console.log("==================");
}

operatorAritmatika();

// Operator Assignment
function operatorAssignment() {
  /*
Plus sama dengan (+=)
Minus sama dengan (-=)
Kali sama dengan (*=)
Bagi sama dengan (/=)
Modulus sama dengan (%=)
Eskponen sama dengan (**=)
*/

  console.log("====Assignment====");

  let skor = 5;
  skor += 12;
  console.log(skor); // output 17

  let examValue = 98;
  console.log((examValue -= 12)); // output: 86

  let dolar = 128;
  dolar *= 4;
  console.log(dolar); // output: 512

  console.log("==================");
}

operatorAssignment();

// Operator Unary
function operatorUnary() {
  /*
  Increment (++) = menaikkan 1 angka
  Decrement (--) = menurunkan 1 angka
  Positif (+) = defaultnya udah positif misal let skor = 5; itu positif
  Negatif (-)
  typeof = mengecek tipe data
  */

  console.log("====Unary Operator====");

  // Increment (++)
  let nilaiSiswa = 96;
  nilaiSiswa++;
  console.log(nilaiSiswa); // output: 97

  // Decrement (--)
  let tkaValue = 87;
  tkaValue--;
  console.log(tkaValue); // output: 86

  // typeof
  const nameProduct = ["IPhone", "IPad"];
  console.log(typeof nameProduct); // output: object

  const examValue = "89.5";
  console.log(typeof examValue); // output: string

  console.log("==================");
}

operatorUnary();

// Operator Comparison & Logical Operator adalah Operators khusus Boolean

// Operator Comparison
function operatorComparison() {
  /*
  Lebih dari (>)
  Kurang dari (<)
  Lebih dari atau sama dengan (>=)
  Kurang dari atau sama dengan (<=)
  Sama dengan, membandingkan nilainya saja (==)
  Sama dengan, membandingkan nilai & tipe data (===)
  Tidak sama dengan, membandingkan nilainya saja  (!=)
  Tidak sama dengan, membandingkan nilai & tipe data (!==)
  */

  console.log("====Comparison Operator====");

  console.log(14 > 14); // false
  console.log(14 >= 14); // true
  console.log(5 == "5"); // true
  console.log("10" === 10); // false

  console.log("==================");
}

operatorComparison();

// Operator Logical
function operatorLogical() {
  /*
  && = AND 
  \\ = OR
  ! = NOT
  */

  console.log("====Logical Operator====");

  let nilaiUjian = 72;
  let nilaiUKK = 82;
  let nilaiTKA = 90;

  // menggunakan && / AND, semuanya harus true
  if (nilaiUjian > 75 && nilaiUKK > 80) {
    console.log("Kamu Lulus");
  } else {
    console.log("Kamu tidak lulus");
  }
  // output: Kamu tidak lulus

  // menggunakan && / AND, dengan 3 buah data, hasil akan false karena harus semua nya TRUE
  if (nilaiUjian > 75 && nilaiUKK > 80 && nilaiTKA > 80) {
    console.log("Kamu Lulus");
  } else {
    console.log("Kamu tidak lulus");
  }
  // output: Kamu tidak lulus

  // menggunakan || / OR, salah satu saja true
  if (nilaiUjian > 75 || nilaiUKK > 80) {
    console.log("Kamu Lulus");
  } else {
    console.log("Kamu tidak lulus");
  }
  // output: Kamu Lulus

  // menggunakan ! / NOT
  const isLogin = true;
  console.log(!isLogin); // output: false

  // contoh dalam if menggunakan ! /NOT
  if (!isLogin) {
    console.log("Login terlebih dahulu");
  } else {
    console.log("Selamat datang");
  }

  console.log("==================");
}

operatorLogical();

function operatorIn() {
  // In hanya mengecek apakah sebuah property / key ada atau tidak
  // walaupun nilai property null/undefined maka itu dianggap ada
  // ingat hanya mengecek key nya saja bukan valuenya

  console.log("====In Operator====");

  // jika versi object
  const productMacbook = {
    name: "Macbook Air M4",
    price: 18999000,
    color: undefined,
    stock: 25,
  };

  const checkStock = "stock" in productMacbook; // apakah key stock ada di productMacbook
  console.log(checkStock); // output: true

  const checkName = "nama" in productMacbook; // apakah key nama ada di productMacbook
  console.log(checkName); // output: false

  // jika versi array
  // selama index ada maka dia dianggap true entah undefined/null
  const nameProduct = [undefined, "IPad Pro", "IPhone"];

  const checkProduct = 0 in nameProduct;
  console.log(checkProduct); // output: true

  console.log("==================");
}

operatorIn();

// Ternary Operator
function operatorTernary() {
  // menghasilkan true jika nilai pertama diambil
  // menghasilkan false jika nilai kedua diambil

  console.log("====Ternary Operator====");

  // Cek Lulus/Remidi Ulangan
  const examValue = 80;
  const result =
    examValue >= 78 ? "Selamat kamu lulus ulangan" : "Maaf kamu remidi";

  console.log(result); // output: Selamat kamu lulus ulangan

  // Cek masuk Ekstra
  const ekstraCodeGlobaliti = "Jumat";
  const cekMasukEkstra =
    ekstraCodeGlobaliti === "Sabtu" ? "Ayo Ekstra" : "Maaf Ekstra tidak ada";

  console.log(cekMasukEkstra); // output: Maaf Ekstra tidak ada

  console.log("==================");
}

operatorTernary();

// Nullish Coalescing Operator
function operatorNullishCoalescing() {
  // Nulllist tipe data kosong yang value nya null & undefined
  // untuk mengecek data null / undefined lebih efektif dari if statement

  console.log("====Nullish Coalescing Operator====");

  // jika dia null / undefined maka akan keluar "Nilai Default"
  let parameter;
  let data = parameter ?? "Nilai Default";
  console.log(data); // output: Nilai Default

  // contoh kedua lagi untuk Nullish Coalescing
  let dataSiswa = undefined;
  let totalDataSiswa = dataSiswa ?? "Nilai Default";
  console.log(totalDataSiswa); // output: Nilai Default

  // contoh ketiga jika tidak null / undefined
  let namaSiswa = "Mahayana";
  let biodataSiswa = namaSiswa ?? "Nilai Default";
  console.log(biodataSiswa); // output: Mahayana

  // contoh project nyata
  // jika bio null/undefined maka output Bio belum di isi
  // jika bio bukan null/undefined maka akan output adalah valuenya
  const biodataInstagram = {
    username: "Mahayana",
    bio: null,
    profilePicture: null,
  };

  console.log(biodataInstagram.bio ?? "Bio belum di isi");
  console.log(biodataInstagram.profilePicture ?? "Profie Picture belum di isi");

  console.log("==================");
}

operatorNullishCoalescing();

// OptionalChaining
function operatorOptionalChaining() {
  // Optional Chaining (?.) digunakan untuk mengakses property atau method
  // dari object yang mungkin belum ada, tanpa membuat program error.

  // nulllist itu adalah tipe data kosong seperti null dan undefined

  // object?.property
  // object?.property?.childProperty
  // "Kalau object ini ada, ambil property-nya. Kalau tidak ada, berhenti dan hasilnya undefined."

  console.log("====Optional Chaining Operator====");

  // contoh pertama
  let person = {};
  console.log(person?.address?.country); // output: undefined

  // contoh kedua
  let biodataSiswa = {
    name: {
      fullName: undefined,
    },
    address: {
      country: "Indonesia",
    },
    school: {
      nameMajor: null,
    },
  };

  console.log(biodataSiswa?.name?.fullName); // output: undefined
  console.log(biodataSiswa?.address?.country); // output: Indonesia
  console.log(biodataSiswa?.school?.nameMajor); // output: null

  // contoh ketiga
  let productMacbook = {
    name: "Macbook Air M4",
    price: 16_500_000,
    stock: null,
  };

  console.log(productMacbook?.name); // output: Macbook Air M4
  console.log(productMacbook?.stock); // output: null

  // Optional Chaining di Array
  const productApple = ["IPhone", "Macbook", null, "AirPods"];
  console.log(productApple?.[0]); // output: IPhone
  console.log(productApple?.[2]); // output: null
  console.log(productApple?.[4]); // output: undefined
  console.log(productApple?.[7]); // output: undefined

  console.log("==================");
}
operatorOptionalChaining();
