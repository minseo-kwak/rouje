$(function(){
  //a tag 막기
  $('a[href="#"]').click(function(ignore){
    ignore.preventDefault();
    alert('서브 페이지는 준비 중입니다.');
  });

  //모바일 메뉴
  $('.btn-show-menu').click(function(){
    $(this).toggleClass('btn-hide-menu');
    $('#mobile-menu').fadeToggle();
    $('header').toggleClass('open', 400);
  });

  //탑 버튼
  $("#btn-top").click(function() {   
    $('html, body').animate({
      scrollTop : 0
     }, 500);
     return false;
     });

  // 메뉴 스크롤 막기
  $('#mobile-menu').on('scroll touchmove mousewheel', function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  });

  // 탭메뉴
  $('.tab > div').click(function() {
    var activeTab = $(this).attr('data-tab');
    $('.tab > div').removeClass('on');
    $('.tabcont').removeClass('on');
    $(this).addClass('on');
    $('#' + activeTab).addClass('on');
  });
})



//scroll animation
window.onscroll = function(){scrollFunction()};
    function scrollFunction() {
        if(document.body.scrollTop > 290 ||
            document.documentElement.scrollTop > 290){
                document.getElementById('navbar').style.top = '0';
                document.getElementById('btn-top').style.bottom = '25px';
            } else {
                document.getElementById('navbar').style.top = '-80px';
                document.getElementById('btn-top').style.bottom = '-40px';
            }
    }

// new-arrival
var slide = new Swiper(".newArrival", {
cssMode: true,
slidesPerView: 2.5,
spaceBetween: 20,
loop: true,
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
pagination: {
    el: ".newArrival .swiper-pagination",
    clickable: true,
},
mousewheel: true,
keyboard: true,
});

// footer-top
var swiper = new Swiper(".infoSwiper", {
    speed: 400,
    pagination: {
      el: ".infoSwiper .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });