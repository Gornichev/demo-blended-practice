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

// let fruits = ["apple","orange", "lemon", "kiwi", "strawberries", "banana"]
//
// const newArr =  fruits.splice(0,2,"watermelon", "item")
// const cars = ["bmw","audi"]
//
// console.log(cars.concat(fruits))

// let findFruit = "lemon";
// const changeFruit = "pineapple"
// console.log(fruits)
//
// if (fruits.includes(findFruit)){
//   let idx = fruits.indexOf(findFruit)
//   fruits.splice(idx,1)
//
// }
// console.log(fruits)

// for (let i = 0; i <fruitLength ;i += 1){
//   console.log(fruits[i])
// }
// for (let fruit of fruits) {
//   console.log(fruit[0].toUpperCase() + fruit.slice(1))
// }

//
// for (let fruit of fruits) {
//
//   console.log(fruit[0].toUpperCase() + fruit.slice(1))
// }

// for (let i = 0;i <fruits.length; i += 1){
//   // const user = i[0].toUpperCase() + fruits.slice(1);
//
//   console.log(i)
// }

// const user = "vova"
//
// console.log(user[0].toUpperCase() + user.slice(1))
// const num = "uncle"
//
// const numToArray = Array.from(num)
//
// const sas = numToArray.toString();
//
// console.log(typeof sas)

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//    words = message.split(delimiter)
//   // Change code above this line
//   return words;
// }
//
// console.log(splitMessage('best_for_week', '_'))
// console.log(splitMessage("Mango", ""))
// console.log(splitMessage('Mango hurries to the train', ' '))


// (function (a,b,c){
//   if(a < b){
//     console.log("EEE")
//   } else {
//     console.log("!!!")
//   }
//
// })(5,6,7)

// (function (a,b,c){
//
// })(1,2,4)

// // console.log("a".big())
// function makeStringFromArray(array, delimiter) {
//   let string;
//
//   string = array.join(delimiter)
//
//   return string;
// }
//
// console.log(makeStringFromArray(['M', 'a', 'n', 'g', 'o'], ''))


// function makeStringFromArray (array, delimiter){
//
//   return array.join(delimiter)
// }
//
// console.log(makeStringFromArray(['M', 'a', 'n', 'g', 'o'], ''))



// let fruits = ['apple', 'plum', 'pear', ]
//
// function myPush (...fruit){
//  return  fruits =  [...fruits, ...fruit ]
// }
//
// myPush('banana','bear','apple2')
// console.log(fruits)
// function multiply(...args) {
//   console.log(args); // масив усіх аргументів
// }
//
// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);



// const  arr = [3,2,5,6];
// function arraySum(array){
//   let sum = 0;
//   for(let i = 0; i < array.length; i+=){
//     sum += array[i];
//   }
//   console.log(sum);
// } arraySum(arr);



// const friends = ["vova","kolya","petya","olya"]
//
//
// const checkOperations = () => {
//   let all = []
//
//   for (let i = 0; i < friends.length; i += 1) {
//     all.push(friends[i])
//   }
//   return all
// }
//
// console.log(checkOperations(friends))
//
// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }
//
// function calculateTotalPrice(order) {
//   let total = 0;
//
//   for(let i = 0; i < order.length; i += 1 ){
//     total += order[i]
//   }
//
//   return total;
// }
//
// console.log(calculateTotalPrice([12, 85, 37, 4]))

// function findLongestWord(string) {
//
// let srtToArr = string.split(" ");
// let longWord = srtToArr[0];


// for(let i = 0; i < srtToArr.length; i +=1) {
//
//  if(srtToArr[i].length > longWord.length) {
//    longWord = srtToArr[i];
//  }
// }
// return longWord
// }
//
// console.log(findLongestWord("May the force be with you"))
//   function createArrayOfNumbers(min, max) {
//   const numbers = [];
//
//   for(let i =min; i <= max; i += 1){
//     numbers.push(i)
//   }
//
//
//   return numbers;
// }
//
// console.log(createArrayOfNumbers(1, 3))

// function filterArray(numbers, value) {
// const largerNumber = [];
//
//   for(let i = 1; i <= numbers.length;i += 1){
//     if(numbers[i] > value){
//       largerNumber.push(numbers[i])
//     }
//   }
// return largerNumber
// }
//
// console.log(filterArray([1, 2, 3, 4, 5], 3))
// function getCommonElements(array1, array2) {
//   const newArr = [];
//   for(let i = 0; i < array1.length ; i += 1){
//
//    if(array2.includes(array1[i])){
//      newArr.push(array1[i])
//    }
//       }
// return newArr
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };
//
// user.task = ["home-work","video"]
//
// console.log(user)
//
// // for (let item of user.hobbies){
// //   console.log(item.length)
// // }

