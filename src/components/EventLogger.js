import React from 'react';

export default class EventLogger extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			logs: []
		}
	}

	render() {
		let { logs } = this.state;
		return <table className='logger__table'>
			<caption>
				<ul>
					<li>{this.renderBoolean(true)} = true</li>
					<li>{this.renderBoolean(false)} = false</li>
					<li>{this.renderBoolean(undefined)} = null or undefined</li>
					<li><sup>1</sup> refers to properties present in both KeyboardEvent and InputEvent.</li>
				</ul>
			</caption>
			<thead>
				<tr>
					<th colSpan='3'>General</th>
					<th colSpan='3'>KeyboardEvent</th>
					<th>UIEvent<sup>1</sup></th>
					<th colSpan='2'>InputEvent</th>
				</tr>
				<tr>
					<th>#</th>
					<th>constructor</th>
					<th>type</th>

					<th>key</th>
					<th>code</th>
					<th>repeat</th>
					
					<th>isComposing</th>

					<th>inputType</th>
					<th>data</th>
				</tr>
			</thead>
			<tbody>
			{ 
				logs.map(entry => 
					<tr key={entry.index} className={
						'logger__row logger__row--' + entry.kind + (
							entry.isNativeCounterpart ? ' logger__row--native-counterpart' : ''
						)
					}>
						
						<td>{entry.isNativeCounterpart ? '⮑' : entry.index}</td>
						<td>{this.renderValue(entry.kind)}</td>
						<td>{this.renderValue(entry.type)}</td>

						<td>{this.renderValue(entry.key)}</td>
						<td>{this.renderValue(entry.code)}</td>

						<td>{this.renderBoolean(entry.repeat)}</td>
						<td>{this.renderBoolean(entry.isComposing)}</td>

						<td>{this.renderValue(entry.inputType)}</td>
						<td>{this.renderValue(entry.data)}</td>
					</tr>
				)
			}
			</tbody>
		</table>;
	}

	renderValue(val) {
		return val ? 
			<pre><code>{val}</code></pre> :
			this.renderBoolean(undefined)
	}

	renderBoolean(flag) {
		return flag === true ?
			<span className='bool bool--true' title='true'>✓</span> :
			flag === false ?
				<span className='bool bool--false' title='false'>&times;</span> :
				<span className='bool bool--undefined' title='null/undefined'>∅</span>
	}
}