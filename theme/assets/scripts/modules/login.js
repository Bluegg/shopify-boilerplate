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
  $('#HideRecoverPasswordLink').on('click', showLogin)
  $('#RecoverPassword').on('click', hideLogin)
}

function showLogin() {
    $('#recover').addClass('is-off').removeClass("is-on");
    $('#CustomerLoginForm').addClass('is-on').removeClass("is-off");
}

function hideLogin() {
    $('#CustomerLoginForm').addClass('is-off').removeClass("is-on");
    $('#recover').addClass('is-on').removeClass("is-off");
}


export { init };