// function getEvenNumbers(start, end) {
//   const evenNumber = []
// for (let i = start; i <= end; i += 1){
//   if(i % 2 === 0){
//     evenNumber.push(i)
//   }
// }
// return evenNumber
// }
//
// console.log(getEvenNumbers(2, 5))

// ✅ Логічно і синтаксично згруповані сутності

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const bookKey in book) {
//  if (book.hasOwnProperty(bookKey)) {
//    console.log(`${bookKey} has property`)
//  }
//
// }
// const keys = Object.keys(book)
// // const value = Object.values(book)
// console.log(value)

// for(const key of keys) {
//   // console.log(key)
// }
//

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };
//
// const {apples,grapes,bread,cheese} = goods
//
// console.log(`is ${grapes}`)



// const entries  = Object.entries(goods)
// console.log(entries)

//
//
// for (const book of books){
//   const bookAuthor = [];
//   bookAuthor.push(book.rating)
//   console.log(bookAuthor)
// }
// console.log(books.length)
//
// const first = { propA: 5, propB: 10, propC: 15 , };
// const second = { propC: 15, propA: 5 };
// const third = { ...second, ...first };
// console.log(third)

// const rgb = [200, 255, 100];
//
// const [red, ...colors] = rgb;
//
// // console.log(red,colors)
// let a = 100;
// let b = 200;
//
// [a,b] = [200,100]
// console.log("a", a)
// console.log("b", b)
// const getRest = (a,b,...rest) => {
//   console.log(a,b,rest)
// }
//
// getRest(5,6,7,3,4,7)

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
//
// const {location : {country}} = user;
// console.log(location,country)

// const vova = {
//   name : "vova",
//   age : 19,
//   active: true,
//
//   getStreet () {
//     console.log(this)
//   }
//
// }

//
// console.log(sveta,vova)
//
// const svetaKeys = Object.keys(sveta)
// //
// // for (let key of svetaKeys) {
// //   console.log(key)
// // }
// const generateId = () => {
//
//   return Math.random().toString().slice(2,5);
// }
//
// console.log(generateId())
// //
// const sayHello = () => {
//   console.log(this)
// }
//
// sayHello()
// //
// const likes = {
//   bad : 12,
//   good : 10,
//   nice : 2,
// }
//
// const values = Object.values(likes)
// const keys = Object.keys(likes)
// let total = {};
//
// for (let i = 0; i < values.length; i += 1){
//   total[values[i]] = keys[i]
// }
// console.log(total)
// //
// console.log(likes["bad"])

// let totalLikes = 0;
// const value = Object.values(likes)
//
//
// for( let item of value){
//   totalLikes += likes[item]
// }
//
// // for (const item of likes) {
// //
// // }
// console.log(totalLikes)

// const user = ['kolya', "petya", "olya" , "lena",]
// const cars = ["mazda","opel","scoda", "renault",]
// console.log(user)


