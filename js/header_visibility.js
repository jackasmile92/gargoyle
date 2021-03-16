$(window).scroll(function(){
var condition =$('.contact').offset().top;

if($(document).scrollTop() > condition){
    $('.header').addClass('header--hidden');
}else{
    $('.header').removeClass('header--hidden');
}
});