//! Döngüler (Loops)

//! While Loop
//! (1)
//let i = 0;
// while (i < 10) { //! sonsuz döngü
//   console.log(i);
//   i = i + 1; //! (i+=1) (i++) 2 parantez için örnekler tek başına olarak daha pratik olur.
// }
//! (2)
// let i = 10;
// while (i > 0) {
//   console.log(i);
//   i--;
// }

//////////////////////////////////////////////////////

//! break ve continue
//! (1)
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   if (i == 6) {
//     break; //! döngü if komutunu karşıladığında break komutu döngüyü sonlandırır.
//   }
//   i++;
// }
//! (2)
// let i = 0;
// while (i < 10) {
//   if (i == 6) {
//     continue; //! if değeri karşılanmadan tekrar baştan alır sonsuz döngüye döner.
//   }
//   console.log(i);
//   i++;
// }

//////////////////////////////////////////////////////

//! Do While Loop

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

//////////////////////////////////////////////////////

//! For Loop
//! (1)
// for (let i = 0; i < 10; i++) {//! önce i değeri sonra koşul sonra değeri arttırıyoruz.
//   console.log(i);
// }
//! (2)
// for (let i = 0; i < 10; i++) {
//   if (i == 3) {
//     console.log("Seçilen rakam:" + i);
//     continue;
//   }
//   console.log(i);
// }
//! (3)
// let toplam = 0;
// for (let i = 1; i < 10; i++) {
//   toplam += i;
// }
// console.log(toplam);
//! (4)
let sonuc = 1;
for (let i = 1; i < 10; i++) {
  sonuc *= i;
}
console.log(sonuc);
