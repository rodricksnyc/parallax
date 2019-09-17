$(document).ready(function () {

  //aos animations
  AOS.init();


  //calendar
  $(function () {
    $('#datetimepicker1').datetimepicker();
  });

  $(function () {
    $('#datetimepicker1').datetimepicker();
  });


  //my vertical carousel for videos
  $('.carousel .vertical .item').each(function(){


    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i=1;i<2;i++) {
      next=next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }

      next.children(':first-child').clone().appendTo($(this));
    }

  });



  let pageModule = {
    config: {
      classes: {
        container: '.container',
        wrapper: '.wrapper',
        flex: '.flexing',
        flexrelatve: '.flex-relative',
        close: '.close',
        nav: '.navbar',
        middle: '.w800',
        center: '.center',
        slide: '.homeSlider',
      },
      ids: {
        calendar: '#myCool'
      },
      timeout: {
        basic: 800,
        normal: 2000,
        long: 3500
      }
    },
    showContent: function(div){
      // show contents for divs if you want to here.
    },
    hideContent: function(div){
      // hide contents for divs if you want to here.
    },
    animateContent: function(div){
      // animate contents for divs if you want to here.
    },
    getNavFixedHeight: function(){
      var nav = pageModule.config.classes.nav
      // Calculate where to put the height for the nav when a scroll happens
      let fixedHeight = $(nav).height() // div.innerHeight -
      console.log(`fixed height is ${fixedHeight}`);
      return fixedHeight;
    },

    getMiddleFixedHeight: function() {
      var middle = pageModule.config.classes.middle

      let middleHeight = $(middle).height();
      console.log(`middle height is ${middleHeight}`);

      return middleHeight;
    },
    getCenterFixedHeight: function() {
      var center = pageModule.config.classes.center

      let centerHeight = $(center).height();
      console.log(`center height is ${centerHeight}`);

      return centerHeight;
    },
    getSlideFixedHeight: function() {
      var slide = pageModule.config.classes.slide

      let slideHeight = $(slide).height();
      console.log(`slide height is ${slideHeight}`);

      return slideHeight;
    },



    init: function() {
      // This is where we carry out our project
      let self = this;
      // Start the stuff. This could be your init file.
      console.log('this is started');

      //Initialize Aos animations. I think
      AOS.init();


    },

  }


  pageModule.init();


//closing calendar

  $("#myCool .close").on("click", function(){

    $(".moveThis").show();
    $(".moveThis2").show();
    $(".moveThis3").show();
    $('.slick-dots').show();


    $('#news').removeClass('animated slideInRight')
    $('#news').removeClass('flexing-scroll')
    $('#myCool').removeClass('animated slideInRight')

    $('#myCool').removeClass('flexing-scroll')

    $('#hiddenVideos').removeClass('animated slideInRight')
    $('#hiddenVideos').removeClass('flexing-scroll')


    $("html, body").animate({scrollTop: pageModule.getMiddleFixedHeight() + 100}, 1000);

    setTimeout(function(){
      $('#hiddenVideos').removeClass('bottomShadow');
      $('#myCool').removeClass('bottomShadow');
      $('#news').removeClass('bottomShadow');
    },1100);

    setTimeout(function(){
      $( "#myCool" ).slideToggle(1000);
      // $( "#news" ).slideToggle(1000);
      // $( "#hiddenVideos" ).slideToggle(1000);
    },100);


  });


  //closing videos
  $("#hiddenVideos .close3").click(function(){

    $(".moveThis").show();
    $(".moveThis2").show();
    $(".moveThis3").show();
    $('.slick-dots').show();


    $('#news').removeClass('animated slideInRight')
    $('#news').removeClass('flexing-scroll')
    $('#myCool').removeClass('animated slideInRight')

    $('#myCool').removeClass('flexing-scroll')

    $('#hiddenVideos').removeClass('animated slideInRight')
    $('#hiddenVideos').removeClass('flexing-scroll')


    $("html, body").animate({scrollTop: pageModule.getMiddleFixedHeight() + 100}, 1000);

    setTimeout(function(){
      $('#hiddenVideos').removeClass('bottomShadow');
      $('#myCool').removeClass('bottomShadow');
      $('#news').removeClass('bottomShadow');
    },1100);
    setTimeout(function(){
      $( "#hiddenVideos" ).slideToggle(1000);
      // $( "#news" ).slideToggle(1000);
      // $( "#myCool" ).slideToggle(1000);
    },100);


  });



  //closing the news div
  $("#news .close4").click(function(){

    $(".moveThis").show();
    $(".moveThis2").show();
    $(".moveThis3").show();
    $('.slick-dots').show();



    $('#news').removeClass('animated slideInRight')
    $('#news').removeClass('flexing-scroll')
    $('#myCool').removeClass('animated slideInRight')

    $('#myCool').removeClass('flexing-scroll')

    $('#hiddenVideos').removeClass('animated slideInRight')
    $('#hiddenVideos').removeClass('flexing-scroll')


    $("html, body").animate({scrollTop: pageModule.getMiddleFixedHeight() + 100}, 1000);

    setTimeout(function(){
      $('#hiddenVideos').removeClass('bottomShadow');
      $('#myCool').removeClass('bottomShadow');
      $('#news').removeClass('bottomShadow');
    },1100);
    setTimeout(function(){
      $( "#news" ).slideToggle(1000);
      // $( "#hiddenVideos" ).slideToggle(1000);
      // $( "#myCool" ).slideToggle(1000);
    },100);

  });

