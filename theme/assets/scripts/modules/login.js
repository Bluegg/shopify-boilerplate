var $ = require('jQuery');

function init() {
  if (window.location.hash === '#recover') {
    hideLogin();
  } else {
    $('#recover').addClass('is-off');
    $('#CustomerLoginForm').addClass('is-on');
  }
  bindEvents();
}

function bindEvents() {
  $('#HideRecoverPasswordLink').on('click', function(e) {
    e.preventDefault();
    showLogin();
  })
  $('#RecoverPassword').on('click', function(e) {
    e.preventDefault();
    hideLogin();
  })
}

function showLogin() {
	window.location.hash = '#!'
  $('#recover').addClass('is-off').removeClass("is-on");
  $('#CustomerLoginForm').addClass('is-on').removeClass("is-off");
}

function hideLogin() {
  window.location.hash = '#recover';
  $('#CustomerLoginForm').addClass('is-off').removeClass("is-on");
  $('#recover').addClass('is-on').removeClass("is-off");
}


export {
  init
};
