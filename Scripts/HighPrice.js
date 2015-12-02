var high; 
$( document ).ready(function() {
	$( "#tabs" ).tabs(); 
	
	//sort
	var a = $("#simpleTable3").stupidtable();
	a.bind('aftertablesort', function (event, data) {
		$(this).find('tbody td').css('padding-top','');
		$.each($(this).find('tbody tr')[0].children,function(i,o){
			//$(this).css('padding-top',$('thead tr').css('height'));
		});
	});
	
	//table
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
	$('#ui-id-2').bind('click', function(){
		//$($('tbody tr')[0].children).css('paddind-top',$("thead tr").css('height'));
		high = $('ul').offset().top - 20;
		$("thead", table).css("top", high+"px");
	})
	
});