//opening the videos div


  $(document).on('click', ".openIt2", function(e) {

    console.log($('#hiddenVideos'))

    e.stopPropagation();



if ($('#news').is('.myNews', '.bottomShadow', '.animated', '.slideInRight') && $('#hiddenVideos').is('flexing-scroll'))  {


console.log('news is laeving and videos coming back in')

  $('#hiddenVideos').removeClass('flexing-scroll')
  $('#news').removeClass('animated slideInRight')

  $('#news').addClass('flexing-scroll')

  setTimeout(function(){

      $("#news").animate({"left": -$("#news").width()}, 600);
    // $('#hiddenVideos').addClass('animated slideInRight').show();
  }, 350);


  setTimeout(function(){
    $('#news').hide();
  }, 600);


  setTimeout(function(){
    $('#news').removeClass('bottomShadow')
    $('#hiddenVideos').addClass('bottomShadow')

    $('#hiddenVideos').addClass('animated slideInRight').show();
  }, 500);


}



else if ($('hiddenVideos').is('.bottomShadow', '.flexing-scroll') && $('#news').is('.myNews', '.animated', '.slideInRight')) {

  $('#hiddenVideos').removeClass('flexing-scroll')
  $('#news').removeClass('animated slideInRight')

  $('#news').addClass('flexing-scroll')


  setTimeout(function(){

  $("#news").animate({"left": -$("#myCool").width()}, 800);
  }, 50);

  setTimeout(function(){
    $('#news').hide();
  }, 800);


  setTimeout(function(){
    // $('#hiddenVideos').css('position','unset');
    $('#myCool').addClass('animated slideInRight').show();
  }, 200);


}



    else if

    ($('#hiddenVideos').is('.bottomShadow')) {

      console.log('videos has bottomShadow')

      $('#hiddenVideos').removeClass('flexing-scroll')
      $('#myCool').removeClass('animated slideInRight')

      $('#myCool').addClass('flexing-scroll')


      setTimeout(function(){

      $("#myCool").animate({"left": -$("#myCool").width()}, 800);
      }, 50);

      setTimeout(function(){
        $('#myCool').hide();
      }, 800);


      setTimeout(function(){
        // $('#hiddenVideos').css('position','unset');
        $('#hiddenVideos').addClass('animated slideInRight').show();
      }, 200);



    }

    else if

  (!$('#myCool').is('.bottomShadow')  && !$('#hiddenVideos').is('.bottomShadow') && !$('#news').is('.bottomShadow')) {

      console.log('videos does not have bottomShadow')

      $("#videos").css("pointer-events", "none");

      $(".moveThis").hide();
      $(".moveThis2").hide();
      $(".moveThis3").hide();
      $('.slick-dots').hide();
      $('#myCool').removeClass('animated slideDown').removeAttr('style');


      var divPosition = $('#anchorPoint').offset();
      $('html, body').animate({scrollTop: divPosition.top}, 1000);


      setTimeout(function(){
        $( "#hiddenVideos" ).slideToggle(1000);
        // $('#hiddenVideos').addClass('bottomShadow');
      },100);

      setTimeout(function(){

        $('#hiddenVideos').addClass('bottomShadow');
      },1000);

    }

    else if

  (!$('#myCool').is('.bottomShadow')  && !$('#hiddenVideos').is('.bottomShadow') &&  $('#myCool').is('.cool', '.flexing-scroll') && $('#news').is('.myNews' , '.bottomShadow' , '.animated' , '.slideInRight')) {
        console.log("fucker bitch")


        console.log('news is leaving and videos coming back in')


  setTimeout(function(){
        $('#news').css('left', 'auto');
        $('#myCool').css('left', 'auto');
        $('#myCool').removeClass('flexing-scroll')
      }, 50);


        setTimeout(function(){
          $('#hiddenVideos').removeClass('flexing-scroll')

          $('#news').removeClass('animated slideInRight')

          $('#news').addClass('flexing-scroll')
        }, 100);


          setTimeout(function(){

              $("#news").animate({"left": -$("#news").width()}, 900);
            // $('#hiddenVideos').addClass('animated slideInRight').show();
          }, 500);


          setTimeout(function(){
            $('#news').hide();
          }, 900);


          setTimeout(function(){
            $('#news').removeClass('bottomShadow')
            $('#hiddenVideos').addClass('bottomShadow')

            $('#hiddenVideos').addClass('animated slideInRight').show();
          }, 900);

      }

  else if

  ($('#myCool').is('.bottomShadow', '.cool', '.flexing-scroll') && $('#hiddenVideos').is('.flexing-scroll') && !$('#news').is('.bottomShadow'))  {

    console.log("my brain is fucked in the ass")

    setTimeout(function(){
    $('#myCool').css('left', 'auto');
  }, 100);


  setTimeout(function(){
    $('#hiddenVideos').removeClass('flexing-scroll')
    $('#myCool').removeClass('animated slideInRight')


    $('#myCool').addClass('flexing-scroll')
}, 100);


      setTimeout(function(){

    $("#myCool").animate(
      {
        "left": -$("#myCool").width()
      }
      , 900);
    }, 300);

      setTimeout(function(){
        $('#myCool').hide();
      }, 900);


      setTimeout(function(){
        // $('#hiddenVideos').css('position','unset');

        $('#myCool').removeClass('bottomShadow')
        $('#hiddenVideos').addClass('bottomShadow')

        $('#hiddenVideos').addClass('animated slideInRight').show();
      }, 600);



  }

else if


($('#myCool').is('.bottomShadow', '.cool', '.animated', '.slideInRight')  && $('#hiddenVideos').is('.flexing-scroll')) {

console.log("iam fucked")

setTimeout(function(){
$('#myCool').css('left', 'auto');
}, 100);


setTimeout(function(){
$('#hiddenVideos').removeClass('flexing-scroll')
$('#myCool').removeClass('animated slideInRight')
$('#myCool').addClass('flexing-scroll')
}, 100);


  setTimeout(function(){

$("#myCool").animate(
  {
    "left": -$("#myCool").width()
  }
  , 900);
}, 300);

  setTimeout(function(){
    $('#myCool').hide();
  }, 900);


  setTimeout(function(){
    // $('#hiddenVideos').css('position','unset');

    $('#myCool').removeClass('bottomShadow')
    $('#new').addClass('bottomShadow')

    $('#hiddenVideos').addClass('animated slideInRight').show();
  }, 600);

}


else if

($('#myCool').is('.cool', '.flexing-scroll') && $('#hiddenVideos').is('.bottomShadow' , '.animated' , '.slideInRight') && $('#news').is('.myNews', '.flexing-scroll')) {

console.log("sliding this bitch videos to left and sliding calendar back in fucker")
  setTimeout(function(){
  $('#hiddenVideos').css('left', 'auto');
  }, 100);



  setTimeout(function(){
  $('#myCool').removeClass('flexing-scroll')
  $('#hiddenVideos').removeClass('animated slideInRight')
  $('#hiddenVideos').addClass('flexing-scroll')
}, 100);


    setTimeout(function(){

  $("#hiddenVideos").animate(
    {
      "left": -$("#hiddenVideos").width()
    }
    , 900);
  }, 300);

    setTimeout(function(){
      $('#hiddenVideos').hide();
    }, 900);


    setTimeout(function(){

      $('#myCool').addClass('bottomShadow')
      $('#hiddenVideos').removeClass('bottomShadow')

      $('#myCool').addClass('animated slideInRight').show();
    }, 600);

}

else if

    ($('#myCool').is('.bottomShadow', '.cool', '.flexing-scroll') && !$('#hiddenVideos').is('.bottomShadow') && !$('#news').is('.bottomShadow'))   {

    console.log('mycool got the bottomShadow')


  // setTimeout(function(){
    $('#myCool').css('left', 'auto');
  // }, 50);



  // setTimeout(function(){
      $('#hiddenVideos').removeClass('flexing-scroll')
      $('#myCool').removeClass('animated slideInRight')


  // }, 50);

      // setTimeout(function(){
      $('#myCool').addClass('flexing-scroll')
      $("#myCool").animate({"left": -$("#myCool").width()}, 600);

    // }, 80);


      setTimeout(function(){
        $('#myCool').hide();
      }, 700);


      setTimeout(function(){
        $('#myCool').removeClass('bottomShadow')
        $('#hiddenVideos').addClass('bottomShadow')

        $('#hiddenVideos').addClass('animated slideInRight', 700).show();
      }, 50);

    }

    else if

    ($('#myCool').is('.cool' , '.flexing-scroll') && $('#news').is('.myNews' , '.flexing-scroll' , '.bottomShadow' , '.animated' , '.slideInRight') ) {

      console.log('this is some bullshit')

      setTimeout(function(){
        $('#myCool').css('left', 'auto');
        $('#news').css('left', 'auto');
        $('#myCool').removeClass('flexing-scroll')
        $('#news').removeClass('animated slideInRight').hide();
      }, 100);


        setTimeout(function(){
          $('#myCool').addClass('flexing-scroll')

        }, 400);


          setTimeout(function(){

              $("#myCool").animate({"left": -$("#myCool").width()}, 900);

          }, 600);


          setTimeout(function(){
            $('#myCool').hide();
          }, 900);


          setTimeout(function(){
            $('#news').removeClass('bottomShadow')
            $('#myCool').removeClass('bottomShadow')
            $('#hiddenVideos').addClass('bottomShadow')

            $('#hiddenVideos').addClass('animated slideInRight').show();
          }, 900);



    }



  });

