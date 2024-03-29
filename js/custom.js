/* 
 * custom js Document
*/ 

//ani content show
$(window).scroll( function(){
	if($('.area_visual').length > 0){
		$('.scroll_up').each( function(i){		
			var bottom_of_object = $(this).offset().top + $(this).outerHeight()/3;
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			
			if( bottom_of_window > bottom_of_object ){                
				$(this).addClass("active");	                    
			}	
		}); 
	}else{
		$('.scroll_up').each( function(i){		
			var bottom_of_object = $(this).offset().top + $(this).outerHeight()/3;
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			
			if( bottom_of_window > bottom_of_object ){                
				$(this).addClass("active");	                    
			}else{
				$(this).removeClass('active');
			}		
		});   
	}
});


$(window).load(function(){
	smoothScroll();
	if($('.area_visual').length > 0){
		$('head').append('<script type="text/javascript" src="/js/shooting.js"></script>');
		setTimeout(start, 200);
	}
	//ie
	var agent = navigator.userAgent.toLowerCase();
	if (agent.indexOf("msie") > -1 || agent.indexOf("trident") > -1) {
		$('head').append('<link rel="stylesheet" type="text/css" href="/css/ie_only.css"/>');
	  	//$('.area_live .info .ie, .area_sublive .ie').show();
	  	//$('.area_live .info .order, .area_sublive .order').hide();
	  	
	  	if($('.area_visual').length > 0){
	  		$('.obj_open').addClass('edge');
		  	$('#wrap, .layerPop').addClass('show');
			wordLetter();
			$('.area_visual *[data-visual-title="01"]').addClass('active');
			wordShow();
	  	}
	} else if ( agent.search( "edge/" ) > -1 ){
		if($('.area_visual').length > 0){
			if($('.area_visual').length > 0){
				$('.obj_open').addClass('edge')
			  	$('#wrap, .layerPop').addClass('show');
				wordLetter();
				$('.area_visual *[data-visual-title="01"]').addClass('active');
				wordShow();
		  	};
		}
	} else {
		//$('.area_live .info .ie, .area_sublive .ie').hide();
	  	//$('.area_live .info .order, .area_sublive .order').show();
	  	
	  	if($('.area_visual').length > 0){
			setTimeout(function(){
				$('#wrap, .layerPop').addClass('show');
				wordLetter();
				$('.area_visual *[data-visual-title="01"]').addClass('active');
				wordShow();
			}, 1500);
			
			setTimeout(function(){
				$('.obj_open.show').hide();
			}, 5000);
		}
	}
	
	//open show
	if(!($('.area_visual').length > 0)){
		setTimeout(function(){
			$('#wrap').addClass('show');
			wordLetter();
			$('.area_visual_sub *[data-visual-title="01"]').addClass('active');
			wordShow();
		}, 500);
	}
});

//mobile visual
$(window).load(function(){
	if($('.area_visual').length > 0){
		var widthMatch = matchMedia("all and (max-width:1200px)");
		var widthHandler = function(matchList) {
			if(matchList.matches) {
				$('.area_visual *[data-visual-title="01"]').hide();
				$('.area_visual').addClass('active');
				$('.area_visual *[data-visual-title="02"]').addClass('active');
				$('.area_visual *[data-visual-title="02"]').find('span.wordAni').addClass('active');
				//wordShow();
			}else{
				$('#header').removeClass('active');
				$('.area_visual').removeClass('active');
				$('.area_visual *[data-visual-title="01"]').show().addClass('active');
				$('.area_visual *[data-visual-title="02"]').removeClass('active');
				//wordShow();
			}
		};
		widthMatch.addListener(widthHandler);
		widthHandler(widthMatch);
	}
});

//gnb
$(document).ready(function() {
	responsive();
	
	//attr
	$.fn.toggleAttr = function(attr, attr1, attr2) {
		return this.each(function() {
			var self = $(this);
			if (self.attr(attr) == attr1)
				self.attr(attr, attr2);
			else
				self.attr(attr, attr1);
		});
	};
});

