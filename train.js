
// B - Task 
function countDigits(numberQidir) { 
    // string ichida faqat numberlarni qidiramiz!
    const numbers = numberQidir.match(/\d/g); // regex (/\d/g) \d/9 har bir raqamni 0-9 bildiradi g flag esa 
    // hamma mos keluvchi rqamani qidradi!
    // agar raqamlar topilsa ularning uzunligini qaytaramiz, aks holda 0 qaytaramiz!
    return numbers ? numbers.length : 0;
}
// funksiyani ishlatamiz!  
console.log(countDigits("ad2a54y79wet0sfgb9")); // 7
// console.log(countDigits("abcd")); // 0
// console.log(countDigits("12345")); // 5

/////////////////////////////////////////////////////////////////

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

// ///////////////////////////////////////////////////////////// 

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