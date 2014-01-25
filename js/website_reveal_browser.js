$(function() {
  
  browserWidth = $(window).width();

  $("iframe").width(browserWidth);
  
  $("#view-1").width(browserWidth);
  $("#view-2").width(0);

  $("#sweeper").css({'left': browserWidth});

  function flipPage (x) {

		$( "#view-1" ).animate({
	    width: x,
	  	}, 500, function() {
	  });
	  $( "#view-2" ).animate({
	    width: browserWidth - x,
	  	}, 500, function() {
	  });
	  $("#iframe-2").animate({
	    left:	-x,
	  	}, 500, function() {
	  });
	  $("#sweeper").animate({
	    left:	x,
	  	}, 500, function() {
	  });

  }

  $(window).bind('resize', function() {
     location.reload();
	});
	

  flipPage(browserWidth-(browserWidth*.1))

	console.log(websites);


  var clicking = false;

	$(window).mousedown(function(){
	    clicking = true;
	   	flipPage(event.clientX);
	
	});

	// $(document).mouseup(function(){
	//     clicking = false;
	//     // $('.clickstatus').text('mouseup');
	//     // $('.movestatus').text('click released, no more move event');
	// })

	// $('#header').mousemove(function(){
	//     if(clicking == false) return;

	//     // Mouse click + moving logic here
	   
	//     // alert("mouse moving");
	// });

});