import React from 'react';

export default class EventListenerReact extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {

		let { onevent } = this.props;
		let handle_event = (syntheticEvent) => {
			syntheticEvent.persist();
			onevent(syntheticEvent);
		}

		return <div 

			className='rte' 
			contentEditable 
			role="textbox"

			onKeyDown={handle_event}
			onKeyPress={handle_event}
			onKeyUp={handle_event}
			
			onCompositionStart={handle_event}
			onCompositionUpdate={handle_event}
			onCompositionEnd={handle_event}

			onBeforeInput={handle_event}
			onInput={handle_event}

			onSelect={handle_event}

		>Hello World</div>;
	}
}