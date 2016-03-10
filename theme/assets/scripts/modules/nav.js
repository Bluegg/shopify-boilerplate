var $ = require('jquery');

var trigger = $("#primary-nav-trigger");
var openClass = "js-mobile-nav-open";

function open(e) {
	e.preventDefault();
	$("body").addClass(openClass);
	window.scrollTo(0, 0);
	trigger.off("click", open);
	return false;
}

function close(e) {
	e.preventDefault();
	trigger.on("click", open);
	$("body").removeClass(openClass);
	return false;
}

function calcWidth() {
	// If trigger is not visible, remove open class from body
	if (trigger.css('display') == 'none') {
		close();
	}
}

export default function () {
	// Open nav on trigger click
	trigger.on("click", open);

	// Check browser width on resize
	var to = false;
	$(window).resize(function() {
		if (to !== false) {
			clearTimeout(to);
		}
		to = setTimeout(calcWidth, 200);
	});

	// Check browser width
	calcWidth();

	console.log('fnah');
}