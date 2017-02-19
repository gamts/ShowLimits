/*
	data: 19/02/2017
	https://github.com/gamts
*/
$(document).ready(function(){

var style_btn = "<style>\r\
	.btn-limits {\r\
		width: 50px;\r\
		height: 20px;<br>\r\
		background-color: rgba(0,0,0,.1);\r\
		border: none;\r\
		position: fixed;\r\
		top: 10px;\r\
		left: 10px;\r\
		color: #fff;\r\
		border-radius: 5px;\r\
		z-index: 10;\r\
	}\r\
</style>";

var style = "\"<style class='show-limits'> * { outline-style: dashed; outline-width: 1px; outline-color: #FF1493; }</style>\"";


$("head").append(style_btn);
$("body").append("<button class='btn-limits'>OFF</button>");

var script = "<script>\r\
	var style = " + style + "\r\
	$('.btn-limits').click(function(){\r\
		if ($(this).text()=='OFF') {\r\
			$(this).text('ON');\r\
			$(this).css('background-color','rgba(102,205,0,.5)');\r\
			$('head').append(style);\r\
			$(this).css('outline-style','none');\r\
		} else {\r\
			$(this).text('OFF');\r\
			$(this).css('background-color','rgba(0,0,0,.1)');\r\
			$('.show-limits').remove();\r\
		}\r\
	});\r\
</script>"

$("body").append(script);

});

