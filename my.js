$(".oval").mouseenter(function(){
	$(".krug").css("visibility", "visible");
});
$("#kv").mouseenter(function(){
	$("#kv_sm").css("visibility", "visible");
});

$("#kv").mouseover(function(){
	$("#kv_sm").animate({bottom:'0',left:'0'}, 1000);
});
