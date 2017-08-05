$(function(){

  var $banner = $('#banner'),
    $header = $('#header'),
    $section = $('section'),
    $gallery = $('#gallery'),
    $board = $('#board');

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


  //Alternative header
  jQuery.fn.extend({
    headerAlter : function(options){
      var settings = $.extend({
        backgroundColor: '#7fa00e',
        position: 'relative',
        top: null,
        left: null,
        right: null,
        bottom: null,
        width: '100%',
        height: '2.7rem',
        lineHeight: '2.7rem',
        textAlign: 'right',
        paddingTop: null,
        paddingRight: '20px',
        paddingBottom: null,
        paddingLeft: null,
        marginTop: null,
        marginRight: null,
        marginBottom: null,
        marginLeft: null,
        display: 'block',
        animation: false,
        zIndex: null
      }, options);

      var arr = ['top','left','right','bottom'];
      for(var i=0;i<arr.length;i++){
        var val = arr[i];
        if(settings[val]){
          $header.css(val, settings[val]);
        }
      }

      var padding = {'paddingTop':'padding-top', 'paddingRight':'padding-right', 'paddingBottom':'padding-bottom', 'paddingLeft':'padding-left'};
      jQuery.each(padding, function(i, val){
        if(settings[i]){
          $header.css(val, settings[i])
        }
      })

      var margin = {'marginTop':'margin-top', 'marginRight':'margin-right', 'marginBottom':'margin-bottom', 'marginLeft':'margin-left'};
      jQuery.each(margin, function(i, val){
        if(settings[i]){
          $header.css(val, settings[i]);
        }
      })

      if(settings.animation){
        $(this).hide().animate( { height: settings.height }, 800,'linear' );
      }

      if(settings.zIndex){
        $(this).css('z-index', settings.zIndex)
      }
      if(settings.maxHeight){
        $(this).css('max-height', settings.maxHeight)
      }
      if(settings.textAlign){
        $(this).css('text-align', settings.textAlign)
      }
      //default
      $(this)
        .css('background-color',settings.backgroundColor)
        .css('height',settings.height)
        .css('width',settings.width)
        .css('display',settings.display)
        .css('position', settings.position)
        .css('line-height', settings.lineHeight)
    }
  });

  $(".btn").button({
    classes:{
      "ui-button": "ui-corner-all"
    }
  });

  $banner.scrollex({
    bottom: $header.outerHeight(),
    enter: function(){
      $header.headerAlter({
        backgroundColor: 'transparent',
        position: 'absolute',
        top: '1.5rem',
        right: '0px',
        width:'100%',
        height: '2.7rem',
        zIndex: 2,
        display: 'block'
      });
      $(this).find(".inner").animate({opacity:1}, 1500);
    },
    leave: function(){
      $header.headerAlter({
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        display: 'inline-block',
        position: 'fixed',
        top:'0px',
        right:'0px',
        height: '2.7rem',
        width: '100%',
        zIndex: 2,
        animation: true
      });
    }
  });
  $gallery.scrollex({
    initialize: function(){
      $header.headerAlter({
        backgroundColor: '#1f4f58',
        display: 'block',
      });
    }
  });
  $board.scrollex({
    initialize: function(){
      $header.headerAlter({
        backgroundColor: '#1f4f58',
        display: 'block',
      });
    }
  })
  $section.scrollex({
    bottom: $header.outerHeight(),
    initialize: function(){
      $(this).addClass('inactive');
      $(this).fadeIn(800);
    },
    enter: function(){
      if($(this)[0].id == "two")
        {animateRotate('#two img',720);}
      if($(this)[0].id == "three")
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

  $(window).on('load', function(){
    $('.thumbnails').poptrox({
      usePopupCaption: true,
      onPopupClose: function() { $gallery.removeClass('covering'); },
			onPopupOpen: function() { $gallery.addClass('covering'); },
      baseZIndex: 10001,
      useBodyOverflow: false,
      usePopupEasyClose: true,
      overlayOpacity: 0.45,
      popupLoaderText: '',
      fadeSpeed: 500,
      usePopupDefaultStyling: false,
      overlayColor: '#999'
    });

    $('#four .flex').poptrox({
      onPopupClose: function() { $('body').removeClass('covering'); },
			onPopupOpen: function() { $('body').addClass('covering'); },
      baseZIndex: 1001,
      userBodyOverflow: false,
      usePopupEasyClose: true,
      overlayOpacity: 0.45,
      popupLoaderText:'',
      fadeSpeed: 500,
      usePopupDefaultStyling: false,
      overlayColor: '#999'
    });

  });
});
