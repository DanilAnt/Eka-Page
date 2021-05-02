$(function(){
    let slider=$("#portfolio-slider");
        slider.slick({
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: true,
		  dots: false,
		  adaptiveHeight: true,
          prevArrow: $("#btn-left"),
          nextArrow: $("#btn-right"),
		});
        
    })