import React from 'react';

export default class EventListenerReact extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {

		let { onevent } = this.props;
		let handle_event = callbackName => syntheticEvent => {
			syntheticEvent.persist();
			onevent(syntheticEvent, callbackName);
		}

		return <div 

			className='rte' 
			contentEditable 
			role="textbox"

			onKeyDown={handle_event('onKeyDown')}
			onKeyPress={handle_event('onKeyPress')}
			onKeyUp={handle_event('onKeyUp')}
			
			onCompositionStart={handle_event('onCompositionStart')}
			onCompositionUpdate={handle_event('onCompositionUpdate')}
			onCompositionEnd={handle_event('onCompositionEndmposi')}

			onBeforeInput={handle_event('onBeforeInput')}
			onInput={handle_event('onInput')}

			onSelect={handle_event('onSelect')}

		>Hello World</div>;
	}
}