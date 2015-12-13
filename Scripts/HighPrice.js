var high; 
$( document ).ready(function() {
	$( "#tabs" ).tabs(); 
	
	//setTapTitle
	$('div [class*="ui-tabs-panel"] div:nth-of-type(1)').each(function(i,o){
		if( i!= 0){
			$($('li [class*="ui-tabs-anchor"]')[i]).text($(this).text().substring(5)+"篩選資料");
		}
	})
	
	
	//sort
	var a = $("table").stupidtable();
	a.bind('aftertablesort', function (event, data) {
		$(this).find('tbody td').css('padding-top','');
		var theadhigh = $(this).find("thead").height();
		$("tbody tr:nth-of-type(1)").find('td').css("padding-top", theadhigh+"px");
	});
	
	//table scroll
	var table = $("#simpleTable3");
	$(window).scroll(function() {
		var windowTop = $(window).scrollTop(); 
		if(windowTop > table.offset().top) 
		{
			$("thead", table).addClass("Fixed").css("top", windowTop);
		}
		else 
		{
			$("thead", table).removeClass("Fixed").css("top", high+"px");
		}
	})	
	
	//click refresh tr padding-top, thead top
	$('li').bind('click', function(){
		high = $('ul').height()+50;
		$("thead").css("top", high+"px");
		$('thead').each(function() {
			if($(this).height()>0)
			$("tbody tr:nth-of-type(1)").find('td').css("padding-top", $(this).height()+"px");
		});
	})
	
});