
$( document ).ready(function() {
	$('nav#menu').mmenu();
	
	//$( "#tabs" ).tabs(); 
	
	$('table[id^=simpleTable]').each(function(i,o){
		if($(this).attr('data-orderIndex') != undefined){
			$(this).DataTable({
				"order": [[ parseInt($(this).attr('data-orderIndex')), $(this).attr('data-sort') ]]
			});
		}
		else
		{
			$(this).DataTable();
		}
	});

	$('.scrollmenu input').click(function(){
		var id = $(this).attr('data-href');
		$('div[id^=tabs-]').each(function(j,p){
			if($(this).attr('id').indexOf(id) >= 0)
			{
				$(this).show();
			}
			else
			{
				$(this).hide();
			}
		});
	});
	
	//$('#content').load('http://localhost:1234/s.html');
});