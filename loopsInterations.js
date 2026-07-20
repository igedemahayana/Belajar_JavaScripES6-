// 1. for loop (+ break & continue)
function forLoop() {
  // for (init statement; kondisi; post statement) {
  // # blok perulangan disini

  // looping akan terjadi jika true, jika false maka looping akan berhenti
  // init statement, kondisi,dan post statement tidak wajib di isi
  // jika kondisi di isi maka kondisi selalu bernilai true
  for (let i = 1; i <= 2; i++) {
    console.log(`Perulangan ke-${i}`);
  }

  // infinite loop
  // for (;;) {
  //   console.log("Hello");
  // }

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
}

forLoop();
