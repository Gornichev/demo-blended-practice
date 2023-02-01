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
// const min = 20;
// const max = 50;
//
// for (let i = min; i <= max; i += 1){
//
//   if(i % 5 === 0){
//     console.log(i)
//   }
// }
// ///
//  // Приклад 2 - Цикл for
//  //Напишіть цикл for який виводить у консоль браузера числа за спаданням від max до min.
//
// const max = 100;
// const min = 90;
//
//  for (let i = max; i >= min ; i-= 1) {
//    console.log(i)
//  }
//  tast 4
// Напишіть код, який запитуватиме логін за допомогою prompt і логуватиме результат у консоль браузера.
// - Якщо відвідувач вводить "admin", то prompt запитує пароль
// - Якщо нічого не введено або натиснуто клавішу Esc – вивести рядок "Cancelled"
// - В іншому випадку вивести рядок "I don't know you"
// Пароль перевіряти так:
// - Якщо введено пароль "boss", вивести рядок "Welcome!"
// - Інакше виводити рядок "Wrong password"
//
//
// const login = prompt('Enter login');
//
// if (login.toLowerCase() === 'admin'){
//   const password =  prompt('Write the password')
//   if (password.toLowerCase() === "boss"){
//     alert('Welcome')
//   } else {
//     alert('Wrong password')
//   }
// } else  if (login.toLowerCase() === null || login.toLowerCase() === ""){
//   alert("Cancelled")
// } else {
//   alert("I don't know you")
// }
// FIZZBAZZ
// Напишіть програму, яка виводить через console.log усі цифри від 1 до 100, з трьома винятками:
// виводити Fizz замість чисел, кратних 3;
// виводити Buzz замість чисел, кратних 5;
// виводити Fizzbuzz замість чисел, кратних як 3, так і 5.
//
// for (let i =  1; i <= 100; i +=1){
// if(i % 3 === 0 && i % 5 === 0){
//   console.log('Fizzbuzz')
// } else if (i % 5 === 0){
//   console.log("Buzz")
// }else if (i % 3 === 0 ){
//   console.log("Fizz")
// } else {
//   console.log(i)
// }
//  }
//
//
// * Є масив із числами.
// Створіть із нього новий масив, де залишаться лежати лише позитивні числа.
// Створіть для цього допоміжну функцію ,яка параметром прийматиме число і повертатиме true, якщо число позитивне, і false - якщо негативне.
// */
//
//  const array = [1, 2, 3, -1, -2, -3, -5];
//  const newArray = [];
//
// function isPositive(number) {
//   return number > 0;
// }
//
// for (const i of array){
//   if (isPositive(i)){
//     newArray.push(i)
//   }
// }
//
//  console.log(newArray)
//  Task двомірний масив
// * Є двомірний масив з числами, наприклад [[1, 2, 3], [4, 5], [6]]. Знайдіть суму елементів цього масиву. Масив, звичайно, може бути довільним.
// */
//  const array = [[1, 2, 3], [4, 5], [6]];
//  let total = 0;
//
// for (const i of array){
//   for (const number of i ){
//
//     total += number
//   }
// }
//  console.log(total)
// Task 7
// * Дано рядок, що складається із символів, наприклад, '  abcde '.
// Перевірте, що першим символом цього рядка є буква 'a'. Якщо це так - виведіть 'так', інакше виведіть 'ні'.
// let text = '  bcde ';
// text= text.trim()
//
// if (text.startsWith('a')){
//   console.log('так')
// } else
//  console.log('ні')
//
//
//  Task 8
// * У змінній min лежить число від 0 до 59.Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
// */
// let min = 40;
//
// if (min >= 0 && min <= 14){
//   console.log('1 part')
// } else if (min >= 15 && min <= 29){
//   console.log('2 part')
// }else if (min >= 30 && min <= 44){
//   console.log('3 part')
// } else {
//   console.log('4 part')
// }
// Task Object
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
//
// const keys = Object.keys(apartment)
//
// for (const key of keys){
//   console.log(`${key} -----${apartment[key]}`)
// }
//
//
// for (const key in apartment){
//   console.log(apartment[key])
// }
// const keys = [];
// const values = [];
//
//   const advert = {
//     service: "apt",
//   };
//
// const apartment = Object.create(advert);
//
//   apartment.descr = "Spacious apartment in the city center";
//   apartment.rating = 4;
//   apartment.price = 2153;
//
// for (const key in advert) {
//    if(advert.hasOwnProperty(key)){
//      keys.push(key);
//      values.push(advert[key]);
//    }
// }
// console.log(advert)
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (let key in object){
//     if(object.hasOwnProperty(key)){
//       propCount ++
//     }
//
//   }
//   // Change code above this line
//   return propCount;
// }
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
//
// const hexColors = [];
// const rgbColors = [];
//
//
// // Change code below this line
// for (const color of colors){
//   hexColors.push(color.hex)
//   rgbColors.push(color.rgb)
// }
// console.log(hexColors , rgbColors)
// // 18/41
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
//
// function getProductPrice(productName) {
//   for (const product of products){
//     if(product.name === productName){
//       return product.price
//     }
//
//   }
//   return null
// }
//
// console.log(getProductPrice("Engine"))
// console.log(getProductPrice("Droid"))
//
// Change code below this line
// Change code above this line


// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
//   icon : "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// };
// // Change code below this line
// const {
//   yesterday : highYesterday,
//   today : highToday ,
//   tomorrow : highTomorrow,
//   icon : highIcon
//
// } = highTemperatures;
//
// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
//
// // const highYesterday = highTemperatures.yesterday;
//  // const highToday = highTemperatures.today;
//  // const highTomorrow = highTemperatures.tomorrow;
//  // const highIcon = highTemperatures.icon;
//
// console.log(highTemperatures)
// console.log(meanTemperature)
//
//

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
//
// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
//
// for (const color of colors) {
//   const {hex , rgb} = color;
//
//
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
//
//   console.log(color.hex)
// }
//

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//   today : {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon
//   },
//   tomorrow : {
//     low : lowTomorrow,
//     high : highTomorrow,
//   }
// } = forecast
//
//

// // Change code below this line
// function calculateMeanTemperature(forecast) {
//
//   const {
//     today: {
//       low: todayLow,
//         high: todayHigh },
//
//     tomorrow: {
//       low: tomorrowLow,
//         high: tomorrowHigh }
//   } = forecast

  // const todayLow = forecast.today.low;
  // const todayHigh = forecast.today.high;
  // const tomorrowLow = forecast.tomorrow.low;
  // const tomorrowHigh = forecast.tomorrow.high;

  // Change code above this line

// calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} })
// //
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line


// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
//
// console.log(Math.min(...scores))
// // code

// const newArray = [];
// function checkNumber(number) {
//   if(checkNumber > 0) {
//     newArray.push(checkNumberf)
//   }
//   return newArray
// }
//
// checkNumber(3)
// console.log(newArray)



// const hasEggs = true;
// const hasFlour = true;
// const hasSugar = true;
//
// const canMakeCake = hasEggs && hasFlour && hasSugar; // don't change this line
//
// console.log(canMakeCake)

// Change code below this line
// Change code below this line
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery
// (${deliveryFee} credits) is included in total price.`;
//
//
// console.log(message)

// const productName = "Droid";
// const pricePerItem = 3500;
//
// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
//
//
// console.log(message
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered > available)
//     message = "Not enough goods in stock!"
//   else
//     message = "Order is processed, our manager will contact you."
//
//
//     // Change code above this line
//     return message;
//
// }
//
// console.log(checkStorage(100, 130))


// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch(country){
//     case "China" :
//       message = `Shipping to China> will cost 100`
//       break;
//
//     case "Chile" :
//       message = `Shipping to Chile> will cost 250`
//       break;
//
//     case "Australia" :
//       message = `Shipping to Chile> will cost 170`;
//       break;
//
//     case "Jamaica" :
//       message = `Shipping to Jamaica  will cost 120`;
//
//       message = "Sorry, there is no delivery to your country";
//
//   }
//
//   // Change code above this line
//   return message;
// }

// function getSubstring(string, length) {
//   return string.slice(0, length);
// }
//
// console.log(getSubstring("Hello world", 3))
//
// // "Hel"
// const num = "100.233"
//
// const st = parseFloat(num)
//
// console.log(st)
// const cars = ["mazda", "opel", "skoda","renault"]
//
// cars.splice(0,1,"Jeep")
// console.log(cars)
// //
// console.log(cars.pop())

//
//
// if (cars.includes("opel"))
//
//   cars.push("bike", "mtb")
//
//   else
//   console.log("fack")
//
// console.log(cars)

// function formatMessage(message, maxLength) {
//   let result;
//   if(message.length < maxLength){
//     result = message
//   } else {
//     result = `${message.slice(0,maxLength)}...`
//   }
//
//   return result;
// }
// //
// // console.log(formatMessage("Curabitur ligula sapien", 16))
//
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15))
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41))
// console.log(formatMessage("Vestibulum facilisis purus nec", 30))

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line
//
//   let message;
//
//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//
//   return "Access denied, wrong password!";
//
// }


// function checkStorage(available, ordered) {
//   // Change code below this line
//
//   if (ordered === 0) {
//     return  "Your order is empty!";
//
//   } if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//     return  "The order is accepted, our manager will contact you";
//
// }
// console.log(checkStorage(100, 130))
//

// const fruits = ["apple", "peach", "pear", "banana"];
//
// // Change code below this line
// const lastElementIndex = fruits.length -1;
// const lastElement = fruits[lastElementIndex];
//
// console.log(lastElementIndex)
// console.log(lastElement)

// function getExtremeElements(array) {
//
//   return [array[0],array[array.length -1]]
//
// }
//
// console.log(getExtremeElements([1, 2, 3, 4, 5]))
// const fruits = "Mango and other fruits"
// const stringToArray = fruits.split(' ')
//
// console.log(stringToArray)
// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//
//   return message.split(' ').length * pricePerWord;
//
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10))

// const fruits = ["apple","orange", "lemon", "kiwi"]
//
//
//
//
// for (let i = 0;i <fruits.length; i += 1){
//   // const user = i[0].toUpperCase() + fruits.slice(1);
//
//   console.log(i)
// }
//
//

const user = "vova"

console.log(user[0].toUpperCase() + user.slice(1))

