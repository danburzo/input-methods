let key = 1;

export default (e, isNativeCounterpart) => {

	const index = isNativeCounterpart ? `⮑ ${key}` : key++;

	const ret = {
		kind: e.constructor.name,
		index: index,
		isNativeCounterpart: isNativeCounterpart
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