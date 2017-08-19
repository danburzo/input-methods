let key = 1;

export default e => {
	const ret = {
		kind: e.constructor.name,
		index: key++,
		type: e.type
	};

	[
		// Event interface
		'type',

		// KeyboardEvent interface
		'key',
		'code',
		'repeat',

		// Common to KeyboardEvent and InputEvent
		'isComposing',

		// InputEvent

		'inputType',
		'data'
	].forEach(prop => ret[prop] = e[prop]);

	return ret;
};