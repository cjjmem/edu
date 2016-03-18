	var curIndex_b = 0;
	var curRoad_b = 0;
	var imgLen_b = $(".img_sbig>a>img").length; //Í¼Æ¬×ÜÊý
	var del_b = imgLen_b-1;
	function percent(){
		$('.count').html((curIndex_b+1)+'/'+imgLen_b);
		}
		percent();
	 $(".img_big>a").eq(curIndex_b).addClass('active');
	 $(".img_sbig>a").eq(curIndex_b).addClass('active');
	 $(".img_sbig>a").bind('click',function(e){
				 var now_num = $(this).index();
				 $(this).addClass('active').siblings().removeClass('active');
				 var move_num = curIndex_b - now_num;
				 $(".img_big>a").eq(curIndex_b).addClass('active').siblings().removeClass('active');
				 $(".img_big").animate({
								left: '+='+move_num*805.5
							},'middle');
				 curIndex_b = now_num ; percent();
				 e.preventDefault();
											});
		  $(".preb").bind('click',function(){ 
	  		if(curIndex_b <= del_b&&curIndex_b>0){
   			changeTo_b(1,curIndex_b);
			curIndex_b--;
			$(".img_big>a").eq(curIndex_b).addClass('active');
			$(".img_sbig>a").eq(curIndex_b).addClass('active').siblings().removeClass('active');percent();
			}
		});
		
		  $(".nextb").click(function(){ 
	  		if(curIndex_b < del_b&&curIndex_b>=0){
				changeTo_b(0,curIndex_b);
				curIndex_b++;
				$(".img_big>a").eq(curIndex_b).addClass('active');
				$(".img_sbig>a").eq(curIndex_b).addClass('active').siblings().removeClass('active');percent();
			}
		
									  });
		 function changeTo_b(curRoad_b,curIndex_b){
		 	if(curRoad_b==0){
				if(curIndex_b>4){
					$(".img_sbig").animate({
									left: '-='+155
								},'middle');
				}
				$(".img_big").animate({
								left: '-='+805.5
							},'middle');
			}else{
				if(curIndex_b>imgLen_b-7){
					$(".img_sbig").animate({
									left: '+='+155
								},'middle');
				}
				$(".img_big").animate({
								left: '+='+805.5
							},'middle');

				}
		 }
		 
 
