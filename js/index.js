$(function() {
	/*头部滑动条*/
	
    $(".head_list").append("<li id='magic-line'></li>");
    var $magicLine = $("#magic-line"); 
    $magicLine
        .width($(".current_page_item").width())
        .css("left", $(".current_page_item").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());
     $(".head_list li").click(function(){
     	var left=$("#magic-line").position().left
     	$(this).addClass("current_page_item").siblings().removeClass("current_page_item")
     	$magicLine.data("origLeft",left)
     })   
    $(".head_list li>a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;       
        newWidth = $el.parent().width();      
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });    
    });
     
    /*全屏滚动*/
   $('#XinRong').fullpage({
		continuousVertical: false,
		anchors: ['page1', 'page2', 'page3', 'page4',"page5",,"page6"],
		menu: '#menu',
		afterLoad:function(anchorLink, index){
			$(".section_list>ul>li").eq(index-1).find("a").addClass("section_listActive").parents("li").siblings().find("a").removeClass("section_listActive")
			if (index!=1) {
				$(".head").css("background","#000000")
			}else{
				$(".head").css("background","none")				
			}
			if (index==5) {
				console.log($(".alterBOX"))
				$(".alterBOX").show()
				var AboutUs_number1=0;
				var AboutUs_number2=0;
				var AboutUs_number3=0;
				var time1=setInterval(function(){
					AboutUs_number1++
					$(".AboutUs_number1").html(AboutUs_number1)
					if(AboutUs_number1==30){
						clearTimeout(time1)
					}
				},20);
				var time2=setInterval(function(){
					AboutUs_number2++
					$(".AboutUs_number2").html(AboutUs_number2)	
					if(AboutUs_number2==1000){
					clearTimeout(time2)
				}
				},0.1);
				var time3=setInterval(function(){
					AboutUs_number3++
					$(".AboutUs_number3").html(AboutUs_number3)	
					if(AboutUs_number3==300){
					clearTimeout(time3)
				}
				},10);				
			}else{
				$(".alterBOX").hide()
				
			}
		}
		
	});
	
	/*下拉菜单*/
	$(".head_list>li").hover(function(){
		$(this).find(".head_listChild").stop().slideToggle()
		
	})
	/*产品product hover效果*/
		$(".txt").mouseover(function(){
		$(".txt").find("span").fadeOut(100)
		var id=$(this).attr("id")
		$(this).find("span").fadeIn(200)
		$(".left").stop().animate({height:"0%"},100)
		$(".right").stop().animate({height:"0%"},100)
		$(".top").stop().animate({width:"0%"},300)
		$(".bottom").stop().animate({width:"0%"},300,function(){
			$(id).siblings("div").stop().slideUp(300)
			$(".left").stop().animate({height:"100%"},300)
			$(".right").stop().animate({height:"100%"},300)
			$(".top").stop().animate({width:"100%"},300)
			$(".bottom").stop().animate({width:"100%"},300,function(){
				$(id).stop().slideDown(1000)	
			})						
		})							
	})

	/*关闭弹出框*/
	$(".alter_button button").eq(1).click(function(){
		$(".alterBOX").hide()
	})
});