//
// const bank = {}
//
// for (let i = 0; i < user.length; i += 1) {
//   bank[user[i]] = cars[i]
// }
// console.log(bank)
// let book = {};
// const inpKey = prompt("enter name")
// const inpValue =  prompt("enter value")
//
// book[inpKey] = inpValue;
//
// console.log(book)

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
// apartment.location = {
//   country : "Jamaica",
//   city : "Kingston"
// }
// apartment.area = 60;
// console.log(apartment)
//
// const emailInputName = "email";
// const passwordInputName = "password";
//
// const credentials = {
//   // Change code below this line
//   [emailInputName] : "henry.carter@aptmail.com",
//   [passwordInputName] : "jqueryismyjam",
//
//
//   // Change code above this line
// };

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
//
// const room = Object.create(apartment)
// room.number = 25;
//
// const keys = [];
// const values = [];
//
//
// for (const apartKey in apartment) {
//   console.log(apartment.hasOwnProperty(apartKey))
//
//
//   keys.push(apartKey)
//   values.push(apartment[apartKey])
// }
// console.log(keys)
// // console.log(values)
// function countProps(object) {
//   let propCount = 0;
//   for (const objectKey in object) {
//     if(object.hasOwnProperty(objectKey)){
//       propCount += 1
//     }
//   }
//
//   return propCount;
// }
// console.log(countProps({ name: "Mango", age: 2 }))
// function countProps(object) {
//   let propCount = 0;
// const keys = Object.keys(object)
//
//   for (const key of keys) {
//     propCount += 1
//   }
//   return propCount;
// }
// console.log(countProps({ name: 'Mango', age: 2 }))
//
//
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//
//   const values = Object.values(salaries)
//   for (let item of values){
//     totalSalary += item
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }))
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
//
// function getProductPrice(productName) {
//   for(const product of products) {
//     console.log(product.name)
//     if (product.name === productName) {
//       return product.price
//     }
//
//   }
//   return null
// }
// function getAllPropValues(propName) {
//
//   const result = [];
//
//   for (const product of products) {
//     if (product[propName]){
//       result.push(product[propName])
//     }
//
//   }
//   return result
// }
//
// getAllPropValues("quantity")
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// console.log(products.constructor)
//
// function calculateTotalPrice(productName) {
//   for (const product of products){
//
//     if(product.name === productName){
//       return product.price * product.quantity
//     }
//
//   }
//   return  0;
// }
//
// calculateTotalPrice("Radar") //повертає 5200

// =================BOOK==================
// let books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//     id : 1,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//     id : 2,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//     id : 3,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];
//
// const title = "Steven King"
//
// const myBook = {
// title,
// books,
//
// showTitle() {
//   for (let item of this.books){
//     // console.log(item.author)
//   }
// },
// //
// // addTitle (newBook) {
// //
// //  this.books.push(newBook)
// // },
// addTitle ({title, author, rating}) {
//  this.books = [...this.books, {title, author, rating, id : this.generateId() } ]
//
//
//   // return this.books.push({title, author, rating, id : this.generateId() })
//   // this.books.push(newBook) or //
// },
//
//   updateTitle (findElement, updateElement) {
//   for (const item of this.books){
//     if(item.title === findElement) {
//       item.title = updateElement
//     }
//   }
// },
//
// removeTitle (findElement){
// for (const item of this.books){
// if(item.title === findElement){
//   let i = this.books.indexOf(item)
//   this.books.splice(i)
// }
// }
// },
//
// generateId () {
//   return Math.random().toString().slice(2,4)
//   // return Date.now()
// }
//
// }
// myBook.showTitle()
// myBook.updateTitle("Сон смішної людини", "Сон пухлої людини")
//
// // const newBook = {
// //   title: "Best Fish",
// //   author: "Yurii",
// //   rating: 9.5,
// // }
//
// const randomBook = {
//   title: "Wtf",
//   author: "Olya",
//   rating: 10,
// }
//
// myBook.addTitle(randomBook)
//
// myBook.removeTitle("Сон смішної людини")
// // console.log(books)


//
// const number2 = [...number]
//
// console.log(number)
// console.log(number2)
// //
// console.log(number.constructor)
// const changeNumber = (findNumber,updateNumber) => {
//   for (let i = 0; i < number.length; i += 1 ){
//
//     if (number[i] === findNumber){
//       number[i]  = updateNumber
//     }
//   }
// }
// changeNumber(5,0)

// const removeNumber = (remNum) => {
//   for (let i = 0; i < number.length; i += 1 ){
//
//     if(number[i] === remNum){
//       number[i] = undefined
//       // const idx = number.indexOf(i)
//       //  number.splice(idx,1)
//
//     }
//   }
//
// }
//
// removeNumber(5)

// const objA = {
//   a: 1,
//   b: 2,
// }
// const objB = Object.create(objA)
//
// objA.a = 10;
// objB.b = 20;
// objB.a = 30;
//
// console.log(objA)
// console.log(objB)
//
// for (const objBKey in objB) {
//    if (objA.hasOwnProperty(objBKey)){
//      console.log('!!')
//    }
//
// }
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday : highYesterday,
//   today : highToday,
//   tomorrow : highTomorrow,
//   icon : highIcon =  "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// }
//
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// // Change code above this line
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#175888", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#a49b23", rgb: "255,235,59" },
// ];
//
// for (let {hex,rgb} of colors) {
//   console.log(rgb)
// }

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
// let {
//   today : {
//     low : lowToday,
//     high : highToday,
//     icon : todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow : {
//     low : lowTomorrow,
//     high : highTomorrow,
//     icon : tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   }
//
// } = forecast;
//
//
// console.log(highToday)
// const newBook = {title: "Best Fish", author: "Yurii", rating: 9.6}
//
// function findBook (obj) {
// let arr = [];
// arr.push(obj)
//   console.log(arr)
//
// }
// findBook(newBook)
// function calculateMeanTemperature(forecast) {
//   const todayLow = forecast.today.low;
//   const todayHigh = forecast.today.high;
//   const tomorrowLow = forecast.tomorrow.low;
//   const tomorrowHigh = forecast.tomorrow.high;

