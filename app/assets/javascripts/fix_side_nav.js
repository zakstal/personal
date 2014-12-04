
(function () {
  $(document).ready(function(){

  $('#side-navigation').css('left', -134 + "px")
  $(window).scroll(function() {
     if($(window).scrollTop() > 200) {
       var bodyWidth = $('body').width()
       var mainWidth = $('main').width()
       console.log("scroll")
       var leftMainMargin = ((bodyWidth - mainWidth)/2 )
      //  console.log(mainWidth, bodyWidth, leftMainMargin)
       var leftMainMarginPercent = ((leftMainMargin/bodyWidth) * 100)/2
       $('#side-navigation').removeClass('side-nav')
       $('#side-navigation').addClass('side-nav-fixed')
       $('#side-navigation').css('left', Math.ceil((leftMainMargin - 127)) + "px")
     }

     if ($(window).scrollTop() < 200) {
       $('#side-navigation').removeClass('side-nav-fixed')
       $('#side-navigation').addClass('side-nav')
       $('#side-navigation').css('left', -134 + "px")
     }
  });

  });
})();
