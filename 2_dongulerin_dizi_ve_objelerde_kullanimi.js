//! Dizi ve Objelerde Döngü Kullanımı

let citys = ["istanbul", "Anakara", "İzmir", "Eskişehir", "Bursa"];
let users = [
  { firstName: "Aslı", lastName: "Yılmaz" },
  { firstName: "Kerem", lastName: "Bilgin" },
  { firstName: "Tolga", lastName: "Mertoğlu" },
  { firstName: "Selin", lastName: "YılmŞahinaz" },
];

//! Arrays

for (let i = 0; i < citys.length; i++) {
  console.log(citys[i]); //! citys[i] içerisindeki elemanları göstermesini istedik.
}

/////////////////////////////////////////////////////////////////////////////////////

//!for-in metodu

for (let i in citys) {
  console.log(`index: ${i} value: ${citys[i]}`);
}

/////////////////////////////////////////////////////////////////////////////////////

//! for-each metodu
citys.forEach(function (item) {
  console.log(item);
});

/////////////////////////////////////////////////////////////////////////////////////

for (let i = 0; i < users.length; i++) {
  console.log(users[i]); //! fistname ve lastname istemiş olduk.
  console.log(users[i].lastName); //! sadece lastname istemiş olduk.
}

/////////////////////////////////////////////////////////////////////////////////////

for (let i in users) {
  console.log(`index: ${i} value: ${users[i].firstName}`);
  console.log(`index: ${i} value: ${users[i].lastName}`);
}

/////////////////////////////////////////////////////////////////////////////////////

//! map: returns an array

let veri = users.map(function (item) {
  return item.firstName + " " + item.lastName;
});
console.log(veri); //!kullanıcıların ad ve soyadlarından oluşan dizi elemanları gösterir.

/////////////////////////////////////////////////////////////////////////////////////

let numbers = [1, 3, 5, 9, 12];
let num = numbers.map(function (n) {
  return n * n;
});
console.log(num); //! sayıların karesini almış olduk.