//opening the calendar div

  $(document).on('click', ".openIt", function(e) {
    e.stopPropagation();

if

($('#myCool').is('.bottomShadow', '.cool', '.flexing-scroll')  && $('#news').is('.myNews' , '.bottomShadow' , '.animated' , '.slideInRight')) {

console.log("iam fucked")

setTimeout(function(){
$('#news').css('left', 'auto');
}, 100);


setTimeout(function(){
$('#myCool').removeClass('flexing-scroll')
$('#news').removeClass('animated slideInRight')


$('#news').addClass('flexing-scroll')
}, 100);


  setTimeout(function(){

$("#news").animate(
  {
    "left": -$("#news").width()
  }
  , 900);
}, 400);

  setTimeout(function(){
    $('#news').hide();
  }, 900);


  setTimeout(function(){

    $('#myCool').addClass('bottomShadow')
    $('#news').removeClass('bottomShadow')

    $('#myCool').addClass('animated slideInRight').show();
  }, 900);

}



else if ($('#myCool').is('.cool', '.flexing-scroll') && $('#hiddenVideos').is('.animated', '.slideInRight', '.bottomShadow'))  {

console.log('we are sliding videos over and calendar back into place')

setTimeout(function(){
$('#hiddenVideos').css('left', 'auto');
}, 100);



setTimeout(function(){
$('#myCool').removeClass('flexing-scroll')
$('#hiddenVideos').removeClass('animated slideInRight')
$('#hiddenVideos').addClass('flexing-scroll')
}, 100);


  setTimeout(function(){

$("#hiddenVideos").animate(
  {
    "left": -$("#hiddenVideos").width()
  }
  , 900);
}, 500);

  setTimeout(function(){
    $('#hiddenVideos').hide();
  }, 900);


  setTimeout(function(){

    $('#myCool').addClass('bottomShadow')
    $('#hiddenVideos').removeClass('bottomShadow')

    $('#myCool').addClass('animated slideInRight').show();
  }, 900);

}


else if

($('#myCool').is('.cool', '.flexing-scroll') && $('#hiddenVideos').is('.bottomShadow' , '.animated' , '.slideInRight') && $('#news').is('.myNews', '.flexing-scroll')) {

console.log("sliding this bitch videos to left and sliding calendar back in fucker")
  setTimeout(function(){
  $('#hiddenVideos').css('left', 'auto');
  }, 100);



  setTimeout(function(){
  $('#myCool').removeClass('flexing-scroll')
  $('#hiddenVideos').removeClass('animated slideInRight')
  $('#hiddenVideos').addClass('flexing-scroll')
}, 100);


    setTimeout(function(){

  $("#hiddenVideos").animate(
    {
      "left": -$("#hiddenVideos").width()
    }
    , 900);
  }, 500);

    setTimeout(function(){
      $('#hiddenVideos').hide();
    }, 900);


    setTimeout(function(){


      $('#myCool').addClass('bottomShadow')
      $('#hiddenVideos').removeClass('bottomShadow')

      $('#myCool').addClass('animated slideInRight').show();
    }, 900);

}


else if  ($('#myCool').is('.bottomShadow', '.cool', '.flexing-scroll') && $('#news').is('.myNews', '.animated', '.slideInRight') && $('#hiddenVideos').is('.animated', '.slideInRight', '.flexing-scroll')) {

  $('#hiddenVideos').removeClass('flexing-scroll')
  $('#myCool').removeClass('flexing-scroll')
  $('#news').removeClass('animated slideInRight')


  $('#news').addClass('flexing-scroll')

   console.log('do this shi until you get it right')

    setTimeout(function(){

  $("#news").animate(
    {
      "left": -$("#news").width()
    }
    , 800);
  }, 50);

    setTimeout(function(){
      $('#news').hide();
    }, 800);


    setTimeout(function(){



      $('#myCool').addClass('animated slideInRight').show();
    }, 200);

}

else if

  (!$('#myCool').is('.bottomShadow')  && !$('#hiddenVideos').is('.bottomShadow') && !$('#news').is('.bottomShadow')) {
        console.log('cool no bottomShadow')


        $("#videos").css("pointer-events", "all");


        $(".moveThis").hide();
        $(".moveThis2").hide();
        $(".moveThis3").hide();
        $('.slick-dots').hide();

        $('#myCool').removeAttr('style');
        $('#hiddenVideos').removeAttr('style');
        $('#news').removeAttr('style');


        var divPosition = $('#anchorPoint').offset();
        $('html, body').animate({scrollTop: divPosition.top}, 1000);



        setTimeout(function(){
          $( "#myCool" ).slideToggle(1000);
          $('#myCool').addClass('bottomShadow');

        },100);


      }

      else if

      ($('#hiddenVideos').is('.bottomShadow') && !$('#myCool').is('.bottomShadow') && !$('#news').is('.bottomShadow')) {
        console.log('videos has bottomShadow and myCool does not')

        $('#myCool').removeClass('flexing-scroll')
        $('#news').removeClass('animated slideInRight')

        $('#hiddenVideos').addClass('flexing-scroll')


      setTimeout(function(){
        $("#hiddenVideos").animate(
          {
            "left": -$("#hiddenVideos").width()
          }
          , 800);
        }, 50);

          setTimeout(function(){
            $('#hiddenVideos').hide();
          }, 800);


          setTimeout(function(){
            // $('#hiddenVideos').css('position','unset');
            $('#myCool').addClass('animated slideInRight').show();
          }, 200);

        }

else if



(!$('#myCool').is('.bottomShadow')  && !$('#hiddenVideos').is('.bottomShadow') && $('#news').is('.bottomShadow'))   {
  console.log('news has bottomShadow and myCool and videos does not')


setTimeout(function(){
    $('#news').css('left', 'auto');
  }, 100);


setTimeout(function(){
  $('#myCool').removeClass('flexing-scroll')
  $('#news').removeClass('animated slideInRight')
  $('#news').addClass('flexing-scroll')
}, 100);


  setTimeout(function(){
  $("#news").animate(
    {
      "left": -$("#news").width()
    }
    , 900);
  }, 400);



    setTimeout(function(){
      $('#news').hide();
    }, 900);


    setTimeout(function(){


          $('#myCool').addClass('bottomShadow')
          $('#news').removeClass('bottomShadow')
         $('#myCool').addClass('animated slideInRight').show();
    }, 900);

  }

else if

  ($('#myCool').is('.cool' , '.bottomShadow', '.flexing-scroll') && $('#news').is('.myNews', '.bottomShadow' , '.animated' , '.slideInRight')) {

  console.log("fuck me in the ass")


  setTimeout(function(){
  $('#news').css('left', 'auto');
}, 100);


  setTimeout(function(){
      $('#myCool').removeClass('flexing-scroll')
      $('#news').removeClass('animated slideInRight')
      $('#news').addClass('flexing-scroll')
  }, 100);

  setTimeout(function(){

      $("#news").animate({"left": -$("#news").width()}, 900);
  }, 400);

  setTimeout(function(){
        $('#news').hide();
  }, 900);


        setTimeout(function(){
          $('#news').removeClass('bottomShadow')
          $('#hiddenVideos').addClass('bottomShadow')

          $('#hiddenVideos').addClass('animated slideInRight').show();
        }, 400);

  }

  else if

  ($('#myCool').is('.cool' , '.bottomShadow', '.flexing-scroll') && !$('#news').is('.myNews', '.bottomShadow' , '.animated' , '.slideInRight')) {

  console.log("this is fucking crazy")


  setTimeout(function(){
  $('#news').css('left', 'auto');
}, 100);


  setTimeout(function(){
      $('#myCool').removeClass('flexing-scroll')

      $('#news').removeClass('animated slideInRight')


      $('#news').addClass('flexing-scroll')
  }, 100);

  setTimeout(function(){

      $("#news").animate({"left": -$("#news").width()}, 900);
  }, 300);

  setTimeout(function(){
        $('#news').hide();
  }, 900);


        setTimeout(function(){

          $('#news').removeClass('bottomShadow')
          $('#hiddenVideos').addClass('bottomShadow')

          $('#hiddenVideos').addClass('animated slideInRight').show();
        }, 400);

  }

  });

