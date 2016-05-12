var $ = require('jquery');

var navToggle = document.querySelectorAll('.js-nav-toggle')[0];
var siteNav = document.getElementById('nav');

function init() {
	siteNav.classList.add('is-loaded');
	navToggle.classList.add('is-loaded');
	navToggle.classList.remove('is-hidden');
  navToggle.addEventListener('click', _toggleNav, false);
}

function uninit() {
	navToggle.removeEventListener('click', _toggleNav, false);
	siteNav.classList.remove('is-loaded', 'is-active');
	navToggle.classList.remove('is-loaded', 'is-active');
	navToggle.classList.add('is-hidden');;
	document.documentElement.classList.remove('nav-is-active');
}

function _toggleNav(e) {
	e.preventDefault();
	document.documentElement.classList.toggle('nav-is-active');
	navToggle.classList.toggle('is-active');
	siteNav.classList.toggle('is-active');
}

export { init, uninit }
