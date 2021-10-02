// react is a library is imported to use methods such as compenents
import React from "react";

// for each component you will have different files, each compenent has one purpose. Modularidy is key.
class Board extends React.Component {
	// asynchronis, and renders every single thing inside
	render() {
		let className = "board";
		console.log(this.props);
		if (this.props.selected) {
			className += " selected";
		}
		return <div className={className}>{this.props.index + 1}</div>;
	}
}
//BoardSwitcher is called first because Board is called inside

class BoardSwitcher extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0,
		};
	}
	handleToggle(event) {
		// this.setState({
		//  index:(this.state.index + 1 ) % 3
		// })
		if (this.state.index < 2) {
			this.setState({
				index: this.state.index + 1,
			});
		} else {
			this.setState({
				index: 0,

			});
		}
	}

	render() {
		let boards = [];

		for (let ii = 0; ii < this.props.numBoards; ii++) {
			let isSelected = ii === this.state.index;
			boards.push(<Board index={ii} selected={isSelected} key={ii} />);
		}

		return (
			<div>
				<div className="boards">{boards}</div>
				<button onClick={(e) => this.handleToggle(e)}>Toggle</button>
			</div>
		);
	}
}

export default BoardSwitcher;
