//1. Contoh If

let nilai = 80;

if (nilai >=75) {
    console.log("Selamat Anda lulus")
}

//2.Contoh Else
else {
    console.log("Maaf, Anda tidak lulus")
}

//3. Contoh Nested if
let usia = 20;
let izinMengemudi = true;

if (usia >= 18) {
    console.log("Anda cukup usia untuk mendapatkan izin mengemudi.");
    
    if (izinMengemudi) {
        console.log("Anda bisa memiliki izin mengemudi.");
    } else {
        console.log("Anda belum bisa memiliki izin mengemudi.");
    }
} else {
    console.log("Anda belum cukup usia untuk mendapatkan izin mengemudi.");
}
