// Практика JavaScript

// Игра угадай ячейку на JavaScript
// Давайте теперь реализуем игру угадай ячейку. В этой игре будет дана таблица 10 на 10.
// Компьютер случайным образом запоминает 10 ячеек из этой таблицы.
// Игроку нужно кликать на клетки пока он не найдет все загаданные компьютером клетки.
// №1 Реализуйте описанную игру.
// let size = 10;
// function createTable(size) {
//     let digit = 1;
// 	let table = document.createElement('table');
// 	for (let i = 0; i<size; i++) {
//         let tr = document.createElement("tr")
// 		for (let j = 0; j < size; j++) {
//             let td = document.createElement("td")
//                 td.textContent = digit;
//                 ++digit
//                 tr.appendChild(td)   
// 		}
//         table.appendChild(tr)
// 	}
// 	return table;
// }
// let div = document.querySelector('#elem1');
// let table1 = createTable(size);
// div.appendChild(table1);
// let tds = document.querySelectorAll("td")
// function func(num, min, max){
//     let rez =[]
//     while(rez.length != num){
//         let rand = Math.floor(Math.random()*(max-min +1 ))+ min;
//         if(rez.indexOf(rand) == -1){
//             rez.push(rand)
//         }
//     }
//     console.log(rez)
//     let end = 0;
//     for(let td of tds){
//         td.addEventListener("click", function(){
//             if(end !=10){
//                 if(rez.includes(Number(td.textContent))){
//                 td.style.background = "green"
//                 ++end
//             }
//             else{
//                 td.style.background = "red"
//             }
//             }
//             else{
//                 alert("Вы отгадали все ячейки")
//             }
            
//         })

//     }
// }
// func(10, 1, 100)
// №2 Модифицируйте предыдущую задачу, добавив таймер обратного отсчета.
// Если игрок не успеет угадать числа за отведенное время - он проиграл.
// let size = 10;
// function createTable(size) {
//     let digit = 1;
// 	let table = document.createElement('table');
// 	for (let i = 0; i<size; i++) {
//         let tr = document.createElement("tr")
// 		for (let j = 0; j < size; j++) {
//             let td = document.createElement("td")
//                 td.textContent = digit;
//                 ++digit
//                 tr.appendChild(td)   
// 		}
//         table.appendChild(tr)
// 	}
// 	return table;
// }
// let div = document.querySelector('#elem1');
// let table1 = createTable(size);
// div.appendChild(table1);
// let tds = document.querySelectorAll("td")
// function func(num, min, max){
//     let rez =[]
//     while(rez.length != num){
//         let rand = Math.floor(Math.random()*(max-min +1 ))+ min;
//         if(rez.indexOf(rand) == -1){
//             rez.push(rand)
//         }
//     }
//     console.log(rez)
//     let end = 0;
//     for(let td of tds){
//         td.addEventListener("click", function(){
//             if(end !=10){
//                 if(rez.includes(Number(td.textContent))){
//                 td.style.background = "green"
//                 ++end
//             }
//             else{
//                 td.style.background = "red"
//             }
//             }
//             else{
//                 alert("Вы отгадали все ячейки")
//             }
//         })
//     }
// }
// func(10, 0, 100)
// let btn = document.createElement("button")
// btn.textContent = "start"
// let hhh = 10;
// let table = document.querySelector("table")
// let right = 0;
// table.classList.add("none")
// btn.addEventListener("click", function func2(){
//     table.classList.toggle("none");
//     let p = document.createElement("p")
//     let timer = setInterval(function(){
//         p.textContent = hhh--
//         div.prepend(p)
//         if(hhh < -1){
//             clearInterval(timer)
//             for(let td of tds){
//                 if(td.style.background == "green"){
//                     right++
//                 }
//             }            
//             alert(`Время вышло. Вы отгадали ${right} из 10 ячеек`)
//             table.classList.toggle("none")
//             p.textContent = ""
//         }
//     }, 1000)
//     btn.removeEventListener("click", func2)
// })
// div.appendChild(btn)

