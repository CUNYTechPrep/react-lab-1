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
  constructor(props){
    super(props);
    this.state = {
      spot: 0,
    };
  }
  
  handleClick(event){
    this.setState({
      spot: (this.state.spot+1)%3
    })
  }
  
  render() {
    let boards = [];  // empty array of boards
    for (let ii = 0; ii < this.props.numBoards; ii++) { // fill the array with n(param) boards
      let isSelected = ii === this.state.spot;  // let the first one be selected
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} /> // returns a 'Board' object with those params
      );
    }

    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick={ (e) => this.handleClick(e) }>Toggle</button>
      </div>
    );
  }
}

export default BoardSwitcher;
