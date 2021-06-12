---
title: "Javascript boshlang'ich kursi"
date: 2021-02-28
update: 2020-02-28
tags:
  - Javascript
  - Kurs
  - Boshlang'ich
author: Otabek Sadiridinov
---

# Mundarija

[[toc]]

## Izohlar
> Odatda izohlar ma'lum bir kodni nima uchun yozilganini tushuntirish uchun ishlatiladi va Javascriptda ikkita slash `//` belgisidan keyin yozilgan so'zlar Izohlar(comments) deyiladi. Undan avval yoki keyin keladigan qator yoki qatorlardagi yozilgan kodlar nima ekanligini bildirish, qaydnomlar uchun ishlatish mumkin. Bundan ashqari umuman yoki vaqtinchalik nokerak bo'lgan kodlarni brauzerda ko'rsatmay saqlab turishga imkon beradi. Kommentariyaga olingan kodni brauzer ko'rsatmaydi.

```js
// Bu izoh va u brauzerda ko'rinmaydi
```


## Console

Javascriptda yozilgan kodlarning natijasini chiqarish uchun brauzerning maxsus qismi mavjud bo'lib, bu menyuni brauzerning kerakli bo'lgan veb-sahifasini ochgan holatda `F12` yoki `ctrl+shif+i` tugmalarini bosib, **console** tabiga o'tish orqali ochish mumkin.

Deyarli barcha brauzerlarning console oynasida to'g'ridan-to'g'ri kod yozish imkoniyati bor. Yani kodlarni faylga saqlamay, console oynasida yozib test qilish ham mumkin. Biroq, bu holatda kodlar sahifa yopilgandan yoki qayta yuklangandan so'ng o'chib ketadi va qaytarish imkoni yo'q. Buni faqat test maqsadlarida ishlatgan maqul.

Console menyusiga yozilgan kodning natijalarini turli uslublarda chiqarish mumkin. Bundan tashqari chiqayotgan natijani biz log yani ***oddiy yozuv*** hamda ***xatolik, ma'lumot, ogohlanitirsh*** kabi ko'rinishlarda ham chiqarishimiz mumkin. Shuningdek consolega chiqayotgan ma'lumotlarga CSS yordamida stil berish ham mumkin.

Console oynasiga oddiy yozuvni chiqarish uchun biz Javascriptning console obyektining log elementidan foydalanamiz. 
- `console.log()`
- `console.log('Salom Dunyo!')`
- `console.log(1111, 'Salom Dunyo!)`

Javascriptda sonlarni chiqarish uchun ularni to'g'ridan to'g'ri kiritamiz. So'z va matnlar esa `'` va `'` belgilari orasida yoziladi. Xuddi yuqoridagi misollarning so'ngisi kabi.

## O'zgaruvchilar

Javascriptda o'zgaruvchilar o'zi ichidia ma'lum bir turdagi ma'lumotni saqlashga va keyinchalik shu o'zgaruvchining nomi bilan chaqirib ishlatishga yordam beradi. O'zgaruvchilarni turli usullarda e'lon qilish mumkin.

- `var` - Global o'zgaruvchi yaratadi
- `let` - Local o'zgaruvchi yaratadi
- `const` - esa o'zgarmas yaratadi.

```js
// Global o'zgaruvchi
var ism = 'Otabek';
// Lokal o'zgaruvchi
let familiya = 'Sadirdinov';
// O'zgarmas
const otasiningIsmi = 'Faxriddin o\'g\'li';
```
::: tip Ajoyib ma'lumot
Ko'p o'zgaruvchilarni bitta e'lon qiluvchi yordamida e'lon qilish ham mumkin. Bunda har bir o'zgaruvchining qiymatidan keyin `,` va  so'nggi o'zgruvchi qiymatidan keyin `;` qo'yish kerak.
:::

```js
let salom = 'Hi', hello = 'Assalomu aleykum';
// yoki
const a = 1,
      b = 2,
      c = 3;
var git    = 'github.com',
    vscode = 'visual studio code',
    google = 'Qidiruv tizimi';

console.log(salom + ' vs ' + hello);
```

