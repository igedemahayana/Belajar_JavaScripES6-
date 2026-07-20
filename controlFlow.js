// 1. if / else if / else
function ifEkspression() {
  // if ekspression
  let examValue = 80;
  let tkaValue = 78;

  if (examValue > 78) {
    console.log("Kamu lulus");
  }
  // jika true maka output: "Kamu Lulus", jika tidak ya gak keluar

  // else if ekspression
  if (examValue >= 78 || tkaValue >= 80) {
    console.log("Kamu lulus Ulangan & TKA");
  } else if (examValue >= 75 || tkaValue >= 75) {
    console.log("Kamu harus REMIDI");
  } else {
    console.log("Maaf kamu tidak lulus");
  }
  // output: "Kamu lulus Ulangan & TKA"

  // else ekspression
  if (examValue >= 78 || tkaValue >= 80) {
    console.log("Kamu lulus Ulangan & TKA");
  } else {
    console.log("Maaf kamu tidak lulus");
  }
  // output: "Kamu lulus Ulangan & TKA"
}

ifEkspression();

// 2. Switch Ekspression
function switchEkspression() {
  // Switch lebih sederhana secara pembuatannya dari if statement
  // kondisi switch hanya untuk perbandingan, tidak bisa (>, < >=, <=)

  const role = "admin";

  switch (role) {
    case "admin":
      console.log("Dashboard Admin");
      break;
    case "teacher":
      console.log("Dashboard Guru");
      break;
    case "student":
      console.log("Dashboard Siswa");
      break;
    default:
      console.log("Role tidak ditemukan");
  }
  // output: Dashboard Admin
}

switchEkspression();