function responsive(){
	var res = ""
	var param = $("body");
	
	//var gnbHtml = $('#header nav').html();
	var gnbArea = $('#header nav .gnb li');
	var gnbLink = gnbArea.children('a');
	var gnbOpen = gnbArea.children('ul').prev('a');
	gnbLink.wrapInner('<span></span>');
	gnbOpen.addClass('open');
	
	//$('.mob_gnb .inr').append(gnbHtml);
	$('.mob_gnb .btn_menu').append('<i></i><i></i><i></i>');
	
	var mobArea = $('.mob_gnb .gnb li');
	var mobLink = mobArea.children('a');
	var mobDethLink = $('.mob_gnb .gnb > li > ul > li').children('a');
	var mobOpen = mobArea.children('ul').prev('a');
	mobOpen.addClass('open').wrapInner('<span></span>');

	//default 
	if(!$(".btn_menu").is(":hidden")) res = "mob";
	else res = "web";  
	param.attr("class",res);
	def(param);

	$(window).resize(function(){
		if(!$(".btn_menu").is(":hidden")) res2 = "mob";
		else res2 = "web"; 
		param.attr("class",res2);
		if(res != res2){
			res = res2;  
			def(param);
		}
	}); 

	//mobile
	$('.mob_gnb .btn_menu').on('click',function(){
		$(this).toggleClass('active');
		$('.mob_gnb').toggleClass('active');
		$('body.mob').toggleAttr('id', 'bodyActive', '');
		$('.area_util').toggleClass('mob');
		
		if(!($(this).hasClass('active'))){
			$('.mob_gnb .gnb li a').removeClass('on');
			$('.mob_gnb .gnb > li > ul > li > ul').stop().slideUp();
		}
	});
	
	mobLink.hover(function(){
		$(this).addClass('active').parents('li').addClass('active'); 
			$(this).parent().hover(function() {						
		}, function(){     
			$(this).removeClass('active', function(){							
				$(this).parents('li').removeClass('active');
				$(this).parent().find('a').removeClass('active');
			});    
		}); 
	});
	
	mobDethLink.click(function(e){
		if($(this).parent().find('ul').length > 0){
			e.preventDefault();
			$(this).toggleClass('on').parent().children('ul').stop().slideToggle();
		}
	});
	
	gnbLink.hover(function() {
		$(this).addClass('active').parent().addClass('active'); 
			$(this).parent().hover(function() {						
		}, function(){     
			$(this).removeClass('active', function(){							
				$(this).parent().find('a').removeClass('active');
			});    
		}); 					
		
		if(!($(this).parent().find('ul').length > 0)) {
			$(this).parent().removeClass('active').find("a").removeClass('active');
		}
	});
	
	//기초설정
	function def(param){
		if(param.attr("class") == "web"){
			$('body').attr('id','');
			$('.mob_gnb').removeClass('active');
			$('.mob_gnb .btn_menu').removeClass('active');
			$('.mob_gnb .gnb li a').removeClass('on');
			$('.mob_gnb .gnb > li > ul > li > ul').stop().slideUp();
			$('.area_util').removeClass('mob');
		} else if (param.attr("class") == "mob"){  
			
		}
	}
}

//lang
$(function(){
	$('.area_lang button').on('click',function(){
		$(this).toggleClass('active').next('ul').stop().slideToggle();
	});
	$('.area_lang').mouseleave(function(){
		$('.area_lang button').removeClass('active').next('ul').stop().slideUp();
	});
});

//lnb snb tab
$(function(){
	var gnbTitle = $('#header nav .gnb > li').children('a.on').text();
	$('.area_visual_sub em[data-visual-title] > i').text(gnbTitle);

	var lnbTitle = $('.area_lnb .lnb').children('ul').find('a.on').text();
	var snbTitle = $('.area_lnb .snb').children('ul').find('a.on').text();
	var tabTitle = $('.area_tab').children('ul').find('a.on').text();
	
	$('.area_lnb .lnb button').children('span').text(lnbTitle);
	$('.area_lnb .snb button').children('span').text(snbTitle);
	
	$('.area_lnb button').on('click',function(){
		$(this).toggleClass('active').next('ul').stop().slideToggle();
	});
	$('.area_lnb').mouseleave(function(){
		$('.area_lnb button').removeClass('active').next('ul').stop().slideUp();
	});	
	$('.area_tab ul > li').find('a').wrapInner('<span></span>');

	//lnb snb 노출
	if(!($('.area_lnb .snb').children('ul').length > 0)){
		$('.area_lnb').addClass('showLnb');
	}else{
		$('.area_lnb').addClass('showSnb');
	}

	//title h3
	if(!($('.area_tab').children('ul').length > 0)){
		if(!($('.area_lnb .snb').children('ul').length > 0)){
			$('#content h3[data-cont-title]').text(lnbTitle);
		}else{
			$('#content h3[data-cont-title]').text(snbTitle);
		}
	}else{
		$('#content h3[data-cont-title]').text(tabTitle);
	}
});

