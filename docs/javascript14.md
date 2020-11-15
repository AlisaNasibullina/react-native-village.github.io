---
id: javascript14
title: Циклы
sidebar_label: Циклы
---

Цикл в JavaScript (да и во всех прочих языках) — это блок кода, который повторяет сам себя, пока известное условие остаётся
истинным. Условие — это всё, что программа проверяет, перед каждым перезапуском цикла.

Перед вами простейший вид цикла while (откройте пустую вкладку и новое окно консоли):
```jsx live
function learnJavaScript() {

let count = 0;  // count - счётчик
while (count < 10) {
    console.log('Счётчик показывает ' + count + ". Давайте добавим ещё 1.");
}
console.log('Да хватит уже считать!');
return;
}
```
Так что тут у нас происходит? Ну, сперва я бы хотел это у вас спросить — вдруг
вы смогли бы догадаться об этом, просто глядя на код? Если так, то просто заме-
чательно! Если нет, тоже не беда, я сейчас всё объясню.
yyсчётчик в нашем примере сперва имеет значение 0.
yyУсловием нашего цикла (оно прописано в скобках) задано, что блок с кодом бу-
дет повторять себя снова и снова до тех пор, пока (то есть собственно «while»)
счётчик меньше 10.
yyПоскольку начальное значение 0 меньше 10, код запускается.
yyКаждый раз интерпретатор заново проверяет условие; если условие всё ещё
«правка», то код будет запущен вновь (поэтому он и называется «цикл»).
yyКаждый раз мы увеличиваем значение счётчика на 1. Это очень важно, так как
в противном случае значение бы оставалось на 0, отчего наше условие (счётчик
< 10) также оставалось бы всегда истинным, а наш код бы зациклился навечно!
(Обратите внимание: если вы случайно запустите «вечную петлю», то вам при-
дётся перезапустить Chrome, чтобы продолжить работу.)
yyПоскольку счётчик с каждым циклом увеличивается на 1, то в итоге (после
10 циклов) он станет равным 10.
yyПосле этого интерпретатор вновь проверит условие (счётчик < 10) и, убедив-
шись, что оно теперь ложно, завершит цикл и перейдёт к финальным строчкам
нашего кода.



## Заключение



## Вопросы:


## Ссылки:

1. [MDN web docs - Function](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function)
2. [Learn.javascript.ru - Статья "Функции"](https://learn.javascript.ru/function-basics)
3. [Learn.javascript.ru - Статья "Функции-стрелки"](https://learn.javascript.ru/arrow-functions-basics)
4. [Анонимные и самовыполняющиеся функции в JavaScript](https://webformyself.com/anonimnye-i-samovypolnyayushhiesya-funkcii-v-javascript/)
5. [Developer.mozilla.org - Статья "Math"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math)
6. [Developer.mozilla.org - Статья "Стрелочные функции"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
7. [Basicweb.ru - Статья "JavaScript функции"](https://basicweb.ru/javascript/js_function.php)
8. [Javascript.ru - Статья "Функции"](https://javascript.ru/basic/functions)
9. [Код для подростков: прекрасное руководство по программированию для начинающих, том 1: Javascript - Jeremy Moritz ](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.png)](https://www.patreon.com/bePatron?u=31769291)