// Экранная клавиатура на JavaScript
// Давайте реализуем экранную клавиатуру. На ней должны быть кнопочки со всеми буквами и цифрами клавиатуры компьютера.
// Кликая мышкой по этим кнопочкам мы сможем вводить данные, например, при неработающей клавиатуре.
// №1 Реализуйте описанную клавиатуру.
// Пусть эта клавиатура будет привязана к какому-нибудь инпуту, то есть кликая по ней, мы будем вводить данные в этот инпут.
// let keyboard=document.querySelector(".keyboard");
// let inputField=document.querySelector("#input");
// let arr=[...'1234567890qwertyuiopasdfghjklzxcvbnm'];
// for (let i=0; i<arr.length; i++){
//     let span = document.createElement("span");
//     span.classList.add("buttonSimvol");
//     span.textContent=arr[i];
//     keyboard.appendChild(span)
//     span.addEventListener("click", function(){
//       inputField.value+=span.textContent
//     });
// };
// №2 Сделайте на вашей клавиатуре кнопку Caps Lock, которая будет делать так, чтобы все буквы переводились в верхний регистр.
// let keyboard=document.querySelector(".keyboard");
// let inputField=document.querySelector("#input")
// let arr=[...'1234567890qwertyuiopasdfghjklzxcvbnm'];
// let CapsLock = document.querySelector("#btnCapsLock");
// for (let i=0; i<arr.length; i++){
//     let span = document.createElement("span");
//     span.classList.add("buttonSimvol");
//     span.textContent=arr[i];
//     keyboard.appendChild(span)
//     span.addEventListener("click", function(){
//       inputField.value+=span.textContent
//     })
// }
// let toLower=true;
// let spans=document.querySelectorAll(".buttonSimvol");
// CapsLock.addEventListener("click", function(){
//     for(let span of spans){
//         if(toLower==true){
//             span.textContent=span.textContent.toUpperCase();
//         }else{
//             span.textContent=span.textContent.toLowerCase();
//         }
//     }
//     toLower=!toLower;
// })

// Линейный календарь на JavaScript
// №1 Выведите в виде списка ul все числа текущего месяца. Средствами CSS поставьте пункты списка в ряд.
// let numbersList = document.querySelector("#MonthNumbers");
// let currentMonth = new Date().getMonth();
// let daysInMonth = new Date(new Date().getFullYear(), currentMonth + 1, 0).getDate();
// for (let i = 1; i <= daysInMonth; i++) {
//   let listItem = document.createElement("li");
//   listItem.textContent = i;
//   numbersList.appendChild(listItem);
// }
// №2 Сделайте так, чтобы текущий день в календаре был выделен каким-нибудь цветом.
// let currentDate = new Date().getDate();
// let numbersList = document.querySelector("#MonthNumbers");
// let currentMonth = new Date().getMonth();
// let daysInMonth = new Date(new Date().getFullYear(), currentMonth + 1, 0).getDate();
// for (let i = 1; i <= daysInMonth; i++) {
// let listItem = document.createElement("li");
// listItem.textContent = i;
// if(i === currentDate) {
// listItem.style.backgroundColor = "green";
// }
// numbersList.appendChild(listItem);
// }
// №3 Сделайте так, чтобы над списком было написано название текущего месяца по-русски и номер года.
// let currentDate = new Date().getDate();
// let numbersList = document.querySelector("#MonthNumbers");
// let currentMonth = new Date().getMonth();
// let monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
// let currentYear = new Date().getFullYear();
// let currentMonthName = monthNames[currentMonth];
// let title = document.createElement("h2");
// title.textContent = currentMonthName + " " + currentYear;
// numbersList.before(title);
// let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
// for (let i = 1; i <= daysInMonth; i++) {
// let listItem = document.createElement("li");
// listItem.textContent = i;
// if(i === currentDate) {
// listItem.style.backgroundColor = "green";
// }
// numbersList.appendChild(listItem);
// }
// №4 Сделайте так, чтобы над календарем появились ссылки вперед и назад, позволяющие менять месяц.
// Месяц и год, выводимые над календарем, должны соответствовать отображаемому месяцу.
// let currentDate = new Date().getDate();
// let numbersList = document.querySelector("#MonthNumbers");
// let currentMonth = new Date().getMonth();
// let monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
// let currentYear = new Date().getFullYear();
// let currentMonthName = monthNames[currentMonth];
// let title = document.createElement("h2");
// title.textContent = currentMonthName + " " + currentYear;
// numbersList.before(title);
// let prevLink = document.createElement("a");
// prevLink.textContent = "предыдущий месяц";
// prevLink.href = "#";
// prevLink.addEventListener("click", function(event) {
//     event.preventDefault();
//     currentMonth--;
//     if (currentMonth < 0) {
//         currentMonth = 11;
//         currentYear--;
//     }
//     updateCalendar();
// });
// title.before(prevLink);
// let nextLink = document.createElement("a");
// nextLink.textContent = "следующий месяц";
// nextLink.href = "#";
// nextLink.addEventListener("click", function(event) {
//     event.preventDefault();
//     currentMonth++;
//     if (currentMonth > 11) {
//         currentMonth = 0;
//         currentYear++;
//     }
//     updateCalendar();
// });
// title.after(nextLink);
// function updateCalendar() {
//     title.textContent = monthNames[currentMonth] + " " + currentYear;
//     numbersList.innerHTML = "";
// let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
//     for (let i = 1; i <= daysInMonth; i++) {
//         let listItem = document.createElement("li");
//         listItem.textContent = i;
//         if (i === currentDate) {
//             listItem.style.backgroundColor = "green";
//         }
//         numbersList.appendChild(listItem);
//     }
// }
// updateCalendar();

