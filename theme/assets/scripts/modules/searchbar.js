var $ = require('jQuery');

function addFocusClass() {

	$(this).closest('form').addClass('is-active');

}

function removeFocusClass() {

	$(this).closest('form').removeClass('is-active');

}

function handleSubmit() {
	
	var searchField = $(this).find('#searchbar');
	searchField.val(searchField.val() + '*');

}

function init() {

	$('#searchbar, .search-bar__btn').on('focus', addFocusClass);

	$('form.search-bar').on('submit', handleSubmit);

	$('#searchbar, .search-bar__btn').on('blur', removeFocusClass);

}

export { init };
