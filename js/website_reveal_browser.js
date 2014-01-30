// Copyright JP Berti

$(function() {
  
  browserWidth = $(window).width();
  websiteIndex = 0 ;
  numberSites = websites.websites.length;

  $("#scroll-right").hide();
  $("#scroll-left").hide();
  $("#scroll-right").show("slow");
  $("#scroll-left").show("slow");
  
  setup();

  function flipPage (direction) {
  	if (direction == "right") {

  		if (websiteIndex <= numberSites-2) {
	  		$("#container_" + websiteIndex).animate({
		    width: 20,
		  	}, 500);
			  $("#container_" + (websiteIndex + 1)).animate({
			    width: browserWidth - ((numberSites - 1) * 20),
			  	}, 500);
			  $("#iframe_" + (websiteIndex + 1)).animate({
			    left:	-20 * (websiteIndex + 1),
			  	}, 500);
			  $("#sweeper_" + websiteIndex).animate({
			    left:	20 * (websiteIndex + 1),
			  	}, 500);
			  $("#header").animate({
			  	text: websites.websites[websiteIndex + 1].name
			  }, 500, function(){
			  	$("#header").html(websites.websites[websiteIndex].name)
			  });

			  websiteIndex ++;
	  	}

  	} else if (direction == "left") {

  		if (websiteIndex > 0) {

  			websiteIndex--;

	  		$("#container_" + websiteIndex).animate({
		    width: browserWidth - ((numberSites - 1) * 20),
		  	}, 500);
			  $("#container_" + (websiteIndex + 1)).animate({
			    width: 20,
			  	}, 500);
			  $("#iframe_" + (websiteIndex + 1)).animate({
			    left:	- (browserWidth - (numberSites - websiteIndex -1) * 20),
			  	}, 500);
			  $("#sweeper_" + websiteIndex).animate({
			    left:  browserWidth - (numberSites - websiteIndex -1) * 20,
			  	}, 500);
			  $("#header").animate({
			  	text: websites.websites[websiteIndex + 1].name
			  }, 500, function(){
			  	$("#header").html(websites.websites[websiteIndex].name)
			  });

	  	}
  	}
  }

 //  $(window).bind('resize', function() {
 //     location.reload();
	// });
	
	function setup() {

		  for (i=0; i < numberSites; i++) {
		  	console.log(i);
		  	iframeHTML = "<div class='view-container' id='container_" + i + "'><iframe src='"+ websites.websites[i].url +"' id = 'iframe_" + i + "'></div>";
		  	
		  	$("#browser-container").append(iframeHTML);
		  	$("#iframe_" + i ).css( "left", - (browserWidth - (numberSites - i) * 20),
		  		"width", 1200);  

		  	sweeperHTML = "<div class = 'sweeper' id='sweeper_" + i + "'></div>";
		  	$("body").append(sweeperHTML);
		  	$("#sweeper_" + i ).css( "left",  (browserWidth - (numberSites - i -1) * 20));  
		  }
			
		$("#header").html(websites.websites[websiteIndex].name)
    $("#container_" + websiteIndex).css( "width", browserWidth - ((numberSites - 1) * 20));
    $("#iframe_" + websiteIndex).css( "left", (websiteIndex * 20));  
  	$("#sweeper").css( "left", browserWidth - ((numberSites - 1) * 20));    

	}

	$("#scroll-left").mouseup(function(){
		flipPage("left");
	})

	$("#scroll-right").mouseup(function(){
		flipPage("right");

	})
});
