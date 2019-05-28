$(document).ready(function() {
/*   if ($(window).width() > 767) {

   } */
   /* mouse nav start*/
    var cursor = $(".cursor"),
            follower = $(".cursor-follower");

        var posX = 0,
            posY = 0;

        var mouseX = 0,
            mouseY = 0;

        TweenMax.to({}, 0.016, {
            repeat: -1,
            onRepeat: function() {
                posX += (mouseX - posX) / 9;
                posY += (mouseY - posY) / 9;

                TweenMax.set(follower, {
                    css: {
                        left: posX - 12,
                        top: posY - 12
                    }
                });

                TweenMax.set(cursor, {
                    css: {
                        left: mouseX,
                        top: mouseY
                    }
                });
            }
        });

        $('.banner').on("mousemove", function(e) {
            mouseX = e.pageX;
            mouseY = e.pageY;
        });

        $(document).on("mouseenter", '.banner .owl-carousel .owl-nav button, .ban-head', function() {
            cursor.addClass("active");
            follower.addClass("active");
            $(this).addClass('colored');
        });
        $(document).on("mouseleave", '.banner .owl-carousel .owl-nav button, .ban-head', function() {
            cursor.removeClass("active");
            follower.removeClass("active");
            $(this).removeClass('colored');
        });

/* mouse nav end*/
    var winH = $(window).height();
    var winW = $(window).width();

    var scrollmagic = new ScrollMagic.Controller({
       // addIndicators: true,
        globalSceneOptions: {
          //  triggerHook: 'Enter'

        }
    });
    // TweenMax.to('.fixed_svg_div', 3, {
    //     x: -100,
    //     repeat: -1,
    //     yoyo: true
    // });
    var screen0 = new ScrollMagic.Scene({
        // starting scene, when reaching this element
        triggerElement: ".banner",
        duration: $(".banner").outerHeight(),
        reverse: false
    });
    screen0.on("enter", function(event) {
        var a = new TimelineMax();
        a.fromTo('.banner', 0.7, {
            scale: 0.9,
            opacity: 0
        }, {
           scale: 1,
            opacity: 1,
            ease: 'ease-in-out'
        }, 0.5).staggerFromTo('.box-links ul>li', 0.5, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'ease-in-out'
        }, 0.1).fromTo('.ban-slider .banner-det p', 1, {
            y: -100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'ease-in-out'
        }, 1.5).fromTo('.ban-slider .banner-det .line', 1, {
            y: -100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'ease-in-out'
        }, 1.5);
    });

    var screen1 = new ScrollMagic.Scene({
        // starting scene, when reaching this element
        triggerElement: ".projects",
        duration: $(".projects").outerHeight(),
        reverse: false
    });
    screen1.on("enter", function(event) {
        var a = new TimelineMax();
        a.fromTo('.banner_div .img_text_div .text_div h1', 0.5, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'ease-in-out'
        }, 0.2).fromTo('.banner_div .img_text_div .text_div span', 0.5, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'ease-in-out'
        }, 0.3).fromTo('.banner_div .img_text_div .text_div .btn_div', 0.5, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'ease-in-out'
        }, 0.4).staggerFromTo('.particals_div img', 0.5, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'ease-in-out'
        }, 0.1);

    });

    var screen2 = new ScrollMagic.Scene({
        // starting scene, when reaching this element
        triggerElement: ".prop-develoment",
        duration: $(".prop-develoment").outerHeight(),
        reverse: false
    });
    screen2.on("enter", function(event) {
        var a = new TimelineMax();
        a.fromTo('.prop-develoment', 0.8, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'ease-in-out'
        }, 0.3).fromTo('#cssmenu', 0.5, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'ease-in-out'
        }, 0.5);

    });
