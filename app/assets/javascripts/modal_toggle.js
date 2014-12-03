(function () {
  $(document).ready(function(){
    var modelToggle = function(clickOn, modelTag) {
      $(clickOn).on("click", function (event) {
        event.preventDefault();
        console.log('model toggle')
        $('main').toggleClass('hidden')
        $(modelTag).toggleClass('hidden')
      });
    }

    modelToggle('.resume-link', '#resume-window');
    modelToggle('#resume-close', '#resume-window');

  //---------------toggle asteroids model------------------------

    modelToggle('figure', '#game-window');
    modelToggle('#asteroids', '#game-window');
    modelToggle('#asteroids-link', '#game-window');

  });
})();