// Поиск тегов на JavaScript
// Сейчас мы сделаем сайт, который будет помогать определить значение HTML тега.
// Пусть в этом скрипте будет инпут, в который пользователь будет вводить имя тега.
// После этого по нажатию на Enter под инпутом пусть выдается описание этого тега.
// №1 Продумайте, как удобнее всего хранить имена тегов и их описания в соответствии с поставленной задачей.
// №2 Реализуйте описанный сайт.
// let input = document.querySelector("#vvodNameTag");
// let result = document.querySelector(".result")
// let tegs={
//     p: "абзац",
//     span: "спан",
//     h2: "Заголовок 2-го уровня",
//     h1: "Заголовок 1-го уровня",
//     a: "Гиперссылка",
//     div: "Блочный элемент",
//     img: "Изображение",
//     input: "Поле ввода",
// }
// input.addEventListener("keypress", function(event){
//     if(event.key==="Enter"){
//         let tagN = input.value;
//         if(tegs[tagN]){
//             result.textContent = tegs[tagN]
//         }else{
//             result.textContent = "тег не найден"
//         }
//     }
// })

// Поиск исторических события на JavaScript
// Пусть мы хотим написать сайт, показывающий таблицу исторических событий за определенный год.
// Пусть год будет вводится в инпут. По нажатию Enter давайте выведем таблицу событий, случившихся в этот год.
// Пусть в качестве информации о событии мы хотим видеть дату, название и описание события.
// №1 Продумайте, как удобнее всего хранить исторические события.
// №2 Реализуйте описанный сайт.
// let input = document.querySelector("#input");
// let table = document.getElementById('table');
// let year1812 = [
//  {
//   date: '12.06.1812',
//   sob: 'Отечественная война',
//   opis: 'Отечественная война 1812 года – это война между Французской и Российской империями, которая проходила на территории России. '
//  },
// ]
//  let year1877=[
//     {
//   date: '12.04.1877',
//   sob: 'Русско-турецкая война',
//   opis: 'Русско-турецкая война 1877-1878 года – военный конфликт между Османской империей и Российской империей.'
//  }
// ];
// let year1904=[
//   {
// date: '27.01.1904',
// sob: 'Русско-японская война',
// opis: 'Русско-японская война (1904-1905) — война между Россией и Японией, которая велась за контроль над Маньчжурией, Кореей и портами Порт-Артур и Дальний.'
// }
// ];
// let year1914=[
//   {
// date: '28.07.1914',
// sob: 'Первая мировая война',
// opis: 'Первая мировая война - война между двумя крупными коалициями: государствами Антанты (Россия, Великобритания, Франция) и центральными державами (Германия, Австро-Венгрия, Турция).'
// }
// ];
// input.addEventListener("keypress", function func(event){
//     if(event.key==="Enter"){
//         table.innerHTML = "";
//         if(input.value=="1812"){
//             for (let history of year1812) {
//                 let tr = document.createElement('tr');
//                 let td1 = document.createElement('td');
//                 td1.textContent = history.date;
//                 tr.appendChild(td1);
//                 let td2 = document.createElement('td');
//                 td2.textContent = history.sob;
//                 tr.appendChild(td2);
//                 let td3 = document.createElement('td');
//                 td3.textContent = history.opis;
//                 tr.appendChild(td3);         
//                 table.appendChild(tr);
//             }
//         }else if(input.value=="1877"){
//             for (let history of year1877) {
//                 let tr = document.createElement('tr');
//                 let td1 = document.createElement('td');
//                 td1.textContent = history.date;
//                 tr.appendChild(td1);
//                 let td2 = document.createElement('td');
//                 td2.textContent = history.sob;
//                 tr.appendChild(td2);
//                 let td3 = document.createElement('td');
//                 td3.textContent = history.opis;
//                 tr.appendChild(td3);
//                 table.appendChild(tr);
//             }
//         }else if(input.value=="1904"){
//             for (let history of year1904) {
//                 let tr = document.createElement('tr');
//                 let td1 = document.createElement('td');
//                 td1.textContent = history.date;
//                 tr.appendChild(td1);
//                 table.appendChild(tr);
//                 let td2 = document.createElement('td');
//                 td2.textContent = history.sob;
//                 tr.appendChild(td2);
//                 let td3 = document.createElement('td');
//                 td3.textContent = history.opis;
//                 tr.appendChild(td3);
//                 table.appendChild(tr);
//             }
//           }else if(input.value=="1914"){
//             for (let history of year1914) {
//                 let tr = document.createElement('tr');
//                 let td1 = document.createElement('td');
//                 td1.textContent = history.date;
//                 tr.appendChild(td1);
//                 table.appendChild(tr);
//                 let td2 = document.createElement('td');
//                 td2.textContent = history.sob;
//                 tr.appendChild(td2);
//                 let td3 = document.createElement('td');
//                 td3.textContent = history.opis;
//                 tr.appendChild(td3);
//                 table.appendChild(tr);
//             }
//                   }else{
//             let tr = document.createElement('tr');
//             tr.textContent="событие не найдено";
//             table.appendChild(tr);
//         }
//     }
// });

