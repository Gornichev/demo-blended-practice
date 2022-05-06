 // task Polindrom
// function palindrome (str){
//   str = str.toLowerCase().trim();
//   return str === str.split("").reverse().join("")
//
// }
// console.log(palindrome('aB2brgrta'))
// console.log(palindrome('aBba'))
// console.log(palindrome('abba'))
// console.log(palindrome('AbbA'))
 // task Polindrom


// / Приклад 1 -
//  // Напиши скрипт для перебору масиву fruits циклом for.
//  // Для кожного елемента масиву виведіть у консоль рядок у форматі "номер_елемента: значення_елемента".
//  // Нумерація елементів має починатися з 1

//  const mooFruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
//
// for (let i = 0; i < mooFruits.length; i += 1){
//   console.log(`{i + 1} : ${mooFruits[i]}`)
// }


 // / Приклад 2 - Переписати на for of
 // // Скрипт виводить у консоль лише парні елементи масиву.

// let numbers = [5, 10, 15, 20, 25, 30, 35, 40, 48, 51];

//
// for (let i =0; i <= numbers.length; i += 1){
//
// if (numbers[i] % 2 !== 0){
// continue;
// }
//  console.log(numbers[i])
// }

//
// for (const number of numbers){
//   if (number % 2 !== 0){
//     continue;
//   }
//   if (number > 30){
//     break;
//   }
//   console.log(number)
// }

 // Приклад 3 - Пошук елемента
 // Напиши скрипт пошуку найменшого числа у масиві.
 // Код має працювати для будь - якого масиву чисел.
 // Використовуйте цикл для вирішення задачі.

//  const numbers = [5, 2, 17, 94, 1, 23, 37, 0.5];
//  let min = numbers[0];
//
// for (const number of numbers){
//   if (number < min){
//     min = number
//   }
//   console.log('min', min)
// }
//

//  const style = ['jazz', 'blue', 'rap', 'Reggae']
//  const style1 = ['ja22z', '22lue', 'r22ap', 'Regg222ae']
//  const numbers = [1, 2, 4, 5, 8 , 9 , 3]
//
// const newArray = style.concat(style1, 222)
//  console.log(newArray)
//
//

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
//
// const namesArray = names.split(',')
// const phonesArray = phones.split(',')
// const copyNamesArr = [...namesArray]
//
//  console.log(copyNamesArr === copyNamesArr)
//
//
//  for (let i = 0; i <= namesArray.length; i += 1){
//
//    console.log(`${namesArray[i]} : ${phonesArray[i]}`)
//  }
//
//

 // Напиши скрипт який виводить у консоль усі слова рядка крім першого та останнього.
 // // Результуючий рядок не повинен починатися або закінчуватися пробілом.
 // // Скрипт повинен працювати для будь-якого рядка.

// const str = 'Welcome to the future my friend!';
//
// const strToArr = str.split(' ');
//
// // strToArr.pop();
// // strToArr.shift();
//
//  strToArr.slice(1,-1).join(" ");
//
// console.log(strToArr);
//

 // Напиши скрипт, який «розвертає» рядок (зворотний порядок букв) і виводить його в консоль.

// const string = 'Welcome to the future!';
//
// let revStr = "";
//
//  for (let i = string.length - 1; i >= 0; i -= 1) {
//
//    revStr += string[i]
//  }
//
//  console.log(revStr)

 // Опертор % и методи рядків

 // Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) у рядок у форматі годин і хвилин HH:MM

 // 70 покаже 01:10
 // 450 покаже 07:30
 // 1441 покаже 24:01

 // const totalMinutes = 60;
 //
 // const hours = Math.floor(totalMinutes / 60);
 // const min = totalMinutes % 60;
 //
 // const minFull = String(min).padStart(2, 0);
 // const hoursFull = String(hours).padStart(2, 0);
 //
 // console.log(`${hoursFull}:${minFull}`);

 // Task 3
 // Використовуючи конструкцію if..else, напишіть код, який запитуватиме: "What is the official name of JavaScript?". Якщо користувач вводить "ECMAScript", то показати: "Yep!",
 //
 // const userAnswer = prompt("What is the official name of JavaScript?")

// if (userAnswer === 'ECMAScript'){
//  alert("Yap")
//
// } else {
//   alert("Don't you know? ECMAScript!")
// }

 // Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 год. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 год.", без хвилин.

// const hours = 14;
// const minutes = 323;
// let timeString;
//
//
// if (minutes === 0){
//   timeString = `${hours} год`
// } else {
//   timeString = `${hours} год: ${minutes} хв`
// }
//
//  console.log(timeString);

 // Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо в prompt користувач ввів число більше за нуль.
 // Якщо введено нуль, виводь у консоль рядок "Це нуль".
 // Якщо передали від'ємне число, у консолі має бути рядок "Це від'ємне число".

// const userInput = Number(prompt('Введіть число'));
//
// if (userInput > 0){
//
// console.log("Це позитивне число")
//
// }  else if  (userInput  === 0){
//  console.log("Це нуль")
// }
// else  {
// console.log("Це від'ємне число")
// }

 // Напиши скрипт, який порівнює числа змінних a і b.
 // Якщо обидва значення більше 100, виведи в консоль максимальне з них.
 // Інакше у консолі має бути сума значення b та числа 512.

// const a = 20;
// const b = 180;
//
// if (a > 100 && b > 100){
//
//   console.log(Math.max(a,b))
//
// } else  {
//
//   console.log(b + 512)
// }

 // Напиши скрипт який перевіряє чи закінчується значення змінної link символом /.
 // Якщо ні, додай до кінця значення link цей символ.
 // Використовуй конструкцію if...else.

// let link = 'https://my-site.com/about';
//


 // Напиши скрипт який перевіряє чи закінчується значення змінної link символом /.
 // Якщо ні, додай у кінець значення link цей символ, але тільки в тому випадку, якщо в link є підрядок "my-site".
 // Використовуй конструкцію if...else.

// let link = 'https://my-sit5e.com/about';

 // if (! link.endsWith("/") && link.includes("my-site")){
 //   link += '/'
 // }

// const res =  ! link.endsWith("/") && link.includes("my-site") ? link += '/' : link += 'Pidar'
//  console.log(res)
//
//  // Task Switch


 // if (car === 'Audi' || car === 'BMW' || car === 'Opel') {
 //   console.log('Good car!');
 // } else if (car === 'Zaporozhets' || car === 'Tractor') {
 //   console.log('Will do for the countryside');
 // } else {
 //   console.log('Footpassenger');
 // }

// const car = 'Opel';
// switch (car){
//     case'Audi' :
//     case'BMW' :
//     case'Opel' :
//        console.log('Good car!');
//        break;
//     case 'Zaporozhets':
//     case 'Tractor' :
//       console.log('Will do for the countryside');
//       break;
//     default :
//       console.log('Footpassenger');
// }

 // Приклад 1 - Цикл for
 // Напиши цикл for який виводить у консоль браузера числа за зростанням від min до max, але тільки якщо число кратне 5.

const min = 20;
const max = 50;

for (let i = min; i <= max; i += 1){

  if(i % 5 === 0){
    console.log(i)
  }
}
///
