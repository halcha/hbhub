//non functional but this is the idea. working in test environment at https://codepen.io/sammyHall/pen/qBqOBbL

var x = 1;
	$("#sinolo input").attr('value', x);
    	$("#inc").click(function(){
	      $("#sinolo input").attr('value', ++x);
	    });
	    $("#dec").click(function(){
	      $("#sinolo input").attr('value', --x);
        });