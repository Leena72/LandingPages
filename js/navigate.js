function section1_2(e) {
	$('#section1').slideUp('fast')
	$('#section2').slideDown('fast');
	section2_animation()
}

function section2_3(e) {
	$('#section2').slideUp('fast')
	$('#section3').slideDown('fast');
	section3_animation()
}

function section3_4(e) {
	$('#section3').slideUp('fast')
	$('#section4').slideDown('fast');
	section4_animation()
}

function section4_5(e) {
	$('#section4').slideUp('fast')
	$('#section5').slideDown('fast');
	section5_animation()
}

function section5_7(e) {
	$('#section5').slideUp('fast')
	$('#section7').slideDown('fast');
	section7_animation()
}

function section7_8(e) {
	$('#section7').slideUp('fast')
	$('#section8').slideDown('fast');
	section8_animation()
}

function section8_9(e) {
	$('#section8').slideUp('fast')
	$('#section9').slideDown('fast');
	section9_animation()
}

function section9_10(e) {
	$('#section9').slideUp('fast')
	$('#section10').slideDown('fast');
	section10_animation()
}

function section10_11(e) {
	$('#section10').slideUp('fast')
	$('#section11').slideDown('fast');
	section11_animation()
}

function section11_12(e) {
	$('#section11').slideUp('fast')
	$('#section12').slideDown('fast');
	section12_animation()
}

function section12_13(e) {
	$('#section12').slideUp('fast')
	$('#section13').slideDown('fast');
	section13_animation()
}

function section13_14(e) {
	$('#section13').slideUp('fast')
	$('#section14').slideDown('fast');
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
	$("#section1-link").click(function () {
		myFullpage.moveSectionDown()
	});
	$("#section2-mob-link").click(function () {
		myFullpage.moveSectionDown()
	});
	$("#section2-desk-link").click(function () {
		myFullpage.moveSectionDown()
	});
	$("#section-3-link").click(function () {
		myFullpage.moveSectionDown()
	});
	$("#section3-link").click(function () {
		myFullpage.moveSectionDown()
	});
	$("#section5-link").click(function () {
		myFullpage.moveSectionDown()
	});
	$("#section8-link").click(function () {
		myFullpage.moveSectionDown()
	});
	$("#section9-link").click(function () {
		myFullpage.moveSectionDown()
	});
	$("#section11-link").click(function () {
		myFullpage.moveSectionDown()
	});
	$("#section13-link").click(function () {
		myFullpage.moveSectionDown()
	});
	$("#section14-link").click(function () {
		myFullpage.moveSectionDown()
	});
	$("#section15-link").click(function () {
		myFullpage.moveSectionDown()
	});
	$("#section16-link").click(function () {
		myFullpage.moveSectionDown()
	});
	$("#section16B-link").click(function () {
		myFullpage.moveSectionDown()
	});
	$("#section16B-17-link").click(function () {
		myFullpage.moveSectionDown()
	});
	$("#section17-link").click(function () {
		myFullpage.moveSectionDown()
	});
	// $('.home:not(:first)').slideUp('fast')
	// $("#section1-link").click(section1_2);
	// $("#section2-mob-link").click(section2_3);
	// $("#section2-desk-link").click(section2_3);
	// $("#section3-link").click(section3_4);
	// $("#section-3-link").click(section3_4);
	// $("#section5-link").click(section5_7);
	// $("#section8-link").click(section8_9);
	// $("#section9-link").click(section9_10);
	// $("#section11-link").click(section11_12);
	// $("#section13-link").click(section13_14);
	// $("#section14-link").click(section14_15);
	// $("#section15-link").click(section15_16);
	// $("#section16-link").click(section16_17);
	// $("#section16B-link").click(section16_16B);
	// $("#section16B-17-link").click(section16B_17);
	// $("#section17-link").click(section17_18);
	//--------------car movement----S4---------------
	$("#s4-car").onPositionChanged(function () {
		$('#s4-timercolor').css({
			'width': $('#s4-car').position().left
		})
		if ($('#s4-car').position().left == 216 || $('#s4-car').position().left == 217 || $('#s4-car').position().left == 300) {
			// section4_5()
		}
		// console.log("$('#s4-car').position().left", $('#s4-car').position().left)
	});
	$("#s4-web-car").onPositionChanged(function () {
		$('#s4-web-timercolor').css({
			'width': $('#s4-web-car').position().left
		})
		if ($('#s4-web-car').position().left == 216 ||
			$('#s4-web-car').position().left == 217 ||
			$('#s4-web-car').position().left == 300 ||
			$('#s4-web-car').position().left == 349) {
			// section4_5()
		}
		// console.log("$('#s4-web-car').position().left", $('#s4-web-car').position().left)
	});
	//--------------car movement----S7---------------
	$("#s7-car").onPositionChanged(function () {
		$('#s7-timercolor').css({
			'width': $('#s7-car').position().left
		})
		if ($('#s7-car').position().left == 216 || $('#s7-car').position().left == 217 || $('#s7-car').position().left == 300) {
			// section7_8()
		}
		// console.log("$('#s7-car').position().left", $('#s7-car').position().left)
	});
	$("#s7-web-car").onPositionChanged(function () {
		$('#s7-web-timercolor').css({
			'width': $('#s7-web-car').position().left
		})
		if ($('#s7-web-car').position().left == 216
			|| $('#s7-web-car').position().left == 217 ||
			$('#s7-web-car').position().left == 300 ||
			$('#s7-web-car').position().left == 349) {
			// section7_8()
		}
		// console.log("$('#s7-web-car').position().left", $('#s7-web-car').position().left)
	});
	//--------------car movement----S10---------------
	$("#s10-car").onPositionChanged(function () {
		$('#s10-timercolor').css({
			'width': $('#s10-car').position().left
		})
		if ($('#s10-car').position().left == 216 ||
			$('#s10-car').position().left == 217 ||
			$('#s10-car').position().left == 300) {
			// section10_11()
		}
		// console.log("$('#s10-car').position().left", $('#s10-car').position().left)
	});
	$("#s10-web-car").onPositionChanged(function () {
		$('#s10-web-timercolor').css({
			'width': $('#s10-web-car').position().left
		})
		if ($('#s10-web-car').position().left == 216
			|| $('#s10-web-car').position().left == 217 ||
			$('#s10-web-car').position().left == 300 ||
			$('#s10-web-car').position().left == 349) {
			// section10_11()
		}
		// console.log("$('#s10-web-car').position().left", $('#s10-web-car').position().left)
	});
	//--------------car movement----S12---------------
	$("#s12-car").onPositionChanged(function () {
		$('#s12-timercolor').css({
			'width': $('#s12-car').position().left
		})
		if ($('#s12-car').position().left == 216 || $('#s12-car').position().left == 217 || $('#s12-car').position().left == 300) {
			// section12_13()
		}
		// console.log("$('#s12-car').position().left", $('#s12-car').position().left)
	});
	// $('#scroll-up-btn').click(function () {
	// 	window.location.reload()
	// })
	$("#s12-web-car").onPositionChanged(function () {
		$('#s12-web-timercolor').css({
			'width': $('#s12-web-car').position().left
		})
		if ($('#s12-web-car').position().left == 216 ||
			$('#s12-web-car').position().left == 217 ||
			$('#s12-web-car').position().left == 300 ||
			$('#s12-web-car').position().left == 349) {
			// section12_13()
		}
		// console.log("$('#s12-web-car').position().left", $('#s12-web-car').position().left)
	});
	// $('#scroll-up-btn').click(function () {
	// 	window.location.reload()
	// })
});