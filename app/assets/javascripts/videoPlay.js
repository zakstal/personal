
(function () {
  if (typeof window.PageFunctions === "undefined") {
    window.PageFunctions = {};
  }
  var playVideo = PageFunctions.videoPLay = function () {};

  playVideo.prototype.play = function () {

      $('.project-image').on("mouseover","video", function(event) {
        console.log(event.currentTarget, "moseover")
        event.currentTarget.play()

      });

      $('.project-image').on("mouseout","video", function(event) {
        console.log(event.currentTarget, "moseover")
        event.currentTarget.pause()

      });
  };
})();
