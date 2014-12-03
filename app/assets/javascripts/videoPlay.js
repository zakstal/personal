
(function () {
  $(document).ready(function(){
      $('.project-image').on("mouseover","video", function(event) {
        console.log(event.currentTarget, "moseover")
        event.currentTarget.play()

      });

      $('.project-image').on("mouseout","video", function(event) {
        console.log(event.currentTarget, "moseover")
        event.currentTarget.pause()
        console.log("in functions function")
      });
    });

})();