//opening the news div
  $(document).on('click', ".openIt3", function(e) {

  if (!$('#news').is('.bottomShadow') && !$('#myCool').is('.cool', '.bottomShadow', '.slideInRight', '.animated')) {

  console.log('news no bottomShadow and open')

    $(".moveThis").hide();
    $(".moveThis2").hide();
    $(".moveThis3").hide();
    $('.slick-dots').hide();
    // $('#myCool').removeClass('animated slideDown').removeAttr('style');


    $('#myCool').removeAttr('style');
    $('#hiddenVideos').removeAttr('style');
    $('#news').removeAttr('style');

    var divPosition = $('#anchorPoint').offset();
    $('html, body').animate({scrollTop: divPosition.top}, 1000);


    setTimeout(function(){
      $( "#news" ).slideToggle(1000);
      $('#news').addClass('bottomShadow');
    },100);

}


if (!$('#news').is('.bottomShadow') && !$('#hiddenVideos').is('.bottomShadow') && !$('#myCool').is('.bottomShadow')) {

console.log('news no bottomShadow and open')

  $(".moveThis").hide();
  $(".moveThis2").hide();
  $(".moveThis3").hide();
  $('.slick-dots').hide();
  // $('#myCool').removeClass('animated slideDown').removeAttr('style');


  $('#myCool').removeAttr('style');
  $('#hiddenVideos').removeAttr('style');
  $('#news').removeAttr('style');

  var divPosition = $('#anchorPoint').offset();
  $('html, body').animate({scrollTop: divPosition.top}, 1000);


  setTimeout(function(){
    $( "#news" ).slideToggle(1000);
    $('#news').addClass('bottomShadow');
  },100);

}


else if

($('#news').is('.myNews' , '.bottomShadow', '.animated', '.slideInRight') && $('#hiddenVideos').is('.flexing-scroll') && !$('#myCool').is('.cool' , '.bottomShadow', '.animated' , '.slideInRight')) {

  console.log('vidoes sliding left news sliding in the fucker')

  setTimeout(function(){

  $('#news').css('left', 'auto');
}, 100);


  setTimeout(function(){
  $('#hiddenVideos').removeClass('flexing-scroll')
  $('#news').removeClass('animated slideInRight')
  $('#news').addClass('flexing-scroll')
  }, 100);

  setTimeout(function(){

  $("#news").animate({"left": -$("#news").width()}, 900);
  }, 300);

  setTimeout(function(){
    $('#news').hide();
  }, 900);


  setTimeout(function(){
    // $('#hiddenVideos').css('position','unset');
      $('#news').removeClass('bottomShadow');
      $('#hiddenVideos').addClass('bottomShadow');


    $('#hiddenVideos').addClass('animated slideInRight').show();
  }, 400);


}

else if ($('#myCool').is('.cool', '.bottomShadow', '.animated', '.slideInRight') && $('#hiddenVideos').is('.flexing-scroll')) {

console.log('slide nes into calendar palce')

setTimeout(function(){
$('#myCool').css('left', 'auto');
$('#news').css('left', 'auto');
}, 100);


setTimeout(function(){
$('#hiddenVideos').removeClass('flexing-scroll')
$('#myCool').removeClass('animated slideInRight')


$('#myCool').addClass('flexing-scroll')
}, 100);

setTimeout(function(){

$("#myCool").animate({"left": -$("#myCool").width()}, 900);
}, 300);

setTimeout(function(){
  $('#myCool').hide();
}, 900);


setTimeout(function(){
  // $('#hiddenVideos').css('position','unset');
    $('#news').addClass('bottomShadow');
    $('#calendar').addClass('bottomShadow');
    $('#myCool').removeClass('bottomShadow');

  $('#news').addClass('animated slideInRight').show();
}, 400);


}



else if($('#news').is('.bottomShadow', '.cool', '.flexing-scroll')) {

  console.log('no clue what this is')

$('#news').removeClass('flexing-scroll')
$('#myCool').removeClass('animated slideInRight')


$('#myCool').addClass('flexing-scroll')


setTimeout(function(){

$("#myCool").animate({"left": -$("#myCool").width()}, 800);
}, 50);

setTimeout(function(){
  $('#myCool').hide();
}, 800);


setTimeout(function(){
  // $('#hiddenVideos').css('position','unset');
  $('#news').addClass('animated slideInRight').show();
}, 200);

}

else if

($('#myCool').is('.bottomShadow')  || $('#myCool').is('.bottomShadow', '.animated', '.slideInRight') && !$('#news').is('.bottomShadow')) {

console.log("so fucking confused")


setTimeout(function(){
$('#myCool').css('left', 'auto');
}, 100);


setTimeout(function(){
    $('#news').removeClass('flexing-scroll')
    $('#hiddenVideos').removeClass('flexing-scroll')
    $('#myCool').removeClass('animated slideInRight')
    $('#myCool').addClass('flexing-scroll')
}, 100);

setTimeout(function(){
    $("#myCool").animate({"left": -$("#myCool").width()}, 900);
}, 400);

setTimeout(function(){
      $('#myCool').hide();
}, 900);


      setTimeout(function(){


        $('#news').addClass('bottomShadow')
        $('#cool').removeClass('bottomShadow')

        $('#news').addClass('animated slideInRight').show();
      }, 400);


}

else if

(!$('#myCool').is('.bottomShadow') && $('#news').is('.flexing-scroll') && $('#hiddenVideos').is('.animated' , '.slideInRight')) {

    console.log('vidoes sliding left news sliding in the fucker')

  setTimeout(function(){
  $('#hiddenVideos').css('left', 'auto');
  $('#news').css('left', 'auto');
}, 100);


  setTimeout(function(){
  $('#hiddenVideos').removeClass('animated slideInRight')

  $('#hiddenVideos').addClass('flexing-scroll')
}, 100);



  setTimeout(function(){
  $("#hiddenVideos").animate({"left": -$("#hiddenVideos").width()}, 900);
  }, 300);

  setTimeout(function(){
    $('#hiddenVideos').hide();
  }, 900);


  setTimeout(function(){
    // $('#hiddenVideos').css('position','unset');
    $('#news').addClass('bottomShadow')
    $('#hiddenVideos').removeClass('bottomShadow')

    $('#news').addClass('animated slideInRight').show();
  }, 400);


}

else if

($('#news').is('.myNews' , '.bottomShadow', '.animated', '.slideInRight') && $('#hiddenVideos').is('.flexing-scroll'))


{

console.log("calendarBitch")
  setTimeout(function(){
  $('#hiddenVideos').css('left', 'auto');
  $('#myCool').css('left', 'auto');
  }, 100);



  setTimeout(function(){
  $('#hiddenVideos').removeClass('flexing-scroll')
  $('#myCool').removeClass('animated slideInRight')
  $('#news').addClass('flexing-scroll')
}, 100);


    setTimeout(function(){

  $("#myCool").animate(
    {
      "left": -$("#myCool").width()
    }
    , 900);
  }, 300);

    setTimeout(function(){
      $('#myCool').hide();
    }, 900);


    setTimeout(function(){
    $('#myCool').removeClass('bottomShadow')
      $('#news').addClass('bottomShadow')

      $('#news').addClass('animated slideInRight').show();
    }, 400);


}

else if

($('#myCool').is('.cool' , '.bottomShadow')) {

  console.log('slide news into cool place')


  setTimeout(function(){
  $('#hiddenVideos').css('left', 'auto');
  $('#news').css('left', 'auto');
}, 100);


  setTimeout(function(){
  $('#hiddenVideos').removeClass('animated slideInRight')

  $('#hiddenVideos').addClass('flexing-scroll')
}, 100);



 setTimeout(function(){
  $("#hiddenVideos").animate({"left": -$("#hiddenVideos").width()}, 900);
}, 300);

  setTimeout(function(){
    $('#hiddenVideos').hide();
  }, 900);


  setTimeout(function(){

    $('#news').addClass('bottomShadow')
    $('#hiddenVideos').removeClass('bottomShadow')

    $('#news').addClass('animated slideInRight').show();
  }, 400);


}

else if

 ($('#hiddenVideos').is('.bottomShadow'))  {

  console.log('slide news into video place')


   $('#myCool').removeClass('flexing-scroll')

   $('#hiddenVideos').addClass('flexing-scroll')


  setTimeout(function(){
   $("#hiddenVideos").animate({"left": -$("#hiddenVideos").width()}, 500);
  }, 100);

   setTimeout(function(){
     $('#hiddenVideos').hide();
   }, 400);


   setTimeout(function(){

     $('#news').addClass('animated slideInRight').show();
   }, 150);


 }

  });

    //slick slider

          $('.homeSlider').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: true,
            fade: true,
            cssEase: 'linear',
            initialSlide:0,
          });



          //flickity carousel
          var elem = document.querySelector('.m-carousel')
          if(elem) {
            var flkty = new Flickity( elem, {
              wrapAround: true,
              pageDots: false,
              adaptiveHeight: false,
              lazyLoad: 2,
              arrowShape:'M27.1,46.45a5.07,5.07,0,0,0,0,7.12L55.74,82.21a5.08,5.08,0,0,0,7.14,0h0a5,5,0,0,0,0-7.14l-25-25,25-25a5.07,5.07,0,0,0,0-7.14h0a5,5,0,0,0-7.14,0Z'
            });
          }


          //navigation bar animations aka the top header menu animations

          $('.social').click(function() {
            $('.makeToggle').hide();
            $('.icon').addClass('easeIt').animate({ width: 'show' }, 600);
            setTimeout(function(){
              $(".icon").addClass("addIt");
            }, 400);
            if ($('#fuck').hasClass('icon noShow2 easeIt addIt')) {
              console.log('fuck')
              $('.hideAgain2').addClass('away');
            } else if (!$('#fuck').hasClass('icon noShow2 easeIt addIt')) {
              console.log('fuck it')
              $('.hideAgain2').removeClass('away');
              // $('.hideAgain2').addClass('back');
            }
          });

          $('.searchIt').click(function() {
            if ($('#fuck').hasClass('icon noShow2 easeIt addIt')) {
              console.log('fuck')
              $('.hideAgain2').addClass('away');
            } else if (!$('#fuck').hasClass('icon noShow2 easeIt addIt')) {
              console.log('fuck it')
              $('.hideAgain2').removeClass('away');
              // $('.hideAgain2').addClass('back');
            }
          });

          $('.hideAgain').click(function(){
            setTimeout(function(){
              $(".icon").removeClass("addIt");
            }, 400);
            $('.icon').animate({ width: 'hide' }, {"height" : "0px"}, 1000);
            $('.bubble').animate({ width: 'hide' }, {"height" : "0px"}, 800);
            $(".makeToggle").delay('600').fadeIn();
          })
          $('.searchIt').click(function() {
            $('.makeToggle').hide();
            $('.bubble').animate({ width: 'show' }, 800);
          });
          $('.hideAgain2').click(function(){
            $('.bubble').animate({ width: 'hide' }, {"height" : "0px"}, 800);
            $(".makeToggle").delay('600').fadeIn();
          })


          $('.moveThis').mouseover(function(){
            setTimeout(function() {
              $('.block1').addClass('block1Thing');
              $('.block1').addClass('animated fadeInUp');
            }, 100);
            setTimeout(function() {
              $('.block2').addClass('block2Thing');
              $('.block2').addClass('animated fadeInUp');
            }, 200);
            setTimeout(function() {
              $('.block3').addClass('block3Thing');
              $('.block3').addClass('animated fadeInUp');
            }, 700);
            setTimeout(function() {
              $('.trans--grow.hr1').addClass('grow');
            }, 1800);
          });


          //make the p tags float up

          $('.center').mouseover(function(){
            setTimeout( function() {
              // $('.firstP').addClass('firstPThing');
              // $('.firstP').addClass('easeIt2');
              //   $('.firstP').addClass('animated slideInUp');
              $('.block4').addClass('animated fadeInUp');

            }, 0);
          });


          $('.m-carousel').mouseover(function(){
            setTimeout( function() {
              $('.block5').addClass('animated fadeInUp');
              // $('.secondP').addClass('secondPThing');
              // $('.secondP').addClass('easeIt2');
              //   $('.secondP').addClass('animated slideInUp');
            }, 0);
          });




          //text aka letter animations
          var startIt = $('.moveThis');
          var $tlt1 = $('.tlt1').textillate({
            autoStart: false,
            selector: '.tlt1',
            loop: false,
            minDisplayTime: 1000,
            initialDelay: 500,
            in: {
              effect: 'fadeInLeft',
              delayScale: 5,
              delay: 15,
              sync: false,
              shuffle: true,
              reverse: false,
              callback: function () {}
            },
            type: 'char'
          });
          startIt.one('mouseenter', function () { $tlt1.textillate('start'); });
          startIt.one('mouseout', function () { $tlt1.textillate('stop'); });
          var startIt2 = $('.moveThis');
          var $tlt2 = $('.tlt2').textillate({
            autoStart: false,
            selector: '.tlt2',
            loop: false,
            minDisplayTime: 1000,
            initialDelay: 1000,
            in: {
              effect: 'fadeInLeft',
              delayScale: 5,
              delay: 15,
              sync: false,
              shuffle: true,
              reverse: false,
              callback: function () {}
            },
            type: 'char'
          });
          startIt2.one('mouseenter', function () { $tlt2.textillate('start'); });
          startIt2.one('mouseout', function () { $tlt2.textillate('stop'); });
          var startIt3 = $('.moveThis');
          var $tlt3 = $('.tlt3').textillate({
            autoStart: false,
            selector: '.tlt3',
            loop: false,
            minDisplayTime: 1000,
            initialDelay: 1500,
            in: {
              effect: 'fadeInLeft',
              delayScale: 5,
              delay: 15,
              sync: false,
              shuffle: true,
              reverse: false,
              callback: function () {}
            },
            type: 'char'
          });
          startIt3.one('mouseenter', function () { $tlt3.textillate('start'); });
          startIt3.one('mouseout', function () { $tlt3.textillate('stop'); });
          //   if ($('.block1').hasClass('animated' && 'fadeInUp')) {
          //     console.log('please')
          //   $('.trans--grow').addClass('grow');
          //
          // } else if (!$('.block1').hasClass('animated' && 'fadeInUp')) {
          //     console.log('hello')
          //
          //
          //   }






