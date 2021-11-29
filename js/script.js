// Примитивы и сложные типы
// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// console.table(friends);

// console.log(friends[3]);

// const lastIndex = friends.length - 1;
// console.log(lastIndex);

// friends[1] = 'qweqwe';
// console.table(friends);

// let a = 10;
// let b = a;

// console.log(a);
// console.log(b);


// Ссылочное равенство (referential equality)
// const a = [1, 2, 3];
// const b = a;

// console.log('a', a);
// console.log('b', b);

// a[0] = 500;

// console.log('a', a);
// console.log('b', b);

// console.log(a === b);

// Перебор (итерация) масива
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// const lastIndex = friends.length - 1;

// for (let i = 0; i <= lastIndex; i += 1) {
//     friends[i] += '-1';
// }
// console.table(friends);

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);

// for (const friend of friends) {
//     console.log(friend);
// }


// // Задача 1
// // Посчитать общую сумму покупок в корзине

// const cart = [54, 28, 105, 70, 92, 17, 120];
// // Сделать переменную total до цикла
// let total = 0;
// // Перебрать массив
// for (let i = 0; i < cart.length; i += 1) {
//     // console.log(cart[i]);

// // Каждый элемент приплюсовать к total
//     total += cart[i];
// }
// console.log('Total: ', total);

// // Добавить налог к каждой ячейке масива
// const cart = [54, 28, 105, 70, 92, 17, 120];

// for (let i = 0; i < cart.length; i += 1) {
//     cart[i] = Math.round(cart[i] * 1.1);
// }
// console.log(cart);


// // Задача 2
// // Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве
//     const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// // Сделать переменную total
//     let total = 0;
// // Перебрать массив
//     for (const number of numbers) {
//     // console.log(number);
// // На каждой итерации проверить єлемент на чётность
//     if (number % 2 === 0) {
//         console.log(`${number} - чётное!`)
// // Если чётный - плюсуем к total
//     total += number;
//         }
//     }
//     console.log('Total: ', total);


// // Задача 3
// // Напиши скрипт поиска самого маленького числа в массиве,
// // при условии что числа уникальные (не повторяются).

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }

// console.log('smallestNumber: ', smallestNumber);


// Задача 4
// Напиши скрипт, который объединяет все элементы массива в 1 строковое значение.
// Элементов может быть произвольное количество.
// Пусть элементы массива в строке будут разделены запятой.

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';
// for (const friend of friends) {
//     string += friend + ',';
// }
// string = string.slice(0, string.length - 1);
// console.log(string);

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// const string = friends.join(', ');
// console.log(string);


// // Задача 4
// // Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
// // JavaScript --> jAVAsCRIPT

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);

//     // if (letter === letter.toLowerCase()) {
//     //     console.log('Эта буква в нижнем регистре!!! - ', letter);

//     //     invertedString += letter.toUpperCase();
//     // } else {
//     //     console.log('Эта буква в верхнем регистре!!! - ', letter);
//     //     invertedString += letter.toLowerCase();
//     // }

//     invertedString += letter === letter.toLowerCase() ? letter.toLocaleUpperCase() : letter.toLowerCase();
// }
// console.log(invertedString);


// Задача 5
// Делаем slug в URL из названия статьи (например на dev.to)
// Заголовок статьи состоит только из букв и пробелов

// 1 способ
// const title = "Top 10 benefits of React framework";

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

// 2 способ
// const title = "Top 10 benefits of React framework";

// const slug = title.toLowerCase().split(' ').join('-');
// console.log(slug);


// // Задача 6
// // Напиши скрипт который считает сумму элементов 2 массивов

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2);

// for (const number of numbers) {
//     total += number;
// }

// console.log(total);


