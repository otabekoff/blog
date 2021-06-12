---
title: 'Brauzer consolida CSS'
date: 2021-03-05
update: 2020-03-05
tags:
  - Console
  - Browser
  - CSS
author: Otabek Sadiridinov
---
<!-- ![](https://d585tldpucybw.cloudfront.net/sfimages/default-source/default-album/javascriptd_8700845da2c2dfe40e68a29259cc8b33b85.png?sfvrsn=cace6d10_1) -->
## Mundarija

[[toc]]

## Kirish

Qanday qilib console.log yordamida Devtools panelidagi console oynasiga CSS format specifier yordamida stil berishni o'rganamiz. Bundan tashqari, console oynasida chiqarayotgan matnlarimizng ranglari va shriftlarini boshqarishni ham o'rganamiz.

Console oynasi deyarli har bir veb-saytni tuzish jarayonida juda foydali. Biz uni turli sabablarga ko'ra narsalarni console oynasida chiqarish, ma'lumotlarni ko'rish, ba'zi ma'lumotlarni keyinchalik ishlatish uchun saqlash va h.klar uchun ishlatamiz. Natijada, biz consoledan to'g'ridan-to'g'ri va bilvosita doimiy ravishda qanchalik ko'p foydalanishimizni hisobga olsak, chiqarayotgan natijalarimizga chiroyli ko'rinish berishni hohlashimiz mumkin. Lekin, biz hamma narsani cheklangan deb o'ylashimiz tufayli, shu oddiy narsani ham ilojsiz deb o'ylaymiz. Ammo, bu odatda juda osondir. 

Ushbu postda biz narsalarni konsolga yozishda stillarni qanday qo'llashni ko'rsatib o'tamiz. Umid qilamizki, ushbu maqolaning oxiriga kelib, siz console tarkibini shakllantirish uchun bilishingiz kerak bo'lgan barcha narsani bilib olgan bo'lasiz. Ko'p gapirib o'tirmay keling oddiygina "Salom Dunyo!" matnini console oynasida chiqaramiz va unga CSS yordamida stil beramiz.

Format spetsifikatori
----------------

Avval, bir oz vaqt ajratib, format spetsifikatori qanday ishlashini aniq bilib olaylik. Format spetsifikatorlari `%` belgisini o'z ichiga oladi, so'ngra qiymatga tegishli formatlash turini belgilaydigan harf keladi.

String (consoledagi xabar)ga o'zgarishlarni tegishli tartibda ta'sir qilishi yoki chiqadigan stringga qiymatlarni kiritish uchun ikkinchi parametr sifatida propertylarni uzatishimiz mumkin. 

Quyida, CSS formatini aniqlovchi harflar, ularning ro'yxati va tarifini keltiramiz.



| Spetsifikator | Ta'rifi |
| -------------- | ----------- |
| %s | Qiymatni string sifatida formatlaydi. |
| %i yoki %d | Qiymatni integer (butun son) sifatida formatlaydi. |
| %f | Qiymatni floating number(kasr son) sifatida formatlaydi. |
| %o | Qiymatni kengaytiriladigan DOM elementi sifatida formatlaydi. <br> Xuddiki, Elements panelida bo'lganidek. |
| %O | Qiymatni kengaytiriladigan JavaScript obyekti sifatida formatlaydi. |
| %c | CSS stillarni ikkinchi parametr bilan belgilab qo'yilgan natijalar qatoriga qo'llaydi. |

Sintaksis
------

Console natijalariga stil berish uchun, biz `%c` format spetsifikatorini ishlatamiz. Keyin consolega chiqishi kerak bo'lgan xabarni yozamiz. Xabar odatda biz console oynasiga chiqarmoqchi bo'lgan matnimiz va undan oldin kelgan spetsifikatordir. Va ohiri, biz natijaga bermoqchi bo'lgan stillarni yozamiz:

```js
console.log("%cBu matn yashil rangda", "color:green");
```

Va tamom. Endi, console oynasini tekshiramiz va yashil rangdagi biz chiqargan matnni ko'rishimiz mumkin.

Konsol tarkibiga ranglar qo'shish
---------------------------------

Odatda, console.warn() va console.error() kabi ba'zi console elementlaridan console oynasiga kirgan foydalanuvchi e'tiborini jalb qilish uchun va muhim xabarlarni ranglar bilan ajratib ko'rsatish uchun ishlatiladi. Keling, odatdagi console.log() elementi yordamida xabarlarimizga stil berishni ko'rib chiqamiz. Sintaksis misolida ko'rsatganimizdek, biz consoldagi matnlarga `%c` spetsifikatoridan foydalanib ranglarni qo'shishimiz mumkin:

```js
console.log("%cBu matn yashil rangda", "color:green");

console.log("%cBu matn ko'k rangda", "color:blue");

console.log("%cBu matn sariq rangda", "color:yellow");

console.log("%cBu matn qizil rangda", "color:red");
```

Yuqoridagi har bir console.log ichida yozilgan matn console oynasida o'zidan keyin CSS yordamida berilgan ranglarda chiqadi.

Consoleda chiqayotgan matn shriftini o'zgartirish
-----------------------------

Matn ranglarini consoleda turlicha chiqishi uchun CSSdan qanday foydalangan bo'lsak, matn font hajmi, qalinligi, oilasi va hokazolar uchun ham xuddi shunday holatda CSSdan foydalanamiz. Veb-saytni ishlab chiqish jarayonida va ehtimol debug qilayotganda biz consolega bir-biriga o'xshash tarkiblarni chop etishimiz va lekin ularni ajratib ko'rsatishimiz kerak bo'lib qolishi mumkin. Avvalgi misolda biz matn ranglarini o'zgartirdik.Endi esa, shriftlarni qanday o'zgartirishimiz mumkinligini ko'rib chiqamiz:

```js
console.log("%cBu odatiy font stili","color: blue; font-size: 20px");

console.log("%cBu o'zgartirilgan font stili","color: blue; font-family:serif; font-size: 20px");

console.log("%cBu o'zgartirilgan font stili","color: blue; font-family:monospace; font-size: 20px");

console.log("%cBu o'zgartirilgan font stili","color: blue; font-family:sans-serif; font-size: 20px");
```

<!-- If we paste this code in the console and run it, we will get this output: -->

Endi bizda bir xil rangdagi, ammo har xil shriftdagi to'rt qatorli matn mavjud. Bu biz xohlagan effektni yaratish uchun consolega kerakli stilni qo'llashimiz mumkinligini ko'rsatmoqda. Ba'zi odamlar consolega animatsiyalarni qo'llashgacha borishadi. Ushbu maqola doirasidan tashqarida bo'lsada, biz console ichida juda ko'p narsalarni qilishimiz mumkinligini bilish juda yaxshi.

Consoleda stillar bilan turli amallar
------------------------

Biz consoledgagi matnlarning shriftlari va ranglarini o'zgartirishdan tashqari keng ko'lamda CSSdan foydalanishimiz mumkinligini hisobga olsak, turli yuqori darajadagi stillardan foydalanishimiz mumkin. Bu yerda sizga ranglarni birlashtirish va shrift qalinligi, o'lchami, matn soyasi, ranglar va boshqalar kabi CSS stillarini ishlatib, consoleda kamalakka o'xshash matnni qanday yaratishni ko'rsatamiz:

```js
console.log('%c JavaScript!!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
```

Xulosa
----------

Ushbu postda biz `%c` kontent spetsifikatoridan foydalanib console tarkibiga qanday stil berishni ko'rib chiqdik. Bundan tashqari, console tarkibini ranglar va tarkib bilan bezash jarayonini ko'rdik. Hatto, turli murakkab darajadagi stillar bilan ishlab ham ko'rdil. Console va unda qanchalik darajada CSSdan foydalanishingiz mumkinligi haqida ko'proq bilish uchun [Google rasmiy qo'llanmasi]((https://developers.google.com/web/tools/chrome-devtools/console/api)) ni tekshirib ko'ring. 

* * * * *

 [Chrome](https://www.telerik.com/blogs/tag/chrome), [Debugging](https://www.telerik.com/blogs/tag/debugging), [Dev Tools](https://www.telerik.com/blogs/tag/dev-tools), [JavaScript](https://www.telerik.com/blogs/tag/javascript)