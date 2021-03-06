/*
 * Made by WebDesignCrowd
 * http://webdesigncrowd.com
 *
 */
 
(function($){
	$(function(){
	  
	  // Home
	  $('.carousel').carousel({
        pause: "false",
        interval: 10000
    });
    
    // Search affix
    $(".search").affix({
      offset: {
        top: $(".section h1").first().offset().top
      }
    })
	  
	  // Blog Masonry
    var $container = $('.masonry-grid');
  
    $container.imagesLoaded(function(){
      /* IMAGES LOADED */
      
      
      $container.masonry({
        itemSelector : '.item',
        gutter : 0
      });
      $(".item").css("opacity", "1");
      
      //H1 Affixes to top
      $(".section").each(function () {
	      var header = $(this).children(".fixed-wrapper").first().children("h1").first();
        var offset = $(this).offset().top;
        var next = $(this).next();
        var offsetNext = $(document).height() - next.offset().top;
        header.affix({
          offset: {
            top: offset,
            bottom: offsetNext
          }
        });
	    });
	    
	    $('body').scrollspy({ target: '#navbar' });
	    
    });
	
    // collapse active class on icons
    $(".collapse").collapse({ toggle: false })
    $(".navbar-header a.icon").click(function() { 
      $(this).toggleClass("active");
      $(this).siblings("a.icon").each(function() {
        $(this).removeClass("active");
        var target = $(this).data("target");
        $(target).collapse("hide");
      })
    });
    
    // client tab init
    $(document).off('click.tab.data-api');
    $('a.tab').hover(function () { $(this).tab('show'); });
    
    // Tooltip init
    $(".social-media a").tooltip();

    // Smooth Scrolling
    $("#navbar ul.navbar-nav li a.scroll").click(function(e) {
      e.preventDefault();
      var offset = $(this.hash).offset().top;
      if ($(this).attr("href") != "#home") {
        offset += 100;
      } 
      $('html, body').animate({ scrollTop: offset }, 400);
    });
    
    // Collapsible Active Toggling 
    $("a[data-toggle='collapse']").click(function() {
      $(this).parent().parent(".panel-heading").toggleClass("active");
    });
    
    

	}); // end of document ready
})(jQuery); // end of jQuery name space