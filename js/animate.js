;(function($){
	
	$.fn.trunmenu = function(option){
		var defaults = {
			//参数、属性
			element_link : '',
			element_ul : '',
			element_count :	0,
			element_type :	'mouseover',
			element_class :	''
			}
		var options = $.extend(defaults,options);
			
		this.each(function(){
			//功能
			var _this = $(this);
			$(option.element_ul).eq(option.element_count).show().siblings(option.element_ul).hide();
			_this.find(option.element_link).bind(option.element_type,function(){
					var num = $(this).index(option.element_link);
					$(this).addClass(option.element_class).siblings().removeClass(option.element_class);
					$(option.element_ul).each(function(){
						 if($(this).index(option.element_ul)==num){
							$(this).show();
						 }else{
							$(this).hide();
						 }
					});
			});
		});
			return this;
	}
})(jQuery);