$(function(){
			$(window).scroll(function() {
				var top=$(document).scrollTop();
				var nav=$("#nav");
				var items=$("#content").find(".item");
				var currentId="";
				items.each(function(){
					var m=$(this);
					var itemTop=m.offset().top;
					if(top>itemTop-180){
						currentId="#"+m.attr("id")
					}
					else{
						return false;
					}
				});
				var currentLink=nav.find(".current");
				if(currentId&&currentLink.attr("href")!=currentId){
					currentLink.removeClass('current');
					nav.find("[href="+currentId+"]").addClass('current');
				}
			});
		});