// const {
//   today : {
//     low : todayLow,
//     high : todayHigh
//   },
//   tomorrow :{
//     low: tomorrowLow,
//     high : tomorrowHigh,
//   }
//
// } = forecast
//
//
//
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} })

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {
// ...defaultSettings,
//   ...overrideSettings
// };
//
// console.log(finalSettings)
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };
//
// const third = {
//   ...first,
//   ...second
// };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//
//   const newJbj = {
//
//     completed,
//     category,
//     priority,
//     ...data
//   }
//   console.log(newJbj)
// }
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })

// function findMatches([...args],...rest) {
//   const matches = [];
//
// // for (let i = 0; i <= args.length; i += 1){
//
//   for (let i = 0; i < rest.length; i += 1){
//
//     if(args.includes(rest[i])){
//       matches.push(rest[i])
//     // }
//   }
// }
//   console.log(matches)
// }
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) ///[17, 89, 2]
// // findMatches([63, 11, 8, 29], 4, 7, 16)

// const cart = {
//   items: [],
//   getItems() {
//     return this.items
//   },
//   add({name,price}){
//
//    return this.items = [...this.items,{name,price}]
//
//   },
//   remove(productName){
//
//     for (let i = 0; i < this.items.length; i += 1){
//     const {name} = this.items[i]
//
//       if(name === productName){
//         return this.items.splice([i],1)
//       }
//     }
//   },
//   clear(){
//     return this.items = []
//   },
//
//   countTotalPrice() {
//     const {items} = this.items
//
//     let total = 0;
//     for (let {price} of items) {
//       total += price
//     }
// return total
//   }
//
// }
// cart.getItems();
// cart.add({name: "apple", price: 5});
// cart.add({name:"lemon", price: 5});
// cart.add({name:"Orange", price: 15});
// cart.add({name:"Strawberry", price: 40});
// cart.add({ name:"watermelon", price: 10});
//
//
// cart.remove("Orange");
// console.log(cart.items)
// console.log(cart.countTotalPrice())
// cart.clear();

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//
//     for (let i = 0; i < this.books.length; i++) {
//
//       if(this.books[i] === oldName) {
//         this.books[i] = newName;
//         return
//       }
//     }
//   },
// };
//
// bookShelf.updateBook("Haze", "Dungeon chronicles")  ///["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
// for (let i = 0; i < this.potions.length ; i += 1) {
//
//   if (this.potions[i] === oldName) {
//     this.potions[i] = newName;
//   }
//
// }
//   },
// };
//
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//    for (let item of this.potions){
//      console.log(item.name)
//    }
//
//   },
//
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }
//
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);
//
//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }
//
//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);
//
//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }
//
//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };
// // console.log(atTheOldToad.potions)
// atTheOldToad.getPotions();

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];
//
// const nameArr = students.map(student => student.name)
// console.log(nameArr)
//
//
// const values = [51, -3, 27, 21, -68, 42, -37];
//
// const positiveValues = values.filter(value => value > 22)
// console.log(positiveValues)

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ]
// const allCourses = students.flatMap(student => student.courses);
//
// console.log(allCourses)
//
// // const uniqueCourses = allCourses.filter((course, index, array) => array.indexOf(course) === index
// // );
// const uniqueCourses = allCourses.filter((course,index,array) => array.indexOf(course) === index)
//
// console.log(uniqueCourses)
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];
//
// const totalScore = students.reduce((total, student) => {
//
//   return total + student.score;
// }, 0);
//
//
// const scores = [61, 19, 74, 35, 92, 56];
//
// const copyScores = [...scores].sort((a,b) => a < b);
// const copyScores = [...scores].sort((a,b) => a < b);
//
document.addEventListener('click',buttonText)

function buttonText(){
  console.log("!!!!!")
}
