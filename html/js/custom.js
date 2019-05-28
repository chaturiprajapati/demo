$(document).ready(function() {
      // mobile drop dwon start here
      if ($(window).width() < 900) {
    $('.mob_drop_down span').on('click', function() {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next('ul').slideUp();
        } else {
            $(this).addClass('open');
            $(this).next('ul').slideDown();
        }
    });
    $(document).on('click touchstart', function(e) {
        var container = $(".mob_drop_down");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.mob_drop_down span').removeClass('open');
            $('.mob_drop_down ul').slideUp();
        }
    });
    $('.mob_drop_down ul li').on('click', function() {
        $(this).parents('.mob_drop_down').find('span').text($(this).find('a').text()).removeClass('open');
        $(this).parents('ul').slideUp();
    });
  }
    // mobile drop down end here
  /* Code for scroll menu fixed start*/
/*    $(document).on("scroll", onScroll);
    $('.abttoptabul li a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('.abttoptabul li').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });*/
  /* Code for scroll menu fixed end*/
 // $('.abttoptabul li').click(function() {
 //    $('.abttoptabul li').removeClass('active');
 //    $(this).addClass('active').fadeIn('2000');
 //    $(".abt-top-tab").click(function(){
 //      $('this').addClass('fixed');
 //    });
 //    });
  $(".abttoptabul li a[href^='#']").click(function(e) {
  e.preventDefault();
     var position = $($(this).attr("href")).offset().top - $('.abt-top-tab').outerHeight() - $('.top-nav').outerHeight() + 10;
    $('.abt-top-tab').addClass('fixedtab');
    
  setTimeout(function(){
    $("body, html").animate({
    scrollTop: position
  }, 500);

  },100);
});
   var this_height = $('.comnbanner').outerHeight();
        console.log(this_height);
   $(window).scroll(function() {
        var Scroll_posY = $(this).scrollTop();


        if(Scroll_posY > this_height){
          $('.abt-top-tab').addClass('fixedtab');
        }
        else{
          $('.abt-top-tab').removeClass('fixedtab');
        }

  $('.abttoptabul li a').each(function(e) {
            if (Scroll_posY >= $($(this).attr('href')).offset().top - ($('.abt-top-tab').outerHeight() + $('.top-nav').outerHeight() + 100)) {
                $('.abttoptabul li ').removeClass('active');
                $(this).parent('li').addClass('active');
            }
        });
  });

/*   $(function(){
        var stickyHeaderTop = $('#abt-top-tab').offset().top;
 
        $(window).scroll(function(){
                if( $(window).scrollTop() > stickyHeaderTop ) {
                        $('#abt-top-tab').css({position: 'fixed', top: '74px'});
                        $('#sticky').css('display', 'block');
                } else {
                        $('#abt-top-tab').css({position: 'static', top: '74px'});
                        $('#sticky').css('display', 'none');
                }
        });
  });*/


  var winW = $(window).width();
  $('.buttonslid .buttonnext').on('click',function(){

  var pos = $( ".meenakshi-adv-top" ).scrollLeft() + winW;
    $( ".meenakshi-adv-top" ).scrollLeft(pos);
  })
  $('.buttonslid .buttonprev').on('click',function(){
    
  var pos = $( ".meenakshi-adv-top" ).scrollLeft() - winW;
    $( ".meenakshi-adv-top" ).scrollLeft(pos);
  })
// Counter JS Start Here

