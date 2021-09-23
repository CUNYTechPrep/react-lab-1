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
      counter: 0,
    }
  }

  handleBoardClicker = () => {
    this.setState({counter: (this.state.counter + 1) % this.props.numBoards})
  }

  render() {
    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      let isSelected = ii === this.state.counter;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii}/>
      );
    }

    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick={this.handleBoardClicker}>Toggle</button>
      </div>
    );
  }
}

export default BoardSwitcher;
