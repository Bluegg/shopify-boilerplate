/**
 * ACCESSIBLE MODAL
 * Principles borrowed from this https://github.com/gdkraus/accessible-modal-dialog
 * * * * * * * * * * * * * *
  REQUIRED MARKUP:
	• main-page
	• modal(s)
	• overlay

 */

const FOCUSABLE_ELEMENTS = 'a[href], area[href], input:not([disabled]):not([readonly]):not([type=hidden]), select:not([disabled]):not([readonly]):not([type=hidden]), textarea:not([disabled]):not([readonly]):not([type=hidden]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]';
const OVERLAY = document.getElementById('modal-overlay');
const PAGE = document.getElementById('global-wrapper');

var lastFocus;
var scrollPos;

class Modal {

	constructor(modal) {
		if (!modal) {
			return;
		}

		this.modal = modal;

		this.cancelBtn = this.modal.querySelectorAll('.js-modal-cancel-btn')[0];
		this.closeBtn = this.modal.querySelectorAll('.js-modal-close-btn')[0];
		this.enterBtn = this.modal.querySelectorAll('.js-modal-enter-btn')[0];
		// items which triger this modal need to have a data-attribute ('data-target-name') which matches this.
		this.triggerName = this.modal.getAttribute('data-modal-trigger');
		let triggerSelector = `[data-modal-target="${this.triggerName}"]`;
		this.triggers = [].slice.call(document.querySelectorAll(triggerSelector));
		this.focusableElements = [].slice.call(this.modal.querySelectorAll(FOCUSABLE_ELEMENTS));
		this.firstItem = this.focusableElements[0];

		this.keys = {
			esc: 27,
			tab: 9,
			enter: 13
		};

		this._init();
	}

	_init() {

		// Add listener for all clicks on the targets for the modal
		this.triggers.forEach(
			(el) => el.addEventListener('click',
				(event) => this._showModal(this.modal, event),
			false)
		);

		this.closeBtn.addEventListener('click',
			() => this._hideModal(this.modal),
		false);

		if (this.cancelBtn !== undefined) {
			this.cancelBtn.addEventListener('click',
				() => this._cancelBtnEnter(this.modal, event),
			false);
		}

		if (this.enterBtn !== undefined) {
			this.enterBtn.addEventListener('click',
				() => this._cancelButtonModal(this.modal),
			false);
		}

		this.modal.addEventListener('keydown',
			(event) => this._trapTabKey(this.modal, event),
		false);

		this.modal.addEventListener('keydown',
			(event) => this._trapEscapeKey(event),
		false);


	}

	_trapEscapeKey(evt) {
			// if escape pressed
		if (evt.which == this.keys.esc) {
			// close the modal window
			this.closeBtn.click();
		}
	}

	_trapTabKey(modal, evt) {
		// if tab or shift-tab pressed
		if (evt.which == this.keys.tab) {

			// get list of focusable items (as an array)
			let focusableItems = [].slice.call(modal.querySelectorAll(FOCUSABLE_ELEMENTS));

			// get currently focused item
			let focusedItem = document.activeElement;

			// get the number of focusable items
			let numberOfFocusableItems = focusableItems.length;

			// get the index of the currently focused item
			let focusedItemIndex = focusableItems.indexOf(focusedItem);

			if (evt.shiftKey) {
				//back tab
				// if focused on first item and user preses back-tab, go to the last focusable item
				if (focusedItemIndex == 0) {
					focusableItems[numberOfFocusableItems - 1].focus();
					evt.preventDefault();
				}

			} else {
				//forward tab
				// if focused on the last item and user preses tab, go to the first focusable item
				if (focusedItemIndex == numberOfFocusableItems - 1) {
					focusableItems[0].focus();
					evt.preventDefault();
				}
			}
		}
	}

	_setInitialFocus() {
		// set focus to first focusable item
		this.firstItem.focus();
	}

	_enterButtonModal() {
		// BEGIN logic for executing the Enter button action for the modal window
			/* OPTIONAL CODE TO HANDLE FORM SUBMITS ETC GOES HERE */
		// END logic for executing the Enter button action for the modal window
		this._hideModal();
	}

	_cancelBtnEnter(modal, evt) {
		if(evt.which === this.keys.enter || evt.type === 'click') {
			evt.preventDefault();
			this._hideModal(modal);
		}
	}

	_showModal(modal, evt) {

		scrollPos = window.pageYOffset || document.documentElement.scrollTop;

		if(evt.which === this.keys.enter || evt.type === 'click') {

			evt.preventDefault();

			// save scrollPos
			document.documentElement.classList.add('modal-is-open');
			PAGE.setAttribute('aria-hidden', 'true'); // mark the main page as hidden
			modal.setAttribute('aria-hidden', 'false'); // mark the modal window as visible
			OVERLAY.classList.add('is-active'); // insert an overlay to prevent clicking and make a visual change to indicate the main apge is not available
			modal.classList.add('is-active'); // make the modal window visible
			// save current focus
			lastFocus = document.activeElement;

			this._setInitialFocus();

		}
	}

	_hideModal(modal) {
		OVERLAY.classList.remove('is-active'); // remove the overlay in order to make the main screen available again
		modal.classList.remove('is-active'); // hide the modal window
		modal.setAttribute('aria-hidden', 'true'); // mark the modal window as hidden
		PAGE.setAttribute('aria-hidden', 'false'); // mark the main page as visible
		document.documentElement.classList.remove('modal-is-open');
		// set focus back to element that had it before the modal was opened
		lastFocus.focus();
		document.documentElement.scrollTop = document.body.scrollTop = scrollPos;

	}

}

export default Modal;
