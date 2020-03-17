
$(window).on("load", function () {
  $('body,html').scrollTop(0)
  $(".pre-loader").fadeOut(500, function () {
      $(this).remove();
      $('body').css("overflow-y", "visible");


  });
});

  // AOS.init();
  // new WOW().init();
$(function() {


  $(window).scroll(function () {
      if ($(window).scrollTop() > $(".upper-bar").innerHeight() ) {
        $(".nav-bar").addClass("fixed");
        $(".zx-main-slider").addClass("mr-top");
        $(".nav-bar .logo").addClass("logo-shrink");
        $(".zx-search-form").addClass("zx-search-form-top");
        $(".user-info").addClass("user-info-top");
        $(".nav-list").addClass("nav-list-top");
    } else {
        $(".nav-bar").removeClass("fixed");
        $(".zx-main-slider").removeClass("mr-top");
        $(".nav-bar .logo").removeClass("logo-shrink");
        $(".zx-search-form").removeClass("zx-search-form-top");
        $(".user-info").addClass("user-info-top");
        $(".nav-list").removeClass("nav-list-top");
    }
    
    });

  // $('a[data-scroll]').on("click",function (e){
  //   e.preventDefault();    
    
  //   $("html, body").animate({
  //     scrollTop: $($(this).attr("data-scroll")).offset().top
  //   }, 1000);
  // });

  $('.zx-main-slider .owl-Carousel').owlCarousel({
  autoPlay:true,
  items:1,
  loop:true,
  margin:10,
  stagePadding:0,
  smartSpeed:450,
  rtl:true,
  nav:false,
  dots:true,
});
$('.categories .zx-contain .owl-Carousel').owlCarousel({
  autoPlay:false,
  items:7,
  loop:false,
  margin:6,
  stagePadding:0,
  smartSpeed:450,
  rtl:true,
  nav:false,
  dots:false,
  responsive:{
    0:{
        items:2,
        loop:true,
        dots:true
    },
    600:{
        items:3,
        loop:true,
        dots:true
    },
    1000:{
        items:7
    }
  }
});

$('.sp-offers .owl-Carousel').owlCarousel({
  autoPlay:true,
  items:5,
  loop:true,
  margin:25,
  stagePadding:0,
  smartSpeed:450,
  rtl:true,
  nav:false,
  dots:false,
  responsive:{
    0:{
        items:1,
        loop:true,
        dots:true
    },
    600:{
        items:3,
        loop:true,
        dots:true
    },
    1000:{
        items:5
    }
  }
});
$('.co-companies .companies-logos .owl-Carousel').owlCarousel({
  autoPlay:false,
  items:7,
  loop:false,
  margin:6,
  stagePadding:0,
  smartSpeed:450,
  rtl:true,
  nav:false,
  dots:false,
  responsive:{
    0:{
        items:2,
        loop:true,
        dots:true,
        margin:12
    },
    600:{
        items:4,
        loop:true,
        dots:true
    },
    1000:{
        items:7
    }
  }
});


// search popup

$(".nav-bar .for-mobile .zx-search-btn").on("click", function() {
  $(".zx-search-popup").fadeIn();
  $("html, body").css({"overflow-y":"hidden"});
});
$(".zx-search-popup .zx-search-form").on("click", function(e) {
  e.stopPropagation();
});
$(".zx-search-popup").on("click", function() {
  $(".zx-search-popup").fadeOut();
  $("html, body").css({"overflow-y":"visible"});
});


// fixed menu

$(".nav-bar .for-mobile .menu").on("click", function() {
  $(".fixed-menu-container").fadeIn();
  $(".fixed-menu").animate({"right":"0"});
  $("html, body").css({"overflow-y":"hidden"});
});
$(".fixed-menu-container .fixed-menu").on("click", function(e) {
  e.stopPropagation();
});
$(".fixed-menu-container .fixed-menu .nav-list .close").on("click", function() {
  $(".fixed-menu-container").fadeOut();
  $(".fixed-menu").animate({"right":"-260px"});
  $("html, body").css({"overflow-y":"visible"});
});
$(".fixed-menu-container").on("click", function() {
  $(".fixed-menu-container").fadeOut();
  $(".fixed-menu").animate({"right":"-260px"});
  $("html, body").css({"overflow-y":"visible"});
});

if ($(window).width() < 992) {
$(".footer .contact-us .zx-contain .contact-info h3").on("click", function() {
  $(this).toggleClass("active");
  $(this).siblings("ul").slideToggle();
});
}

});
