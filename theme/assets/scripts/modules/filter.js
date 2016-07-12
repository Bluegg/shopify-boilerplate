var $ = require('jQuery');
var URI = require('urijs');

function init() {

	$('body').addClass('js-mobile-filter');

	$('.js-filter-toggle').attr('aria-expanded', 'false');
	$('.js-filter-close-btn').attr('aria-expanded', 'false');

	bindEvents();
}

function updateCollection(url, data) {
	var fullUrl = data ? url + '?' + data : url;
	$('body').addClass('is-loading');
	$('.collection__wrap').load(fullUrl + ' .collection', function() {
		window.history.pushState({}, null, fullUrl);

		var currentView = $('#currentView').val();
		var showing = $('.js-nowshowing');
		showing.html(currentView);
		$('body').removeClass('is-loading');

	});
}

function updateFilter(link, url) {
	$('.filter__list-wrap').addClass('is-loading');
	$('.filter__list-wrap').each(function() {
		var filterBlock = $(this);
		var id = filterBlock.attr('id');
		var selector = url + ' #' + id + ' .filter__list';
		$(this).load(selector, function() {
			filterBlock.removeClass('is-loading');
		});
	});
}

function clearFilter(url) {
	var filterWrap = $('.filter__wrap');
	filterWrap.addClass('is-loading');
	filterWrap.load(url + ' .filter__block', function() {
		filterWrap.removeClass('is-loading');
		bindEvents();
	});
}

function bindEvents() {

	// Create an event listener to auto-submit the collection filter form on select change.
	$(document).on('change', '[data-update-collection]', function() {
		$(this).closest('form').submit();
	});

	// Override the form submit to fetch via Ajax and update history.
	$(document).on('submit', '#collection-form', function(e) {
		e.preventDefault();
		var url = new URI(document.location).search('');
		var data = $(this).serialize();
		updateCollection(url, data);
	});

	// Create an event listener for links inside the collection page.
	$(document).on('click', '[data-link-collection]', function(e) {
		e.preventDefault();
		var data = $('#collection-form').serialize();
		var url = $(this).attr('href');
		updateCollection(url, data);
	});

	$(document).on('click', '.filter__link', function(e) {
		e.preventDefault();
		var url = $(this).attr('href');
		updateFilter(this, url);
	});

	$(document).on('click', '.filter__link', function(e) {
		e.preventDefault();
		var url = $(this).attr('href');
		updateFilter(this, url);
	});

	$(document).on('keyup', '.filter__link', function(e) {
		if (e.which === 32) {
			e.preventDefault();
			var url = $(this).attr('href');
			updateFilter(this, url);
		}
		if (e.which === 27) {
			e.preventDefault();
			$(this).parents('.filter__block').find('button').focus();
			$('.filter__block').removeClass('is-open');
		}
	});

	$(document).on('click', '.filter__clear', function(e) {
		e.preventDefault();
		var url = $(this).attr('href');
		clearFilter(url);
	});

	$('.js-filter-close-btn').on('keydown', function(e) {
		if (e.which === 9 && e.shiftKey) {
			e.preventDefault();
			$('.filter__clear').focus();
		}
	});

	$('.filter__clear').on('keydown', function(e) {
		if (e.which === 9 && !e.shiftKey) {
			e.preventDefault();
			$('.js-filter-close-btn').focus();
		}
	});

	$('.js-filter-toggle').on('click', function() {
		$('html').addClass('filter-is-open');
		$('.js-filter-block-toggle:first').focus();

		$('.js-filter-toggle').attr('aria-expanded', 'true');
		$(this).attr('aria-expanded', 'true');

	});

	$('.js-filter-close-btn').on('click', function() {
		$('html').removeClass('filter-is-open');
		$('.js-filter-toggle').focus();

		$('.js-filter-toggle').attr('aria-expanded', 'false');
		$(this).attr('aria-expanded', 'false');
	});

	$('.js-filter-block-toggle').on('click', function() {
		$(this).parents('.filter__block').toggleClass('is-open').siblings('.filter__block').removeClass('is-open');
		$(this).attr('aria-expanded') ? $(this).attr('aria-expanded', 'false') : $(this).attr('aria-expanded', 'true');
	});

	$('.js-filter-block-toggle').on('keyup', function(e) {
		if(e.which === 40) {
			$(this).parents('.filter__block').addClass('is-open').siblings('.filter__block').removeClass('is-open');
		}
		if(e.which === 38) {
			$(this).parents('.filter__block').removeClass('is-open').siblings('.filter__block').removeClass('is-open');
		}
	});

}

export default init;
