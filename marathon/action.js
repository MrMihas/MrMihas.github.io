


 // напоминаниечерез 24 часа





 function notifyMe(){

    var notification = new Notification("Сповіщення зі сторінки марафону",{

        body: 'Пройшло 24 години після Вашого останнього відвідування',

        dir: "ltr",

    });

 }



 let notific = function notificationMessage(){

  // Проверка поддержки браузером уведомлений

  if (!("Notification" in window)) {

    alert("Ваш браузер не підтримує сповіщення");

  }



  // Проверка разрешения на отправку уведомлений

  else if (Notification.permission === "granted") {

    // Если разрешено, то создаем уведомление

    setTimeout(notifyMe);

  }



  // В противном случае, запрашиваем разрешение

  else if (Notification.permission !== 'denied') {

    Notification.requestPermission(function (permission) {

      // Если пользователь разрешил, то создаем уведомление

      if (permission === "granted") {

        var notification = new Notification("Вітаю!");

      }

    });

  }



 }

    
    
    
    let form = document.querySelector('form');

    let formContainer = document.querySelector('.form-container');

   

    let div = document.querySelector('.div');

    let submitBtn = document.querySelector('.submit');

    let userName = document.querySelector('.name');

    let userDate = document.querySelector('.days');

    let userStart = document.querySelector('.date');

    let startOut = document.querySelector('.startM');





    let date = new Date();

    userStart = date.getUTCDate();

    month = date.getMonth();

    let months = Array(

            'Січня',

            "Лютого",

            "Березня",

            "Квітня",

            "Травня",

            "Червня",

            "Липня",

            "Серпня",

            "Вересня",

            "Жовтня",

            "Листопада",

            "Грудня"

    );



    // let userTime = document.querySelector('.time');

    let out = document.querySelector('.out');

    let btnRem = document.querySelector('.btn-rem');

    let header = document.querySelector('.header .title');



    let ending = document.querySelector('.ending'); //Дострокове закінчення

    let dayEnd = document.querySelector('.day-end');



    // hide form

    if (localStorage.getItem('hidden') === 'true') {

        formContainer.classList.add('none');

        ending.classList.remove('none');

        startOut.classList.remove('none');

         createHero();

    } 



    //проверка ключа дней на пустоту

    if(+localStorage.getItem('days') != null){

        createTable();

    } 



  

    function createHero(){

        let title = document.createElement('h1');

        let daysTitle = document.createElement('span');



        let str = localStorage.getItem('user');

        str.toLocaleLowerCase();

        let newStr = str.split(' ').join('');



        title.innerHTML = `Марафон #<span>${newStr}</span>`;

        header.append(title);

    }



   



    //дни марафона

    function createTable(){

        let days = +localStorage.getItem('days');

        let start = +localStorage.getItem('date');

        date.setDate(date.getDate() + days);
        let num = date.getMonth();

        startOut.innerHTML = `Почато ${start} ${months[month]} закінчення ${date.getDate()} ${months[num]} ${date.getFullYear()}`;

        for(let i = 0; i <= days -1 ;i++){



                    let label = document.createElement('label');

                   

                    label.classList.add('disabled');

                    let li = document.createElement('input');

                    li.setAttribute('type', 'checkbox');

                    li.className = 'list';
                    
                    
                    li.setAttribute('disabled', '');

                    li.setAttribute('value',i + 1 );

                    label.append(li);

                    label.innerHTML += `День ${i + 1}`;

                   div.appendChild(label);        

                }

    }

   





    let list = document.querySelectorAll('.list');

    let countDowmDenied = 1;

    list.forEach(elems => {

        let flag = elems.getAttribute('value');

        if(localStorage.getItem(countDowmDenied) == flag){
            console.log(countDowmDenied);
            ++countDowmDenied;
            
        }


   if(flag == countDowmDenied){
    elems.removeAttribute('disabled');
    elems.removeAttribute('checked');
    elems.parentNode.classList.remove('disabled');

   }

        //проверка отмеченого дня

        if(localStorage.getItem(flag)  === elems.getAttribute('value')){

      
            elems.setAttribute('disabled', '');

            elems.setAttribute('checked','true');

            elems.classList.add('ch');

        } 

        

        if(elems.checked){

            elems.closest('label').classList.add('done');

        }



        //отмечать после указанного времени

        let time = new Date();

        let currentTime = time.getDate();

       if(+localStorage.getItem('time') >= currentTime){

        

       }




        elems.addEventListener('click', function(){
            
            if( localStorage.getItem('currentTime') == currentTime ||currentTime < localStorage.getItem('currentTime')  ){
                startOut.classList.add('att');
                startOut.innerHTML = "<strong>Точно не сьогодні. Приходь завтра</strong>";
                return false;
                
            }

        if(confirm(`Закінчити ${ elems.getAttribute('value')}-й день марафону?`)){





                    localStorage.setItem(flag, flag);
                    localStorage.setItem('currentTime', currentTime);

                    elems.setAttribute('disabled', '');

                    elems.classList.add('ch');



                    if(elems.checked){

                        elems.closest('label').classList.add('done');

                        

                    }                  

                   // оповещение об окончании дня

                        dayEnd.innerHTML = `День <b>${ elems.getAttribute('value')}</b> завершено`;

  

                        setTimeout(()=>{

          
                            location.reload();

                        }, 2000);





                    // alert('День '+ elems.getAttribute('value') + " завершено");      

                }

        });



    });

    






    //очистка по клику

    let str = document.querySelectorAll('.ch');



    console.log(str.length);

    if(str.length === +localStorage.getItem('days') && str.length > 0){

      

        // clearTimeout(notific);

        dayEnd.innerHTML = `Марафон завершено`;



        setTimeout(() => {

           

        if(confirm(' Видалити прогресс?')){

            setTimeout(() => {

                localStorage.clear(); 

                location.reload();

            }, 4000);

            countDowm();

        } 

     

      }, 2000);



      function countDowm(){

        let e = 3;

        let g = setInterval(()=>{

            dayEnd.innerHTML = `Видаляємо прогресс через ${e}c`;

            --e;

         

        }, 1000);



        setTimeout(()=>{

                clearInterval(g);

        },4000);

      }

    } else if( str.length > 0){

        let tm = 60 * 1000 *60 *24;

         setTimeout(()=>{

             notific();

         },tm);

    } else{

clearTimeout(notific);

    }



  

   


