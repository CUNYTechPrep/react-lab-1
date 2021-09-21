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
      currentBoard : 0
    }
    this.boardCount = this.props.numBoards
  }

  toggleBoards(){
    if(this.state.currentBoard < this.boardCount - 1){
      this.setState({
        currentBoard : this.state.currentBoard + 1
      })
    } else if (this.state.currentBoard === this.boardCount - 1){
      this.setState({
        currentBoard : 0
      })
    }
  }

  render() {
    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      let isSelected = ii === this.state.currentBoard;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }

    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick={() => this.toggleBoards()}>Toggle</button>
      </div>
    );
  }
}

export default BoardSwitcher;