// function hummus() {




          //slick slider text animations
          // $(".homeSlider").on("beforeChange", function(event, slick, currentSlide, nextSlide){
          //   $(".homeSlider .slick-dots li").removeClass("slick-active");
          //   $(".homeSlider .slick-dots li button").attr("aria-pressed","false").focus(function() {
          //     this.blur();
          //   });
          // });


          //automatic sliders functions
          // if ($('div#slick-slide00').hasClass('slick-current' && 'slick-active')) {




if ($('div#slick-slide00').hasClass('slick-current' && 'slick-active')) {
                      $("#slick-slide00").addClass("active");

            function myFunction(){
              console.log('fuck')
              function zero() {
                $('.slide__caption').addClass('unset');
              };
              setTimeout(zero, 1200);
              function first() {
                $('.inner').addClass('innerOne');
              }
              setTimeout(first, 1300);
              function second() {
                $('.inner').addClass('newInner')
              }
              setTimeout(second, 4999);
              function third() {
                $('.slide__caption').removeClass('unset');
                $('.inner').removeClass('innerOne');
                $('.inner').removeClass('newInner')
              }
              setTimeout(third, 5300);
            };
            myFunction();
            setInterval(myFunction, 16400);



}





          $('.homeSlider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            console.log('y')


            // $("#slick-slide00").removeClass("active");
            // 	var mySlideNumber = nextSlide;
            $("#slick-slide01").addClass("active");



            function myFunction2(){

              function fourth() {
                $('.inner2').removeClass('newInner2')
                $('.slide__caption2').addClass('unset');
              };
              setTimeout(fourth, 1200);
              function fifth() {
                $('.inner2').addClass('innerTwo');
              }
              setTimeout(fifth, 1300);
              function sixth() {
                $('.inner2').addClass('newInner2')
              }
              setTimeout(sixth, 4999);
              function seventh() {
                $('.inner2').removeClass('innerTwo');
                $('.slide__caption2').removeClass('unset');
                $('.inner2').removeClass('newInner2')
              }
              setTimeout(seventh, 5300);
            };
            myFunction2();
            setInterval(myFunction2, 16400);


          });



          $('.homeSlider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            console.log('yzzz')


            $("#slick-slide02").addClass("active");



            function myFunction3(){

              function eighth() {
                $('.inner3').removeClass('newInner3')
                $('.slide__caption3').addClass('unset');
              };
              setTimeout(eighth, 1200);
              function ninth() {
                $('.inner3').addClass('innerThree');
              }
              setTimeout(ninth, 1300);
              function tenth() {
                $('.inner3').addClass('newInner3')
              }
              setTimeout(tenth, 4999);
              function eleventh() {
                $('.slide__caption3').removeClass('unset');
                $('.inner3').removeClass('innerThree');
                $('.inner3').removeClass('newInner3')
              }
              setTimeout(eleventh, 5300);
            };
            myFunction3();
            setInterval(myFunction3, 16400);



          //
          });

