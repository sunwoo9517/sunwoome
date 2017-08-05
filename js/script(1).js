$(function(){

  var $banner = $('#banner'),
    $header = $('#header'),
    $section = $('section');

  function animateRotate(node, angle){
    var $elem = $(node);
    $({deg:0}).animate({deg:angle},{
      duration: 1300,
      step: function(now){
        $elem.css({
          transform: 'rotate('+ now +'deg)'
        });
      }
    });
  };

  jQuery.fn.extend({
        rotator: function(child) {
          if(!child){
            child = $(this).children(':first');
          }
          $(child).fadeIn(600,function(){
            $(child).delay(300).fadeOut(600,function(){
              var next = child.next();
              if(next.length === 0){
                $(this).parent().rotator();
              };
              $(this).rotator(next);
            });
          });
        }
    });

  $('#rotate').rotator();
  $(".btn").button({
    classes:{
      "ui-button": "ui-corner-all"
    }
  });
  $banner.scrollex({
    bottom: $header.outerHeight(),
    enter: function(){
      $header.addClass('alt');
      $(this).find(".inner").animate({opacity:1}, 1500);
    },
    leave: function(){$header.removeClass('alt');$header.animate({height:"100%"},600);}
  });

  $section.scrollex({
    bottom: $header.outerHeight(),
    initialize: function(){
      $(this).addClass('inactive');
      $(this).fadeIn(800);
    },
    enter: function(){
      if($(this).context.id === "two")
        {animateRotate('#two img',720);}
      if($(this).context.id === "three")
        {animateRotate('#three img',1080);}
      $(this).removeClass('inactive');
      $(this).find('.inner').animate({opacity:1},800);
      $(this).find('.icon-up-open').animate({bottom:60,opacity:1},2500);
    },
    leave: function(){
      $(this).addClass('inactive');
      $(this).find('.inner').animate({opacity:0.1},800);
      $(this).find('.icon-up-open').animate({bottom:0,opacity:0},600);
    }
  });




});