/*    var screen3 = new ScrollMagic.Scene({
        triggerElement: ".our-clients",
        duration: $(".our-clients").outerHeight(),
        reverse: false
    });
    screen3.on("enter", function(event) {
        var a = new TimelineMax();
        a.fromTo('.our-clients', 0.9, {
            y: 0,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'ease-in-out'
        }, 0.3);

    });*/

    var screen4 = new ScrollMagic.Scene({
        // starting scene, when reaching this element
        triggerElement: ".about-us",
        duration: $(".about-us").outerHeight(),
        reverse: false
    });
    screen4.on("enter", function(event) {
        var a = new TimelineMax();
        a.fromTo('.about-us', 0.9, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'ease-in-out'
        }, 0.3);

    });

        var screen5 = new ScrollMagic.Scene({
        // starting scene, when reaching this element
        triggerElement: ".meenakshi",
        duration: $(".meenakshi").outerHeight(),
        reverse: false
    });
    screen5.on("enter", function(event) {
        var a = new TimelineMax();
        a.fromTo('.meenakshi', 0.9, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'ease-in-out'
        }, 0.3).fromTo('.meenakshi .sec-title', 0.6, {
            x: 0,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            ease: 'ease-in-out'
        }, 1.5).fromTo('.redbagroud', 0.5, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'ease-in-out'
        }, 0.3).staggerFromTo('.whitebagroud img', 0.5, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'ease-in-out'
        }, 0.3,'-=1.5').staggerFromTo('.meenakshi-adv .lnebxnw', 0.5, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'ease-in-out'
        }, 0.3);

    });


        var screen6 = new ScrollMagic.Scene({
        // starting scene, when reaching this element
        triggerElement: ".outreach",
        duration: $(".outreach").outerHeight(),
        reverse: false
    });
    screen6.on("enter", function(event) {
        var a = new TimelineMax();
        a.fromTo('.outreach', 0.9, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'ease-in-out'
        }, 0.3);

    });


        var screen7 = new ScrollMagic.Scene({
        // starting scene, when reaching this element
        triggerElement: ".work-with-us",
        duration: $(".work-with-us").outerHeight(),
        reverse: false
    });
    screen7.on("enter", function(event) {
        var a = new TimelineMax();
        a.fromTo('.work-with-us', 0.9, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'ease-in-out'
        }, 0.3);

    });

var screen8 = new ScrollMagic.Scene({
        // starting scene, when reaching this element
        triggerElement: ".explore-more",
        duration: $(".explore-more").outerHeight(),
        reverse: false
    });
    screen8.on("enter", function(event) {
        var a = new TimelineMax();
        a.fromTo('.explore-more', 0.9, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'ease-in-out'
        }, 0.3);

    });
var screen9 = new ScrollMagic.Scene({
        // starting scene, when reaching this element
        triggerElement: ".contact-us",
        duration: $(".contact-us").outerHeight(),
        reverse: false
    });
    screen9.on("enter", function(event) {
        var a = new TimelineMax();
        a.fromTo('.contact-us', 0.9, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'ease-in-out'
        }, 0.3);

    });
    var screen10 = new ScrollMagic.Scene({
        // starting scene, when reaching this element
        triggerElement: ".footer",
        duration: $(".footer").outerHeight(),
        reverse: false
    });
    screen10.on("enter", function(event) {
        var a = new TimelineMax();
        a.fromTo('.footer', 0.9, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'ease-in-out'
        }, 0.3);

    });
	
	
// text animation effect Projects section added by karishma 
  var screen11 = new ScrollMagic.Scene({
        // starting scene, when reaching this element
        triggerElement: ".projects",
        duration: $(".projects").outerHeight(),
        reverse: false
    });
	screen11.on("enter", function(event) {
        var a = new TimelineMax();
        a.fromTo('.projects h2', 0.5, {
            width: '0px',
			transformOrigin:"0% 0%",
			opacity:1,
			ease: 'Power0.easeNone'
        }, {
			opacity:1,
			transformOrigin:"100% 50%",
          width:'100%',
            ease: 'Power0.easeNone'
        }, 0.5)
		
		.fromTo('.projects p', 0.5, {
             y: 50,
			ease: 'Power0.easeNone'
        }, {
			  y: 0,
            ease: 'Power0.easeNone'
        }, 0.5)
	 
    });
	
// text animation effect Projects section End


	
// text animation effect Meenakshi prop-develoment section added by karishma 
  var screen12 = new ScrollMagic.Scene({
        // starting scene, when reaching this element
        triggerElement: ".prop-develoment",
        duration: $(".prop-develoment").outerHeight(),
        reverse: false
    });
	screen12.on("enter", function(event) {
        var a = new TimelineMax();
        a.fromTo('.prop-develoment h2', 0.5, {
            width: '0px',
			transformOrigin:"0% 0%",
			opacity:1,
			ease: 'Power0.easeNone'
        }, {
			opacity:1,
			transformOrigin:"100% 50%",
          width:'100%',
            ease: 'Power0.easeNone'
        }, 0.5)
		
		.fromTo('.prop-develoment p', 0.5, {
             y: 100,
			ease: 'Power0.easeNone'
        }, {
			  y: 0,
		
            ease: 'Power0.easeNone'
        }, 0.5)
		
    });
	
