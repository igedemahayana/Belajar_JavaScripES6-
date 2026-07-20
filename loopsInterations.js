// 1. for loop (+ break & continue)
function forLoop() {
  // for (init statement; kondisi; post statement) {
  // # blok perulangan disini

  // looping akan terjadi jika true, jika false maka looping akan berhenti
  // init statement, kondisi,dan post statement tidak wajib di isi
  // jika kondisi di isi maka kondisi selalu bernilai true

  console.log("====For Loop====");

  // infinite loop
  // for (;;) {
  //   console.log("Hello");
  // }

  // perulangan dengan kondisi saja
  let counter = 0; // lebih recomend variabel ini masuk ke init statement
  for (; counter >= 3; ) {
    console.log(`Counter ${counter}`);
    counter++; // ini juga decrement/increment lebih baik masuk ke post statement
  }

  // contoh loop lengkap init statement, kondisi, post statement
  for (i = 0; i <= 3; i++) {
    console.log(`Loop ke ${i}`);
  }

  // contoh 1 project nyata loop product apple
  const productApple = ["IPhone", "MacBook", "AirPods"];

  for (let i = 0; i < productApple.length; i++) {
    console.log(productApple[i]);
  }
  // output: IPhone, MacBook, AirPods

  // contoh 2 project nyata loop
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

  // buat dulu variabel dan akses pakai Object.keys(nama object)
  const keysObject = Object.keys(biodataSiswa); // jika mengakses key object
  const valueObject = Object.values(biodataSiswa); // jika mengakses value object

  // loop mengakses keys object
  for (let i = 0; i < keysObject.length; i++) {
    console.log(keysObject[i]);
  }
  // output: name, address, school

  // loop mengakses value object
  for (let i = 0; i < valueObject.length; i++) {
    console.log(valueObject[i]);
  }

  // For loop dengan break
  // jika kita buat dia true, perulangan gak akan berhenti
  // tapi dengan adanya break itu bisa berhenti
  for (let buttonKlik = 0; true; buttonKlik++) {
    // disini kita buat kondisi jadi true, artinya loop nya gak berhenti nanti
    console.log(`Button Klik ${buttonKlik}`);

    // tapi jika kita kasi break
    // Button Klik lebih dari/sama dengan 5 maka break (berhenti)
    if (buttonKlik >= 5) {
      break;
    }
  }

  console.log("==================");
}

forLoop();

console.log("====While Loop====");

// While Loop
function whileLoop() {
  // While loop itu perulangan/looping yang lebih sederhana dibanding for loop
  // di While loop hanya terdapat kondisi perulangan
  // tidak ada init statement & post statement

  // hanya ada kondisi saja
  let buttonKlik = 0; // ini init statement versi while loop
  while (buttonKlik <= 5) {
    console.log(`Button diklik ${buttonKlik}`); // ini blok perulangan
    buttonKlik++; // ini post statement versi while loop
  }

  // While loop dengan break
  // jika kita buat dia true, perulangan gak akan berhenti
  // tapi dengan adanya break itu bisa berhenti
  let counter = 0;
  while (true) {
    // jika kondisi kita buat true, dia terus loop tanpa batas
    console.log(`Counter ${counter}`);
    counter++;

    // jika counter kurang/sama dengan 5 maka break (berhenti)
    if (counter <= 5) {
      break;
    }
  }

  console.log("==================");
}

whileLoop();

// Do While Loop
function doWhileLoop() {
  // perulangan yang mirip dengan while loop
  // perbedaannya hanya pada pengecekan kondisi
  // pengecekan kondisi di do while loop dilakukan setelah perulangan
  // maka itu didalam do while loop pasti perulangan akan muncul
  // walaupun kondisi nya false

  console.log("====Do While Loop====");

  // contoh do while loop
  let counter = 0;
  do {
    console.log(`Counter ${counter}`);
    counter++;
  } while (counter <= 3);

  // contoh jika kondisinya false
  // jika di while loop tidak bisa, di do while loop bisa
  let buttonKlik = 100;
  do {
    console.log(`Button di Klik ${buttonKlik}`);
    buttonKlik++;
  } while (buttonKlik <= 5);
  // output: Button di Klik 100

  // Do While loop dengan break
  // jika kita buat dia true, perulangan gak akan berhenti
  // tapi dengan adanya break itu bisa berhenti
  let submit = 0;
  do {
    console.log(`Submit ke ${submit}`);
    submit++;

    // jika submit lebih/sama dengan 5 maka break (berhenti)
    if (submit > 5) {
      break;
    }
  } while (true); // jika kondisi true, dia terus loop tanpa batas

  console.log("==================");
}

doWhileLoop();
