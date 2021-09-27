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
  //created a constructor
  constructor(props){//error to add super(props)
    super(props);
    //initialized state to start at index 0
    this.state = {
      //selectedNum will change based on toggle
      selectedNum: 0
    };
  }

  //function to toggle for click
  toToggle = () => {
    //change state (slectedNum) for index 2 (board 3) to go to index 0 when toggled
    this.setState({
      selectedNum: this.state.selectedNum < 2 ? this.state.selectedNum + 1 : 0
    });
  }
  render() {
     //board array for storing selected
    let boards = [];
     //for loop for iterating through the max number of boards (3)
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      //compares if index i is the 3rd index
      let isSelected = ii === this.state.selectedNum;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }

    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick={this.toToggle}>Toggle</button>
      </div>
    );
  }
}

export default BoardSwitcher;
