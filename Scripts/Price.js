$( document ).ready(function() {
	$( "#tabs" ).tabs(); 
	var a = $("#simpleTable").stupidtable();
	var b = $("#simpleTable2").stupidtable();
	var table = $("#simpleTable");
	var table2 = $("#simpleTable2");
	a.add(b).bind('aftertablesort', function (event, data) {
		$(this).find('tbody td').removeAttr('class');
		$.each($(this).find('tbody tr')[0].children,function(i,o){
			$(this).addClass("td1");
		});
	});
	$(window).scroll(function() {
		var windowTop = $(window).scrollTop(); 
		if(windowTop > table.offset().top) 
		{
			$("thead", table).addClass("Fixed").css("top", windowTop);
		}
		else 
		{
			$("thead", table).removeClass("Fixed").css("top", "108px");
		}; 
		if (windowTop > table2.offset().top) 
		{
			$("thead", table2).addClass("Fixed").css("top", windowTop);
		}
		else 
		{
			$("thead", table2).removeClass("Fixed").css("top", "108px");
		}
	});
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