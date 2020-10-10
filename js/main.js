let cartButton = document.querySelector('#cart-button');// нашли кнопку Корзина по id сохранили 

let modal = document.querySelector('.modal');//нашли элемент с классом .modal 

let closeButton = document.querySelector('.close');//Кнопка закрытия Крестик

console.log(cartButton);



cartButton.addEventListener("click", function(event){//браузер начинает сдлать за клком по кнопке cartButton, когдаслучается клик, выполянется функция
    //console.log("Тф кликнтул по кнопке");//при каждом нажатии кнопки, будет выводить это всообщение
     modal.classList.add('is-open');//при каждом нажатии на кнпоку,  modal добавляем класс is-open              
})


closeButton.addEventListener("click", ToggleModal);//отследиваем клмк по кнпоке closeButton, вызыываем фукнцию ToggleModal
                                         



//либо напсиать вот такую фунуи и вызывать ее:
function ToggleModal(){
    modal.classList.toggle('is-open');
}


new WOW().init();