// }


// var liz =   setInterval(myFunction, 16400);
// var liz2 =   setInterval(myFunction2, 16400);
// var liz3 =  setInterval(myFunction3, 16400);
// var t0 = setTimeout(zero, 1200);
// var t1 =   setTimeout(first, 1300);
// var t2 =    setTimeout(second, 4999);
// var t3 = setTimeout(third, 5300);
// var t4 = setTimeout(fourth, 1200);
// var t5 =   setTimeout(fifth, 1300);
// var t6 = setTimeout(sixth, 4999);
// var t7 =   setTimeout(seventh, 5300);
// var t8 =    setTimeout(eighth, 1200);
// var t9 =    setTimeout(ninth, 1300);
// var t10 =  setTimeout(tenth, 4999);
// var t11 =  setTimeout(eleventh, 5300);



// hummus();






//slider li dots aka button functions

// function pita() {

          //clicking on buttons
          $('#slick-slide-control01').on('click', function () {





            $("#slick-slide01", "slick-slide00", "slick-slide02").removeClass("active");
            $('.slide__caption2').removeClass('unset2');
            console.log("fuck")
            // $('.homeSlider').on("beforeChange", function (event, slick, currentSlide, nextSlide) {
            //   console.log('eliz')
            //
            //
            //      if ($('div#slick-slide02').hasClass('slick-current' && 'slick-active')) {
            //            console.log('assbutt')
            //          $("#slick-slide01", "slick-slide00", "slick-slide02").removeClass("active");
            //        }
            //
            function circle1 () {
              $('.inner2').removeClass('newInner2Dot')
              $('.slide__caption2').addClass('unset2');
            };
            setTimeout(circle1, 1200);
            function circle2() {
              $('.inner2').addClass('innerTwoDot');
            }
            setTimeout(circle2, 1300);
            function circle3() {
              $('.inner2').addClass('newInner2Dot')
            }
            setTimeout(circle3, 3000);
            function circle4() {
              $('.inner2').removeClass('innerTwoDot');
              $('.slide__caption2').removeClass('unset2');
              $('.inner2').removeClass('newInner2Dot')
            }
            setTimeout(circle4, 3500);
            // });
          });




          $('#slick-slide-control00').on('click', function () {




            console.log("fucdiucbik")
            $("#slick-slide01", "slick-slide00", "slick-slide02").removeClass("active");
            $('.slide__caption').removeClass('unset2');
            // $('.homeSlider').on("beforeChange", function (event, slick, currentSlide, nextSlide) {
            //   console.log('anne')
            //
            //
            //
            // 	 if ($('div#slick-slide01').hasClass('slick-current' && 'slick-active')) {
            //        console.log('butt')
            //      $("#slick-slide01", "slick-slide00", "slick-slide02").removeClass("active");
            //    }
            //
            function circle5 () {
              $('.inner').removeClass('newInnerDot')
              $('.slide__caption').addClass('unset2');
            };
            setTimeout(circle5, 1200);
            function circle6() {
              $('.inner').addClass('innerOne');
            }
            setTimeout(circle6, 1300);
            function circle7() {
              $('.inner').addClass('newInnerDot')
            }
            setTimeout(circle7, 3000);
            function circle8() {
              $('.inner').removeClass('innerOneDot');
              $('.slide__caption').removeClass('unset2');
              $('.inner').removeClass('newInnerDot')
            }
            setTimeout(circle8, 3500);
            // });
          });


          $('#slick-slide-control02').on('click', function () {

        
            $("#slick-slide01", "slick-slide00", "slick-slide02").removeClass("active");
            $('.slide__caption3').removeClass('unset2');
            // $('.homeSlider').on("afterChange", function (event, slick, currentSlide, nextSlide) {
            //   console.log('rod')
            //
            //
            //     	 if ($('div#slick-slide00').hasClass('slick-current' && 'slick-active')) {
            //            console.log('butthole')
            //          $("#slick-slide01", "slick-slide00", "slick-slide02").removeClass("active");
            //        }
            //      })

            function circle9 () {
              $('.inner3').removeClass('newInner3Dot')
              $('.slide__caption3').addClass('unset2');
            };
            setTimeout(circle9, 1200);
            function circle10() {
              $('.inner3').addClass('innerThreeDot');
            }
            setTimeout(circle10, 1300);
            function circle11() {
              $('.inner3').addClass('newInner3Dot')

            }
            setTimeout(circle11, 3000);
            function circle12() {
              $('.inner3').removeClass('innerThreeDot');
              $('.slide__caption3').removeClass('unset2');
              $('.inner3').removeClass('newInner3Dot');
            }
            setTimeout(circle12, 3500);

          });


