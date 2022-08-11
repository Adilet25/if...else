//! Условные операторы
//! тернарный оператор
//! условие ? () : ()
//1
// let currentuser = true;
// currentuser
//   ? alert("Добро пожаловать")
//   : alert("зарегистрировайтесь или зайдите в свой аккаунт");

//2
// let password = prompt("enter password");
// let passwordConfirm = prompt("confirm password");
// password === passwordConfirm
//   ? alert("Вы успешно подвердиил свой пароль")
//   : alert("Пароли не совпадают");

//3
// let age = prompt("how old are u");
// age >= 18 ? console.log("Добро пожаловать") : console.log("доступ запрещен");

//4
// let role = "admin";
// role === "admin"
//   ? alert("Вы можете редактировать группу")
//   : alert("у вас нету прав");

//5
// let productsCount = 10;
// productsCount > 0
//   ? alert(`у вас в корзине ${productsCount} товаров`)
//   : alert("Корзина пустая");

//! if ... else
//1
// let name = prompt("Введите имя");
// if (name === "John") {
//   alert("Привет John");
// }

//2
// let age = 20;
// let canDrive = null;

// if (age > 17) {
//   canDrive = true;
// } else {
//   canDrive = false;
// }
// console.log(canDrive);

//3
// let startTime = 9;
// let arrive = 9;
// if (arrive >= startTime) {
//   console.log("can");
// } else {
//   console.log("cant");
// }

//4
// let num1 = +prompt("enter u num1");
// let operator = prompt("enter operator");
// let num2 = +prompt("enter u num2");
// if (operator === "+") {
//   alert(num1 + num2);
// } else if (operator === "-") {
//   alert(num1 - num2);
// } else if (operator === "*") {
//   alert(num1 * num2);
// } else if (operator === "/") {
//   alert(num1 / num2);
// } else "Ошибка";

//! switch case
// let season = +prompt("enter season");
// switch (season) {
//   case 1:
//     console.log("Winter");
//     break;
//   case 2:
//     console.log("Spring");
//     break;
//   case 3:
//     console.log("Summer");
//     break;
//   case 4:
//     console.log("Autumn");
//     break;
//   default:
//     console.log("choose number 1-4");
// }

//CREATE, READ, UPDATE, DELETE -> CRUD - operations
// let action = "CREATE";
// switch (action) {
//   case "CREATE":
//     alert("создан профиль");
//     break;
//   case "READ":
//     alert("есть отображения");
//     break;
//   case "UPDATE":
//     alert("профиль отредактирован");
//     break;
//   case "DELETE":
//     alert("профиль удален");
//     break;
//   default:
//     alert("Действие не относится к CRUD");
// }

// let day = prompt("выберите день недели");
// switch (day) {
//   case "1":
//     console.log("ПН");
//     break;
//   case "2":
//     console.log("ВТ");
//     break;
//   case "3":
//     console.log("СР");
//     break;
//   case "4":
//     console.log("ЧТ");
//     break;
//   case "5":
//     console.log("ПТ");
//     break;
//   case "6":
//     console.log("СБ");
//     break;
//   case "7":
//     console.log("ВС");
//     break;
//   default:
//     console.log("Это не день недели");
// }

//!TASK START
// let favDrink = "coffee";
// switch (favDrink) {
//   case "beer":
//     console.log("Чрезмерное употребление алкоголя вредит вашему здоровью ");
//     break;
//   case "vodka":
//     console.log("Чрезмерное употребление алкоголя вредит вашему здоровью ");
//     break;
//   case "coffee":
//     console.log("Кофеин вреден для сердца ");
//     break;
//   case "milk":
//     console.log("Поздравляю! Молоко очень полезное ");
//     break;
//   default:
//     console.log("К сожалению такого напитка нет в списке");
// }

// let favDrink = 'beer';

// switch (favDrink) {
//   case 'beer':
//     console.log('Чрезмерное употребление алкоголя вредит вашему здоровью');
//     break;
//   case 'vodka':
//     console.log('Чрезмерное употребление алкоголя вредит вашему здоровью');
//     break;
//   case 'coffee':
//     console.log('Кофеин вреден для сердца');
//     break;
//   case 'milk':
//     console.log('Поздравляю! Молоко очень полезное');
//     break;
//   default:
//     console.log('К сожалению такого напитка нет в списке');
// }
//!TASK END

//! логическая И - &&
// let bread = "lepeshka";
// let prod2 = "milk";
// if (bread === "lepeshka" && prod2 === "milk") {
//   alert("u took correct products");
// } else {
//   alert("it is unccorrect bread or milk");
// }

//!логическая ИЛИ - ||
// let prod = "baton";
// if (prod === "lepeshka" || prod === "baton") {
//   alert("correct");
// } else {
//   alert("uncorrect");
// }

//!10
//!22
// let time = prompt("time ");
// if (time >= 10 && time <= 22) {
//   alert("open");
// } else {
//   alert("close");
// }

//!данные из БД
//email:pwer
//password:pwer

// const email = prompt("write email addres");
// const password = prompt("write password");
// if (email === "pwer" && password === "pwer") {
//   alert("u logined to u acc");
// } else {
//   alert("u password or email uncorrect");
// }

// const email = prompt("write email addres");
// const password = prompt("write password");
// // console.log(email, password);
// // console.log(Boolean(email));
// if (email === null || password === null || email === "" || password === "") {
//   alert("did u wrote something");
// } else {
//   // alert("we r haves data");
//   if (email === "pwer" && password === "pwer") {
//     alert("u logined to u acc");
//   } else {
//     alert("u password or email uncorrect");
//   }
// }

// const email = prompt("write email addres");
// const tries = 3;
// let password = prompt("write password");
// if (password === "pwer") {
//   alert("password is correct");
// } else {
//   password = prompt("write u password again");
//   console.log(password);
//   if (password === "pwer") {
//     alert("password is correct");
//   } else {
//     alert("u acc was banned");
//   }
// }

// let email = prompt("write email addres");
// if (email === "pwer") {
//   let password = prompt("write password");
//   if (password === "pwer") {
//     alert("logged in");
//   } else {
//     alert("please write u password again");
//   }
// }

// let answer = confirm("вы хотите покинуть игру?");
// console.log(answer);
// if (answer) {
//   alert("вы покинули игру");
// } else {
//   alert("вы остались в игре");
// }

//инкремент - увеличить на один (++)
//декремент - уменьшить на один (--)

// let answer = confirm("вы хотите поставить лайк?");
// let likes = 5;
// if (answer) {
//   likes++;
//   alert(`ваш лайк был ${likes},спасибо`);
// }
// answer = confirm("вы хотите поставить лайк?");
// if (answer) {
//   likes++;
//   alert(`ваш лайк был ${likes},спасибо`);
// }
// answer = confirm("вы хотите поставить лайк?");
// if (answer) {
//   likes++;
//   alert(`ваш лайк был ${likes},спасибо`);
// }
// answer = confirm("вы хотите поставить лайк?");
// if (answer) {
//   likes++;
//   alert(`ваш лайк был ${likes},спасибо`);
// }

// let tasksInClassroom = confirm("вы сделали дз из классрума?");
// let tasksOnPlatform = confirm("вы сделали дз из мейкерс курсес?");
// if (tasksInClassroom && tasksOnPlatform) {
//   alert("у вас будет высокий кипиай");
// } else {
//   alert("у вас будет низкий кипиай");
// }

//momentum , teamflow
// let homework = "teamflow";
// if (homework === "momentum" || homework === "teamflow") {
//   alert("у вас 100 баллов");
// } else {
//   alert("у вас 0 баллов");
// }
