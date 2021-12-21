// ---------------------- PC controller ---------------------

$("#b_space0").on("click", function() {
	var space0 = $("#space0").val().trim();
	var none0 = $("#none0").val().trim();
	
	if(space0 == "") { 
		$("#message0").text("Button Space"); 
		//return false;  // выход из функции
	}
	
	$.ajax({
		url: 'http://vdk45.ddns.net:5000/pc_gamepad',
		type: 'POST',
		cache: false,
		data: {'b_space0': space0, 'b_shoot0': none0, 'b_pause0': none0,'b_up0': none0,'b_down0': none0,'b_left0': none0,'b_right0': none0,},
		dataType: 'html',
		beforeSend: function(){
			$("#b_space0").prop("disabled", true);
		},
		success: function(){
			$("#b_space0").prop("disabled", false);
		}
	});
});

$("#b_down0").on("click", function() {
	var down0 = $("#down0").val().trim();
	var none0 = $("#none0").val().trim();
	
	if(down0 == "") {
		$("#message0").text("down");
	}
	
	$.ajax({
		url: 'http://vdk45.ddns.net:5000/pc_gamepad',
		type: 'POST',
		cache: false,
		data: {'b_space0': none0, 'b_shoot0': none0, 'b_pause0': none0,'b_up0': none0,'b_down0': down0,'b_left0': none0,'b_right0': none0,},
		dataType: 'html',
		beforeSend: function(){
			$("#b_down0").prop("disabled", true);
		},
		success: function(){
			$("#b_down0").prop("disabled", false);
		}
	});
});

$("#b_shoot0").on("click", function() {
	var shoot0 = $("#shoot0").val().trim();
	var none0 = $("#none0").val().trim();
	
	if(shoot0 == "") {
		$("#message0").text("Button E");
	}
	
	$.ajax({
		url: 'http://vdk45.ddns.net:5000/pc_gamepad',
		type: 'POST',
		cache: false,
		data: {'b_space0': none0, 'b_shoot0': shoot0, 'b_pause0': none0,'b_up0': none0,'b_down0': none0,'b_left0': none0,'b_right0': none0,},
		dataType: 'html',
		beforeSend: function(){
			$("#b_shoot0").prop("disabled", true);
		},
		success: function(){
			$("#b_shoot0").prop("disabled", false);
		}
	});
});


$("#b_up0").on("click", function() {
	var up0 = $("#up0").val().trim();
	var none0 = $("#none0").val().trim();
	
	if(up0 == "") {
		$("#message0").text("up");
	}
	
	$.ajax({
		url: 'http://vdk45.ddns.net:5000/pc_gamepad',
		type: 'POST',
		cache: false,
		data: {'b_space0': none0, 'b_shoot0': none0, 'b_pause0': none0,'b_up0': up0,'b_down0': none0,'b_left0': none0,'b_right0': none0,},
		dataType: 'html',
		beforeSend: function(){
			$("#b_up0").prop("disabled", true);
		},
		success: function(){
			$("#b_up0").prop("disabled", false);
		}
	});
});

$("#b_left0").on("click", function() {
	var left0 = $("#left0").val().trim();
	var none0 = $("#none0").val().trim();
	
	if(left0 == "") {
		$("#message0").text("left");
	}
	
	$.ajax({
		url: 'http://vdk45.ddns.net:5000/pc_gamepad',
		type: 'POST',
		cache: false,
		data: {'b_space0': none0, 'b_shoot0': none0, 'b_pause0': none0, 'b_up0': none0, 'b_down0': none0,'b_left0': left0,'b_right0': none0,},
		dataType: 'html',
		beforeSend: function(){
			$("#b_left0").prop("disabled", true);
		},
		success: function(){
			$("#b_left0").prop("disabled", false);
		}
	});
});

$("#b_right0").on("click", function() {
	var right0 = $("#right0").val().trim();
	var none0 = $("#none0").val().trim();
	
	if(right0 == "") {
		$("#message0").text("right");
	}
	
	$.ajax({
		url: 'http://vdk45.ddns.net:5000/pc_gamepad',
		type: 'POST',
		cache: false,
		data: {'b_space0': none0, 'b_shoot0': none0, 'b_pause0': none0,'b_up0': none0,'b_down0': none0,'b_left0': none0,'b_right0': right0,},
		dataType: 'html',
		beforeSend: function(){
			$("#b_right0").prop("disabled", true);
		},
		success: function(){
			$("#b_right0").prop("disabled", false);
		}
	});
});


$("#b_pause0").on("click", function() {
	var pause0 = $("#pause0").val().trim();
	var none0 = $("#none0").val().trim();
	
	if(pause0 == "") {
		$("#message0").text("Button Taunt");
	}
	
	$.ajax({
		url: 'http://vdk45.ddns.net:5000/pc_gamepad',
		type: 'POST',
		cache: false,
		data: {'b_space0': none0, 'b_shoot0': none0, 'b_pause0': pause0,'b_up0': none0,'b_down0': none0,'b_left0': none0,'b_right0': none0},
		dataType: 'html',
		beforeSend: function(){
			$("#b_pause0").prop("disabled", true);
		},
		success: function(){
			$("#b_pause0").prop("disabled", false);
		}
	});
});