// }

//
// pita();




$('#menu2').append('<li class="slide-line"></li>');



          $('#menu2 li a').on('click', function (e) {

              e.preventDefault();

            var $this = jQuery(this),
            offset = $this.offset(),
            offsetBody = jQuery('#box2').offset();
            TweenMax.to(jQuery('#menu2 .slide-line'), 0.50 , {
              css:{

                width: $this.innerWidth() - 30 +'px',
                left: (offset.left-offsetBody.left) + 15 +'px',
                top: (offset.top-offsetBody.top+jQuery(this).height())+'px'
              },

              ease:Power2.easeInOut,
              autoAlpha:1,

            });

            return false;

          });



          jQuery('#menu2 > li a.highlight').first().trigger("click");
          $("a.highlight").on("click", function(e) {
            $("a.highlight").removeClass("darker");
            console.log("yo again");
            $(this).addClass("darker");
          });
          $( 'ul.nav li' ).on( 'click', function() {
            console.log("wtf");
            $( this ).parent().find( 'darker' ).removeClass( 'darker' );
            $( this ).addClass( 'darker' );
          });





        //flickity modal 1

        var model = document.getElementById('mymodel');


        var img = document.getElementById('myImg');
        var modelImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        img.onclick = function(){


          model.style.display = "block";
          modelImg.src = this.src;
          captionText.innerHTML = this.alt;

          $('.flickity-button-icon').hide();
          $('.navbar').hide();
          $(".moveThis").hide();
          $(".moveThis2").hide();
          $(".moveThis3").hide();

        }


        var span = document.getElementsByClassName("closeThis")[0];


        span.onclick = function() {
          model.style.display = "none";

          $('.flickity-button-icon').show();
          $('.navbar').show();
          $(".moveThis").show();
          $(".moveThis2").show();
          $(".moveThis3").show();

        }

        //flickity modal 2

        var model2 = document.getElementById('mymodel2');


        var img2 = document.getElementById('myImg2');
        var model2Img = document.getElementById("img02");
        var caption2Text = document.getElementById("caption2");
        img2.onclick = function(){


          model2.style.display = "block";
          model2Img.src = this.src;
          caption2Text.innerHTML = this.alt;

          $('.flickity-button-icon').hide();
          $('.navbar').hide();

          $(".moveThis").hide();
          $(".moveThis2").hide();
          $(".moveThis3").hide();
        }

        var span2 = document.getElementsByClassName("closeThis2")[0];


        span2.onclick = function() {
          model2.style.display = "none";

          $('.flickity-button-icon').show();
          $('.navbar').show();

          $(".moveThis").show();
          $(".moveThis2").show();
          $(".moveThis3").show();

        }

        //flickity modal 3

        var model3 = document.getElementById('mymodel3');


        var img3 = document.getElementById('myImg3');
        var model3Img = document.getElementById("img03");
        var caption3Text = document.getElementById("caption3");
        img3.onclick = function(){


          model3.style.display = "block";
          model3Img.src = this.src;
          caption3Text.innerHTML = this.alt;

          $('.flickity-button-icon').hide();
          $('.navbar').hide();
          $(".moveThis").hide();
          $(".moveThis2").hide();
          $(".moveThis3").hide();
        }

        var span3 = document.getElementsByClassName("closeThis3")[0];


        span3.onclick = function() {
          model3.style.display = "none";

          $('.flickity-button-icon').show();
          $('.navbar').show();

          $(".moveThis").show();
          $(".moveThis2").show();
          $(".moveThis3").show();
        }

        //flickity modal 4

        var model4 = document.getElementById('mymodel4');


        var img4 = document.getElementById('myImg4');
        var model4Img = document.getElementById("img04");
        var caption4Text = document.getElementById("caption4");
        img4.onclick = function(){


          model4.style.display = "block";
          model4Img.src = this.src;
          caption4Text.innerHTML = this.alt;

          $('.flickity-button-icon').hide();
          $('.navbar').hide();
          $(".moveThis").hide();
          $(".moveThis2").hide();
          $(".moveThis3").hide();
        }

        var span4 = document.getElementsByClassName("closeThis4")[0];


        span4.onclick = function() {
          model4.style.display = "none";

          $('.flickity-button-icon').show();
          $('.navbar').show();

          $(".moveThis").show();
          $(".moveThis2").show();
          $(".moveThis3").show();


        }

        //flickity modal 5

        var model5 = document.getElementById('mymodel5');


        var img5 = document.getElementById('myImg5');
        var model5Img = document.getElementById("img05");
        var caption5Text = document.getElementById("caption5");
        img5.onclick = function(){


          model5.style.display = "block";
          model5Img.src = this.src;
          caption5Text.innerHTML = this.alt;

          $('.flickity-button-icon').hide();
          $('.navbar').hide();
          $(".moveThis").hide();
          $(".moveThis2").hide();
          $(".moveThis3").hide();

        }

        var span5 = document.getElementsByClassName("closeThis5")[0];


        span5.onclick = function() {
          model5.style.display = "none";


          $('.flickity-button-icon').show();
          $('.navbar').show();

          $(".moveThis").show();
          $(".moveThis2").show();
          $(".moveThis3").show();
        }



        //ajax calls for the image downloads

        $('#getFile').on('click', function () {
          $.ajax({
            url: 'http://www.elizabethrodricks.com/images5/carousel5.JPG',
            method: 'GET',
            xhrFields: {
              responseType: 'blob'
            },
            success: function (data) {
              var a = document.createElement('a');
              var url = window.URL.createObjectURL(data);
              a.href = url;
              a.download = 'images5/carousel5.JPG';
              a.click();
              window.URL.revokeObjectURL(url);
            }
          });
        });

        $('#getFile2').on('click', function () {
          $.ajax({
            url: 'http://www.elizabethrodricks.com/images5/carousel1.JPG',
            method: 'GET',
            xhrFields: {
              responseType: 'blob'
            },
            success: function (data) {
              var a = document.createElement('a');
              var url = window.URL.createObjectURL(data);
              a.href = url;
              a.download = 'images5/carousel1.JPG';
              a.click();
              window.URL.revokeObjectURL(url);
            }
          });
        });
        $('#getFile3').on('click', function () {
          $.ajax({
            url: 'http://www.elizabethrodricks.com/images5/carousel2.JPG',
            method: 'GET',
            xhrFields: {
              responseType: 'blob'
            },
            success: function (data) {
              var a = document.createElement('a');
              var url = window.URL.createObjectURL(data);
              a.href = url;
              a.download = 'images5/carousel2.JPG';
              a.click();
              window.URL.revokeObjectURL(url);
            }
          });
        });

        $('#getFile4').on('click', function () {
          $.ajax({
            url: 'http://www.elizabethrodricks.com/images5/carousel3.JPG',
            method: 'GET',
            xhrFields: {
              responseType: 'blob'
            },
            success: function (data) {
              var a = document.createElement('a');
              var url = window.URL.createObjectURL(data);
              a.href = url;
              a.download = 'images5/carousel3.JPG';
              a.click();
              window.URL.revokeObjectURL(url);
            }
          });
        });
        $('#getFile5').on('click', function () {
          $.ajax({
            url: 'http://www.elizabethrodricks.com/images5/carousel4.JPG',
            method: 'GET',
            xhrFields: {
              responseType: 'blob'
            },
            success: function (data) {
              var a = document.createElement('a');
              var url = window.URL.createObjectURL(data);
              a.href = url;
              a.download = 'images5/carousel4.JPG';
              a.click();
              window.URL.revokeObjectURL(url);
            }
          });
        });

        //switch calendar to day view

        $('.dayEvent').on('click', function () {
          $('.hideDate').show();
          $('.goAway').hide();


        });

        $('.monthEvent').on('click', function () {
          $('.hideDate').hide();
          $('.goAway').show();


        });


        $('.showMonth').on('click', function () {
          $('.hideAtFirst').show();
          $('.showAtFirst').hide();


        });

        $('.dayList').on('click', function () {
          $('.hideAtFirst').hide();
          $('.showAtFirst').show();
        });



});