// Гороскоп на JavaScript
// Сейчас мы реализуем сайт-гороскоп. Этот сайт будет выдавать гороскопы на сегодня.
// Пусть пользователь по заходу на сайт видит инпут, в который нужно вбить дату своего рождения.
// Пусть по нажатию Enter наш сайт выдаст пользователю гороскоп на текущий день за его знак Зодиака.
// Пусть также у нас будут радиокнопки: сегодня, завтра, послезавтра.
// Сделаем так, чтобы в зависимости от выбора выводился гороскоп на соответствующий день.
// Очевидно, что по умолчанию будет выбрано сегодня, но пользователь при желании может изменить свой выбор.
// №1 Продумайте, как вы будете хранить гороскопы в соответствии с поставленной задачей.
// №2 Реализуйте показ гороскопа за текущий день.
// №3 А теперь реализуйте работу радиокнопок, позволяющих выбрать день, за который нужно показать гороскоп.
// let input=document.querySelector(".input");
// let res=document.querySelector("#result");
// let horoscop ={
//     "сегодня":{
//         "овен": "Сегодняшний день вам стоит посвятить изучению чужих ошибок в ситуации схожей с вашей. Это не оставит вам времени на то, чтобы наделать собственных..",
//         "телец": "Сегодня совершенно неподходящий день для личного бизнеса, так что, если вам придется заниматься именно им, постарайтесь отложить все сколько-нибудь важные решения на потом.",
//         "близнецы": "Сегодняшний день чреват крупной ссорой с домашними. Постарайтесь уклониться от взаимных обвинений, и, главное, не начинайте первым..",
//         "рак": "Наслаждайтесь гармоничными отношениями в семье. Если же таковых почему-то не наблюдается, то сегодня самый подходящий день для того, чтобы первому сделать шаг к их налаживанию.",
//         "лев": "Сегодня мысли ваши могут оказаться несколько сумбурны, чувства - растрепаны, настроение - переменчиво.",
//         "дева": "Взаимоотношения с близкими нынче теплы, но могут стать горячими и начать взрываться. Таким качеством как объективность вы сегодня похвастаться не можете. Не позволяйте излишней подозрительности испортить вам жизнь.",
//         "весы": "Сегодня вы можете найти новые способы достижения своих целей.",
//         "скорпион": "Сегодня у вас может возникнуть желание улучшить свою физическую форму.",
//         "стрелец": Сегодня вы будете немного забывчивы. И рассеянны. Из дома лучше одному не выходить - еще заблудитесь.",
//         "козерог": "Сегодня вы можете испытывать желание расширить свой кругозор.",
//         "водолей": "Сегодня вам, возможно, будет трудно собраться с мыслями и еще труднее решиться на какие-либо активные действия. Не стоит стараться пересилить упрямый организм, он таких вещей не прощает..",
//         "рыбы": "Сегодня к вам и вашим действиям будет проявлен повышенный интерес со стороны. Скорректируйте их соответствующим образом..",
//     },
//     "завтра":{
//         "овен": "Вы ощутите необходимость сосредоточиться на себе и своих потребностях.",
//         "телец": "Сегодня вы должны будете держать себя в руках, причем строже, чем когда-либо ранее. Справиться с желанием отмочить что-нибудь эдакое будет неимоверно трудно..",
//         "близнецы": "Вам будет полезно сосредоточиться на отношениях с близкими людьми.",
//         "рак": "Вы можете испытывать чувство неуверенности или тревоги.",
//         "лев": "Сегодня вы сможете добиться значительно большего, нежели смели предполагать, если сумеете немного умерить самодовольство, и принять чью-то помощь. положения.",
//         "дева": "Вам может понадобиться больше времени для отдыха и восстановления сил.",
//         "весы": "Сегодня вас будет тянуть в дальние дали на поиски приключений. Впрочем, если первое желание (дали) может оказаться затруднительным для выполнения, то условий для удовлетворения второго вы сможете найти в избытке и дома.",
//         "скорпион": "Будет шанс восстановить романтические отношения, о разрыве которых вы сожалели.",
//         "стрелец": "В личной жизни вероятны перемены к лучшему.",
//         "козерог": "Завтра наступит благоприятный период для работы и учебы.",
//         "водолей": "Вряд ли что-то помешает вам осуществить планы, достичь важной целию.",
//         "рыбы": "Вас ждет непростой, но очень плодотворный день. ",
//     },
//     "послезавтра":{
//         "овен": "Сегодня ваши возможности будут весьма велики, но вы их не увидите и, соответственно, не сможете воспользоваться ими до тех пор, пока не сумеете освободиться от влияния ближайшего окружения. Лучшее средство в подобных случаях - расстояние..",
//         "телец": "Будет возможность обсудить важные вопросы с людьми, чье мнение для вас исключительно важно.",
//         "близнецы": "В начале дня ладить с окружающими будет труднее, чем обычно.",
//         "рак": "Именно благодаря умению замечать мелочи вы раньше других узнаете нечто важное, получите информацию, которая позволит достичь давно поставленной цели.",
//         "лев": "Не все будет складываться именно так, как хотелось бы, но непреодолимых преград на пути не возникнет, так что сохраняйте оптимизм и продолжайте двигаться вперед.",
//         "дева": "Любые решения, связанные с деньгами, стоит обдумать дважды.",
//         "весы": "Влияние позитивных тенденций будет преобладать и в личных отношениях. ",
//         "скорпион": "Удастся поладить и с теми, кто прежде не понимал вас и делал критические замечания по любому поводу.",
//         "стрелец": "Постарайтесь сегодня держаться подальше от больших скоплений людей. Особенно нежелательным является пребывание среди спортивных болельщиков. Велика вероятность несчастного случая..",
//         "козерог": "Вероятны новые знакомства, вдохновляющие встречи.",
//         "водолей": "У вас многое будет получаться хорошо, смелые начинания окажутся удачными.",
//         "рыбы": "Вероятны денежные поступления.",
//         }
// };
// input.addEventListener("keypress", function(event){
//     if(event.code==="Enter"){
//         let checkedRadio = document.querySelector('[name="day"]:checked');
//         let date = new Date();
//         if(checkedRadio.value=="сегодня"){
//             let dd= addZero(date.getMonth()+1)+"."+addZero(date.getDate());
//             alert(`сегодня ${dd} для ${znakZodiac(input.value)} прогноз: ${horoscop["сегодня"][znakZodiac(input.value)]}`)
//         }else if(checkedRadio.value=="завтра"){
            
