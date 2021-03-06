import EventLogger from './components/EventLogger';
import EventListenerRaw from './components/EventListenerRaw';
import EventListenerReact from './components/EventListenerReact';
import serializeEvent from './utils/serialize-event';
import { getNextKey, resetKey } from './utils/generate-key';
import React from 'react';
import ReactDOM from 'react-dom';
import { Stack } from 'immutable';

let logs = new Stack();
const STACK_LIMIT = 100;

const add_log = item => {
	logs = logs.push(item).slice(0, STACK_LIMIT);
};

const log_event = (e, callbackName) => {
	if (e.nativeEvent) {
		add_log(serializeEvent(e.nativeEvent, null, true));
	}
	add_log(serializeEvent(e, callbackName));
	render_logs();
};

const clear_log = () => {
	logs = new Stack();
	resetKey();
	render_logs();
};

const insert_separator = () => {
	add_log({ index: getNextKey(), kind: 'separator' });
	render_logs();
};

const logger_el = document.querySelector('.logger');

const render_logs = () => {
	ReactDOM.render(
		<EventLogger logs={logs} clearLog={clear_log} insertSeparator={insert_separator} />,
		logger_el
	);
};

ReactDOM.render(
	<EventListenerReact onevent={log_event} />,
	document.querySelector('#rte__wrapper--react')
);

new EventListenerRaw(document.querySelector('#rte--raw'), log_event);
