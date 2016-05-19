$(document).ready(function()
{
	window.pvt = true;
	$("#content").fullpage({
		controlArrows:false,
		loopHorizontal:false,
		onSlideLeave: function(a,b,c,d,e)
		{
			if(e === 0)
				$("#section-4").find(".animateMe").removeClass("animated card-animation fadeIn").addClass("animated fadeOut card-animation");
			else
				$("#section-3").find(".animateMe").removeClass("animated card-animation fadeIn").addClass("animated fadeOut card-animation");
		},
		onLeave: function(a,b,c,d,e)
		{
			$("#section-"+a).find(".animateMe").removeClass("hide");
			$("#section-"+a).find(".animateMe").removeClass("animated card-animation fadeIn").addClass("animated fadeOut card-animation");
		},
		afterLoad: function(a,b)
		{
			$("#map .map-section").removeClass("active");
			$("#map .sublevel-"+(b-1)).addClass("active");
			$("#section-"+b).find(".animateMe").removeClass("hide");
			$("#section-"+b).find(".animateMe").removeClass("animated fadeOut card-animation").addClass("animated card-animation fadeIn");
			$("#toast-container").delay(1500).addClass("animated pulse")
			setTimeout(function(){$("#toast-container").removeClass("animated pulse");},1500)
		},
		afterSlideLoad: function(a,b,c,d)
		{
			$("#map .map-section").removeClass("active");
			$("#section-3").find(".animateMe").removeClass("hide");
			$("#section-4").find(".animateMe").removeClass("hide");
			if(c === 0)
			{
				$("#section-3").find(".animateMe").removeClass("animated fadeOut card-animation").addClass("animated card-animation fadeIn");
				$("#map .sublevel-2").addClass("active");
			}
			else
			{
				$("#section-4").find(".animateMe").removeClass("animaed fadeOut card-animation").addClass("animated card-animation fadeIn");
				$("#map .sublevel-3").addClass("active");
			}
			$("#toast-container").delay(1500).addClass("animated pulse")
			setTimeout(function(){$("#toast-container").removeClass("animated pulse");},1500)
		}
	});
	$(".map-section.sublevel-0").click(function(){$.fn.fullpage.moveSlideLeft();$.fn.fullpage.moveTo(1,0);});
	$(".map-section.sublevel-1").click(function(){$.fn.fullpage.moveSlideLeft();$.fn.fullpage.moveTo(2,0);});
	$(".map-section.sublevel-2").click(function(){$.fn.fullpage.moveSlideLeft();$.fn.fullpage.moveTo(3,0);});
	$(".map-section.sublevel-3").click(function(){$.fn.fullpage.moveTo(3,1);});
	$(".scroller").click(function()
	{
		if($("#map .active").attr("class").indexOf("0") > 0){$.fn.fullpage.moveSectionDown();}
		else if($("#map .active").attr("class").indexOf("1") > 0){$.fn.fullpage.moveSectionDown();}
		else if($("#map .active").attr("class").indexOf("2") > 0){$.fn.fullpage.moveSlideRight();}
	});
	window.sitemap = true;
	Materialize.toast("<a class='modal-trigger modal-action modal-open' href='#sitemap' id='sitemap-trigger'>The Miner's Guide / SiteMap</a>");
	$('#sitemap-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      ready: function() {$("#toast-container").hide();}, // Callback for Modal open
      complete: function() {$("#toast-container").show();} // Callback for Modal close
    });
	$('#best-game-video-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      ready: function() {if(!$("#best-video-not-loaded").length)window.startBestGameVideo();}, // Callback for Modal open
      complete: function() {window.stopBestGameVideo();} // Callback for Modal close
    });
	$('#best-points-table-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      ready: function() {}, // Callback for Modal open
      complete: function() {} // Callback for Modal close
    });
	$('#music-video-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      ready: function() {if(!$("#music-video-not-loaded").length)window.startMusicVideo();}, // Callback for Modal open
      complete: function() {window.stopMusicVideo();} // Callback for Modal close
    });
	$('#best-game-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      ready: function() {}, // Callback for Modal open
      complete: function() {} // Callback for Modal close
    });
	$("#ground-ul-tabs").tabs();
	$("#section-3-tabs").tabs();
	$("#robot-progression-slider .slider").slider({height:350}).slider("pause");

	 function e() {
        function f(e) {
            if (e < 10) e = "0" + e;
            return e;
        }
        var t = new Date();
        var n = t.getHours();
        var r = t.getMinutes();
        var i = t.getSeconds();
        var s = "am";
        if (n > 12) {
            s = "pm";
            n = n - 12;
        }
        r = f(r);
        i = f(i);
        var o = "  :  ";
        var u = n + o + r + o + i + " " + s;
        $($(".currentTime")[0]).html(u);
        var a = setTimeout(function() {
            e();
        }, 500);
    }
    e();
    $("#toast-container").delay(1500).addClass("animated pulse").removeClass("animated pulse");
    setTimeout(function(){$("#toast-container").delay(1500).addClass("animated pulse")}, 3000);
});
