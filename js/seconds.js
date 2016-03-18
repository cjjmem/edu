$('.common_banner>li').eq(0).show().siblings().hide();
$('.new_into>a').eq(0).show().siblings().hide();
		$('.common_banner>li').each(function(){
					$('.mouse_down').append("<a href='#'></a>");
											 
		});
		$('.mouse_down>a').eq(0).addClass("active");
		$('.mouse_down>a').mouseover(function(){
					$(this).addClass("active").siblings().removeClass("active");
					var i = $(this).index();
					$('.common_banner>li').eq(i).show().siblings().hide();
					$('.new_into>a').eq(i).show().siblings().hide();
					
		});

//common server

$('.common_server>.server>li').hover(function(){
		var num_boxli =$(this).index('.common_server>.server>li')+1;			 
		$(this).children().children().attr('src','images/bowtwo_0'+num_boxli+'.png');
	},function(){
		var num_boxli =$(this).index()+1;						 
		$(this).children().children().attr('src','images/bowtwo_'+num_boxli+'.png');
	}
	);
$('.common_server>.server').eq(0).show().siblings('ul').hide();
$('.common_server>.server').eq(0).addClass('active');
$('.common_server>.pre').click(function(){alert(1);
		var ul_len = $('.common_server>.server').length;						 
		var now_ul = $('.common_server>.active').index('.common_server>.server');	
		if(now_ul>0){
			now_ul-=1;
			$('.common_server>.server').eq(now_ul).show().siblings('ul').hide();
			$('.common_server>.server').eq(now_ul).addClass('active').siblings('ul').removeClass('active');
			}
	});
$('.common_server>.next').click(function(){
		var ul_len = $('.common_server>.server').length;						 
		var now_ul = $('.common_server>.active').index('.common_server>.server');	
		if(now_ul<ul_len){
			now_ul+=1;
			$('.common_server>.server').eq(now_ul).show().siblings('ul').hide();
			$('.common_server>.server').eq(now_ul).addClass('active').siblings('ul').removeClass('active');
			}
	});

	var curIndex_g = 0;
	var curRoad_g = 0;
	var imgLen_g = $(".img_gan>a>img").length; //图片总数
	var del_g = imgLen_g-5;
	var autoChange_g = setInterval(function(){ 
	  if(curIndex_g < del_g&&curRoad_g==0){ 
		curIndex_g++ ;
	  }else{
	  	curRoad_g=1;
		curIndex_g-- ;
		if(curIndex_g <0){
				curRoad_g=0;
				curIndex_g=1 ;
			}
	  }
	  changeTo_g(curRoad_g);
	  },1000);
	 
		 $(".pretwo").hover(function(){ 
	  //滑入清除定时器
		  clearInterval(autoChange_g);
		},function(){ 
		  //滑出则重置定时器
		  autoChangeAgain_g();
		});
		  $(".pretwo").bind('click',function(){ 
	  		if(curIndex_g < del_g&&curIndex_g>0){
   			changeTo_g(1);
			curIndex_g--;
			
			}
		});
		  
		 $(".nexttwo").hover(function(){ 
	  //滑入清除定时器
		  clearInterval(autoChange_g);
		},function(){ 
		  //滑出则重置定时器
		  autoChangeAgain_g();
		});
		  $(".nexttwo").click(function(){ 
	  		if(curIndex_g < del_g&&curIndex_g>=0){
				changeTo_g(0);
				curIndex_g++;
			}
		}); 
		 
		function autoChangeAgain_g(){
			autoChange_g = setInterval(function(){ 
			  if(curIndex_g < del_g&&curRoad_g==0){ 
				curIndex_g++ ;
			  }else{
				curRoad_g=1;
				curIndex_g-- ;
				if(curIndex_g <0){
						curRoad_g=0;
						curIndex_g=1 ;
					}
			  }
			  changeTo_g(curRoad_g);
			  },1000);
		 }
		 function changeTo_g(curRoad_g){
		 	if(curRoad_g==0){
				$(".img_gan").animate({
								left: '-='+90
							},'middle');
			}else{
				$(".img_gan").animate({
								left: '+='+90
							},'middle');

				}
		 }
		 
 
//second_rightCarou
//pictureCarousel
$(function(){
		$('.second_fivebox').trunmenu({
			element_link : '.rightbox>.common_buybox>.header1>a',
			element_ul :'.rightbox>.common_buybox>.content',
			element_count :	0,
			element_type :	'mouseover',
			element_class :	'active'
		});
		$('.common_law').trunmenu({
			element_link : '.common_ultag>a',
			element_ul :'.common_law>ul',
			element_count :	0,
			element_type :	'mouseover',
			element_class :	'active'
		});   
		$('.common_pricture').trunmenu({
			element_link : '.nav>a',
			element_ul :'.common_pricture>ul',
			element_count :	0,
			element_type :	'mouseover',
			element_class :	'active'
		});
	})