O'zgaruvchilarni boshqa o'zgaruvchilarga tenglab olishimiz mumkin. Shuningdek, o'zgaruvchining ichida boshqa o'zgaruvchilardan ham foydalanishimiz mumkin.

**To'g'ridan to'g'ri console.logda o'zgaruvchilarni qo'shib chiqaramiz**

```js
// Ism + Familiya + Otasining ismi
console.log(ism + ' ' + familiya + ' ' + otasiningIsmi);
```
**Avval o'zgaruvchiga tenglab olib, so'ng o'zgaruvchini consoleda chiqaramiz**

```js
// Ism, Familiya va Otasining ismini o'zgaruvchiga qo'shish
var toliqMalumot = ism + ' ' + familiya + ' ' + otasiningIsmi;
console.log(toliqMalumot);
```


## Funksiyalar
Javascriptda funksiya - bu ma'lum bir vazifani bajarish uchun mo'ljallangan kod bloki.Bunda yozilgan kodlar funskiya bloki ichida bo'ladi va ushbu blokning, funksiyaning o'z nomi bo'ladi. Blokni nomlash va uni istagancha ishlatish mumkin. Funksiyalar chaqirilmaguncha ishlamaydi. Funksiyani chaqirish uchun uning nomi va undan keyin ochiq va yopiq qavslar qo'yiladi. Funksiyani chaqirilgan joyda unga argumentlar orqali ma'lumotlar uzatish mumkin. Argumenlar funksiya chaqirilgan joydagi funksiya nomidan so'ng keladigan qavs ichida funksiyaga berib yuboriladi. Shundan so'ng funksiya ushbu argumentlarni kutib olib ular yordamida biror ishni bajarishi yoki kelgan argumentlarga qarab biror narsa qaytarishi mumkin. Qaytariladigan javob raqam, matn yoki turlicha bo'lishi mumkin.

```js
function funksiyaNomi(argument1, argument2) {
    console.log(argument1, argument2)
}

funksiyaNomi(malumot1, malumot2)
```


::: inform Ma'lumot
Yuqoridagi misolda `function` so'zi bu funksiya boshlanganligini bildiradi.Undan keyingi `funksiyaNomi` esa o'z nomi bilan funksiyaning nomidir. U so'z yoki sonlardan iborat bo'lishi mumkin. Son, turli belgi va emojilar bilan emas harf bilan boshlansa bo'lgani. `argument1` va `argument2`lar esa funksiyaning chaqirilgan joyida berib yuboriladigan ma'lumotlarni qabul qilib oluvchi qismidir. Argumetlar istagancha yoki umuman bo'lmasligi ham mumkin.
:::


Yuqorida e'lon qilgan o'zgaruvchilarimizni qo'shish uchun funksiya tuzishimiz mumkin.

```js
function fullName(ism, familiya, otasiningIsmi) {
    return ism + ' ' + familiya + ' ' + otasiningIsmi;
}
```

Ushbu funksiyani chaqirgan vaqimizdagina ishlaydi. Keling shu funksiya yordamida ism familiya va otasining ismini console oynasiga chiqarib ko'ramiz.

```js
console.log(fullName(ism, familiya, otasiningIsmi))
```

yoki biron o'zgaruvchiga tenglab olib, uni console oynasida chiqaramiz.

```js
let toliqMalumot = fullName(ism, familiya, otasiningIsmi);

console.log(toliqMalumot)
```

console.log qilish jarayonini osonlashtirish uchun biz console.logni ham funksiyaga aylantirib olamiz va funksiyaga print deb nom berib olamiz.

```js
function print(malumot) {
    console.log(malumot)
}
```

va yuqoridagi o'zgaruvchiga tenglangan ma'lumotlarni yangi funksiyamiz ichida ishlatamiz.

```js
function print(malumot) {
    console.log(malumot)
}

let toliqMalumot = fullName(ism, familiya, otasiningIsmi);

console.log(toliqMalumot) // buning o'rnida quyidagicha ishlatishimiz mumkin.

print(toliqMalumot)
```

Print funksiyasi console.log bilar bir hil ishlaydi. Shuning uchun uning ichida ham turli amallarni bajarish mumkin. Misol uchun ikki sonni, matn va raqamni yoki matn bilan matnni qo'shish kabi.