// text animation effect  Meenakshi prop-develoment section End 
	
		
// text animation effect Client section added by karishma 
/*  var screen13 = new ScrollMagic.Scene({
        triggerElement: ".our-clients",
        duration: $(".our-clients").outerHeight(),
        reverse: false
    });
	screen13.on("enter", function(event) {
        var a = new TimelineMax();
        a.fromTo('.our-clients h2', 0.5, {
            width: '0px',
            transformOrigin:"0% 0%",
            opacity:1,
            ease: 'Power0.easeNone'
        }, {
            opacity:1,
            transformOrigin:"100% 50%",
          width:'100%',
            ease: 'Power0.easeNone'
        }, 0.5)
		
	
    });*/
	
// text animation effect End by karishma 
	  var screen13 = new ScrollMagic.Scene({
        triggerElement: ".our-clients",
        duration: $(".our-clients").outerHeight(),
        reverse: false
    });
    screen13.on("enter", function(event) {
        var a = new TimelineMax();
        a.fromTo('.our-clients h2', 0.5, {
            width: '0px',
            transformOrigin:"0% 0%",
            opacity:1,
            ease: 'Power0.easeNone'
        }, {
            opacity:1,
            transformOrigin:"100% 50%",
          width:'100%',
            ease: 'Power0.easeNone'
        }, 0.5)
        
        .fromTo('.projects p', 0.5, {
             y: 100,
            ease: 'Power0.easeNone'
        }, {
              y: 0,
            ease: 'Power0.easeNone'
        }, 0.5)
     
    });
	
// text animation effect About us section added by karishma 
  var screen14 = new ScrollMagic.Scene({
        // starting scene, when reaching this element
        triggerElement: ".about-us",
        duration: $(".about-us").outerHeight(),
        reverse: false
    });
	screen14.on("enter", function(event) {
        var a = new TimelineMax();
        a.fromTo('.about-us h2.sec-title', 0.5, {
            width: '0px',
			transformOrigin:"0% 0%",
			opacity:1,
			ease: 'Power0.easeNone'
        }, {
			opacity:1,
			transformOrigin:"100% 50%",
          width:'100%',
            ease: 'Power0.easeNone'
        }, 0.5)
		
		.fromTo('.about-us p', 0.5, {
             y: 100,
			ease: 'Power0.easeNone'
        }, {
			  y: 0,
		
            ease: 'Power0.easeNone'
        }, 0.5)
		
		.fromTo('.about-us .m-btn', 0.5, {
             y: 100,
			ease: 'Power0.easeNone'
        }, {
			  y: 0,
			  
            ease: 'Power0.easeNone'
			
        }, 0.5)
        .fromTo('.about-us .building-img img', 0.5, {
             y: 100,
            ease: 'Power0.easeNone'
        }, {
              y: 0,
            ease: 'Power0.easeNone'
        }, 0.5)

    });
	
// text animation effect Meenakshi Advantage added by karishma 


// text animation effect Projects section added by karishma 
  var screen15 = new ScrollMagic.Scene({
        // starting scene, when reaching this element
        triggerElement: ".meenakshi",
        duration: $('.meenakshi').outerHeight(),
        reverse: false
    });
	screen15.on("enter", function(event) {
        var a = new TimelineMax();
        a.fromTo('.meenakshi h2', 0.5, {
            width: '0px',
			transformOrigin:"0% 0%",
			opacity:1,
			ease: 'Power0.easeNone'
        }, {
			opacity:1,
			transformOrigin:"100% 50%",
          width:'100%',
            ease: 'Power0.easeNone'
        }, 0.5)
		 
	 
    });
	
// text animation effect Meenakshi Advantage section End

	
// text animation effect Meenakshi Outreach section added by karishma 
  var screen16 = new ScrollMagic.Scene({
        // starting scene, when reaching this element
        triggerElement: ".outreach",
        duration: $(".outreach").outerHeight(),
        reverse: false
    });
	screen16.on("enter", function(event) {
        var a = new TimelineMax();
        setTimeout(function(){
            $(".outreach").addClass("expand");
        },200);
        a.fromTo('.outreach h2', 0.5, {
            width: '0px',
			transformOrigin:"0% 0%",
			opacity:1,
			ease: 'Power0.easeNone'
        }, {
			opacity:1,
			transformOrigin:"100% 50%",
          width:'100%',
            ease: 'Power0.easeNone'
        }, 0.5)
		
		.fromTo('.outreach p', 0.5, {
             y: 100,
			ease: 'Power0.easeNone'
        }, {
			  y: 0,
		
            ease: 'Power0.easeNone'
        }, 0.5)
		
		.fromTo('.outreach .m-btn', 0.5, {
             y: 100,
			ease: 'Power0.easeNone'
        }, {
			  y: 0,
			  
            ease: 'Power0.easeNone'
			
        }, 0.5);


    });
	
