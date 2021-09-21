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
    super(props);
    this.state = {
      box: 0,
    };
  }

  handleClick() {
    if(this.state.box === 2) {
      this.setState({
        box : 0
      });
    }
    else {
      this.setState({
        box: this.state.box + 1
      });
    }
  }
  render() {
    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      let isSelected = ii === this.state.box;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }

    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick={(e) => this.handleClick(e)}>Toggle</button>
      </div>
    );
  }
}

export default BoardSwitcher;