// Counter JS End Here
/* Code start for mouse effect in head */
    $('.banner').on('mousemove',function(e){
    var x_c = e.pageX;
    var y_c = e.pageY;
    $('.c_r').css({
                'left' :  x_c,
        'top' : y_c
    })
  });
     // $('.banner').on('mouseenter',function(){
     //    $('body,html,.c_r').css({
     //        'cursor':'url(../images/dot.png) ,auto'
     //    })
     // })
     // $('.banner').on('mouseleave',function(){
     //    $('body,html,.c_r').css({
     //        'cursor':'default'
     //    })
     // })
    $('.banner button').on('mouseenter',function(){
        // alert('hi');
        $('.c_r').css({
      'transform':'translate(-50%,-50%) scale(2)',
  'transition':'all 0.25s linear',
  'background':'#fff'
    });
    });
     $('.banner button').on('mouseleave',function(){
        // alert('hi');
        $('.c_r').css({
      'transform':'translate(-50%,-50%) scale(1)',
  'transition':'all 0.25s linear',
  'background':'transparent'
    });
    });
  // $('h1').on('mouseover',function(){
  //   $('.c_r').css({
  //     'transform':'translate(-50%,-50%) scale(2)',
  // 'transition':'all 0.25s linear',
  // 'background':'#fff'
  //   })
  // });
  //   $('h1').on('mouseleave',function(){
  //   $('.c_r').css({
  //     'transform':'translate(-50%,-50%) scale(1)',
  // 'transition':'all 0.25s linear',
  // 'background':'transparent'
  //   });
  // });
/* Code end for mouse effect in head */
   $("#ban-slider").on('changed.owl.carousel', function(event) {
            $('#ban-slider .owl-item').removeClass('empty_slider');
            setTimeout(function() {
                $('#ban-slider .owl-item.active').addClass('empty_slider');
            }, 100);
        });
     $(".development-slider").on('changed.owl.carousel', function(event) {
             setTimeout(function() {
                $('.development-slider .owl-item').removeClass('empty_slider');
            }, 100);
            setTimeout(function() {
                $('.development-slider .owl-item.active').addClass('empty_slider');
            }, 1000);

        });
        $("#ban-slider").owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            autoplay: false,
            autoplayTimeout: 3000,
            autoplaySpeed: 1500,
            autoplayHoverPause: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            items: 1,
            navText: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 199 49"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M1.35,21.3A4.38,4.38,0,0,0,0,24.5a4.22,4.22,0,0,0,1.35,3.15l20,20A4.22,4.22,0,0,0,24.5,49a4.38,4.38,0,0,0,3.2-1.35A4.29,4.29,0,0,0,29,44.5a4.45,4.45,0,0,0-1.3-3.2L15.35,29H194.5a4.38,4.38,0,0,0,3.2-1.35A4.29,4.29,0,0,0,199,24.5a4.44,4.44,0,0,0-4.5-4.5H15.35L27.7,7.65A4.29,4.29,0,0,0,29,4.5,4.44,4.44,0,0,0,24.5,0a4.29,4.29,0,0,0-3.15,1.3Z"/></g></g></svg>', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 199 49"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M197.65,27.7A4.38,4.38,0,0,0,199,24.5a4.22,4.22,0,0,0-1.35-3.15l-20-20A4.22,4.22,0,0,0,174.5,0a4.38,4.38,0,0,0-3.2,1.35A4.29,4.29,0,0,0,170,4.5a4.45,4.45,0,0,0,1.3,3.2L183.65,20H4.5a4.38,4.38,0,0,0-3.2,1.35A4.29,4.29,0,0,0,0,24.5,4.44,4.44,0,0,0,4.5,29H183.65L171.3,41.35A4.29,4.29,0,0,0,170,44.5a4.44,4.44,0,0,0,4.5,4.5,4.29,4.29,0,0,0,3.15-1.3Z"/></g></g></svg>']
        });
    $('.my-slider').owlCarousel( {
        loop:true, margin:10, nav:false, dots:true, autoplay:true, autoplayTimeout:2000, autoplayHoverPause:true, responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 3
            }
            , 1000: {
                items: 5
            }
        }
    });
       $(".banslider").owlCarousel({
            loop: false,
            margin: 0,
            nav: false,
            dots: false,
            autoplay: false,
            autoplayTimeout: 3000,
            autoplaySpeed: 1500,
            autoplayHoverPause: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            items: 1
          });
    
$('.outreachaboutslider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  arrows: false,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
});
$('.theGroupslider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows: false,
  adaptiveHeight: true
});
    