// text animation effect added by karishma 


	
// text animation effect work-with-us section added by karishma 
  var screen17 = new ScrollMagic.Scene({
        // starting scene, when reaching this element
        triggerElement: ".work-with-us",
        duration: $(".work-with-us").outerHeight(),
        reverse: false
    });
	screen17.on("enter", function(event) {
        var a = new TimelineMax();
        setTimeout(function(){
            $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
        },200);
        a.fromTo('.work-with-us h2', 0.5, {
            width: '0px',
			transformOrigin:"0% 0%",
			opacity:1,
			ease: 'Power0.easeNone'
        }, {
			opacity:1,
			transformOrigin:"100% 50%",
          width:'100%',
            ease: 'Power0.easeNone'
        }, 0.5)
		
		.fromTo('.work-with-us p', 0.5, {
             y: 100,
			ease: 'Power0.easeNone'
        }, {
			  y: 0,
		
            ease: 'Power0.easeNone'
        }, 0.5)
		
		.fromTo('.work-with-us .m-btn', 0.5, {
             y: 100,
			ease: 'Power0.easeNone'
        }, {
			  y: 0,
			  
            ease: 'Power0.easeNone'
			
        }, 0.5)
		
		.fromTo('.work-with-us .work-right-content', 0.5, {
             y: 100,
			ease: 'Power0.easeNone'
        }, {
			  y: 0,
			  
            ease: 'Power0.easeNone'
			
        }, 0.5)

    });
	
// text animation effect added by end 
	
// text animation effect Explore More section added by karishma 
  var screen18 = new ScrollMagic.Scene({
        // starting scene, when reaching this element
        triggerElement: ".explore-more",
        duration: $(".explore-more").outerHeight(),
        reverse: false
    });
	screen18.on("enter", function(event) {
        var a = new TimelineMax();
        a.fromTo('.explore-more h2', 0.5, {
            width: '0px',
			transformOrigin:"0% 0%",
			opacity:1,
			ease: 'Power0.easeNone'
        }, {
			opacity:1,
			transformOrigin:"100% 50%",
          width:'100%',
            ease: 'Power0.easeNone'
        }, 0.5)

    });
	
// text animation effect added by end 
	
	
	// text animation effect Contact Us section added by karishma 
	
  var screen19 = new ScrollMagic.Scene({
        // starting scene, when reaching this element
        triggerElement: ".contact-us",
        duration: $(".contact-us").outerHeight(),
        reverse: false
    });
	screen19.on("enter", function(event) {
        var a = new TimelineMax();
        a.fromTo('.contact-us h2', 0.5, {
            width: '0px',
			transformOrigin:"0% 0%",
			opacity:1,
			ease: 'Power0.easeNone'
        }, {
			opacity:1,
			transformOrigin:"100% 50%",
          width:'100%',
            ease: 'Power0.easeNone'
        }, 0.5)
		
		.fromTo('.contact-us .cont-det', 0.5, {
             y: 100,
			ease: 'Power0.easeNone'
        }, {
			  y: 0,
			  
            ease: 'Power0.easeNone'
			
        }, 0.5)

    });