//             let dd= addZero(date.getMonth()+1)+"."+addZero(date.getDate()+1);
//             alert(`завтра ${dd} для ${znakZodiac(input.value)} прогноз: ${horoscop["завтра"][znakZodiac(input.value)]}`)
//         }else{
           
//             let dd= addZero(date.getMonth()+1)+"."+addZero(date.getDate()+2);
//             alert(`послезавтра ${dd} для ${znakZodiac(input.value)} прогноз: ${horoscop["послезавтра"][znakZodiac(input.value)]}`)
//         }
        
//     }
// })
// function addZero(day){
//     if(day<9){
//         return "0" + day;
//     }else{
//         return ""+day;
//     }
// }
// function znakZodiac(date){
//     if(date>='03.21' && date<="04.20"){
//         return "овен";
//     }else if(date>='04.21' && date<="05.21"){
//         return "телец";
//     }else if(date>='05.22' && date<="06.21"){
//         return "близнецы";
//     }else if(date>='06.22' && date<="07.22"){
//         return "рак";
//     }else if(date>='07.23' && date<="08.21"){
//         return "лев";
//     }else if(date>='08.22' && date<="09.23"){
//         return "дева";
//     }else if(date>='09.24' && date<="10.23"){
//         return "весы";
//     }else if(date>='10.24' && date<="11.22"){
//         return "скорпион";
//     }else if(date>='11.23' && date<="12.22"){
//         return "стрелец";
//     }else if(date>='12.23' && date<="12.31" ||
//              date>='01.01' && date<="01.20" ){
//         return "козерог";
//     }else if(date>='01.21' && date<="02.19"){
//         return "водолей";
//     }else if(date>='02.20' && date<="03.20"){
//         return "рыбы";
//     }else{
//         alert("неверно введена дата")
//     }
// }

