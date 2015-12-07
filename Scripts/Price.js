var high; 
$( document ).ready(function() {
	$( "#tabs" ).tabs(); 
	
	
	//sort
	var a = $("#simpleTable").stupidtable();
	var b = $("#simpleTable2").stupidtable();
	a.add(b).bind('aftertablesort', function (event, data) {
		$(this).find('tbody td').css('padding-top','');
	});
	
	//table scroll
	var table = $("#simpleTable");
	var table2 = $("#simpleTable2");
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
		if(windowTop > table2.offset().top) 
		{
			$("thead", table2).addClass("Fixed").css("top", windowTop);
		}
		else 
		{
			$("thead", table2).removeClass("Fixed").css("top", high+"px");
		}
	});

	//click refresh tr padding-top, thead top
	$('#ui-id-2').add($('#ui-id-3')).bind('click', function(){
		high = 	$(this).offset().top;
	//	$("thead", table).css("top", high+"px");
	})

});





function searchA(text){
	$.each($("#simpleTable tbody").find("tr"), function() {
		if($($(this).find('td')[0]).text().toLowerCase().indexOf(text.toLowerCase()) != -1||$($(this).find('td')[1]).text().toLowerCase().indexOf(text.toLowerCase()) != -1)
		{
			$(this).show();
		}
		else
		{
			$(this).hide();
		}
	});
} 
function searchB(text){
	$.each($("#simpleTable2 tbody").find("tr"), function() {
		if($($(this).find('td')[0]).text().toLowerCase().indexOf(text.toLowerCase()) != -1||$($(this).find('td')[1]).text().toLowerCase().indexOf(text.toLowerCase()) != -1) 
		{
			$(this).show();
		}
		else
		{
			$(this).hide();
		}
	});
}