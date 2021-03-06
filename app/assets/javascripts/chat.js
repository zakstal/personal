(function () {
  $(document).ready(function(){

    var address = "http://www.zakstal.com"
    var that = this

  var thisChat = {
    isChatOn: false,
    chat: []
  }

    var checkIfInThiChat = function (arr) {
      console.log("in check")
      var unPostedMessages = []
      arr.forEach(function (message) {
          var index = thisChat.chat.indexOf(message.id)
          if (index === -1){
            if(message.from === 1) {
              thisChat.chat.push(message.id)
              unPostedMessages.push(message)
            }
          }
      });
      return unPostedMessages;
    }

//------------get incoming texts from the db---------

    var getTextsFromDb = function () {
      setInterval(function () {

          if (thisChat.isChatOn) {
            console.log('receive')
            $.ajax({
                type: "GET",
                url: address + "/chats/all",
                success: function (resp) {
                  // console.log("reset", resp[0].chat, "response")


                  checkIfInThiChat(resp).forEach(function(message) {
                    $('#text-frame').prepend('<div class="message-from-box message-box" >' + message.chat + '<div class="bubble-tail-right"><div></div>');
                  });
                }
            });
          }
        },3000)

    }




//-----------turns on or off ajax request to
              //the db if chat window is open or closed--------------

    this.isChatOn = false



    var toggleIsChatOn = function () {
      if (!thisChat.isChatOn){
        thisChat.isChatOn = true
        console.log('chat is on',thisChat.isChatOn)

        getTextsFromDb()

        $.ajax({
          type: 'POST',
          url: address + "/chats/destroy_all_chats",
          success: function (res) {
            console.log('chats deleted')
          }
        });

      } else {
        thisChat.isChatOn = false
        console.log('chat is off', thisChat.isChatOn)


      }
    }


//------------animation functions for "text me" click----------------

        var moveLetters = function (elementNum, classNumStart, interval) {
              setTimeout(function () {

                $('#c' + elementNum).toggleClass('c' + (classNumStart ))
                $('#c' + elementNum).toggleClass('c' + (classNumStart + 1))
              },(interval));
          }

          var moveLettersBack = function (elementNum, classNumStart, interval) {
                setTimeout(function () {
                  $('#c' + elementNum).toggleClass('c' + (classNumStart - 1))
                  $('#c' + elementNum).toggleClass('c' + (classNumStart ))
                },(interval));
            }

          var moveAllLetters = function ( numberOfPositions, interval) {
              for (var i = 0; i <= numberOfPositions; i++) {
                moveLetters(1,i + 1, i * interval)
                moveLetters(2,i + 2, i * interval)
                moveLetters(3,i + 3, i * interval)
                moveLetters(4,i + 4, i * interval)
                moveLetters(5,i + 5, i * interval)
                moveLetters(6,i + 6, i * interval)
                moveLetters(7,i + 7, i * interval)
              }
          }

          var moveAllLettersBack = function ( numberOfPositions, interval) {
              var j = 0
              for (var i = numberOfPositions; i > 0; i--) {
                moveLettersBack(1,i + 1, j * interval)
                moveLettersBack(2,i + 2, j * interval)
                moveLettersBack(3,i + 3, j * interval)
                moveLettersBack(4,i + 4, j * interval)
                moveLettersBack(5,i + 5, j * interval)
                moveLettersBack(6,i + 6, j * interval)
                moveLettersBack(7,i + 7, j * interval)
                j++
              }
          }


//------------toggle hide and show classes
                        //for text message input form------------------


    console.log($('#c1').css('left'), "css value of c1")
    var moveLettersBackAndForth = function () {

      $('#text-tab-click').on('click', function () {
        toggleIsChatOn();
        $('#text-frame').html("")

        $('#text-tab').toggleClass('text-tab-left');
        $('#text-tab').toggleClass('text-tab-right');
        $('#text-message-out').toggleClass('text-message-hide');
        $('#text-message-out').toggleClass('text-message-show');

        if ($('#text-message-submit').hasClass('text-message-submit-show')) {
          $('#text-message-submit').toggleClass('text-message-submit-hide');
          $('#text-message-submit').toggleClass('text-message-submit-show');
        } else {
          setTimeout(function() {
            $('#text-message-submit').toggleClass('text-message-submit-hide');
              $('#text-message-submit').toggleClass('text-message-submit-show');
          }, 200);
        }


        setTimeout(function() {
            $('#text-message-out').focus();
        },200)
//---------move letters if id c1 has off or on------
        var $c1 = $('#c1')

        if ($c1.data('id') === 'off') {
          moveAllLetters(4,50);
          $c1.data('id', 'on')
        } else {
          moveAllLettersBack(5,50)
          $c1.data('id', 'off')
        }

      });
    }


    moveLettersBackAndForth()


  $('#text-form').on('click','#text-message-submit', function (event) {
    console.log('here')
    event.preventDefault();
    var $words = $('#text-message-out');
    var $value = $words.val();
    $words.val("");
    $('#text-frame').prepend('<div class="message-to-box message-box" >' + $value + '<div class="bubble-tail-left"><div></div>')
    console.log($value,"here2",document.location.hostname);


      $.ajax({
        type: "POST",
        url: address + "/chats/send_out",
        data: { 'body':$value },
        success: function (resp) {
          console.log("sent", resp)
        }
      });
    });


  });
})();