// Сайт предсказаний на JavaScript
// Сейчас мы сделаем сайт, который будет выдавать предсказания.
// Пусть на этом сайте будет кнопка, по нажатию на которую будет запускаться таймер, который будет каждые 0.1 секунд выводить в в какой-нибудь див случайное
//  число от 1 до некоторого максимального.
// Под дивом пусть будет другая кнопка, по нажатию на которую пользователь нашего сайта может остановить таймер и зафиксировать некоторое число в диве.
// Это число будет номером предсказания.
// После этого покажите пользователю предсказание с этим номером, а все лишние кнопки уберите с экрана, чтобы пользователь не мог получить еще одно
// предсказание.
// То есть на один заход на сайт - одно предсказание.
// №1 Продумайте, как удобнее хранить предсказания.
// №2 Реализуйте описанный сайт.
// №3 Сделайте так, чтобы предсказания были двух видов: хорошие и плохие. Сделайте так, чтобы плохие красились в красный цвет, а хорошие - в зеленый.
// let timer;
// let maxNumber = 8;
// let buttonStart=document.querySelector("#start");
// let buttonStop=document.querySelector("#stop");
// let result = document.getElementById('text')
// let arrpreds = [
// "Всё пойдёт не так, как задумывалось",
// "Давняя мечта сбудется",
// "Всё пойдёт не так, как задумывалось",
// "Давняя мечта сбудется",
// "Всё пойдёт не так, как задумывалось",
// "Давняя мечта сбудется",
// "Всё пойдёт не так, как задумывалось",
// "Давняя мечта сбудется",
// ]
// let predictionNumber = document.getElementById('timer');
// buttonStart.addEventListener("click", function(){
//     timer = setInterval(function(){
//         let randomNum = Math.floor(Math.random() * maxNumber) + 1;
//         predictionNumber.textContent = randomNum;
//     }, 100);
//     document.getElementById('start').classList.remove('active');
//     document.getElementById('stop').classList.add('active');

