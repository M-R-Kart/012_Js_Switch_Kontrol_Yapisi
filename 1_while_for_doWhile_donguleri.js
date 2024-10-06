//! Döngüler (Loops)
JavaScript te döngüler, bir kod bloğunu belirli bir sayıda veya bir koşul sağlandığı 
sürece çalıştırmak için kullanılır. While, for ve do-while döngüleri birbirine benzer, 
ancak farklı kullanım senaryoları vardır.

//! 1. While Döngüsü
While döngüsü, belirtilen koşul doğru olduğu sürece çalışır. 
Eğer koşul baştan yanlışsa, döngü hiç çalışmayabilir.

  //? Örnek:

    let i = 0;
    while (i < 5) {
      console.log(i);
      i++;
    }
    
    * Bu kod, i 5 ten küçük olduğu sürece i yi konsola yazdırır ve her seferinde i yi 1 artırır.

  //! ************************************************

  //? Örnek:

    let i = 10;
    while (i > 0) {
      console.log(i);
      i--;
    }
  
  //! ************************************************

  //!  Break ve Continue

  //? Örnek:

    let i = 0;
    while (i < 10) {
      console.log(i);
      if (i == 6) { //döngü if komutunu karşıladığında break komutu döngüyü sonlandırır.
        break;
      }
      i++;
    }

  //! ************************************************

  //? Örnek:

    let i = 0;
    while (i < 10) {
      console.log(i);
      if (i == 6) {
        continue; // if değeri karşılanmadan tekrar baştan alır sonsuz döngüye döner.
      }
      i++;
    }

//! /////////////////////////////////////////////////////////////////////////////////////////

//! 2. For Döngüsü
For döngüsü, daha çok belirli bir sayıda işlem yapmak için kullanılır. 
Başlatma, koşul ve artırma/değiştirme işlemleri döngünün başında tanımlanır.

//? Örnek

  for (let i = 0; i < 5; i++) { // önce i değeri sonra koşul sonra değeri arttırıyoruz.
    console.log(i);
  }

//! ************************************************

//? Örnek:

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    console.log("Seçilen Rakam:" + i);
    continue;
  }
  console.log(i);
}

//! ************************************************

//? Örnek: 1 den 10 a kadar olan sayıların toplamı

let toplam = 0;
for (let i = 1; i < 10; i++) {
  toplam = toplam + i;
}
console.log(toplam);

//! ************************************************

//? Örnek: 1 den 10 a kadar olan sayıların çarpımı

let sonuc = 1;
for (let i = 1; i < 10; i++) {
  sonuc = sonuc * i;
}
console.log(sonuc);

//! /////////////////////////////////////////////////////////////////////////////////////////

//! 3. Do-While Döngüsü

Do-while döngüsü, önce kod bloğunu bir kez çalıştırır, ardından koşulu kontrol eder. 
Yani koşul baştan yanlış bile olsa döngü en az bir kez çalışır.

//? Örnek: Bu örnekte de yine i'nin 0'dan 4'e kadar olan değerleri konsola yazdırılır.

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

