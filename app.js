jQuery(document).ready(function($){ 	
	if($(".up").length > 0){
		$(window).scroll(function () {
			var e = $(window).scrollTop();
			if (e > 300) {
				$(".up").show()
			} else {
				$(".up").hide()
			}
		});
		$(".up").click(function () {
			$('body,html').animate({
				scrollTop: 0
			})
		})
	}		
});