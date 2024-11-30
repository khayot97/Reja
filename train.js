// Task - E
function getReverse(str1)  {
    return str1.split('').reverse().join(''); 
    // const string1 = str1.split('').reverse().join(''); 
    // return string1;
}
// split bu har birb harifni alohida stringa qoyib beradi massiv!
// reverse massivni teskari tarkibga ozgartiradi!
// join esa bizda qayat yana string qilib beradi!
const result = getReverse("hello");
console.log("result:", result);

/*
// Task - D
// define!
function checkContent(str1, str2) {
const string1 = str1.toLowerCase().split('').sort().join('');
const string2 = str2.toLowerCase().split('').sort().join('');
    return string1 === string2;
}
// tolowerCase bu kiritilgan katta hariflarni kichik harifga otkazib tekshirib beradi!
// split bu har birb harifni alohida stringa qoyib beradi massiv!
// sort kiritilgan sozni alfabit boyicha tartibga solib beradi!
// join esa bizda qayat yana string qilib beradi!
//  returnda esa ikkistringni solishtirb bermoqda va qaytarmoqda! 

// call back! 
const result = checkContent("mitgroup", "gmtiprou");
console.log(result); // natija!
 

// Task - C
// step - 1 shop classe 
class Shop {
    constructor(non, lagmon, cola) {
        this.products = {
            non: non, // non miqdori 4ta
            lagmon:lagmon, // lagmon miqdori 5ta
            cola: cola, // cola miqdroi 2 ta
        };
        // console.log("step 1");
    }

// step - 2 qoldiqni korsatish 
qoldiq() {
    const now = new Date().toLocaleTimeString();  // hozirgi vaqtni olamiz
    console.log(
      `Hozir ${now}da ${this.products.non}ta non, ${this.products.lagmon}ta lagmon va ${this.products.cola}ta cola mavjud`
    );
    // console.log("step 2");
}

// step 3 sotish product 
sotish(product, quantity) {
    const now = new Date().toLocaleTimeString(); // hozirgi vaqtni olamiz
    if (this.products[product] >= quantity) { // tekshiradi
        // ["non"] >= 3(quantity) true  sotilishi mumkin chunku non 4 ta bor 
        // agar non ["non"] >= 5 false bolsa zaxira yetarli bolmedi
        this.products[product] -= quantity; // mahsulot miqdorini kamaytirish // kamytiradi
        console.log(
            `Hozir ${now}da ${product}da  ${quantity}ta ${product} sotildi`);
    } else {
        console.log(
            `Hozir ${now}da ${product} zaxirasi yetarli emas! Faqat ${this.products[product]}ta mavjud`
        );
    } 
    // console.log("step 3");      
}

// step - 4 qabul qilish
qabul(product, quantity) {
    const now = new Date().toLocaleTimeString(); // hozirgi vaqtni olamiz
    this.products[product] += quantity; // mahsulot miqdorini oshirish // oshiradi
    console.log(
    `Hozir ${now}da ${quantity}ta ${product} qabul qilindi`);
}

}

// step -5 yakuniy
const shop = new Shop(4, 5, 2);
// 4 dona non bor, 3 donani soatmiz
shop.sotish("non", 3); // 3 ta non sotildi. 
// 4 dona cola qoshamiz
shop.qabul("cola", 4) // 4 ta cola qabul qilindi.
// yakuniy holat
shop.qoldiq(); // hozir 1 ta non, 5 ta lagmon va 6 ta cola mavjud!
// console.log("step 5");  */



// Vaqit bilan ishlash hozirgi vaqtni olib beradi

// const now = new Date();
// console.log(now.toLocaleTimeString(),"KOREA formati");
// console.log(now.toLocaleTimeString("ru-RU"),"ROSSIA formati");
// console.log(now.toLocaleTimeString("en-US"),"AQSH formati");
// console.log(
//     now.toLocaleTimeString("en-GB", {hour: "2-digit", minute: "2-digit"}));

// For example for callback

// function qoldiqBolish(a, b, callback) {
//     if (b === 0) {
//         console.log("step-1");
//         callback("Mahraj nolga teng bolmasin!", null);
//     } else {
//         const c = a % b;
//         callback(null, c);
//         console.log("step-2");
//     }
// }

