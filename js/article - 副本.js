$('.content').eq(0).show().siblings('.content').hide();
var element_a = '.commonuser>a' ;
var element_b = '.content' ;
$(element_a).mouseover(function(){
	 var num = $(this).index(element_a);
	 $(this).addClass('active').siblings().removeClass('active');
	 $(element_b).each(function() {
		 if($(this).index(element_b)==num){
		 	$(this).show();
		 }else{
			$(this).hide();
		 }
     });
}); 

/*图文*/
var element_a = '.common_pricture>.nav>a' ;
var element_b = '.common_pricture>ul' ;
$(element_b).eq(0).show().siblings(element_b).hide();
$(element_a).mouseover(function(){
	 var num = $(this).index(element_a);
	 $(this).addClass('active').siblings().removeClass('active');
	 $(element_b).each(function() {
		 if($(this).index(element_b)==num){
		 	$(this).show();
		 }else{
			$(this).hide();
		 }
     });
}); 

/*名师团队遮罩显示*/
$('.msteaml01 dl').bind('mouseenter', function () {
	$(this).find('dt div').hide();
	$(this).find('dd').stop().animate({'top':0},300);
}).bind('mouseleave', function () {
	$(this).find('dd').stop().animate({'top':175},300);
	$(this).find('dt div').show();
});