// })

// buttonStop.addEventListener("click", function(){
//             clearInterval(timer);
//             if(arrpreds[Number(predictionNumber.textContent)]=="Всё пойдёт не так, как задумывалось"){
//                 result.classList.add("red")
//                 result.textContent = "Ваше предсказание: " + arrpreds[Number(predictionNumber.textContent)];
            
//             }else{
//                 result.classList.add("green")
//                 result.textContent = "Ваше предсказание: " + arrpreds[Number(predictionNumber.textContent)];
//             }
//             document.getElementById('start').style.display = 'none';
//             document.getElementById('stop').style.display = 'none';
// })

// Автодополнение на JavaScript
// Сейчас мы реализуем автодополнение.
// Под этим термином понимается выпадающая подсказка при вводе текста в инпут.
// Давайте посмотрим на примере.
// Ниже я сделал инпут, в который можно ввести название страны.
// При этом, если ввести какие-то буквы, то под инпутом появится список стран, которые начинаются на введенную строку.
// При желании можно, чтобы не вводить целиком имя страны, кликнуть мышкой на любую страну и она появится в инпуте.
// Для этого, в общем-то, автодополнение и нужно.
// В примере для простоты я сделал только три страны: Belarus, Belgium и Bulgaria.
// №1 Скопируйте себе приведенный HTML и CSS коды. Реализуйте автодополнение согласно описанному алгоритму.
// let arr = ['Belarus', 'Belgium', 'Bulgaria'];
// let input = document.querySelector("#elem");
// let ul = document.querySelector("#list");
// input.addEventListener("input", function(){
//   ul.innerHTML = "";
//   let filtered = arr.filter(country => country.startsWith(input.value));
//    for(let elem of filtered){
//     let li = document.createElement('li');
//     li.textContent = elem;
//     li.addEventListener("click", function(){
//       input.value = elem;
//     });
//     ul.appendChild(li);
//   }
// });

// Спойлер на JavaScript
// Сейчас мы научимся делать спойлеры.
// Под спойлерами я понимаю блоки, которые можно развернуть, либо свернуть с помощью специальной ссылки.
// В следующем примере кода абзац с классом spoiler является спойлером, а ссылка с классом toggle должна по клику показывать или скрывать этот спойлер.
// №1 Скопируйте себе приведенный HTML и CSS коды. Реализуйте описанную работу спойлеров.
// let toggles = document.querySelectorAll('.toggle');
// for (let toggle of toggles){  
//     toggle.addEventListener('click', function(event){
//         event.preventDefault();
//         let spoiler= toggle.parentElement.nextElementSibling;
//         spoiler.classList.toggle('active');
//     });
// }
// Вкладки на JavaScript
// Сейчас мы реализуем вкладки. 
// №1 Скопируйте себе приведенный HTML и CSS коды. Реализуйте вкладки согласно описанному алгоритму.
// let menu = document.querySelectorAll('.menu a');
// let tabs = document.querySelectorAll('.tabs .tab');
// menu.forEach((tab, index) => {
//     tab.addEventListener('click', function(event) {
//         event.preventDefault();
//         menu.forEach(tab => tab.classList.remove('active'));
//         tabs.forEach(text => text.classList.remove('active'));
//         this.classList.add('active');
//         tabs[index].classList.add('active');
//       });
// }) 
// Аккордеон на JavaScript
// Давайте теперь реализуем аккордеон.
// Он похож на вкладки, перевернутые на бок. 
// При этом в аккордеоне можно закрыть текущую вкладку, если нажать на активную ссылку.
// №1 Скопируйте себе приведенный HTML и CSS коды. Реализуйте аккордеон согласно описанному алгоритму.
// let links = document.querySelectorAll('.link a');
// links.forEach(function(link) {
//   link.addEventListener('click', function() {
//     let tab = this.closest('.tab');
//     let isActive = tab.classList.contains('active');
//     if (isActive) {
//       tab.classList.remove('active');
//     } else {
//       let activeTab = document.querySelector('.tab.active');
//       if (activeTab) {
//         activeTab.classList.remove('active');
//       }
//       tab.classList.add('active');
//     }
//   });
// });