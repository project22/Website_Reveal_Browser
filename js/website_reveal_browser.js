$(function() {
  
  browserWidth = $(window).width();

  $("iframe").css( "width", browserWidth );

  websiteIndex = 0 ;
  resetFrames();


  function flipPage (x) {

		$("#view-1").animate({
	    width: x,
	  	}, 500);
	  $("#view-2").animate({
	    width: browserWidth - x,
	  	}, 500);
	  $("#iframe-2").animate({
	    left:	-x,
	  	}, 500);
	  $("#sweeper").animate({
	    left:	x,
	  	}, 500,function(){ resetFrames() });
  }

 //  $(window).bind('resize', function() {
 //     location.reload();
	// });
	
	function resetFrames() {
		
		
		$("#header").html(websites.websites[websiteIndex].name)
		$("#iframe-1").attr('src', websites.websites[websiteIndex].url);
  	$("#iframe-2").attr('src', websites.websites[websiteIndex + 1].url);
  	$('#iframe-1').load(function(){
  		// alert("done loading");
      $("#view-1").css( "width", browserWidth );
	  	$("#view-2").css( "width", 0 );
	  	$("#iframe-2").css( "left", -browserWidth );
	  	$("#sweeper").css( "left", browserWidth );    
	  });
	  	
  	websiteIndex += 1;
	}

  // flipPage(browserWidth-(browserWidth*.1))

	console.log(websites.websites[0].name);


  var clicking = false;

	// $(window).mousedown(function(){
	//     clicking = true;
	//    	flipPage(event.clientX);
	
	// });

	$("#scroll-left").mouseup(function(){
		flipPage(0);
		// resetFrames();
	})





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