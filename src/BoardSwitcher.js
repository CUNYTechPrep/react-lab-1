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
  state = {
    isActive: 0
  }

  handleClick = () => {
    this.setState({ isActive: this.state.isActive+1 });
    if(this.state.isActive > 1){
      this.setState({isActive: 0});
    }
  }
  render() {
    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      let isSelected = ii === this.state.isActive;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }

    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick={() => this.handleClick()}>Toggle</button>
      </div>
    );
  }
}

export default BoardSwitcher;