```js
// Print funksiyasidan istagancha foydalanishimiz mumkin.
print('Salom!');
// Raqamlar ustida amallar + - * /
print(1 + 1)
// Son bilan matn sonni qo'shish
print(1 + '1')
// Son bilan matnni qo'shish
print(1 + 'a')
// Matn bilan matnni qo'shish
print('a' + 'b')
```

Oddiy qo'shish amalini bajaruvchi funksiya.
```js
function qoshish(qoshuvchi, qoshiluvchi) {
    return qoshuvchi + qoshiluvchi;
}
print(qoshish(5, 15))
```
Qo'shuvchi argumentiga 5 va qo'shiluvchi argumentiga 15 berdik. Qo'shish funksiyasi ularni argument sifatida qabul qiladi. Keyin ikki argumentni qo'shib bizga javobni print funksiyasi yordamida console oynasiga chiqarib beradi.

## Built-in functions - Javascriptning o'z funksiyalari

Javascriptni o'zining funksiyalari ham bor. Ularni built-in functions deb ataymiz. Ular bizga turli maqsadlarda xizmat qiladi. Shulardan dialog oynasi sifatida ishlatiladiganarini ko'rib chiqamiz.

![](/alert.jpg)

```js
alert('Salom Dunyo')
// Yoki o'zgaruvchiga tenglab olishimiz mumkin.
let alertFunksiyasi = alert('Salom Dunyo');
alertFunksiyasi()
```

Ushbu alert built-in dialog funksiyasi. Brauzerda qo'shimcha ma'lumot oynasi ochadi. Va argument sifatida berilgan ma'lumotni shu oynada chiqaradi.

![](/confirm.jpg)

```js
confirm('Olmalarni yoqtirasizmi?');
// Yoki
let tasdiqlash = confirm('Olmalarni yoqtirasizmi?');
console.log(tasdiqlash)
```

Yuqoridagi confirm built-in dialog funksiyasi alert built-in dialog funskiyasi bilan bir hil. Faqat bunda ma'lumotni ko'rsatish uchun emas so'rovni tasdiqlash uchun oyna ochiladi. Va shu oynada alertda bo'lmagan narsa, tugmalar bo'lasi.Sizdan biron narsaga ha yoki yo'q javaobini berishingizni so'raydi. Qaysi tugma bosilganiga qarab biron bir funksiyani ishga tushirib yuborish mumkin. Bunga misolni keyinroq ko'ramiz.

![](/prompt.jpg)

```js
let sorov = prompt('Yoqtirgan mevangizni kiriting.')
console.log(prrompt)
```
Bu built-in dialog funksiyasi confirm funksiyasi bilan bir hil. Faqat bunda javobni tugmalar yordamida emas qo'l yordamida kiritish maydoniga kiritiladi.

## Funksiya va ifodaviy funksiyalar

> Function declaration - funksiyani to'g'ridan to'g'ri elon qilish.
> Function expression - ifodaviy funksiyalar. O'zgaruvchiga tenglashtirilgan funksiyalar. To'g'ridan to'g'ri chaqirilgan funksiyalarga nisbatan ancha tez ishlaydi.

```js
// Function declaration - to'g'ridan to'g'ri chaqirish
function multiply(num1, num2) {
    return num1 * num2;
}

//Function expression  - o'zgaruvchiga tenglab e'lon qilish
var multiply = function(num1, num2) {
    return num1 * num2;
}
```

::: warning Diqqat! Agar function expressionni o'zidan avval chaqirisa ishlamaydi. Sababi: funksiya hali yaratilmagan bo'ladi/Lekin, function declarationda esa, funksiyani qayerda e'lon qilinishiga qaramay ishlayveradi.
:::

## Matnlar bilan ishlovchi funksiyalar

