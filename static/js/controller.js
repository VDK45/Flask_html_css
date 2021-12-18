$("#b_space").on("click", function() {
	var space = $("#space").val().trim();
	var none = $("#none").val().trim();
	
	if(space == "") { 
		$("#message").text("Button space"); 
		$("#message_mini").text("Button space"); 
		//return false;  // выход из функции
	}
	
	$.ajax({
		url: 'http://vdk45.ddns.net:5000/gamepad',
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
		url: 'http://vdk45.ddns.net:5000/gamepad',
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
		$("#message").text("Button B");
	}
	
	$.ajax({
		url: 'http://vdk45.ddns.net:5000/gamepad',
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
		url: 'http://vdk45.ddns.net:5000/gamepad',
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
		url: 'http://vdk45.ddns.net:5000/gamepad',
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
		url: 'http://vdk45.ddns.net:5000/gamepad',
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
		$("#message").text("Button pause");
	}
	
	$.ajax({
		url: 'http://vdk45.ddns.net:5000/gamepad',
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

// ---------------------- controller 2 ---------------------

$("#b_space2").on("click", function() {
	var space2 = $("#space2").val().trim();
	var none2 = $("#none2").val().trim();
	
	if(space2 == "") { 
		$("#message2").text("Button space"); 
		//return false;  // выход из функции
	}
	
	$.ajax({
		url: 'http://vdk45.ddns.net:5000/controller_2',
		type: 'POST',
		cache: false,
		data: {'b_space2': space2, 'b_shoot2': none2, 'b_pause2': none2,'b_up2': none2,'b_down2': none2,'b_left2': none2,'b_right2': none2,},
		dataType: 'html',
		beforeSend: function(){
			$("#b_space2").prop("disabled", true);
		},
		success: function(){
			$("#b_space2").prop("disabled", false);
		}
	});
});

$("#b_down2").on("click", function() {
	var down2 = $("#down2").val().trim();
	var none2 = $("#none2").val().trim();
	
	if(down2 == "") {
		$("#message2").text("down");
	}
	
	$.ajax({
		url: 'http://vdk45.ddns.net:5000/controller_2',
		type: 'POST',
		cache: false,
		data: {'b_space2': none2, 'b_shoot2': none2, 'b_pause2': none2,'b_up2': none2,'b_down2': down2,'b_left2': none2,'b_right2': none2,},
		dataType: 'html',
		beforeSend: function(){
			$("#b_down2").prop("disabled", true);
		},
		success: function(){
			$("#b_down2").prop("disabled", false);
		}
	});
});

$("#b_shoot2").on("click", function() {
	var shoot2 = $("#shoot2").val().trim();
	var none2 = $("#none2").val().trim();
	
	if(shoot2 == "") {
		$("#message2").text("Button B");
	}
	
	$.ajax({
		url: 'http://vdk45.ddns.net:5000/controller_2',
		type: 'POST',
		cache: false,
		data: {'b_space2': none2, 'b_shoot2': shoot2, 'b_pause2': none2,'b_up2': none2,'b_down2': none2,'b_left2': none2,'b_right2': none2,},
		dataType: 'html',
		beforeSend: function(){
			$("#b_shoot2").prop("disabled", true);
		},
		success: function(){
			$("#b_shoot2").prop("disabled", false);
		}
	});
});


$("#b_up2").on("click", function() {
	var up2 = $("#up2").val().trim();
	var none2 = $("#none2").val().trim();
	
	if(up2 == "") {
		$("#message2").text("up");
	}
	
	$.ajax({
		url: 'http://vdk45.ddns.net:5000/controller_2',
		type: 'POST',
		cache: false,
		data: {'b_space2': none2, 'b_shoot2': none2, 'b_pause2': none2,'b_up2': up2,'b_down2': none2,'b_left2': none2,'b_right2': none2,},
		dataType: 'html',
		beforeSend: function(){
			$("#b_up2").prop("disabled", true);
		},
		success: function(){
			$("#b_up2").prop("disabled", false);
		}
	});
});

$("#b_left2").on("click", function() {
	var left2 = $("#left2").val().trim();
	var none2 = $("#none2").val().trim();
	
	if(left2 == "") {
		$("#message2").text("left");
	}
	
	$.ajax({
		url: 'http://vdk45.ddns.net:5000/controller_2',
		type: 'POST',
		cache: false,
		data: {'b_space2': none2, 'b_shoot2': none2, 'b_pause2': none2, 'b_up2': none2, 'b_down2': none2,'b_left2': left2,'b_right2': none2,},
		dataType: 'html',
		beforeSend: function(){
			$("#b_left2").prop("disabled", true);
		},
		success: function(){
			$("#b_left2").prop("disabled", false);
		}
	});
});

$("#b_right2").on("click", function() {
	var right2 = $("#right2").val().trim();
	var none2 = $("#none2").val().trim();
	
	if(right2 == "") {
		$("#message2").text("right");
	}
	
	$.ajax({
		url: 'http://vdk45.ddns.net:5000/controller_2',
		type: 'POST',
		cache: false,
		data: {'b_space2': none2, 'b_shoot2': none2, 'b_pause2': none2,'b_up2': none2,'b_down2': none2,'b_left2': none2,'b_right2': right2,},
		dataType: 'html',
		beforeSend: function(){
			$("#b_right2").prop("disabled", true);
		},
		success: function(){
			$("#b_right2").prop("disabled", false);
		}
	});
});


$("#b_pause2").on("click", function() {
	var pause2 = $("#pause2").val().trim();
	var none2 = $("#none2").val().trim();
	
	if(pause2 == "") {
		$("#message2").text("Button pause");
	}
	
	$.ajax({
		url: 'http://vdk45.ddns.net:5000/controller_2',
		type: 'POST',
		cache: false,
		data: {'b_space2': none2, 'b_shoot2': none2, 'b_pause2': pause2,'b_up2': none2,'b_down2': none2,'b_left2': none2,'b_right2': none2,},
		dataType: 'html',
		beforeSend: function(){
			$("#b_pause2").prop("disabled", true);
		},
		success: function(){
			$("#b_pause2").prop("disabled", false);
		}
	});
});














