import EventLogger from './components/EventLogger';
import EventListenerRaw from './components/EventListenerRaw';
import EventListenerReact from './components/EventListenerReact';
import serializeEvent from './utils/serialize-event';
import React from 'react';
import ReactDOM from 'react-dom';
import { Stack } from 'immutable';

let logs = new Stack(), logger_el, STACK_LIMIT = 100;

const log_event = e => {
	logs = logs.push(serializeEvent(e)).slice(0, STACK_LIMIT);
	if (logger_el) {
		logger_el.setState({ logs });
	}
};

ReactDOM.render(
	<EventLogger logs={logs} ref={el => logger_el = el}/>, 
	document.querySelector('.logger')
);

ReactDOM.render(
	<EventListenerReact onevent={log_event}/>,
	document.querySelector('#rte__wrapper--react')
)

new EventListenerRaw(document.querySelector('#rte--raw'), log_event);