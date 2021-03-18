function section1_2(e) {
	$('#section1').slideUp('slow')
	$('#section2').slideDown('slow');
	section2_animation()
}

function section2_3(e) {
	$('#section2').slideUp('slow')
	$('#section3').slideDown('slow');
	section3_animation()
}

function section3_4(e) {
	$('#section3').slideUp('slow')
	$('#section4').slideDown('slow');
	section4_animation()
}

function section4_5(e) {
	$('#section4').slideUp('slow')
	$('#section5').slideDown('slow');
	section5_animation()
}

function section5_7(e) {
	$('#section5').slideUp('slow')
	$('#section7').slideDown('slow');
	section7_animation()
}

function section7_8(e) {
	$('#section7').slideUp('slow')
	$('#section8').slideDown('slow');
	section8_animation()
}

function section8_9(e) {
	$('#section8').slideUp('slow')
	$('#section9').slideDown('slow');
	section9_animation()
}

function section9_10(e) {
	$('#section9').slideUp('slow')
	$('#section10').slideDown('slow');
	section10_animation()
}

function section10_11(e) {
	$('#section10').slideUp('slow')
	$('#section11').slideDown('slow');
	section11_animation()
}

function section11_12(e) {
	$('#section11').slideUp('slow')
	$('#section12').slideDown('slow');
	section12_animation()
}

function section12_13(e) {
	$('#section12').slideUp('slow')
	$('#section13').slideDown('slow');
	section13_animation()
}

function section13_14(e) {
	$('#section13').slideUp('slow')
	$('#section14').slideDown('slow');
	section14_animation()

}

function section14_15(e) {
	$('#section14').slideUp('fast')
	$('#section15').slideDown('fast');
	section15_animation()
}

function section15_16(e) {
	$('#section15').slideUp('fast')
	$('#section16').slideDown('fast');
	section16_animation()
	setTimeout(percentage_loader, 2000)
}

function section16_16B(e) {
	$('#section16').slideUp('fast')
	$('#section16B').slideDown('fast');
	section16B_animation()
	setTimeout(percentage_loader, 2000)
}
function section16B_17(e) {
	$('#section16B').slideUp('fast')
	$('#section17').slideDown('fast');
	section17_animation()
	
}

function section16_17(e) {
	$('#section16').slideUp('fast')
	$('#section17').slideDown('fast');
	section17_animation()
}

function section17_18(e) {
	$('#section17').slideUp('fast')
	$('#section18').slideDown('fast');
	section18_animation()
}
// hide and show 
$(document).ready(function () {
	section1_animation()
	$('.home:not(:first)').slideUp('slow')
	$("#section1-link").click(section1_2);
	$("#section2-mob-link").click(section2_3);
	$("#section2-desk-link").click(section2_3);
	$("#section3-link").click(section3_4);
	$("#section5-link").click(section5_7);
	$("#section8-link").click(section8_9);
	$("#section9-link").click(section9_10);
	$("#section11-link").click(section11_12);
	$("#section13-link").click(section13_14);
	$("#section14-link").click(section14_15);
	$("#section15-link").click(section15_16);
	$("#section16-link").click(section16_17);
	$("#section16B-link").click(section16_16B);
    $("#section16B-17-link").click(section16B_17);
	$("#section17-link").click(section17_18);
	//--------------car movement----S4---------------
	$("#s4-car").onPositionChanged(function () {
		$('#s4-timercolor').css({
			'width': $('#s4-car').position().left
		})
		if ($('#s4-car').position().left == 278 || $('#s4-car').position().left == 265 || $('#s4-car').position().left == 260 || $('#s4-car').position().left == 225 || $('#s4-car').position().left == 296 || $('#s4-car').position().left == 315 || $('#s4-car').position().left == 342 || $('#s4-car').position().left == 413 || $('#s4-car').position().left == 308) {
			section4_5()
		}
		console.log("$('#s4-car').position().left", $('#s4-car').position().left)
	});
	//--------------car movement----S7---------------
	$("#s7-car").onPositionChanged(function () {
		$('#s7-timercolor').css({
			'width': $('#s7-car').position().left
		})
		if ($('#s7-car').position().left == 278 || $('#s7-car').position().left == 265 || $('#s7-car').position().left == 260 || $('#s7-car').position().left == 225 || $('#s7-car').position().left == 296 || $('#s7-car').position().left == 315 || $('#s7-car').position().left == 342 || $('#s7-car').position().left == 413 || $('#s7-car').position().left == 308) {
			section7_8()
		}
		console.log("$('#s7-car').position().left", $('#s7-car').position().left)
	});
	//--------------car movement----S10---------------
	$("#s10-car").onPositionChanged(function () {
		$('#s10-timercolor').css({
			'width': $('#s10-car').position().left
		})
		if ($('#s10-car').position().left == 278 || $('#s10-car').position().left == 265 || $('#s10-car').position().left == 260 || $('#s10-car').position().left == 225 || $('#s10-car').position().left == 296 || $('#s10-car').position().left == 315 || $('#s10-car').position().left == 342 || $('#s10-car').position().left == 413 || $('#s10-car').position().left == 308) {
			section10_11()
		}
		console.log("$('#s10-car').position().left", $('#s10-car').position().left)
	});
	//--------------car movement----S12---------------
	$("#s12-car").onPositionChanged(function () {
		$('#s12-timercolor').css({
			'width': $('#s12-car').position().left
		})
		if ($('#s12-car').position().left == 278 || $('#s12-car').position().left == 265 || $('#s12-car').position().left == 260 || $('#s12-car').position().left == 225 || $('#s12-car').position().left == 296 || $('#s12-car').position().left == 315 || $('#s12-car').position().left == 342 || $('#s12-car').position().left == 413 || $('#s12-car').position().left == 308) {
			section12_13()
		}
		console.log("$('#s12-car').position().left", $('#s12-car').position().left)
	});
	$('#scroll-up-btn').click(function () {
		window.location.reload()
	})
});