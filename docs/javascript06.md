---
id: javascript06
title: Строки
sidebar_label: Строки
---
В JavaScript любые текстовые данные являются строками. Однако, не забывайте, что в строке могут быть записаны и числа. Пожалуй, из всех типов данных строками вы будете пользоваться наиболее часто. Разберем все варианты создания новой строки.

## Одинарные или двойные кавычки

Для создания строки используются либо ‘одинарные’, либо “двойные” кавычки. 

```jsx
let single = 'Hello World';
let double = "Hello World";
```

Можно пользоваться и теми, и другими, главное, если вы начинаете строку одинарной, хотя внутри могут быть двойные, завершить ее надлежит также одинарной. И, соответственно, с двойными кавычками.

```jsx
let double = "Don't you think so, d'Artagnan?";
let single = '"I think so, indeed!" - cried he.';
```

## Обратный слэш

Если внутри строки используются те же кавычки, что стоят и снаружи, то их нужно экранировать при помощи обратного слэша - так называемого «символа экранирования». Он добавляется перед входящей в строку кавычкой \’ , чтобы она не обозначала окончание строки.

```jsx
let backslash = 'It\'s not complicated'; // It's not complicated
```

Заметим, что обратный слеш \ служит лишь для корректного прочтения строки интерпретатором, но он не записывается в строку после её прочтения. Когда строка сохраняется в оперативную память, в неё не добавляется символ \. Вы можете явно увидеть это в выводах.


## Обратные кавычки

В написании строки можно обойтись и без обратного слэша, если использовать \`обратные\` кавычки.

```jsx
let backticks = `It's not complicated`; // It's not complicated
```

Одинарные и двойные кавычки работают, по сути, одинаково, а если использовать обратные кавычки, то в такую строку мы сможем вставлять произвольные выражения, обернув их в ${…}:

```jsx
function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
```

Еще одно преимущество обратных кавычек – они могут занимать более одной строки. 

```jsx
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // список гостей, состоящий из нескольких строк
```

Многострочные строки также можно создавать с помощью одинарных и двойных кавычек, используя так называемый «символ перевода строки», который записывается как \n:

```jsx
let guestList = "Guests:\n * John\n * Pete\n * Mary";

alert(guestList); // список гостей, состоящий из нескольких строк
```

Все спецсимволы начинаются с обратного слеша \ .

## Длина строки

Свойство length содержит длину строки:

```jsx
alert( 'My\n'.length ); // 3
```

Обратите внимание, \n — это один спецсимвол, поэтому здесь всё правильно: длина строки 3.

## Доступ к символам

Существует два способа добраться до конкретного символа в строке. Первый символ занимает нулевую позицию. В первом способе используется метод charAt():

```jsx
return 'cat'.charAt(2); // вернёт "t"
```

Получить символ также можно с помощью квадратных скобок:

```jsx
return 'cat'[2]; // вернёт "t"
```

Квадратные скобки — современный способ получить символ, в то время как charAt существует в основном по историческим причинам.

## Строки неизменяемы

Содержимое строки в JavaScript нельзя изменить. Нельзя взять символ посередине и заменить его. Как только строка создана — она такая навсегда.
Можно создать новую строку и записать её в ту же самую переменную вместо старой.

```jsx
let str = 'Hi';
str = 'h' + str[1]; // заменяем строку
alert( str ); // hi
```

## Изменение регистра символов

Чтобы написать строчными или заглавными буквами, используйте методы toLowerCase() и toUpperCase() . 

```jsx
alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface
```

Если мы захотим перевести в нижний регистр какой-то конкретный символ:

```jsx
alert( 'Interface'[0].toLowerCase() ); // 'i'
```

## Построение строки

Чтобы построить строку из существующих строк, используйте знак плюс (+) для объединения строк.

```jsx
let name = 'Mary ';
let activity = 'drink tea';
let bio = 'Our guest ' + name  +  activity +'.';
bio; // Our guest Mary drink tea.
```

Теперь попробуйте построить строку сами.

```jsx live
function learnJavaScript () {
  let name = 'John';
  let age = '15';
  let country = 'USA';
  let enjoyment = 'trevel';
  let slogan = '"Don\'t worry, be happy!"';
  let bio = 'My name is ' + name + '. I am ' +  age + ' years old. I\'m from ' + country + '. I like ' + enjoyment + ', and my slogan for life: ' + slogan +'.';
bio;
 return <h2>{bio}</h2>
 }
```

И (+=) для присвоения с объединением.

```jsx
let str = '123'; str += 456;
str;
```

## Вопросы:

Как в JavaScript не записываются строки?

1. В одинарных кавычках

2. В обратных слэшах

3. В обратных кавычках

Для чего в строке не используется обратный слэш?

1. Для экранирования

2. Для записи спецсимволов

3. Для окончания строки

Найдите строку с ошибкой

1. let str = \`It's not complicated\`;

2. let str ="'I think so, indeed!' - cried he.";

3. let str = 'My slogan: "Don't worry, be happy!"';

Выберете «символ перевода строки»

1. "\n"

2. "\"

3. "\\*"

Какую букву вернет `return 'sport'[3];`?

1. "o"

2. "r"

3. Ничего не вернет

Как изменить символ в строке JavaScript?

1. Изменить строку

2. Добраться до символа и заменить его

3. Создать новую строку и записать её в ту же самую переменную вместо старой

Какой метод используется, чтобы сделать буквы заглавными?

1. alert( 'Interface'.toUpperCase() );

2. alert( 'Interface'[0].toLowerCase() );

3. alert( 'Interface'.toLowerCase() );

Какой знак используется для объединения строк?

1. "="

2. "+"

3. "+="


## ССылки:

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures)
2. [Код для подростков: прекрасное руководство по программированию для начинающих, том 1: Javascript - Jeremy Moritz ](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/types)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Alena-Maitri"><img src="https://avatars1.githubusercontent.com/u/72432063?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Alena Yanbukhtina</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=Alena-Maitri" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->


[![Become a Patron!](/img/logo/patreon.png)](https://www.patreon.com/bePatron?u=31769291)
