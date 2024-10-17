JavaScript te switch ifadesi, bir değişkenin (veya ifadenin) alabileceği değerlere göre 
farklı kod bloklarını çalıştırmak için kullanılır. Özellikle, birçok if...else if koşulunu 
arka arkaya yazmak yerine daha temiz ve anlaşılır bir yapı sunar. 
switch, bir değerle eşleşen bir durum bulduğunda o duruma ait kod bloğunu yürütür ve 
programın geri kalanını atlayabilir.

//! SWİTCH YAPISININ GENEL KULLANIMI

  switch (değişken) {
    case değer1:
        // Eğer 'değişken' değer1'e eşitse, bu kod çalışır.
        break; // Bu bloğun ardından diğer durumlara geçilmesini engeller.
    
    case değer2:
        // Eğer 'değişken' değer2'ye eşitse, bu kod çalışır.
        break;
    
    default:
        // Hiçbir 'case' durumu ile eşleşmezse, bu kod çalışır.
  }

  //! ************************************************

  //! Örnek:

    let islem = 3;

    switch (islem) {
      case 1:
        console.log("1 nolu işlem yapıldı");
        break;
      case 2:
        console.log("2 nolu işlem yapıldı");
        break;
      case 3:
        console.log("3 nolu işlem yapıldı");
        break;
      default:
        console.log("İşlem yapılmadı");
    }
    //* Çıktı: "3 nolu işlem yapıldı"
    
  //! ************************************************
  
  //! Örnek:

    let day = 6;

    switch (day) {
      case 1:
        console.log("Pazartesi");
        break;
      case 2:
        console.log("Salı");
        break;
      case 3:
        console.log("Çarşamba");
        break;
      case 4:
        console.log("Perşembe");
        break;
      case 5:
        console.log("Cuma");
        break;
      default:
        console.log("Hafta Sonu");
    }
    
    //* Çıktı: "Hafta Sonu"
    
  //! ************************************************

  //! Örnek:

    let saat = 25;

    switch (true) {
      case saat >= 0 && saat <= 7:
        console.log("İyi Geceler");
        break;
      case saat >= 8 && saat <= 11:
        console.log("Günaydın");
        break;
      case saat >= 12 && saat <= 17:
        console.log("İyi Günler");
        break;
      case saat >= 18 && saat <= 24:
        console.log("İyi Akşamlar");
        break;
      default:
        console.log(alert("Geçersiz saat dilim"));
        console.log("Geçersiz saat dilimi");
    }
    
    //* Alert Çıktı: "Geçersiz saat dilimi"
    //* Çıktı: "Geçersiz saat dilimi"
    
  //! ************************************************

Açıklamalar
  (1) switch ifadesi= Burada switch, gun değişkenine bağlı olarak hangi kod bloğunun 
                  çalıştırılacağını belirler.
  (2) case durumları= gun değişkeninin değerine göre bir eşleşme bulunur. 
                  Örneğin, gun 3 olduğunda, "Çarşamba" yazdırılır.
  (3) break anahtarı= Bir case durumunda eşleşme bulunduktan sonra, 
                  break ifadesi kullanılarak switch yapısından çıkılır. 
                  Eğer break kullanılmazsa, aşağıdaki tüm case blokları çalıştırılır 
                  (bu duruma "fall-through" denir).
  (4) default bloğu= Hiçbir case durumuyla eşleşme olmazsa, default bloğu çalıştırılır.

//! //////////////////////////////////////////////////////////////////////////////////////////

//! SWİTCH İLE EŞİTLİK KARŞILAŞTIRMA
switch yapısı, katı eşitlik (===) kullanır, yani değerlerin tipi de kontrol edilir.

  //! Örnek:

    let deger = '5';

    switch (deger) {
        case 5:
            console.log("Sayı 5");
            break;
        case '5':
            console.log("String 5");
            break;
    }

    // Çıktı: "String 5"
    -Bu örnekte deger değişkeni bir string olduğu için case '5' durumu ile eşleşir, 
    ancak case 5 durumu ile eşleşmez.

//! //////////////////////////////////////////////////////////////////////////////////////////

// SWİTCH YAPISININ AVANTAJLARI

    (1) Çok sayıda if...else if kullanmak yerine daha okunabilir ve düzenli bir yapı sağlar.
    (2) Farklı durumlar için aynı kod bloğunu çalıştırmak gerektiğinde, fall-through 
    (yani break kullanmadan) yaklaşımını kolayca kullanabilirsin.

// ÖZET

    (1) switch, bir ifadenin birkaç olası durumunu kontrol etmek için kullanılır.
    (2) Her case durumu, belirli bir değere eşit olduğunda çalışır.
    (3) break ifadesi, bir eşleşme bulunduktan sonra switch yapısından çıkılmasını sağlar.
    (4) default bloğu, hiçbir case durumu ile eşleşmezse çalışır.
