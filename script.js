$(document).ready(function(){
	
	slideshows = $('div.slideshow');
	
	$('div.titles p').click(setSlideshow);
	$('.sb').click(setSlideshow)
	$(document).keydown(function(e){
		switch (e.which) {
			case 37:
				$("div.content .slideshow").slickPrev();
				break;
			case 39:
				$("div.content .slideshow").slickNext();
				break;
			default:
				return;
		}
	});

});

var setSlideshow = function() {
	story = $(this).attr("class");
	console.log(story);

		$("img.bigphoto").hide();

		for (var i = 0; i <= slideshows.length - 1; i++) {
			s = $(slideshows[i]);

			if (s.attr("id") == story) {
				$("div.content").append(slideshows[i]);
				s.show();
			} else {
				s.hide();
			}

		};

		$("div.content .slideshow").slick({
		});

}

$('.fancybox').fancybox();
});












$('css selector').event