```js
let gap = "Salom mening do'stimning ismi Bekky."
console.log(gap.length); // matndagi harf, son ba bo'sh joylarning umumi soni, uzunligini topib beradi
console.log(gap.trim()); // aynan qaysidir qismni yoki bo'sh joyni o'chirib yuboradi
console.log(gap.search('Bekky')); //Qayerdan boshlanishini topib beradi
console.log(gap.split(' ')) //berilgan argumentdan boshlab matnni array elementlariga aylantirib bo'ladi
console.log(gap.substr(6, 2)); // berilgan parametrning birinchisidan boshlab ikkinchi argument uzunligicha matnni qirqib oladi
console.log(gap.replace('my', 'our')); // berilgan parametrning birinchisini ikkinchisi bilan almashtiradi
console.log(gap.toUpperCase()) // Berilgan matnning harflarini katta harfga aylantiradi
console.log(gap.toLowerCase()) // Berilgan matnning harflarini kichik harfga aylantiradi
console.log(gap.charAt(5).toUpperCase()) // Berilgan indeksdagi harfni katta harfga almashtiradi
console.log(gap.indexOf('m')) // Berilgan so'z, son yoki harfning ilk boshlanish nuqtasini topib beradi
console.log(gap.lastIndexOf('m')) // Berilgan so'z, son yoki harfning so'nggi boshlanish nuqtasini topib beradi
console.log(gap.split('').reverse().join('')) // Berilgan so'z, son yoki harflarning aksiga aylantirib yozib beradi
```

::: tip Ajoyib ma'lumot
Javascriptda biror bir o'zgaruvchining turini aniqlash uchun uni `typeof()` funksiyasi ichida yozib, biror yerda: alert yoki consoleda chiqarib ko'rishimiz mumkin.
:::

Raqamlarni sonlarga aylantirish uchun `toString()` funksiyasi mavjud.

```js
var a = 5;
console.log(typeof(a));
console.log(typeof(a.toString()));
```

## Arrow funksiyalar
```js
// Oddiy, ifodaviy funksiya
let hello = function (a, b) {
    console.log(a, b);
}
// Arrow funksiya
let hello = (a, b) => console.log(a+b)
sum(2, 3)

// Javob qaytaruvchi, odatiy, ifodaviy funksiya
let hello = function (a, b) {
   return a+b
}
// Javob qaytaruvchi, bir qatorli, qisqa, arrow funskiya
let hello = (a, b) => a + b;
alert(sum(2, 3))
```

## If else if else switch

Javascriptda **If(agar)** degan funksiya mavjud. Ushbu funksiya ichida yozilgan kod agar argumentida berilgan shart to'g'ri bo'lsa ishlaydi yo'qsa aksincha. Yani if ichiga kirmay keyingi kod blokidan ishlab ketaveradi.

Misol:
```js
let a = 2;
if(a === 1) {
 console.log('o\'zgaruvchi 1ga teng')
}
console.log('Salom')
```
Bu yerda `a` o'zgaruvchisi 2 ga ten shuning uchun shartli ravishda if ichidagi funksiya ishlamaydi.

Ifga qo'shimcha ravishda **else(yoki)** ham ishlatiladi. Else agar if argumentidagi shartimiz ishlamagan holda ishga tushadi.

Misol:
```js
let a = 2;
if(a === 1) {
 console.log('o\'zgaruvchi 1ga teng')
}
else {
    console.log('o\'zgaruvchi 1ga teng emas')
}
```

Yuqorida agar `a` o'zgaruvchisi 1ga teng bo'lmasa consoleda o'zgaruvchi 1ga teng emas degan so'z chiqadi.

Yana javascriptda **else if(yoki agar)** ham bo'lib, u agar degan shartimizni uzaytirishga yordam beradi. Yani agar `a` o'zgaruvchisi 1 ga teng bo'lmasa, else if ishga tushadi. Else ifda esa agar `a` 2ga teng bo'lsa deb yozib qo'yishimiz mumkin. Shunda else ifga berilgan shart to'g'ri chiqib uning ichdagi kodlar ishlaydi. Aksincha else if ham ishlamasa unda odatiy javob else ishga tushadi.
Misol:
```js
let a = 2;
if(a === 1) {
 console.log('o\'zgaruvchi 1ga teng')
}
else if (a === 2 ) {
console.log('o\'zgaruvchi 1ga teng emas, u ikkiga teng.')
}
else {
    console.log('o\'zgaruvchi 1 yoki 2ga teng emas').
}
```

