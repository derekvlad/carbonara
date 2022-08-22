$(function (){
    $('.slider').slick({
        dots: true,
        arrows: false,
    });

    $('.menu__btn, a').on('click',function(){
        $('.list').toggleClass("list--active")
        $('.menu__btn').toggleClass("menu__btn--active")
    });
});