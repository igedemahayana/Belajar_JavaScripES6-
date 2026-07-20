// String
function typeDataString() {
  let nama = "Mahayana";
  let value = 95;
  console.log("Halo nama kamu adalah " + nama); // penggabungan string dulu
  console.log(`Halo nama kamu adalah ${nama}`); // template literal
  console.log(`Nama: ${nama}, Nilai: ${value > 90}`); // Expression di template literal

  // ini adalah Multiline String
  let multilineString = `
Hai Guys
I'm Mahayana 
`;
  console.log(multilineString);
}

/*
JavaScript mendukung Escape Sequence, karakter khusus yang
sering kita ketemui di Program
\n = ENTER  
\t = TAB
\' = '
\" = "
\\ = \  
*/
console.log("\\ Beranda \\ Menu \\ Features \\ Contact"); // ini adalah Escape Sequnce

function typeDataNumber() {
  // Hal yang perlu diketahui, masalah tanpa konversi
  let numberA = "5";
  let numberB = 5;
  let totalNumber = numberA + numberB;

  console.log(totalNumber); // output: 55

  /*
  Konversi Type Data dari string ke number:
  
  parseInt(string) = mengkonversi dari string ke number (bilangan bulat)
  parseFloat(string) = mengkonversi dari string ke number (bilangan desimal)
  Number(string) = mengkonversi dari string ke number (bilangab bulat & desimal)
  */

  let numberC = parseInt("5");
  let totalNumberNew = numberB + numberC;

  console.log(totalNumberNew); // output: 10

  // Contoh Konversi Lagi
  console.log(parseInt("9.5")); // output: 9
  console.log(parseFloat("9.5")); // output: 9.5
  console.log(parseFloat("10 Sempurna")); // output: 10

  /*
  Konversi Type Data dari Number ke string
  toString() = konversi dari number ke string     
  */

  let numberX = 9;
  let numberY = 1;
  let totalNumberX_Y = numberX.toString() + numberY.toString();
  console.log(totalNumberX_Y); // output: 91

  /* 
  Number(string) tidak toleran dengan kesalahan 
  maka outputnya adalah NaN (Not a Number)

  tapi jika parseInt() & parseFloat mentoleransi
  kesalahan yang ada
  */

  console.log(Number("10aa")); // output: NaN
  console.log(Number("a30d")); // output: NaN
  console.log(parseInt("a10aa")); // output: NaN, jika bukan angka didepan maka dia NaN, tapi kalau di belakang maka ditoleransi
  console.log(parseInt("10aa")); // output: 10, seperti ini dia ditoleransi, karena huruf dibelakang bukan didepan
  console.log(parseFloat("10aa")); // output: 10

  // apapun yang dihasilkan dengan NaN, maka hasilnya akan NaN
  const angkaFirst = Number("angka"); // NaN
  const angkaSecond = 4; // Number
  const totalAngka = angkaFirst + angkaSecond;
  console.log(totalAngka); // output: NaN

  /*
  Kemudian ada isNaN() function untuk mengecek apakah sebuah number itu NaN atau bukan, 
  hasilnya berupa boolean (true jika NaN, false jika bukan)
  */

  console.log(isNaN(angkaFirst)); // true
}

// Array
function typeDataArray() {
  /*
  .push() → ditambahkan ke index terakhir.
  .unshift() → ditambahkan ke index pertama.
  .pop() → menghapus index terakhir.
  .shift() → menghapus index pertama.
  array[index] = value → Mengubah data
  array[index] → Mengambil data
  .length → Mendapat panjang array
  .splice() → Hapus index tertentu  
  */
  const techCompany = ["Google", "Microsoft"];

  techCompany.push("Apple", "NVidia"); // menambah 2 data, di index terakhir, (Google, Microsoft, Apple, Nvidia)
  techCompany.splice(3); // menghapus data index 3, "NVidia",   (Google, Microsoft, Apple)
  techCompany[0] = "Windows"; // ubah array index 0 = "Google", menjadi "Windows", (Windows, Microsoft, Apple)

  console.table(techCompany);
  console.log(techCompany[0]); // memanggil array dari index, output: Windows
  console.log(techCompany.length); // jumlah array, output: 3

  // Multideminsional array = kita bisa memasukkan array didalam array
  techCompany.push(["Claude", "Gemini"]);
  console.table(techCompany);
}

typeDataArray();

// Type Data Object
function typeDataObject() {
  // Tonton 02:32:02 - Tipe Data Object
}

// Type Data Undefined
function typeDataUndefined() {
  // variabel yang belum ditambahkan data/nilai di variabel disebut Undefined
  let username;
  console.log(typeof username); // output: Undefined

  // Cek variabel username apakah Undefined
  if (username === undefined) {
    console.log("Username Undefined");
  } else {
    console.log("Username Defined");
  }
  // output: Username Undefined

  // Cek Undefined di Array
  const nameStudent = ["Mahayana", "Arum"];

  if (nameStudent[2] == undefined) {
    console.log("Maaf tidak ada nama tersebut");
  } else {
    console.log(`Halo ${nameStudent[2]}`);
  }
  // output: Maaf tidak ada nama tersebut
  // karena di array tidak ada data/nilai index ke 2

  // Cek Undefined di Object Product Macbook
  const productMacbook = {
    name: "Macbook Air M4",
    price: 18999000,
    color: undefined,
    stock: 25,
  };

  if (productMacbook.color === undefined) {
    console.log("Object Undefined");
  } else {
    console.log("Object Defined");
  }
  // output: Object Undefined

  // Cek Undefined di Object Product Macbook
  const productIPhone = {};

  if (productIPhone === undefined) {
    console.log("Object Undefined");
  } else {
    console.log("Object Defined");
  }
  // output: Object Defined
}

typeDataUndefined();

// Type Data Null
function typeDataNull() {
  // Null merupakan refrensi data kosong, berbeda dengan undefined
  // yang datanya/nilainya belum ditambahkan, sedangkan null memang kosong

  const username = null;
  const email = "myatech@gmail.com";
  const password = "myatech.id";

  if (username === null && email === null && password === "myatech.id") {
    console.log("Kamu boleh masuk");
  } else {
    console.log("Maaf data belum lengkap");
  }
  // output: Maaf data belum lengkap
}

typeDataNull();
