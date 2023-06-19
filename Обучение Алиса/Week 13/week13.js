//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
const currentDate = new Date();
console.log(currentDate);

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
const currentYear = new Date().getFullYear();
console.log(currentYear);

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
const currentMonth = new Date().getMonth();
console.log(currentMonth);

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
const currentDay = new Date().getDate();
console.log(currentDay);

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
const birthday = new Date(2023, 10, 29, 19,40);
console.log(birthday);

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
let futureDate = new Date();
futureDate.setMonth(6);
futureDate.setDate(24);
console.log(futureDate);


//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate

let diffDate = futureDate-currentDate;
let diffDateDay = Math.floor( diffDate/(1000 * 60 * 60 * 24));
console.log(diffDateDay);

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
let pastDateTimestamp = Date.now()- (5*1000*60*60*24);
let pastDate = new Date (pastDateTimestamp)
console.log(pastDate);

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
let differentDate = currentDate - pastDate;
console.log(Math.floor( differentDate/(1000 * 60 * 60 * 24))); 

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
let nextWeek = new Date();
nextWeek.setDate(22)
console.log(nextWeek);

//Задание 11
// Выведите в консоль день недели для nextWeek
console.log(nextWeek.getDay());

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
const futureYear = new Date().getFullYear() + 5;
console.log(futureYear);

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
let futureDateInFutureYear = birthday;
futureDateInFutureYear.setFullYear(2024);
console.log(futureDateInFutureYear);

//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
let diffYear = futureDateInFutureYear.getFullYear() - new Date().getFullYear()
console.log(diffYear);

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = '2023-06-15T08:30:00.000Z';
const newDate = new Date (Date.parse(strDate)) 
console.log(newDate);


//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
const strDateTimestamp = Date.now (Date.parse(strDate));
console.log(strDateTimestamp);

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования 
//является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const date = '2023/06/15';
const wrongDate = new Date(date);
if (wrongDate ===NaN){
    console.log('Неправильный формат даты');
} else {
    console.log('Правильный формат даты');
}

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;
if (number>0) {
    console.log('Число положительное');
} else {
    console.log('Число отрицательное');
}

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
if (number%2===0){
    console.log('Четное число');
}else{
    console.log('Нечетное число');
}
//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
if (number%3===0){
    console.log('Число кратно 3');
} else {
    console.log('Число не кратно 3');
}
//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
let numberString = String (number);
const numbLen = numberString.length;
if (numbLen===1){
    console.log('Число однозначное');
} else {
    console.log('Число многозначное');
}


//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
if (numbLen===2){
    console.log('Число двухзначное');
} else {
    console.log('Число не двузначное');
}


//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if (number>0 || number === 0){
    console.log('Является');
} else {
    console.log('Не является');
}

//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
if (number%5===0 || number%7 === 0){
    console.log('Является');
} else {
    console.log('Не является');
}

//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if (number<0 || number === 0){
    console.log('Правда');
} else {
    console.log('Ложь');
}

//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if (number>0 && numbLen === 3){
    console.log('Является трёхзначным положительным числом');
} else {
    console.log('Не является трёхзначным положительным числом');
}

//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего 
//дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
const numberDay = prompt('Введите число от 1 до 7 (это к заданию 27)');
let numberUser = numberDay.valueOf();

switch (numberUser) {
    case '1':
        numberUser = 'Понедельник'
        break;
    case '2':
        numberUser = 'Вторник'
        break;
    case '3':
        numberUser = 'Среда'
        break;
    case '4':
        numberUser = 'Четверг'
        break;
    case '5':
        numberUser = 'Пятница'
        break;
    case '6':
        numberUser = 'Суббота'
        break;
    case '7':
        numberUser = 'Воскресенье'
        break;
    default:
        numberUser = 'Неизвестный день недели';
        break;
}
console.log(numberUser); 

//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название
// этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = 's'.toLowerCase();
let fullName;
switch (direction) {
    case 'w':
        fullName = 'Запад'
        break;
    case 'n':
        fullName = 'Север'
        break;
    case 's':
        fullName = 'Юг'
        break;
    case 'e':
        fullName = 'Восток'
        break;
    default:
        fullName = 'Неизвестное направление'
        break;
}
console.log(fullName); 
