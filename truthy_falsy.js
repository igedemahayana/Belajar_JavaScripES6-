// Truthy dan Falsy
function falsy() {
  /*
  Data dianggap Falsy jika:
  - false        → Boolean false
  - 0, -0        → Number 0 dan -0 dianggap false
  - 0n           → BigInt nol
  - "", '', ``   → Semua string kosong dianggap false
  - null         → null/Nilai kosong
  - undefined    → undefined/Nilai belum ada
  - NaN          → Not a Number dianggap false
  */

  console.log("======Falsy======");

  // contoh project stock produk
  const stockApple = 0;

  if (stockApple) {
    console.log("Stock Masih ada");
  } else {
    console.log("Stock sudah habis");
  }
  // output: Stock sudah habis

  // contoh project user belum login
  const user = null;

  if (!user) {
    console.log("Silahkan login");
  }
  // output: Silahkan login

  // project isi username instagram
  const yourUsername = "";

  if (yourUsername) {
    console.log("Username sudah terisi");
  } else {
    console.log("Username belum terisi");
  }
  //  output: Username belum terisi

  console.log("==================");
}

falsy();

// Truthy adalah kebalikan dari falsy
// dimana data dianggap bernilai true
function truthy() {
  /*
  Data dianggap Truthy jika:
  - true         
  - semua angka selain 0 dan -0, contoh: 1, -10, 3.14
  - semua string yang tidak kosong
  contoh: "Hello", " ", "0", "Mahayana"
  - [] array kosong maupun berisi data
  - {} object kosong maupun berisi data
  - function() {} 
  - Symbol()
  - BigInt selain 0n, contoh: 1n, 100n
  */

  console.log("======Truthy======");

  // contoh 1 user login
  const user = {
    username: "Mahayana",
    password: "admin123",
  };

  if (user) {
    console.log(`Selamat datang ${user.username}`);
  } else {
    console.log("Maaf anda tidak boleh masuk");
  }
  // output: Selamat datang user.username = Mahayana

  // contoh 2 keranjang belanja
  const cart = [];

  if (cart) {
    console.log("Keranjang berhasil dibuat");
  } else {
    console.log("Maaf keranjang belum ada");
  }
  // output: Keranjang berhasil dibuat

  // contoh 3
  const bioInstagram = " ";

  if (bioInstagram) {
    console.log("Bio Data sudah di isi");
  } else {
    console.log("Bio Data belum di isi");
  }
  // output: Bio Data sudah di isi

  console.log("==================");
}

truthy();

// operator logical di non boolean
// mengambil dari kiri ke kanan
function operatorLogicalNonBoolean() {
  // menggunakan || = OR
  // yang diambil yang true dari kiri ke kanan, jika dikiri dah ada truthy maka langsung
  // namun ada 2 kondisi truthy yang diprioritaskan adalah yang kiri
  // namun jika keduanya falsy yang diprioritaskan adalah yang kanan
  console.log("Mahayana" || ""); // output: Mahayana
  console.log([] || 0); // output: []
  console.log(undefined || {}); // output: {}
  console.log(null || "NULL"); // output: NULL

  // diprioritaskan yang kiri jika kedua truthy
  console.log("0" || "Nol"); // output: "0"
  console.log("Nol" || "0"); // output: "Nol"

  // jika keduanya falsy, yang diambil yang terakhir
  console.log(null || 0n); // output: 0n

  const nameStudent = {
    name: "Mahayana",
    username: "mahayana.demy4na",
    fullName: null,
    password: undefined,
  };

  console.log(nameStudent.name || nameStudent.username); // output: Mahayana
  console.log(nameStudent.fullName || nameStudent.username); // output: mahayana.demy4na
  // jika keduanya falsy, yang diambil yang terakhir
  console.log(nameStudent.fullName || nameStudent.password); // output: undefined

  // Operator && = AND di Non Boolean
  // membaca dari kiri ke kanan
  // operator ini akan mengambil nilai pertama yang falsy
  // jika tidak ada satupun yang falsy, maka yang terakhir diambil
  console.log("Mahayana" && null); // output: null
  console.log(undefined && 0); // output: undefined
  console.log(0 && undefined); // output: 0
  // jika keduanya/ketiganya truthy yang diambil yang terakhir
  console.log(-10 && " " && "Myanaa"); // output: Myanaa
}

operatorLogicalNonBoolean();
