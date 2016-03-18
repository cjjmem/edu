$(function(){
		$('.article_page>a').eq(0).mouseover(function(){
		$('.curr').css('color','#FFFFFF');
	}).mouseout(function(){
		$('.curr').css('color','red');
	});	   
		$('.common_big').trunmenu({
			element_link : '.commonuser>a',
			element_ul :'.common_big>.content',
			element_count :	0,
			element_type :	'mouseover',
			element_class :	'active'
		});
	})

	
