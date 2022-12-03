# Tic-tac-toe_game 

## «Игра Крестики-нолики (Tic-tac-toe)» [ссылка на страницу](https://nfdmitry.github.io/Noemi-blog/)

## Фронтенд часть проекта реализована при помощи HTML/CSS, логика реализована на JavaScript.

## Принцип работы игры:

Когда страница загружается, вызывается функция startGame. Функция определяет кто ходит первый, затем создается и отрисовывается игровое поле.

Когда игрок кликает на игровом поле, происходит вызов функции click. Ставится метка игрока в этом поле, отрисовывается поле на экране. 

Далее идет проверка, не выиграл ли игрок. Если выиграл, то появляется поздравление победителя, а если ещё нет — передается ход следующему игроку.

## Внутреннее устройство игры делится на три части:

- логическая модель игры;
- отрисовка логической модели на экране (реализовано);
- реакция на действия игрока (реализовано).

Игровое поле — таблица 3х3 клетки. Игровое поле реализовано в виде массива массивов.
Для отрисовки на экране нового состояния игрового поля вызывается функция renderBoard в которую передается информация о поле в виде массива.
Если игра заканчивается победой одного из игроков, вызывается функция showWinner в которую передается игрок-победитель.
