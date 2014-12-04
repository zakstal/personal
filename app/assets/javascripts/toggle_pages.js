(function () {
  $(document).ready(function(){
    this.currentTab = $('#intro')
    var that = this;
      $('.side-nav').on('click', function(event) {

        var tabContent = $(event.target).data('id')
        console.log(tabContent, event.target)
        that.currentTab.addClass("hidden")
        that.currentTab = $('#' + tabContent)
        that.currentTab.removeClass("hidden")

        var headNavLocation = that.currentTab.data('id');

        $('#head-nav').css('top', headNavLocation)
      });
    });
})();