var screen20 = new ScrollMagic.Scene({
        triggerElement: "#abt-overview",
        duration: $("#abt-overview").outerHeight(),
        reverse: false
    });
    screen20.on("enter", function(event) {
        var a = new TimelineMax();
        a.fromTo('#abt-overview', 0.5, {
            opacity:0,
              y: 100,
            ease: 'Power0.easeNone'
        }, {
            opacity:1,
            y: 0,
            ease: 'Power0.easeNone'
        }, 0.5)
        .fromTo('#abt-overview .animateTitle', 0.5, {
            width: '0px',
            transformOrigin:"0% 0%",
            opacity:1,
            ease: 'Power0.easeNone'
        }, {
            opacity:1,
            transformOrigin:"100% 50%",
          width:'100%',
            ease: 'Power0.easeNone'
        }, 0.5)
        
        .fromTo('#abt-overview .p-align', 0.5, {
            opacity:0,
             y: 100,
            ease: 'Power0.easeNone'
        }, {
            opacity:1,
              y: 0,
              
            ease: 'Power0.easeNone'
            
        }, 0.5).fromTo('#abt-overview .abt-right img', 0.5, {
             y: 100,
            ease: 'Power0.easeNone'
        }, {
              y: 0,
            ease: 'Power0.easeNone'
        }, 0.5)

    });	
    var screen21 = new ScrollMagic.Scene({
        // starting scene, when reaching this element
        triggerElement: "#visionmission",
        duration: $("#visionmission").outerHeight(),
        reverse: false
    });
    screen21.on("enter", function(event) {
        var a = new TimelineMax();
        a.fromTo('#visionmission', 0.5, {
            opacity:0,
              y: 100,
            ease: 'Power0.easeNone'
        }, {
            opacity:1,
            y: 0,
            ease: 'Power0.easeNone'
        }, 0.5)
        .fromTo('#visionmission h2.sec-title', 0.5, {
            width: '0px',
            transformOrigin:"0% 0%",
            opacity:1,
            ease: 'Power0.easeNone'
        }, {
            opacity:1,
            transformOrigin:"100% 50%",
          width:'100%',
            ease: 'Power0.easeNone'
        }, 1)
        
        .fromTo('#visionmission p', 0.5, {
             y: 100,
             opacity:0,
            ease: 'Power0.easeNone'
        }, { opacity:1,
              y: 0,
        
            ease: 'Power0.easeNone'
        }, 0.5)/*
        
        .fromTo('.pillars .m-btn', 0.5, {
             y: 100,
            ease: 'Power0.easeNone'
        }, {
              y: 0,
              
            ease: 'Power0.easeNone'
            
        }, 0.5)
        .fromTo('.pillars .building-img img', 0.5, {
             y: 100,
            ease: 'Power0.easeNone'
        }, {
              y: 0,
            ease: 'Power0.easeNone'
        }, 0.5)*/

    });
    var screen22 = new ScrollMagic.Scene({
        // starting scene, when reaching this element
        triggerElement: ".pillars",
        duration: $(".pillars").outerHeight(),
        reverse: false
    });
    screen22.on("enter", function(event) {
        var a = new TimelineMax();
        a.fromTo('.pillars', 0.5, {
            opacity:0,
              y: 100,
            ease: 'Power0.easeNone'
        }, {
            opacity:1,
            y: 0,
            ease: 'Power0.easeNone'
        }, 0.5)
        .fromTo('.pillars h2.sec-title', 0.5, {
            width: '0px',
            transformOrigin:"0% 0%",
            opacity:1,
            ease: 'Power0.easeNone'
        }, {
            opacity:1,
            transformOrigin:"100% 50%",
          width:'100%',
            ease: 'Power0.easeNone'
        }, 0.5)
        .fromTo('.pillars .box', 0.4, {
             y: 100,
             opacity:0,
            ease: 'Power0.easeNone'
        }, {
            opacity:1,
              y: 0,
            ease: 'Power0.easeNone'
        }, 0.5)
        .fromTo('.pillars p', 0.5, {
            opacity:0,
             y: 100,
            ease: 'Power0.easeNone'
        }, {
            opacity:1,
              y: 0,
        
            ease: 'Power0.easeNone'
        }, 0.5)
        
        .fromTo('.pillars .m-btn', 0.5, {
             y: 100,
            ease: 'Power0.easeNone'
        }, {
              y: 0,
              
            ease: 'Power0.easeNone'
            
        }, 0.5)

    });
   var screen23 = new ScrollMagic.Scene({
        // starting scene, when reaching this element
        triggerElement: ".why-choose",
        duration: $(".why-choose").outerHeight(),
        reverse: false
    });
    screen23.on("enter", function(event) {
        var a = new TimelineMax();
        a.fromTo('.why-choose', 0.5, {
            opacity:0,
              y: 100,
            ease: 'Power0.easeNone'
        }, {
            opacity:1,
            y: 0,
            ease: 'Power0.easeNone'
        }, 0.5)
        .fromTo('.why-choose .why-cont h2.sec-title, .left-adv .adv-head h2.sec-title', 0.5, {
            width: '0px',
            transformOrigin:"0% 0%",
            opacity:1,
            ease: 'Power0.easeNone'
        }, {
            opacity:1,
            transformOrigin:"100% 50%",
          width:'100%',
            ease: 'Power0.easeNone'
        }, 0.5)
        
        .fromTo('.why-top-cont p, .adv-content p, .why-cont', 0.5, {
            opacity:0,
             y: 100,
            ease: 'Power0.easeNone'
        }, {
            opacity:1,
              y: 0,
        
            ease: 'Power0.easeNone'
        }, 0.5)
        
        .fromTo('.choose-bot img', 0.5, {
             y: 100,
            ease: 'Power0.easeNone'
        }, {
              y: 0,
              
            ease: 'Power0.easeNone'
            
        }, 0.5)
        /* .fromTo('.pillars .building-img img', 0.5, {
             y: 100,
            ease: 'Power0.easeNone'
        }, {
              y: 0,
            ease: 'Power0.easeNone'
        }, 0.5)*/

    }); 
