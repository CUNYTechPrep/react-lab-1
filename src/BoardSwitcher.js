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
    count: 0,
  };

  handleClick(event){
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      let isSelected = ii === this.state.count;
      if(this.state.count >= this.props.numBoards){
        this.setState({count:0});
      } else{
        boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
      }
    }
    
    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick ={(e) => this.handleClick(e)}>Toggle</button>
      </div>
    );
  }
}

export default BoardSwitcher;
