
let w=$(window).width();
let h=$(window).height();
let namePage=$('.namePage');


console.log("w:"+$(window).width());
console.log("h:"+$(window).height())


$(namePage).remove();//delete name page


if(namePage.text()=='Login'){
if(h<=1200 && w>=700){
 $("#main-page").css(
   {
     'height':'151vh',
     'width':'100%'
   } 
 );
 $(".formLogin").css({
   'top':'20%',
   'left':'20%'
 })
 alert("h<=1200 && w<=1200")
}
else if(h<=1200 && w<700){


 $("#main-page").css(
   {
     'height':'180vh',
     'width':'100vh'
   } 
 );
 $('.btnCreateAccount').css("top",'100%')
 $(".formLogin").css({
   'top':'23%',
   'left':'15%'
 })
 alert("h<=1200 && w<700")
}
}
else if(namePage.text()=='index'){
$("body").css("padding-right","0")
  if(h<=1200 && w<=600){
    $('#SectionForm').css({
     "left":"0%",
     "top":"20%"
    })
   }
   else  if(h<=1200 && w<=1000){
    $('#SectionForm').css({
     "left":"10%",
     "top":"20%"
    })
   }

}



    $('.hamburger').click(function() {
      $('.navigation__mobile').toggleClass('navigation__mobile--active');
    });
    $('.navigation__close').click(function() {
      $('.navigation__mobile').toggleClass('navigation__mobile--active');
    });
    $('.mobile-menu-link').click(function() {
      $('.navigation__mobile').toggle('navigation__mobile--active');
    });

    $("#main-menu").on("click","a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 500);
    });
    $("#mobile-menu").on("click","a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 500);
    });
