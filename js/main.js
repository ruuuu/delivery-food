let cartButton = document.querySelector('#cart-button');// нашли кнопку Корзина по id сохранили 

let modal = document.querySelector('.modal');//нашли элемент с классом .modal 

let closeButton = document.querySelector('.close');//Кнопка закрытия Крестик

console.log(cartButton);



cartButton.addEventListener("click", function(event){//браузер начинает сдлать за кликом по кнопке cartButton, когда случается клик, выполянется функция
    //console.log("Тф кликнтул по кнопке");//при каждом нажатии кнопки, будет выводить это всообщение
    modal.classList.add('is-open');//при каждом нажатии на кнпоку,  modal добавляем класс is-open              
})


closeButton.addEventListener("click", ToggleModal);//отследиваем клмк по кнпоке closeButton, вызыываем фукнцию ToggleModal




//либо напсиать вот такую фунуи и вызывать ее:
function ToggleModal(){
    modal.classList.toggle('is-open');// если у элемента modal есть класс is-open, то его убирают иначе добавляют
}


//new WOW().init();





//day1 : Атворизация

//console.log(document);
//console.dir();

let buttonAuth = document.querySelector('.buttun-auth');// Кнопка Войти

let modalAuth = document.querySelector('.modal-auth');//мод окно

let closeAuth = document.querySelector('.close-auth');//кнпока закрытяи кретсик 

let logInForm = document.querySelector('#logInForm');//форма аворизации, берем по id

let loginInput = document.querySelector('#login'); //сохраеям поле Логин по id

let userName = document.querySelector('.user-name');//span элемент


let buttonOut = document.querySelector('.button-out');//кнопка Выйти


let login = '';



//modalAuth.classList.add('hello');
//console.log(modalAuth.classList.contains('hello'));//выведет true, если элемент содержит класс  .hello, в противном случае false

//modalAuth.classList.remove('hello');//удаляет у элемента modalAuth класс hello

//console.log(modalAuth.classList.contains('hello'));

//console.dir(modalAuth);//отображаетэлемент  в виде объекта то етсь как div.modal-auth



function modalToggleAuth(){
    modalAuth.classList.toggle('is-open');//если у элмента modalAuth есть класс is-open, то он уберется, иначе добавится элементу
}


//вешаем событие на кнпоку Войти: на одном элементе(buttonAuth) обработчкиов может бють много
//buttonAuth.addEventListener("click", function(event){//браузер начинает сдлать за кликом по кнопке buttonAuth, когда случается клик, выполянется функция
//console.log("Тф кликнтул по кнопке");//при каждом нажатии кнопки, будет выводить это всообщение
//modalToggleAuth();//вызоыв функици  переклбчения класса         
//})



function authorized(){//функция для авторзиованного
    //console.log('Авторизован');
    userName.textContent = login;//элементу userName доавляем текст
    
    buttonAuth.style.display = 'none'; //не отобажаем кнопку buttonAuth
    userName.style.display = 'inline';//отобаржаем элемент userName
    buttonOut.style.display = 'block'; //отобаржаем элемент
}


function nonauthorized(){//функция для неавторзиованного
    console.log('Неавторизован');

    function logIn(event){
        //console.log(event);//выводи объект
        event.preventDefault();//отменяем стандртное поведение отправки фомы
        login = loginInput.value;//забиарем из поля то что ввел клиент
        modalToggleAuth();//вызываем функию закрытия окна
        checkAuth();//вызываем функицю
    }

    buttonAuth.addEventListener("click", modalToggleAuth);// по клику на buttonAuth, вызывается функция modalToggleAuth()

    closeAuth.addEventListener("click", modalToggleAuth);// по клику на closeAuth, вызывается функция modalToggleAuth()

    logInForm.addEventListener("submit", logIn)//добавляем событе отправки форме, при этом вызываетс функция logIn

}


function checkAuth(){
    
    if (login){//если true то 
        authorized();//вызов фукнции опсианно выше

    }
    else {
        nonauthorized();//вызов фукнции опсианно выше
    }
}


checkAuth();