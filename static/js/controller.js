$("#b_space").on("click", function() {
	var space = $("#space").val().trim();
	var none = $("#none").val().trim();
	
	if(space == "") { 
		$("#message").text("space"); 
		//return false;  // выход из функции
	}
	
	$.ajax({
		url: 'http://vdk45.ddns.net:5000/controller',
		type: 'POST',
		cache: false,
		data: {'b_space': space, 'b_shoot': none, 'b_pause': none,'b_up': none,'b_down': none,'b_left': none,'b_right': none,},
		dataType: 'html',
		beforeSend: function(){
			$("#b_space").prop("disabled", true);
		},
		success: function(){
			$("#b_space").prop("disabled", false);
		}
	});
});

$("#b_down").on("click", function() {
	var down = $("#down").val().trim();
	var none = $("#none").val().trim();
	
	if(down == "") {
		$("#message").text("down");
	}
	
	$.ajax({
		url: 'http://vdk45.ddns.net:5000/controller',
		type: 'POST',
		cache: false,
		data: {'b_space': none, 'b_shoot': none, 'b_pause': none,'b_up': none,'b_down': down,'b_left': none,'b_right': none,},
		dataType: 'html',
		beforeSend: function(){
			$("#b_down").prop("disabled", true);
		},
		success: function(){
			$("#b_down").prop("disabled", false);
		}
	});
});

$("#b_shoot").on("click", function() {
	var shoot = $("#shoot").val().trim();
	var none = $("#none").val().trim();
	
	if(shoot == "") {
		$("#message").text("shoot");
	}
	
	$.ajax({
		url: 'http://vdk45.ddns.net:5000/controller',
		type: 'POST',
		cache: false,
		data: {'b_space': none, 'b_shoot': shoot, 'b_pause': none,'b_up': none,'b_down': none,'b_left': none,'b_right': none,},
		dataType: 'html',
		beforeSend: function(){
			$("#b_shoot").prop("disabled", true);
		},
		success: function(){
			$("#b_shoot").prop("disabled", false);
		}
	});
});


$("#b_up").on("click", function() {
	var up = $("#up").val().trim();
	var none = $("#none").val().trim();
	
	if(up == "") {
		$("#message").text("up");
	}
	
	$.ajax({
		url: 'http://vdk45.ddns.net:5000/controller',
		type: 'POST',
		cache: false,
		data: {'b_space': none, 'b_shoot': none, 'b_pause': none,'b_up': up,'b_down': none,'b_left': none,'b_right': none,},
		dataType: 'html',
		beforeSend: function(){
			$("#b_up").prop("disabled", true);
		},
		success: function(){
			$("#b_up").prop("disabled", false);
		}
	});
});

$("#b_left").on("click", function() {
	var left = $("#left").val().trim();
	var none = $("#none").val().trim();
	
	if(left == "") {
		$("#message").text("left");
	}
	
	$.ajax({
		url: 'http://vdk45.ddns.net:5000/controller',
		type: 'POST',
		cache: false,
		data: {'b_space': none, 'b_shoot': none, 'b_pause': none,'b_up': none,'b_down': none,'b_left': left,'b_right': none,},
		dataType: 'html',
		beforeSend: function(){
			$("#b_left").prop("disabled", true);
		},
		success: function(){
			$("#b_left").prop("disabled", false);
		}
	});
});

$("#b_right").on("click", function() {
	var right = $("#right").val().trim();
	var none = $("#none").val().trim();
	
	if(right == "") {
		$("#message").text("right");
	}
	
	$.ajax({
		url: 'http://vdk45.ddns.net:5000/controller',
		type: 'POST',
		cache: false,
		data: {'b_space': none, 'b_shoot': none, 'b_pause': none,'b_up': none,'b_down': none,'b_left': none,'b_right': right,},
		dataType: 'html',
		beforeSend: function(){
			$("#b_right").prop("disabled", true);
		},
		success: function(){
			$("#b_right").prop("disabled", false);
		}
	});
});


$("#b_pause").on("click", function() {
	var pause = $("#pause").val().trim();
	var none = $("#none").val().trim();
	
	if(pause == "") {
		$("#message").text("pause");
	}
	
	$.ajax({
		url: 'http://vdk45.ddns.net:5000/controller',
		type: 'POST',
		cache: false,
		data: {'b_space': none, 'b_shoot': none, 'b_pause': pause,'b_up': none,'b_down': none,'b_left': none,'b_right': none,},
		dataType: 'html',
		beforeSend: function(){
			$("#b_pause").prop("disabled", true);
		},
		success: function(){
			$("#b_pause").prop("disabled", false);
		}
	});
});

















