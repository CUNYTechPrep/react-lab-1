import React from 'react';

class Board extends React.Component {
  render() {
    let className = "board";
    if (this.props.selected) {
      className += " selected";
    }
    return (
      <div className={className}>
        {this.props.index + 1}
      </div>
    );
  }
}

class BoardSwitcher extends React.Component {
  constructor(props) {
    super(props); // required so that props work
    this.state = {
      position: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let newPos = this.state.position + 1
    this.setState({
      position: (newPos % this.props.numBoards)
    });
  }
  render() {
    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      let isSelected = ii === this.state.position;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }
    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick={this.handleClick}>Toggle</button>
      </div>
    );
  }
}

export default BoardSwitcher;
