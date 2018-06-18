const supported_events = [
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
];

export default class EventListenerRaw {
	constructor(container, onevent) {
		this.container = container;
		this.onevent = onevent || (() => {});
		supported_events.forEach(eventStr =>
			this.container.addEventListener(eventStr, this.onevent)
		);
	}
}
