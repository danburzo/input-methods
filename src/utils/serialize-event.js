import { getKey, getNextKey } from './generate-key';

export default (e, callbackName, isNativeCounterpart) => {
	const index = isNativeCounterpart ? `⮑ ${getKey()}` : getNextKey();

	const ret = {
		kind: e.constructor.name,
		index: index,
		isNativeCounterpart: isNativeCounterpart
	};

	if (callbackName) {
		ret.origin = `${callbackName}()`;
	}

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
	].forEach(prop => (ret[prop] = e[prop]));

	return ret;
};
