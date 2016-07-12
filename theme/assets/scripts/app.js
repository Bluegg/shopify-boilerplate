// Requred by theme templates
window.jQuery = $ = require('jquery');

require('parsleyjs');

// Import Nav module
import * as nav from './modules/nav.js';

import * as login from './modules/login.js';

import * as searchbar from './modules/searchbar.js';

import Tabs from './modules/tabs.js';

import Modal from './modules/modal.js';

import Filter from './modules/filter.js';

var Drift = require('drift-zoom');

Filter();

// Kick off the nav js
nav.init();

searchbar.init();

login.init();

if (document.querySelectorAll('.js-tabs').length) {

	var alltabs = document.querySelectorAll('.js-tabs');

	[].forEach.call(alltabs, function(item, i) {
		new Tabs(alltabs[i]);
	});
}

if (document.querySelectorAll('.js-modal').length) {

	var modals = document.querySelectorAll('.js-modal');

	[].forEach.call(modals, function(item, i) {
		new Modal(modals[i]);
	});
}

if (document.querySelectorAll('#FeaturedImage').length && window.matchMedia('(min-width: 600px)').matches) {

	new Drift(document.querySelector('#FeaturedImage'), {
		paneContainer: document.querySelector('.gallery__fig'),
		namespace: 'gallery__drift',
		containInline: true
	});

}

$('.js-parsley-validate form').parsley({
	successClass: 'is-valid',
	errorClass: 'is-error',
	trigger: 'change',
	classHandler: function(el) {
		return el.$element.parent();
	},
	errorsWrapper: '<ul class="form__errors-list"></ul>',
	errorTemplate: '<li class="form__error-item"></li>'
});