var screen24 = new ScrollMagic.Scene({
        // starting scene, when reaching this element
        triggerElement: ".theGroup",
        duration: $(".theGroup").outerHeight(),
        reverse: false
    });
    screen24.on("enter", function(event) {
        var a = new TimelineMax();
        a.fromTo('.theGroup', 0.5, {
            opacity:0,
              y: 100,
            ease: 'Power0.easeNone'
        }, {
            opacity:1,
            y: 0,
            ease: 'Power0.easeNone'
        }, 0.5)
        .fromTo('.theGroup h2.sec-title', 0.5, {
            width: '0px',
            transformOrigin:"0% 0%",
            opacity:1,
            ease: 'Power0.easeNone'
        }, {
            opacity:1,
            transformOrigin:"100% 50%",
          width:'100%',
            ease: 'Power0.easeNone'
        }, 0.5)
        
        .fromTo('.theGroup p', 0.5, {
            opacity:0,
             y: 100,
            ease: 'Power0.easeNone'
        }, {
            opacity:1,
              y: 0,
        
            ease: 'Power0.easeNone'
        }, 0.5)
        
        .fromTo('#theGroupslider', 0.5, {
            opacity:0,
             y: 100,
            ease: 'Power0.easeNone'
        }, {
            opacity:1,
              y: 0,
              
            ease: 'Power0.easeNone'
            
        }, 0.5)
    }); 
    var screen25 = new ScrollMagic.Scene({
        // starting scene, when reaching this element
        triggerElement: ".outreachAboutus",
        duration: $(".outreachAboutus").outerHeight(),
        reverse: false
    });
    screen25.on("enter", function(event) {
        var a = new TimelineMax();
        a.fromTo('.outreachAboutus', 0.5, {
            opacity:0,
              y: 100,
            ease: 'Power0.easeNone'
        }, {
            opacity:1,
            y: 0,
            ease: 'Power0.easeNone'
        }, 0.5)
        .fromTo('.outreachAboutus h2.sec-title', 0.5, {
            width: '0px',
            transformOrigin:"0% 0%",
            opacity:1,
            ease: 'Power0.easeNone'
        }, {
            opacity:1,
            transformOrigin:"100% 50%",
          width:'100%',
            ease: 'Power0.easeNone'
        }, 0.5)
        
        .fromTo('.outreachAboutus p', 0.5, {
            opacity:0,
             y: 100,
            ease: 'Power0.easeNone'
        }, {
            opacity:1,
              y: 0,
        
            ease: 'Power0.easeNone'
        }, 0.5)
        
        .fromTo('.outreachaboutslider', 0.5, {
            opacity:0,
             y: 100,
            ease: 'Power0.easeNone'
        }, {
            opacity:1,
              y: 0,
              
            ease: 'Power0.easeNone'
            
        }, 0.5)
    }); 
    
// text animation effect added by end 
	
	
    // Add Scene to ScrollMagic Controller

    setTimeout(function() {
        // Add Scene to ScrollMagic Controller

        scrollmagic.addScene([
            screen0, screen1, screen2, screen4, screen5, screen6, screen7, screen8, screen9, screen10, screen11, screen12, screen13, 
            screen14, screen15, screen16, screen17, screen18, screen19, screen20, screen21, screen22, screen23, screen24, screen25
         
        ]);

    });

    TweenMax.set('.prop-develoment, .about-us, .meenakshi, .outreach, .work-with-us, .explore-more, .contact-us, .abtOverview, #visionmission, .pillars, .why-choose, .theGroup, .outreachAboutus', {
        css: {
            opacity: 0,
        }
    });




});