$('document').ready(function() {
    $( function() {

        $( "#calendar2" ).datepicker();
        
    } );
	$(function(){
		let obj = $("div.ui-datepicker"),
		cssParam = {'width': '13.4em', 'height': '13.4em'};
		obj.css(cssParam);
		obj.click(function(){$(this).css(cssParam)});
	});
});