//добавляем данные в Localstorage

    submitBtn.addEventListener('click', addToStorage);



    function addToStorage(e) {



        // проверка вводимых значений

        if (userName.value == '' || userDate.value == 0 || userDate.value > 100 || userDate.value == '' || userDate.value < 0) {

            

            e.preventDefault();

            out.innerHTML = "Невірно вказані данні. Ви не ввели назву марафону, або некорректно ввели число. Число має бути від 1 до 100"; 

            out.classList.remove('none');

            if(userName.value == ''){

                userName.classList.add('b-red');

            } else{

                userName.classList.remove('b-red');

            }

            if(userDate.value == ''){

                userDate.classList.add('b-red');

            } else{

                userDate.classList.remove('b-red');

            }

            return false;

        } 

        

        

        else {

            localStorage.setItem('user', userName.value);

            localStorage.setItem('days', userDate.value);

            localStorage.setItem('date', userStart);

            // localStorage.setItem('time', userTime.value);

            localStorage.setItem('hidden', true);



            userName.value == '';

            userDate.value == '';

                

            

        }

    }



    //удалить через n-время



    let removeTime = 24*60*60 * (+localStorage.getItem('days') + 1) * 1000;

    



   function removeAfer(){

    setTimeout(() => {

        localStorage.clear(); 

    }, removeTime); //  время в миллисекундах



   }



    ending.addEventListener('click', function(){

        if(confirm('Ви хочете раніше закінчити?')){

            setTimeout(() => {

                localStorage.clear(); 

                location.reload();

            }, 3000);

        }

    });






function renderCalendar(year, month, tbody, endDateStr) {
  const months = [
    "Січень","Лютий","Березень","Квітень","Травень","Червень",
    "Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"
  ];

  const now = new Date();
  const startDay = new Date(year, month, 1).getDay() || 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const endDate = endDateStr ? new Date(endDateStr) : null;

  let day = 1, html = "<tr>";

  for (let i = 1; i <= 42; i++) {
    if (i < startDay || day > daysInMonth) {
      html += "<td class='empty'>&nbsp;</td>";
    } else {
      const cellDate = new Date(year, month, day);
      let classes = [];

      if (
        now.getDate() === day &&
        now.getMonth() === month &&
        now.getFullYear() === year
      ) {
        classes.push("today");
      }

      if (
        endDate &&
        cellDate.getDate() === endDate.getDate() &&
        cellDate.getMonth() === endDate.getMonth() &&
        cellDate.getFullYear() === endDate.getFullYear()
      ) {
        classes.push("finish-day");
      }

      html += `<td class="${classes.join(" ")}">${day}</td>`;
      day++;
    }

    if (i % 7 === 0) html += "</tr><tr>";
  }

  html += "</tr>";

  tbody.innerHTML = html;
  document.querySelector(".month-name").textContent = `${months[month]} ${year}`;
}

function setupCalendarNavigation() {
  const now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth();
  const tbody = document.querySelector("#calendar tbody");

  // Дістаємо стартову дату і кількість днів
  const savedDays = +localStorage.getItem("days");
  const startDay = +localStorage.getItem("date");
  const startMonth = now.getMonth();
  const startYear = now.getFullYear();

  let endDateStr = null;

  if (savedDays) {
    const endDate = new Date(startYear, startMonth, startDay);
    endDate.setDate(endDate.getDate() + savedDays - 1);
    endDateStr = endDate.toISOString();
  }

  renderCalendar(year, month, tbody, endDateStr);

  document.querySelector(".prev").onclick = () => {
    if (month === 0) { month = 11; year--; } else month--;
    renderCalendar(year, month, tbody, endDateStr);
  };

  document.querySelector(".next").onclick = () => {
    if (month === 11) { month = 0; year++; } else month++;
    renderCalendar(year, month, tbody, endDateStr);
  };
}

setupCalendarNavigation();
