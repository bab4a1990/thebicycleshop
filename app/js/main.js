import $ from 'jquery';



$(function(){
    $('#item-s').click(function(){
        $('#item-f').slideToggle();
    });

});



$(function(){
    $('#item-s1').click(function(){
        $('#item-f1').slideToggle();

    });
});


$(function(){
    $('#item-s2').click(function(){
        $('#item-f2').slideToggle();
    });
});



$(document).ready(function(){
    $(".menu,.menu-header").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 2000);
    });
});


// $(document).ready(function(){
//   $('.owl-carousel').owlCarousel();
// });