// contact form effect start
    $(window).load(function(){
         $(".col-md-6 input,textarea").val("");
         
         $(".input-effect input,textarea").focusout(function(){
            if($(this).val() != ""){
               $(this).addClass("has-content");
            }else{
               $(this).removeClass("has-content");
            }
         })
      });
        $('.pillar-slider').owlCarousel({
        loop:true, 
        margin:10, 
        nav:false, 
        // center: true,
        dots:true, 
        autoplay:true, 
        autoplayTimeout:8000, 
        autoplayHoverPause:true, 
        responsive: {
            0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
        }
    });
    $('.vision-mob').owlCarousel({

        loop:false, 
        margin:20, 
        nav:false, 
        dots:true, 

        // autoplay:true, 
        // autoplayTimeout:2000, 
        // autoplayHoverPause:true, 
        responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 3
            }
            , 1000: {
                items: 4,
                
            }
        }
    });

// contact form effect end
    $('.work-slider').owlCarousel( {
        loop:true, margin:10, nav:false, dots:true, autoplay:true, autoplayTimeout:8000, autoplayHoverPause:true, responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 1
            }
            , 1000: {
                items: 1
            }
        }
    }
    );
    $('.development-slider').owlCarousel( {

        loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 7000,
            autoplaySpeed: 1000,
            autoplayHoverPause: true,
            items: 1
    }
    );
    /* Home page slider start aboutus*/
    $('.slidertop').slick( {
        slidesToShow: 1, slidesToScroll: 1, arrows: false, fade: true, asNavFor: '.sliderbotom'
    }
    );
    $('.sliderbotom').slick( {
        slidesToShow: 2, slidesToScroll: 1, asNavFor: '.slidertop', dots: true, centerMode: true, focusOnSelect: true
    }
    );
    /* Home page slider end aboutus*/
}

);
//home page propery developmene section accordion jquery start
$(function() {
    var Accordion=function(el, multiple) {
        this.el=el || {}
        ;
        this.multiple=multiple || false;
        var links=this.el.find('.article-title');
        links.on('click', {
            el: this.el, multiple: this.multiple
        }
        , this.dropdown)
    }
    Accordion.prototype.dropdown=function(e) {
        var $el=e.data.el;
        $this=$(this), $next=$this.next();
        $next.slideToggle();
        $this.parent().toggleClass('open');
        if (!e.data.multiple) {
            $el.find('.accordion-content').not($next).slideUp().parent().removeClass('open');
        }
        ;
    }
    var accordion=new Accordion($('.accordion-container'), false);
}

);
// home page propery developmene section accordion jquery end
$('#cssmenu li.active').addClass('open').children('ul').show();
$('#cssmenu li.has-sub>a').on('click', function() {
    $(this).removeAttr('href');
    var element=$(this).parent('li');
    if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp(200);
    }
    else {
        element.addClass('open');
        element.children('ul').slideDown(200);
        element.siblings('li').children('ul').slideUp(200);
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp(200);
    }
}

);
$(document).ready(function() {
    $(".tbdslid a").click(function() {
        var attrb=$(this).attr("attrb");
        //alert(attrb);
        $(".modelboxopen").addClass("d-none");
        $("#"+attrb).removeClass("d-none");
    }
    );
    $(".closepopup").click(function() {
        $(".modelboxopen").addClass("d-none");
    }
    );
}

);
/* Banner Video Code Start*/
if ($("ban-slider").length > 0) {
window.addEventListener('load', async () => {
  let video = document.querySelector('video[muted][autoplay]');
  try {
    await video.play();
  } catch (err) {
    video.controls = true;
  }
});
}
/* Banner Video Code End*/
// $(document).ready(function(){
//     $("#meena").click(function(){
//     $(".meenaclick").show();
//   });
// });
/* On scroll active class add start*/
/*function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#abt-top-tab li').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#abt-top-tab ul li').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}*/
/* On scroll active class add end*/