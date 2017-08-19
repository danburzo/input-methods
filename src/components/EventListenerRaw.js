export default class EventListenerRaw {
	
	constructor(container, onevent) {
		this.container = container;
		this.onevent = onevent || (() => {});
		this.attachDOMListeners();
	}

	attachDOMListeners() {
		[
			// KeyboardEvent
			'keydown',
			'keypress',
			'keyup',

			// CompositionEvent
			'compositionstart',
			'compositionupdate',
			'compositionend',

			// InputEvent
			'beforeinput',
			'input',

			// Selection Event
			'selectionchange'
		].forEach(eventStr => {
			this.container.addEventListener(eventStr, this.onevent)
		})
	}
}