//main set
function funLoad(){		
	var wH = $(window).height();
	wH = parseInt(wH);
	$('.area_visual, .area_sns').css('height',$(window).height());
	$('.mob_gnb .inr').css({'height':$(window).height(),'top':'-'+ wH +'px'});
}

$(window).resize(function(){ 
	funLoad();
	smoothScroll();
	if($('.area_visual').length > 0){
		start();
	}
});


$(function(){
	funLoad(); 
	videoSrc = $("#videoSrc").attr('src');
	videoShow();
	
	if($('.area_visual').length > 0){
		$('body').append('<div class="obj_open"></div>');
		setTimeout(function(){
			$('.obj_open').addClass('show');
		}, 200);
		
		//main banner
		var banSlider = $('.area_banner .list').bxSlider({
			mode:'horizontal',
			auto:true,
			pager:false,
			autoHover:true,
			slideMargin:30,
			slideWidth:240,
			minSlides:1,
			maxSlides:3,	
			moveSlides:1,
			pause:5000,
			speed:1000,
			nextText:'알림존 이전보기',
			prevText:'알림존 다음보기',
		});
		
		//키보드접근
		$('.area_banner .list > li:first-child > a').focus(function(){
			banSlider.reloadSlider({
				mode:'horizontal',
				auto:true,
				pager:false,
				autoHover:true,
				slideMargin:30,
				slideWidth:240,
				minSlides:1,
				maxSlides:3,	
				moveSlides:1,
				pause:5000,
				speed:1000,
				nextText:'알림존 이전보기',
				prevText:'알림존 다음보기',
			});
		});
		
		var logoSlider = $('.area_logo .list').bxSlider({
			mode:'horizontal',
			auto:true,
			pager:false,
			autoHover:true,
			autoControls:true,
			autoControlsCombine:true,
			slideMargin:22,
			slideWidth:180,
			minSlides:2,
			maxSlides:6,	
			moveSlides:1,
			nextText:'관련사이트 이전보기',
			prevText:'관련사이트 다음보기',
			startText:'관련사이트 슬라이드 재생',
			stopText:'관련사이트 슬라이드 정지',
		});
		//키보드접근
		$('.area_logo .list > li:first-child > a').focus(function(){
			logoSlider.reloadSlider({
				mode:'horizontal',
				auto:true,
				pager:false,
				autoHover:true,
				autoControls:true,
				autoControlsCombine:true,
				slideMargin:22,
				slideWidth:180,
				minSlides:2,
				maxSlides:6,	
				moveSlides:1,
				nextText:'관련사이트 이전보기',
				prevText:'관련사이트 다음보기',
				startText:'관련사이트 슬라이드 재생',
				stopText:'관련사이트 슬라이드 정지',
			});
		});
		
		$('.area_visual .btn_open').on('click',function(){
			var btnText = $('.area_visual .btn_open span').text();
			var btnTitle = $('.area_visual .btn_open').attr('title');
			$(this).children('span').text(btnText == 'OPEN' ? 'CLOSE' : 'OPEN');
			$(this).attr('title',btnTitle == '바로가기 열기' ? '바로가기 닫기' : '바로가기 열기');
			$('.area_visual, #header').toggleClass('active',function(){
				if($('.area_visual').hasClass('active')){
					$('.area_visual *[data-visual-title="01"]').removeClass('active');
					$('.area_visual *[data-visual-title="02"]').addClass('active');
					wordShow();
				}else{
					$('.area_visual *[data-visual-title="02"]').removeClass('active');
					$('.area_visual *[data-visual-title="01"]').addClass('active');
					wordShow();
				}
			});
		});
		
	}
});

//video
function videoShow(){
	if($('.area_visual .video').is(':hidden') || is_mob()){
		$("#videoSrc").attr('src','');
	}else{
		$("#videoSrc").attr('src',videoSrc);
		$("#videoPlayer").load();
		$('.video .btn_stop').on('click',function(){
			$("#videoPlayer").get(0).pause();
			$(this).hide();
			$('.video .btn_play').show();
		});
		$('.video .btn_play').on('click',function(){
			$("#videoPlayer").get(0).play()
			$(this).hide();
			$('.video .btn_stop').show();
		});
	}
}

