$(document).ready(function(){
	
	/* ---------- Placeholder Fix for IE ---------- */
	$('input, textarea').placeholder();

	/* ---------- Auto Height texarea ---------- */
	$('textarea').autosize();   
	
    
	    $.ajax({
	        type: 'GET',
	        url: 'http://localhost:59563/api/Values'
	    }).done(function (data) {
	        $('#test').append(data);
	    });
});