// qoldiqBolish(10, 7, (err, data) => {
//     if(err) {
//         console.log('ERROR:', err);
//         console.log("step-3");
//     } else {
//         console.log("data:", data);
//         console.log("ANY LOGIC>>>>>>");
//         console.log("step-4");
//     }
// });

// For examle for promise

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = { name: "Ali", age: 25 };
//             resolve(data);
//             console.log("step: 1");
//         }, 2000);
//     });
// }

// fetchData()
// .then((data) => {
//     console.log("Yuklangan malumotlar:", data);
//     console.log("step: 2");
// })
// .catch((err) => {
//     console.log("xatolik:", error);
//     console.log("step: 3");
// });

// For example for async
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = { name: "Ali", age: 25 };
//             resolve(data);
//             console.log("step: 1");
//         }, 2000);
//     });
// }

// async function getUserData() {
//     console.log("Malumotlarni yuklash boshlanmoqda....:");
//     console.log("step: 2");



//   const data = await fetchData();
//   console.log("Yuklangan malumotlar:", data);
//   console.log("step: 3");
// }

// getUserData();

// B - Task 
// function countDigits(numberQidir) { 
//     // string ichida  faqat numberlarni qidiramiz!
//     const numbers = numberQidir.match(/\d/g); // regex (/\d/g) \d/9 har bir raqamni 0-9 bildiradi g flag esa 
//     // hamma mos keluvchi rqamani qidradi!
//     // agar raqamlar topilsa ularning uzunligini qaytaramiz, aks holda 0 qaytaramiz!
//     return numbers ? numbers.length : 0;
// }
// // funksiyani ishlatamiz!  
// console.log(countDigits("ad2a54y79wet0sfgb9")); // 7
// console.log(countDigits("abcd")); // 0
// console.log(countDigits("12345")); // 5

// // A - Task 
// function countLetters(world) {
//     const letterCount = {};
//     for (const letter of world) {
//         if (letterCount[letter]) {
//             letterCount[letter]++;
//         } else {
//             letterCount[letter] = 1;
//         }
//     }
//     return letterCount;
// }
// const world = "engineer";
// const result = countLetters(world);
// console.log(result);

// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talab boling", // 0-20 yoshgacha
//     "togri boshliq tanglang va koproq hato qiling", // 20 - 30 tanlov
//     "uziningizga ishlashingizni boshlang", // 30 - 40 harakat 
//     "siz kuchli bolgan narsalarni  qiling", // 40 - 50 ishlash 
//     "yoshlarga investitsiya qiling", // 50 - 60 farzandlarga
//     "endi dam oling, foydasi yoq endi", // 60 
// ];

// // CALLBACK function
// function maslahatBering(a, callback) {
//     if(typeof a !== "number") callback("insert a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setInterval(function () {
//             callback(null, list[5]);
//         }, 1000);
//     }   
// }

// console.log("paasd here 0");
// maslahatBering(70, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log(data);
//     }
// });
// console.log("passed here 1");

// ASYNC function
// async function maslahatBering(a) {
//     if(typeof a !== "number") throw new Error("insert a number", null);
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//         setInterval(function () {
//             callback(null, list[5]);
//         }, 1000);
//     }
// }
//         return new Promise((resolve, reject) => {
//             setInterval(() => {
                
//             }, interval);(() => {
//                 resolve(list[5]);
//             }, 1000);
//         });
//         // setTimeout(function () {
//         //     return(null, list[5]);
//         // }, 5000);
//     }   
// }

// CALL VIA then va catch ishadi!
// console.log("paasd here 0");
// maslahatBering(65)
//     .then((data) => {
//         console.log("javob:", data);
// })
//     .catch((err) => {
//     console.log("ERROR:", err);
// });
// console.log("passed here 1");


// CALL VIA async va await ishladi qachonki javobni olganda keyin ishledi yani kete ketlida ishledi!
// async function run () {
//     let javob = await maslahatBering(25);
//     console.log(javob);
// }

//     javob = await maslahatBering(70);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();