//tab
$(function(){	
	$('.area_tab_main').each(function(){
		var tabBtn = $(this).children('button');
		var tabConts = $(this).children('.list');
		tabConts.hide();
		tabBtn.on('click',function(){
			if($(this).hasClass('on')) return;
			tabConts.hide();
			$(this).next('.list').show();
			tabBtn.removeClass('on');
			$(this).addClass('on');
			return false;
		});
		
		tabBtn.eq(0).click();
		tabConts.eq(0).show();
	});
});


//ani
function wordLetter(){
	$('*[class^="wordAni"]').each(function(){
		$(this).html($(this).text().replace(/(.)/g, '<span class="word">$&</span>'));
	});
}
function aniText(){
	anime.timeline({loop: false})
	.add({
		targets: '*[data-visual-title].active .wordAni .word',
		opacity: [0,1],
		easing: "easeInOutQuad",
		duration: 2200,
		delay: function(el, i) {
			return 150 * (i+1)
		}
	})
}
function aniBigText(){
	anime.timeline({loop: false})
	.add({
		targets: '*[data-visual-title].active .wordAniBig .word',
		opacity: [0,1],
		easing: "easeInOutQuad",
		duration: 1500,
		delay: function(el, i) {
			return 500 * (i+1)
		}
	})
}
//ani total
function wordShow(){
	aniBigText();
	$('*[class^="area_visual"] *[data-visual-title] .wordAni').removeClass('active');
	setTimeout(function() {
		$('*[class^="area_visual"] *[data-visual-title].active .wordAni').addClass('active');
		aniText();
    }, 1000);
}

function is_mob(){
    return (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera);
}

function is_mac(){
    return navigator.platform.indexOf('Mac') > -1;
}

function is_chrome(){
    return /Chrome/.test(navigator.userAgent);
}

function is_firefox(){
    return /Firefox/.test(navigator.userAgent);
}

function smoothScroll(){
    if(!$(".btn_menu").is(":hidden") || is_mob() || is_mac() || is_firefox()) return;
	var $window = $(window);
    if(smoothScroll_passive()){
        window.addEventListener("wheel",smoothScroll_scrolling,{passive: false});
    }else{
        $window.on("mousewheel DOMMouseScroll", smoothScroll_scrolling);
    }
}

function smoothScroll_passive(){
    var supportsPassive = false;
    try {document.addEventListener("test", null, { get passive() { supportsPassive = true }});
    } catch(e) {}
    return supportsPassive;
}

function smoothScroll_scrolling(event){
	if(!event.path){
		event.path = new Array();
		function callParentNode(child){
			if(child.parentNode){
				event.path.push(child.parentNode);
				callParentNode(child.parentNode);
			}
			return;
		}
		event.path.push(event.target);
		callParentNode(event.target);
	}
	
	var impossibility = new Array("map", "mob_gnb");
	for(var i=0; event.path.length > i; i++){
		for(var j=0; impossibility.length > j; j++){
			if(event.path[i].getAttribute && event.path[i].getAttribute("id") ==impossibility[j])return;
		}
	}

	event.preventDefault();
    var $window = $(window);
	var scrollTime = 1;
	var scrollDistance = $window.height() / 2.5;
	var delta = 0;
    if(smoothScroll_passive()){
	    delta = event.wheelDelta/120 || -event.originalEvent.detail/3;
	}else{
		if(typeof event.originalEvent.deltaY != "undefined"){
			delta = -event.originalEvent.deltaY/120;
		}else{
		    delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		}
	}

	var scrollTop = $window.scrollTop();
	var finalScroll = scrollTop - parseInt(delta*scrollDistance);
	TweenMax.to($window, scrollTime, {
		scrollTo : { y: finalScroll, autoKill:true },
		ease: Power3.easeOut,
		overwrite: 5
	});
}


$(function(){
	if(($('.area_visual').length > 0)) return;
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('.area_lnb').offset().top + 300;

	$(window).scroll(function(event){
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	function hasScrolled() {
		var st = $(this).scrollTop();
		
		if(Math.abs(lastScrollTop - st) <= delta) return;		
		
		if (st > lastScrollTop && st > navbarHeight){
			// Scroll Down
			$('.area_lnb').addClass('fix');
			setTimeout(function(){
				$('.area_lnb').addClass('show');
			}, 300);

		} else {
			// Scroll Up
			if(st + $(window).height() < $(document).height()) {
				$('.area_lnb').removeClass('show');
				setTimeout(function(){
					$('.area_lnb').removeClass('fix');
				}, 500);
			}
		}
		
		lastScrollTop = st;
	}

});