Keling boshqa misollar ham ko'rib chiqamiz.

```js
// let yosh = 18;
let yosh = prompt('Yoshingizni kiriting');

if (yosh >= 18) {
    console.log('Siz saylov huquqiga egasiz.');
}
else {
    console.log('Siz saylov huquqiga ega emassiz.');
}
```

yoki
```js
// let meningPulim = 1000;
let meningPulim = prompt('Sizda biron narsa sotib olish uchun qancha mablag\' bor?');

if (meningPulim <= 1000) {
    console.log('Siz 0.5l pepsi cola olishingiz mumkin')
}
else if (meningPulim >= 1000 && meningPulim <=2000) {
    console.log('Siz 1l pepsi cola olishingiz mumkin')
}
else if (meningPulim > 2000) {
    console.log('Siz coca-cola yoki pulingiz yetgan barcha narsani olishingiz mumkin')
}
else {
    console.log('Haliyam yosh bolasizde Abduraxmon...')
}
```

Yoshni tekshirish funksiyasi

```js
let age = prompt('Yoshingiz nechada?');
function yoshniTekshirish(yosh) {
    if (yosh >= 18) {
        return true
    }
    else {
        return false
    }
}
```

Funksiyalardan foydalanish.

```js
let meningYoshim = 15;
if (yoshniTekshirish(yosh)) { // yoki if(yoshniTekshirish(yosh) === true)
    console.log('Siz saylov huquqiga egasiz.');
}
else {
    console.log('Siz saylob huquqiga ega emassiz.');
}
```

Misol

```js
function hello(ism, yosh) {
console.log(ism + ' siz ' + yosh + ' yoshdasiz');
}
hello('Otabek', '23')
```

## Switch statement - Shartlarni switch bilan ifodalash
Switch statement bu ifga yaqin bo'lgan built-in funksiyadir.
Faqat bu yerda yozilishi har hil
```js
let maktabBahosi = prompt('Maktabda olgan bahoingizni kiriting.');
let xabar;
switch (maktabBahosi) {
case '5': xabar = 'Ajoyyib!'
    break;
case '4': xabar = 'Zo\'r'
    break;
case '3': xabar = 'Yaxshimas lekin!'
    break;
default: xabar = 'Yaxshiroq o\'qi yoki bahoni to\'g\'ri yoz!';
}
console.log(xabar);
```
Bu yerda foydalanuvchi kiritgan bahoga qarab xabar o'zgaruvchisi qiymatini o'zgartiryapmiz. Va console oynasiga ushbu qiymatni chiqarayapmiz. Bu yerda `switch` ifga, `case`lar if yoki else ifga va `default` elsega teng. Shart bajarilgandan so'ng shu yerda to'xtashi uchun `break`dan foydalanyapmiz, aksincha davom etishi uchun esa` continue`dan foydalanamiz.


# Arraylar


```js
// Metod 1
// let arr = new Array();
// console.log(arr);

// arr.push(1);
// console.log(arr)

// arr.push(2);
// console.log(3)

// arr.push(3)
// console.log(arr)

// arr.pop()
// console.log(arr);


// Metod 2
// let arr = []
// console.log(arr)

// let arr = ['red', 'green']
// console.log(arr);
// console.log(arr[0]);

// Array ichidagi elementlarning duplikat, yani bir hillaridan qutilish.
// Set metodi orqali
// let arr = [1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 5]
// console.log(arr)
// let uniquearr = new Set(arr);
// console.log(arr)

// Native metod orqali

// var k = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 7, 1, 6, "nancy", "mike", "nancy"];

// uniqueArray = k.filter(function (item, pos) {
//     return k.indexOf(item) == pos;
// })

// console.log(uniqueArray);
```


## Looplar

```js

// Loop - While

let a = 5;
while (a < 10) {
    console.log(a);
    a++
}

// Loops - Do-While

let ab = 0
do {
    console.log(ab)
    ab++
} while (ab < 5)


// Loops - for

for (let a = 10; a < 15; a++) {
    console.log(a)
}
```