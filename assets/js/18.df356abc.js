(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{418:function(a,i,s){"use strict";s.r(i);var t=s(1),n=Object(t.a)({},(function(){var a=this,i=a.$createElement,s=a._self._c||i;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"mundarija"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mundarija"}},[a._v("#")]),a._v(" Mundarija")]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#mundarija"}},[a._v("Mundarija")])]),s("li",[s("a",{attrs:{href:"#kirish"}},[a._v("Kirish")])]),s("li",[s("a",{attrs:{href:"#format-spetsifikatori"}},[a._v("Format spetsifikatori")])]),s("li",[s("a",{attrs:{href:"#sintaksis"}},[a._v("Sintaksis")])]),s("li",[s("a",{attrs:{href:"#konsol-tarkibiga-ranglar-qo-shish"}},[a._v("Konsol tarkibiga ranglar qo'shish")])]),s("li",[s("a",{attrs:{href:"#consoleda-chiqayotgan-matn-shriftini-o-zgartirish"}},[a._v("Consoleda chiqayotgan matn shriftini o'zgartirish")])]),s("li",[s("a",{attrs:{href:"#consoleda-stillar-bilan-turli-amallar"}},[a._v("Consoleda stillar bilan turli amallar")])]),s("li",[s("a",{attrs:{href:"#xulosa"}},[a._v("Xulosa")])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"kirish"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kirish"}},[a._v("#")]),a._v(" Kirish")]),a._v(" "),s("p",[a._v("Qanday qilib console.log yordamida Devtools panelidagi console oynasiga CSS format specifier yordamida stil berishni o'rganamiz. Bundan tashqari, console oynasida chiqarayotgan matnlarimizng ranglari va shriftlarini boshqarishni ham o'rganamiz.")]),a._v(" "),s("p",[a._v("Console oynasi deyarli har bir veb-saytni tuzish jarayonida juda foydali. Biz uni turli sabablarga ko'ra narsalarni console oynasida chiqarish, ma'lumotlarni ko'rish, ba'zi ma'lumotlarni keyinchalik ishlatish uchun saqlash va h.klar uchun ishlatamiz. Natijada, biz consoledan to'g'ridan-to'g'ri va bilvosita doimiy ravishda qanchalik ko'p foydalanishimizni hisobga olsak, chiqarayotgan natijalarimizga chiroyli ko'rinish berishni hohlashimiz mumkin. Lekin, biz hamma narsani cheklangan deb o'ylashimiz tufayli, shu oddiy narsani ham ilojsiz deb o'ylaymiz. Ammo, bu odatda juda osondir.")]),a._v(" "),s("p",[a._v("Ushbu postda biz narsalarni konsolga yozishda stillarni qanday qo'llashni ko'rsatib o'tamiz. Umid qilamizki, ushbu maqolaning oxiriga kelib, siz console tarkibini shakllantirish uchun bilishingiz kerak bo'lgan barcha narsani bilib olgan bo'lasiz. Ko'p gapirib o'tirmay keling oddiygina \"Salom Dunyo!\" matnini console oynasida chiqaramiz va unga CSS yordamida stil beramiz.")]),a._v(" "),s("h2",{attrs:{id:"format-spetsifikatori"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#format-spetsifikatori"}},[a._v("#")]),a._v(" Format spetsifikatori")]),a._v(" "),s("p",[a._v("Avval, bir oz vaqt ajratib, format spetsifikatori qanday ishlashini aniq bilib olaylik. Format spetsifikatorlari "),s("code",[a._v("%")]),a._v(" belgisini o'z ichiga oladi, so'ngra qiymatga tegishli formatlash turini belgilaydigan harf keladi.")]),a._v(" "),s("p",[a._v("String (consoledagi xabar)ga o'zgarishlarni tegishli tartibda ta'sir qilishi yoki chiqadigan stringga qiymatlarni kiritish uchun ikkinchi parametr sifatida propertylarni uzatishimiz mumkin.")]),a._v(" "),s("p",[a._v("Quyida, CSS formatini aniqlovchi harflar, ularning ro'yxati va tarifini keltiramiz.")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("Spetsifikator")]),a._v(" "),s("th",[a._v("Ta'rifi")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("%s")]),a._v(" "),s("td",[a._v("Qiymatni string sifatida formatlaydi.")])]),a._v(" "),s("tr",[s("td",[a._v("%i yoki %d")]),a._v(" "),s("td",[a._v("Qiymatni integer (butun son) sifatida formatlaydi.")])]),a._v(" "),s("tr",[s("td",[a._v("%f")]),a._v(" "),s("td",[a._v("Qiymatni floating number(kasr son) sifatida formatlaydi.")])]),a._v(" "),s("tr",[s("td",[a._v("%o")]),a._v(" "),s("td",[a._v("Qiymatni kengaytiriladigan DOM elementi sifatida formatlaydi. "),s("br"),a._v(" Xuddiki, Elements panelida bo'lganidek.")])]),a._v(" "),s("tr",[s("td",[a._v("%O")]),a._v(" "),s("td",[a._v("Qiymatni kengaytiriladigan JavaScript obyekti sifatida formatlaydi.")])]),a._v(" "),s("tr",[s("td",[a._v("%c")]),a._v(" "),s("td",[a._v("CSS stillarni ikkinchi parametr bilan belgilab qo'yilgan natijalar qatoriga qo'llaydi.")])])])]),a._v(" "),s("h2",{attrs:{id:"sintaksis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sintaksis"}},[a._v("#")]),a._v(" Sintaksis")]),a._v(" "),s("p",[a._v("Console natijalariga stil berish uchun, biz "),s("code",[a._v("%c")]),a._v(" format spetsifikatorini ishlatamiz. Keyin consolega chiqishi kerak bo'lgan xabarni yozamiz. Xabar odatda biz console oynasiga chiqarmoqchi bo'lgan matnimiz va undan oldin kelgan spetsifikatordir. Va ohiri, biz natijaga bermoqchi bo'lgan stillarni yozamiz:")]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%cBu matn yashil rangda"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"color:green"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Va tamom. Endi, console oynasini tekshiramiz va yashil rangdagi biz chiqargan matnni ko'rishimiz mumkin.")]),a._v(" "),s("h2",{attrs:{id:"konsol-tarkibiga-ranglar-qo-shish"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#konsol-tarkibiga-ranglar-qo-shish"}},[a._v("#")]),a._v(" Konsol tarkibiga ranglar qo'shish")]),a._v(" "),s("p",[a._v("Odatda, console.warn() va console.error() kabi ba'zi console elementlaridan console oynasiga kirgan foydalanuvchi e'tiborini jalb qilish uchun va muhim xabarlarni ranglar bilan ajratib ko'rsatish uchun ishlatiladi. Keling, odatdagi console.log() elementi yordamida xabarlarimizga stil berishni ko'rib chiqamiz. Sintaksis misolida ko'rsatganimizdek, biz consoldagi matnlarga "),s("code",[a._v("%c")]),a._v(" spetsifikatoridan foydalanib ranglarni qo'shishimiz mumkin:")]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%cBu matn yashil rangda"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"color:green"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%cBu matn ko\'k rangda"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"color:blue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%cBu matn sariq rangda"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"color:yellow"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%cBu matn qizil rangda"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"color:red"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("Yuqoridagi har bir console.log ichida yozilgan matn console oynasida o'zidan keyin CSS yordamida berilgan ranglarda chiqadi.")]),a._v(" "),s("h2",{attrs:{id:"consoleda-chiqayotgan-matn-shriftini-o-zgartirish"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consoleda-chiqayotgan-matn-shriftini-o-zgartirish"}},[a._v("#")]),a._v(" Consoleda chiqayotgan matn shriftini o'zgartirish")]),a._v(" "),s("p",[a._v("Matn ranglarini consoleda turlicha chiqishi uchun CSSdan qanday foydalangan bo'lsak, matn font hajmi, qalinligi, oilasi va hokazolar uchun ham xuddi shunday holatda CSSdan foydalanamiz. Veb-saytni ishlab chiqish jarayonida va ehtimol debug qilayotganda biz consolega bir-biriga o'xshash tarkiblarni chop etishimiz va lekin ularni ajratib ko'rsatishimiz kerak bo'lib qolishi mumkin. Avvalgi misolda biz matn ranglarini o'zgartirdik.Endi esa, shriftlarni qanday o'zgartirishimiz mumkinligini ko'rib chiqamiz:")]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%cBu odatiy font stili"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"color: blue; font-size: 20px"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%cBu o\'zgartirilgan font stili"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"color: blue; font-family:serif; font-size: 20px"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%cBu o\'zgartirilgan font stili"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"color: blue; font-family:monospace; font-size: 20px"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%cBu o\'zgartirilgan font stili"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"color: blue; font-family:sans-serif; font-size: 20px"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),a._v(" "),s("p",[a._v("Endi bizda bir xil rangdagi, ammo har xil shriftdagi to'rt qatorli matn mavjud. Bu biz xohlagan effektni yaratish uchun consolega kerakli stilni qo'llashimiz mumkinligini ko'rsatmoqda. Ba'zi odamlar consolega animatsiyalarni qo'llashgacha borishadi. Ushbu maqola doirasidan tashqarida bo'lsada, biz console ichida juda ko'p narsalarni qilishimiz mumkinligini bilish juda yaxshi.")]),a._v(" "),s("h2",{attrs:{id:"consoleda-stillar-bilan-turli-amallar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consoleda-stillar-bilan-turli-amallar"}},[a._v("#")]),a._v(" Consoleda stillar bilan turli amallar")]),a._v(" "),s("p",[a._v("Biz consoledgagi matnlarning shriftlari va ranglarini o'zgartirishdan tashqari keng ko'lamda CSSdan foydalanishimiz mumkinligini hisobga olsak, turli yuqori darajadagi stillardan foydalanishimiz mumkin. Bu yerda sizga ranglarni birlashtirish va shrift qalinligi, o'lchami, matn soyasi, ranglar va boshqalar kabi CSS stillarini ishlatib, consoleda kamalakka o'xshash matnni qanday yaratishni ko'rsatamiz:")]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'%c JavaScript!!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"xulosa"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xulosa"}},[a._v("#")]),a._v(" Xulosa")]),a._v(" "),s("p",[a._v("Ushbu postda biz "),s("code",[a._v("%c")]),a._v(" kontent spetsifikatoridan foydalanib console tarkibiga qanday stil berishni ko'rib chiqdik. Bundan tashqari, console tarkibini ranglar va tarkib bilan bezash jarayonini ko'rdik. Hatto, turli murakkab darajadagi stillar bilan ishlab ham ko'rdil. Console va unda qanchalik darajada CSSdan foydalanishingiz mumkinligi haqida ko'proq bilish uchun "),s("a",{attrs:{href:"(https://developers.google.com/web/tools/chrome-devtools/console/api)"}},[a._v("Google rasmiy qo'llanmasi")]),a._v(" ni tekshirib ko'ring.")]),a._v(" "),s("hr"),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.telerik.com/blogs/tag/chrome",target:"_blank",rel:"noopener noreferrer"}},[a._v("Chrome"),s("OutboundLink")],1),a._v(", "),s("a",{attrs:{href:"https://www.telerik.com/blogs/tag/debugging",target:"_blank",rel:"noopener noreferrer"}},[a._v("Debugging"),s("OutboundLink")],1),a._v(", "),s("a",{attrs:{href:"https://www.telerik.com/blogs/tag/dev-tools",target:"_blank",rel:"noopener noreferrer"}},[a._v("Dev Tools"),s("OutboundLink")],1),a._v(", "),s("a",{attrs:{href:"https://www.telerik.com/blogs/tag/javascript",target:"_blank",rel:"noopener noreferrer"}},[a._v("JavaScript"),s("OutboundLink")],1)])])}),[],!1,null,null,null);i.default=n.exports}}]);